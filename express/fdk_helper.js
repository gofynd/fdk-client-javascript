'use strict';
const { ClusterMetaMissingEror } = require("./error_code");
const { PlatformConfig, PlatformClient, ApplicationConfig, ApplicationClient } = require("fdk-client-javascript");

const __helperMap = {};


class FdkHelper {
    constructor(cluster, extension, clusterMeta) {
        this.cluster = cluster;
        this.clusterMeta = clusterMeta;
        this.extension = extension;
        this.storage = this.extension.storage;
        this.callbacks = this.extension.callbacks;
        this.domain = null;
    }

    static async getFDKHelperInstance(cluster, extension, clusterMeta) {
        if(__helperMap[cluster]) {
            return __helperMap[cluster];
        }
        let fdkHlper = new FdkHelper(cluster, extension, clusterMeta);
        await fdkHlper.loadClusterMeta();
        __helperMap[cluster] = fdkHlper;
        return fdkHlper;
    }

    async loadClusterMeta() {
        if(this.clusterMeta) {
            return this.clusterMeta;
        }
        let clusterMeta = await this.storage.get(this.cluster);

        if(!clusterMeta) {
            throw new ClusterMetaMissingEror('cluster meta missing');
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

    async getAccessToken(sessionId) {
        
    }

}

module.exports = FdkHelper;