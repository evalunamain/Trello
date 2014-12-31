json.(@board, :title, :user_id, :created_at, :updated_at)

json.lists do
  json.partial! 'api/lists/list', collection: @board.lists, as: :list
end
