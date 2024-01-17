<template>
  <div class="game-container">
    <button class="game-button red">Previous <span class="arrow">&#8592;</span></button>
    <button class="game-button green">Next <span class="arrow">&#8594;</span></button>
  </div>
</template>

<style scoped>
  .game-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid #897a7a;
    border-radius: 10px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 1.2rem;
    background-color: #f4f4f4;
  }

  .game-button {
    padding: 10px 20px;
    margin: 10px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .game-button.red {
    background-color: #f44336;
  }

  .game-button.green {
    background-color: #4caf50;
  }

  .arrow {
    margin-left: 5px;
  }
</style>