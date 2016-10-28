/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
  $('#testing .exeter.test-prep').highcharts({
    colors: ['#8d0c0c', '#be2d2d', '#db5151',  '#ed7878', '#f7bbbb', '#fae0e0'],
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
      data: [ 37.06, 16.24, 22.34, 24.37 ],
      showInLegend: false
    }]
  });
});
