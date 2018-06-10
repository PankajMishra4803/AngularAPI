import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";


@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})


export class StarComponent implements OnChanges
{
@Input() rating:number;
@Output() ratingCLicked: EventEmitter<string> = new EventEmitter<string>();
starWidth:number;
title:string;
ngOnChanges()
{
    this.starWidth =this.rating*86/5;
}
onClick():void{
 this.ratingCLicked.emit(`The rating ${this.rating} was clicked`);
}
}