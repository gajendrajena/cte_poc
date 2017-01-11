class TktCntYearwise < ApplicationRecord

  attr_accessor :text
  def self.fin_years
    @@all_years ||= select('id,fin_year').where(branch_id: 1).collect{|tyw| [ tyw.fin_year_text, tyw.fin_year]}
  end

  def fin_year_text
    self.fin_year.to_s.slice(0,4) + '-' + self.fin_year.to_s.slice(4,4)
  end

  def self.fin_year_text(year)
    year.to_s.slice(0,4) + '-' + year.to_s.slice(4,4)
  end

  def self.yearly_data(branch_id)
    query_data = if branch_id.present?
      where(branch_id: branch_id)
    else
      all
    end
    data = query_data.group_by(&:branch_id).collect{ |k,v| {name: branch_name(k), data: sort_yearwise_data(v)}}

    pie_data = query_data.group_by(&:fin_year).collect{ |k,v| {name: fin_year_text(k), y: v.sum{|tcy| tcy.tkt_count}}}

    title = ' '
    title = (', ' + self.branch_name(branch_id.to_i)) if branch_id.present?

    { chart_data: data, categories: sorted_financial_years, title: title, pie: { data: pie_data}}
  end

  def self.branch_name(id)
    BRANCHES.detect{|b| b[:id] == id}[:name]
  end

  def self.sort_yearwise_data(records)
    financial_years = sorted_financial_years
    data_list = Array.new(financial_years.length, 0)
    records.group_by(&:fin_year).collect do |k,v|
      data_list[financial_years.index(fin_year_text(k))] = v.map(&:tkt_count).sum
    end
    data_list
  end

  def self.sorted_financial_years
    @@all_years.collect{|v|v[0]}.sort
  end

end
