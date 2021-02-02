const axiosInstance = require("../common/axios_helpers");

function execute(conf, method, iurl, pathParam, queryParams, data) {

    const token = Buffer
        .from(`${conf.ApplicationId}:${conf.ApplicationToken}`,'utf8')
        .toString('base64');

    const rawRequest = {
        method: method,
        url: renderUrl(iurl, pathParam, queryParams),
        data: data,
        headers: {
            'Authorization': 'Bearer ' + token
        }
    };

    return axiosInstance.request(rawRequest).then(o => o.data);
}

exports.execute = execute;