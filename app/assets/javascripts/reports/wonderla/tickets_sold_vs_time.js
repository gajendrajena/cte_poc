(function (w, d, $, undefined) {
  'use strict';

  String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  };

  var tickets_vs_time = {
    chart_hash: {name: 'hello'},

    init: function() {
      this.chart_hash = {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Yearly Tickets Sold'
        },
        xAxis: {
          categories: $('#financial_years').data('fin-years'),
          crosshair: true
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Tickets Sold'
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
        url: '/wonderla_tkt_vs_time',
        data: {time: $('#time_filter').val(), branch: $('#branch_filter').val() },
        dataType: 'json',
        success: function(data, textStatus, jqXHR){
          tickets_vs_time.chart_hash.series = data;
        },
        complete: function() {
          Highcharts.chart('yearly_chart', tickets_vs_time.chart_hash);
        }
      });
    },

    yearly_pie_chart: function(data){
      Highcharts.chart('yearly_pie_chart', {
        chart: {
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Tickets Sold vs Branch'
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
              format: '<b>{point.name}</b>: {point.percentage:.1f}%',
              style: {
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
              }
            }
          }
        },
        series: data
      });
    }
  };

  window.charts.add('tickets_vs_time', tickets_vs_time);

}(window, document, jQuery));

