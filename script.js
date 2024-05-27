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
                'بخۆن گوڵ خاڵوی ',
                ' ناهێڵم موحتاج بن',
                ' ئەمانە هەموو گوڵ خاڵۆن ',
                'بخۆن بەلاش خۆرەکان ',
                'لەگــەڵ خاڵۆ و گوڵەکانی ',
                ' بخۆ عافێتت بێ',
                'هەتا من مابم ناهێڵم موحتاج بن',
                'هەتا من مابم نایەڵم موحتاج بن',
                '',

                // and so on
            ];
    
            return names[Math.floor(Math.random() * names.length)];
        }
    
        return randomName();

    }

    function updateRandomName() {
      document.getElementById('r1').innerText = random2();
      document.getElementById('r2').innerText = random2();
      document.getElementById('r3').innerText = random2();  
    }

  // Update the random name every 5 seconds
  setInterval(updateRandomName, 5000);

  // Initial name set
  updateRandomName();
   
    