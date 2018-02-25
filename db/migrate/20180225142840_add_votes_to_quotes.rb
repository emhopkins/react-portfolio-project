class AddVotesToQuotes < ActiveRecord::Migration[5.1]
  def change
    add_column :quotes, :votes, :integer
  end
end
