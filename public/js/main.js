
function myFunction() {
    $('#demo').append('<p>NEWWW PARAGRAPH #javascript #swag</>')
}

$(document).ready(function(){
    var apiKey = <%= process.env.API_KEY %>;
    $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=' + apiKey, function(data) {
        $('#content').append(data.sys.name);
    })
})
