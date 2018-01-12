angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.blank', {
        views: {
            app: {
                controller: 'app_blank',
                templateProvider: function (app) {
                    return app.templateProvider('app.blank');
                }
            }
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.reportslist', {
        views: {
            app: {
                controller: 'app_reportslist',
                templateProvider: function (app) {
                    return app.templateProvider('app.reportslist');
                }
            }
        }
    }).state('app.reportdetails', {
        views: {
            app: {
                controller: 'app_reportdetails',
                templateProvider: function (app) {
                    return app.templateProvider('app.reportdetails');
                }
            }
        }
    }).state('app.userprofilecool', {
        views: {
            app: {
                controller: 'app_userprofilecool',
                templateProvider: function (app) {
                    return app.templateProvider('app.userprofilecool');
                }
            }
        }
    }).state('app.detailsviewcool', {
        views: {
            app: {
                controller: 'app_detailsviewcool',
                templateProvider: function (app) {
                    return app.templateProvider('app.detailsviewcool');
                }
            }
        }
    }).state('app.reportissue', {
        views: {
            app: {
                controller: 'app_reportissue',
                templateProvider: function (app) {
                    return app.templateProvider('app.reportissue');
                }
            }
        }
    });
});