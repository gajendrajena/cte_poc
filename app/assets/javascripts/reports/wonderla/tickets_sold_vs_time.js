$(document).ready(function() {
  var yearly_data = [
  {name: '2016-2017', y:  174588, drilldown: '2016-2017'},
  {name: '2015-2016', y:  300262, drilldown: '2015-2016'},
  {name: '2014-2015', y:  285590, drilldown: '2014-2015'},
  {name: '2013-2014', y:  255382, drilldown: '2013-2014'},
  {name: '2012-2013', y:  248108, drilldown: '2012-2013'},
  {name: '2011-2012', y:  228116, drilldown: '2011-2012'},
  {name: '2010-2011', y:  190474, drilldown: '2010-2011'},
  {name: '2009-2010', y:  152363, drilldown: '2009-2010'},
  {name: '2008-2009', y:  134329, drilldown: '2008-2009'},
  {name: '2007-2008', y:  203296, drilldown: '2007-2008'},
  {name: '2006-2007', y:  278601, drilldown: '2006-2007'},
  {name: '2005-2006', y:  101983, drilldown: '2005-2006'}
  ];

  var drilldown_series = [] ;
  yearly_data.forEach(function(year_data){
    var monthwise_data = _.where(monthly_data, { financial_year: year_data.name});
    var monthly_year_data_hash = {};
    monthly_year_data_hash.name = 'Monthly Data';
    monthly_year_data_hash.id = year_data.name;
    monthly_year_data_hash.data = _.map( monthwise_data, function(e){
      return [e.month, parseInt(e.tickets_sold) ];
    });
    drilldown_series.push(monthly_year_data_hash);
  });

  $('#yearly_chart').highcharts({
    chart: {type: 'column'},
    title: {text: 'Yearly Tickets Sold'},
    subtitle: {text: 'Click the columns to view for each year.'},
    xAxis: {type: 'category',title: {  text: 'Financial Years ->'}},
    yAxis: {title: {  text: 'Tickets Sold ->'}},
    legend: {enabled: false},
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: { enabled: true, format: '{point.y}'}
      }
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
    },

    series: [{
      name: 'Financial year',
      colorByPoint: true,
      data: yearly_data
    }],
    drilldown: {
      series: drilldown_series
    }
  });

  var yearly_pie_chart_data = [{
    name: 'Tickets Sold',
    colorByPoint: true,
    data: _.map(yearly_data, function(e){ return {name: e.name, y: e.y};})
  }];

  $('#yearly_pie_chart').highcharts({
    chart: {
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Tickets Sold per year'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
          }
        }
      }
    },
    series: yearly_pie_chart_data
  });
});


var monthly_data = [
{financial_year: '2005-2006', month: 'DEC', tickets_sold:  '18691'},
{financial_year: '2005-2006', month: 'FEB', tickets_sold:  '14275'},
{financial_year: '2005-2006', month: 'JAN', tickets_sold:  '24308'},
{financial_year: '2005-2006', month: 'MAR', tickets_sold:  '16878'},
{financial_year: '2005-2006', month: 'NOV', tickets_sold:  '11165'},
{financial_year: '2005-2006', month: 'OCT', tickets_sold:  '16662'},
{financial_year: '2005-2006', month: 'SEP', tickets_sold:  '4'},
{financial_year: '2006-2007', month: 'APR', tickets_sold:  '41685'},
{financial_year: '2006-2007', month: 'AUG', tickets_sold:  '13993'},
{financial_year: '2006-2007', month: 'DEC', tickets_sold:  '21731'},
{financial_year: '2006-2007', month: 'FEB', tickets_sold:  '9069'},
{financial_year: '2006-2007', month: 'JAN', tickets_sold:  '18022'},
{financial_year: '2006-2007', month: 'JUL', tickets_sold:  '14154'},
{financial_year: '2006-2007', month: 'JUN', tickets_sold:  '20948'},
{financial_year: '2006-2007', month: 'MAR', tickets_sold:  '14201'},
{financial_year: '2006-2007', month: 'MAY', tickets_sold:  '61343'},
{financial_year: '2006-2007', month: 'NOV', tickets_sold:  '13801'},
{financial_year: '2006-2007', month: 'OCT', tickets_sold:  '30602'},
{financial_year: '2006-2007', month: 'SEP', tickets_sold:  '19052'},
{financial_year: '2007-2008', month: 'APR', tickets_sold:  '37758'},
{financial_year: '2007-2008', month: 'AUG', tickets_sold:  '12620'},
{financial_year: '2007-2008', month: 'DEC', tickets_sold:  '9683'},
{financial_year: '2007-2008', month: 'FEB', tickets_sold:  '4926'},
{financial_year: '2007-2008', month: 'JAN', tickets_sold:  '7910'},
{financial_year: '2007-2008', month: 'JUL', tickets_sold:  '14146'},
{financial_year: '2007-2008', month: 'JUN', tickets_sold:  '23568'},
{financial_year: '2007-2008', month: 'MAR', tickets_sold:  '6483'},
{financial_year: '2007-2008', month: 'MAY', tickets_sold:  '62823'},
{financial_year: '2007-2008', month: 'NOV', tickets_sold:  '6297'},
{financial_year: '2007-2008', month: 'OCT', tickets_sold:  '11713'},
{financial_year: '2007-2008', month: 'SEP', tickets_sold:  '5369'},
{financial_year: '2008-2009', month: 'APR', tickets_sold:  '16419'},
{financial_year: '2008-2009', month: 'AUG', tickets_sold:  '7762'},
{financial_year: '2008-2009', month: 'DEC', tickets_sold:  '10827'},
{financial_year: '2008-2009', month: 'FEB', tickets_sold:  '5436'},
{financial_year: '2008-2009', month: 'JAN', tickets_sold:  '9176'},
{financial_year: '2008-2009', month: 'JUL', tickets_sold:  '6887'},
{financial_year: '2008-2009', month: 'JUN', tickets_sold:  '11602'},
{financial_year: '2008-2009', month: 'MAR', tickets_sold:  '8309'},
{financial_year: '2008-2009', month: 'MAY', tickets_sold:  '31644'},
{financial_year: '2008-2009', month: 'NOV', tickets_sold:  '5749'},
{financial_year: '2008-2009', month: 'OCT', tickets_sold:  '15668'},
{financial_year: '2008-2009', month: 'SEP', tickets_sold:  '4850'},
{financial_year: '2009-2010', month: 'APR', tickets_sold:  '22684'},
{financial_year: '2009-2010', month: 'AUG', tickets_sold:  '6227'},
{financial_year: '2009-2010', month: 'DEC', tickets_sold:  '12982'},
{financial_year: '2009-2010', month: 'FEB', tickets_sold:  '7837'},
{financial_year: '2009-2010', month: 'JAN', tickets_sold:  '11779'},
{financial_year: '2009-2010', month: 'JUL', tickets_sold:  '7706'},
{financial_year: '2009-2010', month: 'JUN', tickets_sold:  '11369'},
{financial_year: '2009-2010', month: 'MAR', tickets_sold:  '10213'},
{financial_year: '2009-2010', month: 'MAY', tickets_sold:  '35488'},
{financial_year: '2009-2010', month: 'NOV', tickets_sold:  '6487'},
{financial_year: '2009-2010', month: 'OCT', tickets_sold:  '10585'},
{financial_year: '2009-2010', month: 'SEP', tickets_sold:  '9006'},
{financial_year: '2010-2011', month: 'APR', tickets_sold:  '28419'},
{financial_year: '2010-2011', month: 'AUG', tickets_sold:  '7951'},
{financial_year: '2010-2011', month: 'DEC', tickets_sold:  '14815'},
{financial_year: '2010-2011', month: 'FEB', tickets_sold:  '9044'},
{financial_year: '2010-2011', month: 'JAN', tickets_sold:  '14295'},
{financial_year: '2010-2011', month: 'JUL', tickets_sold:  '9992'},
{financial_year: '2010-2011', month: 'JUN', tickets_sold:  '14423'},
{financial_year: '2010-2011', month: 'MAR', tickets_sold:  '12942'},
{financial_year: '2010-2011', month: 'MAY', tickets_sold:  '39637'},
{financial_year: '2010-2011', month: 'NOV', tickets_sold:  '10198'},
{financial_year: '2010-2011', month: 'OCT', tickets_sold:  '19167'},
{financial_year: '2010-2011', month: 'SEP', tickets_sold:  '9591'},
{financial_year: '2011-2012', month: 'APR', tickets_sold:  '32376'},
{financial_year: '2011-2012', month: 'AUG', tickets_sold:  '10983'},
{financial_year: '2011-2012', month: 'DEC', tickets_sold:  '16655'},
{financial_year: '2011-2012', month: 'FEB', tickets_sold:  '10657'},
{financial_year: '2011-2012', month: 'JAN', tickets_sold:  '15976'},
{financial_year: '2011-2012', month: 'JUL', tickets_sold:  '13952'},
{financial_year: '2011-2012', month: 'JUN', tickets_sold:  '18831'},
{financial_year: '2011-2012', month: 'MAR', tickets_sold:  '14603'},
{financial_year: '2011-2012', month: 'MAY', tickets_sold:  '46321'},
{financial_year: '2011-2012', month: 'NOV', tickets_sold:  '11656'},
{financial_year: '2011-2012', month: 'OCT', tickets_sold:  '22792'},
{financial_year: '2011-2012', month: 'SEP', tickets_sold:  '13314'},
{financial_year: '2012-2013', month: 'APR', tickets_sold:  '35908'},
{financial_year: '2012-2013', month: 'AUG', tickets_sold:  '14499'},
{financial_year: '2012-2013', month: 'DEC', tickets_sold:  '17706'},
{financial_year: '2012-2013', month: 'FEB', tickets_sold:  '10507'},
{financial_year: '2012-2013', month: 'JAN', tickets_sold:  '17217'},
{financial_year: '2012-2013', month: 'JUL', tickets_sold:  '13265'},
{financial_year: '2012-2013', month: 'JUN', tickets_sold:  '24225'},
{financial_year: '2012-2013', month: 'MAR', tickets_sold:  '17393'},
{financial_year: '2012-2013', month: 'MAY', tickets_sold:  '54621'},
{financial_year: '2012-2013', month: 'NOV', tickets_sold:  '10947'},
{financial_year: '2012-2013', month: 'OCT', tickets_sold:  '20284'},
{financial_year: '2012-2013', month: 'SEP', tickets_sold:  '11536'},
{financial_year: '2013-2014', month: 'APR', tickets_sold:  '34617'},
{financial_year: '2013-2014', month: 'AUG', tickets_sold:  '15348'},
{financial_year: '2013-2014', month: 'DEC', tickets_sold:  '19761'},
{financial_year: '2013-2014', month: 'FEB', tickets_sold:  '12391'},
{financial_year: '2013-2014', month: 'JAN', tickets_sold:  '17850'},
{financial_year: '2013-2014', month: 'JUL', tickets_sold:  '11385'},
{financial_year: '2013-2014', month: 'JUN', tickets_sold:  '21307'},
{financial_year: '2013-2014', month: 'MAR', tickets_sold:  '19242'},
{financial_year: '2013-2014', month: 'MAY', tickets_sold:  '54327'},
{financial_year: '2013-2014', month: 'NOV', tickets_sold:  '12707'},
{financial_year: '2013-2014', month: 'OCT', tickets_sold:  '24109'},
{financial_year: '2013-2014', month: 'SEP', tickets_sold:  '12338'},
{financial_year: '2014-2015', month: 'APR', tickets_sold:  '39652'},
{financial_year: '2014-2015', month: 'AUG', tickets_sold:  '16989'},
{financial_year: '2014-2015', month: 'DEC', tickets_sold:  '21200'},
{financial_year: '2014-2015', month: 'FEB', tickets_sold:  '12749'},
{financial_year: '2014-2015', month: 'JAN', tickets_sold:  '21262'},
{financial_year: '2014-2015', month: 'JUL', tickets_sold:  '15326'},
{financial_year: '2014-2015', month: 'JUN', tickets_sold:  '25718'},
{financial_year: '2014-2015', month: 'MAR', tickets_sold:  '19771'},
{financial_year: '2014-2015', month: 'MAY', tickets_sold:  '56650'},
{financial_year: '2014-2015', month: 'NOV', tickets_sold:  '13331'},
{financial_year: '2014-2015', month: 'OCT', tickets_sold:  '29413'},
{financial_year: '2014-2015', month: 'SEP', tickets_sold:  '13529'},
{financial_year: '2015-2016', month: 'APR', tickets_sold:  '38099'},
{financial_year: '2015-2016', month: 'AUG', tickets_sold:  '16729'},
{financial_year: '2015-2016', month: 'DEC', tickets_sold:  '23682'},
{financial_year: '2015-2016', month: 'FEB', tickets_sold:  '16295'},
{financial_year: '2015-2016', month: 'JAN', tickets_sold:  '22451'},
{financial_year: '2015-2016', month: 'JUL', tickets_sold:  '19529'},
{financial_year: '2015-2016', month: 'JUN', tickets_sold:  '25133'},
{financial_year: '2015-2016', month: 'MAR', tickets_sold:  '27462'},
{financial_year: '2015-2016', month: 'MAY', tickets_sold:  '61374'},
{financial_year: '2015-2016', month: 'NOV', tickets_sold:  '10299'},
{financial_year: '2015-2016', month: 'OCT', tickets_sold:  '26289'},
{financial_year: '2015-2016', month: 'SEP', tickets_sold:  '12920'},
{financial_year: '2016-2017', month: 'APR', tickets_sold:  '37387'},
{financial_year: '2016-2017', month: 'AUG', tickets_sold:  '15491'},
{financial_year: '2016-2017', month: 'JUL', tickets_sold:  '17367'},
{financial_year: '2016-2017', month: 'JUN', tickets_sold:  '20321'},
{financial_year: '2016-2017', month: 'MAY', tickets_sold:  '57107'},
{financial_year: '2016-2017', month: 'OCT', tickets_sold:  '17270'},
{financial_year: '2016-2017', month: 'SEP', tickets_sold:  '9645'}];

