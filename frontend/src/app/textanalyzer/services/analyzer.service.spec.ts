import {TestBed} from '@angular/core/testing';
import {AnalyzerService} from './analyzer.service';

describe('AnalyzerService', () => {
  let service: AnalyzerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalyzerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct vowel counts for "HelloWorld!"', () => {
    const result = service.analyze('vowels', 'HelloWorld!');
    expect(result).toEqual({ a: 0, e: 1, i: 0, o: 2, u: 0 });
  });

  it('should return correct consonants counts for "HelloWorld!"', () => {
    const result = service.analyze('consonants', 'HelloWorld!');
    expect(result['H']).toBe(1);
    expect(result['L']).toBe(3);
    expect(result['W']).toBe(1);
    expect(result['R']).toBe(1);
    expect(result['D']).toBe(1);
    expect(result['G']).toBe(0);
  });

  it('should return correct nonaeiou counts for "HelloWorld!"', () => {
    const result = service.analyze('nonaeiou', 'HelloWorld!');
    expect(result['H']).toBe(1);
    expect(result['L']).toBe(3);
    expect(result['W']).toBe(1);
    expect(result['R']).toBe(1);
    expect(result['D']).toBe(1);
    expect(result['G']).toBe(0);
    expect(result['!']).toBe(1);
  });

  it('should return correct vowel counts for "AaEeOoIiUu!"', () => {
    const result = service.analyze('vowels', 'AaEeOoIiUu');
    expect(result).toEqual({ a: 2, e: 2, i: 2, o: 2, u: 2 });
  });

  it('should return correct consonants counts for "HhJjZzKkLl!"', () => {
    const result = service.analyze('consonants', 'HhJjZzKkLl!');
    expect(result['H']).toBe(2);
    expect(result['J']).toBe(2);
    expect(result['Z']).toBe(2);
    expect(result['K']).toBe(2);
    expect(result['L']).toBe(2);

  });


  it('should return correct nonaeiou counts for "HhJjZzKkLl!"', () => {
    const result = service.analyze('nonaeiou', 'HhJjZzKkLl!');
    expect(result['H']).toBe(2);
    expect(result['J']).toBe(2);
    expect(result['Z']).toBe(2);
    expect(result['K']).toBe(2);
    expect(result['L']).toBe(2);
    expect(result['!']).toBe(1);
  });

  it('should return zeroes for vowels when input is empty', () => {
    const result = service.analyze('vowels', '');
    expect(result).toEqual({ a: 0, e: 0, i: 0, o: 0, u: 0 });
  });

  it('should return zeroes for consonants when input is empty', () => {
    const result = service.analyze('consonants', '');
    expect(result['H']).toBe(0);
    expect(result['J']).toBe(0);
    expect(result['Z']).toBe(0);
    expect(result['K']).toBe(0);
    expect(result['L']).toBe(0);

  });

  it('should return zeroes for nonaeiou when input is empty', () => {
    const result = service.analyze('nonaeiou', '');
    expect(result['H']).toBe(0);
    expect(result['J']).toBe(0);
    expect(result['Z']).toBe(0);
    expect(result['K']).toBe(0);
    expect(result['L']).toBe(0);
    expect(result['!']).toBe(0);
  });

  it('should throw an error for unknown analysis type', () => {
    expect(() => service.analyze('invalidType', 'test')).toThrowError('Unknown analysis type: invalidType');
  });
});
