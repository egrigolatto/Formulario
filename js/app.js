var inputs = document.getElementsByClassName('input')
// como inputs es un array, va a guardar varios datos, lo que tengo que hacer es un recorrdio con un for
for (var i = 0 ; i<inputs.length ; i++){
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add('fijar')
        } else{
            this.nextElementSibling.classList.remove('fijar')
        }
    });
};
