# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


---
## [v0.5.4] - 2023-03-03
### Changed
- Fixed `syncEvents` for webhooks not working as expected in case of `subscribe_on_install` is set as `true` in config passed to `setupFdk` function.
---
## [v0.5.3] - 2023-01-02
### Changed
- Fixed `disableSalesChannelWebhook` function not working due to variable assignment issue on JS side.
---
## [v0.5.2] - 2022-09-29
### Changed
- Fixed TTL not getting set for `online` mode access token set for extension users. It caused redis to fill-in with non-expiring keys since all users who launches extension, a new session key is generated and stored without TTL due to this bug. 
---
## [v0.5.1] - 2022-06-16
### Added
- Added support to auto install extensions feature. Now selected auto install extensions will be installed for company. It will generate access token for offline mode and register webhook subscribers for company it is getting auto installed.

### Changed
- With introduction of auto install feature, any handling done on extension installation or first launch event on `auth` callback should be done here as well. Since auto install event will install extension in background on company creation. And `auth` callback is only triggered when extension is launched. 
---
## [v0.5.0] - 2022-05-24
### Added
- Fetching and verifying extension details using `api_key` and `api_secret` on server/consumer start. Given invalid extension api_key and api_secret, it will throw error. Same will be done if `scopes` are included which are not registered on Fynd Partners panel.
- Added webhook event name validation. Now each webhook event details mentioned in `webhook_config` will be validated on server/consumer start. It will throw error in case of invalid event name passed.
### Changed
- Added support for generating different tokens for `online` and `offline` access mode for fetching proper user details in extension launch on platform panel and background task handling  
- setupFdk config parameters `base_url` and `scopes` in Extension config details are optional
- Now passing event category with event name and type is compulsory in `webhook_config` dictionary. Refer examples and README.md
- Fixed unnecessary token issue due to bug on renew access token. Fixes also includes changes in `fdk-client-javascript`. Refer "peer-dependency" for required minimum version upgrade.

---

## [v0.4.0] - 2022-02-22
### Changed
- Support for the webhook event category
- Support for the webhook event versioning
- [complete changelog](https://github.com/gofynd/fdk-extension-javascript/pull/20#issue-1089270288)
---

## [v0.3.0] - 2021-11-22
### Added
- Webhook subscription support. Now webhooks can be subscribed via this library only
- Automatic webhook config sync on extension launch for a company
- Support for listening webhooks for specific saleschannels of any company
- support for enabling debug logs
### Changed
- Readme documentation for various function usage and config properties
---
## [v0.3.0-beta.2] - 2021-10-28
### Added
- Webhook subscription support with auto event subscription on install for all saleschannels
- Fixed webhook config sync issues for Fynd Platform side
### Changed
- Examples for event subscription of specific saleschannels
---
## [v0.3.0-beta.1] - 2021-08-24
### Added
- Initial support for subscribing to webhook events
### Changed
- Documentation on how to use this library with various use cases
---
## [v0.2.3] - 2021-08-24
### Added
- Application-level Extension launch support.
---
## [v0.2.2] - 2021-08-05
### Added
- Multi-tab extension launch support
---
## [v0.2.1] - 2021-06-03
### Added
- Fix for uninstalling key delete
- Handling of access token validity expire
- Handling of existing Redis session key cross checking with apikey key
- Breaks for previous versions
---
## [v0.2] - 2021-05-26
### Added
- Extension api_key, secret using Partner panel flow
---
## [v0.1-alpha] - 2021-05-26
### Added
- Initial draft of extension creation library
---
[v0.5.4]: https://github.com/gofynd/fdk-extension-javascript/releases/tag/v0.5.4
[v0.5.3]: https://github.com/gofynd/fdk-extension-javascript/releases/tag/v0.5.3
[v0.5.2]: https://github.com/gofynd/fdk-extension-javascript/releases/tag/v0.5.2
[v0.5.1]: https://github.com/gofynd/fdk-extension-javascript/releases/tag/v0.5.1
[v0.5.0]: https://github.com/gofynd/fdk-extension-javascript/releases/tag/v0.5.0
[v0.4.0]: https://github.com/gofynd/fdk-extension-javascript/releases/tag/v0.4.0
[v0.3.0]: https://github.com/gofynd/fdk-extension-javascript/releases/tag/v0.3.0
[v0.3.0-beta.2]: https://github.com/gofynd/fdk-extension-javascript/releases/tag/v0.3.0-beta.2
[v0.3.0-beta.1]: https://github.com/gofynd/fdk-extension-javascript/releases/tag/v0.3.0-beta.1
[v0.2.3]: https://github.com/gofynd/fdk-extension-javascript/releases/tag/v0.2.3
[v0.2.2]: https://github.com/gofynd/fdk-extension-javascript/releases/tag/v0.2.2
[v0.2.1]: https://github.com/gofynd/fdk-extension-javascript/releases/tag/v0.2.1
[v0.2]: https://github.com/gofynd/fdk-extension-javascript/releases/tag/v0.2
[v0.1-alpha]: https://github.com/gofynd/fdk-extension-javascript/releases/tag/v0.1-alpha