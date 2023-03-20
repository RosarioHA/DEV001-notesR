# Notes

## Introduction
Para este proyecto el desafio fue construir una aplicacion web para tomar notas, que nos permita crear, editar, eliminar y consultarlas en cualquier momento. Para esto utilice HTML, CSS, Javascript y React, creando una Single Page App que a su vez tambien es responsiva, utilizando el enfoque de Mobile First

## users
Los usuarios para nuestra aplicacion buscan una interfaz sencilla y user friendly para poder almacenar y administrar sus notas diarias. Para esto se escogio una paleta de colores principalmente pastel, contrastada con un color oscuro para aportar contraste y visibilidad a detalles clave. Se priorizo ademas una vista limpia y una disposicion intuitiva que facilite su uso a la mayor cantidad de usuarios posibles.

![Captura de pantalla 2023-03-20 a la(s) 4 22 39 p  m](https://user-images.githubusercontent.com/114428069/226444609-70bb6fa3-3943-4db1-b6ad-48ebaaf2395a.png)

## Maqueta

![Captura de pantalla 2023-03-20 a la(s) 4 30 08 p  m](https://user-images.githubusercontent.com/114428069/226446114-371dea58-34fe-45d6-8be9-8fb924c02ed9.png)


## UH1
Pra la primera historia de usuario, estos necesitan ingresar a la seccion de Notas autentificando su usuario. En esta primera version del proyecto, facilite la opcion de autentificacion cun cuenta de google, esperando ampliar a mas opciones en el futuro.

### Captura de pantalla de la pagina visualizada en local host, vista responsiva de tableta y telefono mobil.
![Captura de pantalla 2023-03-20 a la(s) 4 37 06 p  m](https://user-images.githubusercontent.com/114428069/226447728-81323e33-da9c-4144-bd4f-7d9efed096f8.png)

## UH2
Ya en esta segunda historia de usuario, necesitamos poder crear notas, guardarlas y visibilizarlas en la intefaz. Utilice la base de datos de Firestore, la cual recibe tanto los datos del formulario para crear notas, como la hora, fecha y ID de usuario. Las notas asociadas al usuario ingresado se renderizaran en la interfaz, existiendo una sincronizacion entre interfaz y estado.

### Captura de pantalla de la pagina visualizada en local host, vista responsiva de tableta y telefono mobil.
![Captura de pantalla 2023-03-20 a la(s) 4 37 35 p  m](https://user-images.githubusercontent.com/114428069/226453900-4f4b2f19-a8ca-4f77-8c8b-ae31b6da218a.png)


## UH3
Para la historia de usuario numero tres, busque permitir tambien editar o borrar las notas creadas (y asi completar las operaciones CRUD). Para esto se crearon botones de editar y eliminar que se mostraran solo al hacer click sobre cada nota, manteniendo un estilo visual mas depurado.
Actualmente ambas funciones se hacen mediante un alert de confirmacion y prompts respectivamente; en el futuro me gustaria implementar un modal mas acorde a la estetica general del proyecto.

### Captura de pantalla de la pagina visualizada en local host, vista responsiva de tableta mostrando los botones, con el promot para editar y con la alerta para eliminar comentarios.
![Captura de pantalla 2023-03-20 a la(s) 5 28 09 p  m](https://user-images.githubusercontent.com/114428069/226458408-fc9be935-cdec-4c55-b641-ce24e8750a51.png)



