
 /*Created by forma1308 on 07-04-16.*/

 $(document).ready(function(){
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
                     { "class": "titre", "data": "title" },
                     { "class": "date","data": "date"},
                     { "class": "type","data": "type.value"},
                     { "class": "description","data": "description"},
                     { "class": "rating","data": "rating" }
                 ],

             "columnDefs":
                 [
                     { "title": "Title", "targets": 0, "style": "background-color : dimgrey;" },
                     { "title": "Date", "targets": 1, "type": 'date'},
                     { "title": "Rating", "targets": 4 },
                     { "title": "Description", "targets": 3 },
                     { "title": "Type", "targets": 2 }
                 ]
         });
     $('eventTable_wrapper').addClass('row-border');

 });
/*

function fonctionEvent() {
    var url = 'http://10.10.13.113/events';
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

function handleResponse(response){

    var response = response;

    var id = response.data[0].id;
    var creationDate = new Date(response.data[0].creationDate).toLocaleString();
    var createdBy = response.data[0].createdBy;
    var title = response.data[0].title;
    var description = response.data[0].description;
    var date = response.data[0].date;
    var rating = response.data[0].rating;

    var idEvent = 'event'+id;




    $('<div/>')
        .addClass('event')
        .attr('id', idEvent)
        .text('id : '+id)

        .append($('<div/>')
        .addClass('creationDate')
        .text('Date de creation : '+ creationDate))

        .append($('<div/>')
        .addClass('createdBy')
        .text('Créer par : '+ createdBy))

        .append($('<div/>')
        .addClass('title')
        .text('Titre : '+ title))

        .append($('<div/>')
        .addClass('description')
        .text('Description : '+ description))

        .append($('<div/>')
        .addClass('date')
        .text('Date : '+ date))

        .append($('<div/>')
        .addClass('rating')
        .text('Rating : '+ rating))

    .appendTo($('#containerEvents'));

}*/
