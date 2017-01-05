class CreateWeekwisePeekdayWeekdays < ActiveRecord::Migration[5.0]
  def change
    create_table :weekwise_peekday_weekdays do |t|
      t.integer :branch_id
      t.integer :fin_year
      t.string :month
      t.string :week
      t.string :day
      t.integer :category_id
      t.integer :tkt_count
    end
  end
end
