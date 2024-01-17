<template>
    <div>
      <h3>Welcome to the Higher Lower game</h3>
      <router-link to="/timed">Go to Timed Game</router-link>
      <br>
      <router-link to="/untimed">Go to Untimed Game</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
  };
  </script>
  
  <style scoped>
  h1 {
    color: blue;
  }
  </style>