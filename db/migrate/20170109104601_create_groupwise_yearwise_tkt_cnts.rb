class CreateGroupwiseYearwiseTktCnts < ActiveRecord::Migration[5.0]
  def change
    create_table :groupwise_yearwise_tkt_cnts do |t|
      t.integer :branch_id
      t.integer :fin_year
      t.integer :group_id
      t.integer :tkt_count
    end

    add_index :groupwise_yearwise_tkt_cnts, :branch_id
    add_index :groupwise_yearwise_tkt_cnts, :fin_year
    add_index :groupwise_yearwise_tkt_cnts, :group_id
  end
end
