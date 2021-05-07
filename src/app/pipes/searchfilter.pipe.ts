import { Pipe, PipeTransform } from '@angular/core';
import { Cliente } from '../shared/cliente.model';
import { ClienteService } from '../shared/cliente.service';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {
  
  
  transform(list: Cliente[], searchValue: string): Cliente[] {
    if (!list || !searchValue){
      return list;
    }
    return list.filter(obj => 
      obj.nombre.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      || obj.rfc.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      || obj.estado.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      || obj.municipio.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      || obj.direccion.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );
      
   }

}
