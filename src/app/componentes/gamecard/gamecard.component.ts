import {Component, OnInit} from '@angular/core';
import {DataconsumeService} from "../../services/data/dataconsume.service";
import {GameResponseModel, Games} from "../../models/api/GameResponseModel";
import {ResponseGameById} from "../../models/api/ResponseGameById";

@Component({
  selector: 'app-gamecard',
  templateUrl: './gamecard.component.html',
  styleUrls: ['./gamecard.component.css']
})
export class GamecardComponent implements OnInit{
    numpage:number = 1;
    respuestaJuego :GameResponseModel;
    juegos : Games[] = [];
    loading :boolean = true;
    loadingModal  :boolean = true;
    errorMessage : string = "";
    seleccionado:Games;
    detalles:ResponseGameById;
    constructor(private data :DataconsumeService)
    {

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
    private ReloadGames(page:number){
      this.data.GetGames(page).subscribe(
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
    }
    public SetGameValue(juego:Games){
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
