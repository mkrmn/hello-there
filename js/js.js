$(document).ready(function() {
    // jQuery code

     //////////////////////// Menu scroll to section
    $('.scrollto').click(function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top - 40  }, 1200);
        event.preventDefault();
    });
        
    ///////////////// for small screen
    if ($(window).width() < 992) {

        /////////////////////// Closes the Responsive Menu on Menu Item Click
        $('.navbar-collapse a.scrollto').click(function() {
            $('.navbar-toggler:visible').click();
        });
    }

}); // jquery end

/* 

sample chart.js code

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
}); */

/*  -- college chart -- */
var ctx = document.getElementById("myDoughnutChart");

var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data = {
        datasets: [{
            data: [8, 4, 6, 2, 4],
            backgroundColor: [
                '#FAF3DD',
                '#C8D5B9',
                '#8FC0A9',
                '#68B0AB',
                '#696D7D'
            ]
        }],

        labels: [
            'screen time',
            'procrastinating',
            'sleep',
            'eating',
            '???'
        ]
    }
});