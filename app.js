// let users = [
//   { firstName: "Abdulloh1", lastName: "Fazliddinov" },
//   { firstName: "Abdulloh2", lastName: "Fazliddinov" },
//   { firstName: "Abdulloh3", lastName: "Fazliddinov" },
//   { firstName: "Abdulloh4", lastName: "Fazliddinov" },
// ];

// const list = document.querySelector("#list");
// list.classList.add("text-center", "mt-32");

// for (let value of users) {
//   const li = document.createElement("li");
//   list.appendChild(li);
//   li.classList.add(
//     "text-green-500",
//     "mt-24",
//     "hover:text-yellow-400",
//     "cursor-not-allowed"
//   );
//   li.classList.add("text-3xl");
//   li.classList.add("font-medium");

//   li.textContent = value.firstName + " " + value.lastName;
// }

let bgcolor = prompt("enter body background");
let txcolor = prompt("enter text color");

const text = document.querySelector(".text");
const body = document.querySelector(".body");

text.setAttribute("style", `color: ${txcolor}`);
body.setAttribute("style", `background: ${bgcolor}`);
