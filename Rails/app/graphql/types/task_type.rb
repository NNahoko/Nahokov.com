module Types
  class TaskType < Types::BaseObject
    field :id, ID, null: false
    field :task, String, null: false
    field :limit,  GraphQL::Types::ISO8601Date, null: true
  end
end
