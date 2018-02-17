class CharactersController < ApplicationController

  def index
    q = params[:q]

    if q.blank?
      # render status: 400, json: { error: 'Expected parameter `q` '}
      q = ""
      render(
        status: 200,
        json: Character.where(["name LIKE ?", "%#{q}%"]).limit(100)
      )
    else
      render(
        status: 200,
        json: Character.where(["name LIKE ?", "%#{q}%"]).limit(100)
      )
    end
  end

end
