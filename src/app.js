import _ from 'underscore';
import $ from 'jquery';
import 'jquery-colpick';

import Postit from 'models/postit';
import PostitNotes from './collections/postit_notes.js';
import PostItView from './views/postit_view.js';


// don't use until $(docuent).ready
var postitTemplate;
var postitNotes;

var postitData = [{
    text: "Backbone is a library not a Framework.",
    color: "#AC1200"
},
{
    text: "That means it doesn't dictate to you how the code is structured",
    color: "#752310"
}];


var myPostit = new Postit({
  text: "This is a postit!",
  color: "#752310"
});


// var render =  function(postit){
//   var jsonPostit = postit.toJSON();
//   // invoke the compiled template to generate HTML using the data from a specific task
//   var generatedHTML = postitTemplate(jsonPostit);
//   $('#postits').append(generatedHTML);
// };


var newPostItForm = function() {
  // Get the values from the fields
  var textData = $('#text').val();
  $('#text').val('');

  var colorData = $('#color').val();
  $('#color').val('');

  return {
    text: textData,
    color: colorData,
  };
};


var renderNotes = function(postit_notes) {
  // Clear the unordered list
  $('#postits').empty();

  // Iterate through the list rendering each Task
  postitNotes.each(function(note) {
    render(note);
  });
};



$(document).ready(function() {



  var postItView = new PostItView({
          model: myPostit,
          template: _.template($('#postit-template').html())
        });

  $('#postits').append(postItView.render().$el);





  // postitData.forEach(function(rawPostit){
  //   var myPostit = new Postit(rawPostit);
  //   render(myPostit);
  // });


  postitNotes = new PostitNotes(postitData);

  // renderNotes(postitNotes);

  postitNotes.on("update", function() {
    renderNotes(postitNotes);
  });




  $('.success').click(function(event){
  var formData = newPostItForm();
  var postit = new Postit(formData);

  postitNotes.add(postit);
  });



});
