import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-componente',
  templateUrl: './p-componente.component.html',
  styleUrls: ['./p-componente.component.css']
})
export class PComponenteComponent implements OnInit {

  nome: string;
  arrayValores = ['Hugo', 'Augusto', 'Marcos', 'Benício', 'Sofhia', 12,8,6]
  constructor() { }

  ngOnInit(): void {
    //this.nome = 'Camilla Araujo';
  }

    passarValor(nomePassado:string){
      this.nome = nomePassado;
    }
}
