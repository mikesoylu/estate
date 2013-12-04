'use strict';

Estate.module('PropertyList', function(PropertyList, App, Backbone, Marionette, $, _) {
  // Router
  PropertyList.Router = Marionette.AppRouter.extend({
    /*
    appRoutes: {
      '*filter': 'filterItems',
      '*page': 'paginateItems'
    }
    */
  });

  // Controller (Mediator)
  PropertyList.Controller = function() {
    this.propertyList = new App.Listings.PropertyList();
  };

  _.extend(PropertyList.Controller.prototype, {
      start: function() {
        this.showListings(this.propertyList);
        this.propertyList.fetch();
      },

      showListings: function(propertyList) {
        App.main.show(new PropertyList.Views.ListView({
          collection: propertyList
        }));
      }
  });

  // Initializer
  PropertyList.addInitializer(function() {
    var controller = new PropertyList.Controller();
    controller.router = new PropertyList.Router({
      controller: controller
    });

    controller.start();
  });
});
