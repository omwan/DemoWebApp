
function myFunction() {
    $('#demo').append('<p>NEWWW PARAGRAPH #javascript #swag</>')
}

$(document).ready(function(){
    var apiKey = 'ff51f31c249d0248530b15e67bb1cd96';
    $.get('http://api.openweathermap.org/data/2.5/weather?id=2172797&APPID=' + apiKey, function(data) {
        $('#content').text(data.coord.lon);
    })
})
