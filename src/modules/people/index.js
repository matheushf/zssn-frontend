import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngresource from 'angular-resource';

import routing from './routes.js';
import PeopleController from './controller.js';

export default angular.module('app.people', [
    uirouter,
    ngresource
])
    .config(routing)
    .controller('PeopleController', PeopleController)
    .name;