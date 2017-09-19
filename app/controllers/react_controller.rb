class ReactController < ApplicationController
	def index
      	render :file => 'frontend/public/index.html', :layout => false
  	end
end
