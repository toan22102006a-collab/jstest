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

window.onload = function () {
  console.log("Trang đã tải xong");

  const previews = document.querySelectorAll(".preview");
  for (let i = 0; i < previews.length; i++) {
    previews[i].addEventListener("mouseover", function () {
      upDate(this);
    });
    previews[i].addEventListener("mouseleave", undo);

    // Accessibility: thêm sự kiện bàn phím
    previews[i].addEventListener("focus", function () {
      upDate(this);
    });
    previews[i].addEventListener("blur", undo);

    // Đảm bảo tabindex đã được thêm
    previews[i].setAttribute("tabindex", "0");
  }
};
