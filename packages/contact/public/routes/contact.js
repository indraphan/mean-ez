'use strict';

angular.module('mean').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider
        	.state('contact manager', {
	            url: '/contact/manager',
	            templateUrl: 'contact/views/index.html'
	        })
	        .state('Contact Manager Child link', {
	        	url: '/contact/manager',
	        	templateUrl: 'contact/views/index.html'
	        });
    }
]);
