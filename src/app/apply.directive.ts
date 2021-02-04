import { Directive,ElementRef,OnInit } from '@angular/core';

@Directive({
  selector: '[appApply]'
})
export class ApplyDirective {

  constructor(private elementref: ElementRef) { }

  ngOnInit(): void {
    this.elementref.nativeElement.style.backgroundcolor = 'blue';
  //this.elementref.nativeElement.setStyle.backgroundColor = "red";
    //nativeelement is a property
  //  this.renderer.setStyle(
//  this.elementref.nativeElement.setStyle(backgroundColor: "red"):

}

}
