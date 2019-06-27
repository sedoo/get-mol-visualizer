require("exports-loader?!./l.min.js")

import Vue from 'vue'

import vueCustomElement from 'vue-custom-element'
Vue.use(vueCustomElement);

import VueI18n from 'vue-i18n'
Vue.use(VueI18n);

import VueResource from 'vue-resource';
Vue.use(VueResource);

import GetMolVisualizer from './get-mol-visualizer/get-mol-visualizer.vue'

ljs.addAliases({
	dep: ['https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
		'https://cdnjs.cloudflare.com/ajax/libs/document-register-element/1.4.1/document-register-element.js'
		]
})

ljs.load('dep', function() {

	
	
	function registerElement(name, component) {
        if (!window.registredAerisElements) {
            window.registredAerisElements = [];
        }
        if (window.registredAerisElements.indexOf(name) < 0) {
            Vue.customElement(name, component);
            window.registredAerisElements.push(name)
        }
    }

	function register() {
			console.info("Start registration of Get mol visualizer components")
			
			registerElement('get-mol-visualizer', GetMolVisualizer);
			
			console.info("Get mol visualizer components registration complete")
	}
	
	register();

	
})
