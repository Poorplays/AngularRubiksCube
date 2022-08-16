import { Injectable } from '@angular/core';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
@Injectable()
export class HammerConfig extends HammerGestureConfig {
  overrides = <any> {
    // allow swipe in all directions
    'swipe': { direction: 31 }
  };
}
