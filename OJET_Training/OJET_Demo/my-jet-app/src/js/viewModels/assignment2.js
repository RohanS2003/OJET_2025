define(['knockout'], function(ko) {
  function Assignment2ViewModel() {
    var self = this;
    self.message = ko.observable("Click the button to change this message!");
    self.changeMessage = function() {
      self.message("The message has been changed!");
    };
  }
  return new Assignment2ViewModel();
});