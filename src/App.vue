<template>
    <div onload=""  v-show="!isEditMode">
        <h1>User Profile</h1>
        <img :src="image" alt="Profile Picture"> 
        <span>Name: </span><b id="name">{{ name }}</b>
        <hr>
        <span>Email: </span><b id="email">{{ email }}</b>
        <hr>
        <span>Interests: </span><b id="interests">{{ interests }}</b>
        <hr>
        <button @click="handleEditProfile()">Edit profile</button>
</div>
    <div v-show="isEditMode">
        <h1>User Profile</h1>
        <img :src="image" alt="Profile Picture"> 
        <span>Name: </span><input id="inputName" type="text" v-model="name">
        <hr>
        <span>Email: </span><input id="inputEmail" type="text" v-model="email">
        <hr>
        <span>Interests: </span><input id="inputInterests" type="text" v-model="interests">
        <hr>
        <button @click="handleUpdateProfile()">Update profile</button>
    </div>
</template>

<script>
    import image from "./profile.jpeg"
    export default {
        name: "App",
        data() {
            return {
                // Backend data
                image: image,
                name: "",
                email: "",
                interests: "",
                
                isEditMode: false
            }
        },
        async created() {
            const userData = await this.fetchUserProfile()
            this.name = userData.name
            this.email = userData.email
            this.interests = userData.interests
        },
        methods: {
            handleEditProfile(){
                this.isEditMode = true
            },
            handleUpdateProfile(){
                this.isEditMode = false
            },
            async fetchUserProfile(){
                var res = await fetch('get-profile', {
                    method: "GET"
                })

                return await res.json();
            }
        }
    }
    
</script>

<style>
img {
    height: 270px;
    display: block;
    margin-bottom: 40px;
    width: 320px;
}

div {
    margin: 40px auto;
    width: 80%;
}

hr {
    width: 340px;
    margin: 25px 0;
}

button {
    width: 160px;
    height: 45px;
    font-size: 15px;
    border-radius: 5px;
}

input {
    height: 28px;
    width: 200px;
    padding: 5px;
}
</style>
