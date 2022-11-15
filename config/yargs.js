const argv = require( 'yargs' )
  .option( 'b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Base multiplier',
  })
  .option( 'l', {
    alias: 'list',
    type: 'boolean',
    default: false,
    describe: 'Display multiplier results',
  })
  .option( 'm', {
    alias: 'multiples',
    type: 'number',
    default: 10,
    describe: 'Multiples to use against multiplier',
  })
  .check( ( argv, options ) => {
    if ( isNaN( argv.b ) ) throw 'Base value should be a number';
    if ( isNaN( argv.m ) ) throw 'Multiples value should be a number';
    if ( argv.m < 1 ) throw 'Multiples value must be greater or equal to 1';
    return true;
  })
  .argv;

module.exports = argv;
