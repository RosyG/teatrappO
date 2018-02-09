	//login, la var provider provera el servicio para logear.
	var provider = new firebase.auth.GoogleAuthProvider();
	//Variable que maneja la base de datos de firebase.
	var db = firebase.database();

	$(document).ready(function(){
		$('.carousel').carousel({
			dist:0,
			shift:0,
			padding:20,

		});

		/* Función Splash */

		 /*setTimeout(function() {
	    $('#splash').fadeOut(500);
	    $('#mainview').show();
	    }, 1000);*/

		$('.slider').slider();
		$(".button-collapse").sideNav();
		$(".dropdown-button").dropdown();
		$('.modal').modal();

		//$('.btn-login').click(showHome,serviceGoogle,peticion); //Logea los datos que introduzca el usuario.
		//$('.btn-login').click(peticion);
		$('.btn-login').click(showHome,serviceGoogle);
		//$('.btn-login').click(peticion);
		paintTextPublication (); //Ejecutando función que pinta cada comentario hecho por los usuarios en el modal.

/*
		//mandando a llamar a la API con su url
		var radius = 500;
	    $ajax('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=19.4205122,-99.165445&radius='+radius+'&type=theatres&key=AIzaSyAXmrdzIGK4VsJte56Zd9lX6Eawye9mnWQ', function(result) {
	        console.log(result);
				});
				//				https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=19.4205122,-99.165445&radius=500&type=theater&key=AIzaSyAXmrdzIGK4VsJte56Zd9lX6Eawye9mnWQ
*/

	});


function peticion () {
	var url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=19.4205122,-99.165445&radius=500&type=theater&key=AIzaSyAXmrdzIGK4VsJte56Zd9lX6Eawye9mnWQ';
	var html = new XMLHttpRequest();

	html.open('GET', url);
	html.send();

	html.onreadystatechange = function (e){
		console.log('hora');
		if (html.readyState == 4 && html.status == 200) {
			console.log(html.response);
			console.log('fd');
		}
	}
}


/*
		$('#img-obra').click(getData);
	});


/* Function para añadir datos a modales underconstruction */
/*
	  function getData (event){

		var target = $(event.target);//Elemento
		console.log(target.dataset);

       var obras = obras[0]["obra"];
       console.log(obras);

    for ( var i = 0; i < obras.length; i++){
      var obraName = obras[i].obra;
      console.log(obraName);
  }
}

   getData(); // Doesn't Work
*/


/* Funciones Firebase / API */

function showHome () {
	$('.d-n').show('slow'); //Muestra el menú
	$('.btn-login').hide(); //Oculta botón porque el us ya ingreso.

}

function serviceGoogle () {
  firebase.auth()//Mandando a llamar a Firebase.
  .signInWithPopup(provider)//Ventana popup para logearse con la var provider (con google).
  .then(function(result) {
  //En este momento el us ya accedio.
  showHome (); //Se muestra la vista para usuarios logueados.
	console.log('hola');
  saveUs (result.user);//Guada la información del usuario de manera automatica.
  paintProfile (result.user);//Pinta los datos del usuario en su perfil.
  });
};

//Función que guarda automaticamente.
function saveUs(user) {
  var InfUser = {
    uid:user.uid,
    name:user.displayName,
    email:user.email,
    photo:user.photoURL,
  }
  console.log(InfUser);
  firebase.database().ref('usLogged/' + user.uid)//Se guarda en la rama que tiene una key igual al identificador unico UID del usuario.
    .set(InfUser);//set modifica a la llave especificada por el uid, push() solo agrega de nuevo.
}

//Función que pinya la información del usuario.
function paintProfile (user) {
  $('.bg-perfil').empty();//Borra los hijos en el div bg-perfil que ya fueron pintadaos para que no se sobre escriba y existan repeticiones.
  var imgUser = user.photoURL;//Variable que contine toda la inf del usuario.
  var nameUser = user.displayName;
  var email = user.email;
  var uid= user.uid;
  /*$('.bg-perfil').append("<img id='img-perfil'  class = 'img-us' src = '"+imgUser+"' />");
  $('#name').text(nameUser);
  $('#email').text(email);*/
}
