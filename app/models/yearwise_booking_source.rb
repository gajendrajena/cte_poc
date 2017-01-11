class YearwiseBookingSource < ApplicationRecord

	def self.yearly_data(branch_id)
		data = []
		query_data = branch_id.present? ? where(branch_id: branch_id) : all
		data = query_data.group_by(&:booking_src_id).collect{ |k,v| {name: BOOKING_SRC[k.to_s], data: TktCntYearwise.sort_yearwise_data(v)}}
		{ chart_data: data.to_json, categories: TktCntYearwise.sorted_financial_years, title: ''}
	end

end
