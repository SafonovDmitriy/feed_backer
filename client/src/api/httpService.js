import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_URL_SERVER,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  (res) => Promise.resolve(res),
  (error) => Promise.reject(error.response)
);

const METHODS_MAP = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
};

export const request = ({ url, method = METHODS_MAP.GET, props = {} }) =>
  instance[method](url, props);

export const requestCancel = ({
  url,
  method = METHODS_MAP.GET,
  cancelToken,
  props,
}) => {
  return method !== METHODS_MAP.GET
    ? instance[method](url, props, { cancelToken: cancelToken.token })
    : instance[method](url, { ...props, cancelToken: cancelToken.token });
};

// /region
export const fetchRegionsApi = () => request({ url: "/region" });

// /city
export const fetchCityApi = (params) =>
  request({ url: `/city/region/${params.idRegion}` });

// /feedback
export const fetchFeedbackApi = () => request({ url: "/feedback" });

export const postFeedbackApi = (props) =>
  request({ url: "/feedback", method: METHODS_MAP.POST, props });

export const putFeedbackApi = (payload) =>
  request({
    url: `/feedback/${payload.id}`,
    method: METHODS_MAP.PUT,
    props: payload.body,
  });

export const deleteFeedbackApi = (id) =>
  request({ url: `/feedback/${id}`, method: METHODS_MAP.DELETE });
