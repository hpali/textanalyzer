import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {FloatLabel} from 'primeng/floatlabel';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {InputMaskModule} from 'primeng/inputmask';
import {CommonModule} from '@angular/common';
import {AnalyzerService} from '../../services/analyzer.service';
import {SelectButton} from 'primeng/selectbutton';
import {AnalyzerRestApiService} from '../../services/analyzer-rest-api.service';
import {CheckboxModule} from 'primeng/checkbox';
import {MessageService} from 'primeng/api';
import {Toast} from 'primeng/toast';

@Component({
  selector: 'app-analyzer-form',
  imports: [CommonModule, CheckboxModule, ReactiveFormsModule, FormsModule, SelectButton, InputMaskModule, FloatLabel, PanelModule, ButtonModule, InputTextModule, Toast],
  providers: [
    MessageService
  ],
  templateUrl: './analyzer-form.component.html',
  styleUrl: './analyzer-form.component.scss'
})
export class AnalyzerFormComponent {

  checked: boolean = false;
  textForAnalyze: string ="";
  type : string = "vowels";

  results: Array<{ type: string; text: string; result: Record<string, number> }> = [];
  options: any[] = [
    { label: 'Vowels', value: 'vowels' },
    { label: 'Consonants', value: 'consonants' },
    { label: 'Not Vowels', value: 'nonaeiou' },
  ];

  constructor( private analyzerService: AnalyzerService,
               private analyzerServiceRestApi : AnalyzerRestApiService,
               private messageService: MessageService) {}

  analyzerTP(): void {
    if (!this.type) {
      console.warn('Analysis type is null or undefined.');
      return;
    }

    const analysis = this.analyzerService.analyze(this.type, this.textForAnalyze);
    console.log("Local  analysis result: " + this.results.length);
    this.results.push({
      type: this.type,
      text: this.textForAnalyze,
      result: analysis,
    });
  }

  analyzerRestApi(): void {
    if (!this.type) {
      console.warn('Analysis type is null or undefined.');
      return;
    }

    this.analyzerServiceRestApi.analyze(this.type, this.textForAnalyze).subscribe({
      next: (data: Record<string, number>) => {
        this.results.push({
          type: this.type,
          text: this.textForAnalyze,
          result: data,
        });
        console.log("Rest Api analysis result: " + this.results.length);
      },
      error: (err) => {
        console.error('API error:', err);
      }
    });
  }

  analyzer(): void {

    if (!this.type) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Missing Type',
        detail: 'Please select an analysis type.',
        life: 3000
      });
      return;
    }

    if (this.checked) {
      this.analyzerTP();
    } else {
      this.analyzerRestApi();
    }
  }

}
