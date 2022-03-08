// load chalk package
import chalk from 'chalk';

// choose color for text to log
console.log(chalk.yellow('Hello World1'));

// Choose text-color, background-color and style for given text.
console.log(chalk.bold('Sagarmatha')); // text-bold
console.log(chalk.bgGray('Annapurna')); // background
console.log(chalk.italic('Ukraine')); // italicize
console.log(chalk.blue.bgBlack.underline('I live in Los Angeles.')); //text-color, background and style

console.log(`${chalk.blue('Yug Gurung')} from ${chalk.yellow('Los Angeles')}`);
