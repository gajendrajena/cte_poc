class CostsheetsController < ApplicationController
  # GET /costsheets
  # GET /costsheets.json
  def index
    @look_books = Costsheet.joins(:agent).select("COUNT(costsheets.booking_id) as bookings, COUNT(costsheets.*) as quotations, ROUND(100.0 * ( COUNT(costsheets.booking_id) / COUNT(costsheets.*)), 2) as ratio, agents.agency_name")
    .where('costsheets.agent_id = agents.id')
    .group('costsheets.agent_id, agents.agency_name')
    .to_json(only:[:bookings, :quotations, :ratio, :agency_name])
    render json: @look_books
  end
end
