$(document).ready(function() {
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

  //bootstrap-daterangepicker
  // morris.js
  Morris.Bar({
    element: 'graph_bar',
    data: [{"agent_name":"LUCKY TOURS","sales":120135282.1},{"agent_name":"BIMATAMA TOUR","sales":21135913.62},{"agent_name":"visto tour","sales":16912436.75},{"agent_name":"MW TOUR","sales":16841352.25},{"agent_name":"HAPPY TOUR","sales":13596525},{"agent_name":"DITA TOUR","sales":8903129},{"agent_name":"EC TOURS & TRAVEL","sales":8829669.62},{"agent_name":"SKY OCEAN TRAVEL","sales":7059086.06},{"agent_name":"JETA TRAVEL","sales":5372123.5},{"agent_name":"PANEN TOUR","sales":3075691.75},{"agent_name":"LAVENDER BOUTIQUE TRAVEL SOLUTION","sales":2942107.5},{"agent_name":"PT BNT TOUR & TRAVEL","sales":1751000},{"agent_name":"KERALA TOUR MART INDIA PVT LTD","sales":1319217.13},{"agent_name":"EZIHOLIDAY","sales":1106438.1},{"agent_name":"ANUGA TRAVEL & TOURS","sales":1032028.25},{"agent_name":"Konasth E-Services Ltd.","sales":935929.55},{"agent_name":"UNIVERSAL TOUR","sales":840728.06},{"agent_name":"Pugmarks - The Nature Club","sales":727412.04},{"agent_name":"RITS HOLIDAYS","sales":702317.17}],
    xkey: 'agent_name',
    hideHover: 'auto',
    barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
    ykeys: ['sales', 'sorned'],
    labels: ['sales', 'SORN'],
    xLabelAngle: 60,
    resize: true
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