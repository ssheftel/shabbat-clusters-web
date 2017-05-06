// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBLy_kN34eSuL-VS1itYntC7jxjmflVYR4',
    authDomain: 'shabbat-clusters-dev.firebaseapp.com',
    databaseURL: 'https://shabbat-clusters-dev.firebaseio.com',
    projectId: 'shabbat-clusters-dev',
    storageBucket: 'shabbat-clusters-dev.appspot.com',
    messagingSenderId: '1007972316275'
  }
};
