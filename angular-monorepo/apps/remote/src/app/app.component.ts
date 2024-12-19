import { Component, effect, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { RouterModule } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnChanges {
  title = 'remote';

  time = signal<string>('')

  time2 = ''

  constructor() {
    effect(() => {
      console.log(this.time())
    })
  }

  ngOnInit(): void {
      interval(1000).subscribe(() => {
        this.time.set(new Date().toString())
        this.time2 = new Date().toString()
      })
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes)
  }

  onClickHandler() {
    console.log('click')
  }
}
