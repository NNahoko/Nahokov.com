module Mutations
  class CreateBookinfo < BaseMutation

      graphql_name 'CreateBookinfo'
  
      field :bookinfo, Types::BookinfoType, null: true
      field :result, Boolean, null: true
  
      argument :title, String, required: false
      argument :author, String, required: false
      argument :publisher, String, required: false
  
      def resolve(**args)
       book = Bookinfo.create(title: args[:title], author: args[:author], publisher: args[:publisher])
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
