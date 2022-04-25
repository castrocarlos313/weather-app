# Weather APP

Una simple aplicacion para obtener el tiempo en una ciudad hecha en react y redux consumiendo la api de [weatherApi](https://www.weatherapi.com/).

# Contenido

- [Weather APP](#weather-app)
- [Contenido](#contenido)
- [Tecnologias usadas](#tecnologias-usadas)
- [Lunch](#lunch)
- [Imagenes](#imagenes)

# Tecnologias usadas

- [React](https://es.reactjs.org/)
- [react-redux](https://react-redux.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Postcss](https://postcss.org/)
- [Eslint](https://eslint.org/)

# Lunch

Para correr este proyecto, se tiene que crear una cuenta en [weatherApi](https://www.weatherapi.com/) y guardar la api key en el archivo _.env-development.local_ en la variable REACT_APP_API_KEY y usar los siguiente comandos:

```
$ npm install
$ npm start
```

# Imagenes

[index.js](src/index.js)
![index](https://i.imgur.com/UFGNDBP.png)

Buscando el tiempo de una ciudad realizando un fetch a la api de [weatherApi](https://www.weatherapi.com/):
![busqueda-1](https://i.imgur.com/aruLfBJ.png)

Se pude ver la con detalle el tiempo de 24hs:
![busqueda-2](https://i.imgur.com/vDfilIt.png)

La aplicacion permite cambiar entre celsius y farenheite:
![cambiar-medida](https://i.imgur.com/6kFsq7q.png)

En caso de no existir la ciudad buscada:
![busqueda-error](https://i.imgur.com/zPxYe48.png)

Dependiendo de los resultado el fondo cambia:
![resultado-noche](https://i.imgur.com/E70RrW1.png)
![resultado-dia](https://i.imgur.com/Z4pvo1F.png)
![resultado-nevando de dia](https://i.imgur.com/GfgdRqn.png)
![resultado-nevando de noche](https://i.imgur.com/T1MVQZW.png)
