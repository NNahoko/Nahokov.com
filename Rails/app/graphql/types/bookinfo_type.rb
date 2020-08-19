module Types
  class BookinfoType < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: false
    field :author, String, null: false
    field :publisher, String, null: false
  end
end
