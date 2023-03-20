import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ItemHistorico {
  id: number;
  data: string;
  descricao: string;
  valor: number;
}

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {
  private apiUrl = 'http://localhost:3000/historico';

  constructor(private http: HttpClient) {}

  getHistorico(): Observable<ItemHistorico[]> {
    return this.http.get<ItemHistorico[]>(this.apiUrl);
  }
}
