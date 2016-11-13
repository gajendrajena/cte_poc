class CreateCostsheets < ActiveRecord::Migration[5.0]
  def change
    create_table :costsheets do |t|
      t.integer :booking_id
      t.string :package_id
      t.integer :agent_id
      t.string :packagename
      t.string :cities
      t.string :ratings
      t.string :stay_days
      t.string :pkg_start_date
      t.string :pkg_end_date
      t.integer :noofrooms
      t.integer :noofadults
      t.integer :noofchild
      t.string :create_date
      t.float :total_rate
      t.float :original_rate
      t.string :discount
      t.string :sel_service
      t.string :package_type
      t.float :final_rate
      t.string :agency_name
    end
  end
end
