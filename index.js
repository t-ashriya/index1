// WEB222 – Final Assessment
//
// I declare that this assignment is my own work in accordance with
// Seneca Academic Policy. No part of this assignment has been
// copied manually or electronically from any other source
// (including web sites) or distributed to other students.
//
// Name:       ASHRIYA TULADHAR
// Student ID: 168*****
// Date:       2022/12/07

var err = "";

function FormCheck() {
    err = "";
    var ret = false;
    
    PostalCheck();
    
    // Check if "Other" is selected and has content
    var otherRadio = document.getElementById("other");
    var otherTextarea = document.getElementById("otherReason");
    if (otherRadio.checked && otherTextarea.value.trim() === "") {
        err += "Please specify your reason for contacting.<br>";
    }

    document.getElementById("errors").innerHTML = err;
    console.log(err);

    if (err == "") {
        ret = true;
    }
    return ret;
}

function PostalCheck() {
    var correct_pattern1 = /^[A-Z][0-9][A-Z][0-9][A-Z][0-9]$/;
    var correct_pattern2 = /^[A-Z][0-9][A-Z]\s[0-9][A-Z][0-9]$/;

    var user_postal = document.getElementById("postal").value;
    console.log(user_postal);

    if (correct_pattern1.test(user_postal) == false && correct_pattern2.test(user_postal) == false) {
        err += "Wrong format, Correct Format should be M1M 1M1<br>";
    }
}

function toggleOtherTextarea() {
    var otherRadio = document.getElementById("other");
    var textareaContainer = document.getElementById("otherTextareaContainer");
    
    if (otherRadio.checked) {
        textareaContainer.style.display = "block";
        document.getElementById("otherReason").required = true;
    } else {
        textareaContainer.style.display = "none";
        document.getElementById("otherReason").required = false;
    }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function() {
    toggleOtherTextarea(); // Set initial state
});
