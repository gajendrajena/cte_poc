class HomeController < ApplicationController
  require 'json'

  def index
    render 'dashboard'
  end

  def wonderla
    @years = TktCntYearwise.fin_years
    render 'wonderla_dashboard'
  end

  def red_apple
    render 'red_apple_dashboard'
  end

  def wonderla_tkt_vs_time
    if params[:time].blank?
      @yearly_data = TktCntYearwise.yearly_data
    end

    render json: @yearly_data.to_json, status: 200
  end

end