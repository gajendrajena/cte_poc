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
});
