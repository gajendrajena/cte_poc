$(document).ready(function() {
  var destinationWiseData = [
    {name: 'Indonesia', y:  719,   drilldown: 'Indonesia', country_id: '28'},
    {name: 'United Arab Emirates', y:  338,   drilldown: 'United Arab Emirates', country_id: '67'},
    {name: 'Thailand', y:  1930,  drilldown: 'Thailand', country_id: '64'},
    {name: 'Malaysia', y:  1065,  drilldown: 'Malaysia', country_id: '39'},
    {name: 'Singapore', y:  1856,  drilldown: 'Singapore', country_id: '55'},
    {name: 'England', y:  10,    drilldown: 'England', country_id: '68'},
    {name: 'Turkey', y:  1,     drilldown: 'Turkey', country_id: '65'},
    {name: 'France', y:  13,    drilldown: 'France', country_id: '19'},
    {name: 'Australia',  y:  9,     drilldown: 'Australia', country_id: '1'},
    {name: 'Switzerland', y:  6,     drilldown: 'Switzerland', country_id: '61'},
    {name: 'Italy', y:  14,    drilldown: 'Italy', country_id: '31'},
    {name: 'Germany', y:  5,     drilldown: 'Germany', country_id: '21'},
    {name: 'Russia', y:  2,     drilldown: 'Russia', country_id: '53'},
    {name: 'Slovakia', y:  3,     drilldown: 'Slovakia', country_id: '94'},
    {name: 'Sri Lanka', y:  7,     drilldown: 'Sri Lanka', country_id: '59'},
    {name: 'Spain', y:  5,     drilldown: 'Spain', country_id: '58'},
    {name: 'Czech Republic', y:  2,     drilldown: 'Czech Republic', country_id: '13'},
    {name: 'Austria',  y:  1,     drilldown: 'Austria', country_id: '2'},
    {name: 'Croatia', y:  1,     drilldown: 'Croatia', country_id: '11'},
    {name: 'Greece', y:  1,     drilldown: 'Greece', country_id: '23'},
    {name: 'Hungary', y:  1,     drilldown: 'Hungary', country_id: '26'},
    {name: 'Georgia',y:  1,     drilldown: 'Georgia', country_id: '118'},
    {name: 'Denmark', y:  1,     drilldown: 'Denmark', country_id: '14'},
    {name: 'Others', y:  567,   drilldown: 'Others', country_id: 'Others'}
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
  //  ================================    END OF BAR CHART   ===============================



  //  ================================    START PIE CHART   ===============================

    // Destination Pie Chart with drilldown

    $(function () {
    // Create the chart
    $('#destination_wise_pie_chart').highcharts({
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Country wise Booking Chart'
      },
      subtitle: {
        text: 'Click the slices to view versions. Source: netmarketshare.com.'
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            format: '{point.name}: {point.y}'
          }
        }
      },

      tooltip: {
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b>'
      },
      series: [{
        name: 'Sales',
        colorByPoint: true,
        data: destinationWiseData
      }],
      drilldown: {
        series: drilldown_series
      }
    });
  });

  //  ================================    END PIE CHART   ===============================


});


cityWiseDate = [
  {country: 'Australia', city:   '6', no_of_bookings:          1},
  {country: 'Australia', city:   '4', no_of_bookings:          1},
  {country: 'Australia', city:  'Sydney', no_of_bookings:      2},
  {country: 'Australia', city:    'NA', no_of_bookings:          5},
  {country: 'Austria', city:  'Vienna', no_of_bookings:        1},
  {country: 'Croatia', city: 'Cavtat', no_of_bookings:        1},
  {country: 'Czech Republic', city: 'Prague', no_of_bookings:        2},
  {country: 'Denmark', city: 'Copenhagen', no_of_bookings:      1},
  {country: 'France', city: 'Paris',  no_of_bookings:          13},
  {country: 'Germany', city: 'Duesseldorf',  no_of_bookings:      4},
  {country: 'Germany', city: 'Berlin', no_of_bookings:        1},
  {country: 'Greece', city: 'Athens', no_of_bookings:        1},
  {country: 'Hungary', city: 'Budapest', no_of_bookings:        1},
  {country: 'Indonesia', city: 'BALI - DENPASAR',  no_of_bookings:    2},
  {country: 'Indonesia', city: 'Bali - jimbaran bay',  no_of_bookings:  7},
  {country: 'Indonesia', city: 'BALI - KUTA BEACH',  no_of_bookings:    113},
  {country: 'Indonesia', city: 'Bali - nusa dua',  no_of_bookings:    46},
  {country: 'Indonesia', city: 'Bali - seminyak',  no_of_bookings:    45},
  {country: 'Indonesia', city: 'Bali - Ubud',  no_of_bookings:      24 },
  {country: 'Indonesia', city: 'Bandung (java west)',  no_of_bookings:  1},
  {country: 'Indonesia', city: 'Batam',  no_of_bookings:          1},
  {country: 'Indonesia', city: 'Bintan', no_of_bookings:        1},
  {country: 'Indonesia', city: 'BSM',  no_of_bookings:          21},
  {country: 'Indonesia', city: 'Jakarta',  no_of_bookings:        5},
  {country: 'Indonesia', city: 'KUTA', no_of_bookings:          92},
  {country: 'Indonesia', city: 'Lombok', no_of_bookings:        2},
  {country: 'Indonesia', city: 'NA', no_of_bookings:          331},
  {country: 'Italy', city: 'Florence', no_of_bookings:        1},
  {country: 'Italy', city: 'Rome', no_of_bookings:          2},
  {country: 'Italy', city: 'Venice - mestre',  no_of_bookings:    2         },
  {country: 'Italy', city: 'Turin',  no_of_bookings:          1},
  {country: 'Italy', city: 'Milan',  no_of_bookings:          4},
  {country: 'Italy', city: 'Napoli', no_of_bookings:        1},
  {country: 'Malaysia', city: 'Cameron highlands',  no_of_bookings:    1},
  {country: 'Malaysia', city: 'Genting highlands',  no_of_bookings:    19},
  {country: 'Malaysia', city: 'Ipoh', no_of_bookings:          1},
  {country: 'Malaysia', city: 'Johor Bahru',  no_of_bookings:      4},
  {country: 'Malaysia', city: 'Kota Kinabalu',  no_of_bookings:      1},
  {country: 'Malaysia', city: 'Kuala lumpur', no_of_bookings:      202         },
  {country: 'Malaysia', city: 'Kuala terengganu', no_of_bookings:    1},
  {country: 'Malaysia', city: 'LANGKAWI', no_of_bookings:        46},
  {country: 'Malaysia', city: 'Melaka (ex. malacca)', no_of_bookings:  1},
  {country: 'Malaysia', city: 'Pangkor',  no_of_bookings:        1},
  {country: 'Malaysia', city: 'Penang', no_of_bookings:        5},
  {country: 'Malaysia', city: 'Port dickson', no_of_bookings:      1},
  {country: 'Malaysia', city: 'NA', no_of_bookings:          601},
  {country: 'Russia', city: 'Moscow', no_of_bookings:        2},
  {country: 'Singapore', city: 'SENT', no_of_bookings:          1},
  {country: 'Singapore', city: 'Sentosa',  no_of_bookings:        12          },
  {country: 'Singapore', city: 'Singapore',  no_of_bookings:        495},
  {country: 'Singapore', city: 'NA', no_of_bookings:          887},
  {country: 'Spain', city: 'Madrid', no_of_bookings:        3},
  {country: 'Spain', city: 'Barcelona',  no_of_bookings:        1             },
  {country: 'Spain', city: 'Ibiza',  no_of_bookings:          1},
  {country: 'Sri Lanka', city: 'Kandy',  no_of_bookings:          2},
  {country: 'Sri Lanka', city: 'Colombo',  no_of_bookings:        4         },
  {country: 'Sri Lanka', city: 'Nuwara eliya', no_of_bookings:      1},
  {country: 'Switzerland', city: 'Interlaken', no_of_bookings:      2},
  {country: 'Switzerland', city: 'Zurich', no_of_bookings:        1},
  {country: 'Switzerland', city: 'Lucerne',  no_of_bookings:        1         },
  {country: 'Switzerland', city: 'Geneva', no_of_bookings:        1},
  {country: 'Thailand', city: 'Bangkok',  no_of_bookings:        231},
  {country: 'Thailand', city: 'Chiang mai', no_of_bookings:      1},
  {country: 'Thailand', city: 'Hua hin',  no_of_bookings:        4},
  {country: 'Thailand', city: 'Koh phangan',  no_of_bookings:      1},
  {country: 'Thailand', city: 'Krabi',  no_of_bookings:          39          },
  {country: 'Thailand', city: 'Pattaya',  no_of_bookings:        202},
  {country: 'Thailand', city: 'Phi phi island', no_of_bookings:    1},
  {country: 'Thailand', city: 'Phuket', no_of_bookings:        146},
  {country: 'Thailand', city: 'Samui island', no_of_bookings:      13},
  {country: 'Thailand', city: 'NA', no_of_bookings:          1009},
  {country: 'Turkey', city: 'Istanbul', no_of_bookings:        1},
  {country: 'United Arab Emirates', city: 'Abu dhabi',  no_of_bookings:        5},
  {country: 'United Arab Emirates', city: 'Al Ain', no_of_bookings:        1},
  {country: 'United Arab Emirates', city: 'Dubai',  no_of_bookings:          83},
  {country: 'United Arab Emirates', city: 'Sharjah',  no_of_bookings:        1},
  {country: 'United Arab Emirates', city: 'NA', no_of_bookings:          176},
  {country: 'England', city: 'London', no_of_bookings:        9},
  {country: 'England', city: 'Edinburgh',  no_of_bookings:        1},
  {country: 'Slovakia', city: 'Bratislava', no_of_bookings:      3},
  {country: 'Georgia', city:  'Tbilisi',  no_of_bookings:        1},
  {country: 'Others', city:   'Others', no_of_bookings:          539},
  {country: 'Others', city:   'Hong kong',  no_of_bookings:        22},
  {country: 'Others', city:   'Kowloon',  no_of_bookings:        3},
  {country: 'Others', city:   'Macau',  no_of_bookings:          3},
  {country: 'Others', city:   'Others', no_of_bookings:          539 }
];