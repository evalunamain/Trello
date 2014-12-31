TrelloClone.Views.boardListView = Backbone.CompositeView.extend({
  template: JST["lists/boardItem"],

  tagName: "li",

  className: "board-list",

  initialize: function (){
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "sync", this.render);
  },

  addListItemSubView: function (card) {
    var cardView = new TrelloClone.Views.card({
      model: card});
    this.addSubview("ul.board-list", cardView);
  },

  events: {

  },

  render: function () {
    var listView = this;

    this.collection.each(function (card) {
      listView.addListItemSubView(card);
    });

    var listView = this.template({list: this.model});
    this.$el.append(listView);
    this.attachSubviews();
    return this;
  }
})
