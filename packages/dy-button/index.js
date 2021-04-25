import DyButton from './src/dy-button.vue';
// components
// import ImgView from '@hui-pro/img-view';

const install = function (Vue) {
  Vue.component(DyButton.name, DyButton);
  // Vue.use(ImgView);
};

export default {
  install
};
