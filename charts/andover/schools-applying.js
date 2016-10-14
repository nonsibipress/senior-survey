/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
  $('#general .andover.schools-applying').highcharts({
    colors: ['#082B55', '#125AB2', '#178DE7', '#65B9FC', '#ABDCFD'],
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: [
        '1-5',
        '6-10',
        '11-15',
        '16-20',
        '21+'
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
      text: 'How many schools are you planning on applying to in total?'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      data: [12.82, 40.17, 41.88, 5.13, 0],
      showInLegend: false
    }]
  });
});
