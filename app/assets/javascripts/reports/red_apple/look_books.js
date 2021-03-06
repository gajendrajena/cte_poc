$(document).ready(function() {
  $.ajax({
    url: 'costsheets',
    dataType: 'json',
    success: function(data, textStatus, jqXHR){
      renderStackChart(data)
    }
  });

  var renderStackChart = function(look_books){
    var bookings = _.reject(look_books, function(e){return e.bookings == 0});
    var bookings_number_wise = [];
    var series_numbers = [0, 1, 2, 3, 4, 5, 10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
    var bookings_series_data = [], quotations_series_data = [];
    var bookings_drilldown_data = {series: []}, quotations_drilldown_data = {series: []};

    for (var i = 1; i <= series_numbers.length - 1; i++) {
      var current_series = series_numbers[i-1] + "-" + series_numbers[i];
      if(i <= 5) { current_series = series_numbers[i]; }
      bookings_number_wise[i-1] = _.filter(bookings, function(e){return (e.bookings > series_numbers[i - 1] && e.bookings <= series_numbers[i])})
      bookings_series_data[i-1] = {};
      bookings_series_data[i-1].name = bookings_series_data[i-1].drilldown = current_series;
      bookings_series_data[i-1].y = _.map(bookings_number_wise[i-1], function(e){return e.bookings}).length;
    }

    var only_quotations = _.reject(look_books, function(e){return e.bookings !== 0});

    $('#look_books').highcharts({
      chart: {type: 'column'},
      title: {text: 'Agents with bookings Range'},
      subtitle: {text: 'Click the columns to view each Range'},
      xAxis: {type: 'category',title: {  text: 'No of Bookings ->'}},
      yAxis: {title: {  text: 'No of Agents -> '}},
      legend: {enabled: false},
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y}'
          }
        }
      },

      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> Agents<br/>'
      },

      series: [{
        name: 'Bookings Range',
        colorByPoint: true,
        data: bookings_series_data
      }]
    });

    var quotations_number_wise = []
    var quotations = _.reject(look_books, function(e){return e.bookings !== 0});

    for (var i = 1; i <= series_numbers.length - 1; i++) {
      var current_series = series_numbers[i-1] + "-" + series_numbers[i];
      if(i <= 5) { current_series = series_numbers[i]; }
      quotations_number_wise[i-1] = _.filter(quotations, function(e){return (e.quotations > series_numbers[i - 1] && e.quotations <= series_numbers[i])})
      quotations_series_data[i-1] = {};
      quotations_series_data[i-1].name = quotations_series_data[i-1].drilldown = current_series;
      quotations_series_data[i-1].y = _.map(quotations_number_wise[i-1], function(e){return e.quotations}).length;
    }
    $('#look_quotations').highcharts({
      chart: {type: 'column'},
      title: {text: 'Agents with 0 bookings and quotations Range'},
      subtitle: {text: 'Click the columns to view each Range'},
      xAxis: {type: 'category',title: {  text: 'No of Quotations ->'}},
      yAxis: {title: {  text: 'No of Agents -> '}},
      legend: {enabled: false},
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y}'
          }
        }
      },

      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> Agents<br/>'
      },

      series: [{
        name: 'Quotations Range',
        colorByPoint: true,
        data: quotations_series_data
      }]
    });

    var sorted_by_ratio = _.sortBy(look_books, 'ratio');
    var top = 5;
    if(parseInt(location.href.split('top=')[1])){
      top = parseInt(location.href.split('top=')[1]);
    }

    var lowest_ratio = _.sortBy(_.first(sorted_by_ratio, top), 'bookings');
    var highest_ratio = _.sortBy(_.last(sorted_by_ratio, top), 'bookings');

    // ratio chart highest_ratio bookings

    var categories = _.map(highest_ratio, function(e){return e.agency_name});;
    var series_data = [{
      name: 'Bookings',
      data: _.map(highest_ratio, function(e){return e.bookings})

    }, {
      name: 'Quotations',
      data: _.map(highest_ratio, function(e){return e.quotations})

    }];

    $('#bookings_and_quotation_highest').highcharts({
      chart: {
        type: 'column'
      },
      title: {
        text: 'Top Agents with highest bookings ratio'
      },
      xAxis: {
        categories: categories,
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Bookings/Quotations'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y}</b></td></tr>',
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
      series: series_data
    });

    var l_categories = _.map(lowest_ratio, function(e){return e.agency_name});;
    var l_series_data = [{
      name: 'Bookings',
      data: _.map(lowest_ratio, function(e){return e.bookings})

    }, {
      name: 'Quotations',
      data: _.map(lowest_ratio, function(e){return e.quotations})

    }];

    // lowest bookings
    $('#bookings_and_quotation_lowest').highcharts({
      chart: {
        type: 'column'
      },
      title: {
        text: 'Top Agents with lowest bookings ratio'
      },
      xAxis: {
        categories: l_categories,
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Bookings/Quotations'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y}</b></td></tr>',
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
      series: l_series_data
    });

    var top_bookings = _.last(_.sortBy(look_books, 'bookings'), top).reverse();

    var top_categories = _.map(top_bookings, function(e){return e.agency_name});;
    var top_series_data = [{
      name: 'Bookings',
      data: _.map(top_bookings, function(e){return e.bookings})

    }, {
      name: 'Quotations',
      data: _.map(top_bookings, function(e){return e.quotations})

    }];

    $('#top_bookings').highcharts({
      chart: {
        type: 'column'
      },
      title: {
        text: 'Top '+top+' bookings'
      },
      xAxis: {
        categories: top_categories,
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Bookings/Quotations'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y}</b></td></tr>',
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
      series: top_series_data
    });

    var top_quotations = _.last(_.sortBy(look_books, 'quotations'), top).reverse();
    var top_categories = _.map(top_quotations, function(e){return e.agency_name});;
    var top_series_data = [{
      name: 'Bookings',
      data: _.map(top_quotations, function(e){return e.bookings})

    }, {
      name: 'Quotations',
      data: _.map(top_quotations, function(e){return e.quotations})

    }];

    $('#top_quotations').highcharts({
      chart: {
        type: 'column'
      },
      title: {
        text: 'Top '+top+' Quotations'
      },
      xAxis: {
        categories: top_categories,
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Bookings/Quotations'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y}</b></td></tr>',
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
      series: top_series_data
    });
  };

});