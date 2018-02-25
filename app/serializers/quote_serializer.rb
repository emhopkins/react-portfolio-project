class QuoteSerializer < ActiveModel::Serializer
  attributes :id, :text, :votes
  belongs_to :character
end
