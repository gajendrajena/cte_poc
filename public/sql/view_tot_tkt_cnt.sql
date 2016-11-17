1- yearly no of tickets booked
===============================
create or replace view v_tkt_cnt_yearwise
as
select b.fin_year "Financial Year",nvl(count(no_pers),0) "Total Tickets" 
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD 
group by b.fin_year
order by b.fin_year;

2- monthly data for all these years
===================================
create or replace view v_tkt_cnt_monthwise
as
select b.fin_year "Financial Year",to_char(b.trans_dt,'MON') Monthly,nvl(count(no_pers),0) "Total Tickets" 
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD
group by b.fin_year,to_char(b.trans_dt,'MON')
order by b.fin_year,to_char(b.trans_dt,'MON');

3- Weekly data for all these years
====================================
create or replace view v_tkt_cnt_weekly
as
select b.fin_year as YEAR,to_char(b.trans_dt,'MON') Months,to_char(b.trans_dt,'W') "Weekly",nvl(count(no_pers),0) "Total Tickets"
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD
group by b.fin_year, to_char(b.trans_dt,'MON'), to_char(b.trans_dt,'W')
order by Months;

3- Daily data for all these years
====================================
create or replace view v_tkt_cnt_Daily
as
select b.fin_year as YEAR,to_char(b.trans_dt,'MON') Months,to_char(b.trans_dt,'DD') "Daily",nvl(count(no_pers),0) "Total Tickets"
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD
group by b.fin_year, to_char(b.trans_dt,'MON'), to_char(b.trans_dt,'DD')
order by b.fin_year;
