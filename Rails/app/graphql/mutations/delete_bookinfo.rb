module Mutations
  class DeleteBookinfo < BaseMutation
    graphql_name 'DeleteBookinfo'

    field :bookinfo, Types::BookinfoType, null: true
    field :result, Boolean, null: true

    argument :id, ID, required: true

    def resolve(**args)
      book = Bookinfo.find(args[:id])
      book.destroy
      {
        bookinfo: book,
        result: book.errors.blank?
      }
    end
  end
end


 # TODO: define return fields
    # field :post, Types::PostType, null: false

    # TODO: define arguments
    # argument :name, String, required: true

    # TODO: define resolve method
    # def resolve(name:)
    #   { post: ... }
    # end