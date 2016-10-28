/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
  $('#general .andover.college-process-stage').highcharts({
    colors: ['#0c508c', '#2d7abf', '#52a7dc','#79c4ed', '#b9e0f7', '#def2fa'],
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: [
        'Have not started',
        'Written personal statement',
        'Written personal statement and supplements',
        'Finsihed writing applications',
        'Sent in applications'
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
      text: 'How far along are you in the college application process?'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      data: [7.69, 45.3, 39.32, 5.98, 1.71],
      showInLegend: false
    }]
  });
});
