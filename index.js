const {hash} = window.location;
decrypted = atob(hash.replace('#',''));
if (decrypted){
    document.querySelector('.message').classList.add('hide');
    document.querySelector('.display-message').classList.remove('hide');
    document.querySelector('h1').innerHTML = decrypted;
}





document.querySelector('form').addEventListener('submit', (event) =>{  
    event.preventDefault();
    const input = document.querySelector('#message-input');
    if (input.value){
        const encrypted = btoa(input.value);
        const linkInput = document.querySelector('#link-input');
        linkInput.value = `${window.location}#${encrypted}`
        linkInput.select();
        document.querySelector('.message').classList.add('hide');
        document.querySelector('.link').classList.remove('hide');
    }else{
        alert('Please Enter a message');
    }



});