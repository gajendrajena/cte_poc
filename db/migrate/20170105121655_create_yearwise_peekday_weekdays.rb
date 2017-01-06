class CreateYearwisePeekdayWeekdays < ActiveRecord::Migration[5.0]
  def change
    create_table :yearwise_peekday_weekdays do |t|
      t.integer :branch_id
      t.integer :fin_year
      t.integer :category_id
      t.string :day
      t.integer :tkt_count
    end
  end
end