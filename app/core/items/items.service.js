'use strict';

angular.module('core.items').
  factory('Item', ['$resource',function($resource) {
      
      return $resource('http://localhost:8080/rest/:address', null, {
            'saveItem': { method: 'PUT'},
            'removeItem': { method: 'POST'}
      });
      
    }
]);
