define(['../accUtils', 'knockout',
  'ojs/ojknockout',
  'ojs/ojinputtext',
  'ojs/ojlabel',
  'ojs/ojbutton'],
 function(accUtils, ko) {
    function LoginFormViewModel() {
      var self = this;
    // Observables
    self.userName = ko.observable('');
    self.userEmail = ko.observable('');
    self.userPassword = ko.observable('');
    // Submit handler
    self.submitLogin = function() {
      console.log("Name:", self.userName());
      console.log("Email:", self.userEmail());
      console.log("Password:", self.userPassword());
      alert("Login clicked!");
    };
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.
      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      this.connected = () => {
        accUtils.announce('Login page loaded.', 'assertive');
        document.title = "Login";
        // Implement further logic if needed
      };
      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      this.disconnected = () => {
        // Implement if needed
      };
      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      this.transitionCompleted = () => {
        // Implement if needed
      };
    }
    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return LoginFormViewModel;
  }
);