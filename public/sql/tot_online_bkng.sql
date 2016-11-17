yearwise total online Booking
=============================
create or replace view v_tot_online_yearly
as
select b.fin_year,nvl(count(no_pers),0) tickets
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
b.pay_cd in (6,9)
group by b.fin_year
union
select b.fin_year,nvl2(count(no_pers),0,0) tickets
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
b.pay_cd not in (6,9) 
and (b.fin_year) not in (select fin_year
                          from tkt_hdr
                          where pay_cd in (6,9))
group by b.fin_year 
order by fin_year;

monthwise total online Booking
==============================
create or replace view v_tot_online_monthly
as
select all b.fin_year,to_char(b.trans_dt,'MON') Months,nvl(count(no_pers),0) tickets
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
b.pay_cd in (6,9)
group by b.fin_year,to_char(b.trans_dt,'MON')
Union
select b.fin_year,to_char(b.trans_dt,'MON') Months,nvl2(count(no_pers),0,0) tickets
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
b.pay_cd not in (6,9) 
and (b.fin_year,to_char(b.trans_dt,'MON')) not in (select fin_year,to_char(trans_dt,'MON')
                                                    from tkt_hdr
                                                    where pay_cd in (6,9))
group by b.fin_year,to_char(b.trans_dt,'MON') 
order by fin_year;

Weekly total online Data
=========================
create or replace view v_tot_online_weekly
as
select all b.fin_year,to_char(b.trans_dt,'MON') Months,to_char(b.trans_dt,'W') "WEEK",nvl(count(no_pers),0) tickets
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
b.pay_cd in (6,9)
group by b.fin_year,to_char(b.trans_dt,'MON'),to_char(b.trans_dt,'W')
Union
select b.fin_year,to_char(b.trans_dt,'MON') Months,to_char(b.trans_dt,'W'),nvl2(count(no_pers),0,0) tickets
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
b.pay_cd not in (6,9) 
and (b.fin_year,to_char(b.trans_dt,'MON')) not in (select fin_year,to_char(trans_dt,'MON')
                                                    from tkt_hdr
                                                    where pay_cd in (6,9))
group by b.fin_year,to_char(b.trans_dt,'MON'),to_char(b.trans_dt,'W')
order by fin_year;


Daily total online booking  Data
================================
create or replace view v_tot_online_daily
as
select all b.fin_year,to_char(b.trans_dt,'MON') Months,to_char(b.trans_dt,'DD') "Daily",nvl(count(no_pers),0) tickets
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
b.pay_cd in (6,9)
group by b.fin_year,to_char(b.trans_dt,'MON'),to_char(b.trans_dt,'DD')
Union
select b.fin_year,to_char(b.trans_dt,'MON') Months,to_char(b.trans_dt,'DD') "Daily",nvl2(count(no_pers),0,0) tickets
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
b.pay_cd not in (6,9) 
and (b.fin_year,to_char(b.trans_dt,'MON')) not in (select fin_year,to_char(trans_dt,'MON')
                                                    from tkt_hdr
                                                    where pay_cd in (6,9))
group by b.fin_year,to_char(b.trans_dt,'MON'),to_char(b.trans_dt,'DD')
order by fin_year;
