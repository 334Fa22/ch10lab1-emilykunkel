/*
Student Name: Emily Kunkel
Date: 9/20/22
File Name: scripts.js
*/

// Hamburger menu function //
function hamburger () {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
}
