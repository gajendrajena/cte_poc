$(function () {

  $('#agent_wise_report').highcharts({
    chart: {
      type: 'pyramid',
      marginRight: 100
    },
    title: {
      text: 'Sales pyramid for Agent wise Booking',
      x: -50
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b> ({point.y:,.0f})',
          color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
          softConnector: true
        }
      }
    },
    legend: {
      enabled: false
    },
    series: [{
      name: 'Sales',
      data: agentData
    }]
  });
});


var agentData = [
  ["LUCKY TOURS", 120135282.1],
  ["BIMATAMA TOUR", 21135913.62],
  ["visto tour", 16912436.75],
  ["MW TOUR", 16841352.25],
  ["HAPPY TOUR", 13596525],
  ["DITA TOUR", 8903129],
  ["EC TOURS & TRAVEL", 8829669.62],
  ["SKY OCEAN TRAVEL", 7059086.06],
  ["JETA TRAVEL", 5372123.5],
  ["PANEN TOUR", 3075691.75],
  ["LAVENDER BOUTIQUE TRAVEL SOLUTION", 2942107.5],
  ["PT BNT TOUR & TRAVEL", 1751000],
  ["KERALA TOUR MART INDIA PVT LTD", 1319217.13],
  ["EZIHOLIDAY", 1106438.1],
  ["ANUGA TRAVEL & TOURS", 1032028.25]
];