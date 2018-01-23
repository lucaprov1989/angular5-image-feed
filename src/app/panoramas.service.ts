import { Injectable } from '@angular/core';
import { Panoramas } from './panoramas';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class PanoramasService {

	private Panoramas : Observable<Panoramas>;
	private url : string = 'http://api3-dev.panono.com/explore';

	constructor(
		private http: HttpClient
	) { }

	/* GET Panoramas*/
	getPanoramas(): Observable<Panoramas> {
		return this.http.get<Panoramas>(this.url).pipe(
			catchError(this.handleError<Panoramas>('getPanoramas'))
		);
	}

	/**
	* Handle Http operation that failed.
	* Let the app continue.
	* @param operation - name of the operation that failed
	* @param result - optional value to return as the observable result
	*/
	private handleError<T> (operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {

		console.error(error); // log to console

		// Let the app keep running by returning an empty result.
		return of(result as T);
		};
	}

}
