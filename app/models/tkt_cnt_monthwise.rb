class TktCntMonthwise < ApplicationRecord

  def self.monthly_data(year, branch_id)
    data = if branch_id.present?
      query_data = where(fin_year: year, branch_id: branch_id)
      query_data.group_by(&:branch_id).collect{ |k,v| {name: branch_name(k), data: v.collect{|tcy| tcy.tkt_count}}}
    else
      query_data = where(fin_year: year)
      query_data.group_by(&:branch_id).collect{ |k,v| {name: branch_name(k), data: MonthwiseBookingSource.sort_monthwise_data(v)}}
    end
    pie_data = query_data.group_by(&:month).collect{ |k,v| {name: k, y: v.sum{|tcy| tcy.tkt_count}}}

    { chart_data: data, categories: MONTHS, title: format_year(year), pie: { data: pie_data}}
  end

  def self.format_year(year)
    " : " + year.to_s.slice(0,4) + '-' + year.to_s.slice(4,4)
  end

  def self.branch_name(id)
    BRANCHES.detect{|b| b[:id] == id}[:name]
  end

  def self.month(year)
    MONTHS.collect{|m| m}
  end

end
