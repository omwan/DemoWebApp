
function myFunction() {
    $('#demo').append('<p>NEWWW PARAGRAPH #javascript #swag</>')
}

$(document).ready(function(){
    var apiKey = ff51f31c249d0248530b15e67bb1cd96;
    $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=' + apiKey, function(data) {
        $('#content').append(data.city.name);
    })
})
