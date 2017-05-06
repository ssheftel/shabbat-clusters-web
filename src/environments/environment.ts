// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyA6cwG3Xrwsav1gGFBB65XS-yOwfjd8yYc',
    authDomain: 'shabbat-clusters.firebaseapp.com',
    databaseURL: 'https://shabbat-clusters.firebaseio.com',
    projectId: 'shabbat-clusters',
    storageBucket: 'shabbat-clusters.appspot.com',
    messagingSenderId: '140295100750'
  }
};
