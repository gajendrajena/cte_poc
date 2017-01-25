class TktCntMonthwise < ApplicationRecord

  def self.monthly_data(year, branch_id)
    data = if branch_id.present?
      where(fin_year: year, branch_id: branch_id).group_by(&:branch_id).collect{ |k,v| {name: branch_name(k), data: sort_monthwise_data(v)}}
    else
      where(fin_year: year).group_by(&:branch_id).collect{ |k,v| {name: branch_name(k), data: sort_monthwise_data(v)}}
    end

    pie_data = where(fin_year: year).group_by(&:branch_id).collect do |k,v|
      chart_data = {
        name: branch_name(k).split(',').last,
        y: v.sum{ |tcy| tcy.tkt_count }
      }
      chart_data.merge!({sliced: true, selected: true}) if(branch_id && branch_id.to_i == k)
      chart_data
    end

    { chart_data: data, categories: MONTHS, title: format_year(year, branch_id), pie: { data: pie_data, title: pie_title(year)}}
  end

  def self.format_year(year, branch_id='')
    title = " : " + year.to_s.slice(0,4) + '-' + year.to_s.slice(4,4)
    title += (', ' + self.branch_name(branch_id.to_i)) if branch_id.present?
    title.to_s
  end

  def self.pie_title(year)
    year.to_s.slice(0,4) + '-' + year.to_s.slice(6,2)
  end

  def self.branch_name(id)
    BRANCHES.detect{|b| b[:id] == id}[:name].gsub(',', ', ')
  end

  def self.month(year)
    MONTHS.collect{|m| m}
  end

  def self.sort_monthwise_data(records)
    data_list = Array.new(12,0)
    records.group_by(&:month).collect do |k,v|
      data_list[MONTHS.index(k.to_s)] = v.map(&:tkt_count).sum
    end
    data_list
  end

end
