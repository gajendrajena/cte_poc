1- yearly no of tickets booked
===============================
create or replace view v_tkt_cnt_yearwise
as
select fin_year "Financial Year",count(no_pers) "Total Tickets" from tkt_dtl
where branch_cd=2
group by fin_year
order by fin_year;

2- monthly data for all these years
===================================
create or replace view v_tkt_cnt_monthwise
as
select fin_year "Financial Year",to_char(trans_dt,'MON-RRRR') Months,count(no_pers) "Total Tickets" from tkt_dtl
where branch_cd=2
group by fin_year,to_char(trans_dt,'MON-RRRR')
order by fin_year,to_char(trans_dt,'MON-RRRR');
