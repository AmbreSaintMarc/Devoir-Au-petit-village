import { Injectable } from '@angular/core';


export type Product= {
  name: string;
  photo: string;
  price: number;
  description: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    { name: 'Figurine Astérix', id: 1, photo: './figurine-asterix-embleme.jpg', price: 75, description : 'Figurine emblématique du personnage Astérix faite à la main.'},
    { name: 'Figurine Obélix et Idéfix', id: 2, photo: './figurine-obelix-et-idefix-asterix-et-cleopatre.webp', price: 50, description : 'Figurine du personnage Obélix avec son chien Idéfix faite à la main.' },
    { name: 'Figurine Astérix et des albums', id: 3,  photo: './figurine-asterix-pile-d-albums.webp', price: 25, description : "Figurine du personnage Astérix avec une pile d'albums faite à la main." },
    { name: 'Figurine Obélix et des albums', id: 4,  photo: './figurine-obelix-pile-d-albums.webp', price: 100, description : "Figurine du personnage Obélix avec une pile d'albums faite à la main." }
  ]
  getProducts() {
    return this.products;
  }

  getProductsById(id: number): Product | undefined {
    return this.products.find((products) => products.id === id);

  }
}