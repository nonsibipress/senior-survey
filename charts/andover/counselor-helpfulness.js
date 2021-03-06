/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
  $('#general .andover.counselor-helpfulness').highcharts({
    colors: ['#0c508c', '#2d7abf', '#52a7dc','#79c4ed', '#b9e0f7', '#def2fa'],
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: [
        'Very helpful',
        'Somewhat helpful',
        'Not at all helpful'
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
      text: 'How helpful has your college counselor has been throughout the process?'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      data: [48.72, 40.17, 11.11],
      showInLegend: false
    }]
  });
});
