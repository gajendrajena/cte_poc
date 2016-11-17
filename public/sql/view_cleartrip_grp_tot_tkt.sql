Yearly cleartrip booking data 
=============================
create or replace view v_tkt_cnt_clrtrip_yearly
as
select b.fin_year,v.vgrp_desc "Group_name",nvl(count(no_pers),0) tickets
from tkt_dtl a,tkt_hdr b,visit_group v
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
b.vgrp_cd=v.vgrp_cd and
b.CTRIP_NO is not null
group by b.fin_year,v.vgrp_desc
order by b.fin_year;

Monthly cleartrip booking data 
=============================
create or replace view v_tkt_cnt_clrtrip_monthly
as
select b.fin_year,to_char(b.trans_dt,'MON') Months,v.vgrp_desc "Group_name",nvl(count(no_pers),0) tickets
from tkt_dtl a,tkt_hdr b,visit_group v
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
b.vgrp_cd=v.vgrp_cd and
b.CTRIP_NO is not null
group by b.fin_year,to_char(b.trans_dt,'MON'),v.vgrp_desc
order by b.fin_year;

Weekly cleartrip booking data 
=============================
create or replace view v_tkt_cnt_clrtrip_weekly
as
select b.fin_year,to_char(b.trans_dt,'MON') Months,to_char(b.trans_dt,'W') "WEEK",v.vgrp_desc "Group_name",nvl(count(no_pers),0) tickets
from tkt_dtl a,tkt_hdr b,visit_group v
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
b.vgrp_cd=v.vgrp_cd and
b.CTRIP_NO is not null
group by b.fin_year,to_char(b.trans_dt,'MON'),to_char(b.trans_dt,'W'),v.vgrp_desc
order by b.fin_year;

Daily cleartrip booking data 
=============================
create or replace view v_tkt_cnt_clrtrip_daily
as
select b.fin_year,to_char(b.trans_dt,'MON') Months,to_char(b.trans_dt,'DD') "Daily",v.vgrp_desc "Group_name",nvl(count(no_pers),0) tickets
from tkt_dtl a,tkt_hdr b,visit_group v
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
b.vgrp_cd=v.vgrp_cd and
b.CTRIP_NO is not null
group by b.fin_year,to_char(b.trans_dt,'MON'),to_char(b.trans_dt,'DD'),v.vgrp_desc
order by b.fin_year;
