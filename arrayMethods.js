let names = ["Peter", "Marie", "George"];

// transformative
// let result = names.pop(); deletes the last element of an array and return it
// let result = names.shift(); deletes the first element of an array and return it
// let result = names.push("Jhon", "Robert"); add strings into an array at the end
// let result = names.reverse(); reverse the order
// let result = names.unshift(1, 3); add  strings into an array at start
// let result = names.sort(); sort in lexicographic order
// let result = names.splice(1,3, "Alice"); (1 position to start to, 3 quantity to delete, "Alice" add number or string)

// accessory
// let result = names.join("-"); turn into string and add separate values with the ("-"), return new array
// let result = names.slice(0,3); like substring but elements instead of chars.
// toString(), indexOf(), lastIndexOf(), includes()

//repetitive

let result = names.filter((name) => {
  document.write(name + "<br>");
}); // create new array with all the elements that meet the condition

let result2 = names.filter((name) => name.length > 6);

// forEach() execute the indicated function one time for element of the array.

document.write(result2);

document.write(result + "<br>");
document.write(names);
