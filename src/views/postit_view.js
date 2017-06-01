import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Postit from '../models/postit.js';


var PostItView = Backbone.View.extend({
  // defining properties of the el
  initialize: function(params) {
   this.template = params.template;
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  }
});

export default PostItView;
