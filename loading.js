function loadingImg(imgArr, complate) {
  for (var i = 0; i < imgArr.length; i++) {
    var img = new Image();
    img.src = imgArr[i];
    img.onload = function () {
      init++;
      if (init === imgArr.length) {
        console.log("load ok");
        complate();
      }
    };
  }
}
