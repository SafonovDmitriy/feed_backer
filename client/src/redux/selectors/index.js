export const citiesSelector = (state) => state.city.data;
export const isEmptyCitiesSelector = (state) => !state.city.data.length;
export const citiesLoadedSelector = (state) => state.city.loaded;

export const feedbacksSelector = (state) => state.feedback.data;
export const feedbacksLoadedSelector = (state) => state.feedback.loaded;

export const regionsSelector = (state) => state.region.data;
export const isEmptyRegionsSelector = (state) => !state.region.data.length;
export const regionsLoadedSelector = (state) => state.region.loaded;
