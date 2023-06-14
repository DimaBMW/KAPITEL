
'use strict';

import { networkInterfaces, hostname } from 'os'
(await import('dotenv')).config()

const check_host = async () => {
    const nets = networkInterfaces();

    let host = '';

    if (!Object.hasOwn(nets, 'eth0')) {
        host = process.env.LOCAL_HOST;
    } else {
        host = `https://${hostname()}`
    }
    return host;
};

export default check_host;