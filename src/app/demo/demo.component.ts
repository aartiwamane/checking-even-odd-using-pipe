import { Component } from '@angular/core';
import { CheckPipe } from '../check.pipe';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CheckPipe],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{

}
