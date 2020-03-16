import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NoiseService } from '../noise.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  remaining: number;

  @Input() disabled: boolean;
  @Input() exercise: string;
  @Input() duration: number;
  @Input() count: boolean;

  @Output() completed = new EventEmitter<boolean>();
  countdown: any;
  starting = false;
  counting = false;
  currentAudio: HTMLAudioElement;

  constructor(private noiseService: NoiseService) {
  }

  ngOnInit(): void {
    this.remaining = this.duration;
  }

  get formattedRemaining(): string {
    const rem = '00' + this.remaining.toString();
    return this.duration > 0 ? rem.substring(rem.length - 2) : '';
  }

  start = async () => {
    if (!this.count) {
      await this.noiseService.utter(`${this.exercise}, 3, 2, 1, GO!`);
      return;
    }

    if (this.starting) { return; }
    if (this.countdown > 0) { return; }
    this.starting = true;

    if (this.remaining < this.duration) {
      this.remaining = this.remaining - 1;
      this.counting = true;
    } else {
      await this.noiseService.utter(`${this.exercise}, 3, 2, 1, GO!`);

      // await this.playSound('countdown', 2.1);
      this.remaining = this.duration - 1;
      this.counting = true;
    }
    this.countdown = setInterval(async () => {
      this.starting = false;
      if (this.remaining === 0) {
        clearInterval(this.countdown);
        this.counting = false;
        this.remaining = this.duration;
        await this.noiseService.play('airhorn');
        this.completed.emit(true);
      } else {
        this.remaining--;
      }
    }, 1000);
  }

  pause = () => {
    this.counting = false;
    clearInterval(this.countdown);
    this.countdown = null;
  }

  // speak = async (text: string) => {
  //   const utterance = new SpeechSynthesisUtterance();
  //   return new Promise((resolve) => {
  //     utterance.onend = resolve;
  //     utterance.lang = 'en-UK';
  //     utterance.volume = 1.0; // 0.0 to 1.0, float
  //     utterance.pitch = 2.0; // 0.0 to 2.0, float
  //     utterance.text = text;
  //     window.speechSynthesis.speak(utterance);
  //   });
  // }

  // playSound = async (file: string, startAt: number = 0) => {
  //   return new Promise((resolve) => {
  //     const soundFile = '../assets/audio/' + file + '.mp3';
  //     this.currentAudio = new Audio(soundFile);
  //     this.currentAudio.load();
  //     this.currentAudio.currentTime = startAt;
  //     this.currentAudio.play();
  //     this.currentAudio.onended = () => {
  //       resolve(true);
  //     };
  //   });
  // }

}
