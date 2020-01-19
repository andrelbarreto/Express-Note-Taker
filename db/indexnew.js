var $noteTitle = $(".note-title");
var $noteText = $(".note-textarea");
var $saveNoteBtn = $(".save-note");
var $newNoteBtn = $(".new-note");
var $noteList = $(".list-container .list-group");

// activeNote is used to keep track of the note in the textarea
var activeNote = {};

$( document ).ready(function() {
let notes;

function getNotes(){
  $.ajax({
        url: "/api/notes",
        method: "GET"
      }).then(function(response) {
        notes = response;
        console.log(notes);
        $("#note-column").empty();
        for (x of notes){
          $(`<h4>${x.title}<h4><button class="btn btn-sm btn-outline-dark delete-button" data-id="${x.id}" data-body="${x.body}"><i class="text-danger fas fa-dumpster"></i></button><p class ="hwText" >${x.body}</p>`).appendTo("#note-column");
        };
        deleteListener();
      });
};

getNotes();

$("#save-note").on("click", function() {
  event.preventDefault();
  
  const noteData = {
      title: $("#note-title").val().trim(),
      body: $("#note-text").val().trim()
      
    };
    console.log(noteData);
    $.ajax({
      url: "/api/notes",
      method: "POST",
      data: noteData
    }).then(function(){
      getNotes();
    });
});


function deleteListener(){
 
  $(".delete-button").click(function() {
    let deleteData = {
      id: $(this).attr("data-id").trim(),
      body: $(this).attr("data-body").trim(),
    };
    console.log(deleteData);
    $.ajax({
      url: "/api/notes/" + deleteData.id,
      method: "DELETE",
    }).then(function(){
      getNotes();
      
    });


  });
};
}