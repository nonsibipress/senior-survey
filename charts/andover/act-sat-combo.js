/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
  $('#testing .andover.act-sat-combo').highcharts({
    colors: ['#2d7abf', '#3b89c9', '#52a7dc', '#60b6e6', '#79c4ed', '#9cd6f4', '#b9e0f7', '#def2fa'],
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: ['ACT', 'SAT']
    },
    yAxis: {
      max: 100
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    title: {
      text: 'SAT vs. ACT Breakdown'
    },
    tooltip: {
      formatter: stackedBarToolTipFormatter
    },
    series: [{
      name: '0',
      data: [33.04, 23.93]
    }, {
      name: '1',
      data: [23.48, 26.5]
    }, {
      name: '2',
      data: [30.43, 32.48]
    }, {
      name: '3',
      data: [8.7, 11.97]
    }, {
      name: '4',
      data: [3.48, 5.13]
    }, {
      name: '5',
      data: [0.87, 0]
    }, {
      name: '6',
      data: [0, 0]
    }, {
      name: '7',
      data: [0, 0]
    }]
  });
});
