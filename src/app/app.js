'use strict';

// external libraries
import angular from 'angular';
import uiRouter from 'angular-ui-router';

// static assets
import logo from './img/logo.png';

// application files
import './app.scss';
import appHtml from './app.html';

angular
    .module('app', ['ui.router'])
    .config(routeConfig);

function routeConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
      url: '/home',
      template: appHtml,
      controllerAs: 'homeCtrl',
      controller: function () {
        this.logo = logo;
      }
    });
}
