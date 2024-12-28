const isstatus=document.querySelector("h5");
const friend=document.querySelector('#Addfriend');
let check=0;

friend.addEventListener("click",function(){
  if(check==0){
    isstatus.innerHTML="Friends"
    isstatus.style.color="green"
    friend.innerHTML="Remove Friend"
    check=1
  }
  else{
    isstatus.innerHTML="Stranger"
    isstatus.style.color="red"
    friend.innerHTML="Add Friend"
    check=0
  }
})
