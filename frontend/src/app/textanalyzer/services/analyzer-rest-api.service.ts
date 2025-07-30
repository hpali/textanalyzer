import {Injectable} from '@angular/core';
import {TextAnalyzerService} from '../../core/generated-api';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalyzerRestApiService {

  constructor(private textAnalyzerService: TextAnalyzerService) {}

  /*analyze(type: string, input: string) {
    const request = { type: type, input: input};

    this.textAnalyzerService.analyzeText(request).subscribe({
      next: (response) => {
        console.log('Frequencies:', response);
      },
      error: (err) => {
        console.error('API error:', err);
      }
    });
  }*/


  analyze(type: string, input: string): Observable<{ [key: string]: number }> {
    const request = { type, input };
    return this.textAnalyzerService.analyzeText(request, 'body');
  }


}
