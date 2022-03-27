import { useEffect } from 'react';

const useSound = (sound: string, depedencies?: any) => {
  useEffect(() => {
    const audio = new Audio(sound);
    audio.play();
  }, [depedencies]);
};
export default useSound;
