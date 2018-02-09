var obras = [
    {
        'obra': 'Barataria: Estado De México',
        'photo': 'http://lorempixel.com/350/200/food/',
        'map': '' , 
        'ranking': '' ,
        'teatro': 'Foro Shakespeare',
        'genero': 'Comedia , Musical',
        'horario': 'Miércoles 20:30 hrs. (a partir del 28 de enero)',
        'precio': '$259 - $370',
        'resenas': ''
    },
    {
        'obra' : 'Solsticio de Invierno',
        'photo': 'http://lorempixel.com/350/200/food/',
        'map': '',
        'ranking' : '',
        'teatro' : 'Orientación',
        'genero' : 'Drama',
        'horario' : 'Lunes y Martes 20:00 hrs. (del 08 de enero al 13 de febrero)',
        'precio': '$150',
        'resenas' : ''
    },
    {
        'obra' : 'Las Meninas',
        'photo': 'http://lorempixel.com/350/200/food/',
        'map': '', //Aquí van las coordenadas
        'ranking' : '', //Aquí van las estrellas
        'teatro': 'NH',
        'género': 'Comedia',
        'horario' : 'Jueves 17:30 hrs.; Domingos 20:30 hrs. (del 4 al 15 de febrero) ',
        'precio': '$250 - $350',
        'resenas' : '',
    },
    {
        'obra' : 'La Divina Ilusión',
        'photo': 'http://lorempixel.com/350/200/food/',
        'map': '' ,
        'ranking' : '' ,
        'teatro': 'Helénico',
        'genero': 'Comedia',
        'horario' : 'Lunes 20:00 hrs. (del 12 al 16 de abril)',
        'precio': '$200 - $300',
        'resenas' : ''
    },
    {
        'Obra' : 'Las Cartas de Frida',
        'photo': 'http://lorempixel.com/350/200/food/',
        'Map': '' ,//Aquí van las coordenadas
        'Ranking' : '',//Aquí van las estrellas
        'Teatro': 'Hélenico',
        'Género': 'Contemporáneo',
        'Horario' : 'Martes y Miércoles 20:30 hrs. (del 6 de febrero al 14 de marzo)',
        'Precio': '$200 - $300',
        'Reseñas' : ''
    },
    {
        'Obra' : 'EL juego que todos jugamos',
        'photo': 'http://lorempixel.com/350/200/food/',
        'Map': '' ,//Aquí van las coordenadas
        'Ranking' : '',//Aquí van las estrellas
        'Teatro': 'Foro Lucerna',
        'Género': 'Comedia',
        'Horario' : 'Viernes 21;15 hrs.; Sábado 17:00 y 21:15 hrs.; Domingo 19:30 hrs.',
        'Precio': '$385 - $500',
        'Reseñas' : '',
    },
    {
        'Obra' : 'Mujeres Poderosas. Ciclo de Monólogos',
        'photo': 'http://lorempixel.com/350/200/food/',
        'Map': '' ,//Aquí van las coordenadas
        'Ranking' : '',//Aquí van las estrellas
        'Teatro': 'NH',
        'Género': 'Monólogo , Cabaret',
        'Horario' : 'Viernes 20:30 hrs. (del 12 de enero al 9 de marzo)',
        'Precio': '$350',
        'Reseñas' : '',
    },
    {
        'Obra' : '50 sombras de Fer',
        'photo': 'http://lorempixel.com/350/200/food/',
        'Map': '' , //Aquí van las coordenadas
        'Ranking' : '',  //Aquí van las estrellas
        'Teatro': 'Bar El Vicio',
        'Género': 'Cabaret',
        'Horario' : 'Viernes 23:55 hrs. (del 2 al 23 de febrero)',
        'Precio': '$250 (solo adultos)',
        'Reseñas' : '',
    },
    {
        'Obra' : 'Festival Internacional de Teatro Universitario (UNAM)',
        'photo': 'http://lorempixel.com/350/200/food/',
        'Map': '' , //Aquí van las coordenadas
        'Ranking' : '', //Aquí van las estrellas
        'Teatro': 'Centro Cultural Universitario',
        'Género': 'Diferentes',
        'Horario' : 'Lunes a Domingo 12:00 hrs. (del 12 al 18 de febrero)',
        'Precio': 'Gratis',
        'Reseñas' : ''
        
    },
    {
        'Obra' : 'Rotterdam',
        'photo': 'http://lorempixel.com/350/200/food/',
        'Map': '' ,//Aquí van las coordenadas
        'Ranking' : '',//Aquí van las estrellas
        'Teatro': 'Foro Shakespeare',
        'Género': 'LGBT',
        'Horario' : 'Viernes 20:30 hrs. (del 9 de febrero al 18 de mayo)',
        'Precio': '$350',
        'Reseñas' : ''
    },
    {
        'Obra' : 'El Corazón de la Materia',
        'photo': 'http://lorempixel.com/350/200/food/',
        'Map': '', //Aquí van las coordenadas
        'Ranking' : '', //Aquí van las estrellas
        'Teatro': 'Foro de las Artes',
        'Género': 'Contemporáneo',
        'Horario' : 'Jueves y Viernes 19:00 hrs. ; Sábados y Domingos 18:00 hrs.(del 1 de febrero al 4 de marzo)',
        'Precio': '$30 (solo los jueves) - $100',
        'Reseñas' : ''
    },
    {
        'Obra' : 'La Desconfianza',
        'photo': 'http://lorempixel.com/350/200/food/',
        'Map': '', //Aquí van las coordenadas
        'Ranking' : '', //Aquí van las estrellas
        'Teatro': 'Salvador Novo',
        'Género': 'Drama',
        'Horario' : 'Martes a Domingo 19:00 hrs. (todo el mes de febrero)',
        'Precio': 'Gratis',
        'Reseñas' : ''
    },
    {
        'Obra' : 'El Automóvil Gris',
        'photo': 'http://lorempixel.com/350/200/food/',
        'Map': '', //Aquí van las coordenadas,
        'Ranking' : '', //Aquí van las estrellas
        'Teatro': 'Foro de las Artes',
        'Género': 'Drama',
        'Horario' : 'Jueves 20:00 hrs. y Sábados 19:00 hrs. (del 8 al 22 de febrero)',
        'Precio': '$30 (solo los jueves) - $100',
        'Reseñas' : ''
    },
    {
        'Obra' : 'No soy un Fracaso',
        'photo': 'http://lorempixel.com/350/200/food/',
        'Map': '', //Aquí van las coordenadas
        'Ranking' : '', //Aquí van las estrellas
        'Teatro': 'Foro de las Artes',
        'Género': 'Drama',
        'Horario' : 'Miércoles 20:00 hrs. (del 7 al 21 de febrero)',
        'Precio': '$30 (solo Miércoles 7) - $100',
        'Reseñas' : ''
    },
    {
        'Obra' : 'Quijote, vencedor de sí mismo',
        'photo': 'http://lorempixel.com/350/200/food/',
        'Map': '', //Aquí van las coordenadas
        'Ranking' : '',//Aquí van las estrellas
        'Teatro': 'Foro de las Artes',
        'Género': 'Comedia',
        'Horario' : 'Viernes 20:00 hrs. (del 9 al 23 de febrero)',
        'Precio': '$30 (solo Viernes 16) - $100',
        'Reseñas' : ''
    },
    {
        'Obra' : 'Nada',
        'photo': 'http://lorempixel.com/350/200/food/',
        'Map': '', //Aquí van las coordenadas
        'Ranking' : '',//Aquí van las estrellas
        'Teatro': 'Santa Catarina',
        'Género': 'Contemporáneo',
        'Horario' : 'Jueves y Viernes 20:00 hrs.; Sábados 19:00 hrs. y Domingos 18:00 hrs. (del 20 de enero al 18de febrero)',
        'Precio': '$30 (solo los jueves) - $150',
        'Reseñas' : ''
    },
    {
        'Obra' : 'Los Empeños de una Casa',
        'photo': 'http://lorempixel.com/350/200/food/',
        'Map': '' ,//Aquí van las coordenadas
        'Ranking' : '',//Aquí van las estrellas
        'Teatro': 'Fuente del CCU',
        'Género': 'Comedia',
        'Horario' : 'Domingos 11:00 hrs. (del 13 de enero al 18 de febrero)',
        'Precio': 'Gratis',
        'Reseñas' : ''
    },
    {
        'Obra': 'La Verdad Sospechosa',
        'photo': 'http://lorempixel.com/350/200/food/',
        'Map': '', //Aquí van las coordenadas
        'Ranking' : '',//Aquí van las estrellas
        'Teatro': 'Fuente del CCU',
        'Género': 'Comedia',
        'Horario' : 'Sábados 11:00 hrs. (del 13 de enero al 18 de febrero)',
        'Precio': 'Gratis',
        'Reseñas' : ''
    },
    {
        'Obra' : 'El Amor de las Luciernagas',
        'photo': 'http://lorempixel.com/350/200/food/',
        'Map': '' ,//Aquí van las coordenadas
        'Ranking' : '',//Aquí van las estrellas
        'Teatro': 'Julio Prieto',
        'Género': 'Melodrama',
        'Horario' : 'Lunes 20:30 hrs. (del 12 de febrero al 23 de abril)',
        'Precio': '$250',
        'Reseñas' : ''
    }
]
