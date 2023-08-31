<template>
<div id="display">
    <h1>User Profile</h1>
        <img src="profile.jpeg" alt="Profile Picture"> 
        <span>Name: </span><b id="name"></b>
        <hr>
        <span>Email: </span><b id="email"></b>
        <hr>
        <span>Interests: </span><b id="interests"></b>
        <hr>
        <button onclick="handleEditProfile()">Edit profile</button>
    </div>
        <div id="edit-view">
            <h1>User Profile</h1>
            <img src="profile.jpeg" alt="Profile Picture"> 
            <span>Name: </span><input id="inputName" type="text" placeholder="Jan Mustermann">
            <hr>
            <span>Email: </span><input id="inputEmail" type="text" placeholder="J.mustermann@example.com">
            <hr>
            <span>Interests: </span><input id="inputInterests" type="text" placeholder="Example Coding">
            <hr>
            <button onclick="handleUpdateProfile()">Update profile</button>
        </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>
