/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
  $('#general .exeter.art-portfolio').highcharts({
    colors: ['#8d0c0c', '#be2d2d', '#db5151',  '#ed7878', '#f7bbbb', '#fae0e0'],
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: [
        'Yes',
        'No'
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
      text: 'Are you including a portfolio with your application?'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      data: [24.38, 75.62],
      showInLegend: false
    }]
  });
});
