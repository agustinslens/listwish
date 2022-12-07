import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  listas: any[] = [];
  constructor(
    public deseosService: DeseosService,
    private router: Router,
    private alertController: AlertController
  ) {
    this.listas = this.deseosService.listas;
    console.log(this.listas);
  }
  async agregarLista() {
    //  this.router.navigateByUrl('/tabs/tab1/agregar')

    const alert = await this.alertController.create({
      header: 'Nueva Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('cancelar');
          },
        },
        {
          text: 'Crear',
          handler: (data) => {
            console.log(data);
            if (data.titulo.length === 0) return;
            this.deseosService.crearLista(data.titulo)
          },
        },
      ],
    });

    alert.present();
  }
}
