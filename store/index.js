export const state = () => ({
  locales: ['en', 'fr'],
  locale: 'en',
  skeleton: null,
  page_loading: false,
});

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
  
  UPDATE_SKELETON(state, data) {
    state.skeleton = data;
  },
  
  UPDATE_LOADING(state, data) {
    state.page_loading = data;
  }
};
