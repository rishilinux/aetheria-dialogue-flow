
/**
 * Sound effects utility for managing and playing audio in the application
 */

// Sound effect constants
const SOUNDS = {
  BOOT_UP: new Audio('/sounds/boot-up.mp3'),
  SUCCESS: new Audio('/sounds/success.mp3'),
  CLICK: new Audio('/sounds/click.mp3'),
  MESSAGE: new Audio('/sounds/message.mp3'),
  TRANSITION: new Audio('/sounds/transition.mp3'),
};

// Preload all sounds
export const preloadSounds = () => {
  Object.values(SOUNDS).forEach(audio => {
    audio.load();
  });
};

// Set volume for all sounds
export const setVolume = (volume: number) => {
  Object.values(SOUNDS).forEach(audio => {
    audio.volume = Math.max(0, Math.min(1, volume));
  });
};

// Play a specific sound
export const playSound = (soundName: keyof typeof SOUNDS) => {
  const sound = SOUNDS[soundName];
  if (sound) {
    sound.currentTime = 0; // Reset to start
    sound.play().catch(error => {
      console.error('Error playing sound:', error);
    });
  }
};

// Stop a specific sound
export const stopSound = (soundName: keyof typeof SOUNDS) => {
  const sound = SOUNDS[soundName];
  if (sound) {
    sound.pause();
    sound.currentTime = 0;
  }
};

export default {
  playSound,
  stopSound,
  setVolume,
  preloadSounds,
};
