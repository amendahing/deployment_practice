import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
    title = 'app';
}


// export class AppComponent implements OnInit {
//     // authors = [];
//
//     constructor(private _httpService: HttpService){
//     }
//
//     ngOnInit(){
//         // this.getAuthorsFromService();
//     }
//
//     // getAuthorsFromService() {
//     //     let observable = this._httpService.getAuthors()
//     //     observable.subscribe(data => {
//     //         console.log("List of Authors:", data)
//     //         this.authors = data['authors'];
//     //     })
//     // }
//
//     delete(id){
//         console.log("Deleted Task", id);
//         let observable = this._httpService.deleteAuthor(id);
//         observable.subscribe(data => {
//             console.log("From observable, task has beeb deleted")
//         })
//     }
// }
