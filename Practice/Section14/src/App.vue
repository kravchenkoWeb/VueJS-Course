<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <br><br>
                <button class="btn btn-primary" @click="show = !show">Show alert</button>
                <br><br>

                <br>
                    <select v-model="selectedAnim">
                        <option value="fade">Fade</option>
                        <option value="slide">Slide</option>
                    </select>
                <br>

                <transition :name="selectedAnim">
                    <div class="alert alert-info" v-show="show">This is some info</div>
                </transition>
                <transition name="slide" type="animation" appear>
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>
                <transition 
                
                enter-active-class="animated bounce"
                leave-active-class="animated shake">
                    <div class="alert alert-info" v-if="show" >This is some info</div>
                </transition>
                <transition name="slide" type="animation" appear mode="out-in">
                    <div class="alert alert-info" v-if="show" key="info">This is some info</div>
                    <div class="alert alert-warning" v-else key="warning">This is some warning</div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="load = !load">Load / Remove element</button>
                <br><br>
                <!-- <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                @enter-cancelled="enterCancelled"
                
                @before-leave="beforeLeave"
                @leave="leave"
                @after-leave="afterLeave"
                @leave-cancelled="leaveCancelled"
                :css="false">
                    <div style="width: 100px; height: 100px; background-color: lightgreen;" v-if="load"></div>    
                </transition>  -->
                <button class="btn btn-primary" @click="selectedComp == 'app-success' ? selectedComp = 'app-danger' : selectedComp = 'app-success' ">Toggle</button>
               <br><br>
               <transition name="fade" mode="out-in">
                   <component :is="selectedComp"></component>
               </transition>
               <hr>
               <button class="btn btn-primary" @click="addItem">Add</button><br><br>
                <ul class="list-group">
                    <transition-group name="slide">
                                <li class="list-group-item"
                                v-for="(number, index) in numbers"
                                @click="removeItem(index)"
                                style="cursor: pointer;"
                                :key="number"> {{ number }}</li>
                    </transition-group>
                </ul>
               
            </div>
        </div>
    </div>
</template>

<script>
    import DangerAlert from './DangerAlert.vue';
    import SuccessAlert from './SuccessAlert.vue';
    export default {
        data() {
            return {
                load: true,
                show: false,
                selectedAnim: 'fade',
                elementWidth: 100,
                selectedComp: 'app-success',
                numbers: [1, 2, 3, 4, 5]
            }
        },
        methods: {
            addItem() {
                const pos = Math.floor(Math.random() * this.numbers.length);
                this.numbers.splice(pos, 0, this.numbers.length + 1);
            },
            removeItem(index) {
                this.numbers.splice(index, 1)
            },
            beforeEnter(el) {
                console.log('Before enter');
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';
            },
            enter(el, done) {
                console.log('Enter');
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth + round) * 10 + 'px';
                    round++;
                    if(round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            },
            afterEnter(el) {
                console.log('After enter');
            },
            enterCancelled(el) {
                console.log('Enter cancelled');
            },
            beforeLeave(el) {
                console.log('Before leave');
                this.elementWidth = 300;
                el.style.width = this.elementWidth + 'px';
            },
            leave(el, done) {
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - round) * 10 + 'px';
                    round++;
                    if(round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            },
            afterLeave(el) {
                console.log('After leave');
            },
            leaveCancelled(el) {
                console.log('Leave cancelled');
            }
        },
        components: {
            appDanger: DangerAlert,
            appSuccess: SuccessAlert
        }
    }
</script>

<style>
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 1s;
    }

    .fade-leave {
        /* opacity: 1; */
    }

    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }
    
    .slide-enter {
        opacity: 0;
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }

    .slide-leave {

    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
        position: absolute;
    }

    .slide-move {
        transition: transform 1s ease-in-out; 
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
    }
    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);
        }
    }
</style>
