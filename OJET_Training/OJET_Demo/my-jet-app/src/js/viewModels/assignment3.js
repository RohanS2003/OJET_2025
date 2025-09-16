define([
    'knockout',
    'ojs/ojformlayout',
    'ojs/ojinputtext',
    'ojs/ojbutton'
], function(ko) {
    function Assignment3ViewModel() {
        var self = this;
        self.inputValue = ko.observable('');
        self.isInputValid = ko.computed(function() {
            return !!self.inputValue() && self.inputValue().trim().length > 0;
            });
        self.submitForm = function() {
            alert("Form submitted with: " + self.inputValue());
        };
    }
    return Assignment3ViewModel;
});