Anteproyecto: Gym-Admin.



Módulo: Proyecto Intermodular (0379 · PIDW2) — 2º DAW Virtual.



Centro: CIFP Avilés (Curso 2026/2027).



Autor/a: Juan Fernández Ordiales.



Repositorio GitHub: https://github.com/juanfo21/daw-proyecto-gym\_admin.



Tablero GitHub Projects: https://github.com/users/juanfo21/projects/2.



\---



\## 1. Justificación y dominio funcional



\### 1.1. Elevator pitch



Este proyecto consiste en un programa para gimnasios centrado en la gestión y reserva de turnos en máquinas y equipamiento. Mediante el sistema de usuarios registrados, los socios podrán consultar la disponibilidad en tiempo real y reservar el equipo que necesiten para una franja horaria concreta. Facilitando la rotación entre usuarios, impidiendo reservas duplicadas y permitiendo reservas una hora después de la hora actual. Los turnos otorgan prioridad en el uso del equipamiento y pueden ser eliminados en cualquier momento por el usuario. De este modo, se reducirán las esperas, se organizará mejor el uso del gimnasio en las horas punta y se mejorará la experiencia de los socios, permitiéndoles planificar su entrenamiento con antelación y acceder al equipamiento de forma más ordenada y equitativa.



\### 1.2. Público objetivo y contexto de uso



El publico objetivo son los gestores del gimnasio, los entrenadores privados, los socios del gimnasio y los clubes deportivos.



Posibles usos son:



* Gestionar los dispositivos del gimnasio en hora punta.
* Centralizar la gestión de los diferentes clubes en un solo lugar.
* Planificar los entrenamientos con entrenadores personales.
* Manejar el pago y renovación de membresía online para eliminar la necesidad de pasar por recepción.





\## 2. Roles del sistema y casos de uso



\### 2.1. Matriz de roles



Administrador:

&#x09;Crear, editar, desactivar o eliminar cuentas de usuarios.

&#x09;Asignar o revocar permisos y administrar los roles del sistema.

&#x09;Crear, editar, habilitar, deshabilitar y eliminar máquinas, puestos, equipamiento y sus franjas de disponibilidad.

&#x09;Consultar, modificar o cancelar cualquier reserva realizada por los usuarios.

&#x09;Gestionar los pagos, consultar el historial de transacciones y resolver incidencias de cobro.

&#x09;Crear y administrar sesiones con entrenadores.

&#x09;Crear, editar y eliminar clubes deportivos, así como gestionar las inscripciones y los registros de sus miembros.

&#x09;Configurar parámetros generales del sistema, como límites de reserva, horarios de apertura y mensajes públicos.



Usuario registrado:

&#x09;Consultar la disponibilidad y registrar turno en el equipamiento.

&#x09;Cancelar únicamente sus propias reservas.

&#x09;Realizar pagos.

&#x09;Registrarse y darse de baja en clubes.

&#x09;Reservar o cancelar sesiones con entrenadores.

&#x09;Gestionar su propio perfil.



Público / invitado:

&#x09;Puede consultar información pública del gimnasio.

&#x09;Registrarse en la página.

&#x20;

\### 2.2. Casos de uso principales



1\. CU-01: Registro e inicio de sesión seguro con tokens JWT.



&#x09;Actor: Usuario/Público.

&#x09;

&#x09;Precondición: En caso de inicio de sesión: tener cuenta ya creada, en caso de registro: nada.



&#x09;Pasos:

&#x09;

&#x09;-El Usuario/Público rellena el formulario.	

&#x09;-El sistema valida los datos comprobando que sean correctos / válidos.

&#x09;-El sistema crea la cuenta / iniciar sesión.





2\. CU-02: Gestionar equipos y franjas disponibles.



&#x09;Actor: Administrador.

&#x09;

&#x09;Precondición: Existe equipamiento.

&#x09;

&#x09;Pasos:

&#x09;

&#x09;-El administrador accede a la gestión de equipamiento.

&#x09;-El administrador crea, edita, habilita, deshabilita o elimina un equipo.

&#x09;-El administrador define o modifica las franjas de disponibilidad.

&#x09;-El sistema guarda los cambios y actualiza el calendario de disponibilidad.



3\. CU-03: Gestionar la oferta de sesiones con entrenadores.



&#x09;Actor: Administrador.

&#x09;

&#x09;Precondición: Existen entrenadores.



&#x09;Pasos:

&#x09;

&#x09;-El administrador accede a la gestión de sesiones con entrenadores.

&#x09;-El administrador selecciona crear, editar, publicar, cancelar o eliminar una sesión.

&#x09;-El sistema publica la sesión y la deja disponible para reservas de los usuarios registrados.	



4\. CU-04: Reservar y cancelar turnos en los equipos.



&#x09;Actor: Usuario.

&#x09;

&#x09;Precondición: El usuario ha iniciado sesión y existen equipos disponibles.



&#x09;Pasos:

&#x09;

&#x09;-El usuario selecciona un equipo y una franja horaria.

&#x09;-El sistema comprueba que la franja esté libre.

&#x09;-El usuario confirma la reserva.

&#x09;-El sistema registra el turno, asigna el equipo al usuario y muestra la confirmación.

&#x09;-El usuario selecciona una reserva y la cancela.

&#x09;-El sistema elimina su reserva. 



5\. CU-05: Realizar pagos de la membresía.



&#x09;Actor: Usuario.

&#x09;

&#x09;Precondición: El usuario ha iniciado sesión y tiene una tarifa establecida. 

&#x09;

&#x09;Pasos:

&#x09;

&#x09;-El usuario accede a la sección de pagos.

&#x09;-El usuario selecciona pagar.

&#x09;-El usuario rellena el formulario.

&#x09;-El sistema envía la solicitud a la pasarela de pago.

&#x09;-La pasarela confirma la transacción.

&#x09;-El sistema registra el pago y actualiza el estado de la membresía.	



6\. CU-06: Registrarse como miembro de los diferentes clubes.



&#x09;Actor: Usuario.

&#x09;

&#x09;Precondición: El usuario ha iniciado sesión y existen clubes.



&#x09;Pasos:

&#x09;

&#x09;-El usuario accede a la sección de clubes deportivos.

&#x09;-El usuario selecciona un club.

&#x09;-El usuario confirma su inscripción.

&#x09;-El sistema comprueba que el usuario no esté ya inscrito.

&#x09;-El sistema registra la inscripción y muestra la confirmación.

&#x09;	



7\. CU-07: Consultar información sobre el gimnasio y los diferentes clubes.



&#x09;Actor: Usuario/Público.

&#x09;

&#x09;Precondición: La página está accesible.



&#x09;Pasos:

&#x09;

&#x09;-El usuario accede la página principal del gimnasio.

&#x09;-El sistema muestra información.

&#x09;-El usuario selecciona la sección que quiere consultar.

&#x09;-El usuario mira la información.

&#x09;



8\. CU-08: Gestionar cambios en el perfil de usuario.



&#x09;Actor: Usuario.

&#x09;

&#x09;Precondición: El usuario ha iniciado sesión.



&#x09;Pasos:

&#x09;

&#x09;-El usuario accede a su perfil.

&#x09;-El sistema muestra sus datos personales.

&#x09;-El usuario selecciona editar.

&#x09;-El usuario cambia los datos en el formulario.

&#x09;-El sistema valida los cambios.

&#x09;-El sistema guarda los cambios.



\### 2.3. Alcance del MVP (Hito 3, diciembre) -



Incluido: \[Casos de uso operativos en producción en diciembre.] -



&#x09;CU-01: Registro e inicio de sesión seguro con tokens JWT.



&#x09;CU-02: Gestionar equipos y franjas disponibles.



&#x09;CU-03: Gestionar la oferta de sesiones con entrenadores.



&#x09;CU-04: Reservar y cancelar turnos en los equipos.



&#x09;CU-08: Gestionar cambios en el perfil de usuario.





Fuera del MVP: \[Funcionalidades que se abordarán con los Add-ons o quedan como líneas futuras.] ---



&#x09;CU-05: Realizar pagos de la membresía.

&#x09;

&#x09;CU-06: Registrarse como miembro de los diferentes clubes.



&#x09;CU-07: Consultar información sobre el gimnasio y los diferentes clubes.



\## 3. Modelo de datos -



Entidades principales:

&#x09;

&#x09;-SOCIO: 

&#x09;	Usuario registrado con información sobre su persona y contactos.



&#x09;-ENTRENADOR:

&#x09;	Entrenador del gimnasio con información de identificación y contacto.



&#x09;-CLUB:

&#x09;	Club deportivo situado en el recinto con información descriptiva.



&#x09;-MAQUINA:

&#x09;	Objeto de equipamiento o máquina del gimnasio.



&#x09;-PAGO:

&#x09;	Entidad con información relevante para el pago de una membresía.



&#x09;-ZONA:	

&#x09;	Entidad con información sobre la ubicación en el recinto de un equipamiento o club.



&#x09;-FRANJA\_HORARIA: 

&#x09;	Entidad con información sobre las horas disponibles para otra entidad como MAQUINA o ENTRENADOR.

&#x09;

Relación transaccional principal prevista:



&#x09;-RESERVA\_MAQUINA -> SOCIO ↔ MAQUINA: id\_reserva, id\_socio, id\_maquina, fecha, hora\_inicio, hora\_fin, estado, fecha\_creacion





\## 4. Stack tecnológico previsto -



Motor de base de datos: MySQL.



Es una tecnología ampliamente utilizada, con abundantes recursos de aprendizaje.



Backend API: Node.js.



Su arquitectura basada en operaciones asíncronas resulta adecuada para gestionar las solicitudes de los usuarios, las consultas a la base de datos y las operaciones de reserva.



Frontend: Next.js.



Integración con Node.js, comparte el ecosistema JavaScript y facilita añadir nuevas páginas y funcionalidades sin tener que construir toda la estructura de la aplicación desde cero.



Alojamiento cloud previsto: Railway.



Integración directa con MySQL, configuración centralizada y despliegue sencillo de frontend y backend



\## 5. Selección tentativa de Add-ons



\- Generación de informes en PDF/Excel en backend. 



\- WebSockets / Comunicación en tiempo real.

