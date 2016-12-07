(function (w, d, $, undefined) {
  'use strict';

  var tickets_vs_time = {
    init: function(){
      var month_names = [ 'JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC' ];
      var fy_month_names = [ 'APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC', 'JAN','FEB','MAR'];

      var weekCount = function(year, month_number) {
        // month_number is in the range 1..12
        var firstOfMonth = new Date(year, month_number-1, 1);
        var lastOfMonth = new Date(year, month_number, 0);
        var used = firstOfMonth.getDay() + lastOfMonth.getDate();
        return Math.ceil( used / 7);
      };

      var drilldown_series = [], weekly_drilldown_series = [];
      _.map(yearly_data, function(year_data){
        var fy_data = _.where(monthly_data, { fy: year_data.name});

        var mapped_cur_year_data = [];
        _.map(fy_month_names, function(month){
          var cur_month_data = _.where(fy_data, {m: month});

          var cur_year  =  year_data.name.split('-')[0];
          if(_.indexOf(month_names, month) < 3){
            cur_year  =  year_data.name.split('-')[1];
          }

          if(cur_month_data.length > 0){
            mapped_cur_year_data.push({name: month + '/' + cur_year, y: parseInt(cur_month_data[0].t), drilldown: cur_year + ':' + month})
          } else {
            mapped_cur_year_data.push({name: month + '/' + cur_year, y: 0, drilldown: month})
          }

          var mapped_weekly_data = [];
          var no_of_weeks = weekCount(cur_year, _.indexOf(month_names, month));
          var cur_month_weekly_data = _.where(weekly_data, {fy: year_data.name, m: month});

          for (var i = 1; i <= no_of_weeks; i++) {
            var str_i = '' + i
              var cur_week_data = _.where(cur_month_weekly_data, {w: str_i});
            if(cur_week_data.length > 0){
              mapped_weekly_data.push({name: cur_year + '/' + month + ' week ' + str_i, y: cur_week_data[0].t});
            } else {
              mapped_weekly_data.push({name: cur_year + '/' + month + ' week ' + str_i, y: 0})
            }
          }
          drilldown_series.push({
            name: cur_year + ':' + month,
            id: cur_year + ':' + month,
            data: mapped_weekly_data
          })
        });
        drilldown_series.push ({
          name: 'Monthly Data',
          id: year_data.name,
          data: mapped_cur_year_data
        });
      });

      this.yearly_chart(yearly_data, drilldown_series)

      var yearly_pie_chart_data = [{
        name: 'Tickets Sold',
        colorByPoint: true,
        data: _.map(yearly_data, function(e){ return {name: e.name, y: e.y};})
      }];

      this.yearly_pie_chart(yearly_pie_chart_data)
    },

    yearly_chart: function(yearly_data, drilldown_series){
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
    },

    yearly_pie_chart: function(yearly_pie_chart_data){
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
    }
  };

  window.charts.add('tickets_vs_time', tickets_vs_time);

}(window, document, jQuery));

