  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDvVlOk19O1RVbXzoDKPLM31TuQc3L9LZM",
    authDomain: "teatrappo.firebaseapp.com",
    databaseURL: "https://teatrappo.firebaseio.com",
    projectId: "teatrappo",
    storageBucket: "",
    messagingSenderId: "432411697892"
  };

  firebase.initializeApp(config);

//Función que cierra sesión y direcciona a la página principal.
$('.out-session').click(function(e) {
    e.preventDefault();

    firebase
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.
        window.location.href = '../index.html';//Direccionando al us a la página principal.
        console.log('salir');
      })
      .catch(function(error) {
        // An error happened.
      });
  });
