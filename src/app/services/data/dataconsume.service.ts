import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {GameResponseModel, Games} from "../../models/api/GameResponseModel";
import {ResponseGameById} from "../../models/api/ResponseGameById";
import {ResponsePlatforms} from "../../models/api/ResponsePlatforms";

@Injectable({
  providedIn: 'root'
})
export class DataconsumeService {

  apikey:string = 'e8b57b3154ab4ec6b9e0facd024d4f92';
  constructor(private httpclient :HttpClient) { }

  public GetPlatforms(){
    const url:string = `https://api.rawg.io/api/platforms?key=${this.apikey}`;
    return  this.httpclient.get<ResponsePlatforms>(url);
  }
  public GetGames(page:number = 1){
      const url:string = `https://api.rawg.io/api/games?key=${this.apikey}&page=${page}`;
      return  this.httpclient.get<GameResponseModel>(url);
  }

  public SearchQuery(param:string){
    const url:string = `https://api.rawg.io/api/games?key=${this.apikey}&search=${param}`;
    return  this.httpclient.get<GameResponseModel>(url);
  }
  public  GetGameById(id:string){
    const url:string = `https://api.rawg.io/api/games/${id}?key=${this.apikey}`;
    return  this.httpclient.get<ResponseGameById>(url);
  }
  /*private TrunkPost(){
    let juegos : GameResponseModel[] = [];
    const url:string = `https://api.rawg.io/api/games?key=${this.apikey}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let promi =this.httpclient.post<GameResponseModel[]>(url, null, { headers });
    promi.pipe(
      tap((respuesta: GameResponseModel[] ) => {})
    ).subscribe( ret =>{
      ret.forEach( el =>{
        juegos.push(el as GameResponseModel);
      })

    })
    console.log(juegos)
    return juegos;

  }*/

}
