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
    @data = if params[:time].blank?
      TktCntYearwise.yearly_data(params[:branch])
    elsif params[:time]
      TktCntMonthwise.monthly_data(params[:time], params[:branch])
    end

    render json: @data, status: 200
  end

end