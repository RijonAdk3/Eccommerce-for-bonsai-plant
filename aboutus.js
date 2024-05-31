document.querySelector("#submit").addEventListener("click", function(event) {
    event.preventDefault();

    var name = document.querySelector("#name").value;
    var address = document.querySelector("#address").value;
    var phone = document.querySelector("#phone").value;
    var feedback = document.querySelector("#msg").value;

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    if (address === "") {
        alert("Please enter your address.");
        return;
    }

    if (phone === "") {
        alert("Please enter your phone number.");
        return;
    }

    if (feedback === "") {
        alert("Please enter your feedback.");
        return;
    }

    alert("Thank you for your feedback!");
});
