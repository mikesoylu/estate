'use strict';

Estate.module('AgencyList.Views', function (Views, App, Backbone, Marionette, $) {
  // Item View
  Views.ItemView = Marionette.ItemView.extend({
    tagName: 'li',
    template: '#template-todoItemView',

    modelEvents: {
      'change': 'render'
    },

    onRender: function () {
    },

    destroy: function () {
      this.model.destroy();
    }
  });

  // Item List View
  Views.ListView = Backbone.Marionette.CompositeView.extend({
    template: '#template-todoListCompositeView',
    itemView: Views.ItemView,
    itemViewContainer: '#todo-list',

    collectionEvents: {
      'all': 'update'
    },

    onRender: function () {
    }
  });
});
