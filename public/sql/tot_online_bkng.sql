yearwise total online Booking
=============================
create or replace view v_tot_online_yearly
as
select decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",b.fin_year,nvl(count(no_pers),0) tickets
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
B.PAY_CD IN (6,9)
GROUP BY DECODE(B.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,B.FIN_YEAR

UNION
select decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",b.fin_year,nvl2(count(no_pers),0,0) tickets
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
                          WHERE PAY_CD IN (6,9))
GROUP BY DECODE(B.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad'),B.FIN_YEAR 
order by "Branch Name",fin_year;

monthwise total online Booking
==============================
create or replace view v_tot_online_monthly
as
select all decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",b.fin_year,to_char(b.trans_dt,'MON') Months,nvl(count(no_pers),0) tickets
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
b.pay_cd in (6,9)
GROUP BY decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad'), b.fin_year, to_char(b.trans_dt,'MON')
UNION
select decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",b.fin_year,to_char(b.trans_dt,'MON') Months,nvl2(count(no_pers),0,0) tickets
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
                                                    WHERE PAY_CD IN (6,9))
GROUP BY DECODE(B.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,B.FIN_YEAR,TO_CHAR(B.TRANS_DT,'MON') 
order by "Branch Name",fin_year;

Weekly total online Data
=========================
create or replace view v_tot_online_weekly
as
select all decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",b.fin_year,to_char(b.trans_dt,'MON') Months,to_char(b.trans_dt,'W') "WEEK",nvl(count(no_pers),0) tickets
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
b.pay_cd in (6,9)
GROUP BY decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad'), b.fin_year, to_char(b.trans_dt,'MON'), to_char(b.trans_dt,'W')
UNION
select decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",b.fin_year,to_char(b.trans_dt,'MON') Months,to_char(b.trans_dt,'W'),nvl2(count(no_pers),0,0) tickets
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
                                                    WHERE PAY_CD IN (6,9))
GROUP BY DECODE(B.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,B.FIN_YEAR,TO_CHAR(B.TRANS_DT,'MON'),TO_CHAR(B.TRANS_DT,'W')
order by "Branch Name",fin_year;


Daily total online booking  Data
================================
create or replace view v_tot_online_daily
as
select all decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",b.fin_year,to_char(b.trans_dt,'MON') Months,to_char(b.trans_dt,'DD') "Daily",nvl(count(no_pers),0) tickets
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
b.pay_cd in (6,9)
GROUP BY decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad'), b.fin_year, to_char(b.trans_dt,'MON'), to_char(b.trans_dt,'DD')
UNION
select decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",b.fin_year,to_char(b.trans_dt,'MON') Months,to_char(b.trans_dt,'DD') "Daily",nvl2(count(no_pers),0,0) tickets
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
                                                    WHERE PAY_CD IN (6,9))
GROUP BY DECODE(B.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,B.FIN_YEAR,TO_CHAR(B.TRANS_DT,'MON'),TO_CHAR(B.TRANS_DT,'DD')
order by "Branch Name",fin_year;
