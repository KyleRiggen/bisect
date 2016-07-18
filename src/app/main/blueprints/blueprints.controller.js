(function() {
  'use strict';

  angular
    .module('app.blueprints')
    .controller('BlueprintsController', BlueprintsController);

  /** @ngInject */
  function BlueprintsController() {
    var vm = this;

    // Data
    vm.helloText = "Hello Blueprints!";

    // Methods

    //////////
  }
})();
