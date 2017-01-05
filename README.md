- scope
  - dashboard
    - charts
    - reports

Technology Stack for Red Apple
  Backend
    - json/excel/postgres (Database)
    - Ruby
    - Rails

  Front End
    - HAML
    - HTML5
    - CSS3
    - jquery
    - HighChart.js
    - underscorejs

schenider
- tableu
- click sense

1. show yearly drop down as filter
2. show destination drop down as filter
3. change the tickets sold per year to show data destination wise
4. chart 3 will reflect w.r.t. the filters
5.

New data import for wonderla
==========================================================
BRANCHES = { 1: 'Wonderla Hoildays Ltd,Kochi', 2: 'Wonderla Holidays Ltd,Bangalore', 4: 'Wonderla Holidays Ltd,Hyderabad'}
USER_GROUPS = {1: "Adult", 2: "Child"}
DAY_GROUPS = {1: "Peakdays", 2: "Weekdays"}
BOOKING_SRC = {1: "Walkin", 2: "Online", 3: "Cleartrip"}


rails g model monthwise_peekday_weekday branch_id:integer fin_year:integer month:string day:string category_id:integer tkt_count:integer
rails g model weekwise_peekday_weekday branch_id:integer fin_year:integer month:string week:string day:string category_id:integer tkt_count:integer
rails g model yearwise_peekday_weekday branch_id:integer fin_year:integer category_id:integer day:string tkt_count:integer
rails g model tkt_cnt_daywise branch_id:integer fin_year:integer month:string week:string day:string tkt_count:integer
rails g model tkt_cnt_monthwise branch_id:integer fin_year:integer month:string tkt_count:integer
rails g model tkt_cnt_weekwise branch_id:integer fin_year:integer month:string week:string tkt_count:integer
rails g model tkt_cnt_yearwise branch_id:integer fin_year:integer tkt_count:integer
rails g model daywise_booking_source branch_id:integer fin_year:integer month:string week:string day:string booking_src_id:integer tkt_count:integer
rails g model monthwise_booking_source branch_id:integer fin_year:integer month:string booking_src_id:integer tkt_count:integer
rails g model weekwise_booking_source branch_id:integer fin_year:integer month:string week:string booking_src_id:integer tkt_count:integer
rails g model yearwise_booking_source branch_id:integer fin_year:integer booking_src_id:integer tkt_count:integer