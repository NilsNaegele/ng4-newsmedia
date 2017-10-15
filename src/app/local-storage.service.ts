import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  localStorage: any;

  constructor() {
    if (!localStorage) {
      throw new Error('Your current browser does not support Local Storage');
    }
    this.localStorage = localStorage;
  }

  set(key: string, value: string): void {
    this.localStorage[key] = value;
  }

  get(key: string): string {
    return this.localStorage[key] || false;
  }

  setArray(key: string, value: any): void {
    this.localStorage[key] = JSON.stringify(value);
  }

  getArray(key: string): any {
    return JSON.parse(this.localStorage[key] || '[]');
  }

  setObject(key: string, value: any): void {
    this.localStorage[key] = JSON.stringify(value);
  }

  getObject(key: string): any {
    return JSON.parse(this.localStorage[key] || '{}');
  }
}
