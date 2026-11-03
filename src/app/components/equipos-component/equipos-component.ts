import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceEquipos } from '../../services/service.equipos';
import { Equipo } from '../../models/equipo';

@Component({
  selector: 'app-equipos-component',
  standalone: false,
  styleUrl: './equipos-component.css',
  templateUrl: './equipos-component.html',
})
export class EquiposComponent implements OnInit {
  public equipos!: Array<Equipo>;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceEquipos
  ){}
  
  async ngOnInit(): Promise<void> {
    this.equipos = await this._service.getEquiposAsync();
    this._cdr.detectChanges();
  }
}
