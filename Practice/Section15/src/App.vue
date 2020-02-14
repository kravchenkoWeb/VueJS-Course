<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label >User Name</label>
                    <input type="text" class="form-control" v-model="user.name">
                </div>
                <div class="form-group">
                    <label >Email</label>
                    <input type="email" class="form-control" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <hr>
                <input type="text" class="form-control" v-model="node">
                <br><br>
                <button class="btn btn-primary" @click="fetchData">Get Data</button>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item" :key="u" v-for="u in users">{{u.name}} | {{u.email}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    name: '',
                    email: ''
                },
                users: [],
                resource: {},
                node: 'data'
            };
        },
        methods: {
            submit() {
                // this.$http.post('', this.user)
                // .then(response => {
                //     console.log(response);
                // }, error => {
                //     console.log(error);
                // });
                this.resource.saveAlt(this.user);
            },
            fetchData() {
                // this.$http.get('')
                // .then(response => {
                //     return response.json();
                // })
                // .then(data => {
                //     const resultArr = [];
                //     for(let key in data) {
                //         resultArr.push(data[key]);
                //     }
                //     this.users = resultArr;
                // });
                this.resource.getData({node: this.node})
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    const resultArr = [];
                    for(let key in data) {
                        resultArr.push(data[key]);
                    }
                    this.users = resultArr;
                });
            }
        },
        created() {
            const customActions = {
                saveAlt: {
                    method: "POST", 
                    url: 'alternative.json'
                },
                getData: {
                    method: 'GET'
                }
            }
            this.resource = this.$resource('{node}.json', {}, customActions);
        }
    }
</script>

<style>
</style>
