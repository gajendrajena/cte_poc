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

  def peakday_weekday
    if params[:time].blank?
      data = YearwisePeekdayWeekday.yearwise(params[:branch])
    elsif params[:time]
      data = MonthwisePeekdayWeekday.monthly_data(params[:time], params[:branch])
    end
    render json: data.to_json, status: 200
  end

  def wonderla_tkt_vs_source
    @data, categories, title = if params[:time].blank?
      [YearwiseBookingSource.yearly_data(params[:branch]), YearwiseBookingSource.fin_years.collect{|v| v[0]}, '']
    elsif params[:time]
      [MonthwiseBookingSource.monthly_data(params[:time], params[:branch]), MONTHS, format_year(params[:time])]
    end

    render json: {chart_data: @data.to_json, categories: categories, title: title}, status: 200
  end  

  private

  def format_year(year)
    " : " + year.to_s.slice(0,4) + '-' + year.to_s.slice(4,4)
  end

end