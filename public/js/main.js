var apiKey = '<%= process.env.API_KEY %>';

$(document).ready(function(){
    $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=ff51f31c249d0248530b15e67bb1cd96', function(data) {
        $('#content').append(data.sys.name);
    })
})
