class TicketVsTime < ApplicationRecord
	FINANCIAL_YEARS = ['2000-2001', '2001-2002', '2002-2003', '2003-2004', '2004-2005', '2005-2006', '2006-2007', '2007-2008', '2008-2009', '2009-2010', '2010-2011', '2011-2012', '2012-2013', '2013-2014', '2014-2015', '2015-2016', '2016-2017']

	def self.get_data(options={})
		if options && options[:time] == 'all' && options[:branch] == 'all'
			all_data = all.group_by(&:branch_name)#.group_by(&:fin_year)

			# json_data = all_data.collect do |branch, tickets_data|
			# 	{
			# 		name: branch,
			# 		y: FINANCIAL_YEARS.collect do|fy|
			# 			yearly_booking = tickets_data.select(fin_year: fy)
			# 			if yearly_booking.length == 0
			# 				0
			# 			else
			# 				yearly_booking.collect {|t| t.tickets_booked}.sum
			# 			end
			# 		end
			# 	}
			# end

		end
		all_data
	end
end
