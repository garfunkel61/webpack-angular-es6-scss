'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import './app.scss';
import appHtml from './app.html';

angular
    .module('app', ['ui.router'])
    .config(routeConfig);

function routeConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
      url: '/home',
      template: appHtml
    });
}
