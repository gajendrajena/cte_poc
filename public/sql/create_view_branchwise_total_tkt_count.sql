Yearwise Total Data
======================================
Bangalore
---------
create or replace view v_tot_tkt_blr_yearly
as
select decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",b.fin_year "Financial Year",nvl(count(no_pers),0) "Total Tickets" 
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD 
and b.branch_Cd = 2
GROUP BY decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad'), b.fin_year
order by b.fin_year;

Kochi
-----
create or replace view v_tot_tkt_cok_yearly
as
select decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",b.fin_year "Financial Year",nvl(count(no_pers),0) "Total Tickets" 
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD 
and b.branch_Cd = 1
group by decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,b.fin_year
order by b.fin_year;

Hyderabad
---------
create or replace view v_tot_tkt_hyd_yearly
as
select decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",b.fin_year "Financial Year",nvl(count(no_pers),0) "Total Tickets" 
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD 
and b.branch_Cd = 4
group by decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,b.fin_year
order by b.fin_year;

Monthwise Total Data
======================================
Bangalore
---------
create or replace view v_tot_tkt_blr_monthly
as
select decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",b.fin_year "Financial Year",to_char(b.trans_dt,'MON') Monthly,nvl(count(no_pers),0) "Total Tickets" 
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD
and b.branch_Cd = 2
group by decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,b.fin_year,to_char(b.trans_dt,'MON')
order by b.fin_year,to_char(b.trans_dt,'MON');

Kochi
---------
create or replace view v_tot_tkt_cok_monthly
as
select decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",b.fin_year "Financial Year",to_char(b.trans_dt,'MON') Monthly,nvl(count(no_pers),0) "Total Tickets" 
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD
and b.branch_Cd = 1
group by decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,b.fin_year,to_char(b.trans_dt,'MON')
order by b.fin_year,to_char(b.trans_dt,'MON');

Hyderabad
---------
create or replace view v_tot_tkt_hyd_monthly
as
select decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",b.fin_year "Financial Year",to_char(b.trans_dt,'MON') Monthly,nvl(count(no_pers),0) "Total Tickets" 
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD
and b.branch_Cd = 4
group by decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,b.fin_year,to_char(b.trans_dt,'MON')
order by b.fin_year,to_char(b.trans_dt,'MON');

Weekly Total Data
======================================
Bangalore
---------
create or replace view v_tot_tkt_blr_weekly
as
select decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",b.fin_year as YEAR,to_char(b.trans_dt,'MON') Months,to_char(b.trans_dt,'W') "Weekly",nvl(count(no_pers),0) "Total Tickets"
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD
and b.branch_Cd = 2
group by decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,b.fin_year, to_char(b.trans_dt,'MON'), to_char(b.trans_dt,'W')
order by Months;

Kochi
-------
create or replace view v_tot_tkt_cok_weekly
as
select decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",b.fin_year as YEAR,to_char(b.trans_dt,'MON') Months,to_char(b.trans_dt,'W') "Weekly",nvl(count(no_pers),0) "Total Tickets"
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD
and b.branch_Cd = 1
group by decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,b.fin_year, to_char(b.trans_dt,'MON'), to_char(b.trans_dt,'W')
order by Months;

Hyderabad
---------
create or replace view v_tot_tkt_hyd_weekly
as
select decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",b.fin_year as YEAR,to_char(b.trans_dt,'MON') Months,to_char(b.trans_dt,'W') "Weekly",nvl(count(no_pers),0) "Total Tickets"
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD
and b.branch_Cd = 4
group by decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,b.fin_year, to_char(b.trans_dt,'MON'), to_char(b.trans_dt,'W')
order by Months;

Daily Total Data
======================================
Bangalore
---------
create or replace view v_tot_tkt_blr_daily
as
select decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",b.fin_year as YEAR,to_char(b.trans_dt,'MON') Months,to_char(b.trans_dt,'DD') "Daily",nvl(count(no_pers),0) "Total Tickets"
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD
and b.branch_Cd = 2
group by decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,b.fin_year, to_char(b.trans_dt,'MON'), to_char(b.trans_dt,'DD')
order by b.fin_year;

Kochi
---------
create or replace view v_tot_tkt_cok_daily
as
select decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",b.fin_year as YEAR,to_char(b.trans_dt,'MON') Months,to_char(b.trans_dt,'DD') "Daily",nvl(count(no_pers),0) "Total Tickets"
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD
and b.branch_Cd = 1
group by decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,b.fin_year, to_char(b.trans_dt,'MON'), to_char(b.trans_dt,'DD')
order by b.fin_year;

Hydeabad
---------
create or replace view v_tot_tkt_hyd_daily
as
select decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",b.fin_year as YEAR,to_char(b.trans_dt,'MON') Months,to_char(b.trans_dt,'DD') "Daily",nvl(count(no_pers),0) "Total Tickets"
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD
and b.branch_Cd = 4
group by decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,b.fin_year, to_char(b.trans_dt,'MON'), to_char(b.trans_dt,'DD')
order by b.fin_year;
