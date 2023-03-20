import { Component, OnInit } from '@angular/core';
import { HistoricoService, ItemHistorico } from '../historico.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {
  items: ItemHistorico[] = [];
  itemsToShow: number = 10;

  constructor(private historicoService: HistoricoService) {}

  ngOnInit(): void {
    this.historicoService.getHistorico().subscribe((items) => {
      this.items = items;
    });
  }

  showMoreItems(): void {
    if (this.itemsToShow === 10) {
      this.itemsToShow = this.items.length;
    } else {
      this.itemsToShow = 10;
    }
  }
}
