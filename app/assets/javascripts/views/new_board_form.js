TrelloClone.Views.newBoardForm = Backbone.View.extend({
  template: JST["boards/new_form"],

  tagName: "form",

  className: "new-board",

  render: function (){
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  events: {
    "submit":"createBoard"
  },

  createBoard: function (event){
    event.preventDefault();
    var formData = this.$el.serializeJSON().board;
    var board = new TrelloClone.Models.Board();
    board.save(formData, {
      success: function (){
        TrelloClone.currentUser.boards().add(board);
        this.remove();
      }.bind(this)
    })
  }
})
