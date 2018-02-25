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

  def upvote
    quote = Quote.find(quote_params[:id])
    if quote.votes.nil?
      quote.votes = 1
    else
      quote.votes += 1
    end
    quote.save!
    render(
      status: 200,
      json: quote
    )
  end

  def quote_params
    params.require(:quote)
  end
end
