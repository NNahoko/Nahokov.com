module Mutations
  class UpdateBookinfo < BaseMutation

    graphql_name 'UpdateBookinfo'

    field :bookinfo, Types::BookinfoType, null: true
    field :result, Boolean, null: true
    
    argument :id, ID, required: true
    argument :title, String, required: false
    argument :author, String, required: false
    argument :publisher, String, required: false

    def resolve(**args)
      book = Bookinfo.find(args[:id])
      book.update(title: args[:title], author: args[:author], publisher: args[:publisher])
      {
          bookinfo: book,
          result: book.errors.blank?
      }
    end
    # TODO: define return fields
    # field :post, Types::PostType, null: false

    # TODO: define arguments
    # argument :name, String, required: true

    # TODO: define resolve method
    # def resolve(name:)
    #   { post: ... }
    # end
  end
end
