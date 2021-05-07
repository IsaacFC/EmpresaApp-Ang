import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/shared/cliente.model';
import { ClienteService } from 'src/app/shared/cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styles: [
  ]
})
export class ClienteFormComponent implements OnInit {


  constructor(public service: ClienteService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if (this.service.formData.clienteId == 0) 
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form:NgForm){
    this.service.postCliente()
    .subscribe(
      res=>{
        console.log(res);
        
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Datos del Cliente Registrados Exitosamente ', 'Cliente Registrado');
      },
      err =>{

      }
    );
  }

  updateRecord(form:NgForm) {
    this.service.putCliente()
    .subscribe(
      res=>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Datos del Cliente Actualizados Exitosamente', 'Cliente Actualizado');
      },
      err =>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.error('Error al actualizar cliente', err.message);

      }
    );
  }
  
  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new Cliente();
  }
}
