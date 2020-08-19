module Mutations
  class CreateTask < BaseMutation
  
    graphql_name 'CreateTask'
  
    field :task, Types::TaskType, null: true
    field :result, Boolean, null: true

    argument :task, String, required: false
    argument :limit, GraphQL::Types::ISO8601Date, required: false

    def resolve(**args)
     task = Task.create(task: args[:task], limit: args[:limit])
      {
        task: task,
        result: task.errors.blank?
      }
    end
    
    
  end
end

#graphql_name 'CreateTask'
  
#    field :task, Types::TaskType, null: true
#   field :result, Boolean, null: true

#    argument :task, String, required: false
#    argument :limit,  Types::ISO8601Date, required: false

#   def resolve(**args)
#    task = Task.create(task: args[:task], limit: args[:limit])
#     {
#       task: task,
#       result: task.errors.blank?
#     }
