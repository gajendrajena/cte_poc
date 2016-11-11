$(document).ready(function() {
  var destinationWiseData = [
    {name: '28', y:  719,   drilldown: '28'},
    {name: '67', y:  338,   drilldown: '67'},
    {name: '64', y:  1930,  drilldown: '64'},
    {name: '39', y:  1065,  drilldown: '39'},
    {name: '55', y:  1856,  drilldown: '55'},
    {name: '68', y:  10,    drilldown: '68'},
    {name: '65', y:  1,     drilldown: '65'},
    {name: '19', y:  13,    drilldown: '19'},
    {name: '1',  y:  9,     drilldown: '1'},
    {name: '61', y:  6,     drilldown: '61'},
    {name: '31', y:  14,    drilldown: '31'},
    {name: '21', y:  5,     drilldown: '21'},
    {name: '53', y:  2,     drilldown: '53'},
    {name: '94', y:  3,     drilldown: '94'},
    {name: '59', y:  7,     drilldown: '59'},
    {name: '58', y:  5,     drilldown: '58'},
    {name: '13', y:  2,     drilldown: '13'},
    {name: '2',  y:  1,     drilldown: '2'},
    {name: '11', y:  1,     drilldown: '11'},
    {name: '23', y:  1,     drilldown: '23'},
    {name: '26', y:  1,     drilldown: '26'},
    {name: '118',y:  1,     drilldown: '118'},
    {name: '14', y:  1,     drilldown: '14'},
    {name: 'NA', y:  567,   drilldown: 'NA'}
  ];

  var drilldown_series = [] ;
  destinationWiseData.forEach(function(destination_data){
    var city_wise_data = _.where(cityWiseDate, { country: destination_data.name});
    var city_wise_data_hash = {};
    city_wise_data_hash.name = 'City Wise Date';
    city_wise_data_hash.id = destination_data.name;
    city_wise_data_hash.data = _.map(city_wise_data, function(e){
      return [e.city, parseInt(e.no_of_bookings) ];
    });
    drilldown_series.push(city_wise_data_hash);
  });

  $('#destination_wise_chart').highcharts({
    chart: {type: 'column'},
    title: {text: 'Destination Wise Booking Chart'},
    subtitle: {text: 'Click the columns to view for each destination.'},
    xAxis: {type: 'category',title: {  text: 'Destinations ->'}},
    yAxis: {title: {  text: 'No. of Bookings ->'}},
    legend: {enabled: false},
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: { enabled: true, format: '{point.y}'}
      }
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
    },

    series: [{
      name: 'Country',
      colorByPoint: true,
      data: destinationWiseData
    }],
    drilldown: {
      series: drilldown_series
    }
  });

});


cityWiseDate = [
  {country: '1', city:   '6', no_of_bookings:          1},
  {country: '1', city:   '4', no_of_bookings:          1},
  {country: '1', city:  'Sydney', no_of_bookings:      2},
  {country: '1', city:    'NA', no_of_bookings:          5},
  {country: '2', city:  'Vienna', no_of_bookings:        1},
  {country: '11', city: 'Cavtat', no_of_bookings:        1},
  {country: '13', city: 'Prague', no_of_bookings:        2},
  {country: '14', city: 'Copenhagen', no_of_bookings:      1},
  {country: '19', city: 'Paris',  no_of_bookings:          13},
  {country: '21', city: 'Duesseldorf',  no_of_bookings:      4},
  {country: '21', city: 'Berlin', no_of_bookings:        1},
  {country: '23', city: 'Athens', no_of_bookings:        1},
  {country: '26', city: 'Budapest', no_of_bookings:        1},
  {country: '28', city: 'BALI - DENPASAR',  no_of_bookings:    2},
  {country: '28', city: 'Bali - jimbaran bay',  no_of_bookings:  7},
  {country: '28', city: 'BALI - KUTA BEACH',  no_of_bookings:    113},
  {country: '28', city: 'Bali - nusa dua',  no_of_bookings:    46},
  {country: '28', city: 'Bali - seminyak',  no_of_bookings:    45},
  {country: '28', city: 'Bali - Ubud',  no_of_bookings:      24 },
  {country: '28', city: 'Bandung (java west)',  no_of_bookings:  1},
  {country: '28', city: 'Batam',  no_of_bookings:          1},
  {country: '28', city: 'Bintan', no_of_bookings:        1},
  {country: '28', city: 'BSM',  no_of_bookings:          21},
  {country: '28', city: 'Jakarta',  no_of_bookings:        5},
  {country: '28', city: 'KUTA', no_of_bookings:          92},
  {country: '28', city: 'Lombok', no_of_bookings:        2},
  {country: '28', city: 'NA', no_of_bookings:          331},
  {country: '31', city: 'Florence', no_of_bookings:        1},
  {country: '31', city: 'Rome', no_of_bookings:          2},
  {country: '31', city: 'Venice - mestre',  no_of_bookings:    2         },
  {country: '31', city: 'Turin',  no_of_bookings:          1},
  {country: '31', city: 'Milan',  no_of_bookings:          4},
  {country: '31', city: 'Napoli', no_of_bookings:        1},
  {country: '39', city: 'Cameron highlands',  no_of_bookings:    1},
  {country: '39', city: 'Genting highlands',  no_of_bookings:    19},
  {country: '39', city: 'Ipoh', no_of_bookings:          1},
  {country: '39', city: 'Johor Bahru',  no_of_bookings:      4},
  {country: '39', city: 'Kota Kinabalu',  no_of_bookings:      1},
  {country: '39', city: 'Kuala lumpur', no_of_bookings:      202         },
  {country: '39', city: 'Kuala terengganu', no_of_bookings:    1},
  {country: '39', city: 'LANGKAWI', no_of_bookings:        46},
  {country: '39', city: 'Melaka (ex. malacca)', no_of_bookings:  1},
  {country: '39', city: 'Pangkor',  no_of_bookings:        1},
  {country: '39', city: 'Penang', no_of_bookings:        5},
  {country: '39', city: 'Port dickson', no_of_bookings:      1},
  {country: '39', city: 'NA', no_of_bookings:          601},
  {country: '53', city: 'Moscow', no_of_bookings:        2},
  {country: '55', city: 'SENT', no_of_bookings:          1},
  {country: '55', city: 'Sentosa',  no_of_bookings:        12          },
  {country: '55', city: 'Singapore',  no_of_bookings:        495},
  {country: '55', city: 'NA', no_of_bookings:          887},
  {country: '58', city: 'Madrid', no_of_bookings:        3},
  {country: '58', city: 'Barcelona',  no_of_bookings:        1             },
  {country: '58', city: 'Ibiza',  no_of_bookings:          1},
  {country: '59', city: 'Kandy',  no_of_bookings:          2},
  {country: '59', city: 'Colombo',  no_of_bookings:        4         },
  {country: '59', city: 'Nuwara eliya', no_of_bookings:      1},
  {country: '61', city: 'Interlaken', no_of_bookings:      2},
  {country: '61', city: 'Zurich', no_of_bookings:        1},
  {country: '61', city: 'Lucerne',  no_of_bookings:        1         },
  {country: '61', city: 'Geneva', no_of_bookings:        1},
  {country: '64', city: 'Bangkok',  no_of_bookings:        231},
  {country: '64', city: 'Chiang mai', no_of_bookings:      1},
  {country: '64', city: 'Hua hin',  no_of_bookings:        4},
  {country: '64', city: 'Koh phangan',  no_of_bookings:      1},
  {country: '64', city: 'Krabi',  no_of_bookings:          39          },
  {country: '64', city: 'Pattaya',  no_of_bookings:        202},
  {country: '64', city: 'Phi phi island', no_of_bookings:    1},
  {country: '64', city: 'Phuket', no_of_bookings:        146},
  {country: '64', city: 'Samui island', no_of_bookings:      13},
  {country: '64', city: 'NA', no_of_bookings:          1009},
  {country: '65', city: 'Istanbul', no_of_bookings:        1},
  {country: '67', city: 'Abu dhabi',  no_of_bookings:        5},
  {country: '67', city: 'Al Ain', no_of_bookings:        1},
  {country: '67', city: 'Dubai',  no_of_bookings:          83},
  {country: '67', city: 'Sharjah',  no_of_bookings:        1},
  {country: '67', city: 'NA', no_of_bookings:          176},
  {country: '68', city: 'London', no_of_bookings:        9},
  {country: '68', city: 'Edinburgh',  no_of_bookings:        1},
  {country: '94', city: 'Bratislava', no_of_bookings:      3},
  {country: '118', city:  'Tbilisi',  no_of_bookings:        1},
  {country: 'NA', city:   'NA', no_of_bookings:          539},
  {country: 'NA', city:   'Hong kong',  no_of_bookings:        22},
  {country: 'NA', city:   'Kowloon',  no_of_bookings:        3},
  {country: 'NA', city:   'Macau',  no_of_bookings:          3},
  {country: 'NA', city:   'NA', no_of_bookings:          539 }
];