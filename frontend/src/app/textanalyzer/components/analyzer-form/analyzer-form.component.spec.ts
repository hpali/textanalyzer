import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AnalyzerFormComponent} from './analyzer-form.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('AnalyzerFormComponent', () => {
  let component: AnalyzerFormComponent;
  let fixture: ComponentFixture<AnalyzerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        NoopAnimationsModule, //
        AnalyzerFormComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
