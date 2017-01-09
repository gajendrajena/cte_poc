class YearwiseBookingSource < ApplicationRecord
    
    def self.fin_years
		select('id,fin_year').where(branch_id: 1).collect{|tyw| [ tyw.fin_year_text, tyw.fin_year]}
	end

	def fin_year_text
		self.fin_year.to_s.slice(0,4) + '-' + self.fin_year.to_s.slice(4,4)
	end

	def self.yearly_data(branch_id)
		data = []
		query_data = branch_id.present? ? where(branch_id: branch_id) : all
		data = query_data.group_by(&:booking_src_id).collect{ |k,v| {name: BOOKING_SRC[k.to_s], data: v.group_by(&:fin_year).collect{|k,v| v.map(&:tkt_count).sum}}}
		{ chart_data: data.to_json, categories: fin_years.collect{|v| v[0]}, title: ''}
	end

end
