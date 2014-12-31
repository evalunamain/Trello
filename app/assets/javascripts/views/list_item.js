TrelloClone.Views.listItem = Backbone.CompositeView.extend({
  template: JST["lists/listItem"],

  tagName: "li",

  className: "list-item",

  initialize: function (){

    this.listenTo(this.model, "sync", this.render);
  },

  // addListItemSubView: function (listItem) {
  //   var listItemView = new TrelloClone.Views.listItem({
  //     model: listItem});
  //   this.addSubview("ul.board-list", listItemView);
  // },

  events: {

  },

  render: function () {
    var listItemView = this.template({item: this.model});
    this.$el.append(listItemView);
    // this.attachSubviews();
    return this;
  }
})
