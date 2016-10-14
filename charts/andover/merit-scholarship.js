/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
  $('#general .andover.merit-scholarship').highcharts({
    colors: ['#082B55', '#125AB2', '#178DE7', '#65B9FC', '#ABDCFD'],
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: [
        'Yes',
        'No',
        'Unsure'
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
      text: 'Are you applying for a National Merit Scholarship?'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      data: [15.38, 74.36, 10.26],
      showInLegend: false
    }]
  });
});
