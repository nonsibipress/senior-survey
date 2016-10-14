/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
  $('#general .exeter.prestige-scale').highcharts({
    colors: ['#fae0e0', '#f7bbbb', '#f49a9a', '#ed7878', '#e66060',  '#db5151', '#c93b3b', '#be2d2d', '#a22', '#8d0c0c'],
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
      data: [4.98, 3.48, 5.47, 4.47, 11.94, 7.96, 20.9, 20.4, 7.96, 12.44],
      showInLegend: false
    }]
  });
});
