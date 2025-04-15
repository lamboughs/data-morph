import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SourceObjectComponent } from './components/source-object/source-object.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SourceObjectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-morph';
}
