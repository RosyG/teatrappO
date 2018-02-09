  //Variable que maneja la base de datos de firebase.
  var db = firebase.database();
  //Guardando datos en Firebase cuando se da click en Guardar.
  $('#guardar').click(saveText);//Guarda en Firebase las nuevas actualizaciones.

  db.ref('publications').on('child_added', messageAutomatic); //Añadiendo mensaje de manera autómatica.


  //Función que añade las nuevas publicaciones de manera automatica.
  function messageAutomatic () {

    var message = $('#text-area').val();
    db.ref('myPublications').push ({
      message:message
      //Añadiendo el nombre message como key.
    })
    $('#my-publications').prepend('<p>' + message + '<p /><br>' );
  }


  //Función que guarda datos al hacer click en guardar.
  function saveText () {
    var textArea = $('#text-area').val();
    firebase.database().ref('publications')
      .push(textArea)//Añadiendo la publicación en la rama 'publications'.

  //  $('#notification').click(paintTextPublication (textArea));//Ejecutando la función que pintará las publicationes guardadas en Firebase.
    cleanText ();
  }

  //Función que limpia el campo del text área.
  function cleanText () {
    $('#text-area').val(' ');//limpiando el campo del text área.
  }


  ///----------publicación de las actividades del usuario.----------
function paintTextPublication () {
  
  //Función que publica en la zona de las publicaciones de los usuarios.
  var database1 = firebase.database().ref("publications").once("value").then(function(snapshot){
  var obj = snapshot.val()//Se obtiene el valor del objeto snapshot, el que contiene las keys con sus valores, los valores son las publicaciones que todos los usuarios han escrito, ie, las nuevas noticias.
  $('#publications').empty();//Borra las actualizaciones que ya fueron pintadas para que no se sobre escriba y existan repeticiones.

  for (var key in obj) {
      createElemen (obj[key]);//Mandando a pintar cada elemento que contiene la sección de las publicaciones.
      console.log(obj[key]);
    }
  });

}//Fin de paintTextPublication.

//Función que crea elementos por medio de DOM para poder llenarlos del contenido que se extraiga de Firebase.
function createElemen (texto) {
  var $containerText = $('<div />',
    {'class':'new-us-write'});
  var nameWrite = document.createElement('label');//Nombre del us que escribe.
  var textUs = document.createElement('label');

  textUs.innerHTML = texto;

  $containerText.append(textUs);

  $('#publications').prepend($containerText);
}