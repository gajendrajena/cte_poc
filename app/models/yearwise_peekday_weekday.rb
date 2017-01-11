class YearwisePeekdayWeekday < ApplicationRecord
	class << self
		def yearwise(branch_id)
			if branch_id.present?
				peakday_child_data = where(day: 1, category_id: 2, branch_id: branch_id).group('fin_year').order("fin_year").order("fin_year").sum(:tkt_count).values
				peakday_adult_data = where(day: 1, category_id: 1, branch_id: branch_id).group('fin_year').order("fin_year").sum(:tkt_count).values
				weekday_child_data = where(day: 2, category_id: 2, branch_id: branch_id).group('fin_year').order("fin_year").sum(:tkt_count).values
				weekday_adult_data = where(day: 2, category_id: 1, branch_id: branch_id).group('fin_year').order("fin_year").sum(:tkt_count).values
			else
				peakday_child_data = where(day: 1, category_id: 2).group('fin_year').order("fin_year").sum(:tkt_count).values
				peakday_adult_data = where(day: 1, category_id: 1).group('fin_year').order("fin_year").sum(:tkt_count).values
				weekday_child_data = where(day: 2, category_id: 2).group('fin_year').order("fin_year").sum(:tkt_count).values
				weekday_adult_data = where(day: 2, category_id: 1).group('fin_year').order("fin_year").sum(:tkt_count).values
			end
			data = [ {name: 'Child (Peakday)', data: peakday_child_data , stack: 'Peakday'}, 
				{name: 'Adult (Peakday)', data: peakday_adult_data, stack: 'Peakday'}, 
				{name: 'Child (Weekday)', data: weekday_child_data, stack: 'Weekday'}, 
				{name: 'Adult (Weekday)', data: weekday_adult_data, stack: 'Weekday'} 
			]
			{ chart_data: data, categories: TktCntYearwise.fin_years.collect{|v| v[0]}, title: ''}
		end
	end
end

