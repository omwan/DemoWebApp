
function myFunction() {
    $('#demo').append('<p>NEWWW PARAGRAPH #javascript #swag</>')
}

$(document).ready(function(){
    var apiKey = '<%= process.env.API_KEY %>';
    $.get('http://api.openweathermap.org/data/2.5/weather?id=2172797&APPID=' + apiKey, function(data) {
        $('#content').text(data.coord.lon);
    })
})
