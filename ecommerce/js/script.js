
$(function() {
  

    $(window).scroll(function() {
        if ( $(this).scrollTop() > 50 ) {
            $('.navbar').addClass('solid bg-dark');
        } else {
            $('.navbar').removeClass('solid bg-dark');
        }
    });


    $('.dropdown-item, .nav-item').on('click', function(e) {
        if ( this.hash !== "" ) {
            e.preventDefault();
            var anchor = this.hash;

            $('html, body').animate({
                scrollTop: $(anchor).offset().top
            }, 800, function() {
                window.location.hash = anchor;
            });
        }
    });
   
    });

    
    // Login form

    function toggleResetPswd(e){
        e.preventDefault();
        $('#logreg-forms .form-signin').toggle() // display:block or none
        $('#logreg-forms .form-reset').toggle() // display:block or none
    }
    
    function toggleSignUp(e){
        e.preventDefault();
        $('#logreg-forms .form-signin').toggle(); // display:block or none
        $('#logreg-forms .form-signup').toggle(); // display:block or none
    }
    
    $(()=>{
        // Login Register Form
        $('#logreg-forms #forgot_pswd').click(toggleResetPswd);
        $('#logreg-forms #cancel_reset').click(toggleResetPswd);
        $('#logreg-forms #btn-signup').click(toggleSignUp);
        $('#logreg-forms #cancel_signup').click(toggleSignUp);
    })


// login Validation


var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "jeevan" && password == "admin123"){
alert ("Login successfully");
window.location = "shop.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}