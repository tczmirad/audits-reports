'use strict';
window.mocks = window.mocks || {};
window.mocks.Landing = window.mocks.Landing || {};
window.mocks.Landing.Reports_Click = function ($scope, params, app) {
    app.go('app.reportdetails');
};