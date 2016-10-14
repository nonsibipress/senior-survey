/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
  $('#general .exeter.stressed-college').highcharts({
    colors: ['#fc2531', '#ea1b27', '#da111e', '#ce0a18', '#c10311',  '#b2020e', '#9f040f', '#8c0710', '#6f0c12', '#580f13'],
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
