class CreateMonthwiseBookingSources < ActiveRecord::Migration[5.0]
  def change
    create_table :monthwise_booking_sources do |t|
      t.integer :branch_id, index: true
      t.integer :fin_year, index: true
      t.string :month
      t.integer :booking_src_id, index: true
      t.integer :tkt_count
    end
  end
end
