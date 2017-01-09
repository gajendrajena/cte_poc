class MonthwiseBookingSource < ApplicationRecord

	def self.monthly_data(year, branch_id)
		data = []
		query_data =  branch_id.present? ? where(fin_year: year, branch_id: branch_id) : where(fin_year: year)
		data = query_data.group_by(&:booking_src_id).collect{ |k,v| {name: BOOKING_SRC[k.to_s], data: v.group_by(&:month).collect{|k,v| v.map(&:tkt_count).sum}}}
		
		{ chart_data: data.to_json, categories: MONTHS, title: TktCntMonthwise.format_year(year)}
	end

end
