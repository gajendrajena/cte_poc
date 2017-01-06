class YearwisePeekdayWeekday < ApplicationRecord
	class << self
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

		def yearwise(branch_id)
			if branch_id.present?
				peakday_child_data = where(day: 1, category_id: 2, branch_id: branch_id).group('fin_year').sum(:tkt_count).values
				peakday_adult_data = where(day: 1, category_id: 1, branch_id: branch_id).group('fin_year').sum(:tkt_count).values
				weekday_child_data = where(day: 2, category_id: 2, branch_id: branch_id).group('fin_year').sum(:tkt_count).values
				weekday_adult_data = where(day: 2, category_id: 1, branch_id: branch_id).group('fin_year').sum(:tkt_count).values
			else
				peakday_child_data = where(day: 1, category_id: 2).group('fin_year').sum(:tkt_count).values
				peakday_adult_data = where(day: 1, category_id: 1).group('fin_year').sum(:tkt_count).values
				weekday_child_data = where(day: 2, category_id: 2).group('fin_year').sum(:tkt_count).values
				weekday_adult_data = where(day: 2, category_id: 1).group('fin_year').sum(:tkt_count).values
			end

			[ {name: 'Child (Peakday)', data: peakday_child_data , stack: 'Peakday'}, 
				{name: 'Adult (Peakday)', data: peakday_adult_data, stack: 'Peakday'}, 
				{name: 'Child (Weekday)', data: weekday_child_data, stack: 'Weekday'}, 
				{name: 'Adult (Weekday)', data: weekday_adult_data, stack: 'Weekday'} 
			]
		end
	end
end

