alert ("Hola");

 //Es un array de objetos que contiene la data de las obras de teatro
var dataObras = [
   obras = {
    'Obra' : 'Barataria: Estado De México'
    'Map': '' //Aquí van las coordenadas
    'Ranking' : //Aquí van las estrellas
    'Teatro': 'Foro Shakespeare'
    'Género': 'Comedia , Musical'
    'Horario' : 'Miércoles 20:30 hrs. (a partir del 28 de enero)'
    'Precio': '$259 - $370',
    'Reseñas' : ''
  },
  obras = {
    'Obra' : 'Solsticio de Invierno'
    'Map': '' //Aquí van las coordenadas
    'Ranking' : //Aquí van las estrellas
    'Teatro': 'Orientación'
    'Género': 'Drama'
    'Horario' : 'Lunes y Martes 20:00 hrs. (del 08 de enero al 13 de febrero)'
    'Precio': '$150'
    'Reseñas' : ''
  },
  obras = {
    'Obra' : 'Las Meninas'
    'Map': '' //Aquí van las coordenadas
    'Ranking' : //Aquí van las estrellas
    'Teatro': 'NH'
    'Género': 'Comedia'
    'Horario' : 'Jueves 17:30 hrs.; Domingos 20:30 hrs. (del 4 al 15 de febrero) '
    'Precio': '$250 - $350'
    'Reseñas' : ''
  },
  obras = {
    'Obra' : 'La Divina Ilusión'
    'Map': '' //Aquí van las coordenadas
    'Ranking' : //Aquí van las estrellas
    'Teatro': 'Helénico'
    'Género': 'Comedia'
    'Horario' : 'Lunes 20:00 hrs. (del 12 al 16 de abril)'
    'Precio': '$200 - $300'
    'Reseñas' : ''
  },
  obras = {
    'Obra' : 'Las Cartas de Frida'
    'Map': '' //Aquí van las coordenadas
    'Ranking' : //Aquí van las estrellas
    'Teatro': 'Hélenico'
    'Género': 'Contemporáneo'
    'Horario' : 'Martes y Miércoles 20:30 hrs. (del 6 de febrero al 14 de marzo)'
    'Precio': '$200 - $300'
    'Reseñas' : ''
  },
  obras = {
    'Obra' : 'EL juego que todos jugamos'
    'Map': '' //Aquí van las coordenadas
    'Ranking' : //Aquí van las estrellas
    'Teatro': 'Foro Lucerna'
    'Género': 'Comedia'
    'Horario' : 'Viernes 21;15 hrs.; Sábado 17:00 y 21:15 hrs.; Domingo 19:30 hrs.'
    'Precio': '$385 - $500'
    'Reseñas' : ''
  },
  obras = {
    'Obra' : 'Mujeres Poderosas. Ciclo de Monólogos'
    'Map': '' //Aquí van las coordenadas
    'Ranking' : //Aquí van las estrellas
    'Teatro': 'NH'
    'Género': 'Monólogo , Cabaret'
    'Horario' : 'Viernes 20:30 hrs. (del 12 de enero al 9 de marzo)'
    'Precio': '$350'
    'Reseñas' : ''
  },
  obras = {
    'Obra' : '50 sombras de Fer'
    'Map': '' //Aquí van las coordenadas
    'Ranking' : //Aquí van las estrellas
    'Teatro': 'Bar El Vicio'
    'Género': 'Cabaret'
    'Horario' : 'Viernes 23:55 hrs. (del 2 al 23 de febrero)'
    'Precio': '$250 (solo adultos)'
    'Reseñas' : ''
  },
  obras = {
    'Obra' : 'Don Quijote y el titiritero'
    'Map': '' //Aquí van las coordenadas
    'Ranking' : //Aquí van las estrellas
    'Teatro': 'Helénico'
    'Género': 'Infantil'
    'Horario' : 'Viernes y Sábado 20:30 hrs. (del 16 al 17 de febrero) '
    'Precio': 'Gratis'
    'Reseñas' : ''
  },
  obras = {
    'Obra' : 'Festival Internacional de Teatro Universitario (UNAM)'
    'Map': '' //Aquí van las coordenadas
    'Ranking' : //Aquí van las estrellas
    'Teatro': 'Centro Cultural Universitario'
    'Género': 'Diferentes'
    'Horario' : 'Lunes a Domingo 12:00 hrs. (del 12 al 18 de febrero)'
    'Precio': 'Gratis'
    'Reseñas' : ''
  },
  obras = {
    'Obra' : 'Rotterdam'
    'Map': '' //Aquí van las coordenadas
    'Ranking' : //Aquí van las estrellas
    'Teatro': 'Foro Shakespeare'
    'Género': 'LGBT'
    'Horario' : 'Viernes 20:30 hrs. (del 9 de febrero al 18 de mayo)'
    'Precio': '$350'
    'Reseñas' : ''
  },
  obras = {
    'Obra' : 'El Amor de las Luciernagas'
    'Map': '' //Aquí van las coordenadas
    'Ranking' : //Aquí van las estrellas
    'Teatro': 'Julio Prieto'
    'Género': 'Melodrama'
    'Horario' : 'Lunes 20:30 hrs. (del 12 de febrero al 23 de abril)'
    'Precio': '$250'
    'Reseñas' : ''
  },
  obras = {
    'Obra' : 'El Corazón de la Materia'
    'Map': '' //Aquí van las coordenadas
    'Ranking' : //Aquí van las estrellas
    'Teatro': 'Foro de las Artes'
    'Género': 'Contemporáneo'
    'Horario' : 'Jueves y Viernes 19:00 hrs. ; Sábados y Domingos 18:00 hrs.(del 1 de febrero al 4 de marzo)'
    'Precio': '$30 (solo los jueves) - $100'
    'Reseñas' : ''
  },
  obras = {
    'Obra' : 'La Desconfianza'
    'Map': '' //Aquí van las coordenadas
    'Ranking' : //Aquí van las estrellas
    'Teatro': 'Salvador Novo'
    'Género': 'Drama'
    'Horario' : 'Martes a Domingo 19:00 hrs. (todo el mes de febrero)'
    'Precio': 'Gratis'
    'Reseñas' : ''
  },
  obras = {
    'Obra' : 'El Automóvil Gris'
    'Map': '' //Aquí van las coordenadas
    'Ranking' : //Aquí van las estrellas
    'Teatro': 'Foro de las Artes'
    'Género': 'Drama'
    'Horario' : 'Jueves 20:00 hrs. y Sábados 19:00 hrs. (del 8 al 22 de febrero)'
    'Precio': '$30 (solo los jueves) - $100'
    'Reseñas' : ''
  },
  obras = {
    'Obra' : 'No soy un Fracaso'
    'Map': '' //Aquí van las coordenadas
    'Ranking' : //Aquí van las estrellas
    'Teatro': 'Foro de las Artes'
    'Género': 'Drama'
    'Horario' : 'Miércoles 20:00 hrs. (del 7 al 21 de febrero)'
    'Precio': '$30 (solo Miércoles 7) - $100'
    'Reseñas' : ''
  },
  obras = {
    'Obra' : 'Quijote, vencedor de sí mismo'
    'Map': '' //Aquí van las coordenadas
    'Ranking' : //Aquí van las estrellas
    'Teatro': 'Foro de las Artes'
    'Género': 'Comedia'
    'Horario' : 'Viernes 20:00 hrs. (del 9 al 23 de febrero)'
    'Precio': '$30 (solo Viernes 16) - $100'
    'Reseñas' : ''
  },
  obras = {
    'Obra' : 'Nada'
    'Map': '' //Aquí van las coordenadas
    'Ranking' : //Aquí van las estrellas
    'Teatro': 'Santa Catarina'
    'Género': 'Contemporáneo'
    'Horario' : 'Jueves y Viernes 20:00 hrs.; Sábados 19:00 hrs. y Domingos 18:00 hrs. (del 20 de enero al 18de febrero)'
    'Precio': '$30 (solo los jueves) - $150'
    'Reseñas' : ''
  },
  obras = {
    'Obra' : 'Los Empeños de una Casa'
    'Map': '' //Aquí van las coordenadas
    'Ranking' : //Aquí van las estrellas
    'Teatro': 'Fuente del CCU'
    'Género': 'Comedia'
    'Horario' : 'Domingos 11:00 hrs. (del 13 de enero al 18 de febrero)'
    'Precio': 'Gratis'
    'Reseñas' : ''
  },
  obras = {
    'Obra' : 'La Verdad Sospechosa'
    'Map': '' //Aquí van las coordenadas
    'Ranking' : //Aquí van las estrellas
    'Teatro': 'Fuente del CCU'
    'Género': 'Comedia'
    'Horario' : 'Sábados 11:00 hrs. (del 13 de enero al 18 de febrero)'
    'Precio': 'Gratis'
    'Reseñas' : ''
  }
];
