$(document).ready(function () {
    $('#sampleButton').on('click', function () {
       window.open("https://docs.google.com/forms/d/e/1FAIpQLSfubM6j3i3CdxS0S2n7jZ63zNqSaqNevtmKOiwnArURQBeOag/viewform?usp=sf_link", "_new")
    });
    $('.button').css({
        "background-color": "lightgrey",
        "border": "2px solid #000",
        "width": "100px",
        "text-align": "center"
    })
    $('.table').hover(function() {
        $(this).css({
            "background-color": "lightgrey"
        })
    }, function () {
        $(this).css({
            "background-color":"transparent"
        })
    })



});