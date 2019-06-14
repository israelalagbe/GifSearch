import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsListComponent } from './results-list.component';
import { GifService, GifServiceMock } from '../services/gif.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

describe('ResultsListComponent', () => {
  let component: ResultsListComponent;
  let fixture: ComponentFixture<ResultsListComponent>;
  const gifServiceMock = new GifServiceMock();
  gifServiceMock.searchGifs('keyword');
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsListComponent ],
      providers: [
        { provide: GifService, useValue: gifServiceMock   },
        { provide: Router, useValue: {}, }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render an image', () => {
    const image = fixture.debugElement.nativeElement.querySelector('img');
    expect(image).toBeTruthy();
    // console.log(gifServiceMock.store.getState());
    // setTimeout(() => {
    //   console.log(image);
    //   expect(image).toBeTruthy();
    // }, 0);

  });
  // it('should increment the counter if increment button is clicked (+1)', () => {
  //   const button = fixture.debugElement.nativeElement.querySelector('.button-up');

  //   button.click();
  //   button.click();

  //   expect(component.counter).toEqual(2);
  // });
});
