module Mutations
  class UpdateTask < BaseMutation

    graphql_name 'UpdateTask'

    field :task, Types::TaskType, null: true
    field :result, Boolean, null: true

    argument :id, ID, required: true
    argument :task, String, required: false
    argument :limit, GraphQL::Types::ISO8601Date, required: false

    def resolve(**args)
      task = Task.find(args[:id])
      task.update(task: args[:task], limit: args[:limit])
      {
        task: task,
        result: task.errors.blank?
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
