Rails.application.routes.draw do
  resources :costsheets
  get 'home/index'
  get 'wonderla' => "home#wonderla"
  get 'red_apple' => "home#red_apple"
  get 'red_apple/look_books' => "home#look_books"
  get 'home/show'
  root to: 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
