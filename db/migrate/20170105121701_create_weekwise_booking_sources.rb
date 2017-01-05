class CreateWeekwiseBookingSources < ActiveRecord::Migration[5.0]
  def change
    create_table :weekwise_booking_sources do |t|
      t.integer :branch_id
      t.integer :fin_year
      t.string :month
      t.string :week
      t.integer :booking_src_id
      t.integer :tkt_count
    end
  end
end
