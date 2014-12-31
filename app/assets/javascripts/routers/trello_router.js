TrelloClone.Routers.TrelloRouter = Backbone.Router.extend({

  initialize: function (options) {
    this.$rootEl = options.$rootEl;

    $("button.dropdown-toggle").on("click", function (event){
      event.preventDefault();
      this.addBoard(event);
    }.bind(this));
  },

  routes: {
    "": "index",
    "boards/:id": "boardShow"
  },

  index: function (){
    var that = this;
    var callback = function (){
      that.index();
    }

    if (TrelloClone.currentUser) {
      var boards = TrelloClone.currentUser.boards();
      var boardIndexView = new TrelloClone.Views.BoardIndex({
        collection: boards
      });
      this._swapView(boardIndexView);
    } else if (TrelloClone.userId){
      this.fetchCurrentUser(callback);
    }
  },

  boardShow: function (id) {
    var that = this;

    var callback = function (id){
      that.boardShow(id);
    }

    if (TrelloClone.currentUser){
      var board = TrelloClone.currentUser.boards().getOrFetch(id);
      var lists = board.lists();
      var boardView = new TrelloClone.Views.BoardShow({
        model: board, collection: lists
      });
      this._swapView(boardView);
    } else if (TrelloClone.userId){
      this.fetchCurrentUser(callback, id);
    }
  },

  addBoard: function (event){
    event.preventDefault();
    console.log("click");

    var callback = function (){
      this.addBoard();
    }.bind(this);

    if (TrelloClone.currentUser) {
      var newBoardForm = new TrelloClone.Views.newBoardForm();
      $("#sidebar-right").html(newBoardForm.render().$el)
    } else if (TrelloClone.userId){
      this.fetchCurrentUser(callback);
    }

  },

  fetchCurrentUser: function (callback, id) {
    var currentUser = new TrelloClone.Models.User({id: TrelloClone.userId});
    currentUser.fetch({
      success: function (){
        TrelloClone.currentUser = currentUser;
          callback(id);
      }
    });
  },

  _swapView: function (newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(newView.render().$el);
  },


})
