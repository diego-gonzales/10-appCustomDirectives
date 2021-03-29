import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appErrorMsg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {
  // VER SECCION 23 COMPLETA PARA ENTENDER MEJOR

  private _mesagge: string = 'Default Text';
  private _color: string = 'blue'; // valores por defecto que solo se tomaran si no se manda nada del padre

  myElementHTML: ElementRef<HTMLElement>;

  @Input() set mesaggeError ( value: string ) {
    this._mesagge = value; // Manera de usar el valor que viene de fuera y no usar directamente el setter, con esto ya seria un setter completo
    this.setText();
  };
  @Input() set mesaggeColor( value: string ) {
    this._color = value; // Manera de usar el valor que viene de fuera y no usar directamente el setter, con esto ya seria un setter completo
    this.setColor();
  };

  @Input() set invalid( value: boolean ) {
    value ? this.el.nativeElement.hidden = false // muestra el elemento HTML
          : this.el.nativeElement.hidden = true; // oculta el elemento HTML
  };
  

  constructor( private el: ElementRef<HTMLElement> ) {
    this.myElementHTML = el;
  }


  // Esta es una manera de cambiar en tiempo real los valores en una directiva pero no es la más optima, lo mejor es con inputs setters
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);

    // if (changes.mesaggeError) {
    //   const text = changes.mesaggeError.currentValue;
    //   this.myElementHTML.nativeElement.textContent = text;
    // }

    // if (changes.mesaggeColor) {
    //   const color = changes.mesaggeColor.currentValue;
    //   this.myElementHTML.nativeElement.style.color = color;
    // }
  }


  ngOnInit(): void {
    // Inicializando los metodos
    // console.log(this.mesaggeError); // undefined
    // console.log(this.mesaggeColor); // undefined

    // esto es el valor por defecto en caso no se le mande el mesaggeError y mesaggeColor en el padre
    // ya que los inputs setters solo se ejecutan cuando le llegan datos del padre, de lo contrario no
    this.setColor();
    this.setText();
    this.setClassFormText();
  }

  // Methods
  setColor() {
    this.myElementHTML.nativeElement.style.color = this._color;
  };
  
  setText() {
    this.myElementHTML.nativeElement.textContent = this._mesagge;
  };

  setClassFormText() {
    this.myElementHTML.nativeElement.classList.add('form-text');
  };

}
