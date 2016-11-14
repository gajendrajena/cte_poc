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
end