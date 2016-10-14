/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
  $('#testing .exeter.taken-sat-times').highcharts({
    colors: ['#580306', '#870309', '#C70A14', '#E73035', '#FC6567', '#FDAEAF'],
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: [ '0', '1', '2', '3', '4', '5', '6', '7' ]
    },
    yAxis: {
      max: 100
    },
    plotOptions: {
      series: {
        colorByPoint: true
      }
    },
    title: {
      text: 'How many times have you taken the SAT?'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      data: [ 26.87, 31.34, 25.37, 12.44, 1.99, 1.49, 0, 0.5 ],
      showInLegend: false
    }]
  });
});
