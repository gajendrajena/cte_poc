$(document).ready(function() {
	$('#group_wise_users').highcharts({
		chart: {
			type: 'line'
		},
		title: {
			text: 'Tickets Booked for different user groups for financial year 2016-2017'
		},
		subtitle: {
			text: 'Source: CTE'
		},
		xAxis: {
			categories: months
		},
		yAxis: {
			title: {
				text: 'Tickets books'
			}
		},
		plotOptions: {
			line: {
				dataLabels: {
					enabled: true
				},
				enableMouseTracking: false
			}
		},
		series: series_data
	});

	$('#group_wise_users_pie_chart').highcharts({
		chart: {
			type: 'pie',
			options3d: {
				enabled: true,
				alpha: 45,
				beta: 0
			}
		},
		title: {
			text: 'Tickets Booked for different user groups for financial year 2016-2017'
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				depth: 35,
				dataLabels: {
					enabled: true,
					format: '{point.name}'
				}
			}
		},
		series: series_pie
	});
});

var current_year_tikets_group_wise =[
{finalcial_year: '20162017',	month: 'APR',	group: 'General', tickets: 70716},
{finalcial_year: '20162017',	month: 'JUL',	group: 'General', tickets: 30570},
{finalcial_year: '20162017',	month: 'AUG',	group: 'General', tickets: 26560},
{finalcial_year: '20162017',	month: 'MAY',	group: 'General', tickets: 106242},
{finalcial_year: '20162017',	month: 'JUN',	group: 'General', tickets: 37886},
{finalcial_year: '20162017',	month: 'OCT',	group: 'General', tickets: 31832},
{finalcial_year: '20162017',	month: 'SEP',	group: 'General', tickets: 17560},
{finalcial_year: '20162017',	month: 'APR',	group: 'Corporate', tickets: 1566},
{finalcial_year: '20162017',	month: 'AUG',	group: 'Corporate', tickets: 590},
{finalcial_year: '20162017',	month: 'JUL',	group: 'Corporate', tickets: 732},
{finalcial_year: '20162017',	month: 'JUN',	group: 'Corporate', tickets: 304},
{finalcial_year: '20162017',	month: 'MAY',	group: 'Corporate', tickets: 876},
{finalcial_year: '20162017',	month: 'OCT',	group: 'Corporate', tickets: 152},
{finalcial_year: '20162017',	month: 'SEP',	group: 'Corporate', tickets: 196},
{finalcial_year: '20162017',	month: 'APR',	group: 'College', tickets: 334},
{finalcial_year: '20162017',	month: 'AUG',	group: 'College', tickets: 1608},
{finalcial_year: '20162017',	month: 'JUL',	group: 'College', tickets: 540},
{finalcial_year: '20162017',	month: 'JUN',	group: 'College', tickets: 60},
{finalcial_year: '20162017',	month: 'MAY',	group: 'College', tickets: 76},
{finalcial_year: '20162017',	month: 'OCT',	group: 'College', tickets: 274},
{finalcial_year: '20162017',	month: 'SEP',	group: 'College', tickets: 462},
{finalcial_year: '20162017',	month: 'APR',	group: 'School', tickets: 100},
{finalcial_year: '20162017',	month: 'AUG',	group: 'School', tickets: 168},
{finalcial_year: '20162017',	month: 'JUL',	group: 'School', tickets: 104},
{finalcial_year: '20162017',	month: 'JUN',	group: 'School', tickets: 48},
{finalcial_year: '20162017',	month: 'MAY',	group: 'School', tickets: 74},
{finalcial_year: '20162017',	month: 'OCT',	group: 'School', tickets: 216},
{finalcial_year: '20162017',	month: 'SEP',	group: 'School', tickets: 118}
];
var months = _.uniq(_.map(current_year_tikets_group_wise, function(e){ return e.month; }));
var groups = _.uniq(_.map(current_year_tikets_group_wise, function(e){ return e.group; }));

var series_data = _.map(groups, function(group){
	var data = _.map(_.where(current_year_tikets_group_wise, {group: group}), function(e){ return e.tickets});
	return {name: group, data: data};
});

var series_pie_data = _.map(groups, function(group){
	var data = _.map(_.where(current_year_tikets_group_wise, {group: group}), function(e){ return e.tickets});
	var sum = _.reduce(data, function(memo, num){ return memo + num; }, 0)
	if(group === 'General'){
		return {name: group, y: sum, sliced: true, selected: true};
	} else {
		return {name: group, y: sum};
	}
});

var series_pie = [{ type: 'pie', name: 'Browser share', data: series_pie_data}];
