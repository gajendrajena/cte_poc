class MonthwisePeekdayWeekday < ApplicationRecord
	class << self
		def monthly_data(year, branch_id)
			if branch_id.present?
				peakday_child_data = where(day: 1, category_id: 2, branch_id: branch_id, fin_year: year)
				peakday_adult_data = where(day: 1, category_id: 1, branch_id: branch_id, fin_year: year)
				weekday_child_data = where(day: 2, category_id: 2, branch_id: branch_id, fin_year: year)
				weekday_adult_data = where(day: 2, category_id: 1, branch_id: branch_id, fin_year: year)
			else
				peakday_child_data = where(day: 1, category_id: 2, fin_year: year)
				peakday_adult_data = where(day: 1, category_id: 1, fin_year: year)
				weekday_child_data = where(day: 2, category_id: 2, fin_year: year)
				weekday_adult_data = where(day: 2, category_id: 1, fin_year: year)
			end
			data = [ {name: 'Child (Peakday)', data: MonthwiseBookingSource.sort_monthwise_data(peakday_child_data) , stack: 'Peakday'},
				{name: 'Adult (Peakday)', data: MonthwiseBookingSource.sort_monthwise_data(peakday_adult_data), stack: 'Peakday'},
				{name: 'Child (Weekday)', data: MonthwiseBookingSource.sort_monthwise_data(weekday_child_data), stack: 'Weekday'},
				{name: 'Adult (Weekday)', data: MonthwiseBookingSource.sort_monthwise_data(weekday_adult_data), stack: 'Weekday'}
			]
			{ chart_data: data, categories: MONTHS, title: TktCntMonthwise.format_year(year)}
		end
	end


end
