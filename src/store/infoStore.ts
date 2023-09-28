import { create } from 'zustand';

// This is the store for the info of the game
// It contains the highscore and the current score
// It also contains the functions to set the highscore and the current score
// It will save the data to the local storage, so it will be saved even if the user closes the browser
const useInfoStore = create((set) => ({
	highscore: 0,
	setHighscore: (highscore: number) => set({ highscore }),
	currentScore: 0,
	setCurrentScore: (currentScore: number) => set({ currentScore }),

	resetScore: () => set({ currentScore: 0 }),
}));
