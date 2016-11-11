--Total child tickets on peak days
create or replace view v_tkt_cnt_peak_chd_yearly
as
select b.fin_year year,count(no_pers) "Total Tickets"
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
a.branch_Cd=2 and 
a.day_cd=8
and a.catg in (select s.catg from sub_catg_mast s, catg_grp c
              where c.catg_grp=2 and s.branch_cd=2 and
              s.catg_grp=c.catg_grp)
              group by b.fin_year
UNION
select b.fin_year year,count(no_pers) "Total Tickets"
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
a.branch_Cd=2 and 
a.day_cd in (5,6)
and a.catg_cd in (select catg_cd from category 
              where catg_grp=2 and branch_cd=2)
              group by b.fin_year;


--Total Adult tickets on peak days
create or replace view v_tkt_cnt_peak_adt_yearly
as
select b.fin_year,count(no_pers) Tot_Tkts
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
a.branch_Cd=2 and 
a.day_cd=8
and a.catg in (select s.catg from sub_catg_mast s, catg_grp c
              where c.catg_grp=1 and s.branch_Cd=2 and 
              s.catg_grp=c.catg_grp)
              group by b.fin_year
UNION
select b.fin_year year,count(no_pers) "Total Tickets"
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
a.branch_Cd=2 and 
a.day_cd in (5,6)
and a.catg_cd in (select catg_cd from category 
              where catg_grp=1 and branch_cd=2)
              group by b.fin_year; 

      
--Total child tickets on week days              
create or replace view v_tkt_cnt_week_chd_yearly
as
select a.fin_year year,count(no_pers) Tot_Tkts
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
a.branch_Cd=2 and 
a.day_cd=1
and a.catg in (select s.catg from sub_catg_mast s, catg_grp c
              where c.catg_grp=2 and s.branch_Cd=2 and
              s.catg_grp=c.catg_grp)
              group by a.fin_year
UNION
select b.fin_year year,count(no_pers) "Total Tickets"
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
a.branch_Cd=2 and 
a.day_cd=1
and a.catg_cd in (select catg_cd from category 
              where catg_grp=2 and branch_cd=2)
              group by b.fin_year;  

  
--Total Adult tickets on week days
create or replace view v_tkt_cnt_week_adt_yearly
as
select a.fin_year year,count(no_pers) Tot_Tkts
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
a.branch_Cd=2 and 
a.day_cd=1
and a.catg in (select s.catg from sub_catg_mast s, catg_grp c
              where c.catg_grp=1 and a.branch_Cd=2 and
              s.catg_grp=c.catg_grp)
              group by a.fin_year
UNION
select b.fin_year year,count(no_pers) "Total Tickets"
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
a.branch_Cd=2 and 
a.day_cd=1
and a.catg_cd in (select catg_cd from category 
              where catg_grp=1 and branch_cd=2)
              group by b.fin_year;

