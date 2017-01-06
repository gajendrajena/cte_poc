class TktCntMonthwise < ApplicationRecord

	def self.monthly_data(year, branch_id)
		if branch_id.present?
			where(fin_year: year, branch_id: branch_id).group_by(&:branch_id).collect{ |k,v| {name: branch_name(k), data: v.collect{|tcy| tcy.tkt_count}}}
		else
			where(fin_year: year).group_by(&:branch_id).collect{ |k,v| {name: branch_name(k), data: v.collect{|tcy| tcy.tkt_count}}}
		end
	end

	def self.branch_name(id)
		BRANCHES.detect{|b| b[:id] == id}[:name]
	end

	def self.month(year)
		MONTHS.collect{|m| m}
	end

end
