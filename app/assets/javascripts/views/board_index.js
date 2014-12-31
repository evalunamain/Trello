TrelloClone.Views.BoardIndex = Backbone.View.extend({
  tagName: "ul",

  template: JST["boards/index"],

  initialize: function (){
    this.listenTo(this.collection, "sync add", this.render)
  },

  render: function (){
    console.log("rendering");
    this.$el.empty();
    console.log(this.collection.length);
    var content = this.template({boards: this.collection});
    this.$el.html(content);
    return this;
  },

  events: {

  },

})
