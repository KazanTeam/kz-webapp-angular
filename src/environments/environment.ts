// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // firebase config
  firebase: {
    apiKey: 'AIzaSyDcxMOcZD3PRw_RJbdoT9tU8AiNdN9m56Q',
    authDomain: 'kazan-8abd1.firebaseapp.com',
    databaseURL: 'https://kazan-8abd1.firebaseio.com',
    projectId: 'kazan-8abd1',
    storageBucket: 'kazan-8abd1.appspot.com',
    messagingSenderId: '124397152142'
  },
  kazanApi: 'http://123.31.12.102',
  storeName: 'LocalStorage',
};
