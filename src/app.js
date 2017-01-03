import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngresource from 'angular-resource';

import routing from './app.config.js';

import people from './modules/people';

angular.module('app', [
    uirouter,
    ngresource,
    people
])
    .config(routing);

angular.bootstrap(document, ['app']);