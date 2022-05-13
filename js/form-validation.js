jQuery(document).ready(function($){

	// hide messages 
	$("#error").hide();
	$("#sent-form-msg").hide();
	
	// on submit...
	$("#submit").click(function(event) {
		event.preventDefault();
		$("#error").hide();
		
		//required:
		//name
		var nombre = $("input[name=nombre]").val();
		var er_nombre = /^([a-zA-Z´`áéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙñÑ\s]{2,40})+$/; 
		if(!er_nombre.test(nombre)) {   
				$("#error").fadeIn().text("Error en el nombre");
				$("input#nombre").focus();
				return false; 
			}
			
		//email
		var email = $("input[name=email]").val();
		var er_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/; 
		if(!er_email.test(email)) {   
				$("#error").fadeIn().text("Error en el email");
				$("input#email").focus();
				return false; 
			}
		
		//telefono
		var telefono = $("input[name=telefono]").val();
		//empresa
		var empresa = $("input[name=empresa]").val();
			
		//comments
		var comments = $("textarea[name=mensaje]").val();
		var er_comments = /^([a-zA-Z0-9´`áéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙñÑ\s]{2,60})+$/; 
		if(!er_comments.test(comments)) {   
				$("#error").fadeIn().text("Error en el texto");
				$("textarea#mensaje").focus();
				return false; 
			}
		
		// data string
		var dataString = 'nombre='+ nombre
						+ '&email=' + email
						+ '&telefono=' + telefono 
						+ '&empresa=' + empresa     
						+ '&comments=' + comments;	
						
	    
		// ajax
		$.ajax({
			type:"POST",
			url: "libreria/send-mail.php",
			data: dataString,
			success: success()
		});
	});  
		
		
	// on success...
	 function success(){
	 	$("#sent-form-msg").fadeIn();
	 	$("#contactForm").fadeOut();
	 }
	
    return false;
});

