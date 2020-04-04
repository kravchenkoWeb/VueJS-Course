<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" aria-controls="navbar" class="navbar-toggle collapsed">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link tag="a" class="navbar-brand router-link-exact-active router-link-active" to="/">Stock Trader</router-link>
      </div>
      <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <router-link to="/portfolio" tag="li"><a>Portfolio</a></router-link>
            
            <router-link to="/stocks" tag="li"><a>Stocks</a></router-link>
          </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#">End Day</a>
          </li>
          <li class="dropdown" 
              @click="menuOpened = !menuOpened">
            <a
              href="#"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              class="dropdown-toggle"
            >
              Save &amp; Load
              <span class="caret"></span>
            </a>
           <transition name="fade">
            <ul class="dropdown-menu"  v-if="menuOpened">
              <li>
                <a href="#">Save Data</a>
              </li>
              <li>
                <a href="#">Load Data</a>
              </li>
            </ul>
        </transition>
          </li> 
          <li>
            <p class="navbar-text">
              <strong>Funds: $ {{funds}}</strong>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        menuOpened: false,
        funds: this.$store.state.funds
      }
    }
  };
</script>

<style>
    nav {
      margin-top: 40px;
      margin-bottom: 40px;
    }
    .dropdown-menu {
      display: block;
    }
    .fade-enter {
      opacity: 0;
    } 
    .fade-enter-active {
      transition: all .8s;
      animation: slideIn .10s;
    } 
    .fade-leave-active {
      transition: all .8s;
      opacity: 0;
      transform: translateY(-25%);
    }

    @keyframes slideIn {
      from {
        transform: translateY(-10%);
      } 
      to {
        transform: translateY(0);
      }
    }
</style>