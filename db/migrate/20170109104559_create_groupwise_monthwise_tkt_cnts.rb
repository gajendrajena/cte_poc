class CreateGroupwiseMonthwiseTktCnts < ActiveRecord::Migration[5.0]
  def change
    create_table :groupwise_monthwise_tkt_cnts do |t|
      t.integer :branch_id, index: true
      t.integer :fin_year, index: true
      t.integer :group_id, index: true
      t.string :month
      t.integer :tkt_count
    end
  end
end
