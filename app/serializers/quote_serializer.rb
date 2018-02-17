class QuoteSerializer < ActiveModel::Serializer
  attributes :id, :text
  belongs_to :character
end
