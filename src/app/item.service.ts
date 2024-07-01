import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



interface Item {
  name: string;
  description: string;
}
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'http://localhost:5000/items';

  constructor(private http: HttpClient) { 
    
  }
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.apiUrl, item);
  }
}