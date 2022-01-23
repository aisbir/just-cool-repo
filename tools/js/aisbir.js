{
  var coba = 1;
   do
    {
     p = prompt("Tuliskan password dengan benar","");
     if (p=="#elitesmp_neverdie")
      {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: true,
          timer: 7000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'info',
          title: 'Halo user selamat datang di web aisbirkun'
        });
        break;     {    lain
      }
      }
     if (coba==1)
      {
        alert("Discord.aisbir-nation.xyz to get password");
        history.go(-1)
       window.close()
      }
    coba=coba+1;
    }
   while (coba<=1)
  }                  
function limit() {
    var i = document.getElementById('limit');
    i.innerHTML = parseInt(i.innerHTML)+1;
   if (i.innerHTML > 150) {
    alert("Chill bro")
    window.location.reload()
   }
  }
   function awikwok(elementId) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(elementId).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    console.log("Injected To text!");
    document.body.removeChild(aux);
    let textarea = document.getElementById("anubanghehe");
    textarea.focus();
    textarea.value += document.getElementById(elementId).innerHTML
  }
  function ngopieuy () {
    document.getElementById("anubanghehe").select();
     document.execCommand("copy");                 
     Swal.fire({
      icon: 'success',
      title: 'Copyed',
      text: 'Your work has been saved on your clipboard :3',
    })
    }