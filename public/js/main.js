
function myFunction() {
    $('#demo').append('<p>NEWWW PARAGRAPH #javascript #swag</>')
}

$(document).ready(function(){
    $.get('http://api.openweathermap.org/data/2.5/weather?id=2172797&APPID=ff51f31c249d0248530b15e67bb1cd96', function(data) {
        $('#content').text(data.coord.lon);
    })
})
