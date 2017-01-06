class YearwisePeekdayWeekday < ApplicationRecord
	class << self
		def yearwise
			[ 
				{
					name: 'Child (Peakday)',
					data: where(day: 1, category_id: 2).group('fin_year').sum(:tkt_count).values,
					stack: 'Peakday'
				}, 

				{
					name: 'Adult (Peakday)',
					data: where(day: 1, category_id: 1).group('fin_year').sum(:tkt_count).values,
					stack: 'Peakday'
					}, 
				{
					name: 'Child (Weekday)',
					data: where(day: 2, category_id: 2).group('fin_year').sum(:tkt_count).values,
					stack: 'Weekday'
					}, 
				{
					name: 'Adult (Weekday)',
					data: where(day: 2, category_id: 1).group('fin_year').sum(:tkt_count).values,
					stack: 'Weekday'
				} 
			]
		end
	end
end

# YearwisePeekdayWeekday.where(day: 1, category_id: 2).group('fin_year').sum(:tkt_count).values
