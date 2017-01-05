class CreateTktCntMonthwises < ActiveRecord::Migration[5.0]
  def change
    create_table :tkt_cnt_monthwises do |t|
      t.integer :branch_id
      t.integer :fin_year
      t.string :month
      t.integer :tkt_count
    end
  end
end
