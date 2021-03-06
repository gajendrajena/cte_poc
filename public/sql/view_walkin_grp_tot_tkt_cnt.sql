Yearwise Wlak-in group Data
===========================
create or replace view v_tkt_cnt_walkin_yearly
as
select decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",b.fin_year,v.vgrp_desc "Group_name",nvl(count(no_pers),0) tickets
from tkt_dtl a,tkt_hdr b,visit_group v
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
b.pay_cd not in (6,9) and
b.vgrp_cd=v.vgrp_cd
group by decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,b.fin_year,v.vgrp_desc
order by decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,b.fin_year;

MOnthwise Wlak-in group Data
============================
create or replace view v_tkt_cnt_walkin_monthly
as
select decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",b.fin_year,to_char(a.trans_dt,'MON') Months,v.vgrp_desc "Group_name",nvl(count(no_pers),0) tickets
from tkt_dtl a,tkt_hdr b,visit_group v
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
b.pay_cd not in (6,9) and
b.vgrp_cd=v.vgrp_cd
group by decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,b.fin_year,to_char(a.trans_dt,'MON'),v.vgrp_desc
order by decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,b.fin_year;

Weekly Wlak-in group Data
============================
create or replace view v_tkt_cnt_walkin_weekly
as
select decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",b.fin_year,to_char(a.trans_dt,'MON') Months,to_char(a.trans_dt,'W') "WEEK",v.vgrp_desc "Group_name",nvl(count(no_pers),0) tickets
from tkt_dtl a,tkt_hdr b,visit_group v
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
b.pay_cd not in (6,9) and
b.vgrp_cd=v.vgrp_cd
group by decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,b.fin_year,to_char(a.trans_dt,'MON'),to_char(a.trans_dt,'W'),v.vgrp_desc
order by decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,b.fin_year;

Daily Wlak-in group Data
============================
create or replace view v_tkt_cnt_walkin_daily
as
select decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",b.fin_year,to_char(a.trans_dt,'MON') Months,to_char(a.trans_dt,'DD') "Daily",v.vgrp_desc "Group_name",nvl(count(no_pers),0) tickets
from tkt_dtl a,tkt_hdr b,visit_group v
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
b.pay_cd not in (6,9) and
b.vgrp_cd=v.vgrp_cd
group by decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,b.fin_year,to_char(a.trans_dt,'MON'),to_char(a.trans_dt,'DD'),v.vgrp_desc
order by decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,b.fin_year;
