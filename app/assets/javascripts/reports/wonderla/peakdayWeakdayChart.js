$(document).ready(function() {

	var category_names = [ '2016-2017',  '2015-2016',  '2015-2014',  '2014-2013',  '2013-2012' ];
	var stack_data = [
		{
      name: 'Child (Peekday)',
      data: [5, 3, 4, 7, 2],
      stack: 'Peekday'
    }, 
    {
      name: 'Adult (Peekday)',
      data: [3, 4, 4, 2, 5],
      stack: 'Peekday'
    }, 
    {
      name: 'Child (Weekday)',
      data: [2, 5, 6, 2, 1],
      stack: 'Weekday'
    }, 
    {
      name: 'Adult (Weekday)',
      data: [3, 0, 4, 4, 3],
      stack: 'Weekday'
    }];
	$('#peakday_weekday_chart').highcharts({
    chart: {
      type: 'column'
    },

    title: {
      text: 'Peakday - Weekday Report, grouped by Child/Adult'
    },
    subtitle: {
      text: 'Stack 1: Peekday , Stack 2:  Weekday'
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

    series: stack_data
  });


});