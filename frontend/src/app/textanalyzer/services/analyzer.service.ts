import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyzerService {

  private readonly vowelsSet = new Set(['a', 'e', 'i', 'o', 'u']);

  private analyzers: Record<string, (input: string) => Record<string, number>> = {
    vowels: this.countVowels.bind(this),
    consonants: this.countConsonants.bind(this),
    nonaeiou: this.countNotVowels.bind(this),
  };

  private countVowels(input: string): Record<string, number> {
    const counts: Record<string, number> = { a: 0, e: 0, i: 0, o: 0, u: 0 };

    for (const char of input.toLowerCase()) {
      if (this.vowelsSet.has(char)) {
        counts[char]++;
      }
    }

    return counts;
  }

  private countConsonants(input: string): Record<string, number> {
    const counts: Record<string, number> = {};

    for (let code = 32; code <= 126; code++) {
      const char = String.fromCharCode(code);
      const lowerChar = char.toLowerCase();

      if ( /^[a-zA-Z]$/.test(char) && !this.vowelsSet.has(lowerChar)) {
        counts[char.toUpperCase()] = 0;
      }
    }

    for (const char of input) {
      const upperChar = char.toUpperCase();
      if (counts.hasOwnProperty(upperChar)) {
        counts[upperChar]++;
      }
    }

    return counts;
  }

  private countNotVowels(input: string): Record<string, number> {
    const counts: Record<string, number> = {};

    for (let code = 32; code <= 126; code++) {
      const char = String.fromCharCode(code);
      const lowerChar = char.toLowerCase();

      if (!this.vowelsSet.has(lowerChar)) {
        counts[char.toUpperCase()] = 0;
      }
    }

    for (const char of input) {
      const upperChar = char.toUpperCase();
      if (counts.hasOwnProperty(upperChar)) {
        counts[upperChar]++;
      }
    }

    return counts;
  }

  public analyze(type: string, input: string): Record<string, number> {
    const analyzer = this.analyzers[type];
    if (!analyzer) {
      throw new Error(`Unknown analysis type: ${type}`);
    }
    return analyzer(input);
  }


}
