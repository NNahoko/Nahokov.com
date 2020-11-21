#require 'rails_helper'

#user_type = BookSchema.types['Task']
#user = FactoryBot.create(:task, task: 'test')
#expect(task.fields['task'].resolve(task, nil, nil)).to eq 'test' # nameフィールドが正しい値を取得できるかのテスト


require 'rails_helper'

RSpec.describe Types::TaskType do
  describe 'tasks' do
    it 'loads tasks' do
      query_string = <<-GRAPHQL
     {
     task(id:10) {
      id
      task
      limit
      }
    }

      GRAPHQL

     # puts query_string
       result = BookSchema.execute(query_string, context: {}, variables: {})
      # puts result.inspect
      # puts result['data']['task']['task']
      # assert_equal 3, result['data']['task'].size
       assert_equal "test", result['data']['task']['task']
      # expect(result[:data][:task][:task]).to eq "test"
    end
  end
end


=begin
 require 'rails_helper'

 RSpec.describe 'task query', type: :request do
   subject { task graphql_path, params: { query: query } }

   let!(:task) { FactoryBot.create(:task) }

   let(:query) do
     <<~QUERY
       {
         tasks {
           id
           task
           limit
         }
       }
     QUERY
   end
#
#   # result = BookSchema.execute(query_string, context: {}, variables: {})
#   # puts result.inspect
#   #
#   assert_equal 2, result['data']['tasks'].size
#

    it 'response body is Task data' do
     puts query
     subject
     json = JSON.parse(response.body, symbolize_names: true)
    # expect(json[:data][:task][:id]).to eq task.id
    # expect(json[:data][:task][:task]).to eq task.task
     expect(json[:data][:task][:task]).to eq "test"
    # expect(json[:data][:task][:limit]).to eq task.limit
      end
 end
=end
