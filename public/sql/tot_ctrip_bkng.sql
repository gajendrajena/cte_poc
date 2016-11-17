yearwise total cleartrip Booking
================================
create or replace view v_tot_ctrip_yearly
as
select b.fin_year,nvl(count(ctrip_no),0) tickets
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD
group by b.fin_year
order by b.fin_year;

Monthly total cleartrip booking data 
====================================
create or replace view v_tot_ctrip_monthly
as
select b.fin_year,to_char(b.trans_dt,'MON') Months,nvl(count(ctrip_no),0) tickets
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD
group by b.fin_year,to_char(b.trans_dt,'MON')
order by b.fin_year;

Weekly total cleartrip booking data 
==================================
create or replace view v_tot_ctrip_weekly
as
select b.fin_year,to_char(b.trans_dt,'MON') Months,to_char(b.trans_dt,'W') "WEEK",nvl(count(ctrip_no),0) tickets
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD
group by b.fin_year,to_char(b.trans_dt,'MON'),to_char(b.trans_dt,'W')
order by b.fin_year;

Daily cleartrip booking data 
=============================
create or replace view v_tot_ctrip_daily
as
select b.fin_year,to_char(b.trans_dt,'MON') Months,to_char(b.trans_dt,'DD') "Daily",nvl(count(ctrip_no),0) tickets
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD
group by b.fin_year,to_char(b.trans_dt,'MON'),to_char(b.trans_dt,'DD')
order by b.fin_year;
