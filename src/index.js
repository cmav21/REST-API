import '@babel/polyfill';//Indica que el codigo podra ser ejecuctado en ditintos entornos

import app from './server';

async function main(){
   await app.listen(app.get('port'));
   console.log("server on port", app.get('port'));
}

main();

