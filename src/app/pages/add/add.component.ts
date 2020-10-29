import { ListItem } from './../../model/listitem/listitem.model';
import { ListService } from './../../services/list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  listArr = [{ name: '', checked: false, prio: '2' }];
  // newListItem = { name: '', checked: false, prio: 2 };
  buttonDisabled: boolean = true;

  constructor(private listService: ListService) {}

  ngOnInit() {}

  addNewInput() {
    this.buttonDisabled = true;
    this.listArr = [...this.listArr, { name: '', checked: false, prio: '2' }];
  }

  onKeydown(event: any) {
    if (event.key === 'Enter') {
      this.addNewInput();
    }
  }

  validation() {
    if (this.listArr.map((i) => i.name.trim()).includes('')) {
      this.buttonDisabled = true;
    } else {
      this.buttonDisabled = false;
    }
  }

  onConfirm() {
    this.listArr.map((i) => {
      this.listService.onAdd(i);
    });
    this.listArr = [{ name: '', checked: false, prio: '2' }];
  }

  selectChangeHandler(e, listItem: ListItem) {
    listItem.prio = e.target.value;
  }
}
