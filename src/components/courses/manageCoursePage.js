"use strict";

var React = require('react');
var CourseForm = require('./courseForm');
var CourseStore = require('../../stores/courseStore');
var toastr = require('toastr');

var MangeCoursePage = React.createClass({
  statics: {
    willTransitionFrom: function(transition, component) {
      if(component.state.dirty && !confirm('Leave without saving?')) {
          transition.abort();
      }
    }
  },

  getInitialState: function() {
    return {
      course: {id: '', title: '', watchHref: '', author: {id: '', name: ''}, length: '', category: '' },
      errors: {},
      dirty: false
    };
  },

  componentWillMount: function() {
    var courseId = this.props.params.id; //from the path 'course:id'

    if (courseId) {
      this.setState({course: CourseStore.getCourseById(courseId)});
    }
  },

  courseFormIsValid: function() {
    var formIsValid = true;
    this.state.errors = {}; //clear any previously errors.

    if (this.state.course.title.length < 3) {
      this.state.errors.title = 'Title must be at least 3 characters.';
      formIsValid = false;
    }

    if (this.state.course.watchHref.length < 3) {
      this.state.errors.watchHref = 'Link must be at least 3 characters.';
      formIsValid = false;
    }

    this.setState({errors: this.state.errors});
    return formIsValid;
  },

  saveCourse: function(event) {
    event.preventDefault();

    if (!this.courseFormIsValid()) {
      return;
    }

    this.setState({dirty: false});
    toastr.success('We didn\'t do anything!!');
    this.transitionTo('courses');
  },

  render: function() {
    return (
      <CourseForm
        course={this.state.course}
        onSave={this.saveCourse}
        errors={this.state.errors} />
    );
  }
});

module.exports = MangeCoursePage;
