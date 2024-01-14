let name = prompt("What is your name?");
function capitalizeInput() {
  let capitalizeName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return `Hello ${capitalizeName}`;
}

capitalizeInput();
