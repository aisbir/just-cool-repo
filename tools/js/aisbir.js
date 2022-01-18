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
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        })
        break;     {    lain
      }
      }
     if (coba==1)
      {
        alert("Discord.aisbir-nation.xyz to get password");
       history.go(-1);
      }
    coba=coba+1;
    }
   while (coba<=1)
  }                  
function limit() {
    var i = document.getElementById('limit');
    i.innerHTML = parseInt(i.innerHTML)+1;
   if (i.innerHTML > 150) {
       window.location.reload()
       alert("Woops, Limit sudah di target XD")
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
     Swal.fire('command copied successfully');
    }
   