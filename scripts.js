window.onload = () => {
    setInterval(() => {
        if (document.querySelector('#switch1').checked) {
            document.querySelector('#switch2').checked = true;
        }
        else if (document.querySelector('#switch2').checked) {
            document.querySelector('#switch3').checked = true;
        }
        else document.querySelector('#switch1').checked = true;
    }, 5000);

}

window.onscroll = function() {
    if(window.pageYOffset>150){
      document.getElementById('arrow').style.display="block";
  
    }
    else{
       document.getElementById('arrow').style.display="none";
    }
  }