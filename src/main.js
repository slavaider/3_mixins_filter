import Vue from 'vue'
import App from './App.vue'
import ColorDirective from './components/color'
import Counter from "./components/counter/counter.vue";

Vue.config.productionTip = false


Vue.filter('uppercase', value => value.toUpperCase())

Vue.directive('colored', ColorDirective)

Vue.component('app-counter', Counter)

Vue.mixin({
    beforeCreate() {
        console.log('beforeCreate')
    }
})

export const eventEmitter = new Vue();

new Vue({
    el: '#app',
    render: h => h(App),
});

