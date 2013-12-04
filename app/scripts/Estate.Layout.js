'use strict';

TodoMVC.module('Layout', function (Layout, App, Backbone) {
        // Layout Footer View
        Layout.Agency = Backbone.Marionette.ItemView.extend({
                template: '#template-footer',

                collectionEvents: {
                        'all': 'render'
                },
                serializeData: function () {
                        var total = this.collection.length;

                        return {
                                totalCount: total,
                        };
                },
                onRender: function () {
                }
        });
});
