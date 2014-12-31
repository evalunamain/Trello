TrelloClone.Views.card = Backbone.CompositeView.extend({
  template: JST["cards/card"],

  tagName: "li",

  className: "list-card",

  initialize: function (){
    this.listenTo(this.model, "sync", this.render);
  },


  events: {

  },

  render: function () {
    console.log("rendering card");
    var cardView = this.template({card: this.model});
    this.$el.append(cardView);
    return this;
  }
})
