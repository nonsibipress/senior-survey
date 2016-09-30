$(function () {
  $('#middle-school .exeter.type').highcharts({
    colors: ['#580306', '#870309', '#C70A14', '#E73035', '#FC6567', '#FDAEAF'],
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: [
        'Public',
        'Private',
        'Homeschool'
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
      text: 'What type of middle school did you graduate from?'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      // data: [72, 85]
      data: [60.40, 38.26, 2],
      showInLegend: false
    }]
  });
});