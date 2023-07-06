import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  allTitles: string[] = [];
  csvdata: any[] = [];

  async loadFile(inputEvent: any) {

    const file: File = inputEvent.target.files[0];

    let fileContent = await file.text();

    fileContent.split("\n").forEach((ele, index) => {
      if (index === 0) {
        ele.split(",").forEach((title) => {
          this.allTitles.push(title);
        })
      } else { 
        let user: any[] = [];
        ele.split(",").forEach((ele) => {
            user.push(ele);
        }
      )
      this.csvdata.push(user);
    }
    })

  }
}
