window.financial_years = ['2000-2001', '2001-2002', '2002-2003', '2003-2004', '2004-2005', '2005-2006', '2006-2007', '2007-2008', '2008-2009', '2009-2010', '2010-2011', '2011-2012', '2012-2013', '2013-2014', '2014-2015', '2015-2016', '2016-2017']
window.yearly_data = [
{branch: 'Bangalore', fy: '2000-2001', t: 0},
{branch: 'Bangalore', fy: '2001-2002', t: 0},
{branch: 'Bangalore', fy: '2002-2003', t: 0},
{branch: 'Bangalore', fy: '2003-2004', t: 0},
{branch: 'Bangalore', fy: '2004-2005', t: 0},
{branch: 'Bangalore', fy: '2005-2006', t: 361396},
{branch: 'Bangalore', fy: '2006-2007', t: 686270},
{branch: 'Bangalore', fy: '2007-2008', t: 607685},
{branch: 'Bangalore', fy: '2008-2009', t: 682875},
{branch: 'Bangalore', fy: '2009-2010', t: 709318},
{branch: 'Bangalore', fy: '2010-2011', t: 821987},
{branch: 'Bangalore', fy: '2011-2012', t: 861567},
{branch: 'Bangalore', fy: '2012-2013', t: 908989},
{branch: 'Bangalore', fy: '2013-2014', t: 912955},
{branch: 'Bangalore', fy: '2014-2015', t: 931887},
{branch: 'Bangalore', fy: '2015-2016', t: 828695},
{branch: 'Bangalore', fy: '2016-2017', t: 323462},
{branch: 'Hyderabad', fy: '2000-2001', t: 0},
{branch: 'Hyderabad', fy: '2001-2002', t: 0},
{branch: 'Hyderabad', fy: '2002-2003', t: 0},
{branch: 'Hyderabad', fy: '2003-2004', t: 0},
{branch: 'Hyderabad', fy: '2004-2005', t: 0},
{branch: 'Hyderabad', fy: '2005-2006', t: 0},
{branch: 'Hyderabad', fy: '2006-2007', t: 0},
{branch: 'Hyderabad', fy: '2007-2008', t: 0},
{branch: 'Hyderabad', fy: '2008-2009', t: 0},
{branch: 'Hyderabad', fy: '2009-2010', t: 0},
{branch: 'Hyderabad', fy: '2010-2011', t: 0},
{branch: 'Hyderabad', fy: '2011-2012', t: 0},
{branch: 'Hyderabad', fy: '2012-2013', t: 0},
{branch: 'Hyderabad', fy: '2013-2014', t: 0},
{branch: 'Hyderabad', fy: '2014-2015', t: 0},
{branch: 'Hyderabad', fy: '2015-2016', t: 0},
{branch: 'Hyderabad', fy: '2016-2017', t: 86520},
{branch: 'Kochi', fy: '2000-2001', t: 624711},
{branch: 'Kochi', fy: '2001-2002', t: 624711},
{branch: 'Kochi', fy: '2002-2003', t: 716985},
{branch: 'Kochi', fy: '2003-2004', t: 744300},
{branch: 'Kochi', fy: '2004-2005', t: 711063},
{branch: 'Kochi', fy: '2005-2006', t: 717600},
{branch: 'Kochi', fy: '2006-2007', t: 744326},
{branch: 'Kochi', fy: '2007-2008', t: 818305},
{branch: 'Kochi', fy: '2008-2009', t: 818102},
{branch: 'Kochi', fy: '2009-2010', t: 864463},
{branch: 'Kochi', fy: '2010-2011', t: 920524},
{branch: 'Kochi', fy: '2011-2012', t: 771333},
{branch: 'Kochi', fy: '2012-2013', t: 757340},
{branch: 'Kochi', fy: '2013-2014', t: 751260},
{branch: 'Kochi', fy: '2014-2015', t: 767777},
{branch: 'Kochi', fy: '2015-2016', t: 752679},
{branch: 'Kochi', fy: '2016-2017', t: 277354}
]
// $('#total-tickets').html(_.reduce(yearly_data, function(memo, num){ return memo + num.y; }, 0));
// $('#cur-yr-total-tickets').html('' + yearly_data[0].y);

var monthly_data = [
{fy: '2005-2006', m: 'DEC', t:  '18691'},
{fy: '2005-2006', m: 'FEB', t:  '14275'},
{fy: '2005-2006', m: 'JAN', t:  '24308'},
{fy: '2005-2006', m: 'MAR', t:  '16878'},
{fy: '2005-2006', m: 'NOV', t:  '11165'},
{fy: '2005-2006', m: 'OCT', t:  '16662'},
{fy: '2005-2006', m: 'SEP', t:  '4'},
{fy: '2006-2007', m: 'APR', t:  '41685'},
{fy: '2006-2007', m: 'AUG', t:  '13993'},
{fy: '2006-2007', m: 'DEC', t:  '21731'},
{fy: '2006-2007', m: 'FEB', t:  '9069'},
{fy: '2006-2007', m: 'JAN', t:  '18022'},
{fy: '2006-2007', m: 'JUL', t:  '14154'},
{fy: '2006-2007', m: 'JUN', t:  '20948'},
{fy: '2006-2007', m: 'MAR', t:  '14201'},
{fy: '2006-2007', m: 'MAY', t:  '61343'},
{fy: '2006-2007', m: 'NOV', t:  '13801'},
{fy: '2006-2007', m: 'OCT', t:  '30602'},
{fy: '2006-2007', m: 'SEP', t:  '19052'},
{fy: '2007-2008', m: 'APR', t:  '37758'},
{fy: '2007-2008', m: 'AUG', t:  '12620'},
{fy: '2007-2008', m: 'DEC', t:  '9683'},
{fy: '2007-2008', m: 'FEB', t:  '4926'},
{fy: '2007-2008', m: 'JAN', t:  '7910'},
{fy: '2007-2008', m: 'JUL', t:  '14146'},
{fy: '2007-2008', m: 'JUN', t:  '23568'},
{fy: '2007-2008', m: 'MAR', t:  '6483'},
{fy: '2007-2008', m: 'MAY', t:  '62823'},
{fy: '2007-2008', m: 'NOV', t:  '6297'},
{fy: '2007-2008', m: 'OCT', t:  '11713'},
{fy: '2007-2008', m: 'SEP', t:  '5369'},
{fy: '2008-2009', m: 'APR', t:  '16419'},
{fy: '2008-2009', m: 'AUG', t:  '7762'},
{fy: '2008-2009', m: 'DEC', t:  '10827'},
{fy: '2008-2009', m: 'FEB', t:  '5436'},
{fy: '2008-2009', m: 'JAN', t:  '9176'},
{fy: '2008-2009', m: 'JUL', t:  '6887'},
{fy: '2008-2009', m: 'JUN', t:  '11602'},
{fy: '2008-2009', m: 'MAR', t:  '8309'},
{fy: '2008-2009', m: 'MAY', t:  '31644'},
{fy: '2008-2009', m: 'NOV', t:  '5749'},
{fy: '2008-2009', m: 'OCT', t:  '15668'},
{fy: '2008-2009', m: 'SEP', t:  '4850'},
{fy: '2009-2010', m: 'APR', t:  '22684'},
{fy: '2009-2010', m: 'AUG', t:  '6227'},
{fy: '2009-2010', m: 'DEC', t:  '12982'},
{fy: '2009-2010', m: 'FEB', t:  '7837'},
{fy: '2009-2010', m: 'JAN', t:  '11779'},
{fy: '2009-2010', m: 'JUL', t:  '7706'},
{fy: '2009-2010', m: 'JUN', t:  '11369'},
{fy: '2009-2010', m: 'MAR', t:  '10213'},
{fy: '2009-2010', m: 'MAY', t:  '35488'},
{fy: '2009-2010', m: 'NOV', t:  '6487'},
{fy: '2009-2010', m: 'OCT', t:  '10585'},
{fy: '2009-2010', m: 'SEP', t:  '9006'},
{fy: '2010-2011', m: 'APR', t:  '28419'},
{fy: '2010-2011', m: 'AUG', t:  '7951'},
{fy: '2010-2011', m: 'DEC', t:  '14815'},
{fy: '2010-2011', m: 'FEB', t:  '9044'},
{fy: '2010-2011', m: 'JAN', t:  '14295'},
{fy: '2010-2011', m: 'JUL', t:  '9992'},
{fy: '2010-2011', m: 'JUN', t:  '14423'},
{fy: '2010-2011', m: 'MAR', t:  '12942'},
{fy: '2010-2011', m: 'MAY', t:  '39637'},
{fy: '2010-2011', m: 'NOV', t:  '10198'},
{fy: '2010-2011', m: 'OCT', t:  '19167'},
{fy: '2010-2011', m: 'SEP', t:  '9591'},
{fy: '2011-2012', m: 'APR', t:  '32376'},
{fy: '2011-2012', m: 'AUG', t:  '10983'},
{fy: '2011-2012', m: 'DEC', t:  '16655'},
{fy: '2011-2012', m: 'FEB', t:  '10657'},
{fy: '2011-2012', m: 'JAN', t:  '15976'},
{fy: '2011-2012', m: 'JUL', t:  '13952'},
{fy: '2011-2012', m: 'JUN', t:  '18831'},
{fy: '2011-2012', m: 'MAR', t:  '14603'},
{fy: '2011-2012', m: 'MAY', t:  '46321'},
{fy: '2011-2012', m: 'NOV', t:  '11656'},
{fy: '2011-2012', m: 'OCT', t:  '22792'},
{fy: '2011-2012', m: 'SEP', t:  '13314'},
{fy: '2012-2013', m: 'APR', t:  '35908'},
{fy: '2012-2013', m: 'AUG', t:  '14499'},
{fy: '2012-2013', m: 'DEC', t:  '17706'},
{fy: '2012-2013', m: 'FEB', t:  '10507'},
{fy: '2012-2013', m: 'JAN', t:  '17217'},
{fy: '2012-2013', m: 'JUL', t:  '13265'},
{fy: '2012-2013', m: 'JUN', t:  '24225'},
{fy: '2012-2013', m: 'MAR', t:  '17393'},
{fy: '2012-2013', m: 'MAY', t:  '54621'},
{fy: '2012-2013', m: 'NOV', t:  '10947'},
{fy: '2012-2013', m: 'OCT', t:  '20284'},
{fy: '2012-2013', m: 'SEP', t:  '11536'},
{fy: '2013-2014', m: 'APR', t:  '34617'},
{fy: '2013-2014', m: 'AUG', t:  '15348'},
{fy: '2013-2014', m: 'DEC', t:  '19761'},
{fy: '2013-2014', m: 'FEB', t:  '12391'},
{fy: '2013-2014', m: 'JAN', t:  '17850'},
{fy: '2013-2014', m: 'JUL', t:  '11385'},
{fy: '2013-2014', m: 'JUN', t:  '21307'},
{fy: '2013-2014', m: 'MAR', t:  '19242'},
{fy: '2013-2014', m: 'MAY', t:  '54327'},
{fy: '2013-2014', m: 'NOV', t:  '12707'},
{fy: '2013-2014', m: 'OCT', t:  '24109'},
{fy: '2013-2014', m: 'SEP', t:  '12338'},
{fy: '2014-2015', m: 'APR', t:  '39652'},
{fy: '2014-2015', m: 'AUG', t:  '16989'},
{fy: '2014-2015', m: 'DEC', t:  '21200'},
{fy: '2014-2015', m: 'FEB', t:  '12749'},
{fy: '2014-2015', m: 'JAN', t:  '21262'},
{fy: '2014-2015', m: 'JUL', t:  '15326'},
{fy: '2014-2015', m: 'JUN', t:  '25718'},
{fy: '2014-2015', m: 'MAR', t:  '19771'},
{fy: '2014-2015', m: 'MAY', t:  '56650'},
{fy: '2014-2015', m: 'NOV', t:  '13331'},
{fy: '2014-2015', m: 'OCT', t:  '29413'},
{fy: '2014-2015', m: 'SEP', t:  '13529'},
{fy: '2015-2016', m: 'APR', t:  '38099'},
{fy: '2015-2016', m: 'AUG', t:  '16729'},
{fy: '2015-2016', m: 'DEC', t:  '23682'},
{fy: '2015-2016', m: 'FEB', t:  '16295'},
{fy: '2015-2016', m: 'JAN', t:  '22451'},
{fy: '2015-2016', m: 'JUL', t:  '19529'},
{fy: '2015-2016', m: 'JUN', t:  '25133'},
{fy: '2015-2016', m: 'MAR', t:  '27462'},
{fy: '2015-2016', m: 'MAY', t:  '61374'},
{fy: '2015-2016', m: 'NOV', t:  '10299'},
{fy: '2015-2016', m: 'OCT', t:  '26289'},
{fy: '2015-2016', m: 'SEP', t:  '12920'},
{fy: '2016-2017', m: 'APR', t:  '37387'},
{fy: '2016-2017', m: 'AUG', t:  '15491'},
{fy: '2016-2017', m: 'JUL', t:  '17367'},
{fy: '2016-2017', m: 'JUN', t:  '20321'},
{fy: '2016-2017', m: 'MAY', t:  '57107'},
{fy: '2016-2017', m: 'OCT', t:  '17270'},
{fy: '2016-2017', m: 'SEP', t:  '9645'}
];

var weekly_data = [
{fy: '2006-2007', m:  'APR', w: '1', t: 7413},
{fy: '2006-2007', m:  'APR', w: '2', t: 9085},
{fy: '2006-2007', m:  'APR', w: '3', t: 9193},
{fy: '2006-2007', m:  'APR', w: '4', t: 11388},
{fy: '2006-2007', m:  'APR', w: '5', t: 4606},
{fy: '2007-2008', m:  'APR', w: '1', t: 7939},
{fy: '2007-2008', m:  'APR', w: '2', t: 7877},
{fy: '2007-2008', m:  'APR', w: '3', t: 9155},
{fy: '2007-2008', m:  'APR', w: '4', t: 8893},
{fy: '2007-2008', m:  'APR', w: '5', t: 3894},
{fy: '2008-2009', m:  'APR', w: '1', t: 3221},
{fy: '2008-2009', m:  'APR', w: '2', t: 3731},
{fy: '2008-2009', m:  'APR', w: '3', t: 4044},
{fy: '2008-2009', m:  'APR', w: '4', t: 4291},
{fy: '2008-2009', m:  'APR', w: '5', t: 1132},
{fy: '2009-2010', m:  'APR', w: '1', t: 3925},
{fy: '2009-2010', m:  'APR', w: '2', t: 6291},
{fy: '2009-2010', m:  'APR', w: '3', t: 5043},
{fy: '2009-2010', m:  'APR', w: '4', t: 5992},
{fy: '2009-2010', m:  'APR', w: '5', t: 1433},
{fy: '2010-2011', m:  'APR', w: '1', t: 5975},
{fy: '2010-2011', m:  'APR', w: '2', t: 6245},
{fy: '2010-2011', m:  'APR', w: '3', t: 6963},
{fy: '2010-2011', m:  'APR', w: '4', t: 7305},
{fy: '2010-2011', m:  'APR', w: '5', t: 1931},
{fy: '2011-2012', m:  'APR', w: '1', t: 5746},
{fy: '2011-2012', m:  'APR', w: '2', t: 6814},
{fy: '2011-2012', m:  'APR', w: '3', t: 9058},
{fy: '2011-2012', m:  'APR', w: '4', t: 8319},
{fy: '2011-2012', m:  'APR', w: '5', t: 2439},
{fy: '2012-2013', m:  'APR', w: '1', t: 7950},
{fy: '2012-2013', m:  'APR', w: '2', t: 6912},
{fy: '2012-2013', m:  'APR', w: '3', t: 7681},
{fy: '2012-2013', m:  'APR', w: '4', t: 8975},
{fy: '2012-2013', m:  'APR', w: '5', t: 4390},
{fy: '2013-2014', m:  'APR', w: '1', t: 6041},
{fy: '2013-2014', m:  'APR', w: '2', t: 7876},
{fy: '2013-2014', m:  'APR', w: '3', t: 8369},
{fy: '2013-2014', m:  'APR', w: '4', t: 9552},
{fy: '2013-2014', m:  'APR', w: '5', t: 2779},
{fy: '2014-2015', m:  'APR', w: '1', t: 6765},
{fy: '2014-2015', m:  'APR', w: '2', t: 8599},
{fy: '2014-2015', m:  'APR', w: '3', t: 11014},
{fy: '2014-2015', m:  'APR', w: '4', t: 9804},
{fy: '2014-2015', m:  'APR', w: '5', t: 3470},
{fy: '2015-2016', m:  'APR', w: '1', t: 10483},
{fy: '2015-2016', m:  'APR', w: '2', t: 7968},
{fy: '2015-2016', m:  'APR', w: '3', t: 7659},
{fy: '2015-2016', m:  'APR', w: '4', t: 9394},
{fy: '2015-2016', m:  'APR', w: '5', t: 2595},
{fy: '2016-2017', m:  'APR', w: '1', t: 7147},
{fy: '2016-2017', m:  'APR', w: '2', t: 9475},
{fy: '2016-2017', m:  'APR', w: '3', t: 9572},
{fy: '2016-2017', m:  'APR', w: '4', t: 8465},
{fy: '2016-2017', m:  'APR', w: '5', t: 2728},
{fy: '2006-2007', m:  'AUG', w: '1', t: 3252},
{fy: '2006-2007', m:  'AUG', w: '2', t: 3761},
{fy: '2006-2007', m:  'AUG', w: '3', t: 3986},
{fy: '2006-2007', m:  'AUG', w: '4', t: 2386},
{fy: '2006-2007', m:  'AUG', w: '5', t: 608},
{fy: '2007-2008', m:  'AUG', w: '1', t: 2755},
{fy: '2007-2008', m:  'AUG', w: '2', t: 2935},
{fy: '2007-2008', m:  'AUG', w: '3', t: 3519},
{fy: '2007-2008', m:  'AUG', w: '4', t: 2544},
{fy: '2007-2008', m:  'AUG', w: '5', t: 867},
{fy: '2008-2009', m:  'AUG', w: '1', t: 1276},
{fy: '2008-2009', m:  'AUG', w: '2', t: 1332},
{fy: '2008-2009', m:  'AUG', w: '3', t: 1885},
{fy: '2008-2009', m:  'AUG', w: '4', t: 1271},
{fy: '2008-2009', m:  'AUG', w: '5', t: 1998},
{fy: '2009-2010', m:  'AUG', w: '1', t: 1876},
{fy: '2009-2010', m:  'AUG', w: '2', t: 1783},
{fy: '2009-2010', m:  'AUG', w: '3', t: 1287},
{fy: '2009-2010', m:  'AUG', w: '4', t: 768},
{fy: '2009-2010', m:  'AUG', w: '5', t: 513},
{fy: '2010-2011', m:  'AUG', w: '1', t: 1996},
{fy: '2010-2011', m:  'AUG', w: '2', t: 2222},
{fy: '2010-2011', m:  'AUG', w: '3', t: 1539},
{fy: '2010-2011', m:  'AUG', w: '4', t: 1628},
{fy: '2010-2011', m:  'AUG', w: '5', t: 566},
{fy: '2011-2012', m:  'AUG', w: '1', t: 2056},
{fy: '2011-2012', m:  'AUG', w: '2', t: 3600},
{fy: '2011-2012', m:  'AUG', w: '3', t: 2451},
{fy: '2011-2012', m:  'AUG', w: '4', t: 1863},
{fy: '2011-2012', m:  'AUG', w: '5', t: 1013},
{fy: '2012-2013', m:  'AUG', w: '1', t: 2245},
{fy: '2012-2013', m:  'AUG', w: '2', t: 2229},
{fy: '2012-2013', m:  'AUG', w: '3', t: 4989},
{fy: '2012-2013', m:  'AUG', w: '4', t: 3886},
{fy: '2012-2013', m:  'AUG', w: '5', t: 1150},
{fy: '2013-2014', m:  'AUG', w: '1', t: 2159},
{fy: '2013-2014', m:  'AUG', w: '2', t: 6428},
{fy: '2013-2014', m:  'AUG', w: '3', t: 3275},
{fy: '2013-2014', m:  'AUG', w: '4', t: 2471},
{fy: '2013-2014', m:  'AUG', w: '5', t: 1015},
{fy: '2014-2015', m:  'AUG', w: '1', t: 3647},
{fy: '2014-2015', m:  'AUG', w: '2', t: 3364},
{fy: '2014-2015', m:  'AUG', w: '3', t: 4915},
{fy: '2014-2015', m:  'AUG', w: '4', t: 2894},
{fy: '2014-2015', m:  'AUG', w: '5', t: 2169},
{fy: '2015-2016', m:  'AUG', w: '1', t: 3745},
{fy: '2015-2016', m:  'AUG', w: '2', t: 3669},
{fy: '2015-2016', m:  'AUG', w: '3', t: 4074},
{fy: '2015-2016', m:  'AUG', w: '4', t: 3257},
{fy: '2015-2016', m:  'AUG', w: '5', t: 1984},
{fy: '2016-2017', m:  'AUG', w: '1', t: 2928},
{fy: '2016-2017', m:  'AUG', w: '2', t: 4935},
{fy: '2016-2017', m:  'AUG', w: '3', t: 4048},
{fy: '2016-2017', m:  'AUG', w: '4', t: 2801},
{fy: '2016-2017', m:  'AUG', w: '5', t: 779},
{fy: '2005-2006', m:  'DEC', w: '1', t: 1747},
{fy: '2005-2006', m:  'DEC', w: '2', t: 1901},
{fy: '2005-2006', m:  'DEC', w: '3', t: 1961},
{fy: '2005-2006', m:  'DEC', w: '4', t: 8039},
{fy: '2005-2006', m:  'DEC', w: '5', t: 5043},
{fy: '2006-2007', m:  'DEC', w: '1', t: 2637},
{fy: '2006-2007', m:  'DEC', w: '2', t: 2443},
{fy: '2006-2007', m:  'DEC', w: '3', t: 2531},
{fy: '2006-2007', m:  'DEC', w: '4', t: 9263},
{fy: '2006-2007', m:  'DEC', w: '5', t: 4857},
{fy: '2007-2008', m:  'DEC', w: '1', t: 996},
{fy: '2007-2008', m:  'DEC', w: '2', t: 1073},
{fy: '2007-2008', m:  'DEC', w: '3', t: 1166},
{fy: '2007-2008', m:  'DEC', w: '4', t: 4346},
{fy: '2007-2008', m:  'DEC', w: '5', t: 2102},
{fy: '2008-2009', m:  'DEC', w: '1', t: 1139},
{fy: '2008-2009', m:  'DEC', w: '2', t: 1802},
{fy: '2008-2009', m:  'DEC', w: '3', t: 1627},
{fy: '2008-2009', m:  'DEC', w: '4', t: 4625},
{fy: '2008-2009', m:  'DEC', w: '5', t: 1634},
{fy: '2009-2010', m:  'DEC', w: '1', t: 1761},
{fy: '2009-2010', m:  'DEC', w: '2', t: 1702},
{fy: '2009-2010', m:  'DEC', w: '3', t: 2106},
{fy: '2009-2010', m:  'DEC', w: '4', t: 5511},
{fy: '2009-2010', m:  'DEC', w: '5', t: 1902},
{fy: '2010-2011', m:  'DEC', w: '1', t: 1924},
{fy: '2010-2011', m:  'DEC', w: '2', t: 2284},
{fy: '2010-2011', m:  'DEC', w: '3', t: 2619},
{fy: '2010-2011', m:  'DEC', w: '4', t: 5514},
{fy: '2010-2011', m:  'DEC', w: '5', t: 2474},
{fy: '2011-2012', m:  'DEC', w: '1', t: 2880},
{fy: '2011-2012', m:  'DEC', w: '2', t: 2714},
{fy: '2011-2012', m:  'DEC', w: '3', t: 2940},
{fy: '2011-2012', m:  'DEC', w: '4', t: 5780},
{fy: '2011-2012', m:  'DEC', w: '5', t: 2341},
{fy: '2012-2013', m:  'DEC', w: '1', t: 2422},
{fy: '2012-2013', m:  'DEC', w: '2', t: 2728},
{fy: '2012-2013', m:  'DEC', w: '3', t: 3201},
{fy: '2012-2013', m:  'DEC', w: '4', t: 6367},
{fy: '2012-2013', m:  'DEC', w: '5', t: 2988},
{fy: '2013-2014', m:  'DEC', w: '1', t: 3025},
{fy: '2013-2014', m:  'DEC', w: '2', t: 3305},
{fy: '2013-2014', m:  'DEC', w: '3', t: 3578},
{fy: '2013-2014', m:  'DEC', w: '4', t: 6791},
{fy: '2013-2014', m:  'DEC', w: '5', t: 3062},
{fy: '2014-2015', m:  'DEC', w: '1', t: 3123},
{fy: '2014-2015', m:  'DEC', w: '2', t: 3296},
{fy: '2014-2015', m:  'DEC', w: '3', t: 3640},
{fy: '2014-2015', m:  'DEC', w: '4', t: 8387},
{fy: '2014-2015', m:  'DEC', w: '5', t: 2754},
{fy: '2015-2016', m:  'DEC', w: '1', t: 3668},
{fy: '2015-2016', m:  'DEC', w: '2', t: 4237},
{fy: '2015-2016', m:  'DEC', w: '3', t: 4578},
{fy: '2015-2016', m:  'DEC', w: '4', t: 8253},
{fy: '2015-2016', m:  'DEC', w: '5', t: 2946},
{fy: '2005-2006', m:  'FEB', w: '1', t: 3396},
{fy: '2005-2006', m:  'FEB', w: '2', t: 4324},
{fy: '2005-2006', m:  'FEB', w: '3', t: 3319},
{fy: '2005-2006', m:  'FEB', w: '4', t: 3236},
{fy: '2006-2007', m:  'FEB', w: '1', t: 1996},
{fy: '2006-2007', m:  'FEB', w: '2', t: 2071},
{fy: '2006-2007', m:  'FEB', w: '3', t: 2451},
{fy: '2006-2007', m:  'FEB', w: '4', t: 2551},
{fy: '2007-2008', m:  'FEB', w: '1', t: 1227},
{fy: '2007-2008', m:  'FEB', w: '2', t: 1157},
{fy: '2007-2008', m:  'FEB', w: '3', t: 1302},
{fy: '2007-2008', m:  'FEB', w: '4', t: 1125},
{fy: '2007-2008', m:  'FEB', w: '5', t: 115},
{fy: '2008-2009', m:  'FEB', w: '1', t: 1271},
{fy: '2008-2009', m:  'FEB', w: '2', t: 1375},
{fy: '2008-2009', m:  'FEB', w: '3', t: 1325},
{fy: '2008-2009', m:  'FEB', w: '4', t: 1465},
{fy: '2009-2010', m:  'FEB', w: '1', t: 1573},
{fy: '2009-2010', m:  'FEB', w: '2', t: 2423},
{fy: '2009-2010', m:  'FEB', w: '3', t: 1736},
{fy: '2009-2010', m:  'FEB', w: '4', t: 2105},
{fy: '2010-2011', m:  'FEB', w: '1', t: 2620},
{fy: '2010-2011', m:  'FEB', w: '2', t: 2212},
{fy: '2010-2011', m:  'FEB', w: '3', t: 2330},
{fy: '2010-2011', m:  'FEB', w: '4', t: 1882},
{fy: '2011-2012', m:  'FEB', w: '1', t: 2345},
{fy: '2011-2012', m:  'FEB', w: '2', t: 2739},
{fy: '2011-2012', m:  'FEB', w: '3', t: 3204},
{fy: '2011-2012', m:  'FEB', w: '4', t: 2170},
{fy: '2011-2012', m:  'FEB', w: '5', t: 199},
{fy: '2012-2013', m:  'FEB', w: '1', t: 2513},
{fy: '2012-2013', m:  'FEB', w: '2', t: 2868},
{fy: '2012-2013', m:  'FEB', w: '3', t: 2650},
{fy: '2012-2013', m:  'FEB', w: '4', t: 2476},
{fy: '2013-2014', m:  'FEB', w: '1', t: 2862},
{fy: '2013-2014', m:  'FEB', w: '2', t: 2883},
{fy: '2013-2014', m:  'FEB', w: '3', t: 3259},
{fy: '2013-2014', m:  'FEB', w: '4', t: 3387},
{fy: '2014-2015', m:  'FEB', w: '1', t: 2973},
{fy: '2014-2015', m:  'FEB', w: '2', t: 3250},
{fy: '2014-2015', m:  'FEB', w: '3', t: 3621},
{fy: '2014-2015', m:  'FEB', w: '4', t: 2905},
{fy: '2015-2016', m:  'FEB', w: '1', t: 3649},
{fy: '2015-2016', m:  'FEB', w: '2', t: 4114},
{fy: '2015-2016', m:  'FEB', w: '3', t: 4125},
{fy: '2015-2016', m:  'FEB', w: '4', t: 3869},
{fy: '2015-2016', m:  'FEB', w: '5', t: 538},
{fy: '2005-2006', m:  'JAN', w: '1', t: 6191},
{fy: '2005-2006', m:  'JAN', w: '2', t: 5901},
{fy: '2005-2006', m:  'JAN', w: '3', t: 4185},
{fy: '2005-2006', m:  'JAN', w: '4', t: 5795},
{fy: '2005-2006', m:  'JAN', w: '5', t: 2236},
{fy: '2006-2007', m:  'JAN', w: '1', t: 5256},
{fy: '2006-2007', m:  'JAN', w: '2', t: 3581},
{fy: '2006-2007', m:  'JAN', w: '3', t: 3979},
{fy: '2006-2007', m:  'JAN', w: '4', t: 3787},
{fy: '2006-2007', m:  'JAN', w: '5', t: 1419},
{fy: '2007-2008', m:  'JAN', w: '1', t: 2330},
{fy: '2007-2008', m:  'JAN', w: '2', t: 1719},
{fy: '2007-2008', m:  'JAN', w: '3', t: 1817},
{fy: '2007-2008', m:  'JAN', w: '4', t: 1621},
{fy: '2007-2008', m:  'JAN', w: '5', t: 423},
{fy: '2008-2009', m:  'JAN', w: '1', t: 2947},
{fy: '2008-2009', m:  'JAN', w: '2', t: 1841},
{fy: '2008-2009', m:  'JAN', w: '3', t: 1515},
{fy: '2008-2009', m:  'JAN', w: '4', t: 2314},
{fy: '2008-2009', m:  'JAN', w: '5', t: 559},
{fy: '2009-2010', m:  'JAN', w: '1', t: 3830},
{fy: '2009-2010', m:  'JAN', w: '2', t: 2280},
{fy: '2009-2010', m:  'JAN', w: '3', t: 2248},
{fy: '2009-2010', m:  'JAN', w: '4', t: 2355},
{fy: '2009-2010', m:  'JAN', w: '5', t: 1066},
{fy: '2010-2011', m:  'JAN', w: '1', t: 4326},
{fy: '2010-2011', m:  'JAN', w: '2', t: 3247},
{fy: '2010-2011', m:  'JAN', w: '3', t: 3001},
{fy: '2010-2011', m:  'JAN', w: '4', t: 2415},
{fy: '2010-2011', m:  'JAN', w: '5', t: 1306},
{fy: '2011-2012', m:  'JAN', w: '1', t: 4242},
{fy: '2011-2012', m:  'JAN', w: '2', t: 3355},
{fy: '2011-2012', m:  'JAN', w: '3', t: 3518},
{fy: '2011-2012', m:  'JAN', w: '4', t: 3581},
{fy: '2011-2012', m:  'JAN', w: '5', t: 1280},
{fy: '2012-2013', m:  'JAN', w: '1', t: 4592},
{fy: '2012-2013', m:  'JAN', w: '2', t: 4301},
{fy: '2012-2013', m:  'JAN', w: '3', t: 3382},
{fy: '2012-2013', m:  'JAN', w: '4', t: 4069},
{fy: '2012-2013', m:  'JAN', w: '5', t: 873},
{fy: '2013-2014', m:  'JAN', w: '1', t: 4692},
{fy: '2013-2014', m:  'JAN', w: '2', t: 4980},
{fy: '2013-2014', m:  'JAN', w: '3', t: 4189},
{fy: '2013-2014', m:  'JAN', w: '4', t: 2961},
{fy: '2013-2014', m:  'JAN', w: '5', t: 1028},
{fy: '2014-2015', m:  'JAN', w: '1', t: 5990},
{fy: '2014-2015', m:  'JAN', w: '2', t: 4532},
{fy: '2014-2015', m:  'JAN', w: '3', t: 5057},
{fy: '2014-2015', m:  'JAN', w: '4', t: 4637},
{fy: '2014-2015', m:  'JAN', w: '5', t: 1046},
{fy: '2015-2016', m:  'JAN', w: '1', t: 6760},
{fy: '2015-2016', m:  'JAN', w: '2', t: 4808},
{fy: '2015-2016', m:  'JAN', w: '3', t: 4971},
{fy: '2015-2016', m:  'JAN', w: '4', t: 4339},
{fy: '2015-2016', m:  'JAN', w: '5', t: 1573},
{fy: '2006-2007', m:  'JUL', w: '1', t: 2815},
{fy: '2006-2007', m:  'JUL', w: '2', t: 3100},
{fy: '2006-2007', m:  'JUL', w: '3', t: 2710},
{fy: '2006-2007', m:  'JUL', w: '4', t: 3486},
{fy: '2006-2007', m:  'JUL', w: '5', t: 2043},
{fy: '2007-2008', m:  'JUL', w: '1', t: 2591},
{fy: '2007-2008', m:  'JUL', w: '2', t: 3258},
{fy: '2007-2008', m:  'JUL', w: '3', t: 3419},
{fy: '2007-2008', m:  'JUL', w: '4', t: 3333},
{fy: '2007-2008', m:  'JUL', w: '5', t: 1545},
{fy: '2008-2009', m:  'JUL', w: '1', t: 1650},
{fy: '2008-2009', m:  'JUL', w: '2', t: 1806},
{fy: '2008-2009', m:  'JUL', w: '3', t: 1778},
{fy: '2008-2009', m:  'JUL', w: '4', t: 1301},
{fy: '2008-2009', m:  'JUL', w: '5', t: 352},
{fy: '2009-2010', m:  'JUL', w: '1', t: 1914},
{fy: '2009-2010', m:  'JUL', w: '2', t: 1838},
{fy: '2009-2010', m:  'JUL', w: '3', t: 1612},
{fy: '2009-2010', m:  'JUL', w: '4', t: 1820},
{fy: '2009-2010', m:  'JUL', w: '5', t: 522},
{fy: '2010-2011', m:  'JUL', w: '1', t: 2444},
{fy: '2010-2011', m:  'JUL', w: '2', t: 2438},
{fy: '2010-2011', m:  'JUL', w: '3', t: 2422},
{fy: '2010-2011', m:  'JUL', w: '4', t: 1979},
{fy: '2010-2011', m:  'JUL', w: '5', t: 709},
{fy: '2011-2012', m:  'JUL', w: '1', t: 3249},
{fy: '2011-2012', m:  'JUL', w: '2', t: 3427},
{fy: '2011-2012', m:  'JUL', w: '3', t: 2586},
{fy: '2011-2012', m:  'JUL', w: '4', t: 2928},
{fy: '2011-2012', m:  'JUL', w: '5', t: 1762},
{fy: '2012-2013', m:  'JUL', w: '1', t: 3657},
{fy: '2012-2013', m:  'JUL', w: '2', t: 3792},
{fy: '2012-2013', m:  'JUL', w: '3', t: 2767},
{fy: '2012-2013', m:  'JUL', w: '4', t: 2004},
{fy: '2012-2013', m:  'JUL', w: '5', t: 1045},
{fy: '2013-2014', m:  'JUL', w: '1', t: 3295},
{fy: '2013-2014', m:  'JUL', w: '2', t: 2669},
{fy: '2013-2014', m:  'JUL', w: '3', t: 2101},
{fy: '2013-2014', m:  'JUL', w: '4', t: 2633},
{fy: '2013-2014', m:  'JUL', w: '5', t: 687},
{fy: '2014-2015', m:  'JUL', w: '1', t: 3493},
{fy: '2014-2015', m:  'JUL', w: '2', t: 2856},
{fy: '2014-2015', m:  'JUL', w: '3', t: 3038},
{fy: '2014-2015', m:  'JUL', w: '4', t: 2993},
{fy: '2014-2015', m:  'JUL', w: '5', t: 2946},
{fy: '2015-2016', m:  'JUL', w: '1', t: 4308},
{fy: '2015-2016', m:  'JUL', w: '2', t: 3693},
{fy: '2015-2016', m:  'JUL', w: '3', t: 5842},
{fy: '2015-2016', m:  'JUL', w: '4', t: 4414},
{fy: '2015-2016', m:  'JUL', w: '5', t: 1272},
{fy: '2016-2017', m:  'JUL', w: '1', t: 3456},
{fy: '2016-2017', m:  'JUL', w: '2', t: 5514},
{fy: '2016-2017', m:  'JUL', w: '3', t: 3705},
{fy: '2016-2017', m:  'JUL', w: '4', t: 3564},
{fy: '2016-2017', m:  'JUL', w: '5', t: 1128},
{fy: '2006-2007', m:  'JUN', w: '1', t: 6484},
{fy: '2006-2007', m:  'JUN', w: '2', t: 5714},
{fy: '2006-2007', m:  'JUN', w: '3', t: 4217},
{fy: '2006-2007', m:  'JUN', w: '4', t: 3892},
{fy: '2006-2007', m:  'JUN', w: '5', t: 641},
{fy: '2007-2008', m:  'JUN', w: '1', t: 8195},
{fy: '2007-2008', m:  'JUN', w: '2', t: 6551},
{fy: '2007-2008', m:  'JUN', w: '3', t: 5197},
{fy: '2007-2008', m:  'JUN', w: '4', t: 2733},
{fy: '2007-2008', m:  'JUN', w: '5', t: 892},
{fy: '2008-2009', m:  'JUN', w: '1', t: 3787},
{fy: '2008-2009', m:  'JUN', w: '2', t: 2665},
{fy: '2008-2009', m:  'JUN', w: '3', t: 2347},
{fy: '2008-2009', m:  'JUN', w: '4', t: 2067},
{fy: '2008-2009', m:  'JUN', w: '5', t: 736},
{fy: '2009-2010', m:  'JUN', w: '1', t: 3378},
{fy: '2009-2010', m:  'JUN', w: '2', t: 2701},
{fy: '2009-2010', m:  'JUN', w: '3', t: 2549},
{fy: '2009-2010', m:  'JUN', w: '4', t: 2345},
{fy: '2009-2010', m:  'JUN', w: '5', t: 396},
{fy: '2010-2011', m:  'JUN', w: '1', t: 4519},
{fy: '2010-2011', m:  'JUN', w: '2', t: 3797},
{fy: '2010-2011', m:  'JUN', w: '3', t: 2560},
{fy: '2010-2011', m:  'JUN', w: '4', t: 2993},
{fy: '2010-2011', m:  'JUN', w: '5', t: 554},
{fy: '2011-2012', m:  'JUN', w: '1', t: 5830},
{fy: '2011-2012', m:  'JUN', w: '2', t: 5256},
{fy: '2011-2012', m:  'JUN', w: '3', t: 3723},
{fy: '2011-2012', m:  'JUN', w: '4', t: 3358},
{fy: '2011-2012', m:  'JUN', w: '5', t: 664},
{fy: '2012-2013', m:  'JUN', w: '1', t: 8188},
{fy: '2012-2013', m:  'JUN', w: '2', t: 5652},
{fy: '2012-2013', m:  'JUN', w: '3', t: 4979},
{fy: '2012-2013', m:  'JUN', w: '4', t: 4285},
{fy: '2012-2013', m:  'JUN', w: '5', t: 1121},
{fy: '2013-2014', m:  'JUN', w: '1', t: 6832},
{fy: '2013-2014', m:  'JUN', w: '2', t: 5610},
{fy: '2013-2014', m:  'JUN', w: '3', t: 3991},
{fy: '2013-2014', m:  'JUN', w: '4', t: 3305},
{fy: '2013-2014', m:  'JUN', w: '5', t: 1569},
{fy: '2014-2015', m:  'JUN', w: '1', t: 8286},
{fy: '2014-2015', m:  'JUN', w: '2', t: 6377},
{fy: '2014-2015', m:  'JUN', w: '3', t: 5201},
{fy: '2014-2015', m:  'JUN', w: '4', t: 4544},
{fy: '2014-2015', m:  'JUN', w: '5', t: 1310},
{fy: '2015-2016', m:  'JUN', w: '1', t: 8074},
{fy: '2015-2016', m:  'JUN', w: '2', t: 7119},
{fy: '2015-2016', m:  'JUN', w: '3', t: 5054},
{fy: '2015-2016', m:  'JUN', w: '4', t: 4004},
{fy: '2015-2016', m:  'JUN', w: '5', t: 882},
{fy: '2016-2017', m:  'JUN', w: '1', t: 7665},
{fy: '2016-2017', m:  'JUN', w: '2', t: 5229},
{fy: '2016-2017', m:  'JUN', w: '3', t: 4159},
{fy: '2016-2017', m:  'JUN', w: '4', t: 2909},
{fy: '2016-2017', m:  'JUN', w: '5', t: 359},
{fy: '2005-2006', m:  'MAR', w: '1', t: 2861},
{fy: '2005-2006', m:  'MAR', w: '2', t: 3093},
{fy: '2005-2006', m:  'MAR', w: '3', t: 3250},
{fy: '2005-2006', m:  'MAR', w: '4', t: 4667},
{fy: '2005-2006', m:  'MAR', w: '5', t: 3007},
{fy: '2006-2007', m:  'MAR', w: '1', t: 2525},
{fy: '2006-2007', m:  'MAR', w: '2', t: 2137},
{fy: '2006-2007', m:  'MAR', w: '3', t: 3531},
{fy: '2006-2007', m:  'MAR', w: '4', t: 3419},
{fy: '2006-2007', m:  'MAR', w: '5', t: 2589},
{fy: '2007-2008', m:  'MAR', w: '1', t: 1214},
{fy: '2007-2008', m:  'MAR', w: '2', t: 1132},
{fy: '2007-2008', m:  'MAR', w: '3', t: 1346},
{fy: '2007-2008', m:  'MAR', w: '4', t: 1464},
{fy: '2007-2008', m:  'MAR', w: '5', t: 1327},
{fy: '2008-2009', m:  'MAR', w: '1', t: 1242},
{fy: '2008-2009', m:  'MAR', w: '2', t: 1637},
{fy: '2008-2009', m:  'MAR', w: '3', t: 1377},
{fy: '2008-2009', m:  'MAR', w: '4', t: 2607},
{fy: '2008-2009', m:  'MAR', w: '5', t: 1446},
{fy: '2009-2010', m:  'MAR', w: '1', t: 1977},
{fy: '2009-2010', m:  'MAR', w: '2', t: 2011},
{fy: '2009-2010', m:  'MAR', w: '3', t: 2447},
{fy: '2009-2010', m:  'MAR', w: '4', t: 2738},
{fy: '2009-2010', m:  'MAR', w: '5', t: 1040},
{fy: '2010-2011', m:  'MAR', w: '1', t: 2561},
{fy: '2010-2011', m:  'MAR', w: '2', t: 2874},
{fy: '2010-2011', m:  'MAR', w: '3', t: 2668},
{fy: '2010-2011', m:  'MAR', w: '4', t: 3493},
{fy: '2010-2011', m:  'MAR', w: '5', t: 1346},
{fy: '2011-2012', m:  'MAR', w: '1', t: 2604},
{fy: '2011-2012', m:  'MAR', w: '2', t: 3097},
{fy: '2011-2012', m:  'MAR', w: '3', t: 2667},
{fy: '2011-2012', m:  'MAR', w: '4', t: 4474},
{fy: '2011-2012', m:  'MAR', w: '5', t: 1761},
{fy: '2012-2013', m:  'MAR', w: '1', t: 2772},
{fy: '2012-2013', m:  'MAR', w: '2', t: 2848},
{fy: '2012-2013', m:  'MAR', w: '3', t: 3099},
{fy: '2012-2013', m:  'MAR', w: '4', t: 4627},
{fy: '2012-2013', m:  'MAR', w: '5', t: 4047},
{fy: '2013-2014', m:  'MAR', w: '1', t: 3192},
{fy: '2013-2014', m:  'MAR', w: '2', t: 3088},
{fy: '2013-2014', m:  'MAR', w: '3', t: 4036},
{fy: '2013-2014', m:  'MAR', w: '4', t: 4493},
{fy: '2013-2014', m:  'MAR', w: '5', t: 4433},
{fy: '2014-2015', m:  'MAR', w: '1', t: 3957},
{fy: '2014-2015', m:  'MAR', w: '2', t: 3746},
{fy: '2014-2015', m:  'MAR', w: '3', t: 3887},
{fy: '2014-2015', m:  'MAR', w: '4', t: 4812},
{fy: '2014-2015', m:  'MAR', w: '5', t: 3369},
{fy: '2015-2016', m:  'MAR', w: '1', t: 4720},
{fy: '2015-2016', m:  'MAR', w: '2', t: 5485},
{fy: '2015-2016', m:  'MAR', w: '3', t: 5000},
{fy: '2015-2016', m:  'MAR', w: '4', t: 9259},
{fy: '2015-2016', m:  'MAR', w: '5', t: 2998},
{fy: '2006-2007', m:  'MAY', w: '1', t: 14346},
{fy: '2006-2007', m:  'MAY', w: '2', t: 12720},
{fy: '2006-2007', m:  'MAY', w: '3', t: 14219},
{fy: '2006-2007', m:  'MAY', w: '4', t: 15604},
{fy: '2006-2007', m:  'MAY', w: '5', t: 4454},
{fy: '2007-2008', m:  'MAY', w: '1', t: 12743},
{fy: '2007-2008', m:  'MAY', w: '2', t: 13079},
{fy: '2007-2008', m:  'MAY', w: '3', t: 16107},
{fy: '2007-2008', m:  'MAY', w: '4', t: 15845},
{fy: '2007-2008', m:  'MAY', w: '5', t: 5049},
{fy: '2008-2009', m:  'MAY', w: '1', t: 6828},
{fy: '2008-2009', m:  'MAY', w: '2', t: 6894},
{fy: '2008-2009', m:  'MAY', w: '3', t: 7837},
{fy: '2008-2009', m:  'MAY', w: '4', t: 7430},
{fy: '2008-2009', m:  'MAY', w: '5', t: 2655},
{fy: '2009-2010', m:  'MAY', w: '1', t: 8277},
{fy: '2009-2010', m:  'MAY', w: '2', t: 7623},
{fy: '2009-2010', m:  'MAY', w: '3', t: 8076},
{fy: '2009-2010', m:  'MAY', w: '4', t: 7964},
{fy: '2009-2010', m:  'MAY', w: '5', t: 3548},
{fy: '2010-2011', m:  'MAY', w: '1', t: 10251},
{fy: '2010-2011', m:  'MAY', w: '2', t: 9241},
{fy: '2010-2011', m:  'MAY', w: '3', t: 8235},
{fy: '2010-2011', m:  'MAY', w: '4', t: 7965},
{fy: '2010-2011', m:  'MAY', w: '5', t: 3945},
{fy: '2011-2012', m:  'MAY', w: '1', t: 9140},
{fy: '2011-2012', m:  'MAY', w: '2', t: 10879},
{fy: '2011-2012', m:  'MAY', w: '3', t: 10556},
{fy: '2011-2012', m:  'MAY', w: '4', t: 11274},
{fy: '2011-2012', m:  'MAY', w: '5', t: 4472},
{fy: '2012-2013', m:  'MAY', w: '1', t: 12173},
{fy: '2012-2013', m:  'MAY', w: '2', t: 12945},
{fy: '2012-2013', m:  'MAY', w: '3', t: 12323},
{fy: '2012-2013', m:  'MAY', w: '4', t: 13535},
{fy: '2012-2013', m:  'MAY', w: '5', t: 3645},
{fy: '2013-2014', m:  'MAY', w: '1', t: 11690},
{fy: '2013-2014', m:  'MAY', w: '2', t: 12873},
{fy: '2013-2014', m:  'MAY', w: '3', t: 12698},
{fy: '2013-2014', m:  'MAY', w: '4', t: 13247},
{fy: '2013-2014', m:  'MAY', w: '5', t: 3819},
{fy: '2014-2015', m:  'MAY', w: '1', t: 13444},
{fy: '2014-2015', m:  'MAY', w: '2', t: 11390},
{fy: '2014-2015', m:  'MAY', w: '3', t: 13012},
{fy: '2014-2015', m:  'MAY', w: '4', t: 13558},
{fy: '2014-2015', m:  'MAY', w: '5', t: 5246},
{fy: '2015-2016', m:  'MAY', w: '1', t: 13069},
{fy: '2015-2016', m:  'MAY', w: '2', t: 12487},
{fy: '2015-2016', m:  'MAY', w: '3', t: 14359},
{fy: '2015-2016', m:  'MAY', w: '4', t: 15693},
{fy: '2015-2016', m:  'MAY', w: '5', t: 5766},
{fy: '2016-2017', m:  'MAY', w: '1', t: 11209},
{fy: '2016-2017', m:  'MAY', w: '2', t: 13559},
{fy: '2016-2017', m:  'MAY', w: '3', t: 12612},
{fy: '2016-2017', m:  'MAY', w: '4', t: 14062},
{fy: '2016-2017', m:  'MAY', w: '5', t: 5665},
{fy: '2005-2006', m:  'NOV', w: '1', t: 5599},
{fy: '2005-2006', m:  'NOV', w: '2', t: 2055},
{fy: '2005-2006', m:  'NOV', w: '3', t: 1925},
{fy: '2005-2006', m:  'NOV', w: '4', t: 1218},
{fy: '2005-2006', m:  'NOV', w: '5', t: 368},
{fy: '2006-2007', m:  'NOV', w: '1', t: 4049},
{fy: '2006-2007', m:  'NOV', w: '2', t: 3341},
{fy: '2006-2007', m:  'NOV', w: '3', t: 2781},
{fy: '2006-2007', m:  'NOV', w: '4', t: 2977},
{fy: '2006-2007', m:  'NOV', w: '5', t: 653},
{fy: '2007-2008', m:  'NOV', w: '1', t: 1503},
{fy: '2007-2008', m:  'NOV', w: '2', t: 2529},
{fy: '2007-2008', m:  'NOV', w: '3', t: 1055},
{fy: '2007-2008', m:  'NOV', w: '4', t: 1017},
{fy: '2007-2008', m:  'NOV', w: '5', t: 193},
{fy: '2008-2009', m:  'NOV', w: '1', t: 1852},
{fy: '2008-2009', m:  'NOV', w: '2', t: 1353},
{fy: '2008-2009', m:  'NOV', w: '3', t: 1209},
{fy: '2008-2009', m:  'NOV', w: '4', t: 996},
{fy: '2008-2009', m:  'NOV', w: '5', t: 339},
{fy: '2009-2010', m:  'NOV', w: '1', t: 1735},
{fy: '2009-2010', m:  'NOV', w: '2', t: 1089},
{fy: '2009-2010', m:  'NOV', w: '3', t: 1138},
{fy: '2009-2010', m:  'NOV', w: '4', t: 1608},
{fy: '2009-2010', m:  'NOV', w: '5', t: 917},
{fy: '2010-2011', m:  'NOV', w: '1', t: 3280},
{fy: '2010-2011', m:  'NOV', w: '2', t: 1778},
{fy: '2010-2011', m:  'NOV', w: '3', t: 2325},
{fy: '2010-2011', m:  'NOV', w: '4', t: 2325},
{fy: '2010-2011', m:  'NOV', w: '5', t: 490},
{fy: '2011-2012', m:  'NOV', w: '1', t: 3143},
{fy: '2011-2012', m:  'NOV', w: '2', t: 3675},
{fy: '2011-2012', m:  'NOV', w: '3', t: 2278},
{fy: '2011-2012', m:  'NOV', w: '4', t: 2062},
{fy: '2011-2012', m:  'NOV', w: '5', t: 498},
{fy: '2012-2013', m:  'NOV', w: '1', t: 1678},
{fy: '2012-2013', m:  'NOV', w: '2', t: 3894},
{fy: '2012-2013', m:  'NOV', w: '3', t: 2542},
{fy: '2012-2013', m:  'NOV', w: '4', t: 2252},
{fy: '2012-2013', m:  'NOV', w: '5', t: 581},
{fy: '2013-2014', m:  'NOV', w: '1', t: 5001},
{fy: '2013-2014', m:  'NOV', w: '2', t: 2716},
{fy: '2013-2014', m:  'NOV', w: '3', t: 2147},
{fy: '2013-2014', m:  'NOV', w: '4', t: 1933},
{fy: '2013-2014', m:  'NOV', w: '5', t: 910},
{fy: '2014-2015', m:  'NOV', w: '1', t: 3899},
{fy: '2014-2015', m:  'NOV', w: '2', t: 2640},
{fy: '2014-2015', m:  'NOV', w: '3', t: 2429},
{fy: '2014-2015', m:  'NOV', w: '4', t: 3090},
{fy: '2014-2015', m:  'NOV', w: '5', t: 1273},
{fy: '2015-2016', m:  'NOV', w: '1', t: 2505},
{fy: '2015-2016', m:  'NOV', w: '2', t: 2827},
{fy: '2015-2016', m:  'NOV', w: '3', t: 1429},
{fy: '2015-2016', m:  'NOV', w: '4', t: 2326},
{fy: '2015-2016', m:  'NOV', w: '5', t: 1212},
{fy: '2005-2006', m:  'OCT', w: '1', t: 3793},
{fy: '2005-2006', m:  'OCT', w: '2', t: 7163},
{fy: '2005-2006', m:  'OCT', w: '3', t: 3735},
{fy: '2005-2006', m:  'OCT', w: '4', t: 1186},
{fy: '2005-2006', m:  'OCT', w: '5', t: 785},
{fy: '2006-2007', m:  'OCT', w: '1', t: 10263},
{fy: '2006-2007', m:  'OCT', w: '2', t: 3286},
{fy: '2006-2007', m:  'OCT', w: '3', t: 4099},
{fy: '2006-2007', m:  'OCT', w: '4', t: 11039},
{fy: '2006-2007', m:  'OCT', w: '5', t: 1915},
{fy: '2007-2008', m:  'OCT', w: '1', t: 1378},
{fy: '2007-2008', m:  'OCT', w: '2', t: 2470},
{fy: '2007-2008', m:  'OCT', w: '3', t: 5486},
{fy: '2007-2008', m:  'OCT', w: '4', t: 2055},
{fy: '2007-2008', m:  'OCT', w: '5', t: 324},
{fy: '2008-2009', m:  'OCT', w: '1', t: 4780},
{fy: '2008-2009', m:  'OCT', w: '2', t: 5844},
{fy: '2008-2009', m:  'OCT', w: '3', t: 2239},
{fy: '2008-2009', m:  'OCT', w: '4', t: 1852},
{fy: '2008-2009', m:  'OCT', w: '5', t: 953},
{fy: '2009-2010', m:  'OCT', w: '1', t: 2491},
{fy: '2009-2010', m:  'OCT', w: '2', t: 2311},
{fy: '2009-2010', m:  'OCT', w: '3', t: 3274},
{fy: '2009-2010', m:  'OCT', w: '4', t: 1799},
{fy: '2009-2010', m:  'OCT', w: '5', t: 710},
{fy: '2010-2011', m:  'OCT', w: '1', t: 3285},
{fy: '2010-2011', m:  'OCT', w: '2', t: 5329},
{fy: '2010-2011', m:  'OCT', w: '3', t: 5710},
{fy: '2010-2011', m:  'OCT', w: '4', t: 3280},
{fy: '2010-2011', m:  'OCT', w: '5', t: 1563},
{fy: '2011-2012', m:  'OCT', w: '1', t: 7973},
{fy: '2011-2012', m:  'OCT', w: '2', t: 5595},
{fy: '2011-2012', m:  'OCT', w: '3', t: 3281},
{fy: '2011-2012', m:  'OCT', w: '4', t: 4201},
{fy: '2011-2012', m:  'OCT', w: '5', t: 1742},
{fy: '2012-2013', m:  'OCT', w: '1', t: 2753},
{fy: '2012-2013', m:  'OCT', w: '2', t: 3000},
{fy: '2012-2013', m:  'OCT', w: '3', t: 3448},
{fy: '2012-2013', m:  'OCT', w: '4', t: 8993},
{fy: '2012-2013', m:  'OCT', w: '5', t: 2090},
{fy: '2013-2014', m:  'OCT', w: '1', t: 4296},
{fy: '2013-2014', m:  'OCT', w: '2', t: 6402},
{fy: '2013-2014', m:  'OCT', w: '3', t: 9846},
{fy: '2013-2014', m:  'OCT', w: '4', t: 2778},
{fy: '2013-2014', m:  'OCT', w: '5', t: 787},
{fy: '2014-2015', m:  'OCT', w: '1', t: 13348},
{fy: '2014-2015', m:  'OCT', w: '2', t: 5862},
{fy: '2014-2015', m:  'OCT', w: '3', t: 3827},
{fy: '2014-2015', m:  'OCT', w: '4', t: 5237},
{fy: '2014-2015', m:  'OCT', w: '5', t: 1139},
{fy: '2015-2016', m:  'OCT', w: '1', t: 5172},
{fy: '2015-2016', m:  'OCT', w: '2', t: 3823},
{fy: '2015-2016', m:  'OCT', w: '3', t: 5068},
{fy: '2015-2016', m:  'OCT', w: '4', t: 10919},
{fy: '2015-2016', m:  'OCT', w: '5', t: 1307},
{fy: '2016-2017', m:  'OCT', w: '1', t: 3292},
{fy: '2016-2017', m:  'OCT', w: '2', t: 11409},
{fy: '2016-2017', m:  'OCT', w: '3', t: 2569},
{fy: '2005-2006', m:  'SEP', w: '5', t: 4},
{fy: '2006-2007', m:  'SEP', w: '1', t: 3242},
{fy: '2006-2007', m:  'SEP', w: '2', t: 2462},
{fy: '2006-2007', m:  'SEP', w: '3', t: 2700},
{fy: '2006-2007', m:  'SEP', w: '4', t: 7718},
{fy: '2006-2007', m:  'SEP', w: '5', t: 2930},
{fy: '2007-2008', m:  'SEP', w: '1', t: 2160},
{fy: '2007-2008', m:  'SEP', w: '2', t: 1045},
{fy: '2007-2008', m:  'SEP', w: '3', t: 601},
{fy: '2007-2008', m:  'SEP', w: '4', t: 883},
{fy: '2007-2008', m:  'SEP', w: '5', t: 680},
{fy: '2008-2009', m:  'SEP', w: '1', t: 1157},
{fy: '2008-2009', m:  'SEP', w: '2', t: 1236},
{fy: '2008-2009', m:  'SEP', w: '3', t: 837},
{fy: '2008-2009', m:  'SEP', w: '4', t: 1229},
{fy: '2008-2009', m:  'SEP', w: '5', t: 391},
{fy: '2009-2010', m:  'SEP', w: '1', t: 972},
{fy: '2009-2010', m:  'SEP', w: '2', t: 986},
{fy: '2009-2010', m:  'SEP', w: '3', t: 1782},
{fy: '2009-2010', m:  'SEP', w: '4', t: 4571},
{fy: '2009-2010', m:  'SEP', w: '5', t: 695},
{fy: '2010-2011', m:  'SEP', w: '1', t: 1594},
{fy: '2010-2011', m:  'SEP', w: '2', t: 3493},
{fy: '2010-2011', m:  'SEP', w: '3', t: 2238},
{fy: '2010-2011', m:  'SEP', w: '4', t: 2029},
{fy: '2010-2011', m:  'SEP', w: '5', t: 237},
{fy: '2011-2012', m:  'SEP', w: '1', t: 5055},
{fy: '2011-2012', m:  'SEP', w: '2', t: 2658},
{fy: '2011-2012', m:  'SEP', w: '3', t: 2162},
{fy: '2011-2012', m:  'SEP', w: '4', t: 2720},
{fy: '2011-2012', m:  'SEP', w: '5', t: 719},
{fy: '2012-2013', m:  'SEP', w: '1', t: 2796},
{fy: '2012-2013', m:  'SEP', w: '2', t: 2394},
{fy: '2012-2013', m:  'SEP', w: '3', t: 2599},
{fy: '2012-2013', m:  'SEP', w: '4', t: 2400},
{fy: '2012-2013', m:  'SEP', w: '5', t: 1347},
{fy: '2013-2014', m:  'SEP', w: '1', t: 2787},
{fy: '2013-2014', m:  'SEP', w: '2', t: 2634},
{fy: '2013-2014', m:  'SEP', w: '3', t: 2760},
{fy: '2013-2014', m:  'SEP', w: '4', t: 2915},
{fy: '2013-2014', m:  'SEP', w: '5', t: 1242},
{fy: '2014-2015', m:  'SEP', w: '1', t: 2653},
{fy: '2014-2015', m:  'SEP', w: '2', t: 3641},
{fy: '2014-2015', m:  'SEP', w: '3', t: 2775},
{fy: '2014-2015', m:  'SEP', w: '4', t: 3307},
{fy: '2014-2015', m:  'SEP', w: '5', t: 1153},
{fy: '2015-2016', m:  'SEP', w: '1', t: 3073},
{fy: '2015-2016', m:  'SEP', w: '2', t: 2801},
{fy: '2015-2016', m:  'SEP', w: '3', t: 2705},
{fy: '2015-2016', m:  'SEP', w: '4', t: 3549},
{fy: '2015-2016', m:  'SEP', w: '5', t: 792},
{fy: '2016-2017', m:  'SEP', w: '1', t: 3233},
{fy: '2016-2017', m:  'SEP', w: '2', t: 1955},
{fy: '2016-2017', m:  'SEP', w: '3', t: 1819},
{fy: '2016-2017', m:  'SEP', w: '4', t: 2054},
{fy: '2016-2017', m:  'SEP', w: '5', t: 584}
]