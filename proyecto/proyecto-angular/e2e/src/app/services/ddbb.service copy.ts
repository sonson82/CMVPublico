import { Injectable } from '@angular/core';
import axios from 'axios';

//const API_PATH = 'http://mcv-accenture-angular.spmultimedia.pro/project-server/index.php';
const API_PATH = 'http://localhost/ServeR/getAll.php';


@Injectable({
  providedIn: 'root'
})
export class DdbbService {

  constructor() { }
  

  connectDDBB() : Promise<Document> {
      return new Promise<Document>(async (resolve, reject) => {

          await axios({
              method: 'post',
              url: `${API_PATH}`,
              headers: {
                  'content-type': 'application/json',
                  'Access-Control-Allow-Origin': '*'
              }
          })

          .then(result => {
            resolve(result.data);
          })
          .catch(error => {
            console.log(error)
            if (error.response) {
                console.log("--------------------------------------------------")
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log("*************************")

                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                console.log("++++++++++++++++++++++++")
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
          })
      })
  }
}
