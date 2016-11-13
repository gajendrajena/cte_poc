class CostsheetsController < ApplicationController
  # GET /costsheets
  # GET /costsheets.json
  def index
    @look_books = Costsheet.select("COUNT(booking_id) as bookings, COUNT(*) as quotations, ROUND(100.0 * ( COUNT(booking_id) / COUNT(*)), 2) as ratio, agent_id")
    .group(:agent_id)
    .to_json(only:[:bookings, :quotations, :ratio, :agent_id])
    render json: @look_books
  end
end
