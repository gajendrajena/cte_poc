(function (w, d, $, undefined) {
  'use strict';

  var group_wise_users_chart = {
    init: function(){
      var months = _.uniq(_.map(current_year_tikets_group_wise, function(e){ return e.month; }));
      var groups = _.uniq(_.map(current_year_tikets_group_wise, function(e){ return e.group; }));

      var series_data = _.map(groups, function(group){
        var data = _.map(_.where(current_year_tikets_group_wise, {group: group}), function(e){ return e.tickets});
        return {name: group, data: data};
      });

      var series_pie_data = _.map(groups, function(group){
        var data = _.map(_.where(current_year_tikets_group_wise, {group: group}), function(e){ return e.tickets});
        var sum = _.reduce(data, function(memo, num){ return memo + num; }, 0)
          if(group === 'General'){
            return {name: group, y: sum, sliced: true, selected: true};
          } else {
            return {name: group, y: sum};
          }
      });
      var series_pie = [{ type: 'pie', name: 'Browser share', data: series_pie_data}];
      this.render_pie_chart(series_pie);
      this.render_line_chart(months, series_data);
    },

    render_line_chart: function(months, series_data){
      $('#group_wise_users').highcharts({
        chart: {
          type: 'line'
        },
        title: {
          text: 'Tickets Booked for different user groups for financial year 2016-2017'
        },
        subtitle: {
          text: 'Source: CTE'
        },
        xAxis: {
          categories: months
        },
        yAxis: {
          title: {
            text: 'Tickets books'
          }
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true
            },
            enableMouseTracking: false
          }
        },
        series: series_data
      });
    },

    render_pie_chart: function(series_pie){
      $('#group_wise_users_pie_chart').highcharts({
        chart: {
          type: 'pie',
          options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
          }
        },
        title: {
          text: 'Tickets Booked for different user groups for financial year 2016-2017'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
              enabled: true,
              format: '{point.name}'
            }
          }
        },
        series: series_pie
      });
    }
  };

  window.charts.add('group_wise_users_chart', group_wise_users_chart);

}(window, document, jQuery));
