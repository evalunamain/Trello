TrelloClone.Collections.Lists = Backbone.Collection.extend({
  initialize: function (models, options){
    this.board = options.board;
  },

  url: "api/lists",

  // toJSON: function (options){
  //   return {list: _clone(this.attributes)};
  // }
})
