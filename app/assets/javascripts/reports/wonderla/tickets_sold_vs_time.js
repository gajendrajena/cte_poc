(function (w, d, $, undefined) {
  'use strict';

  String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  };

  var tickets_vs_time = {
    chart_hash: {},

    init: function() {
      this.chart_hash = {
        chart: { type: 'column'},
        title: { text: 'Yearly Tickets Sold'},
        xAxis: { categories: [], crosshair: true},
        yAxis: { min: 0, title: { text: 'Tickets Sold'}},
        tooltip: {
          headerFormat: '<span style="font-size:13px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y}</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
        },
        plotOptions: { column: { pointPadding: 0.1, borderWidth: 0 } },
        series: []
      };

      this.pie_hash = {
        chart: { plotShadow: false, type: 'pie'},
        title: { text: 'Tickets sold : '},
        tooltip: { pointFormat: '{series.name}: <b>{point.y}</b>'},
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f}%',
              style: {
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
              }
            }
          }
        },
        series: []
      };
      this.setDataAndRenderChart();
    },

    setDataAndRenderChart: function(){
      var data = {};

      if ($('#time_filter').val().length) {
        data.time = $('#time_filter').val();
      }

      if ($('#branch_filter').val().length) {
        data.branch = $('#branch_filter').val();
      }

      $.ajax({
        url: '/wonderla_tkt_vs_time',
        data: data,
        dataType: 'json',
        success: function(data, textStatus, jqXHR){
          tickets_vs_time.chart_hash.series = data.chart_data;
          tickets_vs_time.chart_hash.xAxis.categories = data.categories;
          tickets_vs_time.chart_hash.title.text += data.title;
          tickets_vs_time.pie_hash.series =[{ name: 'Tickets Sold', colorByPoint: true, data: data.pie.data }];
          tickets_vs_time.pie_hash.title.text += data.pie.title;
        },
        complete: function() {
          Highcharts.chart('yearly_chart', tickets_vs_time.chart_hash);
          Highcharts.chart('yearly_pie_chart', tickets_vs_time.pie_hash);
        }
      });
    },

    yearly_pie_chart: function(data){
      Highcharts.chart('yearly_pie_chart', tickets_vs_time.pie_hash);
    }
  };

  window.charts.add('tickets_vs_time', tickets_vs_time);

}(window, document, jQuery));

