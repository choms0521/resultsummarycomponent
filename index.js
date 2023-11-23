function drawSummary(jsonData) {
  const liElements = document.querySelectorAll(".summary > ul > li");

  liElements.forEach((elem) => {
    const data = jsonData.filter(
      (value) => value.category.toLowerCase() === elem.className
    );


    if (data) {
      elem.innerHTML = `
        <img src=\"${data[0].icon}\"> 
        <p>${data[0].category}</p>
        <p><span>${data[0].score}</span> / 100</p>

     `;
    }

  });
}

fetch("./data.json")
  .then((response) => response.json())
  .then((json) => {
    drawSummary(json);
  });
