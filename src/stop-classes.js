/** 
 * stop-classes - Adds timed stop classes to website.
 * Copyright 2019 Cristian Antonio Gonzalez Cienfuegos All Rights Reserved
 * Website: http://d4all.mx/libraries/stop-classes
 * Version 1.0 
 */
(function($) {
  "use strict";

  /**
   * SC class: stop classes setup.
   */
  var sc = function(options) {

    /**
     * Can access this.method
     * inside other methods using
     * root.method()
     */
    var root = this;

    /**
     * Constructor
     */
    this.construct = function(options){
      $.extend(vars, options);
    };
 
    /**
     * Adds stop class.
     */
    this.addStopClass = function (time) {
      $('html').addClass('stop-' + time);
    }

    /**
     * Adds stop class timmed.
     */
    this.addStopClassTimmeout = function (time) {
      setTimeout(root.addStopClass.bind(this), time, time);
    }

    /**
     * Adds stop classes.
     */
    this.addStopClasses = function () {
      root.addStopClassTimmeout(250);
      root.addStopClassTimmeout(500);
      root.addStopClassTimmeout(750);
      root.addStopClassTimmeout(1000);
      root.addStopClassTimmeout(1250);
    }

    /**
     * Init script.
     */
    this.init = function () {
      root.addStopClasses();
    }
  }

  /**
   * Initializes mod class.
   */
  window.sc = new sc();
  window.sc.init();

}(jQuery));
