window.addEventListener('load', function(e) {
	document.querySelector('#test').innerHTML = 'Data Info receiver';

});


let a = '';
let b  = true;
    
function alert_VB_IS_CLICKED()
{
b = false;
  alert ('VB clicked');
}
function alert_Vbb_IS_CLICKED()
{
b = true;
  alert ('Vbb clicked');
}
var g = function gg(){
  VB.addEventListener('click',alert_VB_IS_CLICKED()) //1 button VB clicked
}
var g2 = function gg2(){
  Vbb.addEventListener('click',alert_Vbb_IS_CLICKED())  //1 button VB clicked                                //2 b is false
  alert('aatempt to true b again pressed');             // alert for b=true
}
//function 
   
    
     if (b===true) {
      alert('true ....');
      }
      if(b===false)
      {
        alert('not true ...');
      }
    


      function random2() {
        function randomName() {
            const names = [
                'nayalm nayalm mu7tajbm ',
                'hata mn mabm ',
                'nayalm muhtajbn ',
                // and so on
            ];
    
            return names[Math.floor(Math.random() * names.length)];
        }
    
        return randomName();

    }

    document.getElementById('r1').innerText = random2();
    document.getElementById('r2').innerText = random2();
    document.getElementById('r3').innerText = random2();
    