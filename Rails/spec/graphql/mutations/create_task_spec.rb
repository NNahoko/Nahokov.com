require 'rails_helper'

RSpec.describe CreateTask, type: :request do
  describe 'resolver' do
    it 'taskが作成されていること' do
      mutation = CreateTask.new(field: nil, object: nil, context:{})
      mutation.resolve(id: [作成するuser_id])
      expect(..).to eq ..
    end
