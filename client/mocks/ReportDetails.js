'use strict';
window.mocks = window.mocks || {};
window.mocks.ReportDetails = window.mocks.ReportDetails || {};
window.mocks.ReportDetails.PageBack = function ($scope, params, app) {
    app.go('app.reportslist');
};