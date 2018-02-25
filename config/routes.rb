Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html\
  scope '/api' do
    get :quotes, to: 'quotes#index'
    post :quotes, to: 'quotes#upvote'
    get :characters, to: 'characters#index'
    post :characters, to: 'characters#create'
  end
end
