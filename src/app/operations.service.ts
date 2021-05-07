import { PlayListDTOService } from './play-list-dto.service';
import { SongDTOService } from './song-dto.service';
import { HttpClient } from '@angular/common/http';
import { Song } from './song';
import { AddStudentComponent } from './add-student/add-student.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {
  songURL:String;
  songURL2:String;

  constructor(private http:HttpClient) { 
    this.songURL="http://localhost:8080/song";
    this.songURL2="http://localhost:8080/playlist";
  }

  addSong(song :Song)
  {
    console.log(song);
    return this.http.post<String>(this.songURL+'/addsong',song,{responseType:"text" as "json"});
  }
  getList()
  {
    
    return this.http.get<SongDTOService[]>(this.songURL+'/displaysong');
  }
  createPlayList(playlist: PlayListDTOService)
  {
    console.log(playlist);
    return this.http.post<String>(this.songURL2+'/addplaylist',playlist,{responseType:"text" as "json"});
  }
  displayPlayList(name:String)
  {
    return this.http.get<String[]>(this.songURL2+'/displayplaylist?playlistName='+name);
  }
}
