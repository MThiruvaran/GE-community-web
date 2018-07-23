function getdata(){
    var email = document.getElementById("mail").value;
    var password = document.getElementById("pass").value;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
}