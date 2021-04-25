import DyImg from './src/dy-img.vue';
// components
// import ImgView from '@hui-pro/img-view';

const install = function (Vue) {
  Vue.component(DyImg.name, DyImg);
  // Vue.use(ImgView);
};

export default {
  install
};
