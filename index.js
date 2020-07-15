var init = 0;
function start()
{
    axios
    .get("https://run.mocky.io/v3/08c763ab-5bb2-46b7-a504-b9f28a8ba050")
    .then(function (res) {
      console.log(res.data.img);
      loadingImg(res.data.img, function () {
      setImage(res.data.img);
      });
    })
    .catch(function (err) {
      console.log(err);
    });
}

function setImage(imgrrrr) {
    var dex = 0;
    document.getElementById("txt").innerHTML = dex + 1 ;
    document.getElementById("img").style.backgroundImage = "url(" + imgrrrr[0] + ")"
    document.getElementById("load").style.display = "none";
    function left()
    {
      dex -= 1;
      document.getElementById("txt").innerHTML = dex + 1 ;
      document.getElementById("img").style.backgroundImage = "url(" + imgrrrr[dex] + ")"
      if(dex<0)
      {
          dex = 7;
          document.getElementById("txt").innerHTML = dex +1;
          document.getElementById("img").style.backgroundImage = "url(" + imgrrrr[dex] + ")"
      }
    }
   document.getElementById("left").addEventListener("click",left);

   function right()
   {
    dex += 1;
    document.getElementById("txt").innerHTML = dex + 1;
    document.getElementById("img").style.backgroundImage = "url(" + imgrrrr[dex] + ")"
    if(dex>7)
    {
        dex = 0;
        document.getElementById("txt").innerHTML = dex + 1;
        document.getElementById("img").style.backgroundImage = "url(" + imgrrrr[dex] + ")"
    }
   }
   document.getElementById("right").addEventListener("click",right);
   console.log(dex);
  }

 start();