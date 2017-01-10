class GroupwiseMonthwiseTktCnt < ApplicationRecord
	def self.monthly_data(year, branch_id)
		data = []
		query_data =  branch_id.present? ? where(fin_year: year, branch_id: branch_id) : where(fin_year: year)
		data = query_data.group_by(&:group_id).collect{ |k,v| {name: BOOKING_GROUP[k.to_s], data: MonthwiseBookingSource.sort_monthwise_data(v)}}
		
		{ chart_data: data.to_json, categories: MONTHS, title: TktCntMonthwise.format_year(year)}
	end
end
