class TktCntYearwise < ApplicationRecord

	attr_accessor :text
	def self.fin_years
		select('id,fin_year').where(branch_id: 1).collect{|tyw| [ tyw.fin_year_text, tyw.fin_year]}
	end

	def fin_year_text
		self.fin_year.to_s.slice(0,4) + '-' + self.fin_year.to_s.slice(4,4)
	end

	def self.fin_year_text(year)
		year.to_s.slice(0,4) + '-' + year.to_s.slice(6,2)
	end

	def self.yearly_data(branch_id)
		data = []
		if branch_id.present?
			query_data = where(branch_id: branch_id)
			data = query_data.group_by(&:branch_id).collect{ |k,v| {name: branch_name(k), data: v.collect{|tcy| tcy.tkt_count}}}
		else
			query_data = all
			data = query_data.group_by(&:branch_id).collect{ |k,v| {name: branch_name(k), data: v.collect{|tcy| tcy.tkt_count}}}
		end
		pie_data = query_data.group_by(&:fin_year).collect{ |k,v| {name: fin_year_text(k), y: v.sum{|tcy| tcy.tkt_count}}}
		{ chart_data: data, categories: fin_years.collect{|v| v[0]}, title: '', pie: { data: pie_data}}
	end

	def self.branch_name(id)
		BRANCHES.detect{|b| b[:id] == id}[:name]
	end

end
