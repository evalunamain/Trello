TrelloClone.Views.boardListView = Backbone.CompositeView.extend({
  template: JST["lists/boardItem"],

  tagName: "ul",

  className: "board-list",

  initialize: function (){

    var listView = this;
    this.collection.each(function (listItem) {
      listView.addListItemSubView(listItem);
    });
    console.log("making new list view");

    this.listenTo(this.model, "sync", this.render);
  },

  addListItemSubView: function (listItem) {
    var listItemView = new TrelloClone.Views.listItem({
      model: listItem});
    this.addSubview("ul.board-list", listItemView);
  },

  events: {

  },

  render: function () {
    var listView = this.template({list: this.model});
    this.$el.append(listView);
    this.attachSubviews();
    return this;
  }
})
