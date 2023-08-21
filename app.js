function handleEditProfile(){
    // Get current name
    var currentName = document.getElementById("name").textContent;
    var name = document.getElementById("inputName");
    name.value = currentName;

    // Get current Email
    var currentEmail = document.getElementById("email").textContent;
    var email = document.getElementById("inputEmail");
    email.value = currentEmail;

    // Get current interests
    var currentInterests = document.getElementById("interests").textContent;
    var interests = document.getElementById("inputInterests");
    interests.value = currentInterests;
    

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