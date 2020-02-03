<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <form>
                        <div>
                            <input type="text" placeholder="First Name" v-model.lazy="firstname">
                        </div>
                        <div>
                            <input type="text" placeholder="Last Name" v-model.lazy="lasttname">
                        </div>
                        <div>
                            <fullName v-model="fullValidName"></fullName>
                        </div>
                        <div>
                            <input type="email" placeholder="email" v-model.lazy="email" >
                        </div>
                        <div>
                            <input type="password" v-model.lazy="password">
                        </div>
                        <div>
                            <label >Save data?</label>
                            <div>
                                <input type="radio" v-model="data" value="yes"> <span>Yes</span>
                            </div>
                            <div>
                                <input type="radio" v-model="data" value="no"> <span>No</span>
                            </div>
                        </div>
                        <div>
                            <button>Submit</button>
                        </div>
                        
                    </form>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>First Name: {{firstname}}</p>
                        <p>Last Name: {{lastname}}</p>
                        <p>Full Name: </p>
                        <p>Mail: {{email}} </p>
                        <p>Password: {{password}} </p>
                        <p>Store in Database?: {{data}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './Fn.vue';
    export default {
        components: {
            fullName: FullName
        },
        data() {
            return {
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                data: 'yes',
                fullValidName: ''
            }
        },
        computed: {
            getName() {
                this.fullValidName =  this.firstname + " " + this.lastname;
            }
        }
    }
</script>

<style>
</style>
