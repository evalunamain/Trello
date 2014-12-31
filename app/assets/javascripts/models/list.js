TrelloClone.Models.List = Backbone.Model.extend({

  cards: function () {
    if (!this._cards){
      this._cards = new TrelloClone.Collections.Cards([], {list: this})
    }

    return this._cards;
  },

  parse: function (response){
    var board = this;

    if (response.cards){
      console.log(response);
      board.cards().set(response.cards, {parse: true});
      delete response.cards;
    }

    return response;
  }
})
