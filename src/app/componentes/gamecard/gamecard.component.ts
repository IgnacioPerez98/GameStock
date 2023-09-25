import {Component, OnInit} from '@angular/core';
import {DataconsumeService} from "../../services/data/dataconsume.service";
import {GameResponseModel, Games} from "../../models/api/GameResponseModel";
import {ResponseGameById} from "../../models/api/ResponseGameById";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-gamecard',
  templateUrl: './gamecard.component.html',
  styleUrls: ['./gamecard.component.css']
})
export class GamecardComponent implements OnInit{

    numpage:number = 1;
    nombrejuegoabuscar :string = "";
    respuestaJuego :GameResponseModel;
    juegos : Games[] = [];
    loading :boolean = true;
    loadingModal  :boolean = true;
    errorMessage : string = "";
    seleccionado:Games;
    detalles:ResponseGameById | null;
    constructor(private data :DataconsumeService)
    {

    }
    public SearhQuery(){
      this.loading = true;
      this.loadingModal = true;
      this.data.SearchQuery(this.nombrejuegoabuscar).subscribe(
        (response)=>{
          this.respuestaJuego = response;
          this.juegos = response.results;
          this.loading = false;
          this.loadingModal = false;
        }
      )
    }
    public NexPage(){
      this.loading = true;
      if(this.numpage != this.respuestaJuego.count){
        this.numpage++;
      }
      this.ReloadGames(this.numpage);
    }
    public PrevPage(){
      this.loading = true;
        if(this.numpage != 1){
          this.numpage--;
        }
        this.ReloadGames(this.numpage);
    }
    public ReloadGames(page:number = 1){
      this.loading = true;
      this.loadingModal = true;
      this.data.GetGames(page).subscribe(
        (response) => {
          this.respuestaJuego = response;
          this.juegos = response.results;
          this.loading = false;
          this.loadingModal = false;
        },
        (error) => {
          console.error('Error fetching data:', error);
          this.loading = false;
          this.errorMessage = "Ops algo falló...."
        }
      );
    }
    public CleanGames(page:number = 1){
      this.loading = true;
      this.loadingModal = true;
      this.nombrejuegoabuscar = "";
      this.data.GetGames(page).subscribe(
        (response) => {
          this.respuestaJuego = response;
          this.juegos = response.results;
          this.loading = false;
          this.loadingModal = false;
        },
        (error) => {
          console.error('Error fetching data:', error);
          this.loading = false;
          this.errorMessage = "Ops algo falló...."
        }
      );
    }
    public SetGameValue(juego:Games){
      this.detalles = null;
      this.loadingModal = true;
      this.seleccionado = juego;
      this.data.GetGameById(juego.id+"").subscribe(
        (response)=>{
          this.detalles = response;
          this.loadingModal = false;
        },(error)=>{
          this.loadingModal = false;
          this.errorMessage = "Ops algo falló...."
        }
      )
    }

    ngOnInit(): void {
     this.data.GetGames().subscribe(
      (response) => {
        this.respuestaJuego = response;
        this.juegos = response.results;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.loading = false;
        this.errorMessage = "Ops algo falló...."
      }
    );
    console.log('Juegos: ',this.juegos);
  }
}
