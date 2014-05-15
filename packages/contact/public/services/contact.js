'use strict';

//Articles service used for articles REST endpoint
angular.module('mean').factory('ContactFactory', ['$http',
	function($http) {
		return {
	      addContact: function(contact) {
	        return $http.post('/contacts/', contact); 
	      },
	      getContacts: function() {
	        return $http.get('/contacts/');
	      },
	      getContact: function(id) {
	        return $http.get('/contacts/' + id);
	      },
	      updateContact: function(id, contact) {
	        return $http.put('/contacts/' + id, contact);
	      },
	      deleteContact: function(id) {
	        return $http.delete('/contacts/' + id);
	      }
	    };
	}
]);
