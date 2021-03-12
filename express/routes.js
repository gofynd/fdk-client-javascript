'use strict';
const express = require('express');
const querystring = require('querystring');
const axios = require('axios');
const { v4 : uuidv4, v4} = require("uuid");
const FdkHelper = require("./fdk_helper");
const Session = require("./session/session");

const FdkRoutes = express.Router();

function setupRoutes(ext) {

    let storage = ext.storage;
    let callbacks = ext.callbacks;


    FdkRoutes.get(`/extension.json`, async (req, res) => {
        let data = ext.toJson();
        res.json(data);
    });

    FdkRoutes.post(`${ext.prefix_path}/setup`, async (req, res, next) => {
        /**
         *  {
                "client_id": "5f0dd8939d35180069468a70",
                "secret": ["jjdlajdkjaksjdlkaslkdkalsdj"],
                "cluster": "https://api.fynd.com"
            }
         */
        try {
            let cluster = req.body.cluster;
            await storage.set(cluster, JSON.stringify(req.body));
            await FdkHelper.getFDKHelperInstance(cluster, ext, req.body);
            await callbacks.setup(req.body);
            res.json({sucess: true});
        } catch (error) {
            console.error(error);
            res.status(500, { message: error.message});
        }
    });

    FdkRoutes.get(`${ext.prefix_path}/install`, async (req, res, next) => {
        // ?company_id=1&cluster=https://api.fynd.com&client_id=123313112122
        try {
            let cluster = req.query.cluster;
            if(!cluster) {
                res.statusCode(400).json({"message": "cluster not found"});
            }

            let fdkHelper = await FdkHelper.getFDKHelperInstance(cluster, ext);

            let session;
            if(ext.isOnlineAccessMode()) {
                session = new Session(Session.generateSessionId(false));
            } else {
                let sid = Session.generateSessionId(false, {
                    cluster: cluster,
                    company_id: req.query.company_id
                });
                session = new Session(sid);
            }

            escape.set


            let platformConfig = await fdkHelper.getPlatformClientInstance();

            let clusterMeta = await storage.get(cluster);
            let company_id = req.query.company_id;
            // For online mode check details 
            let companyToken = await storage.hget(req.query.cluster, company_id);
            if(!companyToken) {
                let platformConfig = new PlatformConfig({
                    companyId: parseInt(req.query.company_id),
                    domain: new URL(clusterMeta.cluster).host,
                    apiKey: clusterMeta.client_id,
                    apiSecret: clusterMeta.secret[0]
                });

                // start authorization flow
                // Replace with fdk client
                let state = uuidv4();
                let query = {
                    client_id: clusterMeta.client_id,
                    scope: ext.scopes.join(","),
                    redirect_uri: ext.getAuthCallback(),
                    state: state,
                    access_mode: ext.access_mode,
                    response_type: "code"
                };
                const queryString = querystring.stringify(query);

                res.cookie('state',state, { maxAge: 3600, httpOnly: true });
                res.redirect(`${clusterMeta.cluster}/service/panel/authentication/v1.0/company/${company_id}/oauth/authorize?${queryString}`);
            } else {
                res.redirect(`${ext.base_url}`);
            }
        } catch (error) {
            console.error(error);
            res.status(500, { message: error.message});
        }
    });

    FdkRoutes.get(`${ext.prefix_path}/auth`, async (req, res, next) => {
        // ?code=ddjfhdsjfsfh&client_id=jsfnsajfhkasf&company_id=1&cluster=https://api.fynd.com
        let clusterMeta = await storage.get(req.query.cluster);
        let platformConfig = new PlatformConfig({
            companyId: parseInt(req.query.company_id),
            domain: new URL(clusterMeta.cluster).host,
        });

        let reqData = {
            grant_type: "authorization_code",
            code: req.query.code
        };

        
        const token = Buffer.from(`${clusterMeta.client_id}:${clusterMeta.secret[0]}`,'utf8').toString('base64');

        let url = `${clusterMeta.cluster}/service/panel/authentication/v1.0/company/${req.query.company_id}/oauth/token`;
        let resultRes = await axios.post(url, querystring.stringify(reqData), {
            headers: { 
                'Authorization': `Basic ${token}`, 
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        // store this access token it can be reused in subsequant call
        // for online access mode store data in session instead of global
        await storage.hset(clusterMeta.cluster, req.query.company_id, JSON.stringify(resultRes.data));
        await ext.callbacks.auth(req, res, next);
        // res.redirect(ext.base_url);
    });

    FdkRoutes.post(`${ext.prefix_path}/uninstall`, async (req, res, next) => {
        await ext.callbacks.uninstall(req, res, next);
    });

    return FdkRoutes;
}


module.exports = setupRoutes;