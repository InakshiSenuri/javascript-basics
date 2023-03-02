//global variables and lists
var usernames = ["senuri","sachith","sinoli"];
var password = ["123","456","678"];

var index;

// to use in signup.html
const adduser = (ev)=>{
    ev.preventDefault();  
    usernames.push(document.getElementById("uname").value); 
    password.push(document.getElementById("pw").value);
    localStorage.setItem("newname", document.getElementById("uname").value );  
    document.forms[0].reset();
    document.getElementById("joinhere").innerHTML = "Click here to join";
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('signup').addEventListener('click', adduser);
});



// to use in home.html
function changeUserName(){
    var N_name = localStorage.getItem("newname");
    document.getElementById("un").innerHTML = N_name;
}

// to use in signin.html
function auth(event){
    event.preventDefault();

    var name = document.getElementById("uname").value;
    var pswd = document.getElementById("pw").value;

    currentuser = document.getElementById("uname").value;

    
    
    var res = loginCheck(usernames, password,name,pswd);
    
    if (res == 1){
        document.getElementById("change").innerHTML = "Click here to join";
        alert("Correct username or password!");

    }
    else{
        alert("Wrong username or password!");
    }



    
}
function loginCheck(usernames, password,name,pswd){
for(i = 0; i <  usernames.length; i++){
    if(usernames[i] == name && password[i] == pswd){
        localStorage.setItem("newname", usernames[i]);
        return 1;
    }
    
}
return 0;
}



       