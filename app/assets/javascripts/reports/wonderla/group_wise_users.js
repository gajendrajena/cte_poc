(function (w, d, $, undefined) {
  'use strict';

  var group_wise_users_chart = {

    init: function() {
      this.chart_hash = {
        chart: {
          type: 'line'
        },
        title: {
          text: 'Tickets Booked for different user groups'
        },
        subtitle: {
          text: 'Source: CTE'
        },
        xAxis: {
          categories: []
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
        series: []
      };
      this.setDataAndRenderChart();
    },

    setDataAndRenderChart: function(){
      $.ajax({
        url: '/grpup_wise',
        data: {time: $('#time_filter').val(), branch: $('#branch_filter').val() },
        dataType: 'json',
        success: function(data, textStatus, jqXHR){
          group_wise_users_chart.chart_hash.series = JSON.parse(data.chart_data);
          group_wise_users_chart.chart_hash.xAxis.categories = data.categories;
          group_wise_users_chart.chart_hash.title.text += data.title;
        },
        complete: function() {
          Highcharts.chart('group_wise_users', group_wise_users_chart.chart_hash);
        }
      });
    },
  };

  window.charts.add('group_wise_users_chart', group_wise_users_chart);

}(window, document, jQuery));
