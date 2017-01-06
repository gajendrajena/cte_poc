class TktCntYearwise < ApplicationRecord

	attr_accessor :text
	def self.fin_years
		select('id,fin_year').where(branch_id: 1).collect{|tyw| [ tyw.fin_year_text, tyw.fin_year]}
	end

	def fin_year_text
		self.fin_year.to_s.slice(0,4) + '-' + self.fin_year.to_s.slice(4,4)
	end

	def self.yearly_data
		all.group_by(&:branch_id).collect{ |k,v| {name: branch_name(k), data: v.collect{|tcy| tcy.tkt_count}}}
	end

	def self.branch_name(id)
		# BRANCHES.detect{|b| b[:id] == id}[:name]
	end

end
