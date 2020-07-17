import ComponentA from './components/ComponentA.vue';
import ComponentB from './components/ComponentB.vue';

const Components: any = {
  ComponentA,
  ComponentB,
};

const Install: any = (Vue: any, options: any = {}) => {

  Object.keys(Components).forEach((component) => {
    Vue.component(component, Components[component]);
  });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {

  Install(window.Vue);
}

export default Install;
