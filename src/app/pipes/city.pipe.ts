import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'city'
})
export class CityPipe implements PipeTransform{
    transform(value: string){
        return "City Name: "+value;
    }
}