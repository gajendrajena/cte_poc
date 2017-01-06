class TktCntMonthwise < ApplicationRecord

	def self.monthly_data(year)
		where(fin_year: year).group_by(&:branch_id).collect{ |k,v| {name: branch_name(k), data: v.collect{|tcy| tcy.tkt_count}}}
	end

	def self.branch_name(id)
		BRANCHES.detect{|b| b[:id] == id}[:name]
	end

	def self.month(year)
		MONTHS.collect{|m| m + "/" + year.to_s.slice(0,4) + '-' + year.to_s.slice(4,4)}
	end

end
