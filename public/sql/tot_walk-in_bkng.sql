yearwise total walk_in Booking
==============================
create or replace view v_tot_walkin_yearly
as
select b.fin_year,nvl(count(no_pers),0) tickets
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
b.pay_cd not in (6,9)
group by b.fin_year
order by b.fin_year;

monthwise total walk_in Booking
===============================
create or replace view v_tot_walkin_monthly
as
select b.fin_year,to_char(b.trans_dt,'MON') Months,nvl(count(no_pers),0) tickets
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
b.pay_cd not in (6,9)
group by b.fin_year,to_char(b.trans_dt,'MON')
order by b.fin_year;

Weekly total Wlak-in Data
=========================
create or replace view v_tot_walkin_weekly
as
select b.fin_year,to_char(b.trans_dt,'MON') Months,to_char(b.trans_dt,'W') "WEEK",nvl(count(no_pers),0) tickets
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
b.pay_cd not in (6,9)
group by b.fin_year,to_char(b.trans_dt,'MON'),to_char(b.trans_dt,'W')
order by b.fin_year;

Daily total Wlak-in  Data
=========================
create or replace view v_tot_walkin_daily
as
select b.fin_year,to_char(b.trans_dt,'MON') Months,to_char(b.trans_dt,'DD') "Daily",nvl(count(no_pers),0) tickets
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
b.pay_cd not in (6,9)
group by b.fin_year,to_char(b.trans_dt,'MON'),to_char(b.trans_dt,'DD')
order by b.fin_year;
