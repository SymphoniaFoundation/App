import { HttpClient, HttpHeaders } from '@angular/common/http';

const Web3 = require('web3');

export default class Swarm {

  constructor(
    private _http: HttpClient,
    private _endpoint = 'http://localhost:8500/',
  ) {

  }

  createFeed(_topic: string, _address: string) {
    const topic = Web3.utils.toHex(_topic);
    if (Web3.utils.isAddress(_address)) {
      return this._http.post(this._endpoint + `bzz-feed:/?topic=${topic}?user=${_address}?manifest=1`, {responseType: 'text'});
    }
  }
}
