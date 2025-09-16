define([
  'knockout',
  'ojs/ojbootstrap',
  'ojs/ojknockout',
  'ojs/ojdrawerlayout',
  'ojs/ojbutton',
  'ojs/ojnavigationlist',
  '../accUtils'
], function(ko, ojbootstrap, ojknockout, ojdrawerlayout, ojbutton, ojnavigationlist, accUtils) {
  
  function DashboardViewModel() {
    // Drawer state
    this.startOpened = ko.observable(false);
    this.startToggle = () => {
      this.startOpened(!this.startOpened());
    };

    // Lifecycle hook: called when view is inserted into DOM
    this.connected = () => {
      accUtils.announce('Dashboard page loaded.', 'assertive');
      document.title = "Dashboard";

      // Apply Knockout bindings to the drawer layout container
      ojbootstrap.whenDocumentReady().then(() => {
        ko.applyBindings(this, document.getElementById('demo-container'));
      });
    };

    this.disconnected = () => {
      // Optional cleanup logic
    };

    this.transitionCompleted = () => {
      // Optional post-transition logic
    };
  }

  return DashboardViewModel;
});
