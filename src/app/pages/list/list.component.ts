import { Component, OnInit } from '@angular/core';
import { ListItem } from '../../model/listitem/listitem.model';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  listArr: ListItem[] = [];
  loading: boolean = false;
  emptyList: boolean = false;
  constructor(private listService: ListService) {}

  ngOnInit() {
    this.loading = true;
    this.listService.getFirebase().subscribe((fetchitems) => {
      if (fetchitems.length === 0) {
        this.emptyList = true;
      }
      this.listArr = [];
      fetchitems.map((i) => {
       return (
          
          (this.listArr = [
            ...this.listArr,
            new ListItem(i.data.name, i.data.checked, i.id, i.data.prio),
          ])
        );
      });
    });
    this.loading = false;
  }

  updateItem(item) {
    item.checked = !item.checked;
    this.listService.onUpdate(item);
  }
  deleteItems() {
    const deletArr = this.listArr.filter(i => i.checked === true)
    deletArr.map(i => this.listService.onDelete(i))
  }
}
