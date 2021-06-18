import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class XMLService {

  constructor() { }

  connectXML() : Promise<Document> {
    return new Promise<Document>((resolve, reject) => {

		let xhr = new XMLHttpRequest();
		let method = "GET";
		let url = "https://sonson82.github.io/CMVPublico/proyecto/xml/data.xml";

        xhr.onreadystatechange = function (event) {
            if (xhr.readyState !== 4) return;
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseXML);
            } else {
                reject(xhr.responseText);
            }
        };
        xhr.open(method, url, true);
        xhr.send();
        });
    }

}
