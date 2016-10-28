/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
  $('#general .exeter.decision-type').highcharts({
    colors: ['#8d0c0c', '#be2d2d', '#db5151',  '#ed7878', '#f7bbbb', '#fae0e0'],
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: [
        'Early action',
        'Early decision',
        'Early action and early decision',
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
      text: 'Are you applying early action and/or early decision?'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      data: [36.32, 20.90, 30.85, 11.94],
      showInLegend: false
    }]
  });
});
