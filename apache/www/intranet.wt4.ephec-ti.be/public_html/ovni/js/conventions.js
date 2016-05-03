
/*Created by forma1308 on 07-04-16.*/

$(document).ready(function(){
    console.log('ready !')
    /*
    var url = 'http://10.10.13.113/events';
    $('#eventTable').DataTable(
        {
            "ajax":
            {
                url: url,
                type: "GET",
                dataType: 'json'
            },

            "columns":
                [
                    { "data": "title" },
                    { "data": "Date.parse(date)"},
                    { "data": "type.value"},
                    { "data": "description"},
                    { "data": "rating" }
                ],

            "columnDefs":
                [
                    { "title": "Title", "targets": 0 },
                    { "title": "Date", "targets": 1, "type": 'date',"dateFormat": "yy-mm-dd" },
                    { "title": "Rating", "targets": 4 },
                    { "title": "Description", "targets": 3 },
                    { "title": "Type", "targets": 2 }
                ]
        });
    */
});


 function fonctionEvent() {
     var url = 'http://10.10.13.113/conventions';
     $.ajax({
         url: url,
         type: 'GET',
         dataType: 'json',
         success: function (response) {
             console.log('success');
             console.log(response);
             handleResponse(response);
         },
         error: function (response, status, error) {
             console.log('error');
             console.log(error);
         }
     });
 }

/*
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function myFunction() {
    var d = new Date();
    var x = document.getElementById("demo");
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    x.innerHTML = h + ":" + m + ":" + s;
}
*/
 function handleResponse(response){

     var response = response;

     var id = response.data[0].id;
     var name = response.data[0].name;
     var description = response.data[0].description;
     var country = response.data[0].location.country;
     var city = response.data[0].location.city;

     var date = new Date(response.data[0].date).toLocaleString();
     var day = new Date(response.data[0].date).getDate();
     var month = new Date(response.data[0].date).getMonth()+1;
     var year = new Date(response.data[0].date).getFullYear();
     var hours = new Date(response.data[0].date).getHours();
     var minutes = new Date(response.data[0].date).getMinutes();

     console.log(date);
     console.log(day);
     console.log(month);
     console.log(year);
     console.log(hours);
     console.log(minutes);

     var idEvent = 'convention'+id;


     $('<div/>')
         .addClass('conventions-item')
            .attr('id', idEvent)
            .append($('<div/>')
                .attr('id', 'haut')

                .append($('<div/>')
                    .addClass('date')
                    .append($('<div/>')
                        .addClass('jour')
                        .text(day))
                    .append($('<div/>')
                        .addClass('mois-annee')
                        .text(month+"/"+year))

                )

                .append($('<div/>')
                    .addClass('infos')
                    .append($('<div/>')
                        .addClass('name')
                        .text(name))
                    .append($('<div/>')
                        .addClass('heure')
                        .text(hours+":"+minutes))
                    .append($('<div/>')
                        .addClass('country-city')
                        .text(country+" - "+city))

                )

                .append($('<div/>')
                    .addClass('clearfix')
                )

            )
            .append($('<div/>')
                .attr('id', 'bas')
                .append($('<div/>')
                    .addClass('description')
                    .text(description))
            )


         .appendTo($('#conventions-ajax-content'));

 }
