'use strict';
const express = require('express');


const FdkRoutes = express.Router();

function setupRoutes(ext) {

    FdkRoutes.get(`/extension.json`, async (req, res) => {
        let data = ext.toJson();
        res.json(data);
    });

    FdkRoutes.post(`${ext.prefix_path}/setup`, async (req, res) => {
        ext.callbacks.setup(req, res, next);
    });

    FdkRoutes.get(`${ext.prefix_path}/auth`, async (req, res) => {
        ext.callbacks.auth(req, res, next);
    });

    FdkRoutes.get(`${ext.prefix_path}/install`, async (req, res) => {
        ext.callbacks.install(req, res, next);
    });

    FdkRoutes.post(`${ext.prefix_path}/uninstall`, async (req, res) => {
        ext.callbacks.uninstall(req, res, next);
    });

    return FdkRoutes;
}


module.exports = setupRoutes;