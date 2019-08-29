import { Component, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { AddZipcode } from '../actions/zipcode.actions';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  constructor(private store: Store<State>) { }

  addLocation(zipcode: string) {
    this.store.dispatch(new AddZipcode(zipcode));
  }

}
