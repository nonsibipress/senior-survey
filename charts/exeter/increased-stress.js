/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
  $('#general .exeter.increased-stress').highcharts({
    colors: ['#8d0c0c', '#be2d2d', '#db5151',  '#ed7878', '#f7bbbb', '#fae0e0'],
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: [
        'Much more stress',
        'A little more stress',
        'Same amount of stress',
        'A little less stress',
        'Much less stress'
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
      text: 'How has your stress level about the college application process changed since returning to school this fall?'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      data: [39.8, 34.83, 14.43, 6.47, 4.48],
      showInLegend: false
    }]
  });
});
