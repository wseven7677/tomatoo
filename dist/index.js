#!/usr/bin/env node
import { Command } from 'commander';
import commandStart from './commands/start.js';
const program = new Command();
program.version('0.1.0');
program
    .command('start')
    .description('start a tomato')
    .action(() => {
    commandStart();
});
program.parse(process.argv);
