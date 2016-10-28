/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
  $('#testing .andover.sat-act').highcharts({
    colors: ['#0c508c', '#2d7abf', '#52a7dc','#79c4ed', '#b9e0f7', '#def2fa'],
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
      data: [46.15, 41.03, 12.82, 0],
      showInLegend: false
    }]
  });
});
