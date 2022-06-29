import { Injectable } from "@angular/core";
import { Item } from '../models/item.model';

@Injectable({
    providedIn: 'root'
})
export class ItemService {
    private items: Item[] = [
        new Item(1, 'Cook diner'),
        new Item(2, 'Water plants'),
        new Item(3, 'Feed the cat'),
        new Item(4, 'Groceries'),
        new Item(5, 'Vacuum cleaning')
    ]

    getItems(): Item[] {
        return this.items
    }

    addItem(newItemName: string): void {
        const newItemID = this.items.length + 1;
        const newtodoitem = new Item(newItemID, newItemName);
        this.items.push(newtodoitem);
        console.log(`Item '${newItemName}' is added to the to-do list`)
    }

    // getItem(id:number): Item {
    //     return this.items.find(item => item.id === id);
    // }
}

