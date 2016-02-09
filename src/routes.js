"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
  <Route name="app" path="/" handler={require('./components/app')}>
    <DefaultRoute handler={require('./components/homePage')} />
    <Route name="authors" handler={require('./components/authors/authorPage')} />
    <Route name="addAuthor" path="author" handler={require('./components/authors/manageAuthorPage')} />
    <Route name="manageAuthor" path="author/:id" handler={require('./components/authors/manageAuthorPage')} /> //use placeholder to access by name, react-router will inject id
    <Route name="courses" handler={require('./components/courses/coursePage')} />
    <Route name="manageCourse" path="course/:id" handler={require('./components/courses/manageCoursePage')} />
    <Route name="about" handler={require('./components/about/aboutPage')} />
    <NotFoundRoute handler={require('./components/notFoundPage')} />
    <Redirect from="about-us" to="about" /> //old link to new link
    <Redirect from="awthurs" to="authors" /> //typos
    <Redirect from="about/*" to="about" /> //wildcard
  </Route>
);

module.exports = routes;
