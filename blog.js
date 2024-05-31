function validateForm() {
    //Select thearea element using its name attribute
    var textarea = document.querySelector('textarea[name="Was the Blog helpful and informative?"]');
    
      //Check whether the value is empty or not
    if (!textarea.value) {
      // If it's empty, display an error message
      alert("Please give your feedback.");
    }else{
      //If it's not empty, display a success message and clear the value of text area
    alert("Thank you for giving us your feedback!");
    textarea.value="";
    }

    //return false to prevent submitting of form
    return false;
  }