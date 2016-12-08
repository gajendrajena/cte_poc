Yearly Groupwise data 
============================
create or replace view v_tkt_cnt_grpwise_yearly
as
select decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",b.fin_year "Financial Year",v.vgrp_desc "Group_name",nvl(count(no_pers),0) "Total Tickets" 
from tkt_dtl a,tkt_hdr b,visit_group v
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
B.VGRP_CD=V.VGRP_CD 
GROUP BY DECODE(B.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad'),B.FIN_YEAR,V.VGRP_DESC
order by decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad'),b.fin_year;

Monthly Groupwise data
=============================
create or replace view v_tkt_cnt_grpwise_monthly
as
select decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",b.fin_year "Financial Year",to_char(b.trans_dt,'MON') Months,v.vgrp_desc "Group_name",nvl(count(no_pers),0) "Total Tickets" 
from tkt_dtl a,tkt_hdr b,visit_group v
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
b.vgrp_cd=v.vgrp_cd 
group by decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,b.fin_year,to_char(b.trans_dt,'MON'),v.vgrp_desc
order by decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,b.fin_year;

weekly Groupwise data
===========================
create or replace view v_tkt_cnt_grpwise_weekly
as
select decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",b.fin_year "Financial Year",to_char(b.trans_dt,'MON') Months,to_char(b.trans_dt,'W') "WEEK",v.vgrp_desc "Group_name",nvl(count(no_pers),0) "Total Tickets" 
from tkt_dtl a,tkt_hdr b,visit_group v
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
b.vgrp_cd=v.vgrp_cd
group by decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,b.fin_year,to_char(b.trans_dt,'MON'),to_char(b.trans_dt,'W'),v.vgrp_desc
order by decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,b.fin_year;

Daily Groupwise data
==========================
create or replace view v_tkt_cnt_grpwise_daily
as
select decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",b.fin_year "Financial Year",to_char(b.trans_dt,'MON') Months,to_char(b.trans_dt,'DD') "Daily",v.vgrp_desc "Group_name",nvl(count(no_pers),0) "Total Tickets" 
from tkt_dtl a,tkt_hdr b,visit_group v
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
b.vgrp_cd=v.vgrp_cd
group by decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,b.fin_year,to_char(b.trans_dt,'MON'),to_char(b.trans_dt,'DD'),v.vgrp_desc
order by decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,b.fin_year;

