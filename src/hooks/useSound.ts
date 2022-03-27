import { useEffect } from 'react';

const useSound = (sound: string) => {
  useEffect(() => {
    const audio = new Audio(sound);
    audio.play();
  }, []);
};
export default useSound;
