(function (w, d, $, undefined) {
  'use strict';

  String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

  };

  var tickets_vs_time = {
    init: function(){
      var month_names = [ 'JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC' ];
      var fy_month_names = [ 'APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC', 'JAN','FEB','MAR'];

      var data_for_bar_chart = _.map(['bangalore_park','kochi_park','hyderabad_park'], function(e){
        return {
          name: e.split('_').join(' ').toProperCase(),
          data: _.map(financial_years, function(fy){
            var pd = _.findWhere(yearly_data[e], {fy: fy})
            return pd ? pd.t : 0 ;
          })
        }
      });

      var data_for_pie_chart = _.map(data_for_bar_chart, function(e){
        return {
          name: e.name,
          y: _.reduce(e.data, function(m, n){ return m + n; }, 0)
        }
      });
      console.log(data_for_pie_chart);

      this.yearly_chart(financial_years, data_for_bar_chart);
      this.yearly_pie_chart(data_for_pie_chart);

    },

    yearly_chart: function(financial_years, data){
      Highcharts.chart('yearly_chart', {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Yearly Tickets Sold'
        },
        xAxis: {
          categories: financial_years,
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
        series: data
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

