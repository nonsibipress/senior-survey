/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
  $('#general .andover.prestige-scale').highcharts({
    colors: ['#def2fa', '#b9e0f7', '#9cd6f4', '#79c4ed', '#60b6e6', '#52a7dc' , '#3b89c9' , '#2d7abf' , '#2265ab', '#0c508c'],
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ]
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
      text: 'How much does the prestige of a college affect your decision to apply?'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      data: [3.42, 3.42, 6.84, 6.84, 8.55, 14.53, 17.95, 20.51, 5.98, 11.97],
      showInLegend: false
    }]
  });
});
