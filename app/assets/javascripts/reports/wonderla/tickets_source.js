var month_names = [ 'JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC' ];
var fy_month_names = [ 'APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC', 'JAN','FEB','MAR'];

$(document).ready(function() {
  var categories = _.pluck(bookings.cleartrip.yearly, 'fy');
  var yearly_series = _.map(['cleartrip', 'walkin', 'online'], function(group){
    return {
      name: group,
      data: _.map(bookings[group].yearly, function(yb){ return {name: yb.fy, y: yb.t, drilldown: yb.fy + '-' + group} })
    }
  });

  var drilldown_series = [];

  _.map(categories, function(year){
    _.map(['cleartrip', 'walkin', 'online'], function(group){
      var yearly_data = _.where(bookings[group].monthly, {fy: year})
      // console.log(group + ':' + year + ': yearly_data.length :'+ yearly_data.length);
      drilldown_series.push({
        name: year + '-' + group,
        id: year + '-' + group,
        data: _.map(yearly_data, function(mb){ return {name: mb.mon, y: mb.t}})
      })
    })
  });

  // console.log(drilldown_series);
  // drilldown_series = [];

  $('#booking_source_chart').highcharts({
    chart: { type: 'column'},
    title: { text: 'Tickets Booked from different Sources'},
    xAxis: { categories: categories, crosshair: true },
    yAxis: { min: 0, title: { text: 'Tickets Booked' } },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: { pointPadding: 0.2, borderWidth: 0 }
    },
    series: yearly_series,
    drilldown: {
      series: drilldown_series
    }
  });

  $(function () {
    var data = [{
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        }, {
            name: 'New York',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

        }, {
            name: 'London',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

        }, {
            name: 'Berlin',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

        }];
    Highcharts.chart('demo', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Monthly Average Rainfall'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rainfall (mm)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: data
    });
});
});
