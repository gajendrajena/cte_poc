// $(document).ready(function() {

//  $(".sparkline_one").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 7, 5, 4, 3, 5, 6], {
//     type: 'bar',
//     height: '40',
//     barWidth: 9,
//     colorMap: {
//       '7': '#a1a1a1'
//     },
//     barSpacing: 2,
//     barColor: '#26B99A'
//   });

//   $(".sparkline_two").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 7, 5, 4, 3, 5, 6], {
//     type: 'line',
//     width: '200',
//     height: '40',
//     lineColor: '#26B99A',
//     fillColor: 'rgba(223, 223, 223, 0.57)',
//     lineWidth: 2,
//     spotColor: '#26B99A',
//     minSpotColor: '#26B99A'
//   });

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


//   $MENU_TOGGLE.on('click', function() {
//     $(window).resize();
//   });

// });
