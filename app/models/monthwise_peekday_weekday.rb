class MonthwisePeekdayWeekday < ApplicationRecord
	class << self
		def monthly_data(year, branch_id)

			if branch_id.present?
				peakday_child_data = where(day: 1, category_id: 2, branch_id: branch_id, fin_year: year).group('month').sum(:tkt_count).values
				peakday_adult_data = where(day: 1, category_id: 1, branch_id: branch_id, fin_year: year).group('month').sum(:tkt_count).values
				weekday_child_data = where(day: 2, category_id: 2, branch_id: branch_id, fin_year: year).group('month').sum(:tkt_count).values
				weekday_adult_data = where(day: 2, category_id: 1, branch_id: branch_id, fin_year: year).group('month').sum(:tkt_count).values
			else
				peakday_child_data = where(day: 1, category_id: 2, fin_year: year).group('month').sum(:tkt_count).values
				peakday_adult_data = where(day: 1, category_id: 1, fin_year: year).group('month').sum(:tkt_count).values
				weekday_child_data = where(day: 2, category_id: 2, fin_year: year).group('month').sum(:tkt_count).values
				weekday_adult_data = where(day: 2, category_id: 1, fin_year: year).group('month').sum(:tkt_count).values
			end
			data = [ {name: 'Child (Peakday)', data: peakday_child_data , stack: 'Peakday'},
				{name: 'Adult (Peakday)', data: peakday_adult_data, stack: 'Peakday'},
				{name: 'Child (Weekday)', data: weekday_child_data, stack: 'Weekday'},
				{name: 'Adult (Weekday)', data: weekday_adult_data, stack: 'Weekday'}
			]
			{ chart_data: data, categories: MONTHS, title: TktCntMonthwise.format_year(year)}
		end

	end


end
