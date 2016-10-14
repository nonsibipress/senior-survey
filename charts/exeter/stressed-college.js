/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
  $('#general .exeter.stressed-college').highcharts({
    colors: ['#fae0e0', '#f7bbbb', '#f49a9a', '#ed7878', '#e66060',  '#db5151', '#c93b3b', '#be2d2d', '#a22', '#8d0c0c'],
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: [ '' ]
    },
    legend: {
      symbolRadius: 0
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
      text: 'How stressed are you about the college application process?<br />1 = not very stressed, 10 = very stessed'
    },
    tooltip: {
      formatter: stackedBarToolTipFormatter
    },
    series: [{
      name: '1',
      data:[3.98]
    },
    {
      name: '2',
      data:[2.99]
    },
    {
      name: '3',
      data:[6.47]
    },
    {
      name: '4',
      data:[7.46]
    },
    {
      name: '5',
      data:[10.45]
    },
    {
      name: '6',
      data:[11.44]
    },
    {
      name: '7',
      data:[18.91]
    },
    {
      name: '8',
      data:[13.43]
    },
    {
      name: '9',
      data:[9.95]
    },
    {
      name: '10',
      data:[14.93]
    }]
  });
});
