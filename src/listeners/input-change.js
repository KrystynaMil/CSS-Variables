import {handleUpdate } from '../handlers/handle-update.js';

/**
 * @name change @spacing , @blur @base 
 * calls handler that changes the value of the variable 
 */
 // select all the input elements 
const inputs = document.querySelectorAll('.controls input');

inputs.forEach(input => input.addEventListener('change', handleUpdate));