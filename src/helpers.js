import {colors, colorsLength} from './data.js'

// Returns a random color used by members
export const getRandomColor = () => colors[getRandomIntInclusive(0,colorsLength)]

// Returns a random between the min and max provided.
// Includes the min and max in the random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

// Returns Initials of a name that are unique compared to the array of initials passed
export function getInitials(name, allInitials){
  let result = ''
  // Verify that the name passed is a string
  if(typeof(name) === "string") {
    // Create an array from the name
    let arrayName = name.toUpperCase().split(' ', 2)
    result = arrayName.length === 1 ? arrayName[0].substring(0,2) : arrayName.map((word) => word.charAt(0)).join('')

  }

  return result
}

function isUnique(initials, initialArrays){
  return initials !== null && !initialArrays.includes(initials)
}