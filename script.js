function upDate(previewPic) {
  console.log("Hover event triggered");
  console.log("Image src:", previewPic.src);
  console.log("Image alt:", previewPic.alt);

  const imageDiv = document.getElementById("image");
  imageDiv.innerText = previewPic.alt;
  imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

function undo() {
  const imageDiv = document.getElementById("image");
  imageDiv.innerText = "Hover over an image below to display here.";
  imageDiv.style.backgroundImage = "url('')";
}
