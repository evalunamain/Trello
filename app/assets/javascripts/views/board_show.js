TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST["boards/show"],

  className: "board",

  initialize: function (){
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "sync", this.render);
  },

  addListSubView: function (list) {
    var listView = new TrelloClone.Views.boardListView({
      model: list, collection: list.cards()
    });
    this.addSubview("ul.board", listView);
  },

  events: {

  },

  render: function (){
    this.$el.empty();
    var boardView = this;
    
    this.collection.each(function (list) {
      boardView.addListSubView(list);
    });

    var boardContent = this.template({board: this.model});
    this.$el.append(boardContent);
    this.attachSubviews();
    return this;
  },


})
