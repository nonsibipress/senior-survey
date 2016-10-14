/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
  $('#testing .andover.test-prep').highcharts({
    colors: ['#082B55', '#125AB2', '#178DE7', '#65B9FC', '#ABDCFD'],
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: [
        'Using a textbook',
        'Using an online course',
        'Private tutoring',
        'Not specifically preparing'
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
      text: 'How are you preparing for the SAT/ACT?'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      data: [ 37.07, 15.52, 30.17, 17.24 ],
      showInLegend: false
    }]
  });
});
