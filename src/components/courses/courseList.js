"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var toastr = require('toastr');

var CourseList = React.createClass({
  propTypes: {
    courses: React.PropTypes.array.isRequired
  },

  render: function() {
    var createCourseRow = function(course) {
      return (
        <tr key={course.id}>
          <td><Link to="manageAuthor" params={{id: course.author.id}}>{course.author.name}</Link></td>
          <td><Link to="manageCourse" params={{id: course.id}}>{course.title}</Link></td>
          <td><a href={course.watchHref} target="_blank">watch now</a></td>
          <td>{course.length}</td>
          <td>{course.category}</td>
        </tr>
      );
    };

    return (
      <div>
        <table className="table">
          <thead>
            <th>Author</th>
            <th>Title</th>
            <th></th>
            <th>Length</th>
            <th>Category</th>
          </thead>
          <tbody>
            {this.props.courses.map(createCourseRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = CourseList;
