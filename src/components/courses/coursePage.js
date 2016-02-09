"use strict";

var React = require('react');
var Router = require('react-router');
//var CourseActions = require('../../actions/courseActions');
var CourseStore = require('../../stores/courseStore');
var CourseList = require('./courseList');

var CoursePage = React.createClass({
  getInitialState: function(){
    return {
      courses: CourseStore.getAllCourses()
    };
  },

  render: function() {
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={this.state.courses} />
      </div>
    );
  }
});

module.exports = CoursePage;
