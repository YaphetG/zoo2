import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'category',
    pure: false
})
export class CategoryPipe implements PipeTransform {
    public transform(items: any[], filter: string): any {
        if ( !items || !filter) {
            return items;
        }
       const filtered = items.filter(item => item.class === filter );
       return filtered;
    }
}
