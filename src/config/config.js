/**
 * Created by kingzcheung on 2017/3/19.
 */

import env from './env';
import apiDebug from './api_debug';
import apiProduction from './api_production';

export default {
    api: function (apiname) {
        let name = apiname || '';
        if (env.debug === true) {
            return apiDebug.host + name;
        } else {
            return apiProduction.host + name;
        }
    }
}