# VTTES-util

The VTTES utility tool, or vttes-util, is a gallery and rudementary editor of characters exported from the virtual tabletop application using the VTTES (virtual tabletop enhancement suite) extension.

![image](./Screenshot%202022-10-02%20190721.jpg)

## Description

Out of the box, vttes-util allows for viewing and editing of characters. These can be imported from a compatible json file, or loaded from the gallery. Finally the loaded file can be exported, keeping any edits.

By logging in, the full set of actions will be available. It will allow for saving changes directly to the gallery. This can be either as an update to the currently loaded character, or as a new upload.

## Built With

Significant technologies utilized:
- [React.js](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com)
- [node-sass](https://www.npmjs.com/package/node-sass)
- [Wordpress](https://wordpress.org/)
- [JWT Authentication for WP REST API](https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/)
- [Pods](https://wordpress.org/plugins/pods/)

See the package.json for a full list of dependencies.

## Getting Started

### Installing

* Download or clone the repo

* Install the required packages:
  ```bash
  npm install
  ```

* Set up a Wordpress instance with JWT and a custom post type using Pods to store the json data.

### Running development

In the project directory, you can run:

```bash
npm start
```

This runs the app in the development mode. Follow the console readout for instructions on address and ports.

The page will reload when you make changes. You may also see any lint errors in the console.

### Building

```bash
npm run build
```

This will output a deployable version of the application.

## Contributing

Any contributions should be done through a pull request.
