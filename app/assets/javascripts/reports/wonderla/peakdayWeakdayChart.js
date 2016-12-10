(function (w, d, $, undefined) {
  'use strict';

  var peakday_weekday_chart = {
    init: function(){
      var category_names = ["2016-2017", "2015-2016", "2014-2015", "2013-2014", "2012-2013", "2011-2012", "2010-2011", "2009-2010", "2008-2009", "2007-2008", "2006-2007", "2005-2006"];
      var months_array = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN','JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
      var empty_list = [0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0];
      var peakday_child_data = [52856, 63247, 83854, 77846, 79526, 65364, 0, 0, 0, 0, 0, 0];
      var peakday_adult_data = [64472, 79526, 76240, 78252, 93089, 142854, 0, 0, 0, 0, 0, 0];
      var weekday_child_data = [12519, 42758, 47599, 44628, 59723, 89744, 72174, 84132, 89407, 105555, 45320, 28366];
      var weekday_adult_data = [29528, 109910, 91220, 54338, 66251, 91121, 75504, 84132, 86236, 101172, 90011, 31278];
      var yearly_data = [ {name: 'Child (Peakday)',data: peakday_child_data,stack: 'Peakday'}, {name: 'Adult (Peakday)',data: peakday_adult_data,stack: 'Peakday'}, {name: 'Child (Weekday)',data: weekday_child_data,stack: 'Weekday'}, {name: 'Adult (Weekday)',data: weekday_adult_data,stack: 'Weekday'} ];


      this.peakday_weekday_chart(yearly_data, category_names);
      var hashValues = function(arr_hash){
        return _.last(_.map(arr_hash, function(e){return _.last(_.values(e))}))
      }

      var getTickets = function(final_data){
        if(hashValues( final_data)) {
          return hashValues( final_data)
        } else {
          return 0
        }
      }

    $('#peak_week_day_filter').change(function(e){
      var year = this.value;
      var branch = $('#branch_filter').val();
      if (year === '0') {
        peakday_weekday_chart.peakday_weekday_chart(yearly_data, category_names);
      } else {
        var filtered_data = [], peakday_adult_data = [], weekday_child_data = [], weekday_adult_data = [], peakday_child_data = [];

        filtered_data = _.where(peak_week_day_data.peakday.adult, { financial_year: year, branch: branch});
        if(filtered_data.length > 0){
          peakday_adult_data = _.map(months_array, function(mon){
            var final_data = _.where(filtered_data, {month: mon});
            return getTickets(final_data);
          });
        } else{
          peakday_adult_data = empty_list;
        }

        filtered_data = _.where(peak_week_day_data.weekday.child, { financial_year: year});
        if(filtered_data.length > 0){
          weekday_child_data = _.map(months_array, function(mon){
            var final_data = _.where(filtered_data, {month: mon});
            return getTickets(final_data);
          });
        } else{
          weekday_child_data = empty_list;
        }

        filtered_data = _.where(peak_week_day_data.weekday.adult, { financial_year: year});
        if(filtered_data.length > 0){
          weekday_adult_data = _.map(months_array, function(mon){
            var final_data = _.where(filtered_data, {month: mon});
            return getTickets(final_data);
          });
        } else{
          weekday_adult_data = empty_list;
        }

        filtered_data = _.where(peak_week_day_data.peakday.child, { financial_year: year});
        if(filtered_data.length > 0){
          peakday_child_data = _.map(months_array, function(mon){
            var final_data = _.where(filtered_data, {month: mon});
            return getTickets(final_data);
          });
        } else{
          peakday_child_data = empty_list;
        }

        var updatedData = [ {name: 'Child (Peakday)',data: peakday_child_data,stack: 'Peakday'}, {name: 'Adult (Peakday)',data: peakday_adult_data,stack: 'Peakday'}, {name: 'Child (Weekday)',data: weekday_child_data,stack: 'Weekday'}, {name: 'Adult (Weekday)',data: weekday_adult_data,stack: 'Weekday'} ];
        peakday_weekday_chart.peakday_weekday_chart(updatedData, months_array);
      }
    });

    },
    peakday_weekday_chart: function(yearly_data, category_names) {
        $('#peakday_weekday_chart').html('');
        $('#peakday_weekday_chart').highcharts({
          chart: {
            type: 'column'
          },
          title: {
            text: 'Peakday - Weekday Report, grouped by Child/Adult'
          },
          subtitle: {
            text: 'Stack 1: Peakday , Stack 2:  Weekday'
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
  }

  window.charts.add('peakday_weekday_chart', peakday_weekday_chart);

}(window, document, jQuery));

