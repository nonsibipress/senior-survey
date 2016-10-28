/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
  $('#testing .exeter.act-sat-combo').highcharts({
    colors: ['#be2d2d', '#c93b3b', '#db5151', '#e66060', '#ed7878', '#f49a9a', '#f7bbbb', '#fae0e0'],
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
      data: [26.87, 22.39]
    }, {
      name: '1',
      data: [31.34, 34.33]
    }, {
      name: '2',
      data: [25.37, 27.86]
    }, {
      name: '3',
      data: [12.44, 10.45]
    }, {
      name: '4',
      data: [1.99, 2.99]
    }, {
      name: '5',
      data: [1.49, 1]
    }, {
      name: '6',
      data: [0, 0]
    }, {
      name: '7',
      data: [0.5, 1]
    }]
  });
});
