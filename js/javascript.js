window.onload = function () {
    validateForm ();
    sendEmail ();
};

function validateForm () {
    document.getElementById("name").addEventListener('focus', function () {
        this.value = " ";
    },false);
    
    document.getElementById("name").addEventListener('blur', function () {
        if(this.value == " " || this.value == null){
            this.value = "Name";
        }
    },false);
    
    document.getElementById("email").addEventListener('focus', function () {
        this.value = " ";
    },false);
    
    document.getElementById("email").addEventListener('blur', function () {
        if(this.value == " " || this.value == null){
            this.value = "Email";
        }
    },false);
    
    document.getElementById("subject").addEventListener('focus', function () {
        this.value = " ";
    },false);
    
    document.getElementById("subject").addEventListener('blur', function () {
        if(this.value == " " || this.value == null){
            this.value = "Subject";
        }
    },false);
    
    document.getElementById("message").addEventListener('focus', function () {
        this.value = " ";
    },false);
    
    document.getElementById("message").addEventListener('blur', function () {
        if(this.value == " " || this.value == null){
            this.value = "Message";
        }
    },false);
}

function validateContact () {
    //var errmsg = alert("Error!");
    var senderName = document.getElementById("name").value;
    if(senderName == " "){
       alert("Put your Name");
    }
    /*
    if(errmsg == " "){
        return true;
    }else{
        return false;;
    }
    */
}

function sendEmail () {
    document.getElementById("submit").onclick = function(){
        return validateContact();
    }
}