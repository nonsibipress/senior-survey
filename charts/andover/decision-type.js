/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
  $('#general .andover.decision-type').highcharts({
    colors: ['#0c508c', '#2d7abf', '#52a7dc','#79c4ed', '#b9e0f7', '#def2fa'],
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
      data: [39.32, 13.68, 44.44, 2.56],
      showInLegend: false
    }]
  });
});
