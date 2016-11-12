class HomeController < ApplicationController
	require 'json'
  def index
  	render 'dashboard'
  end

  def wonderla
  	render 'wonderla_dashboard'
  end

  def red_apple
  	render 'red_apple_dashboard'
  end

  def look_books
  	@look_books = Costsheet.select("COUNT(booking_id) as boookings, COUNT(*) as quotations, agent_id").group(:agent_id).to_json

	  	render json: @look_books
  	# respond_to do |format|
	  # 	format.json {@look_books}
	  # end
  end
end