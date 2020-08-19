module Types
  class MutationType < Types::BaseObject
    field :delete_task, mutation: Mutations::DeleteTask
    field :update_bookinfo, mutation: Mutations::UpdateBookinfo
    field :update_task, mutation: Mutations::UpdateTask
    field :create_task, mutation: Mutations::CreateTask
    field :delete_bookinfo, mutation: Mutations::DeleteBookinfo
    field :delete_post, mutation: Mutations::DeletePost
    field :create_post, mutation: Mutations::CreatePost
    field :create_bookinfo, mutation: Mutations::CreateBookinfo
    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World"
    end
  end
end
