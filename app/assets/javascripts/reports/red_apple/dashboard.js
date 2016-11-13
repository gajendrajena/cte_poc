// $(document).ready(function() {
//   //random data
//   var d1 = [[0, 1],[1, 9],[2, 6],[3, 10],[4, 5],[5, 17],[6, 6],[7, 10],[8, 7],[9, 11],[10, 35],[11, 9],[12, 12],[13, 5],[14, 3],[15, 4],[16, 9]];
//   //flot options
//   var options = {
//     series: {
//       curvedLines: {
//         apply: true,
//         active: true,
//         monotonicFit: true
//       }
//     },
//     colors: ["#26B99A"],
//     grid: {
//       borderWidth: {
//         top: 0,
//         right: 0,
//         bottom: 1,
//         left: 1
//       },
//       borderColor: {
//         bottom: "#7F8790",
//         left: "#7F8790"
//       }
//     }
//   };
//   var plot = $.plot($("#placeholder3xx3"), [{
//     label: "Registrations",
//     data: d1,
//     lines: {
//       fillColor: "rgba(150, 202, 89, 0.12)"
//     },
//     points: {
//       fillColor: "#fff"
//     }
//   }], options);



//   //bootstrap-daterangepicker
//   var cb = function(start, end, label) {
//     console.log(start.toISOString(), end.toISOString(), label);
//     $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
//   };

//   var optionSet1 = {
//     startDate: moment().subtract(29, 'days'),
//     endDate: moment(),
//     minDate: '01/01/2012',
//     maxDate: '12/31/2015',
//     dateLimit: {
//       days: 60
//     },
//     showDropdowns: true,
//     showWeekNumbers: true,
//     timePicker: false,
//     timePickerIncrement: 1,
//     timePicker12Hour: true,
//     ranges: {
//       'Today': [moment(), moment()],
//       'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
//       'Last 7 Days': [moment().subtract(6, 'days'), moment()],
//       'Last 30 Days': [moment().subtract(29, 'days'), moment()],
//       'This Month': [moment().startOf('month'), moment().endOf('month')],
//       'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
//     },
//     opens: 'left',
//     buttonClasses: ['btn btn-default'],
//     applyClass: 'btn-small btn-primary',
//     cancelClass: 'btn-small',
//     format: 'MM/DD/YYYY',
//     separator: ' to ',
//     locale: {
//       applyLabel: 'Submit',
//       cancelLabel: 'Clear',
//       fromLabel: 'From',
//       toLabel: 'To',
//       customRangeLabel: 'Custom',
//       daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
//       monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
//       firstDay: 1
//     }
//   };

//   $('#reportrange span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
//   $('#reportrange').daterangepicker(optionSet1, cb);
//   $('#reportrange').on('show.daterangepicker', function() {
//     console.log("show event fired");
//   });
//   $('#reportrange').on('hide.daterangepicker', function() {
//     console.log("hide event fired");
//   });
//   $('#reportrange').on('apply.daterangepicker', function(ev, picker) {
//     console.log("apply event fired, start/end dates are " + picker.startDate.format('MMMM D, YYYY') + " to " + picker.endDate.format('MMMM D, YYYY'));
//   });
//   $('#reportrange').on('cancel.daterangepicker', function(ev, picker) {
//     console.log("cancel event fired");
//   });
//   $('#options1').click(function() {
//     $('#reportrange').data('daterangepicker').setOptions(optionSet1, cb);
//   });
//   $('#options2').click(function() {
//     $('#reportrange').data('daterangepicker').setOptions(optionSet2, cb);
//   });
//   $('#destroy').click(function() {
//     $('#reportrange').data('daterangepicker').remove();
//   });

//   var icons = new Skycons({
//     "color": "#73879C"
//   }),
//   list = ["clear-day", "clear-night", "partly-cloudy-day","partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind","fog"], i;

//   for (i = list.length; i--;)
//     icons.set(list[i], list[i]);

//   icons.play();
//   //Skycons
//   var opts = {
//     lines: 12,
//     angle: 0,
//     lineWidth: 0.4,
//     pointer: {
//       length: 0.75,
//       strokeWidth: 0.042,
//       color: '#1D212A'
//     },
//     limitMax: 'false',
//     colorStart: '#1ABC9C',
//     colorStop: '#1ABC9C',
//     strokeColor: '#F0F3F3',
//     generateGradient: true
//   };
//   var target = document.getElementById('foo'),
//   gauge = new Gauge(target).setOptions(opts);

//   gauge.maxValue = 100;
//   gauge.animationSpeed = 32;
//   gauge.set(80);
//   gauge.setTextField(document.getElementById("gauge-text"));

//   var target = document.getElementById('foo2'),
//   gauge = new Gauge(target).setOptions(opts);

//   gauge.maxValue = 5000;
//   gauge.animationSpeed = 32;
//   gauge.set(4200);
//   gauge.setTextField(document.getElementById("gauge-text2"));

// });