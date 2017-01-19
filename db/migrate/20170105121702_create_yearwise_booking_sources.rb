class CreateYearwiseBookingSources < ActiveRecord::Migration[5.0]
  def change
    create_table :yearwise_booking_sources do |t|
      t.integer :branch_id, index: true
      t.integer :fin_year, index: true
      t.integer :booking_src_id, index: true
      t.integer :tkt_count
    end
  end
end
