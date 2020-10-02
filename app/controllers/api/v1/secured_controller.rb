
module Api
  module V1
    class SecuredController < ApplicationController
      before_action :authenticate_api_v1_user
      binding.irb
      def index
        render json: {message: "ID: #{current_user.id}, SUB: #{current_user.sub}"}
      end
    end
  end
end
