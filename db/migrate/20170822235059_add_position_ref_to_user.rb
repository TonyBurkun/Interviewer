class AddPositionRefToUser < ActiveRecord::Migration[5.1]
  def change
    add_reference :users, :position, foreign_key: true
  end
end
