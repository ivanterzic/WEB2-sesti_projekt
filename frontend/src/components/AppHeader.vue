<template>
  <header class="app-header">
    <a href="/"> <h1 class="app-title">Higher or Lower</h1></a>
    <div class="mode-buttons">
      <button class="mode-button" @click="$emit('changeMode', 'timed')">Timed Game</button>
      <button class="mode-button" @click="$emit('changeMode', 'untimed')">Untimed Game</button>
    </div>
  </header>
  
</template>
  
  <script>
  export default {
    name: 'AppHeader',
  }
  </script>
  
  <style scoped>
    .app-header {
      display: flex;
      justify-content: space-around;
      padding: 20px;
      background-color: #f8f9fa;
      border-bottom: 1px solid #dee2e6;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;

    }

    .mode-buttons {
      display: flex;
      gap: 10px;
    }

    .app-title {
    font-size: 24px;
    color: #333;
  }
    
    .mode-button {
      padding: 10px 20px;
      font-size: 16px;
      color: #495057;
      background-color: #ffffff;
      border: 1px solid #ced4da;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      margin-left: 5px;
      margin-right: 5px;
    }
    
    .mode-button:hover {
      background-color: #e9ecef;
    }

    a {
      text-decoration: none;
    }
  </style>