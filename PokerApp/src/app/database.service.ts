import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Player } from 'src/interfaces/Player';
import { Tournament } from 'src/interfaces/Tournament';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }


  async getPlayers() {
    return await this.http.post<Player[]>('http://localhost:3000/getPlayers',{}).toPromise();
  }

  async getTournaments() {
    return await this.http.post<Tournament[]>('http://localhost:3000/getTournaments',{}).toPromise();
  }

  async insertTournament(name: string,date:string) {
    return await this.http.post<any>('http://localhost:3000/insertTournament',{Name:name,Date:date}).toPromise();
  }

  async getPlayerID(name: string) {
    return await this.http.post<any>('http://localhost:3000/getPlayerID',{Name:name}).toPromise();
  }

  async getTournamentID(name: string) {
    return await this.http.post<any>('http://localhost:3000/getTournamentID',{Name:name}).toPromise();
  }

  async insertParticipation(PlayerID: string,TournamentID:string) {
    return await this.http.post<any>('http://localhost:3000/insertParticipation',{PlayerID:PlayerID,TournamentID:TournamentID}).toPromise();
  }

  async updatePlayersMoney(PlayerID: string,Money:string) {
    return await this.http.post<any>('http://localhost:3000/updatePlayersMoney',{PlayerID:PlayerID,Money:Money}).toPromise();
  }

  async updateTournamentMoney(TournamentID: string,Money:string) {
    return await this.http.post<any>('http://localhost:3000/updateTournamentMoney',{TournamentID:TournamentID,Money:Money}).toPromise();
  }

  async insertWinners(TournamentID: string,FirstPlace:string,SecondPlace:string) {
    return await this.http.post<any>('http://localhost:3000/insertWinners',{TournamentID:TournamentID,FirstPlace:FirstPlace,SecondPlace:SecondPlace}).toPromise();
  }

  async getWins(PlayerID: string) {
    return await this.http.post<any>('http://localhost:3000/getWins',{PlayerID:PlayerID}).toPromise();
  }

  async getParticipations(PlayerID: string) {
    return await this.http.post<any>('http://localhost:3000/getParticipations',{PlayerID:PlayerID}).toPromise();
  }

  async getTournamentWinner(TournamentID: string) {
    return await this.http.post<any>('http://localhost:3000/getTournamentWinner',{TournamentID:TournamentID}).toPromise();
  }

}
