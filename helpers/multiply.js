const fs = require( 'fs' );
const colors = require( 'colors' );

const createFile = async ( baseValue = 1, list = false, multiples = 10 ) => {

  try {
    
    let fileOutput = '',
      consoleOutput = '';
  
    for ( let i = 1; i <= multiples; i++ ) {
      fileOutput += `${ baseValue } x ${ i } = ${ baseValue * i }\n`;
      consoleOutput += `${ colors.blue( baseValue ) } x ${ i } = ${ colors.yellow( baseValue * i ) }\n`;
    }
  
    if ( list ) {
      console.log(
`
===========================
  Multiplier: ${ colors.blue( baseValue ) }
===========================
`     );
      console.log( consoleOutput );
    }
  
    const fileName = `./output/multiplier-${ baseValue }.txt`;
    fs.writeFileSync( fileName, fileOutput );

    return fileName;

  } catch ( error ) {
    throw error;
  }

};

module.exports = {
  createFile
};
