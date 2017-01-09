class AddIndexToAll < ActiveRecord::Migration[5.0]
  def change
    add_index :tkt_cnt_daywises, :branch_id
    add_index :tkt_cnt_monthwises, :branch_id
    add_index :tkt_cnt_weekwises, :branch_id
    add_index :tkt_cnt_yearwises, :branch_id
    add_index :weekwise_booking_sources, :branch_id
    add_index :weekwise_peekday_weekdays, :branch_id
    add_index :yearwise_booking_sources, :branch_id
    add_index :yearwise_peekday_weekdays, :branch_id

    add_index :tkt_cnt_daywises, :fin_year
    add_index :tkt_cnt_monthwises, :fin_year
    add_index :tkt_cnt_weekwises, :fin_year
    add_index :tkt_cnt_yearwises, :fin_year
    add_index :weekwise_booking_sources, :fin_year
    add_index :yearwise_booking_sources, :fin_year
    add_index :weekwise_peekday_weekdays, :fin_year
    add_index :yearwise_peekday_weekdays, :fin_year

    add_index :weekwise_booking_sources, :booking_src_id
    add_index :yearwise_booking_sources, :booking_src_id
    add_index :monthwise_booking_sources, :booking_src_id

  end
end
