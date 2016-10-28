/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
  $('#testing .exeter.sat-act').highcharts({
    colors: ['#8d0c0c', '#be2d2d', '#db5151',  '#ed7878', '#f7bbbb', '#fae0e0'],
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: [
        'SAT',
        'ACT',
        'SAT and ACT',
        'Neither'
      ]
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
      text: 'Are you taking the SAT or the ACT?'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      data: [31.66, 32.66, 33.17, 2.51],
      showInLegend: false
    }]
  });
});
