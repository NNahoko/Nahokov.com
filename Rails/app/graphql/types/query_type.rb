module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.
    
  #Types::QueryType = GraphQL::ObjectType.define 

  field :posts, [Types::PostType], null: false
  def posts
    Post.all
  end

  field :post, Types::PostType, null: false do
    argument :id, Int, required: false
  end
  def post(id:)
    Post.find(id)
  end

  field :bookinfos, [Types::BookinfoType], null: false
  def bookinfos
    Bookinfo.order(id: "DESC")
  end

  field :bookinfo, Types::BookinfoType, null: false do
    argument :id, Int, required: false
  end
  def bookinfo(id:)
    Bookinfo.find(id)
  end

  field :tasks, [Types::TaskType], null: false
  def tasks
    Task.order(id: "DESC")
  end

  field :task, Types::TaskType, null: false do
    argument :id, Int, required: false
  end
  def task(id:)
    Task.find(id)
  end

    # TODO: remove me
    #field :test_field, String, null: false,
    #  description: "An example field added by the generator"
    #def test_field
    #  "Hello World!"
    #end
    
  end
end
