class ProductsController < ApplicationController

    def index
        @product = Bookinfo.select(:title, :id, :author).all
        render json: @product
      end
    
      
end
