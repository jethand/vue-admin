

import service from './service';
import actions from './process';

import {formatUrl} from '@/lib/utils'
const actionColleation = {};
const getApiInstance = (router) => {
    return (data, params = {}) => {
        /** 
         * @param { Object } data axios request post data
         * @param { Object } params axios request get params
        */
        let url = router.url;
        url = formatUrl(url, data);
        let config = {
            url,
            method: router.method,
            headers: router.headers,
            params,
            data
        };
        return service.request(config);
    };
};
for(let action in actions){
    if(actions[action].url){
        actionColleation[action] = getApiInstance(actions[action]);
    }else{
        new Error('Lack of request url');
    }
}



export default actionColleation

