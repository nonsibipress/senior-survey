/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
  $('#general .andover.attending-college').highcharts({
    colors: ['#125AB2', '#65B9FC', '#ABDCFD'],
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: ['']
    },
    yAxis: {
      max: 100
    },
    plotOptions: {
      series: {
        colorByPoint: false,
        stacking: 'percent'
      }
    },
    title: {
      text: 'Do you plan on attending college?'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      name: 'Yes',
      data: [100]
    },{
      name: 'No',
      data: [0]
    },{
      name: 'Unsure',
      data: [0]
    }]
  });
});
