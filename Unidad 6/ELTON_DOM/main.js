const cssList = ["dotted", "dashed", "solid", "double", "groove", "ridge"];

document
  .getElementsByTagName("p")[0]
  .classList.add(cssList[Math.floor(Math.random() * cssList.length)]);
