class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :quotes

end
