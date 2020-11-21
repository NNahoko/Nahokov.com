
require 'rails_helper'

RSpec.describe Types::TaskType do
  describe 'tasks' do
    FactoryBot.create(:task)
    it 'loads tasks' do
      query_string = <<-GRAPHQL
     {
     tasks {
      id
      task
      limit
      }
    }

      GRAPHQL

     # puts query_string
       result = BookSchema.execute(query_string, context: {}, variables: {})
       puts result.inspect
      # puts result['data']['tasks'][0]['task']
       assert_equal 1, result['data']['tasks'].size
       assert_equal "test", result['data']['tasks'][0]['task']
    end
  end
end
