/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
  $('#general .exeter.decision-type').highcharts({
    colors: ['#580306', '#870309', '#C70A14', '#E73035', '#FC6567', '#FDAEAF'],
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: [
        'Early action',
        'Early decision',
        'Early action and early decision',
        'No'
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
      text: 'Are you applying early action and/or early decision?'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      data: [36.32, 20.90, 30.85, 11.94],
      showInLegend: false
    }]
  });
});
