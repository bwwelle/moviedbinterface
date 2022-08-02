The Movie DB Interface
=================================

LAST RELEASE: 1.0.0 (See CHANGELOG file)

A Vue 2.0 Javascript application, utalizing Vuetify, built to interact with the RESTful API of [themoviedb.org](http://www.themoviedb.org/ "The Movie DB").

You will need an **api_key** to use the API.  One can be created at [themoviedb.org](https://www.themoviedb.org/documentation/api "Get TMDB api key").  This key will then need to be entered into the ".env" file(currently named ".env.example" and should be renamed to ".env")

Usage
=====

Included are all the [api calls currently available](https://developers.themoviedb.org) (8/2/2022) are wired up with axios and available as a service.  Only a few are used in the available functionality within the limited scope of what has been completed within the build of the application. 

The layout is based on the design found [here](https://dribbble.com/shots/6461891-Media-store-idea-Movies).

Testing
=======

Jest is the unit testing framework used.

Useful Commands
=======
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Running unit tests
```
npm run test
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
