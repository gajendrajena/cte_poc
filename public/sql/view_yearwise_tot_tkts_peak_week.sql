--Total child tickets on peak days
create or replace view v_tkt_cnt_peak_chd_yearly
as
select decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",b.fin_year year,nvl(count(no_pers),0) "Total Tickets"
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
a.day_cd=8
and a.catg in (select s.catg from sub_catg_mast s, catg_grp c
              where c.catg_grp=2 and
              s.catg_grp=c.catg_grp)
              group by decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,b.fin_year
UNION
select decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",b.fin_year year,nvl(count(no_pers),0) "Total Tickets"
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
a.day_cd in (5,6)
and a.catg_cd in (select catg_cd from category 
              where catg_grp=2)
              group by decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,b.fin_year;


--Total Adult tickets on peak days
create or replace view v_tkt_cnt_peak_adt_yearly
as
select decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",b.fin_year,nvl(count(no_pers),0) Tot_Tkts
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
a.day_cd=8
and a.catg in (select s.catg from sub_catg_mast s, catg_grp c
              where c.catg_grp=1 and
              s.catg_grp=c.catg_grp)
              group by decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,b.fin_year
UNION
select decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",b.fin_year year,nvl(count(no_pers),0) "Total Tickets"
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
a.day_cd in (5,6)
and a.catg_cd in (select catg_cd from category 
              where catg_grp=1)
              group by decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,b.fin_year;
      
--Total child tickets on week days              
create or replace view v_tkt_cnt_week_chd_yearly
as
select decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",a.fin_year year,nvl(count(no_pers),0) Tot_Tkts
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
a.day_cd=1
and a.catg in (select s.catg from sub_catg_mast s, catg_grp c
              where c.catg_grp=2 and
              s.catg_grp=c.catg_grp)
              group by decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,a.fin_year
UNION
select decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",b.fin_year year,nvl(count(no_pers),0) "Total Tickets"
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
a.day_cd=1
and a.catg_cd in (select catg_cd from category 
              where catg_grp=2)
              group by decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,b.fin_year;  
  
--Total Adult tickets on week days
create or replace view v_tkt_cnt_week_adt_yearly
as
select decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",a.fin_year year,nvl(count(no_pers),0) Tot_Tkts
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
a.day_cd=1
and a.catg in (select s.catg from sub_catg_mast s, catg_grp c
              where c.catg_grp=1 and
              s.catg_grp=c.catg_grp)
              group by decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,a.fin_year
UNION
select decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') "Branch Name",b.fin_year year,nvl(count(no_pers),0) "Total Tickets"
from tkt_dtl a,tkt_hdr b
where a.FIN_YEAR=b.FIN_YEAR and
a.BRANCH_CD=b.BRANCH_CD and
a.POS_POINT_CD=b.POS_POINT_CD and
a.SUB_CD=b.SUB_CD and
a.REC_NO=b.REC_NO and
a.DAY_CD=b.DAY_CD and
a.day_cd=1
and a.catg_cd in (select catg_cd from category 
              where catg_grp=1)
              group by decode(b.BRANCH_CD,1,'Kochi',2,'Bangalore','Hyderabad') ,b.fin_year;
              
