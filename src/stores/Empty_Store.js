/*eslint-disable strict */ //just boilerplate code for a store

"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var CHANGE_EVENT = 'change';

var EmptyStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  }
});

Dispatcher.register(function(action) {
  switch(action.actionType) {
    default:
      break;
  }
});

module.exports = EmptyStore;
