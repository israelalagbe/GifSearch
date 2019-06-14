import {Injectable} from '@angular/core';
import {Observable, Observer} from 'rxjs';
import { createStore, Store } from 'redux';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import mock from './mock';
export interface Gif {
  id: any;
  title: string;
  url: string;
  images: any;
}
interface GifAction {
    type: string;
    gifs: Gif[];
}
function gifsReducer(state: Gif[] = [], action: GifAction) {
    switch (action.type) {
      case 'SET_GIFS':
        return [...action.gifs];
      case 'GET_GIFS':
        return state;
      default:
        return state;
    }
  }

@Injectable()
export class GifService {
    store: Store<Gif[], GifAction>;
    url = 'https://api.giphy.com/v1/gifs';
    apiKey = 'deokzgUjxm6QHQdp3H3aca1LSZcCpucc';
    constructor(private http: HttpClient) {
        this.store = createStore(gifsReducer);
    }
    searchGifs(keyword) {
      return this.http.get(`${this.url}/search?api_key=${this.apiKey}&q=${keyword}&limit=25&offset=0&rating=Y&lang=en`)
        .subscribe((response: any) => {
          this.setGifs(response.data);
        });
    }
    setGifs(gifs: Gif[]) {
      this.store.dispatch({
        type: 'SET_GIFS',
        gifs
      });
    }
    getGifs() {
      return Observable.create((observer: Observer<Gif[]>) => {
        this.store.subscribe(() => {
          observer.next(this.store.getState());
        });
      });
    }
    getGif(id) {
      const gif = this.store.getState().find((gif) => gif.id === id);
      if (gif) {
        return of(gif);
      } else {
        return this.http.get(`${this.url}/${id}?api_key=${this.apiKey}&lang=en`)
          .pipe(map((response: any) => {
            return response.data;
          }));
      }
    }
}

@Injectable()
export class GifServiceMock {
    store: Store<Gif[], GifAction>;
    constructor() {
        this.store = createStore(gifsReducer);
    }
    searchGifs(keyword) {
      this.setGifs([
        mock
      ]);
    }
    setGifs(gifs: Gif[]) {
      this.store.dispatch({
        type: 'SET_GIFS',
        gifs
      });
    }
    getGifs() {
      return Observable.create((observer: Observer<Gif[]>) => {
        this.store.subscribe(() => {
          observer.next(this.store.getState());
        });
      });
    }
    getGif(id) {
      const gif = this.store.getState().find((gif) => gif.id === id);
      if (gif) {
        return of(gif);
      }
    }
}
