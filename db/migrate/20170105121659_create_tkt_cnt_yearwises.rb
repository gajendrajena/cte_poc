class CreateTktCntYearwises < ActiveRecord::Migration[5.0]
  def change
    create_table :tkt_cnt_yearwises do |t|
      t.integer :branch_id, index: true
      t.integer :fin_year, index: true
      t.integer :tkt_count
    end
  end
end
