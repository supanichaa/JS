const nodeHello = document.querySelector("#helloword");

const firstname = prompt("กรอกชื่อออ");
const Hello = `Hello ${firstname}`;

nodeHello.innerHTML = firstname;
