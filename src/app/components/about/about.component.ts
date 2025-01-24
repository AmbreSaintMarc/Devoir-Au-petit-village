import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  @Input() id!: string

  ngOnInit() {
    console.log(this.id)
  }
}
