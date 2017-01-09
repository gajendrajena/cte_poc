class YearwiseBookingSource < ApplicationRecord

	def self.yearly_data(branch_id)
		data = []
		query_data = branch_id.present? ? where(branch_id: branch_id) : all
		data = query_data.group_by(&:booking_src_id).collect{ |k,v| {name: BOOKING_SRC[k.to_s], data: v.group_by(&:fin_year).collect{|k,v| v.map(&:tkt_count).sum}}}
		{ chart_data: data.to_json, categories: TktCntYearwise.fin_years.collect{|v| v[0]}, title: ''}
	end

end
