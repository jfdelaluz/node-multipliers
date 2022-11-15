const { createFile } = require( './helpers/multiply' );
const argv = require( './config/yargs' );
const colors = require( 'colors' );

console.clear();

createFile( argv.b, argv.l, argv.m )
  .then( fileName => console.log( `Created file ${ colors.yellow( fileName ) }` ) )
  .catch( err => console.log( err ) );
