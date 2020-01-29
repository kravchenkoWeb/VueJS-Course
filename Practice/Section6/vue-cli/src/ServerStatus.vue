<template>
  <div>
    <h1>Server stats: {{status}}</h1>
    <hr />
    <button @click="setStatus">Change</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      status: "Critical"
    };
  },
  methods: {
    setStatus() {
      this.status = "Normal";
    }
  }
};
</script>