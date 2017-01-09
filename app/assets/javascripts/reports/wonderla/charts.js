(function (w, d, $, undefined) {
  'use strict';

   var Charts = function() {
    var charts = {};

    return {
      add: function(name, instance) {
        if(!(name in charts)) {
          charts[name] = instance;
        } else {
          console.error("Chart exists: " + name);
        }
      },

      get: function(name) {
        if(charts[name]) {
          var chart = charts[name];

          if (typeof chart === 'function') {
            chart = new chart();
          }

          return chart;
        } else {
          console.error("Undefined chart: " + name);
        }
      },

      exists: function(name) {
        return !!charts[name];
      },

      drawChart: function(){
        window.charts.get('tickets_vs_time').init();
        window.charts.get('group_wise_users_chart').init();
        window.charts.get('peakday_weekday_chart').init();
        window.charts.get('tickets_vs_source').init();
      }

    };
  };

  Highcharts.setOptions({ lang: { thousandsSep: ','}});

  window.charts = new Charts();

  $(d).ready(function(){
    $("#time_filter, #branch_filter").chosen({ width: '100%' });
    charts.drawChart();
    $("#time_filter, #branch_filter").on('change', charts.drawChart);

    var fixmeTop = $('.fixme').offset().top;       // get initial position of the element

    $(window).scroll(function() {                  // assign scroll event listener
      var currentScroll = $(window).scrollTop(); // get current position

      if (currentScroll >= fixmeTop) {           // apply position: fixed if you
        $('.fixme').addClass('fixed');
      } else {                                   // apply position: static
        $('.fixme').removeClass('fixed');
      }
    });
  });

}(window, document, jQuery));
