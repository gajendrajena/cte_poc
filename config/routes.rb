Rails.application.routes.draw do
  devise_for :users
  resources :costsheets, only:[:index]
  get 'home/index'
  get 'wonderla_tkt_vs_time' => "home#wonderla_tkt_vs_time"
  get 'peakday_weekday' => "home#peakday_weekday"
  get 'wonderla_tkt_vs_source' => "home#wonderla_tkt_vs_source"
  get 'grpup_wise' => "home#grpup_wise"
  get 'home/show'
  root to: 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
