class QuotesController < ApplicationController

  def index
    q = params[:q]

    if q.blank?
      # render status: 400, json: { error: 'Expected parameter `q` '}
      q = ""
      render(
        status: 200,
        json: Quote.where(["text LIKE ?", "%#{q}%"]).limit(100)
      )
    else
      render(
        status: 200,
        json: Quote.where(["text LIKE ?", "%#{q}%"]).limit(100)
      )
    end
  end
end
