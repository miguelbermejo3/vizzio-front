import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab-detalles',
  templateUrl: './tab-detalles.page.html',
  styleUrls: ['./tab-detalles.page.scss'],
})
export class TabDetallesPage implements OnInit {

  eventId: string | any;
  eventImg: string | any;
  eventFecha: string | any;
  eventNombre: string | any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.eventId = this.route.snapshot.paramMap.get('id');
    this.eventImg = this.route.snapshot.paramMap.get('img');
    this.eventFecha = this.route.snapshot.paramMap.get('fecha');
    this.eventNombre = this.route.snapshot.paramMap.get('nombre');
  }
}
