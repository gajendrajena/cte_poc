class CreateYearwisePeekdayWeekdays < ActiveRecord::Migration[5.0]
  def change
    create_table :yearwise_peekday_weekdays do |t|
      t.integer :branch_id, index: true
      t.integer :fin_year, index: true
      t.integer :category_id, index: true
      t.integer :day, index: true
      t.integer :tkt_count
    end
  end
end
