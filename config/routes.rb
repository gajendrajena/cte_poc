Rails.application.routes.draw do
  resources :costsheets, only:[:index]
  get 'home/index'
  get 'wonderla' => "home#wonderla"
  get 'red_apple' => "home#red_apple"
  get 'wonderla_data' => "home#wonderla_data"
  get 'home/show'
  root to: 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
