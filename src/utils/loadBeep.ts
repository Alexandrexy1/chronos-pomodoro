import gravitationalBeepFixed from "../assets/audios/gravitational_beep_fixed.mp3";

export function loadBeep() {
    const audio = new Audio(gravitationalBeepFixed);
    audio.load();

    return () => {
        audio.currentTime = 0;
        audio.play();
    }
}