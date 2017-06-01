import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import PostItView from './postit_view';

var PostItListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.mytemplate;

    this.listenTo(this.model, "update", this.render);
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
  },
  events: {
    'click button.success': "addPostit",
  },
  getFormFields: function(){
    var textData = this.$('#text').val();
    this.$('#text').val('');

    var colorData = this.$('#color').val();
    this.$('#color').val('');

    return {
      text: textData,
      color: colorData,
    };
  },
  addPostit: function() {
    var formValues = this.getFormFields();
    this.model.add(formValues);
  }

});


export default PostItListView;
