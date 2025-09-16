define(['ojs/ojcore', 'knockout'], function(oj, ko) {
  function Assignment1ViewModel() {
    var self = this;
    self.message = ko.observable("Hello, welcome to Oracle JET!");
  }
  return new Assignment1ViewModel();
});