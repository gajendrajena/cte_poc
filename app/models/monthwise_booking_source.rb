class MonthwiseBookingSource < ApplicationRecord

	def self.monthly_data(year, branch_id)
		data = []
		query_data =  branch_id.present? ? where(fin_year: year, branch_id: branch_id) : where(fin_year: year)
		data = query_data.group_by(&:booking_src_id).collect{ |k,v| {name: BOOKING_SRC[k.to_s], data: v.group_by(&:month).collect{|k,v| v.map(&:tkt_count).sum}}}
		
		{ chart_data: data.to_json, categories: MONTHS, title: format_year(year)}
	end

	def self.format_year(year)
	" : " + year.to_s.slice(0,4) + '-' + year.to_s.slice(4,4)
	end


	def self.month(year)
		MONTHS.collect{|m| m}
	end

end
