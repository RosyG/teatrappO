  //Variable que maneja la base de datos de firebase.
  var db = firebase.database();

  //Muestra llas reseñas en el modal que le corresponde, según la obra que se va a consultar.
   //$('.notification').click(paintTextPublication);//Muestra las notificaciones recientes

  //db.ref('review-posts').on('child_added', messageAutomatic); //Añadiendo mensaje de manera autómatica.


  //Función que añade las nuevas publicaciones de manera automatica.
  function messageAutomatic () {

    var message = $('#textAreaReseña').val();
    db.ref('my-post').push ({
      message:message
      //Añadiendo el nombre message como key.
    })
    $('#my-post').prepend('<p>' + message + '<p /><br>' );//Añadiendo alcontenedor que tienes las reseñas que se escriben en el momento.
  }


  //Función que guarda datos al hacer click en send.
  function saveText () {
    messageAutomatic();//Función que pinta las reseñas que se escriben en el momento, se muestran en el modal.
    var textArea = $('#textAreaReseña').val();
    firebase.database().ref('review-posts')
      .push(textArea);//Añadiendo la publicación en la rama 'publications-Reseña'.

  //  $('#notification').click(paintTextPublication (textArea));//Ejecutando la función que pintará las publicationes guardadas en Firebase.
    cleanText ();
  }

  //Función que limpia el campo del textAreaReseña.
  function cleanText () {
    $('#textAreaReseña').val(' ');//limpiando el campo del textAreaReseña.
  }


  ///----------publicación de las actividades del usuario.----------
function paintTextPublication () {

  //Función que publica en la zona de las publicaciones de los usuarios.
  var database1 = firebase.database().ref("review-posts").once("value").then(function(snapshot){
  var obj = snapshot.val()//Se obtiene el valor del objeto snapshot, el que contiene las keys con sus valores, los valores son las publicaciones que todos los usuarios han escrito, ie, las nuevas noticias.
  //$('#publicationsReseña') es el contenedo de las reseñas de acuerdo a la obra que se está consultando.
  $('#all-post').empty();//Borra las actualizaciones que ya fueron pintadas para que no se sobre escriba y existan repeticiones.

  for (var key in obj) {
      createElemen (obj[key]);//Mandando a pintar cada elemento que contiene la sección de las publicaciones.
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

  $('#all-post').prepend($containerText);

}

function disabledSend () {
  var textArea = $('#textAreaReseña').val();
  var bottomSend = $('#send');//Lamando al botón que guarda los post y los publica.
  if (textArea == '') {
    bottomSend.attr("disabled", true);/*Botón deshabilitado*/
    } else {
      bottomSend.attr("disabled", false);/*Botón habilitado*/
  }
}
