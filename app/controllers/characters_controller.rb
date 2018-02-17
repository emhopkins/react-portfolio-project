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

  def create
    c = Character.create(character_params)
    render(
      status: 200,
      json: c
    )
  end

  def character_params
    params.require(:character).permit(:name)
  end

end
