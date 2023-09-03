function changeImage() {
  const image = document.getElementsByTagName("img");
  for (let i = 0; i < image.length; i++) {
    if (i === 1) {
      image[i].src = "img/losAngeles.avif";
    } else if (i == 2) {
      image[i].src = "img/lasVegas.jpg";
      image[i].style.height = "150px";
    }
  }
}
changeImage();

function changeTitle() {
  const heading = document.getElementsByTagName("h4");
  for (let i = 0; i < heading.length; i++) {
    if (i == 1) {
      heading[i].textContent = "Los Angeles";
    } else if (i == 2) {
      heading[i].textContent = "Las Vegas";
    }
  }
}
changeTitle();

function changeAbout() {
  const content = document.getElementsByTagName("p");
  for (let i = 0; i < content.length; i++) {
    if (i == 1) {
      content[i].innerHTML = `Los Angeles, often called LA, is a diverse and sprawling city on the west coast of the United States. It's known for Hollywood, a booming entertainment industry, and a mix of cultures.`;
    } else if (i == 2) {
      content[i].innerHTML = `Las Vegas is a bustling city in Nevada, known for its entertainment, casinos, and vibrant nightlife on the famous Las Vegas Strip. And mostly is tourist.`;
    }
  }
}
changeAbout();

function rating() {
  const star = document.querySelectorAll("div.rate");
  for (let i = 0; i < star.length; i++) {
    if (i == 0 || i === 1) {
      //card one and card two
      const getStar = star[i].querySelectorAll("span");
      for (let i = 0; i < getStar.length; i++)
        if (i <= 4) {
          getStar[i].classList.add("checked");
        }
    } else {
      //card three
      const getStar = star[i].querySelectorAll("span");
      for (let i = 0; i < getStar.length; i++) {
        if (i <= 2) {
          getStar[i].classList.add("checked");
        }
      }
    }
  }
}
rating();

function changeColorButton() {
  const button = document.getElementsByTagName("button");
  for (let i = 0; i < button.length; i++) {
    if (i === 0) {
      button[i].style.backgroundColor = "rgba(120, 19, 106, 0.82)";
    } else if (i === 1) {
      button[i].style.backgroundColor = "rgba(52, 174, 170, 0.82)";
    } else {
      button[i].style.backgroundColor = "rgba(43, 217, 117, 0.82)";
    }
  }
}
changeColorButton();
