
$(function () { 
	$("input,textarea").not("[type=submit]").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // 
        },
		submitSuccess: function($form, event) {
            event.preventDefault(); // Prevent redirect page
            var name = $("input#name").val().trim();
            var email = $("input#email").val().trim();
            var message = $("textarea#message").val().trim();           
		
            $.ajax({
                url: "php/sendMail.php",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    message: message
                },                
                cache: false,
                success: function(){
                    // alert("Message sent!");
                    var form = '#form-alert-message';
                    var divOpenTag = "<div class='alert alert-success'>";
                    var divCloseTag = "</div>";
                    var button = "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>";
                    var message = "Message Sent! Thank You!"

                    $(form).html(divOpenTag + button + message + divCloseTag)
                    
                    // Clear all fields
                    $('#myForm').trigger("reset");                      
                },
                error: function(){
                    // alert("Error"); 
                    var form = '#form-alert-message';
                    var divOpenTag = "<div class='alert alert-danger'>";
                    var divCloseTag = "</div>";
                    var button = "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>";
                    var message = "It seems the server is not responding for the moment. Please try it again later. Sorry about the inconvenience."                  

                    $(form).html(divOpenTag + button + message + divCloseTag)
                }
            })      
        },                
		filter: function() {
            //
        }       
    });
});