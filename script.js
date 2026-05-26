function w3_open() {
  var sidebar = document.getElementById("mySidebar");
  if (sidebar.style.display === "block") {
    sidebar.style.display = "none";
  } else {
    sidebar.style.display = "block";
  }
}

function closeSidebar() {
  // Toggle the sidebar instead of always closing
  w3_open();
}
