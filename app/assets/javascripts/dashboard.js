$(document).ready(function() {
var mie_data = [ [ 'v11.0', 24.13 ], [ 'v8.0', 17.2 ], [ 'v9.0', 8.11 ], [ 'v10.0', 5.33 ], [ 'v6.0', 1.06 ], [ 'v7.0', 0.5 ] ];
var chrome_data = [ [ 'v40.0', 5 ], [ 'v41.0', 4.32 ], [ 'v42.0', 3.68 ], [ 'v39.0', 2.96 ], [ 'v36.0', 2.53 ], [ 'v43.0', 1.45 ], [ 'v31.0', 1.24 ], [ 'v35.0', 0.85 ], [ 'v38.0', 0.6 ], [ 'v32.0', 0.55 ], [ 'v37.0', 0.38 ], [ 'v33.0', 0.19 ], [ 'v34.0', 0.14 ], [ 'v30.0', 0.14 ] ];
var firefox_data = [ [ 'v35', 2.76 ], [ 'v36', 2.32 ], [ 'v37', 2.31 ], [ 'v34', 1.27 ], [ 'v38', 1.02 ], [ 'v31', 0.33 ], [ 'v33', 0.22 ], [ 'v32', 0.15 ] ];
var safari_data = [ [ 'v8.0', 2.56 ], [ 'v7.1', 0.77 ], [ 'v5.1', 0.42 ], [ 'v5.0', 0.3 ], [ 'v6.1', 0.29 ], [ 'v7.0', 0.26 ], [ 'v6.2', 0.17 ] ];
var opera_data = [ [ 'v12.x', 0.34 ], [ 'v28', 0.24 ], [ 'v27', 0.17 ], [ 'v29', 0.16 ] ];

var yearly_data = [
  {name: '2005-2006', y:  101983, drilldown: '2005-2006'},
  {name: '2006-2007', y:  278601, drilldown: '2006-2007'},
  {name: '2007-2008', y:  203296, drilldown: '2007-2008'},
  {name: '2008-2009', y:  134329, drilldown: '2008-2009'},
  {name: '2009-2010', y:  152363, drilldown: '2009-2010'},
  {name: '2010-2011', y:  190474, drilldown: '2010-2011'},
  {name: '2011-2012', y:  228116, drilldown: '2011-2012'},
  {name: '2012-2013', y:  248108, drilldown: '2012-2013'},
  {name: '2013-2014', y:  255382, drilldown: '2013-2014'},
  {name: '2014-2015', y:  285590, drilldown: '2014-2015'},
  {name: '2015-2016', y:  300262, drilldown: '2015-2016'},
  {name: '2016-2017', y:  174588, drilldown: '2016-2017'}
];



var drilldown_series = [{
      name: 'Microsoft Internet Explorer',
      id: 'Microsoft Internet Explorer',
      data: mie_data
    }, {
      name: 'Chrome',
      id: 'Chrome',
      data: chrome_data
    }, {
      name: 'Firefox',
      id: 'Firefox',
      data: firefox_data
    }, {
      name: 'Safari',
      id: 'Safari',
      data: safari_data
    }, {
      name: 'Opera',
      id: 'Opera',
      data: opera_data
    }]

$('#yearly_chart').highcharts({
  chart: {
    type: 'column'
  },
  title: {
    text: 'Yearly Tickets Sold'
  },
  subtitle: {
    text: 'Click the columns to view for each year.'
  },
  xAxis: {
    type: 'category',
    title: {
      text: 'Financial Years ->'
    }
  },
  yAxis: {
    title: {
      text: 'Tickets Sold ->'
    }
  },
  legend: {
    enabled: false
  },
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
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
  },

  series: [{
    name: 'Financial year',
    colorByPoint: true,
    data: yearly_data
  }]//,
  // drilldown: {
  //   series: drilldown_series
  // }
});


// Peakday - Weekday Chart, grouped by Child/Adult

// var peakday_weekday_monthly_data = [
//   {name:  'Peakday', data: [142854, 0], stack: 'Adult'},
//   {name:  'Weakday', data: [30817, 23129], stack: 'Adult'},
//   {name:  'Peakday', data: [52856, 0], stack: 'Child'},
//   {name:  'Weakday', data: [28366, 0], stack: 'Child'}
// ];


  //random data
  var d1 = [[0, 1],[1, 9],[2, 6],[3, 10],[4, 5],[5, 17],[6, 6],[7, 10],[8, 7],[9, 11],[10, 35],[11, 9],[12, 12],[13, 5],[14, 3],[15, 4],[16, 9]];
  //flot options
  var options = {
    series: {
      curvedLines: {
        apply: true,
        active: true,
        monotonicFit: true
      }
    },
    colors: ["#26B99A"],
    grid: {
      borderWidth: {
        top: 0,
        right: 0,
        bottom: 1,
        left: 1
      },
      borderColor: {
        bottom: "#7F8790",
        left: "#7F8790"
      }
    }
  };
  var plot = $.plot($("#placeholder3xx3"), [{
    label: "Registrations",
    data: d1,
    lines: {
      fillColor: "rgba(150, 202, 89, 0.12)"
    },
    points: {
      fillColor: "#fff"
    }
  }], options);

  //Flot
  //jQuery Sparklines
  $(".sparkline_one").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 7, 5, 4, 3, 5, 6], {
    type: 'bar',
    height: '40',
    barWidth: 9,
    colorMap: {
      '7': '#a1a1a1'
    },
    barSpacing: 2,
    barColor: '#26B99A'
  });

  $(".sparkline_two").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 7, 5, 4, 3, 5, 6], {
    type: 'line',
    width: '200',
    height: '40',
    lineColor: '#26B99A',
    fillColor: 'rgba(223, 223, 223, 0.57)',
    lineWidth: 2,
    spotColor: '#26B99A',
    minSpotColor: '#26B99A'
  });

  //jQuery Sparklines
  //Doughnut Chart
  var options = {
    legend: false,
    responsive: false
  };

  new Chart(document.getElementById("canvas1"), {
    type: 'doughnut',
    tooltipFillColor: "rgba(51, 51, 51, 0.55)",
    data: {
      labels: ["Symbian","Blackberry","Other","Android","IOS"],
      datasets: [{
        data: [15, 20, 30, 10, 30],
        backgroundColor: ["#BDC3C7","#9B59B6","#E74C3C","#26B99A","#3498DB"],
        hoverBackgroundColor: ["#CFD4D8","#B370CF","#E95E4F","#36CAAB","#49A9EA"]
      }]
    },
    options: options
  });

  //Doughnut Chart
  //bootstrap-daterangepicker
  var cb = function(start, end, label) {
    console.log(start.toISOString(), end.toISOString(), label);
    $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
  };

  var optionSet1 = {
    startDate: moment().subtract(29, 'days'),
    endDate: moment(),
    minDate: '01/01/2012',
    maxDate: '12/31/2015',
    dateLimit: {
      days: 60
    },
    showDropdowns: true,
    showWeekNumbers: true,
    timePicker: false,
    timePickerIncrement: 1,
    timePicker12Hour: true,
    ranges: {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
    opens: 'left',
    buttonClasses: ['btn btn-default'],
    applyClass: 'btn-small btn-primary',
    cancelClass: 'btn-small',
    format: 'MM/DD/YYYY',
    separator: ' to ',
    locale: {
      applyLabel: 'Submit',
      cancelLabel: 'Clear',
      fromLabel: 'From',
      toLabel: 'To',
      customRangeLabel: 'Custom',
      daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      firstDay: 1
    }
  };

  $('#reportrange span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
  $('#reportrange').daterangepicker(optionSet1, cb);
  $('#reportrange').on('show.daterangepicker', function() {
    console.log("show event fired");
  });
  $('#reportrange').on('hide.daterangepicker', function() {
    console.log("hide event fired");
  });
  $('#reportrange').on('apply.daterangepicker', function(ev, picker) {
    console.log("apply event fired, start/end dates are " + picker.startDate.format('MMMM D, YYYY') + " to " + picker.endDate.format('MMMM D, YYYY'));
  });
  $('#reportrange').on('cancel.daterangepicker', function(ev, picker) {
    console.log("cancel event fired");
  });
  $('#options1').click(function() {
    $('#reportrange').data('daterangepicker').setOptions(optionSet1, cb);
  });
  $('#options2').click(function() {
    $('#reportrange').data('daterangepicker').setOptions(optionSet2, cb);
  });
  $('#destroy').click(function() {
    $('#reportrange').data('daterangepicker').remove();
  });


  $MENU_TOGGLE.on('click', function() {
    $(window).resize();
  });
  //morris.js
  //Skycons
  var icons = new Skycons({
    "color": "#73879C"
  }),
  list = ["clear-day", "clear-night", "partly-cloudy-day","partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind","fog"], i;

  for (i = list.length; i--;)
    icons.set(list[i], list[i]);

  icons.play();
  //Skycons
  var opts = {
    lines: 12,
    angle: 0,
    lineWidth: 0.4,
    pointer: {
      length: 0.75,
      strokeWidth: 0.042,
      color: '#1D212A'
    },
    limitMax: 'false',
    colorStart: '#1ABC9C',
    colorStop: '#1ABC9C',
    strokeColor: '#F0F3F3',
    generateGradient: true
  };
  var target = document.getElementById('foo'),
  gauge = new Gauge(target).setOptions(opts);

  gauge.maxValue = 100;
  gauge.animationSpeed = 32;
  gauge.set(80);
  gauge.setTextField(document.getElementById("gauge-text"));

  var target = document.getElementById('foo2'),
  gauge = new Gauge(target).setOptions(opts);

  gauge.maxValue = 5000;
  gauge.animationSpeed = 32;
  gauge.set(4200);
  gauge.setTextField(document.getElementById("gauge-text2"));
});
