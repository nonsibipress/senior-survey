/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
  $('#general .exeter.counselor-helpfulness').highcharts({
    colors: ['#8d0c0c', '#be2d2d', '#db5151',  '#ed7878', '#f7bbbb', '#fae0e0'],
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
      data: [42.29, 48.76, 8.96],
      showInLegend: false
    }]
  });
});
