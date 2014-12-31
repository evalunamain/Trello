TrelloClone.Collections.Boards = Backbone.Collection.extend({
  url: "api/boards",

  model: TrelloClone.Models.Board,

  getOrFetch: function (id) {
    var board = this.get(id);
    var boards = this;

    if (board) {
      board.fetch()
    } else {
      console.log("adding board");
      board = new TrelloClone.Models.Board({ id: id});
      board.fetch({
        success: function (){
          boards.add(board);
        }
      });
    }

    return board;
  },

  comparator: function(board) {
    return String.fromCharCode.apply(String,
      _.map(board.get('created_at').split(""), function (c) {
        return 0xffff - c.charCodeAt();
      })
    );
  }
})
