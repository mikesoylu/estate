'use strict';

Estate.module('Listings', function(Listings, App, Backbone) {
  // Model
  Listings.Property = Backbone.Model.extend({
    defaults: {
      created_at: 0
    },
    initialize: function() { }
  });

  // Collection
  Listings.PropertyList = Backbone.Collection.extend({
    model: Listings.Property,
    comparator: function(prop) {
      return prop.get('created_at');
    }
  });
});
