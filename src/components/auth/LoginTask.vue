<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-sm-8 col-md-6 col-lg-4">
                <div class="card">
                    <div class="card-header">
                        <ul class="nav nav-pills card-header-pills">
                            <li class="nav-item">
                                <a class="nav-link" :class="{ active: isLogin }" @click="isLogin = true">Log in</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :class="{ active: !isLogin }" @click="isLogin = false">Sign up</a>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="isLogin ? login() : register()">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input class="form-control" v-model="email" placeholder="Email" type="email" id="email">
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input class="form-control" v-model="password" placeholder="Password" type="password"
                                    id="password">
                            </div>
                            <div class="form-group" v-if="!isLogin">
                                <label for="name">Name</label>
                                <input class="form-control" v-model="name" placeholder="Name" type="text" id="name">
                            </div>
                            <button class="btn btn-primary" type="submit">
                                {{ isLogin ? "Let's go!" : "Confirm!" }}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.container {
    margin-top: 50px;
}

.card-header-pills .nav-link {
    cursor: pointer;
}

.card-header-pills .nav-link.active {
    background-color: var(--input-focus);
    color: rgb(0, 0, 0);
}

.card-body {
    padding: 20px;
}

.form-group {
    margin-bottom: 20px;
}

.btn-primary {
    width: 100%;
}
</style>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            isLogin: true,
            name: '',
            email: '',
            password: '',
        };
    },
    methods: {
        register() {

            axios.post('http://localhost:8000/api/auth/register', {
                name: this.name,
                email: this.email,
                password: this.password,

            })
                .then(response => {

                    alert('that acout is creat section ');

                })
                .catch(error => {
                    console.log(error.response.data);
                    alert('problem in creat acount');

                })
        },
        login() {

            axios.post('http://localhost:8000/api/auth/login', {
                email: this.email,
                password: this.password,
            })
                .then(response => {
                    this.$router.push({ name: '/' });
                })
                .catch(error => {
                    console.error(error);
                })
        }
    }
    //   validateName(name) {
    //   if (!name) {
    //     return "Name is required";
    //   }
    //   // Add more specific validation logic and error messages as needed
    //   return null; // No error
    // },
    // validateEmail(email) {
    //   if (!email) {
    //     return "Email is required";
    //   }
    //   // Add more specific validation logic and error messages as needed
    //   return null; // No error
    // },
    // validatePassword(password) {
    //   if (!password) {
    //     return "Password is required";
    //   }
    //   // Add more specific validation logic and error messages as needed
    //   return null; // No error
    // }


}

</script>