import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from '../shared/cliente.model';
import { ClienteService } from '../shared/cliente.service';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styles: [
  ]
})
export class ClienteComponent implements OnInit {
  searchValue:string;
  cc: ClienteFormComponent;


  constructor(public service: ClienteService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  
  populateForm(selectedRecord: Cliente)  {
    this.service.formData = Object.assign({}, selectedRecord);
  }
  
  onDelete(id: number) {
    if (confirm("¿Seguro que desea eliminar?")) {
      this.service.deleteCliente(id)
        .subscribe(
          res => {
            this.service.refreshList();
            this.toastr.error("Cliente eliminado")
          },
          err => {
            console.log(err);
           }
        )
    }
  }

}
