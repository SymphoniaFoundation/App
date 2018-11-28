import { app } from 'electron';
import { EventEmitter } from 'events';
import * as path from 'path';
import * as fs from 'fs';

import { Manager } from 'ethereum-client-binaries';

export default class ClientBinaryManager extends EventEmitter {

  // tslint:disable-next-line:max-line-length
  private ALLOWED_DOWNLOAD_URLS_REGEX = /^https:\/\/(?:(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)?ethereum\.org\/|gethstore\.blob\.core\.windows\.net\/|bintray\.com\/artifact\/download\/karalabe\/ethereum\/)(?:.+)/;
  private BINARY_URL = 'https://raw.githubusercontent.com/ethereum/mist/master/clientBinaries.json';

  private _clientConfig;
  private _platform;
  private _binaryVersion;

  public manager;

  constructor() {
    super();
    this.readClientConfig();
    this.setPlatform();
    this.setBinaryVerstion();
  }

  private readClientConfig() {
    try {
      this._clientConfig = JSON.parse(fs.readFileSync(path.join('file://', __dirname, 'clientBinaries.json')).toString());
    } catch (err) {
      console.warn(err);
    }
  }

  private setPlatform() {
    this._platform = process.platform
      .replace('darwin', 'mac')
      .replace('win32', 'win')
      .replace('freebsd', 'linux')
      .replace('sunos', 'linux');
  }

  private setBinaryVerstion() {
    this._binaryVersion = this._clientConfig.clients['Geth'].platforms[this._platform][process.arch];
  }

  public async NodeDownload() {
    this.manager = new Manager(this._clientConfig);

    const clients = await this.manager.init({
      folders: [
        path.join(__dirname, 'binaries', 'Geth', 'unpacked')
      ]
    });

    await this.manager.download(clients.Geth.Id, {
      downloadFolder: path.join(__dirname, 'binaries'),
      urlRegex: this.ALLOWED_DOWNLOAD_URLS_REGEX,
    });
  }

}
