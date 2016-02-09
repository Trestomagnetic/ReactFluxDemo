"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var CourseApi = require('../api/courseApi');
var ActionTypes = require('../constants/actionTypes');

var InitializeActions = {
  initApp: function() {
    Dispatcher.dispatch({
      actionType: ActionTypes.INITIALIZE,
      initialData: {
        authors: AuthorApi.getAllAuthors(), //put your promises or callbacks here
        courses: CourseApi.getAllCourses()
      }
    });
  }
};

module.exports = InitializeActions;
