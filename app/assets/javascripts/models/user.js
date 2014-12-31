TrelloClone.Models.User = Backbone.Model.extend({
  urlRoot: "users",

  boards: function () {
    if (!this._boards){
      this._boards = new TrelloClone.Collections.Boards([], {user: this})
    }

    return this._boards;
  },

  parse: function (response){
    var user = this;

    if (response.boards){
      user.boards().set(response.boards, {parse: true});
      delete response.boards;
    }

    return response
  }
});
