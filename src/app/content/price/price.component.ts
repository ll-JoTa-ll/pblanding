import { Component } from '@angular/core';

@Component({
    selector: 'app-pikbik-price',
    templateUrl: './price.component.html'
})
export class PikbikPriceComponent {

    title = 'price';
    view2CategPrice = false;
    precio = 0;

    calculatePrice(dias) {
        if (dias === 0) {
            this.view2CategPrice = false;
            this.precio = 0;
        } else if (dias === '') {
            this.view2CategPrice = false;
            this.precio = 0;
        } else if (dias < 4) {
            this.view2CategPrice = false;
            this.precio = 0;
        } else if (dias > 30) {
            this.view2CategPrice = false;
            this.precio = 0;
        } else {
            this.view2CategPrice = true;
            const calculate = 45 + ((dias - 3) * ((1 - (0.02 * (dias - 3))) * 15));
            this.precio = Math.round(calculate);
        }
    }

    markBikerDefaul() {
        (<HTMLInputElement>document.getElementById('checkBiker')).checked = true;
    }
}
