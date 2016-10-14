/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
  $('#general .andover.stressed-college').highcharts({
    colors: ['#def2fa', '#b9e0f7', '#9cd6f4', '#79c4ed', '#60b6e6', '#52a7dc' , '#3b89c9' , '#2d7abf' , '#2265ab', '#0c508c'],
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
      data:[3.42]
    },
    {
      name: '2',
      data:[3.42]
    },
    {
      name: '3',
      data:[5.98]
    },
    {
      name: '4',
      data:[3.42]
    },
    {
      name: '5',
      data:[11.11]
    },
    {
      name: '6',
      data:[12.82]
    },
    {
      name: '7',
      data:[23.08]
    },
    {
      name: '8',
      data:[15.38]
    },
    {
      name: '9',
      data:[11.11]
    },
    {
      name: '10',
      data:[10.26]
    }]
  });
});
