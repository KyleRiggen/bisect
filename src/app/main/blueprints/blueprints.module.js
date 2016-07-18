(function() {
  'use strict';

  angular
    .module('app.blueprints', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider) {
    // State
    $stateProvider
      .state('app.blueprints', {
        url: '/blueprints',
        views: {
          'content@app': {
            templateUrl: 'app/main/blueprints/blueprints.html',
            controller: 'BlueprintsController as vm'
          }
        }
      });

    // Translation
    $translatePartialLoaderProvider.addPart('app/main/blueprints');

    // Api
    msApiProvider.register('blueprints', ['app/data/sample/sample.json']);

    // Navigation
    msNavigationServiceProvider.saveItem('fuse', {
      title: 'Bisect the title thing',
      group: true,
      weight: 1
    });

    msNavigationServiceProvider.saveItem('fuse.blueprints', {
      title: 'Blueprints',
      icon: 'icon-tile-four',
      state: 'app.blueprints',
      /*stateParams: {
          'param1': 'page'
       },*/
      weight: 1
    });
  }
})();
