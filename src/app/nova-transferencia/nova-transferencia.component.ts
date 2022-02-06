import { Transferencia } from './../models/transferencias.model';
import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTrasnferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;
  transferencia: any;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    console.log('solicitad nova tranferencia');

    const valorEmitir = { valor: this.valor, destino: this.destino };

    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos();
        this.router.navigateByUrl('extrato');
      },
      (error) => console.log(error)
    );
      return this.limparCampos;

  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
