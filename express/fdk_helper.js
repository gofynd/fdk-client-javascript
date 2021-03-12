'use strict';
const { FdkClusterMetaMissingEror } = require("./error_code");
const { PlatformConfig, PlatformClient, ApplicationConfig, ApplicationClient } = require("fdk-client-javascript");

const __helperMap = {};


class FdkHelper {
    constructor(cluster, extension) {
        this.cluster = cluster;
        this.clusterMeta = null;
        this.extension = extension;
        this.storage = this.extension.storage;
        this.callbacks = this.extension.callbacks;
        this.domain = null;
    }

    static getInstance(cluster, extension, clusterMeta) {
        if(__helperMap[cluster]) {
            return __helperMap[cluster];
        }
        let fdkHlper = new FdkHelper(cluster, extension, clusterMeta);
        __helperMap[cluster] = fdkHlper;
        return fdkHlper;
    }

    async setClusterMeta(data) {
        this.clusterMeta = data;
        this.domain = new URL(this.clusterMeta.cluster).host;
        await this.storage.set(this.cluster, JSON.stringify(data));
    }

    
    async loadClusterMeta() {
        if(this.clusterMeta) {
            return this.clusterMeta;
        }
        let clusterMeta = await this.storage.get(this.cluster);

        if(!clusterMeta) {
            throw new FdkClusterMetaMissingEror('cluster meta missing');
        }
        this.clusterMeta = clusterMeta;
        this.domain = new URL(this.clusterMeta.cluster).host;
        return this.clusterMeta;
    }

    async getPlatformClientInstance(companyId) {
        await this.loadClusterMeta();
        let platformConfig = new PlatformConfig({
            companyId: parseInt(companyId),
            domain: this.domain,
            apiKey: this.clusterMeta.client_id,
            apiSecret: this.clusterMeta.secret[0]
        });

        return platformConfig;
    }

}

module.exports = FdkHelper;