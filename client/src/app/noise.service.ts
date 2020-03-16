import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoiseService {

  currentAudio: HTMLAudioElement;

  constructor() { }

  public utter = async (text: string) => {
    const utterance = new SpeechSynthesisUtterance();
    return new Promise((resolve) => {
      utterance.onend = resolve;
      utterance.lang = 'en-UK';
      utterance.volume = 1.0; // 0.0 to 1.0, float
      utterance.pitch = 2.0; // 0.0 to 2.0, float
      utterance.text = text;
      window.speechSynthesis.speak(utterance);
    });
  }

  public play = async (file: string, startAt: number = 0) => {
    const voices = window.speechSynthesis.getVoices();
    return new Promise((resolve) => {
      const soundFile = '../assets/audio/' + file + '.mp3';
      this.currentAudio = new Audio(soundFile);
      this.currentAudio.load();
      this.currentAudio.currentTime = startAt;
      this.currentAudio.play();
      this.currentAudio.onended = () => {
        resolve(true);
      };
    });
  }

}
