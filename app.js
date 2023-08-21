function handleEditProfile(){
    document.getElementById("display").style.display = "none";
    document.getElementById("edit-view").style.display = "block";
}

function handleUpdateProfile(){
    // update Name 
    var updateName = document.getElementById("inputName").value;
    var name = document.getElementById("name");
    name.textContent = updateName;

    // Update email
    var updateEmail = document.getElementById("inputEmail").value;
    var email = document.getElementById("email");

    email.textContent = updateEmail;
    
    // Update interests
    var updateInterests = document.getElementById("inputInterests").value;
    var interests = document.getElementById("interests");

    interests.textContent = updateInterests;
    
    document.getElementById("display").style.display = "block";
    document.getElementById("edit-view").style.display = "none"; 
}