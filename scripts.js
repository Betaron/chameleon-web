window.onload = () => {
    setInterval(()=>{
        if (document.querySelector('#switch1').checked){
            document.querySelector('#switch2').checked = true;
        }
        else if(document.querySelector('#switch2').checked){
            document.querySelector('#switch3').checked = true;
        }
        else document.querySelector('#switch1').checked = true;
    }, 5000);
    
}