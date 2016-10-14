/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
  $('#general .exeter.college-process-stage').highcharts({
    colors: ['#580306', '#870309', '#C70A14', '#E73035', '#FC6567', '#FDAEAF'],
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: [
        'Have not started',
        'Written personal statement',
        'Written personal statement and supplements',
        'Finsihed writing applications',
        'Sent in applications'
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
      text: 'How far along are you in the college application process?'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      data: [13.43, 46.72, 28.86, 9.45, 1.99],
      showInLegend: false
    }]
  });
});
