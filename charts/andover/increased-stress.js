/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
  $('#general .andover.increased-stress').highcharts({
    colors: ['#082B55', '#125AB2', '#178DE7', '#65B9FC', '#ABDCFD'],
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
      data: [43.59, 31.62, 13.68, 8.55, 2.56],
      showInLegend: false
    }]
  });
});
