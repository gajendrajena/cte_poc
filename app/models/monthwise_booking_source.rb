class MonthwiseBookingSource < ApplicationRecord

  def self.monthly_data(year, branch_id)
    data = []
    query_data =  branch_id.present? ? where(fin_year: year, branch_id: branch_id) : where(fin_year: year)
    data = query_data.group_by(&:booking_src_id).collect{ |k,v| {name: BOOKING_SRC[k.to_s], data: sort_monthwise_data(v)}}

    { chart_data: data.to_json, categories: MONTHS, title: TktCntMonthwise.format_year(year)}
  end

  def self.sort_monthwise_data(records)
    data_list = Array.new(12,0)
    records.group_by(&:month).collect do |k,v|
      data_list[MONTHS.index(k.to_s)] = v.map(&:tkt_count).sum
    end
    data_list
  end

end
