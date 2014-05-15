'use strict';

var viewContactModalCtrl = function($scope, $modalInstance, contact) {  
    $scope.allheaders = ['Name', 'Phone', 'Email', 'Facebook', 'Twitter', 'Skype'];
    $scope.contact = contact.data;

    $scope.close = function() {
        $modalInstance.dismiss('cancel');
    };
};

var addContactModalCtrl = function($scope, $modalInstance, $window, ContactFactory) {
    $scope.form = {};

    $scope.addContact = function() {
        ContactFactory.addContact($scope.form.add).success(function(data) {
            $modalInstance.close($window.location.reload());
        });
    };

    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
};

var editContactModalCtrl = function($scope, $modalInstance, $window, contact, ContactFactory) {
    $scope.form = {};
    $scope.form.edit = contact.data;
    $scope.name = contact.data.name;

    $scope.editContact = function() {
        ContactFactory.updateContact(contact.data._id, $scope.form.edit).success(function() {
            $modalInstance.close($window.location.reload());
        });
    };

    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
};

var deleteContactModalCtrl = function($scope, $modalInstance, $window, contact, ContactFactory) {
    $scope.name = contact.data.name;

    $scope.deleteContact = function() {
        ContactFactory.deleteContact(contact.data._id).success(function() {
            $modalInstance.close();
            ContactFactory.getContacts().success(function(contacts){
                $scope.contacts = contacts;
            });
            $window.location.reload();
        });
    };

    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
};

angular.module('mean').controller('ContactController', ['$scope', '$modal', 'Global', 'ContactFactory',
    function($scope, $modal, Global, ContactFactory) {
        $scope.global = Global;
        $scope.contact = {
            name: 'contact'
        };

        $scope.headers = ['Name', 'Phone', 'Email', ''];
        $scope.columnSort = { sortColumn: 'name', reverse: false };

        ContactFactory.getContacts().success(function(contacts) {
        	$scope.contacts = contacts;
        });

        $scope.view = function(c) {
            var id = c._id;
            $modal.open({
                templateUrl: 'viewContactModal',
                controller: viewContactModalCtrl,
                resolve: {
                    contact: function() {
                        return ContactFactory.getContact(id);
                    }
                }
            });
        };

        $scope.add = function() {
            $modal.open({
                templateUrl: 'addContactModal',
                controller: addContactModalCtrl
            });
        };

        $scope.edit = function(c) {
            var id = c._id;
            $modal.open({
                templateUrl: 'editContactModal',
                controller: editContactModalCtrl,
                resolve: {
                    contact: function() {
                        return ContactFactory.getContact(id);
                    }
                }
            });
        };

        $scope.delete = function(c) {
            var id = c._id;
            $modal.open({
                templateUrl: 'deleteContactModal',
                controller: deleteContactModalCtrl,
                resolve: {
                    contact: function() {
                        return ContactFactory.getContact(id);
                    }
                }
            });
        };
    }
]);

