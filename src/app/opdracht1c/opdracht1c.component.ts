import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/models/item.model';
import { ItemService } from '../shared/services/item.service';

@Component({
  selector: 'app-opdracht1c',
  templateUrl: './opdracht1c.component.html',
  styleUrls: ['./opdracht1c.component.css']
})
export class Opdracht1cComponent implements OnInit {
  items!: Item[];

  // constructor() {
  //   this.title = 'Exercise 2';
  //   this.items = [];
  //     // new Item(1, 'Cook diner', false),
  //     // new Item(2, 'Water plants', false),
  //     // new Item(3, 'Feed the cat', true)
  // }

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.items = this.itemService.getItems();
  }

  filterItemsDone(isdone: boolean): Item[] {
    return this.items.filter(e=>e.done==isdone);
  }

  changeStatus(item: Item) {
    item.done = !item.done
  }

  addNewItem(newtodo: HTMLInputElement) {
    this.itemService.addItem(newtodo.value);
    newtodo.value='';

  }

  removeItem(item: Item) {
    this.items = this.items.filter(newitem => newitem !== item)
  }

  removeAllItems() {
    alert('All items are removed');
    this.items=[];
  }

  markAllItemsDone() {
    this.items.forEach( (item) => {item.done=true});

  }

  buttonStatus(): boolean {
    return this.filterItemsDone(false).length == 0;
  }
}

