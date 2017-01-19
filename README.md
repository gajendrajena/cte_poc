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

New data import for wonderla
==========================================================
BRANCHES = { 1: 'Wonderla Hoildays Ltd,Kochi', 2: 'Wonderla Holidays Ltd,Bangalore', 4: 'Wonderla Holidays Ltd,Hyderabad'}
USER_GROUPS = {1: "Adult", 2: "Child"}
DAY_GROUPS = {1: "Peakdays", 2: "Weekdays"}
BOOKING_SRC = {1: "Walkin", 2: "Online", 3: "Cleartrip"}


rails g model tkt_cnt_yearwise branch_id:integer fin_year:integer tkt_count:integer
rails g model tkt_cnt_monthwise branch_id:integer fin_year:integer month:string tkt_count:integer
rails g model yearwise_booking_source branch_id:integer fin_year:integer booking_src_id:integer tkt_count:integer
rails g model yearwise_peekday_weekday branch_id:integer fin_year:integer category_id:integer day:string tkt_count:integer
rails g model monthwise_peekday_weekday branch_id:integer fin_year:integer month:string day:string category_id:integer tkt_count:integer
rails g model monthwise_booking_source branch_id:integer fin_year:integer month:string booking_src_id:integer tkt_count:integer

rails g model weekwise_peekday_weekday branch_id:integer fin_year:integer month:string week:string day:string category_id:integer tkt_count:integer

rails g model tkt_cnt_daywise branch_id:integer fin_year:integer month:string week:string day:string tkt_count:integer
rails g model tkt_cnt_weekwise branch_id:integer fin_year:integer month:string week:string tkt_count:integer
rails g model daywise_booking_source branch_id:integer fin_year:integer month:string week:string day:string booking_src_id:integer tkt_count:integer
rails g model weekwise_booking_source branch_id:integer fin_year:integer month:string week:string booking_src_id:integer tkt_count:integer

rake db:seed MODELS=WeekwisePeekdayWeekday FILE=db/seeds/wonderla/weekwise_peekday_weekdays.rb
rake db:seed MODELS=YearwisePeekdayWeekday FILE=db/seeds/wonderla/yearwise_peekday_weekdays.rb

heroku run rake db:seed MODELS='DaywiseBookingSource, MonthwiseBookingSource, WeekwiseBookingSource, YearwiseBookingSource, WeekwisePeekdayWeekday, MonthwisePeekdayWeekday, YearwisePeekdayWeekday, TktCntDaywise, TktCntMonthwise, TktCntWeekwise, TktCntYearwise'


heroku run rake db:seed RAILS_ENV=production MODELS="DaywiseBookingSource"

rake db:seed:dump MODELS="TktCntYearwise" FILE=db/seeds/wonderla/tkt_cnt_yearwises.rb
rake db:seed:dump MODELS="TktCntMonthwise" FILE=db/seeds/wonderla/tkt_cnt_monthwises.rb
rake db:seed:dump MODELS="YearwiseBookingSource" FILE=db/seeds/wonderla/yearwise_booking_sources.rb
rake db:seed:dump MODELS="YearwisePeekdayWeekday" FILE=db/seeds/wonderla/yearwise_peekday_weekdays.rb
rake db:seed:dump MODELS="MonthwisePeekdayWeekday" FILE=db/seeds/wonderla/monthwise_peekday_weekdays.rb
rake db:seed:dump MODELS="MonthwiseBookingSource" FILE=db/seeds/wonderla/monthwise_booking_sources.rb
rake db:seed:dump MODELS="GroupwiseMonthwiseTktCnt" FILE=db/seeds/wonderla/groupwise_monthwise_tkt_cnts.rb
rake db:seed:dump MODELS="GroupwiseYearwiseTktCnt" FILE=db/seeds/wonderla/groupwise_yearwise_tkt_cnts.rb

daywise_booking_sources.rb
groupwise_daywise_tkt_cnts.rb
groupwise_weekwise_tkt_cnts.rb
tkt_cnt_daywises.rb
tkt_cnt_weekwises.rb
users.rb
weekwise_booking_sources.rb
weekwise_peekday_weekdays.rb

rake db:seed:dump FILE=db/seeds/users.rb