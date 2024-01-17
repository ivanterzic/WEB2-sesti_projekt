URL aplikacije:
Git repozitorij: 
1. interpolation/one-way binding - Da, frontend/src/components/TimedGame.vue, linija 3 (varijabla score kao primjer, samo u toj datoteci ima još primjera)
two-way binding - Da, frontend/src/components/TimedGame.vue, linija 27 (varijabla playerName, sve slično kao u TimedGame ima i u UntimedGame)
methods - Da, frontend/src/components/TimedGame.vue, linija 82 (analogno i u UntimedGame, metode su startGame, guess, endGame, pushScore)
computed properties - Da, frontend/src/components/TimedGame.vue, linija 69 (opet analogno i u UntimedGame, imamo highScore, highScorePlayer i formattedTimeLeft)
barem jedan scoped style -  Da, frontend/src/components/TimedGame.vue, linija 140 (opet analogno i u UntimedGame) te u frontend/src/components/AppHeader.vue, linija 18
koristiti barem jedan lifecycle hook -  Da, frontend/src/components/TimedGame.vue. linija 134 (opet analogno i u UntimedGame) te frontend/src/App.vue, linija 29
routing (više stranica)
aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i moj-web.com/stranica1, moj-web.com/stranica2)
dinamičko usmjeravanje s 404 stranicom ("catch all")
(barem) dvije komponente
komponenta bez stanja, koristiti properties
komponenta sa stanjem
barem jedna komponenta mora emitirati barem jedan event
store (Pinia)
asinkroni dohvat podataka s backenda