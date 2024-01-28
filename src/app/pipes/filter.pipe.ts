import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, args: any): any {

      // Si no se proporciona ningún valor para filtrar, devolver el array original sin cambios.
    if (!args) {
      return value;
    } else {
      // Si encuentra el valor proporcionado, filtra las coincidencias aproximadas.
      const resultFilter = [];
      for (const champs of value) {
        if (champs.name.toLowerCase().indexOf(args.toLowerCase()) > -1) {
          resultFilter.push(champs);
        }
      }

      return resultFilter;
    }
  }
}
