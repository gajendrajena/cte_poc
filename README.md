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

rake db:seed MODELS=WeekwisePeekdayWeekday FILE=db/seeds/wonderla/weekwise_peekday_weekdays.rb
rake db:seed MODELS=YearwisePeekdayWeekday FILE=db/seeds/wonderla/yearwise_peekday_weekdays.rb

heroku run rake db:seed MODELS='DaywiseBookingSource, MonthwiseBookingSource, WeekwiseBookingSource, YearwiseBookingSource, WeekwisePeekdayWeekday, MonthwisePeekdayWeekday, YearwisePeekdayWeekday, TktCntDaywise, TktCntMonthwise, TktCntWeekwise, TktCntYearwise'



heroku run rake db:seed RAILS_ENV=production MODELS="DaywiseBookingSource"

heroku run rake db:seed RAILS_ENV=production MODELS="TktCntYearwise"
heroku run rake db:seed RAILS_ENV=production MODELS="TktCntMonthwise"
heroku run rake db:seed RAILS_ENV=production MODELS="YearwiseBookingSource"
heroku run rake db:seed RAILS_ENV=production MODELS="YearwisePeekdayWeekday"
heroku run rake db:seed RAILS_ENV=production MODELS="GroupwiseYearwiseTktCnt"
heroku run rake db:seed RAILS_ENV=production MODELS="GroupwiseMonthwiseTktCnt"
heroku run rake db:seed RAILS_ENV=production MODELS="GroupwiseDaywiseTktCnt"
heroku run rake db:seed RAILS_ENV=production MODELS="GroupwiseWeekwiseTktCnt"
heroku run rake db:seed RAILS_ENV=production MODELS="MonthwiseBookingSource"
heroku run rake db:seed RAILS_ENV=production MODELS="MonthwisePeekdayWeekday"
heroku run rake db:seed RAILS_ENV=production MODELS="TktCntDaywise"
heroku run rake db:seed RAILS_ENV=production MODELS="TktCntWeekwise"
heroku run rake db:seed RAILS_ENV=production MODELS="WeekwiseBookingSource"
heroku run rake db:seed RAILS_ENV=production MODELS="WeekwisePeekdayWeekday"
