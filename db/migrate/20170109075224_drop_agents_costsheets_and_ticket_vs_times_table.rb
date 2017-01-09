class DropAgentsCostsheetsAndTicketVsTimesTable < ActiveRecord::Migration[5.0]
  def change
  	drop_table :agents
  	drop_table :costsheets
  	drop_table :ticket_vs_times
  end
end
