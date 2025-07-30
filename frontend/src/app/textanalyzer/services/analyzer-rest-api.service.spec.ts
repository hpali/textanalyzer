import {TestBed} from '@angular/core/testing';
import {AnalyzerRestApiService} from './analyzer-rest-api.service';
import {Observable, of} from 'rxjs';
import {TextAnalyzerService} from '../../core/generated-api';

describe('AnalyzerRestApiService', () => {
  let service: AnalyzerRestApiService;
  let textAnalyzerServiceSpy: jasmine.SpyObj<TextAnalyzerService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('TextAnalyzerService', ['analyzeText']);
    TestBed.configureTestingModule({
      providers: [
        AnalyzerRestApiService,
        { provide: TextAnalyzerService, useValue: spy }
      ]
    });
    service = TestBed.inject(AnalyzerRestApiService);
    textAnalyzerServiceSpy = TestBed.inject(TextAnalyzerService) as jasmine.SpyObj<TextAnalyzerService>;
  });

  it('should call analyzeText() with type=vowels and input=Hello parameters', (done) => {
    const type = 'vowels';
    const input = 'Hello';
    const expectedRequest = { type, input };
    const mockResponse =  { A: 2, E: 1 }

    textAnalyzerServiceSpy.analyzeText.and.returnValue(
      of(mockResponse) as unknown as Observable<any>
    );


    service.analyze(type, input).subscribe(result => {
      expect(textAnalyzerServiceSpy.analyzeText as any).toHaveBeenCalledWith(expectedRequest, 'body');

      expect(result).toEqual(mockResponse);
      done();
    });
  });

});
