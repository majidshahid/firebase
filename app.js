function senddata(){
    var name = document.getElementById("name");
    var roll = document.getElementById("roll");

    var student={
        name :name.nodeValue,
        roll:roll.value,

    }
   firebase.database().ref('student').push(student)
}
