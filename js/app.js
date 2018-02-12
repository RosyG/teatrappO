$(document).ready(cargarPagina);

function cargarPagina(){
    obtenerUbicacion();
    $(".carousel-item").click(cambiarUbicacion);
}

var obtenerUbicacion = function(e){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(mostrarUbicacion);
    } else {
        alert("Actualiza tu navegador");
    }
};

var mostrarUbicacion = function(posicion){
    var coordinates = {
        lat: posicion.coords.latitude,
        lng: posicion.coords.longitude
    };
    mostrarMapa(coordinates);
};

function mostrarMapa(coordinates) {
    var map = new google.maps.Map($("#map")[0],{
        zoom: 18,
        center: coordinates
    });
    var marker = new google.maps.Marker({
      position: coordinates,
      map: map
    });
}

function cambiarUbicacion(){
    var lat = $(this).data("lat");
    var lng = $(this).data("lng");

    var coordinates = {
        lat: lat,
        lng: lng
    };

    mostrarMapa(coordinates);
}
//Termina API GOOGLE



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
		$('#info-obras').click(paintModal)

		//$('.btn-login').click(showHome,serviceGoogle,peticion); //Logea los datos que introduzca el usuario.
		//$('.btn-login').click(peticion);
		$('#btn-login').click(serviceGoogle);
		//$('.btn-login').click(peticion);
		paintTextPublication (); //Ejecutando función que pinta cada comentario hecho por los usuarios en el modal.

		//Guardando datos en Firebase cuando se da click en Guardar.
	  $('#send').click(saveText);//Guarda en Firebase las nuevas actualizaciones.
	  $('#text-review').keyup(disabledSend);//Función que verifica que no se guarden o envien campos vacios.
		//db.ref('review-posts').on('child_added', messageAutomatic); //Añadiendo mensaje de manera autómatica.

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
	//	console.log('hora');
		if (html.readyState == 4 && html.status == 200) {
			console.log(html.response);
	//		console.log('fd');
		}
	}
}


// Función para extraer data para imagenes carousel

function getData(numObra){
    var dataObra = obras[numObra];
    console.log(dataObra);
    var nombreObra = dataObra.Obra;

    }

    function paintModal() {
        var obra = $(this).obra('obra');
        var photo = $(this).obra('photo');
        var teatro = $(this).obra('teatro');
        var genero = $(this).obra('genero');
        $('#obra').text(obra);
        $('#teatro').text(teatro);
        $('#genero').text(genero);
        $('#horario').text(horario);
}



/* Funciones Firebase / API */

function serviceGoogle () {
	console.log('app.js');
  firebase.auth()//Mandando a llamar a Firebase.
  .signInWithPopup(provider)//Ventana popup para logearse con la var provider (con google).
  .then(function(result) {
  //En este momento el us ya accedio.
  saveUs (result.user);//Guada la información del usuario de manera automatica.
	console.log('paso por aqui');
  paintProfile (result.user);//Pinta los datos del usuario en su perfil.

	//$('#name-user').text(result.user.displayName);//Añadiendo nombre de usuario para concatenar.
	var nameUs = $('#name-user').text('YO');
	console.log(nameUs);


  });
};

//Función que guarda los datos del us automaticamente.
function saveUs(user) {
  var infUser = {
    uid:user.uid,
    name:user.displayName,
    email:user.email,
    photo:user.photoURL,
  }
  firebase.database().ref('usLogged/' + user.uid)//Se guarda en la rama que tiene una key igual al identificador unico UID del usuario.
    .set(infUser);//set modifica a la llave especificada por el uid, push() solo agrega de nuevo.
	//Guardando los datos en localStorage
  localStorage.setItem('name',infUser.name);
  localStorage.setItem('imgUs',infUser.photo);

  //var objUser = localStorage.getItem('infUser');//Guardadndo la inf del us en la varible.
  window.location.href ='views/login.html';
}

//Función que pinya la información del usuario.
function paintProfile (user) {
  $('.bg-perfil').empty();//Borra los hijos en el div bg-perfil que ya fueron pintadaos para que no se sobre escriba y existan repeticiones.
  var imgUser = user.photoURL;//Variable que contine toda la inf del usuario.
  var nameUser = user.displayName;
  var email = user.email;
  var uid= user.uid;
  /*$('.bg-perfil').append("<img id='img-perfil'  class = 'img-us' src = '"+imgUser+"' />");
	$('#name-user').text(nameUser);
  $('#email').text(email);*/
}
