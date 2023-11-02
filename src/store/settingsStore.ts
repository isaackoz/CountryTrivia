import { create } from "zustand"

// This is the store for the info of the game
// It contains the highscore and the current score
// It also contains the functions to set the highscore and the current score
// It will save the data to the local storage, so it will be saved even if the user closes the browser
// Stores the settings states for using lives and difficulty

interface SettingsState {
    isHard: boolean
    isLivesEnabled: boolean
    toggleDifficulty: (bool: boolean) => void
    toggleLives: (bool: boolean) => void
}

export const useSettingsStore = create<SettingsState>()((set)=>({
	isHard: false,
	isLivesEnabled: true,

	toggleDifficulty: (bool: boolean) => set(()=>({isHard: bool})),
	toggleLives: () => set((state)=>({isLivesEnabled: !state.isLivesEnabled}))

}))