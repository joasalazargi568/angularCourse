import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit{
  
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebunce: EventEmitter<string> = new EventEmitter();


  termino : string = '';

  @Input() placeholder: string = '';
  
  debouncer: Subject<string> = new Subject();

  ngOnInit(): void {
    this.debouncer.pipe(
      debounceTime(300)
    ).subscribe( valor =>{
      this.onDebunce.emit(valor);
    })
  }

  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada (){
    this.debouncer.next(this.termino);
  }

}
