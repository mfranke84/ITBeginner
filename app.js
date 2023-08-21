function handleEditProfile(){
    document.getElementById("display").style.display = "none";
    document.getElementById("edit-view").style.display = "block";
}

function handleUpdateProfile(){
    var updateName = document.getElementById("inputName").value;
    var name = document.getElementById("name");
    name.textContent = updateName;
    
    document.getElementById("display").style.display = "block";
    document.getElementById("edit-view").style.display = "none"; 
}