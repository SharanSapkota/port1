function validateform(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    if(name == ""){
        document.querySelector('.status').innerHTML = "Name must not be empty"
        return false;
    }

    if(email == "") {
        document.querySelector('.status').innerHTML = "Emails cannot be empty"
        return false;
    }
    else{
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.querySelector('.status').innerHTML = "Email has invaid format"
            return false;
        }

    }

    if(subject == ""){
        document.querySelector('.status').innerHTML ="Enter Subject"
        return false;
    }
    if(message == ""){
        document.querySelector('.status').innerHTML ="Enter message"
        return false;
    }

    document.querySelector('.status').innerHTML ="Sending...."
    

}