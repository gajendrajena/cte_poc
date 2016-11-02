--Total child tickets on peak days
create or replace view v_tkt_cnt_peak_chd
as
select count(no_pers) Tot_Tkts from tkt_dtl
where day_cd=8
and catg in (select s.catg from sub_catg_mast s, catg_grp c
              where c.catg_grp=2 and
              s.catg_grp=c.catg_grp)
              group by fin_year;

              
--Total Adult tickets on peak days
create or replace view v_tkt_cnt_peak_adt
as
select count(no_pers) Tot_Tkts from tkt_dtl
where day_cd=8
and catg in (select s.catg from sub_catg_mast s, catg_grp c
              where c.catg_grp=1 and
              s.catg_grp=c.catg_grp)
              group by fin_year;

      
--Total child tickets on week days              
create or replace view v_tkt_cnt_week_chd
as
select count(no_pers) Tot_Tkts from tkt_dtl
where day_cd=1
and catg in (select s.catg from sub_catg_mast s, catg_grp c
              where c.catg_grp=2 and
              s.catg_grp=c.catg_grp)
              group by fin_year; 

  
--Total Adult tickets on week days
create or replace view v_tkt_cnt_week_adt
as
select count(no_pers) Tot_Tkts from tkt_dtl
where day_cd=1
and catg in (select s.catg from sub_catg_mast s, catg_grp c
              where c.catg_grp=1 and
              s.catg_grp=c.catg_grp)
              group by fin_year;


