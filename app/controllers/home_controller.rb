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
    @data, categories = if params[:time].blank?
      [TktCntYearwise.yearly_data, TktCntYearwise.fin_years.collect{|v| v[0]}]
    elsif params[:time]
      [TktCntMonthwise.monthly_data(params[:time]), TktCntMonthwise.month(params[:time])]
    end

    render json: {chart_data: @data.to_json, categories: categories}, status: 200
  end

end