/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
  $('#general .exeter.increased-stress').highcharts({
    colors: ['#580306', '#870309', '#C70A14', '#E73035', '#FC6567', '#FDAEAF'],
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
