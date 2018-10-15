import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {convertSchemaToOptions} from '@angular/cli/models/json-schema';
import {FileModel} from './models/file.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    selectedFile: FileModel[] = [];
    file: any;
    counter = 0;

    url = [];

    constructor(private http: HttpClient) {
    }

    onFileSelected(event) {
        for (const file of event.target.files) {
            if (event.target.files && event.target.files[this.counter]) {
                const reader = new FileReader();

                reader.readAsDataURL(event.target.files[this.counter]); // read file as data url

                reader.onload = (e) => { // called once readAsDataURL is completed
                    this.url.push(e.target.result);
                    console.log('inner ' + this.url[this.counter - 1]);
                    const test = {name: file.name, size: file.size, url: this.url[this.counter - 1]};
                    this.selectedFile.push(test);
                };




                this.counter++;
            }
        }


        // for (const [index, file] of event.target.files) {
        //     if (event.target.files && event.target.files[index]) {
        //         this.selectedFile[index].name = file.name;
        //         this.selectedFile[index].size = file.size;
        //
        //         const reader = new FileReader();
        //
        //         reader.readAsDataURL(event.target.files[index]); // read file as data url
        //
        //         reader.onload = (e) => { // called once readAsDataURL is completed
        //             this.selectedFile[index].url = e.target.result;
        //         };
        //     }
        // }


        /* for (const file of event.target.files) {
             const test = {name: file.name, size: file.size};
             this.selectedFile.push(test);
         }*/

        // this.selectedFile.push(event.target.files);
        // console.log(this.selectedFile);
        // this.selectedFile = event.target.files[0];

        // onUpload() {
        // const fd = new FormData();
        // fd.append('image', this.selectedFile, this.selectedFile.name);
        //
        // this.http.post('http://www.mocky.io/v2/5bb48096330000e928cad644', fd).subscribe(
        //     response => console.log(response)
        // );
    }
}
