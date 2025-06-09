import { AfterViewInit, Component, DoCheck, ElementRef, EventEmitter, Input, input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SectionComponentComponent } from './section-component/section-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from './task/task.component';  

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent { // implements OnInit,OnChanges,DoCheck,AfterViewInit,OnDestroy
  // @Input() title = "We are Using Angular";
  // @Output() myEvent = new EventEmitter<void>();
  // @ViewChild('box',{static:true}) box!:ElementRef<HTMLInputElement>;
  // //Here saying elements will be directly get by HTML input
  // private timeId!: number;
  // Date= Date;


  //   getCurrentTimestamp(): string {
  //   return 'clicked @' + Date.now();
  // }

  // constructor() {
  //   console.log(`constructor`);
  // }

  // ngOnInit(): void {
  //   console.log(`OnInit will start timer`);
  //   this.timeId = window.setInterval(() => console.log("time"), 2000);
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(`Onchanges`, changes);
  // }

  // ngDoCheck(): void {
  //   console.log(`DoCheck will check every time`);
  // }

  // ngAfterViewInit(): void {
  //   console.log(`After view init will get the element`);
  //   this.box.nativeElement.focus();
  // }

  // ngOnDestroy(): void {
  //   console.log(`On destory will clear the interval`);
  //   window.clearInterval(this.timeId);
  // }

  //  name = "Kaustubh";

  // img = '5e8f3769652154c09064e81af4ea0f8a.jpg'

  // inputDisplay():void{
  //   alert("This is your Event Binding")
    
  // }

  // Name = "";

  //==============================================

  // title = 'taskbuddy';

  //===============================================

  title = 'bill-splitter';


}
