<template>
  <div class="game-container" v-if="citiesLoaded">
    <p>Score: {{ score }}</p>
    <p>Time left: {{ formattedTimeLeft }}</p>
    <div>
      <div>
        Previous: {{ currentCity?.name }} - Population: {{ currentCity?.population }}
      </div>
      <div>
        Current: {{ nextCity?.name }} <span v-if="hasGuessed && !isCorrect">- Population: {{ nextCity?.population }}</span>
      </div>
    </div>
    <div>
      <button class="game-button red" @click="guess('lower')" :disabled="!isCorrect">Lower</button>
      <button class="game-button green" @click="guess('higher')" :disabled="!isCorrect">Higher</button>
    </div>
    
    <div v-if="hasGuessed">
      <div v-if="isCorrect">
        Correct!
      </div>
      <div v-else>
        Incorrect! 
        <hr>
        Game Over. High Score: {{ highScore }} set by player {{ highScorePlayer }}
        <br>
        <input v-model="playerName" placeholder="Enter your name" />
        <button class="game-button reset" @click="pushScore" :disabled="playerName === '' || playerNamePushed">Confirm</button>
        <br>
        <button class="game-button reset" @click="startGame">Play Again</button>
        <div>
          <h2>Top 10 Players</h2>
          <ol>
            <li v-for="(player, index) in topPlayers" :key="index">
              {{ player.name }} - {{ player.score }}
            </li>
          </ol>
        </div>
      </div>
      </div>
    </div>    
</template>

<script>
import { useStore } from '../store'
export default {
  
  data() {
    return {
      currentCity: undefined,
      nextCity: undefined,
      hasGuessed: false,
      isCorrect: true,
      score: 0,
      timeLeft: 20,
      playerName: '',
      playerNamePushed: false,
      topPlayers: JSON.parse(localStorage.getItem('topPlayers')) || [],
      citiesLoaded: false,  
    };
  },
  computed: {
    highScore() {
      return this.topPlayers[0]?.score || 0;
    },
    highScorePlayer() {
      return this.topPlayers[0]?.name || '';
    },
    formattedTimeLeft() {
      const minutes = Math.floor(this.timeLeft / 60);
      const seconds = this.timeLeft % 60;
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    },
    cities() {
      const store = useStore()
      return store.cities
    },
  },
  methods: {
    startGame() {
      this.hasGuessed = false;
      this.isCorrect = true;
      this.score = 0;
      this.currentCity = this.cities[Math.floor(Math.random() * this.cities.length)];
      this.nextCity = this.cities[Math.floor(Math.random() * this.cities.length)];
      this.citiesLoaded = true;
      this.timeLeft = 20;
      this.timer = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.endGame();
        }
      }, 1000);
      
      this.playerNamePushed = false;
    },
    guess(direction) {
      if (!this.hasGuessed) this.hasGuessed = true;
      if ((direction === 'higher' && this.nextCity.population >= this.currentCity.population) ||
          (direction === 'lower' && this.nextCity.population <= this.currentCity.population)) {
        this.isCorrect = true;
        this.score++;
      } else {
        this.isCorrect = false;
        this.endGame();
        return;
      }
      this.currentCity = this.nextCity;
      this.nextCity = this.cities[Math.floor(Math.random() * this.cities.length)];
    },
    endGame() {
      clearInterval(this.timer);
      const bestScore = localStorage.getItem('timedBestScore');
      if (!bestScore || this.score > bestScore) {
        localStorage.setItem('timedBestScore', this.score);
        localStorage.setItem('timedBestPlayer', this.playerName);
      }
    },
    pushScore() {
      const players = JSON.parse(localStorage.getItem('topPlayers')) || [];
      players.push({ name: this.playerName, score: this.score });
      players.sort((a, b) => b.score - a.score);
      if (players.length > 10) {
        players.length = 10;
      }
      localStorage.setItem('topPlayers', JSON.stringify(players));
      this.topPlayers = players;
      this.playerNamePushed = true; 

    }
  },
  async created() {
    const store = useStore()
    await store.fetchCities()
    this.startGame();
  },
}
</script>

<style scoped>
  .game-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid #897a7a;
    border-radius: 10px;
    font-family:Georgia, 'Times New Roman', Times, serif;
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

  .game-button.reset {
    background-color: #2196f3;
  }

  .game-button:disabled {
    opacity: 0.3;
  }

</style>
