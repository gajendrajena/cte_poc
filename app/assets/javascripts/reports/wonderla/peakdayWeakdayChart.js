$(document).ready(function() {

  var category_names = ["2016-2017", "2015-2016", "2014-2015", "2013-2014", "2012-2013", "2011-2012", "2010-2011", "2009-2010", "2008-2009", "2007-2008", "2006-2007", "2005-2006"];
  var months_array = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN','JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  var empty_list = [0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0];
  var peakday_child_data = [52856, 63247, 83854, 77846, 79526, 65364, 0, 0, 0, 0, 0, 0];
  var peakday_adult_data = [64472, 79526, 76240, 78252, 93089, 142854, 0, 0, 0, 0, 0, 0];
  var weekday_child_data = [12519, 42758, 47599, 44628, 59723, 89744, 72174, 84132, 89407, 105555, 45320, 28366];
  var weekday_adult_data = [29528, 109910, 91220, 54338, 66251, 91121, 75504, 84132, 86236, 101172, 90011, 31278];
  var yearly_data = [
  {
    name: 'Child (Peekday)',
    data: peakday_child_data,
    stack: 'Peekday'
  },
  {
    name: 'Adult (Peekday)',
    data: peakday_adult_data,
    stack: 'Peekday'
  },
  {
    name: 'Child (Weekday)',
    data: weekday_child_data,
    stack: 'Weekday'
  },
  {
    name: 'Adult (Weekday)',
    data: weekday_adult_data,
    stack: 'Weekday'
  }
  ];

  var peakday_weekday_chart = function(yearly_data, category_names) {

    $('#peakday_weekday_chart').html('');
    $('#peakday_weekday_chart').highcharts({
      chart: {
        type: 'column'
      },
      title: {
        text: 'Peakday - Weekday Report, grouped by Child/Adult'
      },
      subtitle: {
        text: 'Stack 1: Peekday , Stack 2:  Weekday'
      },
      xAxis: {
        categories: category_names
      },
      yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
          text: 'Number of Tickets'
        }
      },
      tooltip: {
        formatter: function () {
          return '<b>' + this.x + '</b><br/>' +
          this.series.name + ': ' + this.y + '<br/>' +
          'Total: ' + this.point.stackTotal;
        }
      },
      plotOptions: {
        column: {
          stacking: 'normal'
        }
      },
      series: yearly_data
    });
  }
  peakday_weekday_chart(yearly_data, category_names);
  var hashValues = function(arr_hash){
    return _.last(_.map(arr_hash, function(e){return _.last(_.values(e))}))
  }

  var getTickets = function(month_data){
    if(hashValues( month_data)) {
      return hashValues( month_data)
    } else {
      return 0
    }
  }

  $('#peak_week_day_filter').change(function(){
    var year = this.value;
    if (year === '0') {
      peakday_weekday_chart(yearly_data, category_names);
    } else {
      var monthwise_data = [], peakday_adult_data = [], weekday_child_data = [], weekday_adult_data = [], peakday_child_data = [];

      monthwise_data = _.where(peak_week_day_data.peakday.adult, { financial_year: year});
      if(monthwise_data.length > 0){
        peakday_adult_data = _.map(months_array, function(mon){
          var month_data = _.where(monthwise_data, {month: mon});
          return getTickets(month_data);
        });
      } else{
        peakday_adult_data = empty_list;
      }

      monthwise_data = _.where(peak_week_day_data.weekday.child, { financial_year: year});
      if(monthwise_data.length > 0){
        weekday_child_data = _.map(months_array, function(mon){
          var month_data = _.where(monthwise_data, {month: mon});
          return getTickets(month_data);
        });
      } else{
        weekday_child_data = empty_list;
      }

      monthwise_data = _.where(peak_week_day_data.weekday.adult, { financial_year: year});
      if(monthwise_data.length > 0){
        weekday_adult_data = _.map(months_array, function(mon){
          var month_data = _.where(monthwise_data, {month: mon});
          return getTickets(month_data);
        });
      } else{
        weekday_adult_data = empty_list;
      }

      monthwise_data = _.where(peak_week_day_data.peakday.child, { financial_year: year});
      if(monthwise_data.length > 0){
        peakday_child_data = _.map(months_array, function(mon){
          var month_data = _.where(monthwise_data, {month: mon});
          return getTickets(month_data);
        });
      } else{
        peakday_child_data = empty_list;
      }

      var updatedData = [
      {
        name: 'Child (Peekday)',
        data: peakday_child_data,
        stack: 'Peekday'
      },
      {
        name: 'Adult (Peekday)',
        data: peakday_adult_data,
        stack: 'Peekday'
      },
      {
        name: 'Child (Weekday)',
        data: weekday_child_data,
        stack: 'Weekday'
      },
      {
        name: 'Adult (Weekday)',
        data: weekday_adult_data,
        stack: 'Weekday'
      }
      ];
      peakday_weekday_chart(updatedData, months_array);
      // $('#peakday_weekday_chart').series[0].setData(updatedData,true);
    }
  });
});

var peak_week_day_data = {
  peakday: {
    child: [
    {financial_year: '2014-2015', month: 'DEC', tickets_sold: 9308},
    {financial_year: '2011-2012', month: 'APR', tickets_sold: 3},
    {financial_year: '2011-2012', month: 'AUG', tickets_sold: 1},
    {financial_year: '2011-2012', month: 'DEC', tickets_sold: 6814},
    {financial_year: '2011-2012', month: 'JAN', tickets_sold: 1502},
    {financial_year: '2011-2012', month: 'JUN', tickets_sold: 2},
    {financial_year: '2011-2012', month: 'MAY', tickets_sold: 44769},
    {financial_year: '2011-2012', month: 'OCT', tickets_sold: 12273},
    {financial_year: '2012-2013', month: 'DEC', tickets_sold: 9355},
    {financial_year: '2012-2013', month: 'JAN', tickets_sold: 1417},
    {financial_year: '2012-2013', month: 'MAR', tickets_sold: 4},
    {financial_year: '2012-2013', month: 'MAY', tickets_sold: 54621},
    {financial_year: '2012-2013', month: 'OCT', tickets_sold: 14129},
    {financial_year: '2013-2014', month: 'DEC', tickets_sold: 10414},
    {financial_year: '2013-2014', month: 'JAN', tickets_sold: 1220},
    {financial_year: '2013-2014', month: 'MAY', tickets_sold: 54327},
    {financial_year: '2013-2014', month: 'OCT', tickets_sold: 11885},
    {financial_year: '2014-2015', month: 'JAN', tickets_sold: 4292},
    {financial_year: '2014-2015', month: 'MAY', tickets_sold: 56274},
    {financial_year: '2014-2015', month: 'OCT', tickets_sold: 10172},
    {financial_year: '2014-2015', month: 'SEP', tickets_sold: 3808},
    {financial_year: '2015-2016', month: 'DEC', tickets_sold: 8083},
    {financial_year: '2015-2016', month: 'JAN', tickets_sold: 3781},
    {financial_year: '2015-2016', month: 'JUL', tickets_sold: 3312},
    {financial_year: '2015-2016', month: 'MAY', tickets_sold: 37079},
    {financial_year: '2015-2016', month: 'OCT', tickets_sold: 10992},
    {financial_year: '2016-2017', month: 'APR', tickets_sold: 14575},
    {financial_year: '2016-2017', month: 'AUG', tickets_sold: 2227},
    {financial_year: '2016-2017', month: 'JUL', tickets_sold: 2766},
    {financial_year: '2016-2017', month: 'JUN', tickets_sold: 2742},
    {financial_year: '2016-2017', month: 'MAY', tickets_sold: 23084},
    {financial_year: '2016-2017', month: 'OCT', tickets_sold: 6015},
    {financial_year: '2016-2017', month: 'SEP', tickets_sold: 1447}
    ],
    adult: [
    {financial_year: '2011-2012', month: 'APR', ticket_sold: 1},
    {financial_year: '2011-2012', month: 'AUG', ticket_sold: 1},
    {financial_year: '2011-2012', month: 'DEC', ticket_sold: 7067},
    {financial_year: '2011-2012', month: 'JAN', ticket_sold: 1568},
    {financial_year: '2011-2012', month: 'JUN', ticket_sold: 2},
    {financial_year: '2011-2012', month: 'MAY', ticket_sold: 43477},
    {financial_year: '2011-2012', month: 'OCT', ticket_sold: 12356},
    {financial_year: '2012-2013', month: 'DEC', ticket_sold: 9355},
    {financial_year: '2012-2013', month: 'JAN', ticket_sold: 1417},
    {financial_year: '2012-2013', month: 'MAR', ticket_sold: 4},
    {financial_year: '2012-2013', month: 'MAY', ticket_sold: 54621},
    {financial_year: '2012-2013', month: 'OCT', ticket_sold: 14129},
    {financial_year: '2013-2014', month: 'DEC', ticket_sold: 10155},
    {financial_year: '2013-2014', month: 'JAN', ticket_sold: 1190},
    {financial_year: '2013-2014', month: 'MAY', ticket_sold: 53290},
    {financial_year: '2013-2014', month: 'OCT', ticket_sold: 11605},
    {financial_year: '2014-2015', month: 'DEC', ticket_sold: 8506},
    {financial_year: '2014-2015', month: 'JAN', ticket_sold: 4112},
    {financial_year: '2014-2015', month: 'MAY', ticket_sold: 52474},
    {financial_year: '2014-2015', month: 'OCT', ticket_sold: 9561},
    {financial_year: '2014-2015', month: 'SEP', ticket_sold: 3599},
    {financial_year: '2015-2016', month: 'DEC', ticket_sold: 9522},
    {financial_year: '2015-2016', month: 'JAN', ticket_sold: 4435},
    {financial_year: '2015-2016', month: 'JUL', ticket_sold: 4538},
    {financial_year: '2015-2016', month: 'MAY', ticket_sold: 61374},
    {financial_year: '2015-2016', month: 'OCT', ticket_sold: 13220}
    ]
  },

  weekday: {
    child: [
    {financial_year: '2005-2006', month: 'DEC', ticket_sold: 1380},
    {financial_year: '2005-2006', month: 'FEB', ticket_sold: 2390},
    {financial_year: '2005-2006', month: 'JAN', ticket_sold: 4098},
    {financial_year: '2005-2006', month: 'MAR', ticket_sold: 2454},
    {financial_year: '2005-2006', month: 'NOV', ticket_sold: 1215},
    {financial_year: '2005-2006', month: 'OCT', ticket_sold: 982},
    {financial_year: '2006-2007', month: 'APR', ticket_sold: 7654},
    {financial_year: '2006-2007', month: 'AUG', ticket_sold: 1798},
    {financial_year: '2006-2007', month: 'DEC', ticket_sold: 1386},
    {financial_year: '2006-2007', month: 'FEB', ticket_sold: 1129},
    {financial_year: '2006-2007', month: 'JAN', ticket_sold: 2862},
    {financial_year: '2006-2007', month: 'JUL', ticket_sold: 1325},
    {financial_year: '2006-2007', month: 'JUN', ticket_sold: 3085},
    {financial_year: '2006-2007', month: 'MAR', ticket_sold: 1517},
    {financial_year: '2006-2007', month: 'MAY', ticket_sold: 15948},
    {financial_year: '2006-2007', month: 'NOV', ticket_sold: 2147},
    {financial_year: '2006-2007', month: 'OCT', ticket_sold: 2602},
    {financial_year: '2006-2007', month: 'SEP', ticket_sold: 1305},
    {financial_year: '2007-2008', month: 'APR', ticket_sold: 7635},
    {financial_year: '2007-2008', month: 'AUG', ticket_sold: 1943},
    {financial_year: '2007-2008', month: 'DEC', ticket_sold: 1830},
    {financial_year: '2007-2008', month: 'FEB', ticket_sold: 2474},
    {financial_year: '2007-2008', month: 'JAN', ticket_sold: 4453},
    {financial_year: '2007-2008', month: 'JUL', ticket_sold: 1845},
    {financial_year: '2007-2008', month: 'JUN', ticket_sold: 3612},
    {financial_year: '2007-2008', month: 'MAR', ticket_sold: 1900},
    {financial_year: '2007-2008', month: 'MAY', ticket_sold: 16604},
    {financial_year: '2007-2008', month: 'NOV', ticket_sold: 1831},
    {financial_year: '2007-2008', month: 'OCT', ticket_sold: 1992},
    {financial_year: '2007-2008', month: 'SEP', ticket_sold: 1480},
    {financial_year: '2008-2009', month: 'APR', ticket_sold: 6532},
    {financial_year: '2008-2009', month: 'AUG', ticket_sold: 1819},
    {financial_year: '2008-2009', month: 'DEC', ticket_sold: 2384},
    {financial_year: '2008-2009', month: 'FEB', ticket_sold: 1936},
    {financial_year: '2008-2009', month: 'JAN', ticket_sold: 2770},
    {financial_year: '2008-2009', month: 'JUL', ticket_sold: 2771},
    {financial_year: '2008-2009', month: 'JUN', ticket_sold: 4258},
    {financial_year: '2008-2009', month: 'MAR', ticket_sold: 2508},
    {financial_year: '2008-2009', month: 'MAY', ticket_sold: 13609},
    {financial_year: '2008-2009', month: 'NOV', ticket_sold: 1851},
    {financial_year: '2008-2009', month: 'OCT', ticket_sold: 2375},
    {financial_year: '2008-2009', month: 'SEP', ticket_sold: 1815},
    {financial_year: '2009-2010', month: 'APR', ticket_sold: 9550},
    {financial_year: '2009-2010', month: 'AUG', ticket_sold: 2439},
    {financial_year: '2009-2010', month: 'DEC', ticket_sold: 3438},
    {financial_year: '2009-2010', month: 'FEB', ticket_sold: 2775},
    {financial_year: '2009-2010', month: 'JAN', ticket_sold: 3360},
    {financial_year: '2009-2010', month: 'JUL', ticket_sold: 3516},
    {financial_year: '2009-2010', month: 'JUN', ticket_sold: 5800},
    {financial_year: '2009-2010', month: 'MAR', ticket_sold: 4277},
    {financial_year: '2009-2010', month: 'MAY', ticket_sold: 16954},
    {financial_year: '2009-2010', month: 'NOV', ticket_sold: 2427},
    {financial_year: '2009-2010', month: 'OCT', ticket_sold: 3938},
    {financial_year: '2009-2010', month: 'SEP', ticket_sold: 1249},
    {financial_year: '2010-2011', month: 'APR', ticket_sold: 15017},
    {financial_year: '2010-2011', month: 'AUG', ticket_sold: 3965},
    {financial_year: '2010-2011', month: 'DEC', ticket_sold: 4398},
    {financial_year: '2010-2011', month: 'FEB', ticket_sold: 4582},
    {financial_year: '2010-2011', month: 'JAN', ticket_sold: 6145},
    {financial_year: '2010-2011', month: 'JUL', ticket_sold: 4496},
    {financial_year: '2010-2011', month: 'JUN', ticket_sold: 7899},
    {financial_year: '2010-2011', month: 'MAR', ticket_sold: 7078},
    {financial_year: '2010-2011', month: 'MAY', ticket_sold: 22769},
    {financial_year: '2010-2011', month: 'NOV', ticket_sold: 4228},
    {financial_year: '2010-2011', month: 'OCT', ticket_sold: 4898},
    {financial_year: '2010-2011', month: 'SEP', ticket_sold: 4269},
    {financial_year: '2011-2012', month: 'APR', ticket_sold: 13731},
    {financial_year: '2011-2012', month: 'AUG', ticket_sold: 3529},
    {financial_year: '2011-2012', month: 'DEC', ticket_sold: 5306},
    {financial_year: '2011-2012', month: 'FEB', ticket_sold: 4754},
    {financial_year: '2011-2012', month: 'JAN', ticket_sold: 7611},
    {financial_year: '2011-2012', month: 'JUL', ticket_sold: 5866},
    {financial_year: '2011-2012', month: 'JUN', ticket_sold: 9864},
    {financial_year: '2011-2012', month: 'MAR', ticket_sold: 6337},
    {financial_year: '2011-2012', month: 'NOV', ticket_sold: 5351},
    {financial_year: '2011-2012', month: 'OCT', ticket_sold: 4290},
    {financial_year: '2011-2012', month: 'SEP', ticket_sold: 5535},
    {financial_year: '2012-2013', month: 'APR', ticket_sold: 17092},
    {financial_year: '2012-2013', month: 'AUG', ticket_sold: 7731},
    {financial_year: '2012-2013', month: 'DEC', ticket_sold: 5043},
    {financial_year: '2012-2013', month: 'FEB', ticket_sold: 5890},
    {financial_year: '2012-2013', month: 'JAN', ticket_sold: 7678},
    {financial_year: '2012-2013', month: 'JUL', ticket_sold: 6936},
    {financial_year: '2012-2013', month: 'JUN', ticket_sold: 12312},
    {financial_year: '2012-2013', month: 'MAR', ticket_sold: 7821},
    {financial_year: '2012-2013', month: 'NOV', ticket_sold: 5212},
    {financial_year: '2012-2013', month: 'OCT', ticket_sold: 3384},
    {financial_year: '2012-2013', month: 'SEP', ticket_sold: 5033},
    {financial_year: '2013-2014', month: 'APR', ticket_sold: 19393},
    {financial_year: '2013-2014', month: 'AUG', ticket_sold: 6504},
    {financial_year: '2013-2014', month: 'DEC', ticket_sold: 6279},
    {financial_year: '2013-2014', month: 'FEB', ticket_sold: 6927},
    {financial_year: '2013-2014', month: 'JAN', ticket_sold: 9201},
    {financial_year: '2013-2014', month: 'JUL', ticket_sold: 6307},
    {financial_year: '2013-2014', month: 'JUN', ticket_sold: 10321},
    {financial_year: '2013-2014', month: 'MAR', ticket_sold: 8658},
    {financial_year: '2013-2014', month: 'NOV', ticket_sold: 4666},
    {financial_year: '2013-2014', month: 'OCT', ticket_sold: 5395},
    {financial_year: '2013-2014', month: 'SEP', ticket_sold: 5756},
    {financial_year: '2014-2015', month: 'APR', ticket_sold: 22627},
    {financial_year: '2014-2015', month: 'AUG', ticket_sold: 6462},
    {financial_year: '2014-2015', month: 'DEC', ticket_sold: 7559},
    {financial_year: '2014-2015', month: 'FEB', ticket_sold: 6818},
    {financial_year: '2014-2015', month: 'JAN', ticket_sold: 8523},
    {financial_year: '2014-2015', month: 'JUL', ticket_sold: 8622},
    {financial_year: '2014-2015', month: 'JUN', ticket_sold: 13955},
    {financial_year: '2014-2015', month: 'MAR', ticket_sold: 10959},
    {financial_year: '2014-2015', month: 'NOV', ticket_sold: 5737},
    {financial_year: '2014-2015', month: 'OCT', ticket_sold: 8857},
    {financial_year: '2014-2015', month: 'SEP', ticket_sold: 5436},
    {financial_year: '2015-2016', month: 'APR', ticket_sold: 7373},
    {financial_year: '2015-2016', month: 'AUG', ticket_sold: 2591},
    {financial_year: '2015-2016', month: 'DEC', ticket_sold: 5714},
    {financial_year: '2015-2016', month: 'FEB', ticket_sold: 302},
    {financial_year: '2015-2016', month: 'JAN', ticket_sold: 6932},
    {financial_year: '2015-2016', month: 'JUL', ticket_sold: 3456},
    {financial_year: '2015-2016', month: 'JUN', ticket_sold: 6626},
    {financial_year: '2015-2016', month: 'NOV', ticket_sold: 3710},
    {financial_year: '2015-2016', month: 'OCT', ticket_sold: 4247},
    {financial_year: '2015-2016', month: 'SEP', ticket_sold: 4369},
    {financial_year: '2016-2017', month: 'AUG', ticket_sold: 6852},
    {financial_year: '2016-2017', month: 'JUL', ticket_sold: 6861},
    {financial_year: '2016-2017', month: 'JUN', ticket_sold: 10945},
    {financial_year: '2016-2017', month: 'SEP', ticket_sold: 3708}
    ],
    adult: [
    {financial_year: '2005-2006', month: 'DEC', ticket_sold: 2988},
    {financial_year: '2005-2006', month: 'FEB', ticket_sold: 6542},
    {financial_year: '2005-2006', month: 'JAN', ticket_sold: 7562},
    {financial_year: '2005-2006', month: 'MAR', ticket_sold: 7218},
    {financial_year: '2005-2006', month: 'NOV', ticket_sold: 3020},
    {financial_year: '2005-2006', month: 'OCT', ticket_sold: 2196},
    {financial_year: '2005-2006', month: 'SEP', ticket_sold: 2},
    {financial_year: '2006-2007', month: 'APR', ticket_sold: 17536},
    {financial_year: '2006-2007', month: 'AUG', ticket_sold: 6163},
    {financial_year: '2006-2007', month: 'DEC', ticket_sold: 3693},
    {financial_year: '2006-2007', month: 'FEB', ticket_sold: 3634},
    {financial_year: '2006-2007', month: 'JAN', ticket_sold: 7400},
    {financial_year: '2006-2007', month: 'JUL', ticket_sold: 5269},
    {financial_year: '2006-2007', month: 'JUN', ticket_sold: 9415},
    {financial_year: '2006-2007', month: 'MAR', ticket_sold: 5464},
    {financial_year: '2006-2007', month: 'MAY', ticket_sold: 34556},
    {financial_year: '2006-2007', month: 'NOV', ticket_sold: 5620},
    {financial_year: '2006-2007', month: 'OCT', ticket_sold: 6888},
    {financial_year: '2006-2007', month: 'SEP', ticket_sold: 4272},
    {financial_year: '2007-2008', month: 'APR', ticket_sold: 17346},
    {financial_year: '2007-2008', month: 'AUG', ticket_sold: 5386},
    {financial_year: '2007-2008', month: 'DEC', ticket_sold: 1950},
    {financial_year: '2007-2008', month: 'FEB', ticket_sold: 2474},
    {financial_year: '2007-2008', month: 'JAN', ticket_sold: 4453},
    {financial_year: '2007-2008', month: 'JUL', ticket_sold: 5913},
    {financial_year: '2007-2008', month: 'JUN', ticket_sold: 10181},
    {financial_year: '2007-2008', month: 'MAR', ticket_sold: 2234},
    {financial_year: '2007-2008', month: 'MAY', ticket_sold: 34750},
    {financial_year: '2007-2008', month: 'NOV', ticket_sold: 2133},
    {financial_year: '2007-2008', month: 'OCT', ticket_sold: 2304},
    {financial_year: '2007-2008', month: 'SEP', ticket_sold: 2096},
    {financial_year: '2008-2009', month: 'APR', ticket_sold: 7599},
    {financial_year: '2008-2009', month: 'AUG', ticket_sold: 2377},
    {financial_year: '2008-2009', month: 'DEC', ticket_sold: 2822},
    {financial_year: '2008-2009', month: 'FEB', ticket_sold: 2361},
    {financial_year: '2008-2009', month: 'JAN', ticket_sold: 3280},
    {financial_year: '2008-2009', month: 'JUL', ticket_sold: 3465},
    {financial_year: '2008-2009', month: 'JUN', ticket_sold: 5120},
    {financial_year: '2008-2009', month: 'MAR', ticket_sold: 3067},
    {financial_year: '2008-2009', month: 'MAY', ticket_sold: 16934},
    {financial_year: '2008-2009', month: 'NOV', ticket_sold: 2268},
    {financial_year: '2008-2009', month: 'OCT', ticket_sold: 2868},
    {financial_year: '2008-2009', month: 'SEP', ticket_sold: 2177},
    {financial_year: '2009-2010', month: 'APR', ticket_sold: 10222},
    {financial_year: '2009-2010', month: 'AUG', ticket_sold: 2924},
    {financial_year: '2009-2010', month: 'DEC', ticket_sold: 3985},
    {financial_year: '2009-2010', month: 'FEB', ticket_sold: 3322},
    {financial_year: '2009-2010', month: 'JAN', ticket_sold: 3933},
    {financial_year: '2009-2010', month: 'JUL', ticket_sold: 3999},
    {financial_year: '2009-2010', month: 'JUN', ticket_sold: 6090},
    {financial_year: '2009-2010', month: 'MAR', ticket_sold: 5166},
    {financial_year: '2009-2010', month: 'MAY', ticket_sold: 17959},
    {financial_year: '2009-2010', month: 'NOV', ticket_sold: 2785},
    {financial_year: '2009-2010', month: 'OCT', ticket_sold: 4408},
    {financial_year: '2009-2010', month: 'SEP', ticket_sold: 1458},
    {financial_year: '2010-2011', month: 'APR', ticket_sold: 15204},
    {financial_year: '2010-2011', month: 'AUG', ticket_sold: 4031},
    {financial_year: '2010-2011', month: 'DEC', ticket_sold: 4490},
    {financial_year: '2010-2011', month: 'FEB', ticket_sold: 4752},
    {financial_year: '2010-2011', month: 'JAN', ticket_sold: 6314},
    {financial_year: '2010-2011', month: 'JUL', ticket_sold: 4566},
    {financial_year: '2010-2011', month: 'JUN', ticket_sold: 7963},
    {financial_year: '2010-2011', month: 'MAR', ticket_sold: 7269},
    {financial_year: '2010-2011', month: 'MAY', ticket_sold: 22861},
    {financial_year: '2010-2011', month: 'NOV', ticket_sold: 4299},
    {financial_year: '2010-2011', month: 'OCT', ticket_sold: 4966},
    {financial_year: '2010-2011', month: 'SEP', ticket_sold: 4406},
    {financial_year: '2011-2012', month: 'APR', ticket_sold: 14330},
    {financial_year: '2011-2012', month: 'AUG', ticket_sold: 3726},
    {financial_year: '2011-2012', month: 'DEC', ticket_sold: 5511},
    {financial_year: '2011-2012', month: 'FEB', ticket_sold: 5122},
    {financial_year: '2011-2012', month: 'JAN', ticket_sold: 8032},
    {financial_year: '2011-2012', month: 'JUL', ticket_sold: 6169},
    {financial_year: '2011-2012', month: 'JUN', ticket_sold: 10122},
    {financial_year: '2011-2012', month: 'MAR', ticket_sold: 6797},
    {financial_year: '2011-2012', month: 'NOV', ticket_sold: 5545},
    {financial_year: '2011-2012', month: 'OCT', ticket_sold: 4332},
    {financial_year: '2011-2012', month: 'SEP', ticket_sold: 5818},
    {financial_year: '2012-2013', month: 'APR', ticket_sold: 17092},
    {financial_year: '2012-2013', month: 'AUG', ticket_sold: 7731},
    {financial_year: '2012-2013', month: 'DEC', ticket_sold: 5043},
    {financial_year: '2012-2013', month: 'FEB', ticket_sold: 5890},
    {financial_year: '2012-2013', month: 'JAN', ticket_sold: 7678},
    {financial_year: '2012-2013', month: 'JUL', ticket_sold: 6936},
    {financial_year: '2012-2013', month: 'JUN', ticket_sold: 12312},
    {financial_year: '2012-2013', month: 'MAR', ticket_sold: 7821},
    {financial_year: '2012-2013', month: 'NOV', ticket_sold: 5212},
    {financial_year: '2012-2013', month: 'OCT', ticket_sold: 3384},
    {financial_year: '2012-2013', month: 'SEP', ticket_sold: 5033},
    {financial_year: '2013-2014', month: 'APR', ticket_sold: 18738},
    {financial_year: '2013-2014', month: 'AUG', ticket_sold: 6185},
    {financial_year: '2013-2014', month: 'DEC', ticket_sold: 6171},
    {financial_year: '2013-2014', month: 'FEB', ticket_sold: 6673},
    {financial_year: '2013-2014', month: 'JAN', ticket_sold: 8947},
    {financial_year: '2013-2014', month: 'JUL', ticket_sold: 5904},
    {financial_year: '2013-2014', month: 'JUN', ticket_sold: 9946},
    {financial_year: '2013-2014', month: 'MAR', ticket_sold: 8336},
    {financial_year: '2013-2014', month: 'NOV', ticket_sold: 4556},
    {financial_year: '2013-2014', month: 'OCT', ticket_sold: 5193},
    {financial_year: '2013-2014', month: 'SEP', ticket_sold: 5587},
    {financial_year: '2014-2015', month: 'APR', ticket_sold: 21128},
    {financial_year: '2014-2015', month: 'AUG', ticket_sold: 6307},
    {financial_year: '2014-2015', month: 'DEC', ticket_sold: 6937},
    {financial_year: '2014-2015', month: 'FEB', ticket_sold: 6833},
    {financial_year: '2014-2015', month: 'JAN', ticket_sold: 8153},
    {financial_year: '2014-2015', month: 'JUL', ticket_sold: 8424},
    {financial_year: '2014-2015', month: 'JUN', ticket_sold: 13428},
    {financial_year: '2014-2015', month: 'MAR', ticket_sold: 10977},
    {financial_year: '2014-2015', month: 'NOV', ticket_sold: 5244},
    {financial_year: '2014-2015', month: 'OCT', ticket_sold: 8401},
    {financial_year: '2014-2015', month: 'SEP', ticket_sold: 5340},
    {financial_year: '2015-2016', month: 'APR', ticket_sold: 19505},
    {financial_year: '2015-2016', month: 'AUG', ticket_sold: 8149},
    {financial_year: '2015-2016', month: 'DEC', ticket_sold: 9857},
    {financial_year: '2015-2016', month: 'FEB', ticket_sold: 427},
    {financial_year: '2015-2016', month: 'FEB', ticket_sold: 8713},
    {financial_year: '2015-2016', month: 'JAN', ticket_sold: 9666},
    {financial_year: '2015-2016', month: 'JUL', ticket_sold: 9515},
    {financial_year: '2015-2016', month: 'JUN', ticket_sold: 15502},
    {financial_year: '2015-2016', month: 'MAR', ticket_sold: 14416},
    {financial_year: '2015-2016', month: 'NOV', ticket_sold: 5333},
    {financial_year: '2015-2016', month: 'OCT', ticket_sold: 5504},
    {financial_year: '2015-2016', month: 'SEP', ticket_sold: 6553},
    {financial_year: '2016-2017', month: 'AUG', ticket_sold: 7254},
    {financial_year: '2016-2017', month: 'JUL', ticket_sold: 7656},
    {financial_year: '2016-2017', month: 'JUN', ticket_sold: 11998},
    {financial_year: '2016-2017', month: 'SEP', ticket_sold: 3909}
    ]
  }
}