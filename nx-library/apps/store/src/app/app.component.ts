import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CountrySelectorComponent } from 'ngc-form-controls';

@Component({
  imports: [
    CountrySelectorComponent,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'store';

  country = 'JM';

  countryControl: FormControl = new FormControl('HU');
}
