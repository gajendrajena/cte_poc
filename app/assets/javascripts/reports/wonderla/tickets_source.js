(function (w, d, $, undefined) {
  'use strict';

  var tickets_vs_source = {

    init: function() {
      this.chart_hash = {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Tickets Booked from different Sources'
        },
        xAxis: {
          categories: [],
          crosshair: true
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Tickets Booked'
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size:13px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y}</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
        },
        plotOptions: {
          column: {
            pointPadding: 0.1,
            borderWidth: 0
          }
        },
        series: []
      };
      this.setDataAndRenderChart();
    },

    setDataAndRenderChart: function(){
      $.ajax({
        url: '/wonderla_tkt_vs_source',
        data: {time: $('#time_filter').val(), branch: $('#branch_filter').val() },
        dataType: 'json',
        success: function(data, textStatus, jqXHR){
          tickets_vs_source.chart_hash.series = JSON.parse(data.chart_data);
          tickets_vs_source.chart_hash.xAxis.categories = data.categories;
          tickets_vs_source.chart_hash.title.text += data.title;
        },
        complete: function() {
          Highcharts.chart('booking_source_chart', tickets_vs_source.chart_hash);
        }
      });
    },
  };

  window.charts.add('tickets_vs_source', tickets_vs_source);

}(window, document, jQuery));

