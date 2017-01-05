class CreateTktCntYearwises < ActiveRecord::Migration[5.0]
  def change
    create_table :tkt_cnt_yearwises do |t|
      t.integer :branch_id
      t.integer :fin_year
      t.integer :tkt_count
    end
  end
end
