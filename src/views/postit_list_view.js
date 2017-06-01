import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import PostItView from './postit_view';

var PostItListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.mytemplate;

    // this.listenTo(this.model, "change", this.render);
  },
  render: function(){
    var self = this;
    self.$('#postits').empty();
    self.model.each(function(postit) {

      var postItView = new PostItView({
        model: postit,
        template: self.template
      });

      self.$('#postits').append(postItView.render().$el);
    });
    return this;
  }
  // events: {
  //   'click button.success': "addPostit",
  // }
  // addPostit: function(e) {
  //
  //   var textData = self.$('#text').val();
  //   self.$('#text').val('');
  //
  //   var colorData = self.$('#color').val();
  //   self.$('#color').val('');
  //
  //   var postitData = {
  //     text: textData,
  //     color: colorData,
  //   };
  //     console.log(postitData);
    // var postit = new Postit(postitData);
    //   self.model.add(postit);
  // }
});




export default PostItListView;
