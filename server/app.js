import path from 'path';

import init from './init';
import {PORT as port, TABLES_PATH} from '../server.conf.js';

let tablesPath = path.resolve(TABLES_PATH);

init(port, tablesPath);
