class CreateQuotes < ActiveRecord::Migration[5.1]
  def change
    create_table :quotes do |t|
      t.string :text
      t.integer :character_id

      t.timestamps
    end
  end
end
