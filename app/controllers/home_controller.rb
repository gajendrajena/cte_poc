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

  def wonderla_data
    params[:time] |= 'yearly'
    @yearly_data = TicketVsTime.get_data(time: params[:time], branch: params[:branch])

    render json: @yearly_data
  end

end