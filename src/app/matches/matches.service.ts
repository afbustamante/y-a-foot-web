import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Match } from './match';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { formatDate } from '@angular/common';
import { MatchRegistration } from './match-registration';
import { Player } from '../players/player';
import { Car } from '../cars/car';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  constructor(
    private http: HttpClient
  ) {}

  createMatch(match: Match): Observable<HttpResponse<any>> {
    return this.http.post(`${environment.apiUrl}/matches`, match, { observe : 'response'});
  }

  findMatchByCode(code: string): Observable<Match> {
    return this.http.get<Match>(`${environment.apiUrl}/matches/${code}`);
  }

  findMatchesToPlay(): Observable<Match[]> {
    const today = formatDate(Date.now(), 'yyyy-MM-dd', 'en');
    return this.http.get<Match[]>(`${environment.apiUrl}/matches?startDate=${today}`);
  }

  findPlayedMatches(): Observable<Match[]> {
    const oneDayMilliseconds = 86400000;
    const yesterday = formatDate(Date.now() - oneDayMilliseconds, 'yyyy-MM-dd', 'en');
    return this.http.get<Match[]>(`${environment.apiUrl}/matches?endDate=${yesterday}`);
  }

  findMatchRegistrations(code: string): Observable<MatchRegistration[]> {
    return this.http.get<MatchRegistration[]>(`${environment.apiUrl}/matches/${code}/registrations`);
  }

  joinMatch(player: Player, match: Match, car?: Car): Observable<HttpResponse<any>> {
    // Avoid sending security details on the request
    player.token = null;

    const registration: MatchRegistration = {
      player,
      car
    };
    return this.http.post(`${environment.apiUrl}/matches/${match.code}/registrations`, registration, { observe : 'response'});
  }

  quitMatch(player: Player, match: Match): Observable<HttpResponse<any>> {
    return this.http.delete(`${environment.apiUrl}/matches/${match.code}/registrations/${player.id}`, { observe : 'response' });
  }

  cancelMatch(match: Match): Observable<HttpResponse<any>> {
    return this.http.delete(`${environment.apiUrl}/matches/${match.code}`, { observe : 'response' });
  }

  updateCarForPlayerRegistration(match: Match, player: Player, car: Car, confirmed: boolean): Observable<HttpResponse<any>> {
    return this.http.patch(`${environment.apiUrl}/matches/${match.code}/registrations/${player.id}`, {
      car, confirmed
    }, {observe: 'response'});
  }
}
