import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Postit from '../models/postit.js';


var PostItView = Backbone.View.extend({
  // defining properties of the el
  tagName: 'li',
  className: "task-item column column-block",
  initialize: function(params) {
   this.template = params.template;
    // Listen to changes in the model and call render when they occur.
  //  this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  }
  // events: {
  //   'click button.alert': "deleteTask",
  //   'click button.success': "toggleTask"
  // },
  // deleteTask: function(e) {
  //   this.model.destroy();
  // }

});

export default PostItView;
