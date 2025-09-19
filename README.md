# Entrega Final Ezequiel Zarza

CoderHouse Desarrollo de aplicaciones - Entrega Final

Este es el projecto del curso de Desarrollo de aplicaciones de Coderhouse

Para el mismo se realizo la version mobile de un e-commerce, basandose en la entrega del trabajo final del curso de React Js
(Dicha entrega se encuentra presente en este [repositorio](https://github.com/EzequielZarza/PreEntrega1Zarza))

La tematica de este projecto es un e-commerce de venta de autos y otros vehiculos, similar a Kavak

El projecto se realizo con [Expo](https://docs.expo.dev/).

## Tecnologias Usadas

El projecto esta hecho con [React 19](https://react.dev/) y [React Native](https://reactnative.dev/docs/intro-react-native-components).

Para poder navegar dentro de la aplicaccion a las distintas pantallas, se uso [React Navigation](https://reactnavigation.org/).

Para el manejo de estado global disponible en cualquier pantalla de la aplicación, se utilizó [Redux Toolkit](https://redux-toolkit.js.org/)

Ademas se usó la biblioteca de iconos [@expo/vector-icons](https://icons.expo.fyi/Index) y la biblioteca de fuentes de tipografia
[expo fonts](https://docs.expo.dev/develop/user-interface/fonts/),

Como plataforma de storage, se uso [Firebase](https://firebase.google.com/?hl=es).
Por un lado, de hizo uso de la [Base de datos en tiempo real](https://firebase.google.com/docs/database) para
guardar:
  - Las categorias
  - Los productos
  - La foto de perfil del usuario
  - Las compras realizadas

Por otro lado, se hizo uso de [Autenticacion](https://firebase.google.com/docs/auth) de firebase para manejar el logIn del usuario

Para la persistencia del inicio de sesion en el dispositivo, se utilizó [Expo SQLite](https://docs.expo.dev/versions/latest/sdk/sqlite/)

Para la localizacion del usuario y muestra en mapa, se empleó [React Native Maps](https://www.npmjs.com/package/react-native-maps) y la [API de Google Maps](https://console.cloud.google.com/google/maps-apis/home)


## Arquitectura de la aplicacion

### src

Dentro del codigo fuente, se tienen 6 carpetas

### database 
  Tiene implementadas las funciones para la persistencia de la sesion en el dispositivo

### global

  Tiene la paleta de colores usada en la aplicacion

### navigation

  Posee los navegadores de:

  - autenticacion
  - carrito de compras
  - perfil de usuario
  - tienda
  - tabs

### screens

  Tiene la distintas pantallas de la aplicacion:

    - LogIn Screen
    - Cart Screen
    - Profile Screen
    - Categories, Products and Produtcs Details Screens

### services

  Tiene los distintos servicios para realizar operaciones CRUD a la DB de Firebase
  Entre ellas se encuentran:

  - auth API: log in y sing up
  - profile API: GET y PUT de la foto de perfil
  - shop API: GET de categorias y productos, y POST de compra realizada

### store

  En esta carpeta se encuentran las "slices" de la store, siento estos los estados
  globales disponibles en toda la aplicacion.
  Estos estan formados por:

  - Cart Slice: Todo estado relacionado a la posible compra
  - Shop Slice: Para manejar las categorias y productos seleccionados
  - User Slice: Para manejar el estado del usuario, su mail, id e imagen

Por ultimo, se tienen componentes usados en las distintas pantallas y navegadores:

  1. Camera Icon
  2. Codervak Typography
  3. Flat Card
  4. Header
  5. Search
  6. Spinner

## Demostracion

![](https://github.com/EzequielZarza/PreEntrega1Zarza/blob/main/demo-gifs/Codervak-Peek1.gif)


![](https://github.com/EzequielZarza/PreEntrega1Zarza/blob/main/demo-gifs/Codervak-Peek2.gif)


## Comandos

Para installar las dependecias:

### `npm install`

Para correr la aplicacion:

### `npm start`

Abrir mediante la App Expo Go en un dispositivo celular, escaneando el codigo QR que genera el comando npm start, o mediante el Virtual Device Manager de Android Studio 

