/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
  $('#testing .andover.taken-sat-times').highcharts({
    colors: ['#0c508c', '#2d7abf', '#52a7dc','#79c4ed', '#b9e0f7', '#def2fa'],
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
      data: [ 23.93, 26.5, 32.48, 11.97, 5.13, 0, 0, 0 ],
      showInLegend: false
    }]
  });
});
