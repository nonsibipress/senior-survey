/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
  $('#general .andover.counselor-helpfulness').highcharts({
    colors: ['#082B55', '#125AB2', '#178DE7', '#65B9FC', '#ABDCFD'],
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
      data: [48.72, 20.17, 11.11],
      showInLegend: false
    }]
  });
});
