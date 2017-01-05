class CreateTicketVsTimes < ActiveRecord::Migration[5.0]
  def change
    create_table :ticket_vs_times do |t|
      t.string :branch_name
      t.string :fin_year
      t.string :month
      t.integer :week
      t.integer :day
      t.integer :tickets_booked
    end
  end
end
