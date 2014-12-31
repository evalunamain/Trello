json.(list, :board_id, :title, :ord, :created_at, :updated_at)

json.cards do
  json.partial! 'api/cards/card', collection: list.cards, as: :card
end
