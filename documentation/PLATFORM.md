

# FDK Platform Front API Documentaion


* [Common](#Common) - Application configuration apis 
* [Lead](#Lead) - Handles communication between Administrator <-> Staff and Staff <-> Users 
* [Feedback](#Feedback) - User Reviews and Rating System 
* [Theme](#Theme) - Responsible for themes 
* [User](#User) - Authentication Service 
* [Content](#Content) - Content System 
* [Assignment](#Assignment) -  
* [Billing](#Billing) - Handle platform subscription 
* [Communication](#Communication) - Manages email, sms, push notifications sent to users 
* [Payment](#Payment) - Collect payment through many payment gateway i.e Stripe, Razorpay, Juspay etc.into Fynd or Self account 
* [Order](#Order) - Handles Platform websites OMS 
* [Catalog](#Catalog) - Catalog API's allows you to access list of products, prices, seller details, similar features, variants and many more useful features.  
* [CompanyProfile](#CompanyProfile) - Company Profile API's allows you to access list of products, prices, seller details, similar features, variants and many more useful features.  
* [FileStorage](#FileStorage) - File Storage 
* [Share](#Share) - Short link and QR Code 
* [Inventory](#Inventory) -  
* [Configuration](#Configuration) - Application configuration apis 
* [Cart](#Cart) - Cart APIs 
* [Rewards](#Rewards) - Rewards 
* [Analytics](#Analytics) - Perceptor analytics 
* [Discount](#Discount) - Discount 
* [Partner](#Partner) - Partner configuration apis 
* [Webhook](#Webhook) - Webhook dispatcher with retry and one event to many subscriber vice versa 

----

### Classes and Methods


* ## [Common](#Common)
  * Methods
    * [getLocations](#getlocations)
    

* ## [Lead](#Lead)
  * Methods
    * [getTickets](#gettickets)
    * [createTicket](#createticket)
    * [getTickets](#gettickets)
    * [getTicket](#getticket)
    * [editTicket](#editticket)
    * [getTicket](#getticket)
    * [editTicket](#editticket)
    * [createHistory](#createhistory)
    * [getTicketHistory](#gettickethistory)
    * [getFeedbacks](#getfeedbacks)
    * [submitFeedback](#submitfeedback)
    * [createHistory](#createhistory)
    * [getTicketHistory](#gettickethistory)
    * [getCustomForm](#getcustomform)
    * [editCustomForm](#editcustomform)
    * [getCustomForms](#getcustomforms)
    * [createCustomForm](#createcustomform)
    * [getTokenForVideoRoom](#gettokenforvideoroom)
    * [getTokenForVideoRoom](#gettokenforvideoroom)
    * [getVideoParticipants](#getvideoparticipants)
    * [getVideoParticipants](#getvideoparticipants)
    * [openVideoRoom](#openvideoroom)
    * [closeVideoRoom](#closevideoroom)
    

* ## [Feedback](#Feedback)
  * Methods
    * [getAttributes](#getattributes)
    * [getCustomerReviews](#getcustomerreviews)
    * [updateApprove](#updateapprove)
    * [getHistory](#gethistory)
    * [getApplicationTemplates](#getapplicationtemplates)
    * [createTemplate](#createtemplate)
    * [getTemplateById](#gettemplatebyid)
    * [updateTemplate](#updatetemplate)
    * [updateTemplateStatus](#updatetemplatestatus)
    

* ## [Theme](#Theme)
  * Methods
    * [getAllPages](#getallpages)
    * [createPage](#createpage)
    * [updateMultiplePages](#updatemultiplepages)
    * [getPage](#getpage)
    * [updatePage](#updatepage)
    * [deletePage](#deletepage)
    * [getThemeLibrary](#getthemelibrary)
    * [addToThemeLibrary](#addtothemelibrary)
    * [applyTheme](#applytheme)
    * [isUpgradable](#isupgradable)
    * [upgradeTheme](#upgradetheme)
    * [getPublicThemes](#getpublicthemes)
    * [createTheme](#createtheme)
    * [getAppliedTheme](#getappliedtheme)
    * [getFonts](#getfonts)
    * [getThemeById](#getthemebyid)
    * [updateTheme](#updatetheme)
    * [deleteTheme](#deletetheme)
    * [getThemeForPreview](#getthemeforpreview)
    * [publishTheme](#publishtheme)
    * [unpublishTheme](#unpublishtheme)
    * [archiveTheme](#archivetheme)
    * [unarchiveTheme](#unarchivetheme)
    

* ## [User](#User)
  * Methods
    * [getCustomers](#getcustomers)
    * [searchUsers](#searchusers)
    * [createUser](#createuser)
    * [updateUser](#updateuser)
    * [createUserSession](#createusersession)
    * [getPlatformConfig](#getplatformconfig)
    * [updatePlatformConfig](#updateplatformconfig)
    

* ## [Content](#Content)
  * Methods
    * [getAnnouncementsList](#getannouncementslist)
    * [createAnnouncement](#createannouncement)
    * [getAnnouncementById](#getannouncementbyid)
    * [updateAnnouncement](#updateannouncement)
    * [updateAnnouncementSchedule](#updateannouncementschedule)
    * [deleteAnnouncement](#deleteannouncement)
    * [createBlog](#createblog)
    * [getBlogs](#getblogs)
    * [updateBlog](#updateblog)
    * [deleteBlog](#deleteblog)
    * [getComponentById](#getcomponentbyid)
    * [getFaqCategories](#getfaqcategories)
    * [getFaqCategoryBySlugOrId](#getfaqcategorybyslugorid)
    * [createFaqCategory](#createfaqcategory)
    * [updateFaqCategory](#updatefaqcategory)
    * [deleteFaqCategory](#deletefaqcategory)
    * [getFaqsByCategoryIdOrSlug](#getfaqsbycategoryidorslug)
    * [addFaq](#addfaq)
    * [updateFaq](#updatefaq)
    * [deleteFaq](#deletefaq)
    * [getFaqByIdOrSlug](#getfaqbyidorslug)
    * [getLandingPages](#getlandingpages)
    * [createLandingPage](#createlandingpage)
    * [updateLandingPage](#updatelandingpage)
    * [deleteLandingPage](#deletelandingpage)
    * [getLegalInformation](#getlegalinformation)
    * [updateLegalInformation](#updatelegalinformation)
    * [getNavigations](#getnavigations)
    * [createNavigation](#createnavigation)
    * [getDefaultNavigations](#getdefaultnavigations)
    * [getNavigationBySlug](#getnavigationbyslug)
    * [updateNavigation](#updatenavigation)
    * [deleteNavigation](#deletenavigation)
    * [getPageMeta](#getpagemeta)
    * [getPageSpec](#getpagespec)
    * [createPage](#createpage)
    * [getPages](#getpages)
    * [createPagePreview](#createpagepreview)
    * [updatePagePreview](#updatepagepreview)
    * [updatePage](#updatepage)
    * [deletePage](#deletepage)
    * [getPageBySlug](#getpagebyslug)
    * [getSEOConfiguration](#getseoconfiguration)
    * [updateSEOConfiguration](#updateseoconfiguration)
    * [getSlideshows](#getslideshows)
    * [createSlideshow](#createslideshow)
    * [getSlideshowBySlug](#getslideshowbyslug)
    * [updateSlideshow](#updateslideshow)
    * [deleteSlideshow](#deleteslideshow)
    * [getSupportInformation](#getsupportinformation)
    * [updateSupportInformation](#updatesupportinformation)
    * [updateInjectableTag](#updateinjectabletag)
    * [deleteAllInjectableTags](#deleteallinjectabletags)
    * [getInjectableTags](#getinjectabletags)
    * [addInjectableTag](#addinjectabletag)
    * [removeInjectableTag](#removeinjectabletag)
    * [editInjectableTag](#editinjectabletag)
    

* ## [Assignment](#Assignment)
  * Methods
    * [createPickupLocation](#createpickuplocation)
    * [getPickupLocation](#getpickuplocation)
    * [updatePickupLocation](#updatepickuplocation)
    * [getPickupLocationById](#getpickuplocationbyid)
    * [createPickupConfiguration](#createpickupconfiguration)
    * [getPickupConfiguration](#getpickupconfiguration)
    * [getAllocationConfiguration](#getallocationconfiguration)
    * [createAllocationConfiguration](#createallocationconfiguration)
    * [updateAllocationConfiguration](#updateallocationconfiguration)
    * [getAllocationLocations](#getallocationlocations)
    * [getAllocationLocationById](#getallocationlocationbyid)
    * [updateAllocationLocation](#updateallocationlocation)
    * [createAllocationLocation](#createallocationlocation)
    * [getDestinationZones](#getdestinationzones)
    * [postDestinationZone](#postdestinationzone)
    * [getDestinationZoneById](#getdestinationzonebyid)
    * [updateDestinationZone](#updatedestinationzone)
    

* ## [Billing](#Billing)
  * Methods
    * [createSubscriptionCharge](#createsubscriptioncharge)
    * [getSubscriptionCharge](#getsubscriptioncharge)
    * [cancelSubscriptionCharge](#cancelsubscriptioncharge)
    * [getInvoices](#getinvoices)
    * [getInvoiceById](#getinvoicebyid)
    * [getCustomerDetail](#getcustomerdetail)
    * [upsertCustomerDetail](#upsertcustomerdetail)
    * [getSubscription](#getsubscription)
    * [getFeatureLimitConfig](#getfeaturelimitconfig)
    * [activateSubscriptionPlan](#activatesubscriptionplan)
    * [cancelSubscriptionPlan](#cancelsubscriptionplan)
    

* ## [Communication](#Communication)
  * Methods
    * [getCampaigns](#getcampaigns)
    * [createCampaign](#createcampaign)
    * [getCampaignById](#getcampaignbyid)
    * [updateCampaignById](#updatecampaignbyid)
    * [getStatsOfCampaignById](#getstatsofcampaignbyid)
    * [getAudiences](#getaudiences)
    * [createAudience](#createaudience)
    * [getBigqueryHeaders](#getbigqueryheaders)
    * [getAudienceById](#getaudiencebyid)
    * [updateAudienceById](#updateaudiencebyid)
    * [getNSampleRecordsFromCsv](#getnsamplerecordsfromcsv)
    * [getEmailProviders](#getemailproviders)
    * [createEmailProvider](#createemailprovider)
    * [getEmailProviderById](#getemailproviderbyid)
    * [updateEmailProviderById](#updateemailproviderbyid)
    * [getEmailTemplates](#getemailtemplates)
    * [createEmailTemplate](#createemailtemplate)
    * [getSystemEmailTemplates](#getsystememailtemplates)
    * [getEmailTemplateById](#getemailtemplatebyid)
    * [updateEmailTemplateById](#updateemailtemplatebyid)
    * [deleteEmailTemplateById](#deleteemailtemplatebyid)
    * [getEventSubscriptions](#geteventsubscriptions)
    * [getJobs](#getjobs)
    * [triggerCampaignJob](#triggercampaignjob)
    * [getJobLogs](#getjoblogs)
    * [getCommunicationLogs](#getcommunicationlogs)
    * [getSystemNotifications](#getsystemnotifications)
    * [getSmsProviders](#getsmsproviders)
    * [createSmsProvider](#createsmsprovider)
    * [getSmsProviderById](#getsmsproviderbyid)
    * [updateSmsProviderById](#updatesmsproviderbyid)
    * [getSmsTemplates](#getsmstemplates)
    * [createSmsTemplate](#createsmstemplate)
    * [getSmsTemplateById](#getsmstemplatebyid)
    * [updateSmsTemplateById](#updatesmstemplatebyid)
    * [deleteSmsTemplateById](#deletesmstemplatebyid)
    * [getSystemSystemTemplates](#getsystemsystemtemplates)
    

* ## [Payment](#Payment)
  * Methods
    * [getBrandPaymentGatewayConfig](#getbrandpaymentgatewayconfig)
    * [saveBrandPaymentGatewayConfig](#savebrandpaymentgatewayconfig)
    * [updateBrandPaymentGatewayConfig](#updatebrandpaymentgatewayconfig)
    * [getPaymentModeRoutes](#getpaymentmoderoutes)
    * [getAllPayouts](#getallpayouts)
    * [savePayout](#savepayout)
    * [updatePayout](#updatepayout)
    * [activateAndDectivatePayout](#activateanddectivatepayout)
    * [deletePayout](#deletepayout)
    * [getSubscriptionPaymentMethod](#getsubscriptionpaymentmethod)
    * [deleteSubscriptionPaymentMethod](#deletesubscriptionpaymentmethod)
    * [getSubscriptionConfig](#getsubscriptionconfig)
    * [saveSubscriptionSetupIntent](#savesubscriptionsetupintent)
    * [addBeneficiaryDetails](#addbeneficiarydetails)
    * [verifyIfscCode](#verifyifsccode)
    * [getUserOrderBeneficiaries](#getuserorderbeneficiaries)
    * [getUserBeneficiaries](#getuserbeneficiaries)
    

* ## [Order](#Order)
  * Methods
    * [shipmentStatusUpdate](#shipmentstatusupdate)
    * [activityStatus](#activitystatus)
    * [storeProcessShipmentUpdate](#storeprocessshipmentupdate)
    * [checkRefund](#checkrefund)
    * [getOrdersByCompanyId](#getordersbycompanyid)
    * [getOrderLanesCountByCompanyId](#getorderlanescountbycompanyid)
    * [getOrderDetails](#getorderdetails)
    * [getPicklistOrdersByCompanyId](#getpicklistordersbycompanyid)
    * [trackShipmentPlatform](#trackshipmentplatform)
    * [trackOrder](#trackorder)
    * [failedOrders](#failedorders)
    * [reprocessOrder](#reprocessorder)
    * [updateShipment](#updateshipment)
    * [getPlatformShipmentReasons](#getplatformshipmentreasons)
    * [getShipmentTrackDetails](#getshipmenttrackdetails)
    * [getShipmentAddress](#getshipmentaddress)
    * [updateShipmentAddress](#updateshipmentaddress)
    * [getPing](#getping)
    * [voiceCallback](#voicecallback)
    * [voiceClickToCall](#voiceclicktocall)
    

* ## [Catalog](#Catalog)
  * Methods
    * [deleteSearchKeywords](#deletesearchkeywords)
    * [updateSearchKeywords](#updatesearchkeywords)
    * [getSearchKeywords](#getsearchkeywords)
    * [getAllSearchKeyword](#getallsearchkeyword)
    * [createCustomKeyword](#createcustomkeyword)
    * [deleteAutocompleteKeyword](#deleteautocompletekeyword)
    * [updateAutocompleteKeyword](#updateautocompletekeyword)
    * [getAutocompleteKeywordDetail](#getautocompletekeyworddetail)
    * [getAutocompleteConfig](#getautocompleteconfig)
    * [createCustomAutocompleteRule](#createcustomautocompleterule)
    * [getProductBundle](#getproductbundle)
    * [createProductBundle](#createproductbundle)
    * [updateProductBundle](#updateproductbundle)
    * [getProductBundleDetail](#getproductbundledetail)
    * [getSizeGuides](#getsizeguides)
    * [createSizeGuide](#createsizeguide)
    * [updateSizeGuide](#updatesizeguide)
    * [getSizeGuide](#getsizeguide)
    * [getCatalogConfiguration](#getcatalogconfiguration)
    * [getConfigurations](#getconfigurations)
    * [createConfigurationProductListing](#createconfigurationproductlisting)
    * [getConfigurationByType](#getconfigurationbytype)
    * [createConfigurationByType](#createconfigurationbytype)
    * [getQueryFilters](#getqueryfilters)
    * [getAllCollections](#getallcollections)
    * [createCollection](#createcollection)
    * [getCollectionDetail](#getcollectiondetail)
    * [deleteCollection](#deletecollection)
    * [updateCollection](#updatecollection)
    * [getCollectionItems](#getcollectionitems)
    * [addCollectionItems](#addcollectionitems)
    * [getCatalogInsights](#getcataloginsights)
    * [getSellerInsights](#getsellerinsights)
    * [createMarketplaceOptin](#createmarketplaceoptin)
    * [getMarketplaceOptinDetail](#getmarketplaceoptindetail)
    * [getCompanyDetail](#getcompanydetail)
    * [getCompanyBrandDetail](#getcompanybranddetail)
    * [getCompanyMetrics](#getcompanymetrics)
    * [getStoreDetail](#getstoredetail)
    * [getGenderAttribute](#getgenderattribute)
    * [listProductTemplateCategories](#listproducttemplatecategories)
    * [listDepartmentsData](#listdepartmentsdata)
    * [getDepartmentData](#getdepartmentdata)
    * [listProductTemplate](#listproducttemplate)
    * [validateProductTemplate](#validateproducttemplate)
    * [downloadProductTemplateViews](#downloadproducttemplateviews)
    * [downloadProductTemplateView](#downloadproducttemplateview)
    * [validateProductTemplateSchema](#validateproducttemplateschema)
    * [listHSNCodes](#listhsncodes)
    * [listProductTemplateExportDetails](#listproducttemplateexportdetails)
    * [listTemplateBrandTypeValues](#listtemplatebrandtypevalues)
    * [listCategories](#listcategories)
    * [createCategories](#createcategories)
    * [updateCategory](#updatecategory)
    * [getCategoryData](#getcategorydata)
    * [getProducts](#getproducts)
    * [createProduct](#createproduct)
    * [deleteProduct](#deleteproduct)
    * [editProduct](#editproduct)
    * [getProduct](#getproduct)
    * [getProductValidation](#getproductvalidation)
    * [getProductSize](#getproductsize)
    * [getProductBulkUploadHistory](#getproductbulkuploadhistory)
    * [updateProductAssetsInBulk](#updateproductassetsinbulk)
    * [deleteProductBulkJob](#deleteproductbulkjob)
    * [createProductsInBulk](#createproductsinbulk)
    * [getCompanyTags](#getcompanytags)
    * [getProductAssetsInBulk](#getproductassetsinbulk)
    * [createProductAssetsInBulk](#createproductassetsinbulk)
    * [deleteSize](#deletesize)
    * [getInventoryBySize](#getinventorybysize)
    * [addInventory](#addinventory)
    * [getInventoryBySizeIdentifier](#getinventorybysizeidentifier)
    * [deleteInventory](#deleteinventory)
    * [getInventoryBulkUploadHistory](#getinventorybulkuploadhistory)
    * [createBulkInventoryJob](#createbulkinventoryjob)
    * [deleteBulkInventoryJob](#deletebulkinventoryjob)
    * [createBulkInventory](#createbulkinventory)
    * [getInventoryExport](#getinventoryexport)
    * [createInventoryExportJob](#createinventoryexportjob)
    * [exportInventoryConfig](#exportinventoryconfig)
    * [getAllHsnCodes](#getallhsncodes)
    * [createHsnCode](#createhsncode)
    * [updateHsnCode](#updatehsncode)
    * [getHsnCode](#gethsncode)
    * [bulkHsnCode](#bulkhsncode)
    * [getApplicationBrands](#getapplicationbrands)
    * [getDepartments](#getdepartments)
    * [getCategories](#getcategories)
    * [getAppicationProducts](#getappicationproducts)
    * [getProductDetailBySlug](#getproductdetailbyslug)
    * [getAppProducts](#getappproducts)
    

* ## [CompanyProfile](#CompanyProfile)
  * Methods
    * [cbsOnboardGet](#cbsonboardget)
    * [updateCompany](#updatecompany)
    * [getCompanyMetrics](#getcompanymetrics)
    * [getBrand](#getbrand)
    * [editBrand](#editbrand)
    * [createBrand](#createbrand)
    * [createCompanyBrandMapping](#createcompanybrandmapping)
    * [getBrands](#getbrands)
    * [createLocation](#createlocation)
    * [getLocations](#getlocations)
    * [getLocationDetail](#getlocationdetail)
    * [updateLocation](#updatelocation)
    * [createLocationBulk](#createlocationbulk)
    

* ## [FileStorage](#FileStorage)
  * Methods
    * [startUpload](#startupload)
    * [completeUpload](#completeupload)
    * [appStartUpload](#appstartupload)
    * [appCompleteUpload](#appcompleteupload)
    * [getSignUrls](#getsignurls)
    * [copyFiles](#copyfiles)
    * [appCopyFiles](#appcopyfiles)
    * [browse](#browse)
    * [browse](#browse)
    * [proxy](#proxy)
    

* ## [Share](#Share)
  * Methods
    * [createShortLink](#createshortlink)
    * [getShortLinks](#getshortlinks)
    * [getShortLinkByHash](#getshortlinkbyhash)
    * [updateShortLinkById](#updateshortlinkbyid)
    

* ## [Inventory](#Inventory)
  * Methods
    * [getJobsByCompany](#getjobsbycompany)
    * [updateJob](#updatejob)
    * [createJob](#createjob)
    * [getJobByCompanyAndIntegration](#getjobbycompanyandintegration)
    * [getJobConfigDefaults](#getjobconfigdefaults)
    * [getJobByCode](#getjobbycode)
    * [getJobCodeMetrics](#getjobcodemetrics)
    * [getJobCodesByCompanyAndIntegration](#getjobcodesbycompanyandintegration)
    

* ## [Configuration](#Configuration)
  * Methods
    * [getBuildConfig](#getbuildconfig)
    * [updateBuildConfig](#updatebuildconfig)
    * [getPreviousVersions](#getpreviousversions)
    * [getAppFeatures](#getappfeatures)
    * [updateAppFeatures](#updateappfeatures)
    * [getAppBasicDetails](#getappbasicdetails)
    * [updateAppBasicDetails](#updateappbasicdetails)
    * [getAppContactInfo](#getappcontactinfo)
    * [updateAppContactInfo](#updateappcontactinfo)
    * [getAppApiTokens](#getappapitokens)
    * [updateAppApiTokens](#updateappapitokens)
    * [getAppCompanies](#getappcompanies)
    * [getAppStores](#getappstores)
    * [getInventoryConfig](#getinventoryconfig)
    * [updateInventoryConfig](#updateinventoryconfig)
    * [partiallyUpdateInventoryConfig](#partiallyupdateinventoryconfig)
    * [getAppCurrencyConfig](#getappcurrencyconfig)
    * [updateAppCurrencyConfig](#updateappcurrencyconfig)
    * [getOrderingStoresByFilter](#getorderingstoresbyfilter)
    * [updateOrderingStoreConfig](#updateorderingstoreconfig)
    * [getDomains](#getdomains)
    * [addDomain](#adddomain)
    * [removeDomainById](#removedomainbyid)
    * [changeDomainType](#changedomaintype)
    * [getDomainStatus](#getdomainstatus)
    * [createApplication](#createapplication)
    * [getApplications](#getapplications)
    * [getApplicationById](#getapplicationbyid)
    * [getCurrencies](#getcurrencies)
    * [getDomainAvailibility](#getdomainavailibility)
    * [getIntegrationById](#getintegrationbyid)
    * [getAvailableOptIns](#getavailableoptins)
    * [getSelectedOptIns](#getselectedoptins)
    * [getIntegrationLevelConfig](#getintegrationlevelconfig)
    * [getIntegrationByLevelId](#getintegrationbylevelid)
    * [getLevelActiveIntegrations](#getlevelactiveintegrations)
    * [getBrandsByCompany](#getbrandsbycompany)
    * [getCompanyByBrands](#getcompanybybrands)
    * [getStoreByBrands](#getstorebybrands)
    * [getOtherSellerApplications](#getothersellerapplications)
    * [getOtherSellerApplicationById](#getothersellerapplicationbyid)
    * [optOutFromApplication](#optoutfromapplication)
    

* ## [Cart](#Cart)
  * Methods
    * [getCoupons](#getcoupons)
    * [createCoupon](#createcoupon)
    * [getCouponById](#getcouponbyid)
    * [updateCoupon](#updatecoupon)
    * [updateCouponPartially](#updatecouponpartially)
    * [fetchAndvalidateCartItems](#fetchandvalidatecartitems)
    * [checkCartServiceability](#checkcartserviceability)
    * [checkoutCart](#checkoutcart)
    

* ## [Rewards](#Rewards)
  * Methods
    * [getGiveaways](#getgiveaways)
    * [createGiveaway](#creategiveaway)
    * [getGiveawayByID](#getgiveawaybyid)
    * [updateGiveaway](#updategiveaway)
    * [getOffers](#getoffers)
    * [getOfferByName](#getofferbyname)
    * [updateOfferByName](#updateofferbyname)
    * [getUserAvailablePoints](#getuseravailablepoints)
    * [updateUserStatus](#updateuserstatus)
    * [getUserPointsHistory](#getuserpointshistory)
    

* ## [Analytics](#Analytics)
  * Methods
    * [getStatiscticsGroups](#getstatiscticsgroups)
    * [getStatiscticsGroupComponents](#getstatiscticsgroupcomponents)
    * [getComponentStatsCSV](#getcomponentstatscsv)
    * [getComponentStatsPDF](#getcomponentstatspdf)
    * [getComponentStats](#getcomponentstats)
    * [getAbandonCartList](#getabandoncartlist)
    * [getAbandonCartsCSV](#getabandoncartscsv)
    * [getAbandonCartDetail](#getabandoncartdetail)
    * [createExportJob](#createexportjob)
    * [getExportJobStatus](#getexportjobstatus)
    * [getLogsList](#getlogslist)
    * [searchLogs](#searchlogs)
    

* ## [Discount](#Discount)
  * Methods
    * [getDiscounts](#getdiscounts)
    * [createDiscount](#creatediscount)
    * [getDiscount](#getdiscount)
    * [updateDiscount](#updatediscount)
    * [validateDiscountFile](#validatediscountfile)
    * [downloadDiscountFile](#downloaddiscountfile)
    * [getValidationJob](#getvalidationjob)
    * [cancelValidationJob](#cancelvalidationjob)
    * [getDownloadJob](#getdownloadjob)
    * [cancelDownloadJob](#canceldownloadjob)
    

* ## [Partner](#Partner)
  * Methods
    * [addProxyPath](#addproxypath)
    * [removeProxyPath](#removeproxypath)
    

* ## [Webhook](#Webhook)
  * Methods
    * [getSubscribersByCompany](#getsubscribersbycompany)
    * [registerSubscriberToEvent](#registersubscribertoevent)
    * [updateSubscriberConfig](#updatesubscriberconfig)
    * [getSubscriberById](#getsubscriberbyid)
    * [fetchAllEventConfigurations](#fetchalleventconfigurations)
    


---



## Common


#### getLocations
Get countries, states, cities



```javascript
// Promise
const promise = common.getLocations( {  locationType : value,
 id : value });

// Async/Await
const data = await common.getLocations( {  locationType : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| locationType | string | no | Provide location type to query on |    
| id | string | no | Field is optional when location_type is country. If querying for state, provide id of country. If querying for city, provide id of state. |  





*Returned Response:*




Success


[Locations](#Locations)

Success









---





## Lead


#### getTickets
Gets the list of company level tickets and/or ticket filters depending on query params



```javascript
// Promise
const promise = lead.getTickets( {  companyId : value,
 items : value,
 filters : value,
 q : value,
 status : value,
 priority : value,
 category : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await lead.getTickets( {  companyId : value,
 items : value,
 filters : value,
 q : value,
 status : value,
 priority : value,
 category : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company ID for which the data will be returned |    
| items | boolean | no | Decides that the reponse will contain the list of tickets |    
| filters | boolean | no | Decides that the reponse will contain the ticket filters |    
| q | string | no | Search through ticket titles and description |    
| status | string | no | Filter tickets on status |    
| priority | PriorityEnum | no | Filter tickets on priority |    
| category | string | no | Filter tickets on category |    
| pageNo | number | no | The page number to navigate through the given set of results. |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 12. |  



Gets the list of company level tickets and/or ticket filters

*Returned Response:*




Success


[TicketList](#TicketList)

Success


*Examples:*


Without items
```json
{
  "value": {
    "filters": {
      "statuses": [
        {
          "display": "Pending",
          "color": "#eae22b",
          "key": "pending"
        },
        {
          "display": "In Progress",
          "color": "#ffa951",
          "key": "in_progress"
        },
        {
          "display": "Resolved",
          "color": "#20c3a6",
          "key": "resolved"
        },
        {
          "display": "Closed",
          "color": "#41434c",
          "key": "closed"
        }
      ],
      "priorities": [
        {
          "display": "Low",
          "color": "#fed766",
          "key": "low"
        },
        {
          "display": "Medium",
          "color": "#f37736",
          "key": "medium"
        },
        {
          "display": "High",
          "color": "#fe4a49",
          "key": "high"
        }
      ],
      "assignees": [],
      "categories": [
        {
          "form": {
            "login_required": false,
            "should_notify": false,
            "inputs": [
              {
                "type": "email",
                "showRegexInput": false,
                "enum": [],
                "regex": "\\S+@\\S+\\.\\S+",
                "display": "email",
                "required": true,
                "key": "email"
              }
            ],
            "available_assignees": [],
            "_id": "602e900a2042255c03cadaf0",
            "title": "service-test-satyen",
            "description": "testing form from service",
            "slug": "service-test-satyen",
            "header_image": "https://hdn-1.addsale.com/x0/support-ticket/files/free/original/KZL86aN5l-service-test-satyen.jpeg",
            "application_id": "000000000000000000000001",
            "created_on": {
              "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
              "platform": "web",
              "meta": {
                "browser": {
                  "name": "Chrome",
                  "version": "88.0.4324.150"
                },
                "os": {
                  "name": "macOS",
                  "version": "11.2.0"
                },
                "platform": {
                  "type": "desktop",
                  "vendor": "Apple"
                },
                "engine": {
                  "name": "Blink"
                }
              }
            },
            "created_by": "5f8147abbd1a0a870f61f1a6",
            "createdAt": "2021-02-18T16:04:26.495Z",
            "updatedAt": "2021-02-18T16:04:26.495Z",
            "__v": 0
          },
          "key": "service-test-satyen",
          "display": "service-test-satyen"
        }
      ]
    }
  }
}
```

With items
```json
{
  "value": {
    "docs": [
      {
        "_id": "602d2652ce284d0b008d5c97",
        "status": {
          "display": "Pending",
          "color": "#eae22b",
          "key": "pending"
        },
        "priority": {
          "display": "Medium",
          "color": "#f37736",
          "key": "medium"
        },
        "assigned_to": {
          "agent_id": "5e79e721768c6bf54b783146",
          "gender": "male",
          "accountType": "user",
          "active": true,
          "profilePicUrl": "https://d2co8r51m5ca2d.cloudfront.net/inapp_banners/default_profile_img.png",
          "hasOldPasswordHash": false,
          "_id": "5e79e721768c6bf54b783146",
          "emails": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "email": "nikhilmshchs@gmail.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "nikhilmanapure@gofynd.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "nikhilmanapure@fynd.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "nikhilmanapure@uniket.store"
            }
          ],
          "phoneNumbers": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "countryCode": 91,
              "phone": "9890425946"
            }
          ],
          "firstName": "Nikhil",
          "lastName": "Manapure",
          "username": "nikhilmanapure_gofynd_com_29298",
          "createdAt": "2020-03-24T10:55:29.298Z",
          "updatedAt": "2020-05-12T07:46:41.816Z",
          "uid": "5567",
          "__v": 2
        },
        "tags": [
          "asdf444"
        ],
        "context": {
          "application_id": "000000000000000000000001",
          "company_id": "1"
        },
        "created_on": {
          "user_agent": "Fynd Platform/0.0.1 (com.fynd.platform; build:3; iOS 14.2.0) Alamofire/5.0.2",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Fynd Platform",
              "version": "0.0.1"
            }
          }
        },
        "source": "sales_channel",
        "content": {
          "title": "asdf444 Response",
          "description": "",
          "attachments": []
        },
        "response_id": "602d2652ce284dee3c8d5c96",
        "category": {
          "form": {
            "login_required": false,
            "should_notify": true,
            "inputs": [
              {
                "type": "text",
                "showRegexInput": false,
                "enum": [],
                "display": "asdf",
                "key": "asdf"
              },
              {
                "type": "mobile",
                "showRegexInput": false,
                "enum": [],
                "display": "mob num",
                "regex": "[0-9]{10}$",
                "key": "mob-num"
              }
            ],
            "available_assignees": [
              "5e79e721768c6bf54b783146"
            ],
            "_id": "60124e4a4d2bc363625e1bf4",
            "title": "asdf444",
            "description": "adf",
            "slug": "asdf444",
            "application_id": "000000000000000000000001",
            "created_on": {
              "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
              "platform": "web",
              "meta": {
                "browser": {
                  "name": "Chrome",
                  "version": "88.0.4324.96"
                },
                "os": {
                  "name": "macOS",
                  "version": "10.15.7",
                  "versionName": "Catalina"
                },
                "platform": {
                  "type": "desktop",
                  "vendor": "Apple"
                },
                "engine": {
                  "name": "Blink"
                }
              }
            },
            "created_by": "5e79e721768c6bf54b783146",
            "createdAt": "2021-01-28T05:40:26.271Z",
            "updatedAt": "2021-02-18T16:02:32.086Z",
            "__v": 0,
            "poll_for_assignment": {
              "duration": 20,
              "message": "We are looking for executive to connect you",
              "success_message": "Executive found",
              "failure_message": "All our executives are busy at the moment, We have accepted your request and someone will connect with you soon!"
            }
          },
          "key": "asdf444",
          "display": "asdf444"
        },
        "ticket_id": "472",
        "createdAt": "2021-02-17T14:21:06.774Z",
        "updatedAt": "2021-02-17T14:21:06.774Z",
        "__v": 0,
        "id": "602d2652ce284d0b008d5c97"
      }
    ],
    "total": 472,
    "limit": 10,
    "page": 1,
    "pages": 48,
    "filters": {
      "statuses": [
        {
          "display": "Pending",
          "color": "#eae22b",
          "key": "pending"
        },
        {
          "display": "In Progress",
          "color": "#ffa951",
          "key": "in_progress"
        },
        {
          "display": "Resolved",
          "color": "#20c3a6",
          "key": "resolved"
        },
        {
          "display": "Closed",
          "color": "#41434c",
          "key": "closed"
        }
      ],
      "priorities": [
        {
          "display": "Low",
          "color": "#fed766",
          "key": "low"
        },
        {
          "display": "Medium",
          "color": "#f37736",
          "key": "medium"
        },
        {
          "display": "High",
          "color": "#fe4a49",
          "key": "high"
        }
      ],
      "assignees": [],
      "categories": [
        {
          "form": {
            "login_required": false,
            "should_notify": false,
            "inputs": [
              {
                "type": "email",
                "showRegexInput": false,
                "enum": [],
                "regex": "\\S+@\\S+\\.\\S+",
                "display": "email",
                "required": true,
                "key": "email"
              }
            ],
            "available_assignees": [],
            "_id": "602e900a2042255c03cadaf0",
            "title": "service-test-satyen",
            "description": "testing form from service",
            "slug": "service-test-satyen",
            "header_image": "https://hdn-1.addsale.com/x0/support-ticket/files/free/original/KZL86aN5l-service-test-satyen.jpeg",
            "application_id": "000000000000000000000001",
            "created_on": {
              "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
              "platform": "web",
              "meta": {
                "browser": {
                  "name": "Chrome",
                  "version": "88.0.4324.150"
                },
                "os": {
                  "name": "macOS",
                  "version": "11.2.0"
                },
                "platform": {
                  "type": "desktop",
                  "vendor": "Apple"
                },
                "engine": {
                  "name": "Blink"
                }
              }
            },
            "created_by": "5f8147abbd1a0a870f61f1a6",
            "createdAt": "2021-02-18T16:04:26.495Z",
            "updatedAt": "2021-02-18T16:04:26.495Z",
            "__v": 0
          },
          "key": "service-test-satyen",
          "display": "service-test-satyen"
        }
      ]
    }
  }
}
```









---


#### createTicket
Creates a company level ticket



```javascript
// Promise
const promise = lead.createTicket( {  companyId : value,
 body : value });

// Async/Await
const data = await lead.createTicket( {  companyId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company ID for which the data will be returned |  
| body | [AddTicketPayload](#AddTicketPayload) | no | Request body |


Creates a company level ticket

*Returned Response:*




Success


[Ticket](#Ticket)

Success


*Examples:*


Default
```json
{
  "value": {
    "context": {
      "company_id": "884"
    },
    "content": {
      "title": "SOme title Response",
      "description": "<b>Single lineeee</b>: asdf<br><b>Email</b>: asdf@asdf.com<br><b>dfsdf</b>: asdf<br>",
      "attachments": []
    },
    "status": {
      "display": "In Progress",
      "color": "#ffa951",
      "key": "in_progress"
    },
    "priority": {
      "display": "Medium",
      "color": "#f37736",
      "key": "medium"
    },
    "assigned_to": {
      "agent_id": "5d1363adf599d850df93175e",
      "gender": "male",
      "accountType": "user",
      "active": true,
      "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
      "hasOldPasswordHash": false,
      "_id": "5d1363adf599d850df93175e",
      "phoneNumbers": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "countryCode": 91,
          "phone": "9890425946"
        }
      ],
      "firstName": "Nikhil",
      "lastName": "Manapure",
      "emails": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "email": "nikhilmshchs@gmail.com"
        }
      ],
      "username": "nikhilmshchs_gmail_com_38425_20500281",
      "createdAt": "2019-01-01T17:22:38.528Z",
      "updatedAt": "2021-01-22T10:02:42.258Z",
      "uid": "20500281",
      "__v": 56
    },
    "tags": [
      "some-title"
    ],
    "_id": "6012f38557751ee8fc162cf7",
    "created_on": {
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
      "platform": "web",
      "meta": {
        "browser": {
          "name": "Chrome",
          "version": "88.0.4324.96"
        },
        "os": {
          "name": "macOS",
          "version": "10.15.7",
          "versionName": "Catalina"
        },
        "platform": {
          "type": "desktop",
          "vendor": "Apple"
        },
        "engine": {
          "name": "Blink"
        }
      }
    },
    "source": "sales_channel",
    "created_by": {
      "id": "5d1363adf599d850df93175e",
      "user": {
        "gender": "male",
        "accountType": "user",
        "active": true,
        "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
        "hasOldPasswordHash": false,
        "_id": "5d1363adf599d850df93175e",
        "phoneNumbers": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "countryCode": 91,
            "phone": "9890425946"
          }
        ],
        "firstName": "Nikhil",
        "lastName": "Manapure",
        "emails": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "email": "nikhilmshchs@gmail.com"
          }
        ],
        "username": "nikhilmshchs_gmail_com_38425_20500281",
        "createdAt": "2019-01-01T17:22:38.528Z",
        "updatedAt": "2021-01-22T10:02:42.258Z",
        "uid": "20500281",
        "__v": 56
      }
    },
    "response_id": "6012f38457751e0fb8162cf6",
    "category": {
      "form": {
        "login_required": false,
        "should_notify": false,
        "inputs": [
          {
            "required": false,
            "type": "text",
            "enum": [],
            "display": "Single lineeee",
            "key": "single-lineeee",
            "showRegexInput": false
          },
          {
            "required": false,
            "type": "email",
            "enum": [],
            "display": "Email",
            "regex": "\\S+@\\S+\\.\\S+",
            "key": "email",
            "showRegexInput": true
          },
          {
            "required": false,
            "type": "text",
            "enum": [],
            "display": "dfsdf",
            "key": "dfsdf",
            "showRegexInput": false
          }
        ],
        "available_assignees": [
          "5b9b98150df588546aaea6d2",
          "5c45d78395d7504f76c2cb37"
        ],
        "_id": "5fd72db3dc250f8decfc61b2",
        "title": "SOme title",
        "description": "SOme big description",
        "slug": "some-title",
        "application_id": "000000000000000000000003",
        "created_on": {
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Chrome",
              "version": "87.0.4280.88"
            },
            "os": {
              "name": "macOS",
              "version": "10.15.6",
              "versionName": "Catalina"
            },
            "platform": {
              "type": "desktop",
              "vendor": "Apple"
            },
            "engine": {
              "name": "Blink"
            }
          }
        },
        "created_by": "5d1363adf599d850df93175e",
        "createdAt": "2020-12-14T09:17:39.953Z",
        "updatedAt": "2021-01-28T18:48:07.717Z",
        "__v": 0
      },
      "key": "some-title",
      "display": "SOme title"
    },
    "ticket_id": "43",
    "createdAt": "2021-01-28T17:25:25.013Z",
    "updatedAt": "2021-01-28T17:25:33.396Z",
    "__v": 0,
    "video_room_id": "6012f38557751ee8fc162cf7"
  }
}
```









---


#### getTickets
Gets the list of Application level Tickets and/or ticket filters depending on query params



```javascript
// Promise
const promise = lead.getTickets( {  companyId : value,
 applicationId : value,
 items : value,
 filters : value,
 q : value,
 status : value,
 priority : value,
 category : value });

// Async/Await
const data = await lead.getTickets( {  companyId : value,
 applicationId : value,
 items : value,
 filters : value,
 q : value,
 status : value,
 priority : value,
 category : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company ID of the application |   
| applicationId | string | yes | Application ID for which the data will be returned |    
| items | boolean | no | Decides that the reponse will contain the list of tickets |    
| filters | boolean | no | Decides that the reponse will contain the ticket filters |    
| q | string | no | Search through ticket titles and description |    
| status | string | no | Filter tickets on status |    
| priority | PriorityEnum | no | Filter tickets on priority |    
| category | string | no | Filter tickets on category |  



Gets the list of Application level Tickets and/or ticket filters

*Returned Response:*




Success


[TicketList](#TicketList)

Success


*Examples:*


Without items
```json
{
  "value": {
    "filters": {
      "statuses": [
        {
          "display": "Pending",
          "color": "#eae22b",
          "key": "pending"
        },
        {
          "display": "In Progress",
          "color": "#ffa951",
          "key": "in_progress"
        },
        {
          "display": "Resolved",
          "color": "#20c3a6",
          "key": "resolved"
        },
        {
          "display": "Closed",
          "color": "#41434c",
          "key": "closed"
        }
      ],
      "priorities": [
        {
          "display": "Low",
          "color": "#fed766",
          "key": "low"
        },
        {
          "display": "Medium",
          "color": "#f37736",
          "key": "medium"
        },
        {
          "display": "High",
          "color": "#fe4a49",
          "key": "high"
        }
      ],
      "assignees": [],
      "categories": [
        {
          "form": {
            "login_required": false,
            "should_notify": false,
            "inputs": [
              {
                "type": "email",
                "showRegexInput": false,
                "enum": [],
                "regex": "\\S+@\\S+\\.\\S+",
                "display": "email",
                "required": true,
                "key": "email"
              }
            ],
            "available_assignees": [],
            "_id": "602e900a2042255c03cadaf0",
            "title": "service-test-satyen",
            "description": "testing form from service",
            "slug": "service-test-satyen",
            "header_image": "https://hdn-1.addsale.com/x0/support-ticket/files/free/original/KZL86aN5l-service-test-satyen.jpeg",
            "application_id": "000000000000000000000001",
            "created_on": {
              "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
              "platform": "web",
              "meta": {
                "browser": {
                  "name": "Chrome",
                  "version": "88.0.4324.150"
                },
                "os": {
                  "name": "macOS",
                  "version": "11.2.0"
                },
                "platform": {
                  "type": "desktop",
                  "vendor": "Apple"
                },
                "engine": {
                  "name": "Blink"
                }
              }
            },
            "created_by": "5f8147abbd1a0a870f61f1a6",
            "createdAt": "2021-02-18T16:04:26.495Z",
            "updatedAt": "2021-02-18T16:04:26.495Z",
            "__v": 0
          },
          "key": "service-test-satyen",
          "display": "service-test-satyen"
        }
      ]
    }
  }
}
```

With items
```json
{
  "value": {
    "docs": [
      {
        "_id": "602d2652ce284d0b008d5c97",
        "status": {
          "display": "Pending",
          "color": "#eae22b",
          "key": "pending"
        },
        "priority": {
          "display": "Medium",
          "color": "#f37736",
          "key": "medium"
        },
        "assigned_to": {
          "agent_id": "5e79e721768c6bf54b783146",
          "gender": "male",
          "accountType": "user",
          "active": true,
          "profilePicUrl": "https://d2co8r51m5ca2d.cloudfront.net/inapp_banners/default_profile_img.png",
          "hasOldPasswordHash": false,
          "_id": "5e79e721768c6bf54b783146",
          "emails": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "email": "nikhilmshchs@gmail.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "nikhilmanapure@gofynd.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "nikhilmanapure@fynd.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "nikhilmanapure@uniket.store"
            }
          ],
          "phoneNumbers": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "countryCode": 91,
              "phone": "9890425946"
            }
          ],
          "firstName": "Nikhil",
          "lastName": "Manapure",
          "username": "nikhilmanapure_gofynd_com_29298",
          "createdAt": "2020-03-24T10:55:29.298Z",
          "updatedAt": "2020-05-12T07:46:41.816Z",
          "uid": "5567",
          "__v": 2
        },
        "tags": [
          "asdf444"
        ],
        "context": {
          "application_id": "000000000000000000000001",
          "company_id": "1"
        },
        "created_on": {
          "user_agent": "Fynd Platform/0.0.1 (com.fynd.platform; build:3; iOS 14.2.0) Alamofire/5.0.2",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Fynd Platform",
              "version": "0.0.1"
            }
          }
        },
        "source": "sales_channel",
        "content": {
          "title": "asdf444 Response",
          "description": "",
          "attachments": []
        },
        "response_id": "602d2652ce284dee3c8d5c96",
        "category": {
          "form": {
            "login_required": false,
            "should_notify": true,
            "inputs": [
              {
                "type": "text",
                "showRegexInput": false,
                "enum": [],
                "display": "asdf",
                "key": "asdf"
              },
              {
                "type": "mobile",
                "showRegexInput": false,
                "enum": [],
                "display": "mob num",
                "regex": "[0-9]{10}$",
                "key": "mob-num"
              }
            ],
            "available_assignees": [
              "5e79e721768c6bf54b783146"
            ],
            "_id": "60124e4a4d2bc363625e1bf4",
            "title": "asdf444",
            "description": "adf",
            "slug": "asdf444",
            "application_id": "000000000000000000000001",
            "created_on": {
              "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
              "platform": "web",
              "meta": {
                "browser": {
                  "name": "Chrome",
                  "version": "88.0.4324.96"
                },
                "os": {
                  "name": "macOS",
                  "version": "10.15.7",
                  "versionName": "Catalina"
                },
                "platform": {
                  "type": "desktop",
                  "vendor": "Apple"
                },
                "engine": {
                  "name": "Blink"
                }
              }
            },
            "created_by": "5e79e721768c6bf54b783146",
            "createdAt": "2021-01-28T05:40:26.271Z",
            "updatedAt": "2021-02-18T16:02:32.086Z",
            "__v": 0,
            "poll_for_assignment": {
              "duration": 20,
              "message": "We are looking for executive to connect you",
              "success_message": "Executive found",
              "failure_message": "All our executives are busy at the moment, We have accepted your request and someone will connect with you soon!"
            }
          },
          "key": "asdf444",
          "display": "asdf444"
        },
        "ticket_id": "472",
        "createdAt": "2021-02-17T14:21:06.774Z",
        "updatedAt": "2021-02-17T14:21:06.774Z",
        "__v": 0,
        "id": "602d2652ce284d0b008d5c97"
      }
    ],
    "total": 472,
    "limit": 10,
    "page": 1,
    "pages": 48,
    "filters": {
      "statuses": [
        {
          "display": "Pending",
          "color": "#eae22b",
          "key": "pending"
        },
        {
          "display": "In Progress",
          "color": "#ffa951",
          "key": "in_progress"
        },
        {
          "display": "Resolved",
          "color": "#20c3a6",
          "key": "resolved"
        },
        {
          "display": "Closed",
          "color": "#41434c",
          "key": "closed"
        }
      ],
      "priorities": [
        {
          "display": "Low",
          "color": "#fed766",
          "key": "low"
        },
        {
          "display": "Medium",
          "color": "#f37736",
          "key": "medium"
        },
        {
          "display": "High",
          "color": "#fe4a49",
          "key": "high"
        }
      ],
      "assignees": [],
      "categories": [
        {
          "form": {
            "login_required": false,
            "should_notify": false,
            "inputs": [
              {
                "type": "email",
                "showRegexInput": false,
                "enum": [],
                "regex": "\\S+@\\S+\\.\\S+",
                "display": "email",
                "required": true,
                "key": "email"
              }
            ],
            "available_assignees": [],
            "_id": "602e900a2042255c03cadaf0",
            "title": "service-test-satyen",
            "description": "testing form from service",
            "slug": "service-test-satyen",
            "header_image": "https://hdn-1.addsale.com/x0/support-ticket/files/free/original/KZL86aN5l-service-test-satyen.jpeg",
            "application_id": "000000000000000000000001",
            "created_on": {
              "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
              "platform": "web",
              "meta": {
                "browser": {
                  "name": "Chrome",
                  "version": "88.0.4324.150"
                },
                "os": {
                  "name": "macOS",
                  "version": "11.2.0"
                },
                "platform": {
                  "type": "desktop",
                  "vendor": "Apple"
                },
                "engine": {
                  "name": "Blink"
                }
              }
            },
            "created_by": "5f8147abbd1a0a870f61f1a6",
            "createdAt": "2021-02-18T16:04:26.495Z",
            "updatedAt": "2021-02-18T16:04:26.495Z",
            "__v": 0
          },
          "key": "service-test-satyen",
          "display": "service-test-satyen"
        }
      ]
    }
  }
}
```









---


#### getTicket
Retreives ticket details of a company level ticket with ticket ID



```javascript
// Promise
const promise = lead.getTicket( {  companyId : value,
 id : value });

// Async/Await
const data = await lead.getTicket( {  companyId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company ID for which the data will be returned |   
| id | string | yes | Tiket ID of the ticket to be fetched |  



Retreives ticket details of a company level ticket

*Returned Response:*




Success


[Ticket](#Ticket)

Success


*Examples:*


Default
```json
{
  "value": {
    "context": {
      "company_id": "1"
    },
    "content": {
      "title": "SOme title Response",
      "description": "<b>Single lineeee</b>: asdf<br><b>Email</b>: asdf@asdf.com<br><b>dfsdf</b>: asdf<br>",
      "attachments": []
    },
    "status": {
      "display": "In Progress",
      "color": "#ffa951",
      "key": "in_progress"
    },
    "priority": {
      "display": "Medium",
      "color": "#f37736",
      "key": "medium"
    },
    "assigned_to": {
      "agent_id": "5d1363adf599d850df93175e",
      "gender": "male",
      "accountType": "user",
      "active": true,
      "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
      "hasOldPasswordHash": false,
      "_id": "5d1363adf599d850df93175e",
      "phoneNumbers": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "countryCode": 91,
          "phone": "9890425946"
        }
      ],
      "firstName": "Nikhil",
      "lastName": "Manapure",
      "emails": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "email": "nikhilmshchs@gmail.com"
        }
      ],
      "username": "nikhilmshchs_gmail_com_38425_20500281",
      "createdAt": "2019-01-01T17:22:38.528Z",
      "updatedAt": "2021-01-22T10:02:42.258Z",
      "uid": "20500281",
      "__v": 56
    },
    "tags": [
      "some-title"
    ],
    "_id": "6012f38557751ee8fc162cf7",
    "created_on": {
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
      "platform": "web",
      "meta": {
        "browser": {
          "name": "Chrome",
          "version": "88.0.4324.96"
        },
        "os": {
          "name": "macOS",
          "version": "10.15.7",
          "versionName": "Catalina"
        },
        "platform": {
          "type": "desktop",
          "vendor": "Apple"
        },
        "engine": {
          "name": "Blink"
        }
      }
    },
    "source": "sales_channel",
    "created_by": {
      "id": "5d1363adf599d850df93175e",
      "user": {
        "gender": "male",
        "accountType": "user",
        "active": true,
        "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
        "hasOldPasswordHash": false,
        "_id": "5d1363adf599d850df93175e",
        "phoneNumbers": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "countryCode": 91,
            "phone": "9890425946"
          }
        ],
        "firstName": "Nikhil",
        "lastName": "Manapure",
        "emails": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "email": "nikhilmshchs@gmail.com"
          }
        ],
        "username": "nikhilmshchs_gmail_com_38425_20500281",
        "createdAt": "2019-01-01T17:22:38.528Z",
        "updatedAt": "2021-01-22T10:02:42.258Z",
        "uid": "20500281",
        "__v": 56
      }
    },
    "response_id": "6012f38457751e0fb8162cf6",
    "category": {
      "form": {
        "login_required": false,
        "should_notify": false,
        "inputs": [
          {
            "required": false,
            "type": "text",
            "enum": [],
            "display": "Single lineeee",
            "key": "single-lineeee",
            "showRegexInput": false
          },
          {
            "required": false,
            "type": "email",
            "enum": [],
            "display": "Email",
            "regex": "\\S+@\\S+\\.\\S+",
            "key": "email",
            "showRegexInput": true
          },
          {
            "required": false,
            "type": "text",
            "enum": [],
            "display": "dfsdf",
            "key": "dfsdf",
            "showRegexInput": false
          }
        ],
        "available_assignees": [
          "5b9b98150df588546aaea6d2",
          "5c45d78395d7504f76c2cb37"
        ],
        "_id": "5fd72db3dc250f8decfc61b2",
        "title": "SOme title",
        "description": "SOme big description",
        "slug": "some-title",
        "application_id": "000000000000000000000003",
        "created_on": {
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Chrome",
              "version": "87.0.4280.88"
            },
            "os": {
              "name": "macOS",
              "version": "10.15.6",
              "versionName": "Catalina"
            },
            "platform": {
              "type": "desktop",
              "vendor": "Apple"
            },
            "engine": {
              "name": "Blink"
            }
          }
        },
        "created_by": "5d1363adf599d850df93175e",
        "createdAt": "2020-12-14T09:17:39.953Z",
        "updatedAt": "2021-01-28T18:48:07.717Z",
        "__v": 0
      },
      "key": "some-title",
      "display": "SOme title"
    },
    "ticket_id": "43",
    "createdAt": "2021-01-28T17:25:25.013Z",
    "updatedAt": "2021-01-28T17:25:33.396Z",
    "__v": 0,
    "video_room_id": "6012f38557751ee8fc162cf7"
  }
}
```









---


#### editTicket
Edits ticket details of a company level ticket



```javascript
// Promise
const promise = lead.editTicket( {  companyId : value,
 id : value,
 body : value });

// Async/Await
const data = await lead.editTicket( {  companyId : value,
 id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company ID for ticket |   
| id | string | yes | Ticket ID of ticket to be edited |  
| body | [EditTicketPayload](#EditTicketPayload) | no | Request body |


Edits ticket details of a company level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes

*Returned Response:*




Success


[Ticket](#Ticket)

Success


*Examples:*


Default
```json
{
  "value": {
    "context": {
      "company_id": "1"
    },
    "content": {
      "title": "SOme title Response",
      "description": "<b>Single lineeee</b>: asdf<br><b>Email</b>: asdf@asdf.com<br><b>dfsdf</b>: asdf<br>",
      "attachments": []
    },
    "status": {
      "display": "In Progress",
      "color": "#ffa951",
      "key": "in_progress"
    },
    "priority": {
      "display": "Medium",
      "color": "#f37736",
      "key": "medium"
    },
    "assigned_to": {
      "agent_id": "5d1363adf599d850df93175e",
      "gender": "male",
      "accountType": "user",
      "active": true,
      "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
      "hasOldPasswordHash": false,
      "_id": "5d1363adf599d850df93175e",
      "phoneNumbers": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "countryCode": 91,
          "phone": "9890425946"
        }
      ],
      "firstName": "Nikhil",
      "lastName": "Manapure",
      "emails": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "email": "nikhilmshchs@gmail.com"
        }
      ],
      "username": "nikhilmshchs_gmail_com_38425_20500281",
      "createdAt": "2019-01-01T17:22:38.528Z",
      "updatedAt": "2021-01-22T10:02:42.258Z",
      "uid": "20500281",
      "__v": 56
    },
    "tags": [
      "some-title"
    ],
    "_id": "6012f38557751ee8fc162cf7",
    "created_on": {
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
      "platform": "web",
      "meta": {
        "browser": {
          "name": "Chrome",
          "version": "88.0.4324.96"
        },
        "os": {
          "name": "macOS",
          "version": "10.15.7",
          "versionName": "Catalina"
        },
        "platform": {
          "type": "desktop",
          "vendor": "Apple"
        },
        "engine": {
          "name": "Blink"
        }
      }
    },
    "source": "sales_channel",
    "created_by": {
      "id": "5d1363adf599d850df93175e",
      "user": {
        "gender": "male",
        "accountType": "user",
        "active": true,
        "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
        "hasOldPasswordHash": false,
        "_id": "5d1363adf599d850df93175e",
        "phoneNumbers": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "countryCode": 91,
            "phone": "9890425946"
          }
        ],
        "firstName": "Nikhil",
        "lastName": "Manapure",
        "emails": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "email": "nikhilmshchs@gmail.com"
          }
        ],
        "username": "nikhilmshchs_gmail_com_38425_20500281",
        "createdAt": "2019-01-01T17:22:38.528Z",
        "updatedAt": "2021-01-22T10:02:42.258Z",
        "uid": "20500281",
        "__v": 56
      }
    },
    "response_id": "6012f38457751e0fb8162cf6",
    "category": {
      "form": {
        "login_required": false,
        "should_notify": false,
        "inputs": [
          {
            "required": false,
            "type": "text",
            "enum": [],
            "display": "Single lineeee",
            "key": "single-lineeee",
            "showRegexInput": false
          },
          {
            "required": false,
            "type": "email",
            "enum": [],
            "display": "Email",
            "regex": "\\S+@\\S+\\.\\S+",
            "key": "email",
            "showRegexInput": true
          },
          {
            "required": false,
            "type": "text",
            "enum": [],
            "display": "dfsdf",
            "key": "dfsdf",
            "showRegexInput": false
          }
        ],
        "available_assignees": [
          "5b9b98150df588546aaea6d2",
          "5c45d78395d7504f76c2cb37"
        ],
        "_id": "5fd72db3dc250f8decfc61b2",
        "title": "SOme title",
        "description": "SOme big description",
        "slug": "some-title",
        "application_id": "000000000000000000000003",
        "created_on": {
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Chrome",
              "version": "87.0.4280.88"
            },
            "os": {
              "name": "macOS",
              "version": "10.15.6",
              "versionName": "Catalina"
            },
            "platform": {
              "type": "desktop",
              "vendor": "Apple"
            },
            "engine": {
              "name": "Blink"
            }
          }
        },
        "created_by": "5d1363adf599d850df93175e",
        "createdAt": "2020-12-14T09:17:39.953Z",
        "updatedAt": "2021-01-28T18:48:07.717Z",
        "__v": 0
      },
      "key": "some-title",
      "display": "SOme title"
    },
    "ticket_id": "43",
    "createdAt": "2021-01-28T17:25:25.013Z",
    "updatedAt": "2021-01-28T17:25:33.396Z",
    "__v": 0,
    "video_room_id": "6012f38557751ee8fc162cf7"
  }
}
```









---


#### getTicket
Retreives ticket details of a application level ticket



```javascript
// Promise
const promise = lead.getTicket( {  companyId : value,
 applicationId : value,
 id : value });

// Async/Await
const data = await lead.getTicket( {  companyId : value,
 applicationId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company ID of the application |   
| applicationId | string | yes | Application ID for which the data will be returned |   
| id | string | yes | Tiket ID of the ticket to be fetched |  



Retreives ticket details of a application level ticket with ticket ID

*Returned Response:*




Success


[Ticket](#Ticket)

Success


*Examples:*


Default
```json
{
  "value": {
    "context": {
      "application_id": "000000000000000000000003",
      "company_id": "884"
    },
    "content": {
      "title": "SOme title Response",
      "description": "<b>Single lineeee</b>: asdf<br><b>Email</b>: asdf@asdf.com<br><b>dfsdf</b>: asdf<br>",
      "attachments": []
    },
    "status": {
      "display": "In Progress",
      "color": "#ffa951",
      "key": "in_progress"
    },
    "priority": {
      "display": "Medium",
      "color": "#f37736",
      "key": "medium"
    },
    "assigned_to": {
      "agent_id": "5d1363adf599d850df93175e",
      "gender": "male",
      "accountType": "user",
      "active": true,
      "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
      "hasOldPasswordHash": false,
      "_id": "5d1363adf599d850df93175e",
      "phoneNumbers": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "countryCode": 91,
          "phone": "9890425946"
        }
      ],
      "firstName": "Nikhil",
      "lastName": "Manapure",
      "emails": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "email": "nikhilmshchs@gmail.com"
        }
      ],
      "username": "nikhilmshchs_gmail_com_38425_20500281",
      "createdAt": "2019-01-01T17:22:38.528Z",
      "updatedAt": "2021-01-22T10:02:42.258Z",
      "uid": "20500281",
      "__v": 56
    },
    "tags": [
      "some-title"
    ],
    "_id": "6012f38557751ee8fc162cf7",
    "created_on": {
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
      "platform": "web",
      "meta": {
        "browser": {
          "name": "Chrome",
          "version": "88.0.4324.96"
        },
        "os": {
          "name": "macOS",
          "version": "10.15.7",
          "versionName": "Catalina"
        },
        "platform": {
          "type": "desktop",
          "vendor": "Apple"
        },
        "engine": {
          "name": "Blink"
        }
      }
    },
    "source": "sales_channel",
    "created_by": {
      "id": "5d1363adf599d850df93175e",
      "user": {
        "gender": "male",
        "accountType": "user",
        "active": true,
        "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
        "hasOldPasswordHash": false,
        "_id": "5d1363adf599d850df93175e",
        "phoneNumbers": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "countryCode": 91,
            "phone": "9890425946"
          }
        ],
        "firstName": "Nikhil",
        "lastName": "Manapure",
        "emails": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "email": "nikhilmshchs@gmail.com"
          }
        ],
        "username": "nikhilmshchs_gmail_com_38425_20500281",
        "createdAt": "2019-01-01T17:22:38.528Z",
        "updatedAt": "2021-01-22T10:02:42.258Z",
        "uid": "20500281",
        "__v": 56
      }
    },
    "response_id": "6012f38457751e0fb8162cf6",
    "category": {
      "form": {
        "login_required": false,
        "should_notify": false,
        "inputs": [
          {
            "required": false,
            "type": "text",
            "enum": [],
            "display": "Single lineeee",
            "key": "single-lineeee",
            "showRegexInput": false
          },
          {
            "required": false,
            "type": "email",
            "enum": [],
            "display": "Email",
            "regex": "\\S+@\\S+\\.\\S+",
            "key": "email",
            "showRegexInput": true
          },
          {
            "required": false,
            "type": "text",
            "enum": [],
            "display": "dfsdf",
            "key": "dfsdf",
            "showRegexInput": false
          }
        ],
        "available_assignees": [
          "5b9b98150df588546aaea6d2",
          "5c45d78395d7504f76c2cb37"
        ],
        "_id": "5fd72db3dc250f8decfc61b2",
        "title": "SOme title",
        "description": "SOme big description",
        "slug": "some-title",
        "application_id": "000000000000000000000003",
        "created_on": {
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Chrome",
              "version": "87.0.4280.88"
            },
            "os": {
              "name": "macOS",
              "version": "10.15.6",
              "versionName": "Catalina"
            },
            "platform": {
              "type": "desktop",
              "vendor": "Apple"
            },
            "engine": {
              "name": "Blink"
            }
          }
        },
        "created_by": "5d1363adf599d850df93175e",
        "createdAt": "2020-12-14T09:17:39.953Z",
        "updatedAt": "2021-01-28T18:48:07.717Z",
        "__v": 0
      },
      "key": "some-title",
      "display": "SOme title"
    },
    "ticket_id": "43",
    "createdAt": "2021-01-28T17:25:25.013Z",
    "updatedAt": "2021-01-28T17:25:33.396Z",
    "__v": 0,
    "video_room_id": "6012f38557751ee8fc162cf7"
  }
}
```









---


#### editTicket
Edits ticket details of a application level ticket



```javascript
// Promise
const promise = lead.editTicket( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });

// Async/Await
const data = await lead.editTicket( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company ID of the application |   
| applicationId | string | yes | Application ID for ticket |   
| id | string | yes | Ticket ID of ticket to be edited |  
| body | [EditTicketPayload](#EditTicketPayload) | no | Request body |


Edits ticket details of a application level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes

*Returned Response:*




Success


[Ticket](#Ticket)

Success


*Examples:*


Default
```json
{
  "value": {
    "context": {
      "application_id": "000000000000000000000003",
      "company_id": "884"
    },
    "content": {
      "title": "SOme title Response",
      "description": "<b>Single lineeee</b>: asdf<br><b>Email</b>: asdf@asdf.com<br><b>dfsdf</b>: asdf<br>",
      "attachments": []
    },
    "status": {
      "display": "In Progress",
      "color": "#ffa951",
      "key": "in_progress"
    },
    "priority": {
      "display": "Medium",
      "color": "#f37736",
      "key": "medium"
    },
    "assigned_to": {
      "agent_id": "5d1363adf599d850df93175e",
      "gender": "male",
      "accountType": "user",
      "active": true,
      "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
      "hasOldPasswordHash": false,
      "_id": "5d1363adf599d850df93175e",
      "phoneNumbers": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "countryCode": 91,
          "phone": "9890425946"
        }
      ],
      "firstName": "Nikhil",
      "lastName": "Manapure",
      "emails": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "email": "nikhilmshchs@gmail.com"
        }
      ],
      "username": "nikhilmshchs_gmail_com_38425_20500281",
      "createdAt": "2019-01-01T17:22:38.528Z",
      "updatedAt": "2021-01-22T10:02:42.258Z",
      "uid": "20500281",
      "__v": 56
    },
    "tags": [
      "some-title"
    ],
    "_id": "6012f38557751ee8fc162cf7",
    "created_on": {
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
      "platform": "web",
      "meta": {
        "browser": {
          "name": "Chrome",
          "version": "88.0.4324.96"
        },
        "os": {
          "name": "macOS",
          "version": "10.15.7",
          "versionName": "Catalina"
        },
        "platform": {
          "type": "desktop",
          "vendor": "Apple"
        },
        "engine": {
          "name": "Blink"
        }
      }
    },
    "source": "sales_channel",
    "created_by": {
      "id": "5d1363adf599d850df93175e",
      "user": {
        "gender": "male",
        "accountType": "user",
        "active": true,
        "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
        "hasOldPasswordHash": false,
        "_id": "5d1363adf599d850df93175e",
        "phoneNumbers": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "countryCode": 91,
            "phone": "9890425946"
          }
        ],
        "firstName": "Nikhil",
        "lastName": "Manapure",
        "emails": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "email": "nikhilmshchs@gmail.com"
          }
        ],
        "username": "nikhilmshchs_gmail_com_38425_20500281",
        "createdAt": "2019-01-01T17:22:38.528Z",
        "updatedAt": "2021-01-22T10:02:42.258Z",
        "uid": "20500281",
        "__v": 56
      }
    },
    "response_id": "6012f38457751e0fb8162cf6",
    "category": {
      "form": {
        "login_required": false,
        "should_notify": false,
        "inputs": [
          {
            "required": false,
            "type": "text",
            "enum": [],
            "display": "Single lineeee",
            "key": "single-lineeee",
            "showRegexInput": false
          },
          {
            "required": false,
            "type": "email",
            "enum": [],
            "display": "Email",
            "regex": "\\S+@\\S+\\.\\S+",
            "key": "email",
            "showRegexInput": true
          },
          {
            "required": false,
            "type": "text",
            "enum": [],
            "display": "dfsdf",
            "key": "dfsdf",
            "showRegexInput": false
          }
        ],
        "available_assignees": [
          "5b9b98150df588546aaea6d2",
          "5c45d78395d7504f76c2cb37"
        ],
        "_id": "5fd72db3dc250f8decfc61b2",
        "title": "SOme title",
        "description": "SOme big description",
        "slug": "some-title",
        "application_id": "000000000000000000000003",
        "created_on": {
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Chrome",
              "version": "87.0.4280.88"
            },
            "os": {
              "name": "macOS",
              "version": "10.15.6",
              "versionName": "Catalina"
            },
            "platform": {
              "type": "desktop",
              "vendor": "Apple"
            },
            "engine": {
              "name": "Blink"
            }
          }
        },
        "created_by": "5d1363adf599d850df93175e",
        "createdAt": "2020-12-14T09:17:39.953Z",
        "updatedAt": "2021-01-28T18:48:07.717Z",
        "__v": 0
      },
      "key": "some-title",
      "display": "SOme title"
    },
    "ticket_id": "43",
    "createdAt": "2021-01-28T17:25:25.013Z",
    "updatedAt": "2021-01-28T17:25:33.396Z",
    "__v": 0,
    "video_room_id": "6012f38557751ee8fc162cf7"
  }
}
```









---


#### createHistory
Create history for specific company level ticket



```javascript
// Promise
const promise = lead.createHistory( {  companyId : value,
 id : value,
 body : value });

// Async/Await
const data = await lead.createHistory( {  companyId : value,
 id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company ID for ticket |   
| id | string | yes | Ticket ID for which history is created |  
| body | [TicketHistoryPayload](#TicketHistoryPayload) | no | Request body |


Create history for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.

*Returned Response:*




Success


[TicketHistory](#TicketHistory)

Success


*Examples:*


Default
```json
{
  "value": {
    "_id": "601a9d52c26687d086c499ef",
    "ticket_id": "43",
    "type": "comment",
    "value": {
      "text": "d",
      "media": []
    },
    "created_on": {
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
      "platform": "web",
      "meta": {
        "browser": {
          "name": "Chrome",
          "version": "88.0.4324.96"
        },
        "os": {
          "name": "macOS",
          "version": "10.15.7",
          "versionName": "Catalina"
        },
        "platform": {
          "type": "desktop",
          "vendor": "Apple"
        },
        "engine": {
          "name": "Blink"
        }
      }
    },
    "created_by": "5d1363adf599d850df93175e",
    "createdAt": "2021-02-03T12:55:46.808Z",
    "updatedAt": "2021-02-03T12:55:46.808Z",
    "__v": 0
  }
}
```









---


#### getTicketHistory
Gets history list for specific company level ticket



```javascript
// Promise
const promise = lead.getTicketHistory( {  companyId : value,
 id : value });

// Async/Await
const data = await lead.getTicketHistory( {  companyId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company ID for ticket |   
| id | string | yes | Ticket ID for which history is to be fetched |  



Gets history list for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.

*Returned Response:*




Success


[TicketHistoryList](#TicketHistoryList)

Success


*Examples:*


Default
```json
{
  "value": {
    "docs": [
      {
        "_id": "602e5384204225eed5cadae7",
        "ticket_id": "41",
        "type": "comment",
        "value": {
          "text": "hello service",
          "media": []
        },
        "created_on": {
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Chrome",
              "version": "88.0.4324.150"
            },
            "os": {
              "name": "macOS",
              "version": "11.2.0"
            },
            "platform": {
              "type": "desktop",
              "vendor": "Apple"
            },
            "engine": {
              "name": "Blink"
            }
          }
        },
        "created_by": {
          "gender": "male",
          "accountType": "user",
          "active": true,
          "profilePicUrl": "https://hdn-1.fynd.com/company/884/applications/000000000000000000000001/theme/pictures/free/original/default-profile_nxhzui.png",
          "hasOldPasswordHash": false,
          "_id": "5f8147abbd1a0a870f61f1a6",
          "phoneNumbers": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "phone": "8412805281",
              "countryCode": 91
            }
          ],
          "firstName": "Satyen",
          "lastName": "Maurya",
          "emails": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "email": "satyenmaurya95@gmail.com"
            }
          ],
          "username": "satyenmaurya95_gmail_com_11118",
          "createdAt": "2020-10-10T05:33:31.119Z",
          "updatedAt": "2020-10-10T05:33:31.119Z",
          "uid": "5678",
          "__v": 0
        },
        "createdAt": "2021-02-18T11:46:12.522Z",
        "updatedAt": "2021-02-18T11:46:12.522Z",
        "__v": 0,
        "id": "602e5384204225eed5cadae7"
      },
      {
        "_id": "60372aa78a046d4d79c46e15",
        "ticket_id": "41",
        "type": "diff",
        "value": {
          "status": [
            "pending",
            "in_progress"
          ]
        },
        "created_by": {
          "gender": "male",
          "accountType": "user",
          "active": true,
          "profilePicUrl": "https://d2co8r51m5ca2d.cloudfront.net/inapp_banners/default_profile_img.png",
          "hasOldPasswordHash": false,
          "_id": "5e79e721768c6bf54b783146",
          "emails": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "email": "nikhilmshchs@gmail.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "nikhilmanapure@gofynd.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "nikhilmanapure@fynd.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "nikhilmanapure@uniket.store"
            }
          ],
          "phoneNumbers": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "countryCode": 91,
              "phone": "9890425946"
            }
          ],
          "firstName": "Nikhil",
          "lastName": "Manapure",
          "username": "nikhilmanapure_gofynd_com_29298",
          "createdAt": "2020-03-24T10:55:29.298Z",
          "updatedAt": "2020-05-12T07:46:41.816Z",
          "uid": "5567",
          "__v": 2
        },
        "createdAt": "2021-02-25T04:42:15.225Z",
        "updatedAt": "2021-02-25T04:42:15.225Z",
        "__v": 0,
        "id": "60372aa78a046d4d79c46e15"
      }
    ],
    "total": 2,
    "limit": 100,
    "page": 1,
    "pages": 1
  }
}
```









---


#### getFeedbacks
Gets a list of feedback submitted against that ticket



```javascript
// Promise
const promise = lead.getFeedbacks( {  companyId : value,
 id : value });

// Async/Await
const data = await lead.getFeedbacks( {  companyId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company ID for ticket |   
| id | string | yes | Ticket ID for which feedbacks are to be fetched |  



Gets a list of feedback submitted against that ticket

*Returned Response:*




Success


[TicketFeedbackList](#TicketFeedbackList)

Success


*Examples:*


Default
```json
{
  "value": {
    "items": [
      {
        "_id": "60c255bf00ecabfad19e9601",
        "company_id": "1",
        "ticket_id": "6095812876d2bf17143cb3b3",
        "user": {
          "_id": "5f8147abbd1a0a870f61f1a6",
          "authenticated": true,
          "user_id": "5f8147abbd1a0a870f61f1a6"
        },
        "category": "customers",
        "response": {
          "audio": 2,
          "video": 6
        },
        "createdAt": "2021-06-10T18:11:11.349Z",
        "updatedAt": "2021-06-10T18:11:11.349Z",
        "__v": 0
      }
    ]
  }
}
```









---


#### submitFeedback
Submit a response for feeback form against that ticket



```javascript
// Promise
const promise = lead.submitFeedback( {  companyId : value,
 id : value,
 body : value });

// Async/Await
const data = await lead.submitFeedback( {  companyId : value,
 id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company ID for ticket |   
| id | string | yes | Ticket ID for which feedback is to be submitted |  
| body | [TicketFeedbackPayload](#TicketFeedbackPayload) | no | Request body |


Submit a response for feeback form against that ticket

*Returned Response:*




Success


[TicketFeedback](#TicketFeedback)

Success


*Examples:*


Default
```json
{
  "value": {
    "_id": "60c255bf00ecabfad19e9601",
    "company_id": "1",
    "ticket_id": "6095812876d2bf17143cb3b3",
    "user": {
      "_id": "5f8147abbd1a0a870f61f1a6",
      "authenticated": true,
      "user_id": "5f8147abbd1a0a870f61f1a6"
    },
    "category": "customers",
    "response": {
      "audio": 2,
      "video": 6
    },
    "createdAt": "2021-06-10T18:11:11.349Z",
    "updatedAt": "2021-06-10T18:11:11.349Z",
    "__v": 0
  }
}
```









---


#### createHistory
Create history for specific application level ticket



```javascript
// Promise
const promise = lead.createHistory( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });

// Async/Await
const data = await lead.createHistory( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company ID of the application |   
| applicationId | string | yes | Application ID for ticket |   
| id | string | yes | Ticket ID for which history is created |  
| body | [TicketHistoryPayload](#TicketHistoryPayload) | no | Request body |


Create history for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.

*Returned Response:*




Success


[TicketHistory](#TicketHistory)

Success


*Examples:*


Default
```json
{
  "value": {
    "_id": "601a9d52c26687d086c499ef",
    "ticket_id": "41",
    "type": "comment",
    "value": {
      "text": "d",
      "media": []
    },
    "created_on": {
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
      "platform": "web",
      "meta": {
        "browser": {
          "name": "Chrome",
          "version": "88.0.4324.96"
        },
        "os": {
          "name": "macOS",
          "version": "10.15.7",
          "versionName": "Catalina"
        },
        "platform": {
          "type": "desktop",
          "vendor": "Apple"
        },
        "engine": {
          "name": "Blink"
        }
      }
    },
    "created_by": "5d1363adf599d850df93175e",
    "createdAt": "2021-02-03T12:55:46.808Z",
    "updatedAt": "2021-02-03T12:55:46.808Z",
    "__v": 0
  }
}
```









---


#### getTicketHistory
Gets history list for specific application level ticket



```javascript
// Promise
const promise = lead.getTicketHistory( {  companyId : value,
 applicationId : value,
 id : value });

// Async/Await
const data = await lead.getTicketHistory( {  companyId : value,
 applicationId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company ID of application |   
| applicationId | string | yes | Application ID for ticket |   
| id | string | yes | Ticket ID for which history is to be fetched |  



Gets history list for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.

*Returned Response:*




Success


[TicketHistoryList](#TicketHistoryList)

Success


*Examples:*


Default
```json
{
  "value": {
    "docs": [
      {
        "_id": "602e5384204225eed5cadae7",
        "ticket_id": "41",
        "type": "comment",
        "value": {
          "text": "hello service",
          "media": []
        },
        "created_on": {
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Chrome",
              "version": "88.0.4324.150"
            },
            "os": {
              "name": "macOS",
              "version": "11.2.0"
            },
            "platform": {
              "type": "desktop",
              "vendor": "Apple"
            },
            "engine": {
              "name": "Blink"
            }
          }
        },
        "created_by": {
          "gender": "male",
          "accountType": "user",
          "active": true,
          "profilePicUrl": "https://hdn-1.fynd.com/company/884/applications/000000000000000000000001/theme/pictures/free/original/default-profile_nxhzui.png",
          "hasOldPasswordHash": false,
          "_id": "5f8147abbd1a0a870f61f1a6",
          "phoneNumbers": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "phone": "8412805281",
              "countryCode": 91
            }
          ],
          "firstName": "Satyen",
          "lastName": "Maurya",
          "emails": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "email": "satyenmaurya95@gmail.com"
            }
          ],
          "username": "satyenmaurya95_gmail_com_11118",
          "createdAt": "2020-10-10T05:33:31.119Z",
          "updatedAt": "2020-10-10T05:33:31.119Z",
          "uid": "5678",
          "__v": 0
        },
        "createdAt": "2021-02-18T11:46:12.522Z",
        "updatedAt": "2021-02-18T11:46:12.522Z",
        "__v": 0,
        "id": "602e5384204225eed5cadae7"
      },
      {
        "_id": "60372aa78a046d4d79c46e15",
        "ticket_id": "41",
        "type": "diff",
        "value": {
          "status": [
            "pending",
            "in_progress"
          ]
        },
        "created_by": {
          "gender": "male",
          "accountType": "user",
          "active": true,
          "profilePicUrl": "https://d2co8r51m5ca2d.cloudfront.net/inapp_banners/default_profile_img.png",
          "hasOldPasswordHash": false,
          "_id": "5e79e721768c6bf54b783146",
          "emails": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "email": "nikhilmshchs@gmail.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "nikhilmanapure@gofynd.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "nikhilmanapure@fynd.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "nikhilmanapure@uniket.store"
            }
          ],
          "phoneNumbers": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "countryCode": 91,
              "phone": "9890425946"
            }
          ],
          "firstName": "Nikhil",
          "lastName": "Manapure",
          "username": "nikhilmanapure_gofynd_com_29298",
          "createdAt": "2020-03-24T10:55:29.298Z",
          "updatedAt": "2020-05-12T07:46:41.816Z",
          "uid": "5567",
          "__v": 2
        },
        "createdAt": "2021-02-25T04:42:15.225Z",
        "updatedAt": "2021-02-25T04:42:15.225Z",
        "__v": 0,
        "id": "60372aa78a046d4d79c46e15"
      }
    ],
    "total": 2,
    "limit": 100,
    "page": 1,
    "pages": 1
  }
}
```









---


#### getCustomForm
Get specific custom form using it's slug



```javascript
// Promise
const promise = lead.getCustomForm( {  companyId : value,
 applicationId : value,
 slug : value });

// Async/Await
const data = await lead.getCustomForm( {  companyId : value,
 applicationId : value,
 slug : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company ID of the application |   
| applicationId | string | yes | Application ID for the form |   
| slug | string | yes | Slug of form whose response is getting submitted |  



Get specific custom form using it's slug, this is used to view the form.

*Returned Response:*




Success


[CustomForm](#CustomForm)

Success


*Examples:*


Default
```json
{
  "value": {
    "login_required": false,
    "should_notify": false,
    "inputs": [
      {
        "required": false,
        "type": "text",
        "display": "Name",
        "placeholder": "Please enter your name",
        "key": "name"
      }
    ],
    "available_assignees": [],
    "_id": "5fd258a9088f957f34c288fc",
    "title": "trail form",
    "description": "Trail form description",
    "slug": "trail-form",
    "application_id": "000000000000000000000003",
    "created_on": {
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
      "platform": "web",
      "meta": {
        "browser": {
          "name": "Chrome",
          "version": "87.0.4280.88"
        },
        "os": {
          "name": "macOS",
          "version": "10.15.6",
          "versionName": "Catalina"
        },
        "platform": {
          "type": "desktop",
          "vendor": "Apple"
        },
        "engine": {
          "name": "Blink"
        }
      }
    },
    "created_by": "5d1363adf599d850df93175e",
    "createdAt": "2020-12-10T17:19:37.515Z",
    "updatedAt": "2020-12-10T17:19:43.214Z",
    "__v": 0
  }
}
```









---


#### editCustomForm
Edit the given custom form



```javascript
// Promise
const promise = lead.editCustomForm( {  companyId : value,
 applicationId : value,
 slug : value,
 body : value });

// Async/Await
const data = await lead.editCustomForm( {  companyId : value,
 applicationId : value,
 slug : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company ID of the application |   
| applicationId | string | yes | Application ID for the form |   
| slug | string | yes | Slug of form whose response is getting submitted |  
| body | [EditCustomFormPayload](#EditCustomFormPayload) | no | Request body |


Edit the given custom form field such as adding or deleting input, assignee, title, decription, notification and polling information.

*Returned Response:*




Success


[CustomForm](#CustomForm)

Success


*Examples:*


Default
```json
{
  "value": {
    "login_required": false,
    "should_notify": false,
    "inputs": [
      {
        "type": "email",
        "showRegexInput": true,
        "enum": [],
        "regex": "\\S+@\\S+\\.\\S+",
        "display": "email",
        "required": true,
        "key": "email"
      },
      {
        "type": "number",
        "showRegexInput": false,
        "enum": [],
        "display": "Enter your fav number",
        "placeholder": "123",
        "key": "enter-your-fav-number"
      }
    ],
    "available_assignees": [],
    "_id": "602e900a2042255c03cadaf0",
    "title": "service-test-satyen",
    "description": "testing form from service",
    "slug": "service-test-satyen",
    "header_image": "https://hdn-1.addsale.com/x0/support-ticket/files/free/original/KZL86aN5l-service-test-satyen.jpeg",
    "application_id": "000000000000000000000001",
    "created_on": {
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
      "platform": "web",
      "meta": {
        "browser": {
          "name": "Chrome",
          "version": "88.0.4324.150"
        },
        "os": {
          "name": "macOS",
          "version": "11.2.0"
        },
        "platform": {
          "type": "desktop",
          "vendor": "Apple"
        },
        "engine": {
          "name": "Blink"
        }
      }
    },
    "created_by": "5f8147abbd1a0a870f61f1a6",
    "createdAt": "2021-02-18T16:04:26.495Z",
    "updatedAt": "2021-02-26T10:16:49.272Z",
    "__v": 0
  }
}
```









---


#### getCustomForms
Get list of custom form



```javascript
// Promise
const promise = lead.getCustomForms( {  companyId : value,
 applicationId : value });

// Async/Await
const data = await lead.getCustomForms( {  companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company ID of the application |   
| applicationId | string | yes | Application ID for the form |  



Get list of custom form for given application

*Returned Response:*




Success


[CustomFormList](#CustomFormList)

Success


*Examples:*


Default
```json
{
  "value": {
    "docs": [
      {
        "_id": "602e900a2042255c03cadaf0",
        "login_required": false,
        "should_notify": false,
        "inputs": [
          {
            "type": "email",
            "showRegexInput": true,
            "enum": [],
            "regex": "\\S+@\\S+\\.\\S+",
            "display": "email",
            "required": true,
            "key": "email"
          },
          {
            "type": "number",
            "showRegexInput": false,
            "enum": [],
            "display": "Enter your fav number",
            "placeholder": "123",
            "key": "enter-your-fav-number"
          },
          {
            "type": "textarea",
            "showRegexInput": false,
            "enum": [],
            "display": "kjhgjhvjb",
            "required": true,
            "key": "kjhgjhvjb"
          }
        ],
        "available_assignees": [],
        "title": "service-test-satyen",
        "description": "testing form from service",
        "slug": "service-test-satyen",
        "header_image": "https://hdn-1.addsale.com/x0/support-ticket/files/free/original/KZL86aN5l-service-test-satyen.jpeg",
        "application_id": "000000000000000000000001",
        "created_on": {
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Chrome",
              "version": "88.0.4324.150"
            },
            "os": {
              "name": "macOS",
              "version": "11.2.0"
            },
            "platform": {
              "type": "desktop",
              "vendor": "Apple"
            },
            "engine": {
              "name": "Blink"
            }
          }
        },
        "created_by": "5f8147abbd1a0a870f61f1a6",
        "createdAt": "2021-02-18T16:04:26.495Z",
        "updatedAt": "2021-02-24T15:49:56.256Z",
        "__v": 0,
        "id": "602e900a2042255c03cadaf0"
      },
      {
        "_id": "60124e4a4d2bc363625e1bf4",
        "login_required": false,
        "should_notify": true,
        "inputs": [
          {
            "type": "text",
            "showRegexInput": false,
            "enum": [],
            "display": "asdf",
            "key": "asdf"
          },
          {
            "type": "mobile",
            "showRegexInput": false,
            "enum": [],
            "display": "mob num",
            "regex": "[0-9]{10}$",
            "key": "mob-num"
          }
        ],
        "available_assignees": [
          "5e79e721768c6bf54b783146"
        ],
        "title": "asdf444",
        "description": "adf",
        "slug": "asdf444",
        "application_id": "000000000000000000000001",
        "created_on": {
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Chrome",
              "version": "88.0.4324.96"
            },
            "os": {
              "name": "macOS",
              "version": "10.15.7",
              "versionName": "Catalina"
            },
            "platform": {
              "type": "desktop",
              "vendor": "Apple"
            },
            "engine": {
              "name": "Blink"
            }
          }
        },
        "created_by": "5e79e721768c6bf54b783146",
        "createdAt": "2021-01-28T05:40:26.271Z",
        "updatedAt": "2021-02-18T16:02:32.086Z",
        "__v": 0,
        "poll_for_assignment": {
          "duration": 20,
          "message": "We are looking for executive to connect you",
          "success_message": "Executive found",
          "failure_message": "All our executives are busy at the moment, We have accepted your request and someone will connect with you soon!"
        },
        "id": "60124e4a4d2bc363625e1bf4"
      }
    ],
    "total": 2,
    "limit": 10,
    "page": 1,
    "pages": 1
  }
}
```









---


#### createCustomForm
Creates a new custom form



```javascript
// Promise
const promise = lead.createCustomForm( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await lead.createCustomForm( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company ID of the application |   
| applicationId | string | yes | Application ID for the form |  
| body | [CreateCustomFormPayload](#CreateCustomFormPayload) | no | Request body |


Creates a new custom form for given application

*Returned Response:*




Success


[CustomForm](#CustomForm)

Success


*Examples:*


Default
```json
{
  "value": {
    "login_required": false,
    "should_notify": false,
    "inputs": [
      {
        "type": "email",
        "showRegexInput": true,
        "enum": [],
        "regex": "\\S+@\\S+\\.\\S+",
        "display": "email",
        "required": true,
        "key": "email"
      },
      {
        "type": "number",
        "showRegexInput": false,
        "enum": [],
        "display": "Enter your fav number",
        "placeholder": "123",
        "key": "enter-your-fav-number"
      }
    ],
    "available_assignees": [],
    "_id": "602e900a2042255c03cadaf0",
    "title": "service-test-satyen",
    "description": "testing form from service",
    "slug": "service-test-satyen",
    "header_image": "https://hdn-1.addsale.com/x0/support-ticket/files/free/original/KZL86aN5l-service-test-satyen.jpeg",
    "application_id": "000000000000000000000001",
    "created_on": {
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
      "platform": "web",
      "meta": {
        "browser": {
          "name": "Chrome",
          "version": "88.0.4324.150"
        },
        "os": {
          "name": "macOS",
          "version": "11.2.0"
        },
        "platform": {
          "type": "desktop",
          "vendor": "Apple"
        },
        "engine": {
          "name": "Blink"
        }
      }
    },
    "created_by": "5f8147abbd1a0a870f61f1a6",
    "createdAt": "2021-02-18T16:04:26.495Z",
    "updatedAt": "2021-02-26T10:16:49.272Z",
    "__v": 0
  }
}
```









---


#### getTokenForVideoRoom
Get Token to join a specific Video Room using it's unqiue name



```javascript
// Promise
const promise = lead.getTokenForVideoRoom( {  companyId : value,
 uniqueName : value });

// Async/Await
const data = await lead.getTokenForVideoRoom( {  companyId : value,
 uniqueName : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id for video room |   
| uniqueName | string | yes | Unique name of video room |  



Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.

*Returned Response:*




Success


[GetTokenForVideoRoomResponse](#GetTokenForVideoRoomResponse)

Success


*Examples:*


Default
```json
{
  "value": {
    "access_token": "your_token_to_the_room"
  }
}
```









---


#### getTokenForVideoRoom
Get Token to join a specific Video Room using it's unqiue name



```javascript
// Promise
const promise = lead.getTokenForVideoRoom( {  companyId : value,
 applicationId : value,
 uniqueName : value });

// Async/Await
const data = await lead.getTokenForVideoRoom( {  companyId : value,
 applicationId : value,
 uniqueName : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company ID of the application |   
| applicationId | string | yes | Application ID for video room |   
| uniqueName | string | yes | Unique name of video room |  



Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.

*Returned Response:*




Success


[GetTokenForVideoRoomResponse](#GetTokenForVideoRoomResponse)

Success


*Examples:*


Default
```json
{
  "value": {
    "access_token": "your_token_to_the_room"
  }
}
```









---


#### getVideoParticipants
Get participants of a specific Video Room using it's unique name



```javascript
// Promise
const promise = lead.getVideoParticipants( {  companyId : value,
 uniqueName : value });

// Async/Await
const data = await lead.getVideoParticipants( {  companyId : value,
 uniqueName : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id for video room |   
| uniqueName | string | yes | Unique name of Video Room |  



Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.

*Returned Response:*




Success


[GetParticipantsInsideVideoRoomResponse](#GetParticipantsInsideVideoRoomResponse)

Success


*Examples:*


Default
```json
{
  "value": {
    "participants": []
  }
}
```









---


#### getVideoParticipants
Get participants of a specific Video Room using it's unique name



```javascript
// Promise
const promise = lead.getVideoParticipants( {  companyId : value,
 applicationId : value,
 uniqueName : value });

// Async/Await
const data = await lead.getVideoParticipants( {  companyId : value,
 applicationId : value,
 uniqueName : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company ID of the application |   
| applicationId | string | yes | Application ID for video room |   
| uniqueName | string | yes | Unique name of Video Room |  



Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.

*Returned Response:*




Success


[GetParticipantsInsideVideoRoomResponse](#GetParticipantsInsideVideoRoomResponse)

Success


*Examples:*


Default
```json
{
  "value": {
    "participants": []
  }
}
```









---


#### openVideoRoom
Open a video room.



```javascript
// Promise
const promise = lead.openVideoRoom( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await lead.openVideoRoom( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company ID of the application |   
| applicationId | string | yes | Application ID for video room |  
| body | [CreateVideoRoomPayload](#CreateVideoRoomPayload) | no | Request body |


Open a video room.

*Returned Response:*




Success


[CreateVideoRoomResponse](#CreateVideoRoomResponse)

Success


*Examples:*


Default
```json
{
  "value": {
    "unique_name": "alphanumeric123"
  }
}
```









---


#### closeVideoRoom
Close the video room and force all participants to leave.



```javascript
// Promise
const promise = lead.closeVideoRoom( {  companyId : value,
 applicationId : value,
 uniqueName : value });

// Async/Await
const data = await lead.closeVideoRoom( {  companyId : value,
 applicationId : value,
 uniqueName : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company ID of the application |   
| applicationId | string | yes | Application ID for video room |   
| uniqueName | string | yes | Unique name of Video Room |  



Close the video room and force all participants to leave.

*Returned Response:*




Success


[CloseVideoRoomResponse](#CloseVideoRoomResponse)

Success


*Examples:*


Default
```json
{
  "value": {
    "success": true
  }
}
```









---





## Feedback


#### getAttributes
Get list of attribute data



```javascript
// Promise
const promise = feedback.getAttributes( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await feedback.getAttributes( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | company id |   
| applicationId | string | yes | application id |    
| pageNo | number | no | pagination page no |    
| pageSize | number | no | pagination page size |  



Provides a list of all attribute data.

*Returned Response:*




ok


[FeedbackAttributes](#FeedbackAttributes)

ok









---


#### getCustomerReviews
Get list of customer reviews [admin]



```javascript
// Promise
const promise = feedback.getCustomerReviews( {  companyId : value,
 applicationId : value,
 id : value,
 entityId : value,
 entityType : value,
 userId : value,
 media : value,
 rating : value,
 attributeRating : value,
 facets : value,
 sort : value,
 next : value,
 start : value,
 limit : value,
 count : value,
 pageId : value,
 pageSize : value });

// Async/Await
const data = await feedback.getCustomerReviews( {  companyId : value,
 applicationId : value,
 id : value,
 entityId : value,
 entityType : value,
 userId : value,
 media : value,
 rating : value,
 attributeRating : value,
 facets : value,
 sort : value,
 next : value,
 start : value,
 limit : value,
 count : value,
 pageId : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | company id |   
| applicationId | string | yes | application id |    
| id | string | no | review id |    
| entityId | string | no | entity id |    
| entityType | string | no | entity type |    
| userId | string | no | user id |    
| media | string | no | media type e.g. image | video | video_file | video_link |    
| rating | Array<number> | no | rating filter, 1-5 |    
| attributeRating | Array<string> | no | attribute rating filter with ma,e of attribute |    
| facets | boolean | no | facets (true|false) |    
| sort | string | no | sort by : default | top | recent |    
| next | string | no | pagination next |    
| start | string | no | pagination start |    
| limit | string | no | pagination limit |    
| count | string | no | pagination count |    
| pageId | string | no | pagination page id |    
| pageSize | number | no | pagination page size |  



The endpoint provides a list of customer reviews based on entity and provided filters

*Returned Response:*




Success


[GetReviewResponse](#GetReviewResponse)

Success









---


#### updateApprove
update approve details



```javascript
// Promise
const promise = feedback.updateApprove( {  companyId : value,
 applicationId : value,
 reviewId : value,
 body : value });

// Async/Await
const data = await feedback.updateApprove( {  companyId : value,
 applicationId : value,
 reviewId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | company id |   
| applicationId | string | yes | application id |   
| reviewId | string | yes | review id |  
| body | [ApproveRequest](#ApproveRequest) | yes | Request body |


The is used to update approve details like status and description text

*Returned Response:*




ok


[UpdateResponse](#UpdateResponse)

ok









---


#### getHistory
get history details



```javascript
// Promise
const promise = feedback.getHistory( {  companyId : value,
 applicationId : value,
 reviewId : value });

// Async/Await
const data = await feedback.getHistory( {  companyId : value,
 applicationId : value,
 reviewId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | company id |   
| applicationId | string | yes | application id |   
| reviewId | string | yes | review id |  



The is used to get the history details like status and description text

*Returned Response:*




ok


[Array<ActivityDump>](#Array<ActivityDump>)

ok









---


#### getApplicationTemplates
Get list of templates



```javascript
// Promise
const promise = feedback.getApplicationTemplates( {  companyId : value,
 applicationId : value,
 pageId : value,
 pageSize : value });

// Async/Await
const data = await feedback.getApplicationTemplates( {  companyId : value,
 applicationId : value,
 pageId : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | company id |   
| applicationId | string | yes | application id |    
| pageId | string | no | pagination page id |    
| pageSize | number | no | pagination page size |  



Get all templates of application

*Returned Response:*




Success


[TemplateGetResponse](#TemplateGetResponse)

Success









---


#### createTemplate
Create a new template



```javascript
// Promise
const promise = feedback.createTemplate( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await feedback.createTemplate( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | company id |   
| applicationId | string | yes | application id |  
| body | [TemplateRequestList](#TemplateRequestList) | yes | Request body |


Create a new template for review with following data:
- Enable media, rating and review
- Rating - active/inactive/selected rate choices, attributes, text on rate, comment for each rate, type
- Review - header, title, description, image and video meta, enable votes

*Returned Response:*




Success


[InsertResponse](#InsertResponse)

Success









---


#### getTemplateById
Get a template by ID



```javascript
// Promise
const promise = feedback.getTemplateById( {  companyId : value,
 applicationId : value,
 id : value });

// Async/Await
const data = await feedback.getTemplateById( {  companyId : value,
 applicationId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | company id |   
| applicationId | string | yes | application id |   
| id | string | yes | template id |  



Get the template for product or l3 type by ID

*Returned Response:*




Success


[Template](#Template)

Success









---


#### updateTemplate
Update a template's status



```javascript
// Promise
const promise = feedback.updateTemplate( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });

// Async/Await
const data = await feedback.updateTemplate( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | company id |   
| applicationId | string | yes | application id |   
| id | string | yes | template id |  
| body | [UpdateTemplateRequest](#UpdateTemplateRequest) | yes | Request body |


Update existing template status, active/archive

*Returned Response:*




Success


[UpdateResponse](#UpdateResponse)

Success









---


#### updateTemplateStatus
Update a template's status



```javascript
// Promise
const promise = feedback.updateTemplateStatus( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });

// Async/Await
const data = await feedback.updateTemplateStatus( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | company id |   
| applicationId | string | yes | application id |   
| id | string | yes | template id |  
| body | [UpdateTemplateStatusRequest](#UpdateTemplateStatusRequest) | yes | Request body |


Update existing template status, active/archive

*Returned Response:*




Success


[UpdateResponse](#UpdateResponse)

Success









---





## Theme


#### getAllPages
Get all pages of a theme



```javascript
// Promise
const promise = theme.getAllPages( {  companyId : value,
 applicationId : value,
 themeId : value });

// Async/Await
const data = await theme.getAllPages( {  companyId : value,
 applicationId : value,
 themeId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company ID |   
| applicationId | string | yes | Application ID |   
| themeId | string | yes | ID of the theme to be retrieved |  



Use this API to retrieve all the available pages of a theme by its ID.

*Returned Response:*




Success. Returns an array all the pages of the theme. Refer `AllAvailablePageSchema` for more details.


[AllAvailablePageSchema](#AllAvailablePageSchema)

Success. Returns an array all the pages of the theme. Refer `AllAvailablePageSchema` for more details.


*Examples:*


All pages
```json
{
  "$ref": "#/components/examples/AllAvailablePagesExample"
}
```









---


#### createPage
Create a page 



```javascript
// Promise
const promise = theme.createPage( {  companyId : value,
 applicationId : value,
 themeId : value,
 body : value });

// Async/Await
const data = await theme.createPage( {  companyId : value,
 applicationId : value,
 themeId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company ID |   
| applicationId | string | yes | Application ID |   
| themeId | string | yes | ID of the theme |  
| body | [AvailablePageSchema](#AvailablePageSchema) | no | Request body |


Use this API to create a page for a theme by its ID.

*Returned Response:*




Success. Returns the page of the theme. Refer `AvailablePageSchema` for more details.


[AvailablePageSchema](#AvailablePageSchema)

Success. Returns the page of the theme. Refer `AvailablePageSchema` for more details.


*Examples:*


page
```json
{
  "$ref": "#/components/examples/AvailablePageExample"
}
```









---


#### updateMultiplePages
Update multiple pages of a theme



```javascript
// Promise
const promise = theme.updateMultiplePages( {  companyId : value,
 applicationId : value,
 themeId : value,
 body : value });

// Async/Await
const data = await theme.updateMultiplePages( {  companyId : value,
 applicationId : value,
 themeId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company ID |   
| applicationId | string | yes | Application ID |   
| themeId | string | yes | ID of the theme to be retrieved |  
| body | [AllAvailablePageSchema](#AllAvailablePageSchema) | no | Request body |


Use this API to update multiple pages of a theme by its ID.

*Returned Response:*




Success. Returns an array all the pages of the theme. Refer `AllAvailablePageSchema` for more details.


[AllAvailablePageSchema](#AllAvailablePageSchema)

Success. Returns an array all the pages of the theme. Refer `AllAvailablePageSchema` for more details.


*Examples:*


All pages
```json
{
  "$ref": "#/components/examples/AllAvailablePagesExample"
}
```









---


#### getPage
Get page of a theme



```javascript
// Promise
const promise = theme.getPage( {  companyId : value,
 applicationId : value,
 themeId : value,
 pageValue : value });

// Async/Await
const data = await theme.getPage( {  companyId : value,
 applicationId : value,
 themeId : value,
 pageValue : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company ID |   
| applicationId | string | yes | Application ID |   
| themeId | string | yes | ID of the theme to be retrieved |   
| pageValue | string | yes | Value of the page to be retrieved |  



Use this API to retrieve a page of a theme.

*Returned Response:*




Success. Returns an object of the page.  Refer `AvailablePageSchema` for more details.


[AvailablePageSchema](#AvailablePageSchema)

Success. Returns an object of the page.  Refer `AvailablePageSchema` for more details.


*Examples:*


Home page
```json
{
  "$ref": "#/components/examples/AvailablePageExample"
}
```









---


#### updatePage
Updates a page 



```javascript
// Promise
const promise = theme.updatePage( {  companyId : value,
 applicationId : value,
 themeId : value,
 pageValue : value,
 body : value });

// Async/Await
const data = await theme.updatePage( {  companyId : value,
 applicationId : value,
 themeId : value,
 pageValue : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company ID |   
| applicationId | string | yes | Application ID |   
| themeId | string | yes | ID of the theme |   
| pageValue | string | yes | Value of the page to be updated |  
| body | [AvailablePageSchema](#AvailablePageSchema) | no | Request body |


Use this API to update a page for a theme by its ID.

*Returned Response:*




Success. Returns a the page of the theme. Refer `AvailablePageSchema` for more details.


[AvailablePageSchema](#AvailablePageSchema)

Success. Returns a the page of the theme. Refer `AvailablePageSchema` for more details.


*Examples:*


page
```json
{
  "$ref": "#/components/examples/AvailablePageExample"
}
```









---


#### deletePage
Deletes a page 



```javascript
// Promise
const promise = theme.deletePage( {  companyId : value,
 applicationId : value,
 themeId : value,
 pageValue : value });

// Async/Await
const data = await theme.deletePage( {  companyId : value,
 applicationId : value,
 themeId : value,
 pageValue : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company ID |   
| applicationId | string | yes | Application ID |   
| themeId | string | yes | ID of the theme |   
| pageValue | string | yes | Value of the page to be updated |  



Use this API to delete a page for a theme by its ID and page_value.

*Returned Response:*




Success. Returns a the page of the theme. Refer `AvailablePageSchema` for more details.


[AvailablePageSchema](#AvailablePageSchema)

Success. Returns a the page of the theme. Refer `AvailablePageSchema` for more details.


*Examples:*


page
```json
{
  "$ref": "#/components/examples/AvailablePageExample"
}
```









---


#### getThemeLibrary
Get a list of themes from the theme library



```javascript
// Promise
const promise = theme.getThemeLibrary( {  companyId : value,
 applicationId : value,
 pageSize : value,
 pageNo : value });

// Async/Await
const data = await theme.getThemeLibrary( {  companyId : value,
 applicationId : value,
 pageSize : value,
 pageNo : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform. |   
| applicationId | string | yes | Alphanumeric ID allotted to an application created within a business account. |    
| pageSize | number | no | The number of items to retrieve in each page. Default value is 10.  |    
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1. |  



Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to fetch a list of themes from the library along with their configuration details. 

*Returned Response:*




Success. Refer `ThemesListingResponseSchema` for more details.


[ThemesListingResponseSchema](#ThemesListingResponseSchema)

Success. Refer `ThemesListingResponseSchema` for more details.


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/ThemesListingResponse"
}
```









---


#### addToThemeLibrary
Add a theme to the theme library



```javascript
// Promise
const promise = theme.addToThemeLibrary( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await theme.addToThemeLibrary( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform. |   
| applicationId | string | yes | Alphanumeric ID allotted to an application created within a business account. |  
| body | [AddThemeRequestSchema](#AddThemeRequestSchema) | no | Request body |


Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to choose a theme and add it to the theme library.

*Returned Response:*




Success. Refer `ThemesSchema` for more details.


[ThemesSchema](#ThemesSchema)

Success. Refer `ThemesSchema` for more details.


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/Themes"
}
```









---


#### applyTheme
Apply a theme



```javascript
// Promise
const promise = theme.applyTheme( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await theme.applyTheme( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform. |   
| applicationId | string | yes | Alphanumeric ID allotted to an application created within a business account. |  
| body | [AddThemeRequestSchema](#AddThemeRequestSchema) | no | Request body |


Use this API to apply a theme to the website.

*Returned Response:*




Success. Refer `ThemesSchema` for more details.


[ThemesSchema](#ThemesSchema)

Success. Refer `ThemesSchema` for more details.


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/Themes"
}
```









---


#### isUpgradable
Checks if theme is upgradable



```javascript
// Promise
const promise = theme.isUpgradable( {  companyId : value,
 applicationId : value,
 themeId : value });

// Async/Await
const data = await theme.isUpgradable( {  companyId : value,
 applicationId : value,
 themeId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform. |   
| applicationId | string | yes | Alphanumeric ID allotted to an application created within a business account. |   
| themeId | string | yes | Theme ID |  



There's always a possibility that new features get added to a theme. Use this API to check if the applied theme has an upgrade available.

*Returned Response:*




Success. If the boolean value of `upgrade` returns **true**, the theme can be upgraded. Refer `UpgradableThemeSchema` for more details.


[UpgradableThemeSchema](#UpgradableThemeSchema)

Success. If the boolean value of `upgrade` returns **true**, the theme can be upgraded. Refer `UpgradableThemeSchema` for more details.


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/UpgradableTheme"
}
```









---


#### upgradeTheme
Upgrade a theme



```javascript
// Promise
const promise = theme.upgradeTheme( {  companyId : value,
 applicationId : value,
 themeId : value });

// Async/Await
const data = await theme.upgradeTheme( {  companyId : value,
 applicationId : value,
 themeId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform. |   
| applicationId | string | yes | Alphanumeric ID allotted to an application created within a business account. |   
| themeId | string | yes | ID allotted to the theme. |  



Use this API to upgrade the current theme to its latest version.

*Returned Response:*




Success. Upgrades the theme and shares the details of the new version in the response. Refer `ThemesSchema` for more details.


[ThemesSchema](#ThemesSchema)

Success. Upgrades the theme and shares the details of the new version in the response. Refer `ThemesSchema` for more details.


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/Themes"
}
```









---


#### getPublicThemes
Get all public themes



```javascript
// Promise
const promise = theme.getPublicThemes( {  companyId : value,
 applicationId : value,
 pageSize : value,
 pageNo : value });

// Async/Await
const data = await theme.getPublicThemes( {  companyId : value,
 applicationId : value,
 pageSize : value,
 pageNo : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform. |   
| applicationId | string | yes | Alphanumeric ID allotted to an application created within a business account. |    
| pageSize | number | no | The number of items to retrieve in each page. Default value is 10.  |    
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1.  |  



Use this API to get a list of free themes that you can apply to your website.

*Returned Response:*




Success. Refer `ThemesListingResponseSchema` for more details.


[ThemesListingResponseSchema](#ThemesListingResponseSchema)

Success. Refer `ThemesListingResponseSchema` for more details.


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/ThemesListingResponse"
}
```









---


#### createTheme
Create a new theme



```javascript
// Promise
const promise = theme.createTheme( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await theme.createTheme( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform. |   
| applicationId | string | yes | Alphanumeric ID allotted to an application created within a business account. |  
| body | [ThemesSchema](#ThemesSchema) | no | Request body |


Themes improve the look and appearance of a website. Use this API to create a theme.

*Returned Response:*




Theme


[ThemesSchema](#ThemesSchema)

Theme


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/Themes"
}
```









---


#### getAppliedTheme
Get the applied theme



```javascript
// Promise
const promise = theme.getAppliedTheme( {  companyId : value,
 applicationId : value });

// Async/Await
const data = await theme.getAppliedTheme( {  companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform. |   
| applicationId | string | yes | Alphanumeric ID allotted to an application created within a business account. |  



Use this API to retrieve the theme that is currently applied to the website along with its details.

*Returned Response:*




Success. Refer `ThemesSchema` for more details.


[ThemesSchema](#ThemesSchema)

Success. Refer `ThemesSchema` for more details.


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/Themes"
}
```









---


#### getFonts
Get all the supported fonts in a theme



```javascript
// Promise
const promise = theme.getFonts( {  companyId : value,
 applicationId : value });

// Async/Await
const data = await theme.getFonts( {  companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform. |   
| applicationId | string | yes | Alphanumeric ID allotted to an application created within a business account. |  



Font is a collection of characters with a similar design. Use this API to retrieve a list of website fonts.

*Returned Response:*




Success. Refer `FontsSchema` for more details.


[FontsSchema](#FontsSchema)

Success. Refer `FontsSchema` for more details.


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/FontsResponse"
}
```









---


#### getThemeById
Gets theme by id



```javascript
// Promise
const promise = theme.getThemeById( {  companyId : value,
 applicationId : value,
 themeId : value });

// Async/Await
const data = await theme.getThemeById( {  companyId : value,
 applicationId : value,
 themeId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform. |   
| applicationId | string | yes | Alphanumeric ID allotted to an application created within a business account. |   
| themeId | string | yes | ID allotted to the theme. |  



Use this API to retrieve the details of a specific theme by using its ID.

*Returned Response:*




Success. Refer `ThemesSchema` for more details.


[ThemesSchema](#ThemesSchema)

Success. Refer `ThemesSchema` for more details.


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/Themes"
}
```









---


#### updateTheme
Update a theme



```javascript
// Promise
const promise = theme.updateTheme( {  companyId : value,
 applicationId : value,
 themeId : value,
 body : value });

// Async/Await
const data = await theme.updateTheme( {  companyId : value,
 applicationId : value,
 themeId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform. |   
| applicationId | string | yes | Alphanumeric ID allotted to an application created within a business account. |   
| themeId | string | yes | ID allotted to the theme. |  
| body | [ThemesSchema](#ThemesSchema) | no | Request body |


Use this API to edit an existing theme. You can customize the website font, sections, images, styles, and many more.

*Returned Response:*




Success. Refer `ThemesSchema` for more details.


[ThemesSchema](#ThemesSchema)

Success. Refer `ThemesSchema` for more details.


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/Themes"
}
```









---


#### deleteTheme
Delete a theme



```javascript
// Promise
const promise = theme.deleteTheme( {  companyId : value,
 applicationId : value,
 themeId : value });

// Async/Await
const data = await theme.deleteTheme( {  companyId : value,
 applicationId : value,
 themeId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform. |   
| applicationId | string | yes | Alphanumeric ID allotted to an application created within a business account. |   
| themeId | string | yes | ID allotted to the theme. |  



Use this API to delete a theme from the theme library.

*Returned Response:*




Success. Refer `ThemesSchema` for more details.


[ThemesSchema](#ThemesSchema)

Success. Refer `ThemesSchema` for more details.


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/Themes"
}
```









---


#### getThemeForPreview
Get a theme preview



```javascript
// Promise
const promise = theme.getThemeForPreview( {  companyId : value,
 applicationId : value,
 themeId : value });

// Async/Await
const data = await theme.getThemeForPreview( {  companyId : value,
 applicationId : value,
 themeId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform. |   
| applicationId | string | yes | Alphanumeric ID allotted to an application created within a business account. |   
| themeId | string | yes | ID allotted to the theme. |  



A theme can be previewed before applying it. Use this API to retrieve the theme preview by using its ID.

*Returned Response:*




Success. Refer `ThemesSchema` for more details.


[ThemesSchema](#ThemesSchema)

Success. Refer `ThemesSchema` for more details.


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/Themes"
}
```









---


#### publishTheme
Publish a theme



```javascript
// Promise
const promise = theme.publishTheme( {  companyId : value,
 applicationId : value,
 themeId : value });

// Async/Await
const data = await theme.publishTheme( {  companyId : value,
 applicationId : value,
 themeId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform. |   
| applicationId | string | yes | Alphanumeric ID allotted to an application created within a business account. |   
| themeId | string | yes | ID allotted to the theme. |  



Use this API to publish a theme that is either newly created or edited.

*Returned Response:*




Success. Refer `ThemesSchema` for more details.


[ThemesSchema](#ThemesSchema)

Success. Refer `ThemesSchema` for more details.


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/Themes"
}
```









---


#### unpublishTheme
Unpublish a theme



```javascript
// Promise
const promise = theme.unpublishTheme( {  companyId : value,
 applicationId : value,
 themeId : value });

// Async/Await
const data = await theme.unpublishTheme( {  companyId : value,
 applicationId : value,
 themeId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform. |   
| applicationId | string | yes | Alphanumeric ID allotted to an application created within a business account. |   
| themeId | string | yes | ID allotted to the theme. |  



Use this API to remove an existing theme from the list of available themes.

*Returned Response:*




Success. Refer `ThemesSchema` for more details.


[ThemesSchema](#ThemesSchema)

Success. Refer `ThemesSchema` for more details.


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/Themes"
}
```









---


#### archiveTheme
Archive a theme



```javascript
// Promise
const promise = theme.archiveTheme( {  companyId : value,
 applicationId : value,
 themeId : value });

// Async/Await
const data = await theme.archiveTheme( {  companyId : value,
 applicationId : value,
 themeId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform. |   
| applicationId | string | yes | Alphanumeric ID allotted to an application created within a business account. |   
| themeId | string | yes | ID allotted to the theme. |  



Use this API to store an existing theme but not delete it so that it can be used in future if required. 

*Returned Response:*




Success. Refer `ThemesSchema` for more details.


[ThemesSchema](#ThemesSchema)

Success. Refer `ThemesSchema` for more details.


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/Themes"
}
```









---


#### unarchiveTheme
Unarchive a theme



```javascript
// Promise
const promise = theme.unarchiveTheme( {  companyId : value,
 applicationId : value,
 themeId : value });

// Async/Await
const data = await theme.unarchiveTheme( {  companyId : value,
 applicationId : value,
 themeId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform. |   
| applicationId | string | yes | Alphanumeric ID allotted to an application created within a business account. |   
| themeId | string | yes | ID allotted to the theme. |  



Use this API to restore an archived theme and bring it back for editing or publishing. 

*Returned Response:*




Success. Refer `ThemesSchema` for more details.


[ThemesSchema](#ThemesSchema)

Success. Refer `ThemesSchema` for more details.


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/Themes"
}
```









---





## User


#### getCustomers
Get a list of customers



```javascript
// Promise
const promise = user.getCustomers( {  companyId : value,
 applicationId : value,
 q : value,
 pageSize : value,
 pageNo : value });

// Async/Await
const data = await user.getCustomers( {  companyId : value,
 applicationId : value,
 q : value,
 pageSize : value,
 pageNo : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform. |   
| applicationId | string | yes | Alphanumeric ID allotted to an application created within a business account. |    
| q | string | no | The search query. Mobile number or email ID of a customer. |    
| pageSize | number | no | The number of items to retrieve in each page. Default value is 10. |    
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1.  |  



Use this API to retrieve a list of customers who have registered in the application.

*Returned Response:*




Success. Refer `CustomerListResponseSchema` for more details.


[CustomerListResponseSchema](#CustomerListResponseSchema)

Success. Refer `CustomerListResponseSchema` for more details.


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/CustomersListResponse"
}
```









---


#### searchUsers
Search an existing user.



```javascript
// Promise
const promise = user.searchUsers( {  companyId : value,
 applicationId : value,
 q : value });

// Async/Await
const data = await user.searchUsers( {  companyId : value,
 applicationId : value,
 q : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform. |   
| applicationId | string | yes | Alphanumeric ID allotted to an application created within a business account. |    
| q | string | no | The search query. Mobile number or email ID of a customer. |  



Use this API to retrieve an existing user from a list.

*Returned Response:*




Success. Returns first name, last name, emails, phone number and gender of the user. Refer `UserSearchResponseSchema` for more details.


[UserSearchResponseSchema](#UserSearchResponseSchema)

Success. Returns first name, last name, emails, phone number and gender of the user. Refer `UserSearchResponseSchema` for more details.









---


#### createUser
Create user



```javascript
// Promise
const promise = user.createUser( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await user.createUser( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company ID |   
| applicationId | string | yes | Application ID |  
| body | [CreateUserRequestSchema](#CreateUserRequestSchema) | yes | Request body |


Create user

*Returned Response:*




User create


[CreateUserResponseSchema](#CreateUserResponseSchema)

User create









---


#### updateUser
Update user



```javascript
// Promise
const promise = user.updateUser( {  companyId : value,
 applicationId : value,
 userId : value,
 body : value });

// Async/Await
const data = await user.updateUser( {  companyId : value,
 applicationId : value,
 userId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company ID |   
| applicationId | string | yes | Application ID |   
| userId | string | yes | User ID |  
| body | [UpdateUserRequestSchema](#UpdateUserRequestSchema) | yes | Request body |


Update user

*Returned Response:*




User update


[CreateUserResponseSchema](#CreateUserResponseSchema)

User update









---


#### createUserSession
Create user session



```javascript
// Promise
const promise = user.createUserSession( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await user.createUserSession( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company ID |   
| applicationId | string | yes | Application ID |  
| body | [CreateUserSessionRequestSchema](#CreateUserSessionRequestSchema) | yes | Request body |


Create user session

*Returned Response:*




Create user session


[CreateUserSessionResponseSchema](#CreateUserSessionResponseSchema)

Create user session









---


#### getPlatformConfig
Get platform configurations



```javascript
// Promise
const promise = user.getPlatformConfig( {  companyId : value,
 applicationId : value });

// Async/Await
const data = await user.getPlatformConfig( {  companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform. |   
| applicationId | string | yes | Alphanumeric ID allotted to an application created within a business account. |  



Use this API to get all the platform configurations such as mobile image, desktop image, social logins, and all other text.

*Returned Response:*




Success. Returns a JSON object containing the all the platform configurations. Refer `PlatformSchema` for more details.


[PlatformSchema](#PlatformSchema)

Success. Returns a JSON object containing the all the platform configurations. Refer `PlatformSchema` for more details.









---


#### updatePlatformConfig
Update platform configurations



```javascript
// Promise
const promise = user.updatePlatformConfig( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await user.updatePlatformConfig( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform. |   
| applicationId | string | yes | Alphanumeric ID allotted to an application created within a business account. |  
| body | [PlatformSchema](#PlatformSchema) | yes | Request body |


Use this API to edit the existing platform configurations such as mobile image, desktop image, social logins, and all other text.

*Returned Response:*




Success. Returns a JSON object with the updated platform configurations. Refer `PlatformSchema` for more details.


[PlatformSchema](#PlatformSchema)

Success. Returns a JSON object with the updated platform configurations. Refer `PlatformSchema` for more details.









---





## Content


#### getAnnouncementsList
Get a list of announcements



```javascript
// Promise
const promise = content.getAnnouncementsList( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await content.getAnnouncementsList( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |    
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1. |    
| pageSize | number | no | The number of items to retrieve in each page. Default value is 10. |  



Announcements are useful to highlight a message or information on top of a webpage. Use this API to retrieve a list of announcements.	

*Returned Response:*




Success. Refer `GetAnnouncementListSchema` for more details.


[GetAnnouncementListSchema](#GetAnnouncementListSchema)

Success. Refer `GetAnnouncementListSchema` for more details.


*Examples:*


success
```json
{
  "$ref": "#/components/examples/GetAnnouncementList"
}
```









---


#### createAnnouncement
Create an announcement



```javascript
// Promise
const promise = content.createAnnouncement( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await content.createAnnouncement( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |  
| body | [AdminAnnouncementSchema](#AdminAnnouncementSchema) | yes | Request body |


Announcements are useful to highlight a message or information on top of a webpage. Use this API to create an announcement.

*Returned Response:*




Success. Refer `CreateAnnouncementSchema` for more details.


[CreateAnnouncementSchema](#CreateAnnouncementSchema)

Success. Refer `CreateAnnouncementSchema` for more details.


*Examples:*


success
```json
{
  "$ref": "#/components/examples/CreateAnnouncement"
}
```









---


#### getAnnouncementById
Get announcement by ID



```javascript
// Promise
const promise = content.getAnnouncementById( {  companyId : value,
 applicationId : value,
 announcementId : value });

// Async/Await
const data = await content.getAnnouncementById( {  companyId : value,
 applicationId : value,
 announcementId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |   
| announcementId | string | yes | ID allotted to the announcement. |  



Use this API to retrieve an announcement and its details such as the target platform and pages on which it's applicable

*Returned Response:*




Success. Refer `AdminAnnouncementSchema` for more details.


[AdminAnnouncementSchema](#AdminAnnouncementSchema)

Success. Refer `AdminAnnouncementSchema` for more details.


*Examples:*


success
```json
{
  "$ref": "#/components/examples/Announcement"
}
```









---


#### updateAnnouncement
Update an announcement



```javascript
// Promise
const promise = content.updateAnnouncement( {  companyId : value,
 applicationId : value,
 announcementId : value,
 body : value });

// Async/Await
const data = await content.updateAnnouncement( {  companyId : value,
 applicationId : value,
 announcementId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |   
| announcementId | string | yes | ID allotted to the announcement. |  
| body | [AdminAnnouncementSchema](#AdminAnnouncementSchema) | yes | Request body |


Use this API to edit an existing announcement and its details such as the target platform and pages on which it's applicable

*Returned Response:*




Success. Refer `CreateAnnouncementSchema` for more details.


[CreateAnnouncementSchema](#CreateAnnouncementSchema)

Success. Refer `CreateAnnouncementSchema` for more details.


*Examples:*


success
```json
{
  "$ref": "#/components/examples/UpdateAnnouncement"
}
```









---


#### updateAnnouncementSchedule
Update the schedule and the publish status of an announcement



```javascript
// Promise
const promise = content.updateAnnouncementSchedule( {  companyId : value,
 applicationId : value,
 announcementId : value,
 body : value });

// Async/Await
const data = await content.updateAnnouncementSchedule( {  companyId : value,
 applicationId : value,
 announcementId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |   
| announcementId | string | yes | ID allotted to the announcement. |  
| body | [ScheduleSchema](#ScheduleSchema) | yes | Request body |


Use this API to edit the duration, i.e. start date-time and end date-time of an announcement. Moreover, you can enable/disable an announcement using this API.

*Returned Response:*




Success. Refer `CreateAnnouncementSchema` for more details.


[CreateAnnouncementSchema](#CreateAnnouncementSchema)

Success. Refer `CreateAnnouncementSchema` for more details.


*Examples:*


success
```json
{
  "$ref": "#/components/examples/PatchAnnouncement"
}
```









---


#### deleteAnnouncement
Delete announcement by id



```javascript
// Promise
const promise = content.deleteAnnouncement( {  companyId : value,
 applicationId : value,
 announcementId : value });

// Async/Await
const data = await content.deleteAnnouncement( {  companyId : value,
 applicationId : value,
 announcementId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |   
| announcementId | string | yes | ID allotted to the announcement. |  



Use this API to delete an existing announcement.

*Returned Response:*




Success.


[CreateAnnouncementSchema](#CreateAnnouncementSchema)

Success.


*Examples:*


success
```json
{
  "$ref": "#/components/examples/DeleteAnnouncement"
}
```









---


#### createBlog
Create a blog



```javascript
// Promise
const promise = content.createBlog( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await content.createBlog( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |  
| body | [BlogRequest](#BlogRequest) | yes | Request body |


Use this API to create a blog.

*Returned Response:*




Success. Refer `BlogSchema` for more details.


[BlogSchema](#BlogSchema)

Success. Refer `BlogSchema` for more details.


*Examples:*


default
```json
{
  "$ref": "#/components/examples/BlogResponse"
}
```









---


#### getBlogs
Get blogs



```javascript
// Promise
const promise = content.getBlogs( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await content.getBlogs( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |    
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1. |    
| pageSize | number | no | The number of items to retrieve in each page. Default value is 10. |  



Use this API to get a list of blogs along with their details, such as the title, reading time, publish status, feature image, tags, author, etc.

*Returned Response:*




Success. Refer `BlogGetResponse` for more details.


[BlogGetResponse](#BlogGetResponse)

Success. Refer `BlogGetResponse` for more details.


*Examples:*


default
```json
{
  "$ref": "#/components/examples/BlogGetResponse"
}
```









---


#### updateBlog
Update a blog



```javascript
// Promise
const promise = content.updateBlog( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });

// Async/Await
const data = await content.updateBlog( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |   
| id | string | yes | ID allotted to the blog. |  
| body | [BlogRequest](#BlogRequest) | yes | Request body |


Use this API to update the details of an existing blog which includes title, feature image, content, SEO details, expiry, etc.

*Returned Response:*




Success.


[BlogSchema](#BlogSchema)

Success.


*Examples:*


default
```json
{
  "$ref": "#/components/examples/BlogResponse"
}
```









---


#### deleteBlog
Delete blogs



```javascript
// Promise
const promise = content.deleteBlog( {  companyId : value,
 applicationId : value,
 id : value });

// Async/Await
const data = await content.deleteBlog( {  companyId : value,
 applicationId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |   
| id | string | yes | ID allotted to the blog. |  



Use this API to delete a blog.

*Returned Response:*




Success.


[BlogSchema](#BlogSchema)

Success.


*Examples:*


default
```json
{
  "$ref": "#/components/examples/BlogResponse"
}
```









---


#### getComponentById
Get components of a blog



```javascript
// Promise
const promise = content.getComponentById( {  companyId : value,
 applicationId : value,
 slug : value });

// Async/Await
const data = await content.getComponentById( {  companyId : value,
 applicationId : value,
 slug : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |   
| slug | string | yes | A short, human-readable, URL-friendly identifier of a blog page. You can get slug value of a blog from `getBlogs` API. |  



Use this API to retrieve the components of a blog, such as title, slug, feature image, content, schedule, publish status, author, etc.

*Returned Response:*




Success. Returns a a JSON object with components. Refer `BlogSchema` for more details.


[BlogSchema](#BlogSchema)

Success. Returns a a JSON object with components. Refer `BlogSchema` for more details.


*Examples:*


default
```json
{
  "$ref": "#/components/examples/BlogResponse"
}
```









---


#### getFaqCategories
Get a list of FAQ categories



```javascript
// Promise
const promise = content.getFaqCategories( {  companyId : value,
 applicationId : value });

// Async/Await
const data = await content.getFaqCategories( {  companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |  



FAQs can be divided into categories. Use this API to get a list of FAQ categories.

*Returned Response:*




Success. Refer `GetFaqCategoriesSchema` for more details.


[GetFaqCategoriesSchema](#GetFaqCategoriesSchema)

Success. Refer `GetFaqCategoriesSchema` for more details.









---


#### getFaqCategoryBySlugOrId
Get an FAQ category by slug or id



```javascript
// Promise
const promise = content.getFaqCategoryBySlugOrId( {  companyId : value,
 applicationId : value,
 idOrSlug : value });

// Async/Await
const data = await content.getFaqCategoryBySlugOrId( {  companyId : value,
 applicationId : value,
 idOrSlug : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |   
| idOrSlug | string | yes | ID or the slug allotted to an FAQ category. Slug is a short, human-readable, URL-friendly identifier of an object. You can get slug value of an FAQ category from `getFaqCategories` API. |  



FAQs can be divided into categories. Use this API to get an FAQ categories using its slug or ID.

*Returned Response:*




Success. Refer `GetFaqCategoryBySlugSchema` for more details.


[GetFaqCategoryBySlugSchema](#GetFaqCategoryBySlugSchema)

Success. Refer `GetFaqCategoryBySlugSchema` for more details.









---


#### createFaqCategory
Create an FAQ category



```javascript
// Promise
const promise = content.createFaqCategory( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await content.createFaqCategory( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |  
| body | [CreateFaqCategoryRequestSchema](#CreateFaqCategoryRequestSchema) | no | Request body |


FAQs help users to solve an issue or know more about a process. FAQs can be categorized separately, for e.g. some questions can be related to payment, some could be related to purchase, shipping, navigating, etc. Use this API to create an FAQ category.

*Returned Response:*




Success.


[CreateFaqCategorySchema](#CreateFaqCategorySchema)

Success.









---


#### updateFaqCategory
Update an FAQ category



```javascript
// Promise
const promise = content.updateFaqCategory( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });

// Async/Await
const data = await content.updateFaqCategory( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |   
| id | string | yes | ID allotted to an FAQ category. |  
| body | [UpdateFaqCategoryRequestSchema](#UpdateFaqCategoryRequestSchema) | no | Request body |


Use this API to edit an existing FAQ category.

*Returned Response:*




Success.


[CreateFaqCategorySchema](#CreateFaqCategorySchema)

Success.









---


#### deleteFaqCategory
Delete an FAQ category



```javascript
// Promise
const promise = content.deleteFaqCategory( {  companyId : value,
 applicationId : value,
 id : value });

// Async/Await
const data = await content.deleteFaqCategory( {  companyId : value,
 applicationId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |   
| id | string | yes | ID allotted to an FAQ category. |  



Use this API to delete an FAQ category.

*Returned Response:*




Success.


[FaqSchema](#FaqSchema)

Success.









---


#### getFaqsByCategoryIdOrSlug
Get question and answers within an FAQ category



```javascript
// Promise
const promise = content.getFaqsByCategoryIdOrSlug( {  companyId : value,
 applicationId : value,
 idOrSlug : value });

// Async/Await
const data = await content.getFaqsByCategoryIdOrSlug( {  companyId : value,
 applicationId : value,
 idOrSlug : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |   
| idOrSlug | string | yes | ID or the slug allotted to an FAQ category. Slug is a short, human-readable, URL-friendly identifier of an object. You can get slug value of an FAQ category from `getFaqCategories` API. |  



Use this API to retrieve all the commonly asked question and answers belonging to an FAQ category.

*Returned Response:*




Success. Refer `GetFaqSchema` for more details.


[GetFaqSchema](#GetFaqSchema)

Success. Refer `GetFaqSchema` for more details.









---


#### addFaq
Create an FAQ



```javascript
// Promise
const promise = content.addFaq( {  companyId : value,
 applicationId : value,
 categoryId : value,
 body : value });

// Async/Await
const data = await content.addFaq( {  companyId : value,
 applicationId : value,
 categoryId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |   
| categoryId | string | yes | ID allotted to an FAQ category. |  
| body | [CreateFaqSchema](#CreateFaqSchema) | no | Request body |


FAQs help users to solve an issue or know more about a process. Use this API to create an FAQ for a given FAQ category.

*Returned Response:*




Success.


[CreateFaqResponseSchema](#CreateFaqResponseSchema)

Success.









---


#### updateFaq
Update an FAQ



```javascript
// Promise
const promise = content.updateFaq( {  companyId : value,
 applicationId : value,
 categoryId : value,
 faqId : value,
 body : value });

// Async/Await
const data = await content.updateFaq( {  companyId : value,
 applicationId : value,
 categoryId : value,
 faqId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |   
| categoryId | string | yes | ID allotted to an FAQ category. |   
| faqId | string | yes | ID allotted to an FAQ. |  
| body | [CreateFaqSchema](#CreateFaqSchema) | no | Request body |


Use this API to edit an existing FAQ.

*Returned Response:*




Success.


[CreateFaqResponseSchema](#CreateFaqResponseSchema)

Success.









---


#### deleteFaq
Delete an FAQ



```javascript
// Promise
const promise = content.deleteFaq( {  companyId : value,
 applicationId : value,
 categoryId : value,
 faqId : value });

// Async/Await
const data = await content.deleteFaq( {  companyId : value,
 applicationId : value,
 categoryId : value,
 faqId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |   
| categoryId | string | yes | ID allotted to an FAQ category. |   
| faqId | string | yes | ID allotted to an FAQ. |  



Use this API to delete an existing FAQ.

*Returned Response:*




Success.


[CreateFaqResponseSchema](#CreateFaqResponseSchema)

Success.









---


#### getFaqByIdOrSlug
Get an FAQ



```javascript
// Promise
const promise = content.getFaqByIdOrSlug( {  companyId : value,
 applicationId : value,
 idOrSlug : value });

// Async/Await
const data = await content.getFaqByIdOrSlug( {  companyId : value,
 applicationId : value,
 idOrSlug : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |   
| idOrSlug | string | yes | ID or the slug allotted to an FAQ category. Slug is a short, human-readable, URL-friendly identifier of an object. You can get slug value of an FAQ category from `getFaqCategories` API. |  



Use this API to retrieve a specific FAQ. You will get the question and answer of that FAQ.

*Returned Response:*




Success. Refer `CreateFaqResponseSchema` for more details.


[CreateFaqResponseSchema](#CreateFaqResponseSchema)

Success. Refer `CreateFaqResponseSchema` for more details.









---


#### getLandingPages
Get landing pages



```javascript
// Promise
const promise = content.getLandingPages( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await content.getLandingPages( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |    
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1. |    
| pageSize | number | no | The number of items to retrieve in each page. Default value is 10. |  



Landing page is the first page that a prospect lands upon while visiting a website. Use this API to fetch a list of landing pages.

*Returned Response:*




Success. Refer `LandingPageGetResponse` for more details.


[LandingPageGetResponse](#LandingPageGetResponse)

Success. Refer `LandingPageGetResponse` for more details.


*Examples:*


default
```json
{
  "$ref": "#/components/examples/LandingPageGetResponse"
}
```









---


#### createLandingPage
Create a landing page



```javascript
// Promise
const promise = content.createLandingPage( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await content.createLandingPage( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |  
| body | [LandingPageSchema](#LandingPageSchema) | yes | Request body |


Landing page is the first page that a prospect lands upon while visiting a website. Use this API to create a landing page.

*Returned Response:*




Success.


[LandingPageSchema](#LandingPageSchema)

Success.


*Examples:*


default
```json
{
  "$ref": "#/components/examples/LandingPageResponse"
}
```









---


#### updateLandingPage
Update a landing page



```javascript
// Promise
const promise = content.updateLandingPage( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });

// Async/Await
const data = await content.updateLandingPage( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |   
| id | string | yes | ID allotted to a landing page. |  
| body | [LandingPageSchema](#LandingPageSchema) | yes | Request body |


Use this API to edit the details of an existing landing page.

*Returned Response:*




Success.


[LandingPageSchema](#LandingPageSchema)

Success.


*Examples:*


default
```json
{
  "$ref": "#/components/examples/LandingPageResponse"
}
```









---


#### deleteLandingPage
Delete a landing page



```javascript
// Promise
const promise = content.deleteLandingPage( {  companyId : value,
 applicationId : value,
 id : value });

// Async/Await
const data = await content.deleteLandingPage( {  companyId : value,
 applicationId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |   
| id | string | yes | ID allotted to a landing page. |  



Use this API to delete an existing landing page.

*Returned Response:*




Success.


[LandingPageSchema](#LandingPageSchema)

Success.


*Examples:*


default
```json
{
  "value": {
    "_id": "5eaa451a21a4dd75f0fd96c5",
    "application": "5d3ebd89f540e7506b8b3548",
    "_custom_json": null,
    "slug": "pnc-landing",
    "action": {
      "page": {
        "type": "home"
      },
      "popup": {},
      "type": "page"
    },
    "platform": [
      "web"
    ],
    "created_by": {
      "id": "000000000000000000000000"
    },
    "date_meta": {
      "created_on": "2020-04-30T03:25:14.549Z",
      "modified_on": "2020-04-30T03:25:14.549Z"
    },
    "archived": true
  }
}
```









---


#### getLegalInformation
Get legal information



```javascript
// Promise
const promise = content.getLegalInformation( {  companyId : value,
 applicationId : value });

// Async/Await
const data = await content.getLegalInformation( {  companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |  



Use this API to get the legal information of an application, which includes Policy, Terms and Conditions, Shipping Policy and FAQ regarding the application.

*Returned Response:*




Success. Refer `ApplicationLegal` for more details.


[ApplicationLegal](#ApplicationLegal)

Success. Refer `ApplicationLegal` for more details.


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/Legal"
}
```









---


#### updateLegalInformation
Save legal information



```javascript
// Promise
const promise = content.updateLegalInformation( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await content.updateLegalInformation( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |  
| body | [ApplicationLegal](#ApplicationLegal) | yes | Request body |


Use this API to edit, update and save the legal information of an application, which includes Policy, Terms and Conditions, Shipping Policy and FAQ regarding the application.

*Returned Response:*




Success. Refer `ApplicationLegal` for more details.


[ApplicationLegal](#ApplicationLegal)

Success. Refer `ApplicationLegal` for more details.









---


#### getNavigations
Get navigations



```javascript
// Promise
const promise = content.getNavigations( {  companyId : value,
 applicationId : value,
 devicePlatform : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await content.getNavigations( {  companyId : value,
 applicationId : value,
 devicePlatform : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |   
| devicePlatform | string | yes | Filter navigations by platform. Acceptable values are: web, android, ios, all |    
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1. |    
| pageSize | number | no | The number of items to retrieve in each page. Default value is 10. |  



Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the orientation, links, sub-navigations, etc.

*Returned Response:*




Success. Refer `NavigationGetResponse` for more details.


[NavigationGetResponse](#NavigationGetResponse)

Success. Refer `NavigationGetResponse` for more details.


*Examples:*


default
```json
{
  "$ref": "#/components/examples/NavigationGetResponse"
}
```









---


#### createNavigation
Create a navigation



```javascript
// Promise
const promise = content.createNavigation( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await content.createNavigation( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |  
| body | [NavigationRequest](#NavigationRequest) | yes | Request body |


Navigation is the arrangement of navigational items to ease the accessibility of resources for users on a website. Use this API to create a navigation.

*Returned Response:*




Success.


[NavigationSchema](#NavigationSchema)

Success.


*Examples:*


default
```json
{
  "$ref": "#/components/examples/NavigationResponse"
}
```









---


#### getDefaultNavigations
Get default navigations



```javascript
// Promise
const promise = content.getDefaultNavigations( {  companyId : value,
 applicationId : value });

// Async/Await
const data = await content.getDefaultNavigations( {  companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |  



On any website (application), there are navigations that are present by default. Use this API to retrieve those default navigations.

*Returned Response:*




Success. Refer `DefaultNavigationResponse` for more details.


[DefaultNavigationResponse](#DefaultNavigationResponse)

Success. Refer `DefaultNavigationResponse` for more details.


*Examples:*


default
```json
{
  "$ref": "#/components/examples/DefaultNavigationResponse"
}
```









---


#### getNavigationBySlug
Get a navigation by slug



```javascript
// Promise
const promise = content.getNavigationBySlug( {  companyId : value,
 applicationId : value,
 slug : value,
 devicePlatform : value });

// Async/Await
const data = await content.getNavigationBySlug( {  companyId : value,
 applicationId : value,
 slug : value,
 devicePlatform : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |   
| slug | string | yes | A short, human-readable, URL-friendly identifier of a navigation. You can get slug value of a navigation from `getNavigations` API. |   
| devicePlatform | string | yes | Filter navigations by platform. Acceptable values are: web, android, ios, all |  



Use this API to retrieve a navigation by its slug.

*Returned Response:*




Success. Refer `NavigationSchema` for more details.


[NavigationSchema](#NavigationSchema)

Success. Refer `NavigationSchema` for more details.


*Examples:*


default
```json
{
  "$ref": "#/components/examples/NavigationResponse"
}
```









---


#### updateNavigation
Update a navigation



```javascript
// Promise
const promise = content.updateNavigation( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });

// Async/Await
const data = await content.updateNavigation( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |   
| id | string | yes | ID allotted to the navigation. |  
| body | [NavigationRequest](#NavigationRequest) | yes | Request body |


Use this API to edit the details of an existing navigation.

*Returned Response:*




Success.


[NavigationSchema](#NavigationSchema)

Success.


*Examples:*


default
```json
{
  "$ref": "#/components/examples/NavigationResponse"
}
```









---


#### deleteNavigation
Delete a navigation



```javascript
// Promise
const promise = content.deleteNavigation( {  companyId : value,
 applicationId : value,
 id : value });

// Async/Await
const data = await content.deleteNavigation( {  companyId : value,
 applicationId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |   
| id | string | yes | ID allotted to the navigation. |  



Use this API to delete an existing navigation.

*Returned Response:*




Success.


[NavigationSchema](#NavigationSchema)

Success.


*Examples:*


default
```json
{
  "value": {
    "_id": "5ffbd9b90ac98678ae0458d7",
    "application": "000000000000000000000001",
    "_custom_json": null,
    "name": "temp",
    "slug": "temp",
    "platform": "[web]",
    "orientation": {
      "portrait": [
        "left"
      ]
    },
    "navigation": [
      {
        "display": "Home",
        "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/mystore-tab_y0dqzt.png",
        "sort_order": 1,
        "type": "",
        "action": {
          "page": {
            "url": "/",
            "type": "home"
          },
          "popup": {},
          "type": "page"
        },
        "active": true,
        "tags": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "acl": [
          "all"
        ],
        "_locale_language": {
          "hi": {
            "display": ""
          },
          "ar": {
            "display": ""
          },
          "en_us": {
            "display": ""
          }
        },
        "sub_navigation": [
          {
            "display": "Brands",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/brands-tab_sfinpk.png",
            "sort_order": 1,
            "type": "",
            "action": {
              "page": {
                "url": "/brands/",
                "type": "brands"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "tags": null,
            "acl": [
              "all"
            ],
            "_locale_language": {
              "hi": {
                "display": ""
              },
              "ar": {
                "display": ""
              },
              "en_us": {
                "display": ""
              }
            }
          }
        ]
      },
      {
        "display": "Collections",
        "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/collections-tab_a0tg9c.png",
        "sort_order": 2,
        "type": "",
        "action": {
          "page": {
            "url": "/collections/",
            "type": "collections"
          },
          "popup": {},
          "type": "page"
        },
        "active": true,
        "tags": null,
        "acl": [
          "all"
        ],
        "_locale_language": {
          "hi": {
            "display": ""
          },
          "ar": {
            "display": ""
          },
          "en_us": {
            "display": ""
          }
        },
        "sub_navigation": [
          {
            "display": "Categories",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148154/production/system/icons/categories-tab_ss8e0q.png",
            "sort_order": 1,
            "type": "",
            "action": {
              "page": {
                "url": "/categories/",
                "type": "categories"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "tags": null,
            "acl": [
              "all"
            ],
            "_locale_language": {
              "hi": {
                "display": ""
              },
              "ar": {
                "display": ""
              },
              "en_us": {
                "display": ""
              }
            }
          }
        ]
      },
      {
        "display": "Primary Menu",
        "image": "",
        "sort_order": 3,
        "type": "",
        "action": {
          "page": {
            "type": "home"
          },
          "popup": {},
          "type": "page"
        },
        "active": true,
        "tags": null,
        "acl": [
          "all"
        ],
        "_locale_language": {
          "hi": {
            "display": ""
          },
          "ar": {
            "display": ""
          },
          "en_us": {
            "display": ""
          }
        }
      }
    ],
    "created_by": {
      "id": "000000000000000000000000"
    },
    "date_meta": {
      "created_on": "2021-01-11T04:53:13.585Z",
      "modified_on": "2021-01-14T10:24:34.485Z"
    },
    "archived": true
  }
}
```









---


#### getPageMeta
Get page meta



```javascript
// Promise
const promise = content.getPageMeta( {  companyId : value,
 applicationId : value });

// Async/Await
const data = await content.getPageMeta( {  companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |  



Use this API to get the meta of custom pages (blog, page) and default system pages (e.g. home/brand/category/collection).

*Returned Response:*




Success. Refer `PageMetaSchema` for more details.


[PageMetaSchema](#PageMetaSchema)

Success. Refer `PageMetaSchema` for more details.


*Examples:*


default
```json
{
  "$ref": "#/components/examples/PageMeta"
}
```









---


#### getPageSpec
Get page spec



```javascript
// Promise
const promise = content.getPageSpec( {  companyId : value,
 applicationId : value });

// Async/Await
const data = await content.getPageSpec( {  companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |  



Use this API to get the specifications of a page, such as page type, display name, params and query.

*Returned Response:*




Success. Refer `PageSpec` for more details.


[PageSpec](#PageSpec)

Success. Refer `PageSpec` for more details.


*Examples:*


default
```json
{
  "value": {
    "specifications": [
      {
        "page_type": "home",
        "display_name": "Home",
        "params": [],
        "query": []
      },
      {
        "page_type": "collections",
        "display_name": "Collections",
        "params": [],
        "query": []
      },
      {
        "page_type": "collection",
        "display_name": "Collection",
        "params": [
          {
            "key": "slug",
            "required": true
          }
        ],
        "query": []
      }
    ]
  }
}
```









---


#### createPage
Create a page



```javascript
// Promise
const promise = content.createPage( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await content.createPage( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |  
| body | [PageRequest](#PageRequest) | yes | Request body |


Use this API to create a custom page using a title, seo, publish status, feature image, tags, meta, etc.

*Returned Response:*




Success. Refer `PageSchema` for more details.


[PageSchema](#PageSchema)

Success. Refer `PageSchema` for more details.


*Examples:*


default
```json
{
  "$ref": "#/components/examples/PageResponse"
}
```









---


#### getPages
Get a list of pages



```javascript
// Promise
const promise = content.getPages( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await content.getPages( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |    
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1. |    
| pageSize | number | no | The number of items to retrieve in each page. Default value is 10. |  



Use this API to retrieve a list of pages.

*Returned Response:*




Success. Refer `PageGetResponse` for more details.


[PageGetResponse](#PageGetResponse)

Success. Refer `PageGetResponse` for more details.


*Examples:*


default
```json
{
  "$ref": "#/components/examples/PageGetResponse"
}
```









---


#### createPagePreview
Create a page preview



```javascript
// Promise
const promise = content.createPagePreview( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await content.createPagePreview( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |  
| body | [PageRequest](#PageRequest) | yes | Request body |


Use this API to create a page preview to check the appearance of a custom page.

*Returned Response:*




Success. Refer `PageSchema` for more details.


[PageSchema](#PageSchema)

Success. Refer `PageSchema` for more details.


*Examples:*


default
```json
{
  "$ref": "#/components/examples/PageResponse"
}
```









---


#### updatePagePreview
Change the publish status of a page



```javascript
// Promise
const promise = content.updatePagePreview( {  companyId : value,
 applicationId : value,
 slug : value,
 body : value });

// Async/Await
const data = await content.updatePagePreview( {  companyId : value,
 applicationId : value,
 slug : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |   
| slug | string | yes | A short, human-readable, URL-friendly identifier of a page. You can get slug value of a page from `getPages` API. |  
| body | [PagePublishRequest](#PagePublishRequest) | yes | Request body |


Use this API to change the publish status of an existing page. Allows you to publish and unpublish the page.

*Returned Response:*




Success.


[PageSchema](#PageSchema)

Success.


*Examples:*


default
```json
{
  "$ref": "#/components/examples/PageResponse"
}
```









---


#### updatePage
Update a page



```javascript
// Promise
const promise = content.updatePage( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });

// Async/Await
const data = await content.updatePage( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |   
| id | string | yes | ID allotted to the page. |  
| body | [PageSchema](#PageSchema) | yes | Request body |


Use this API to edit the details of an existing page, such as its title, seo, publish status, feature image, tags, schedule, etc.

*Returned Response:*




Success. Refer `PageSchema` for more details.


[PageSchema](#PageSchema)

Success. Refer `PageSchema` for more details.


*Examples:*


default
```json
{
  "$ref": "#/components/examples/PageResponse"
}
```









---


#### deletePage
Delete a page



```javascript
// Promise
const promise = content.deletePage( {  companyId : value,
 applicationId : value,
 id : value });

// Async/Await
const data = await content.deletePage( {  companyId : value,
 applicationId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |   
| id | string | yes | ID allotted to the page. |  



Use this API to delete an existing page.

*Returned Response:*




Success.


[PageSchema](#PageSchema)

Success.


*Examples:*


default
```json
{
  "$ref": "#/components/examples/PageResponse"
}
```









---


#### getPageBySlug
Get pages by component Id



```javascript
// Promise
const promise = content.getPageBySlug( {  companyId : value,
 applicationId : value,
 slug : value });

// Async/Await
const data = await content.getPageBySlug( {  companyId : value,
 applicationId : value,
 slug : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |   
| slug | string | yes | A short, human-readable, URL-friendly identifier of a page. You can get slug value of a page from `getPages` API. |  



Use this API to retrieve the components of a page, such as its title, seo, publish status, feature image, tags, schedule, etc.

*Returned Response:*




Success. Returns a JSON object of components. Refer `PageSchema` for more details.


[PageSchema](#PageSchema)

Success. Returns a JSON object of components. Refer `PageSchema` for more details.


*Examples:*


default
```json
{
  "$ref": "#/components/examples/PageResponse"
}
```









---


#### getSEOConfiguration
Get SEO configuration of an application



```javascript
// Promise
const promise = content.getSEOConfiguration( {  companyId : value,
 applicationId : value });

// Async/Await
const data = await content.getSEOConfiguration( {  companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |  



Use this API to know how the SEO is configured in the application. This includes the sitemap, robot.txt, custom meta tags, etc.

*Returned Response:*




Success. Refer `SeoComponent` for more details.


[SeoComponent](#SeoComponent)

Success. Refer `SeoComponent` for more details.


*Examples:*


default
```json
{
  "$ref": "#/components/examples/Seo"
}
```









---


#### updateSEOConfiguration
Update SEO of application



```javascript
// Promise
const promise = content.updateSEOConfiguration( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await content.updateSEOConfiguration( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |  
| body | [SeoComponent](#SeoComponent) | yes | Request body |


Use this API to edit the SEO details of an application. This includes the sitemap, robot.txt, custom meta tags, etc.

*Returned Response:*




Success. Refer `SeoSchema` for more details.


[SeoSchema](#SeoSchema)

Success. Refer `SeoSchema` for more details.


*Examples:*


default
```json
{
  "value": {
    "details": {
      "title": "Zyosa Zyosa"
    },
    "robots_txt": "User-agent: * \nAllow: / \nsancisciasn xwsaixjowqnxwsiwjs",
    "sitemap_enabled": false,
    "_id": "6009819ee463ad40de397eb2",
    "app": "000000000000000000000001",
    "created_at": "2021-01-21T13:29:02.543Z",
    "updated_at": "2021-02-05T06:36:16.048Z",
    "__v": 11,
    "custom_meta_tags": [
      {
        "name": "test 0000",
        "content": "<meta name=\"test\" content=\"0000 cn dcje dcj rejre cjrenurenc \">",
        "_id": "6017c301bde3c21dbb13b284"
      },
      {
        "name": "cwdcdc",
        "content": "<meta content=\"wdcewdewc\">",
        "_id": "6017c675bde3c22cfb13b290"
      }
    ]
  }
}
```









---


#### getSlideshows
Get slideshows



```javascript
// Promise
const promise = content.getSlideshows( {  companyId : value,
 applicationId : value,
 devicePlatform : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await content.getSlideshows( {  companyId : value,
 applicationId : value,
 devicePlatform : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |   
| devicePlatform | string | yes | Filter slideshows by platform. Acceptable values are: web, android, ios and all |    
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1. |    
| pageSize | number | no | The number of items to retrieve in each page. Default value is 10. |  



A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to fetch a list of slideshows.

*Returned Response:*




Success. Refer `SlideshowGetResponse` for more details.


[SlideshowGetResponse](#SlideshowGetResponse)

Success. Refer `SlideshowGetResponse` for more details.


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SlideshowGetResponse"
}
```









---


#### createSlideshow
Create a slideshow



```javascript
// Promise
const promise = content.createSlideshow( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await content.createSlideshow( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |  
| body | [SlideshowRequest](#SlideshowRequest) | yes | Request body |


A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to create a slideshow.

*Returned Response:*




Success. Refer `SlideshowSchema` for more details.


[SlideshowSchema](#SlideshowSchema)

Success. Refer `SlideshowSchema` for more details.


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SlideshowResponse"
}
```









---


#### getSlideshowBySlug
Get slideshow by slug



```javascript
// Promise
const promise = content.getSlideshowBySlug( {  companyId : value,
 applicationId : value,
 slug : value,
 devicePlatform : value });

// Async/Await
const data = await content.getSlideshowBySlug( {  companyId : value,
 applicationId : value,
 slug : value,
 devicePlatform : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |   
| slug | string | yes | A short, human-readable, URL-friendly identifier of a slideshow. You can get slug value of a page from `getSlideshows` API. |   
| devicePlatform | string | yes | Filter slideshows by platform. Acceptable values are: web, android, ios and all |  



Use this API to retrieve the details of a slideshow by its slug.

*Returned Response:*




Success. Refer `SlideshowSchema` for more details.


[SlideshowSchema](#SlideshowSchema)

Success. Refer `SlideshowSchema` for more details.


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SlideshowResponse"
}
```









---


#### updateSlideshow
Update a slideshow



```javascript
// Promise
const promise = content.updateSlideshow( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });

// Async/Await
const data = await content.updateSlideshow( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |   
| id | string | yes | ID allotted to the slideshow. |  
| body | [SlideshowRequest](#SlideshowRequest) | yes | Request body |


Use this API to edit the details of an existing slideshow.

*Returned Response:*




Success. Refer `SlideshowSchema` for more details.


[SlideshowSchema](#SlideshowSchema)

Success. Refer `SlideshowSchema` for more details.


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SlideshowResponse"
}
```









---


#### deleteSlideshow
Delete a slideshow



```javascript
// Promise
const promise = content.deleteSlideshow( {  companyId : value,
 applicationId : value,
 id : value });

// Async/Await
const data = await content.deleteSlideshow( {  companyId : value,
 applicationId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform |   
| applicationId | string | yes | Numeric ID allotted to an application created within a business account. |   
| id | string | yes | ID allotted to the slideshow. |  



Use this API to delete an existing slideshow.

*Returned Response:*




Success.


[SlideshowSchema](#SlideshowSchema)

Success.


*Examples:*


default
```json
{
  "value": {
    "date_meta": {
      "created_on": "2021-03-14T05:27:12.319Z",
      "modified_on": "2021-03-14T05:27:12.319Z"
    },
    "archived": true,
    "_id": "604d9eb975e9d136bb1b8b83",
    "configuration": {
      "start_on_launch": false,
      "duration": 50,
      "sleep_time": 100,
      "slide_direction": "horizontal"
    },
    "slug": "ss-sfsd-updated",
    "platform": "ios",
    "media": [
      {
        "auto_decide_duration": false,
        "type": "image",
        "url": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/brands-tab_sfinpk.png",
        "bg_color": "#ffffff",
        "duration": 10,
        "action": {
          "type": ""
        }
      },
      {
        "auto_decide_duration": true,
        "type": "youtube",
        "url": "https://www.youtube.com/embed/9vJRopau0g0",
        "bg_color": "#ffffff",
        "duration": 909,
        "action": {
          "type": ""
        }
      }
    ],
    "application": "5cd3db5e9d692cfe5302a7bb",
    "active": true
  }
}
```









---


#### getSupportInformation
Get support information



```javascript
// Promise
const promise = content.getSupportInformation( {  companyId : value,
 applicationId : value });

// Async/Await
const data = await content.getSupportInformation( {  companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform. |   
| applicationId | string | yes | Alphanumeric ID allotted to an application created within a business account. |  



Use this API to get the contact details for customer support, including emails and phone numbers.

*Returned Response:*




Success. Refer `Support` for more details.


[Support](#Support)

Success. Refer `Support` for more details.


*Examples:*


default
```json
{
  "$ref": "#/components/examples/Support"
}
```









---


#### updateSupportInformation
Update the support data of an application



```javascript
// Promise
const promise = content.updateSupportInformation( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await content.updateSupportInformation( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform. |   
| applicationId | string | yes | Alphanumeric ID allotted to an application created within a business account. |  
| body | [Support](#Support) | yes | Request body |


Use this API to edit the existing contact details for customer support, including emails and phone numbers.

*Returned Response:*




Success. Refer `Support` for more details.


[Support](#Support)

Success. Refer `Support` for more details.


*Examples:*


default
```json
{
  "$ref": "#/components/examples/Support"
}
```









---


#### updateInjectableTag
Update a tag



```javascript
// Promise
const promise = content.updateInjectableTag( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await content.updateInjectableTag( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform. |   
| applicationId | string | yes | Alphanumeric ID allotted to an application created within a business account. |  
| body | [CreateTagRequestSchema](#CreateTagRequestSchema) | no | Request body |


Use this API to edit the details of an existing tag. This includes the tag name, tag type (css/js), url and position of the tag.

*Returned Response:*




Success.


[TagsSchema](#TagsSchema)

Success.









---


#### deleteAllInjectableTags
Delete tags in application



```javascript
// Promise
const promise = content.deleteAllInjectableTags( {  companyId : value,
 applicationId : value });

// Async/Await
const data = await content.deleteAllInjectableTags( {  companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform. |   
| applicationId | string | yes | Alphanumeric ID allotted to an application created within a business account. |  



Use this API to delete all the existing tags at once.

*Returned Response:*




Success.


[TagsSchema](#TagsSchema)

Success.









---


#### getInjectableTags
Get all the tags in an application



```javascript
// Promise
const promise = content.getInjectableTags( {  companyId : value,
 applicationId : value });

// Async/Await
const data = await content.getInjectableTags( {  companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform. |   
| applicationId | string | yes | Alphanumeric ID allotted to an application created within a business account. |  



Use this API to get all the CSS and JS injected in the application in the form of tags.

*Returned Response:*




Success. Refer `TagsSchema` for more details.


[TagsSchema](#TagsSchema)

Success. Refer `TagsSchema` for more details.









---


#### addInjectableTag
Add a tag



```javascript
// Promise
const promise = content.addInjectableTag( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await content.addInjectableTag( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform. |   
| applicationId | string | yes | Alphanumeric ID allotted to an application created within a business account. |  
| body | [CreateTagRequestSchema](#CreateTagRequestSchema) | no | Request body |


CSS and JS can be injected in the application (website) with the help of tags. Use this API to create such tags by entering the tag name, tag type (css/js), url and position of the tag.

*Returned Response:*




Success.


[TagsSchema](#TagsSchema)

Success.









---


#### removeInjectableTag
Remove a tag



```javascript
// Promise
const promise = content.removeInjectableTag( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await content.removeInjectableTag( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform. |   
| applicationId | string | yes | Alphanumeric ID allotted to an application created within a business account. |  
| body | [RemoveHandpickedSchema](#RemoveHandpickedSchema) | no | Request body |


Use this API to delete an existing tag.

*Returned Response:*




Success.


[TagsSchema](#TagsSchema)

Success.









---


#### editInjectableTag
Edit a tag by id



```javascript
// Promise
const promise = content.editInjectableTag( {  companyId : value,
 applicationId : value,
 tagId : value,
 body : value });

// Async/Await
const data = await content.editInjectableTag( {  companyId : value,
 applicationId : value,
 tagId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Numeric ID allotted to a business account on Fynd Platform. |   
| applicationId | string | yes | Alphanumeric ID allotted to an application created within a business account. |   
| tagId | string | yes | ID allotted to the tag. |  
| body | [UpdateHandpickedSchema](#UpdateHandpickedSchema) | no | Request body |


Use this API to edit the details of an existing tag by its ID.

*Returned Response:*




Success.


[TagsSchema](#TagsSchema)

Success.









---





## Assignment


#### createPickupLocation




```javascript
// Promise
const promise = assignment.createPickupLocation( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await assignment.createPickupLocation( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id |   
| applicationId | string | yes | Application Id |  
| body | [PickupPointSchema](#PickupPointSchema) | no | Request body |


Create a new Pickup point for an application.


*Returned Response:*




Success Response - Store Updated


[Success](#Success)

Success Response - Store Updated









---


#### getPickupLocation




```javascript
// Promise
const promise = assignment.getPickupLocation( {  companyId : value,
 applicationId : value,
 q : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await assignment.getPickupLocation( {  companyId : value,
 applicationId : value,
 q : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| q | string | no | Search query |    
| pageNo | number | no | Request a page number |    
| pageSize | number | no | Request a page size |   
| companyId | number | yes | Company Id |   
| applicationId | string | yes | Application Id |  



Update list of pickup points for an application.


*Returned Response:*




Success Response


[PickupPointResponse](#PickupPointResponse)

Success Response









---


#### updatePickupLocation




```javascript
// Promise
const promise = assignment.updatePickupLocation( {  id : value,
 companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await assignment.updatePickupLocation( {  id : value,
 companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | number | yes | Pickup Point ID |   
| companyId | number | yes | Company Id |   
| applicationId | string | yes | Application Id |  
| body | [PickupPointSchema](#PickupPointSchema) | no | Request body |


Update Pickup Point for an application. Pickup Point once created
can be updated using this API. 'x-application-id'm and request body are required to trigger
a successful update.


*Returned Response:*




Success Response - Store Updated


[Success](#Success)

Success Response - Store Updated









---


#### getPickupLocationById




```javascript
// Promise
const promise = assignment.getPickupLocationById( {  id : value,
 companyId : value,
 applicationId : value });

// Async/Await
const data = await assignment.getPickupLocationById( {  id : value,
 companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | number | yes | Pickup Point Id |   
| companyId | number | yes | Company Id |   
| applicationId | string | yes | Application Id |  



This API returns Pickup point data for an id. Returns not found if no data exists for the
store id passed.


*Returned Response:*




Success Response


[PickupPointSchema](#PickupPointSchema)

Success Response









---


#### createPickupConfiguration




```javascript
// Promise
const promise = assignment.createPickupConfiguration( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await assignment.createPickupConfiguration( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id |   
| applicationId | string | yes | Application Id |  
| body | [PickupConfiguration](#PickupConfiguration) | no | Request body |


Create a new pickup configuration for an application id. Only one configuration can be
created per application id.


*Returned Response:*




Success Response - Store Updated


[Success](#Success)

Success Response - Store Updated









---


#### getPickupConfiguration




```javascript
// Promise
const promise = assignment.getPickupConfiguration( {  companyId : value,
 applicationId : value });

// Async/Await
const data = await assignment.getPickupConfiguration( {  companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id |   
| applicationId | string | yes | Application Id |  



Let pickup configuration for an application. z-application-id is required in
the header to fetch the data.


*Returned Response:*




Success Response


[PickupResponse](#PickupResponse)

Success Response









---


#### getAllocationConfiguration




```javascript
// Promise
const promise = assignment.getAllocationConfiguration( {  companyId : value,
 applicationId : value });

// Async/Await
const data = await assignment.getAllocationConfiguration( {  companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id |   
| applicationId | string | yes | Application Id |  



Get Shipping configuration for an application. Returns the global shipping configuration
including shipping priority and default strategy, etc. Every application can have one set of
configuration each. The endpoint requires an application id to get the data.


*Returned Response:*




Success Response


[ShippingResponse](#ShippingResponse)

Success Response









---


#### createAllocationConfiguration




```javascript
// Promise
const promise = assignment.createAllocationConfiguration( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await assignment.createAllocationConfiguration( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id |   
| applicationId | string | yes | Application Id |  
| body | [ShippingSchema](#ShippingSchema) | no | Request body |


Create a new Shipping configuration for an application The configuration is for
all the stores under an application. There can be only one configuration for an
application i.e, for an application configuration can be created only once.


*Returned Response:*




Success Response - Store Updated


[Success](#Success)

Success Response - Store Updated









---


#### updateAllocationConfiguration




```javascript
// Promise
const promise = assignment.updateAllocationConfiguration( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await assignment.updateAllocationConfiguration( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id |   
| applicationId | string | yes | Application Id |  
| body | [ShippingSchema](#ShippingSchema) | no | Request body |


Update Shipping configuration for an application. Application configuration once created
can be updated using this API. 'x-application-id'm and request body are required to trigger
a successful update.


*Returned Response:*




Success Response - Store Updated


[Success](#Success)

Success Response - Store Updated









---


#### getAllocationLocations




```javascript
// Promise
const promise = assignment.getAllocationLocations( {  companyId : value,
 applicationId : value,
 q : value,
 pageNo : value,
 pageSize : value,
 type : value });

// Async/Await
const data = await assignment.getAllocationLocations( {  companyId : value,
 applicationId : value,
 q : value,
 pageNo : value,
 pageSize : value,
 type : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| q | string | no | Search query |    
| pageNo | number | no | Request a page number |    
| pageSize | number | no | Request a page size |    
| type | string | no | Type can be 'standard' or 'advanced' |   
| companyId | number | yes | Company Id |   
| applicationId | string | yes | Application Id |  



List Stores of an application. Two types of stores are listed,
some having allocation types as standard and others, advanced.
API has support for pagination, filter by type and search by name.


*Returned Response:*




Success Response


[StoreListResponse](#StoreListResponse)

Success Response









---


#### getAllocationLocationById




```javascript
// Promise
const promise = assignment.getAllocationLocationById( {  id : value,
 companyId : value,
 applicationId : value });

// Async/Await
const data = await assignment.getAllocationLocationById( {  id : value,
 companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | number | yes | Store Id |   
| companyId | number | yes | Company Id |   
| applicationId | string | yes | Application Id |  



This API returns store data for an id. Returns not found if no data exists for the
store id passed. The data is returned from sixspeed database which includes only the
shipping configuration of the stores including store id and app id.


*Returned Response:*




Success Response


[StoreResponse](#StoreResponse)

Success Response









---


#### updateAllocationLocation




```javascript
// Promise
const promise = assignment.updateAllocationLocation( {  id : value,
 companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await assignment.updateAllocationLocation( {  id : value,
 companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | number | yes | Store Id |   
| companyId | number | yes | Company Id |   
| applicationId | string | yes | Application Id |  
| body | [StoreSchema](#StoreSchema) | no | Request body |


A store configuration once created can be updated via this API. Store id in request params
and udpated request body are required to successfully update the store data.


*Returned Response:*




Success Response - Store Updated


[Success](#Success)

Success Response - Store Updated









---


#### createAllocationLocation




```javascript
// Promise
const promise = assignment.createAllocationLocation( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await assignment.createAllocationLocation( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id |   
| applicationId | string | yes | Application Id |  
| body | [StoreSchema](#StoreSchema) | no | Request body |


Create a new store shipping configuratiion. The configuration is stored into the
sixspeed database. One one store data can be created for one store id. Ther can be one
default configuration and multiple non-default ones. The default is not binded with product
tags while others are required to be.


*Returned Response:*




Success Response - Store Updated


[Success](#Success)

Success Response - Store Updated









---


#### getDestinationZones




```javascript
// Promise
const promise = assignment.getDestinationZones( {  companyId : value,
 applicationId : value,
 q : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await assignment.getDestinationZones( {  companyId : value,
 applicationId : value,
 q : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| q | string | no | Search query |    
| pageNo | number | no | Request a page number |    
| pageSize | number | no | Request a page size |   
| companyId | number | yes | Company Id |   
| applicationId | string | yes | Application Id |  



Get a list of zones created, where every zone has a unique name and id. They can be
of three different types, radius, pincode and country.


*Returned Response:*




Success Response


[ZoneListResponse](#ZoneListResponse)

Success Response









---


#### postDestinationZone




```javascript
// Promise
const promise = assignment.postDestinationZone( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await assignment.postDestinationZone( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id |   
| applicationId | string | yes | Application Id |  
| body | [ZoneSchema](#ZoneSchema) | no | Request body |


This API lets you create a zone which can be used further be mapped with store
configuration rules to defined a shipping rule. Either of the three details need to
be passed, zone_detail, pincode and region.


*Returned Response:*




Success Response - Zone Created


[Success](#Success)

Success Response - Zone Created









---


#### getDestinationZoneById




```javascript
// Promise
const promise = assignment.getDestinationZoneById( {  id : value,
 companyId : value,
 applicationId : value });

// Async/Await
const data = await assignment.getDestinationZoneById( {  id : value,
 companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | number | yes | Store Id |   
| companyId | number | yes | Company Id |   
| applicationId | string | yes | Application Id |  



Returns zone data for the specified zone id. Id is the required parameter and returns
not found if no data is found for the passed zone id.


*Returned Response:*




Success Response


[ZoneSchema](#ZoneSchema)

Success Response









---


#### updateDestinationZone




```javascript
// Promise
const promise = assignment.updateDestinationZone( {  id : value,
 companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await assignment.updateDestinationZone( {  id : value,
 companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | number | yes | Store Id |   
| companyId | number | yes | Company Id |   
| applicationId | string | yes | Application Id |  
| body | [ZoneSchema](#ZoneSchema) | no | Request body |


Zone once created can be updated using this API. Zone id and request body are the required
data to update a zone.


*Returned Response:*




Success Response - Zone Updated


[Success](#Success)

Success Response - Zone Updated









---





## Billing


#### createSubscriptionCharge
Create subscription charge



```javascript
// Promise
const promise = billing.createSubscriptionCharge( {  companyId : value,
 extensionId : value,
 body : value });

// Async/Await
const data = await billing.createSubscriptionCharge( {  companyId : value,
 extensionId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Customer unique id. In case of company it will be company id. |   
| extensionId | string | yes | Extension _id |  
| body | [CreateSubscriptionCharge](#CreateSubscriptionCharge) | no | Request body |


Register subscription charge for a seller of your extension.

*Returned Response:*




Success


[CreateSubscriptionResponse](#CreateSubscriptionResponse)

Success









---


#### getSubscriptionCharge
Get subscription charge details



```javascript
// Promise
const promise = billing.getSubscriptionCharge( {  companyId : value,
 extensionId : value,
 subscriptionId : value });

// Async/Await
const data = await billing.getSubscriptionCharge( {  companyId : value,
 extensionId : value,
 subscriptionId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Customer unique id. In case of company it will be company id. |   
| extensionId | string | yes | Extension _id |   
| subscriptionId | string | yes | Subscription charge _id |  



Get created subscription charge details

*Returned Response:*




Success


[EntitySubscription](#EntitySubscription)

Success









---


#### cancelSubscriptionCharge
Cancel subscription charge



```javascript
// Promise
const promise = billing.cancelSubscriptionCharge( {  companyId : value,
 extensionId : value,
 subscriptionId : value });

// Async/Await
const data = await billing.cancelSubscriptionCharge( {  companyId : value,
 extensionId : value,
 subscriptionId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Customer unique id. In case of company it will be company id. |   
| extensionId | string | yes | Extension _id |   
| subscriptionId | string | yes | Subscription charge _id |  



Cancel subscription and attached charges.

*Returned Response:*




Success


[EntitySubscription](#EntitySubscription)

Success









---


#### getInvoices
Get invoices



```javascript
// Promise
const promise = billing.getInvoices( {  companyId : value });

// Async/Await
const data = await billing.getInvoices( {  companyId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Customer unique id. In case of company it will be company id. |  



Get invoices.

*Returned Response:*




Success


[Invoices](#Invoices)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/Invoices"
}
```









---


#### getInvoiceById
Get invoice by id



```javascript
// Promise
const promise = billing.getInvoiceById( {  companyId : value,
 invoiceId : value });

// Async/Await
const data = await billing.getInvoiceById( {  companyId : value,
 invoiceId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Customer unique id. In case of company it will be company id. |   
| invoiceId | string | yes | Invoice id |  



Get invoice by id.

*Returned Response:*




Success


[Invoice](#Invoice)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/Invoice"
}
```









---


#### getCustomerDetail
Get subscription customer detail



```javascript
// Promise
const promise = billing.getCustomerDetail( {  companyId : value });

// Async/Await
const data = await billing.getCustomerDetail( {  companyId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Customer unique id. In case of company it will be company id. |  



Get subscription customer detail.

*Returned Response:*




Success


[SubscriptionCustomer](#SubscriptionCustomer)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SubscriptionCustomerRes"
}
```









---


#### upsertCustomerDetail
Upsert subscription customer detail



```javascript
// Promise
const promise = billing.upsertCustomerDetail( {  companyId : value,
 body : value });

// Async/Await
const data = await billing.upsertCustomerDetail( {  companyId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Customer unique id. In case of company it will be company id. |  
| body | [SubscriptionCustomerCreate](#SubscriptionCustomerCreate) | yes | Request body |


Upsert subscription customer detail.

*Returned Response:*




Success


[SubscriptionCustomer](#SubscriptionCustomer)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SubscriptionCustomerRes"
}
```









---


#### getSubscription
Get current subscription detail



```javascript
// Promise
const promise = billing.getSubscription( {  companyId : value });

// Async/Await
const data = await billing.getSubscription( {  companyId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Customer unique id. In case of company it will be company id. |  



If subscription is active then it will return is_enabled true and return subscription object. If subscription is not active then is_enabled false and message.


*Returned Response:*




Success


[SubscriptionStatus](#SubscriptionStatus)

Success


*Examples:*


Active subscription
```json
{
  "$ref": "#/components/examples/SubscriptionActiveRes"
}
```

Inactive subscription
```json
{
  "$ref": "#/components/examples/SubscriptionInavtiveRes"
}
```









---


#### getFeatureLimitConfig
Get subscription subscription limits



```javascript
// Promise
const promise = billing.getFeatureLimitConfig( {  companyId : value });

// Async/Await
const data = await billing.getFeatureLimitConfig( {  companyId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Customer unique id. In case of company it will be company id. |  



Get subscription subscription limits.

*Returned Response:*




Success


[SubscriptionLimit](#SubscriptionLimit)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/CurrentLimitRes"
}
```









---


#### activateSubscriptionPlan
Activate subscription



```javascript
// Promise
const promise = billing.activateSubscriptionPlan( {  companyId : value,
 body : value });

// Async/Await
const data = await billing.activateSubscriptionPlan( {  companyId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Customer unique id. In case of company it will be company id. |  
| body | [SubscriptionActivateReq](#SubscriptionActivateReq) | yes | Request body |


It will activate subscription plan for customer

*Returned Response:*




Success


[SubscriptionActivateRes](#SubscriptionActivateRes)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SubscriptionActivateRes"
}
```









---


#### cancelSubscriptionPlan
Cancel subscription



```javascript
// Promise
const promise = billing.cancelSubscriptionPlan( {  companyId : value,
 body : value });

// Async/Await
const data = await billing.cancelSubscriptionPlan( {  companyId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Customer unique id. In case of company it will be company id. |  
| body | [CancelSubscriptionReq](#CancelSubscriptionReq) | yes | Request body |


It will cancel current active subscription.

*Returned Response:*




Success


[CancelSubscriptionRes](#CancelSubscriptionRes)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/CancelSubscriptionRes"
}
```









---





## Communication


#### getCampaigns
Get campaigns



```javascript
// Promise
const promise = communication.getCampaigns( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value,
 sort : value });

// Async/Await
const data = await communication.getCampaigns( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value,
 sort : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |    
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |    
| sort | Object | no | To sort based on created_at |  



Get campaigns

*Returned Response:*




Success


[Campaigns](#Campaigns)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/Campaigns"
}
```









---


#### createCampaign
Create campaign



```javascript
// Promise
const promise = communication.createCampaign( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await communication.createCampaign( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |  
| body | [CampaignReq](#CampaignReq) | yes | Request body |


Create campaign

*Returned Response:*




Success


[Campaign](#Campaign)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/Campaign"
}
```









---


#### getCampaignById
Get campaign by id



```javascript
// Promise
const promise = communication.getCampaignById( {  companyId : value,
 applicationId : value,
 id : value });

// Async/Await
const data = await communication.getCampaignById( {  companyId : value,
 applicationId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |   
| id | string | yes | Campaign id |  



Get campaign by id

*Returned Response:*




Success


[Campaign](#Campaign)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/Campaign"
}
```









---


#### updateCampaignById
Update campaign by id



```javascript
// Promise
const promise = communication.updateCampaignById( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });

// Async/Await
const data = await communication.updateCampaignById( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |   
| id | string | yes | Campaign id |  
| body | [CampaignReq](#CampaignReq) | yes | Request body |


Update campaign by id

*Returned Response:*




Success


[Campaign](#Campaign)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/Campaign"
}
```









---


#### getStatsOfCampaignById
Get stats of campaign by id



```javascript
// Promise
const promise = communication.getStatsOfCampaignById( {  companyId : value,
 applicationId : value,
 id : value });

// Async/Await
const data = await communication.getStatsOfCampaignById( {  companyId : value,
 applicationId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |   
| id | string | yes | Campaign id |  



Get stats of campaign by id

*Returned Response:*




Success


[GetStats](#GetStats)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/GetStats"
}
```









---


#### getAudiences
Get audiences



```javascript
// Promise
const promise = communication.getAudiences( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value,
 sort : value });

// Async/Await
const data = await communication.getAudiences( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value,
 sort : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |    
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |    
| sort | Object | no | To sort based on created_at |  



Get audiences

*Returned Response:*




Success


[Audiences](#Audiences)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/Audiences"
}
```









---


#### createAudience
Create audience



```javascript
// Promise
const promise = communication.createAudience( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await communication.createAudience( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |  
| body | [AudienceReq](#AudienceReq) | yes | Request body |


Create audience

*Returned Response:*




Success


[Audience](#Audience)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/Audience"
}
```









---


#### getBigqueryHeaders
Get bigquery headers



```javascript
// Promise
const promise = communication.getBigqueryHeaders( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await communication.getBigqueryHeaders( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |  
| body | [BigqueryHeadersReq](#BigqueryHeadersReq) | yes | Request body |


Get bigquery headers

*Returned Response:*




Success


[BigqueryHeadersRes](#BigqueryHeadersRes)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/BigqueryHeadersRes"
}
```









---


#### getAudienceById
Get audience by id



```javascript
// Promise
const promise = communication.getAudienceById( {  companyId : value,
 applicationId : value,
 id : value });

// Async/Await
const data = await communication.getAudienceById( {  companyId : value,
 applicationId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |   
| id | string | yes | Audience id |  



Get audience by id

*Returned Response:*




Success


[Audience](#Audience)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/Audience"
}
```









---


#### updateAudienceById
Update audience by id



```javascript
// Promise
const promise = communication.updateAudienceById( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });

// Async/Await
const data = await communication.updateAudienceById( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |   
| id | string | yes | Audience id |  
| body | [AudienceReq](#AudienceReq) | yes | Request body |


Update audience by id

*Returned Response:*




Success


[Audience](#Audience)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/Audience"
}
```









---


#### getNSampleRecordsFromCsv
Get n sample records from csv



```javascript
// Promise
const promise = communication.getNSampleRecordsFromCsv( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await communication.getNSampleRecordsFromCsv( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |  
| body | [GetNRecordsCsvReq](#GetNRecordsCsvReq) | yes | Request body |


Get n sample records from csv

*Returned Response:*




Success


[GetNRecordsCsvRes](#GetNRecordsCsvRes)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/GetNRecordsCsvRes"
}
```









---


#### getEmailProviders
Get email providers



```javascript
// Promise
const promise = communication.getEmailProviders( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value,
 sort : value });

// Async/Await
const data = await communication.getEmailProviders( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value,
 sort : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |    
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |    
| sort | Object | no | To sort based on created_at |  



Get email providers

*Returned Response:*




Success


[EmailProviders](#EmailProviders)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/EmailProviders"
}
```









---


#### createEmailProvider
Create email provider



```javascript
// Promise
const promise = communication.createEmailProvider( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await communication.createEmailProvider( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |  
| body | [EmailProviderReq](#EmailProviderReq) | yes | Request body |


Create email provider

*Returned Response:*




Success


[EmailProvider](#EmailProvider)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/EmailProvider"
}
```









---


#### getEmailProviderById
Get email provider by id



```javascript
// Promise
const promise = communication.getEmailProviderById( {  companyId : value,
 applicationId : value,
 id : value });

// Async/Await
const data = await communication.getEmailProviderById( {  companyId : value,
 applicationId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |   
| id | string | yes | Email provider id |  



Get email provider by id

*Returned Response:*




Success


[EmailProvider](#EmailProvider)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/EmailProvider"
}
```









---


#### updateEmailProviderById
Update email provider by id



```javascript
// Promise
const promise = communication.updateEmailProviderById( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });

// Async/Await
const data = await communication.updateEmailProviderById( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |   
| id | string | yes | Email provider id |  
| body | [EmailProviderReq](#EmailProviderReq) | yes | Request body |


Update email provider by id

*Returned Response:*




Success


[EmailProvider](#EmailProvider)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/EmailProvider"
}
```









---


#### getEmailTemplates
Get email templates



```javascript
// Promise
const promise = communication.getEmailTemplates( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value,
 sort : value });

// Async/Await
const data = await communication.getEmailTemplates( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value,
 sort : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |    
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |    
| sort | Object | no | To sort based on created_at |  



Get email templates

*Returned Response:*




Success


[EmailTemplates](#EmailTemplates)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/EmailTemplates"
}
```









---


#### createEmailTemplate
Create email template



```javascript
// Promise
const promise = communication.createEmailTemplate( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await communication.createEmailTemplate( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |  
| body | [EmailTemplateReq](#EmailTemplateReq) | yes | Request body |


Create email template

*Returned Response:*




Success


[EmailTemplateRes](#EmailTemplateRes)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/EmailTemplateRes"
}
```









---


#### getSystemEmailTemplates
Get system email templates



```javascript
// Promise
const promise = communication.getSystemEmailTemplates( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value,
 sort : value });

// Async/Await
const data = await communication.getSystemEmailTemplates( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value,
 sort : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |    
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |    
| sort | Object | no | To sort based on created_at |  



Get system email templates

*Returned Response:*




Success


[SystemEmailTemplates](#SystemEmailTemplates)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SystemEmailTemplates"
}
```









---


#### getEmailTemplateById
Get email template by id



```javascript
// Promise
const promise = communication.getEmailTemplateById( {  companyId : value,
 applicationId : value,
 id : value });

// Async/Await
const data = await communication.getEmailTemplateById( {  companyId : value,
 applicationId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |   
| id | string | yes | Email template id |  



Get email template by id

*Returned Response:*




Success


[EmailTemplate](#EmailTemplate)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/EmailTemplate"
}
```









---


#### updateEmailTemplateById
Update email template by id



```javascript
// Promise
const promise = communication.updateEmailTemplateById( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });

// Async/Await
const data = await communication.updateEmailTemplateById( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |   
| id | string | yes | Email template id |  
| body | [EmailTemplateReq](#EmailTemplateReq) | yes | Request body |


Update email template by id

*Returned Response:*




Success


[EmailTemplateRes](#EmailTemplateRes)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/EmailTemplateRes"
}
```









---


#### deleteEmailTemplateById
Delete email template by id



```javascript
// Promise
const promise = communication.deleteEmailTemplateById( {  companyId : value,
 applicationId : value,
 id : value });

// Async/Await
const data = await communication.deleteEmailTemplateById( {  companyId : value,
 applicationId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |   
| id | string | yes | Email template id |  



Delete email template by id

*Returned Response:*




Success


[EmailTemplateDeleteSuccessRes](#EmailTemplateDeleteSuccessRes)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/EmailTemplateDeleteSuccessRes"
}
```









---


#### getEventSubscriptions
Get event subscriptions



```javascript
// Promise
const promise = communication.getEventSubscriptions( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value,
 populate : value });

// Async/Await
const data = await communication.getEventSubscriptions( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value,
 populate : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |    
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |    
| populate | string | no | populate fields |  



Get event subscriptions

*Returned Response:*




Success


[EventSubscriptions](#EventSubscriptions)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/EventSubscriptions"
}
```









---


#### getJobs
Get jobs



```javascript
// Promise
const promise = communication.getJobs( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value,
 sort : value });

// Async/Await
const data = await communication.getJobs( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value,
 sort : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |    
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |    
| sort | Object | no | To sort based on created_at |  



Get jobs

*Returned Response:*




Success


[Jobs](#Jobs)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/Jobs"
}
```









---


#### triggerCampaignJob
Trigger campaign job



```javascript
// Promise
const promise = communication.triggerCampaignJob( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await communication.triggerCampaignJob( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |  
| body | [TriggerJobRequest](#TriggerJobRequest) | yes | Request body |


Trigger campaign job

*Returned Response:*




Success


[TriggerJobResponse](#TriggerJobResponse)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/TriggerJobResponse"
}
```









---


#### getJobLogs
Get job logs



```javascript
// Promise
const promise = communication.getJobLogs( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value,
 sort : value });

// Async/Await
const data = await communication.getJobLogs( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value,
 sort : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |    
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |    
| sort | Object | no | To sort based on created_at |  



Get job logs

*Returned Response:*




Success


[JobLogs](#JobLogs)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/JobLogs"
}
```









---


#### getCommunicationLogs
Get communication logs



```javascript
// Promise
const promise = communication.getCommunicationLogs( {  companyId : value,
 applicationId : value,
 pageId : value,
 pageSize : value,
 sort : value,
 query : value });

// Async/Await
const data = await communication.getCommunicationLogs( {  companyId : value,
 applicationId : value,
 pageId : value,
 pageSize : value,
 sort : value,
 query : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |    
| pageId | string | no | Current page no |    
| pageSize | number | no | Current request items count |    
| sort | Object | no | To sort based on _id |    
| query | Object | no |  |  



Get communication logs

*Returned Response:*




Success


[Logs](#Logs)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/Logs"
}
```









---


#### getSystemNotifications
Get system notifications



```javascript
// Promise
const promise = communication.getSystemNotifications( {  companyId : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await communication.getSystemNotifications( {  companyId : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |    
| pageNo | number | no |  |    
| pageSize | number | no |  |  



Get system notifications

*Returned Response:*




Success


[SystemNotifications](#SystemNotifications)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SystemNotifications"
}
```









---


#### getSmsProviders
Get sms providers



```javascript
// Promise
const promise = communication.getSmsProviders( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value,
 sort : value });

// Async/Await
const data = await communication.getSmsProviders( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value,
 sort : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |    
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |    
| sort | Object | no | To sort based on created_at |  



Get sms providers

*Returned Response:*




Success


[SmsProviders](#SmsProviders)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SmsProviders"
}
```









---


#### createSmsProvider
Create sms provider



```javascript
// Promise
const promise = communication.createSmsProvider( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await communication.createSmsProvider( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |  
| body | [SmsProviderReq](#SmsProviderReq) | yes | Request body |


Create sms provider

*Returned Response:*




Success


[SmsProvider](#SmsProvider)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SmsProvider"
}
```









---


#### getSmsProviderById
Get sms provider by id



```javascript
// Promise
const promise = communication.getSmsProviderById( {  companyId : value,
 applicationId : value,
 id : value });

// Async/Await
const data = await communication.getSmsProviderById( {  companyId : value,
 applicationId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |   
| id | string | yes | Sms provider id |  



Get sms provider by id

*Returned Response:*




Success


[SmsProvider](#SmsProvider)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SmsProvider"
}
```









---


#### updateSmsProviderById
Update sms provider by id



```javascript
// Promise
const promise = communication.updateSmsProviderById( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });

// Async/Await
const data = await communication.updateSmsProviderById( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |   
| id | string | yes | Sms provider id |  
| body | [SmsProviderReq](#SmsProviderReq) | yes | Request body |


Update sms provider by id

*Returned Response:*




Success


[SmsProvider](#SmsProvider)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SmsProvider"
}
```









---


#### getSmsTemplates
Get sms templates



```javascript
// Promise
const promise = communication.getSmsTemplates( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value,
 sort : value });

// Async/Await
const data = await communication.getSmsTemplates( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value,
 sort : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |    
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |    
| sort | Object | no | To sort based on created_at |  



Get sms templates

*Returned Response:*




Success


[SmsTemplates](#SmsTemplates)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SmsTemplates"
}
```









---


#### createSmsTemplate
Create sms template



```javascript
// Promise
const promise = communication.createSmsTemplate( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await communication.createSmsTemplate( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |  
| body | [SmsTemplateReq](#SmsTemplateReq) | yes | Request body |


Create sms template

*Returned Response:*




Success


[SmsTemplateRes](#SmsTemplateRes)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SmsTemplateRes"
}
```









---


#### getSmsTemplateById
Get sms template by id



```javascript
// Promise
const promise = communication.getSmsTemplateById( {  companyId : value,
 applicationId : value,
 id : value });

// Async/Await
const data = await communication.getSmsTemplateById( {  companyId : value,
 applicationId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |   
| id | string | yes | Sms template id |  



Get sms template by id

*Returned Response:*




Success


[SmsTemplate](#SmsTemplate)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SmsTemplate"
}
```









---


#### updateSmsTemplateById
Update sms template by id



```javascript
// Promise
const promise = communication.updateSmsTemplateById( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });

// Async/Await
const data = await communication.updateSmsTemplateById( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |   
| id | string | yes | Sms template id |  
| body | [SmsTemplateReq](#SmsTemplateReq) | yes | Request body |


Update sms template by id

*Returned Response:*




Success


[SmsTemplateRes](#SmsTemplateRes)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SmsTemplateRes"
}
```









---


#### deleteSmsTemplateById
Delete sms template by id



```javascript
// Promise
const promise = communication.deleteSmsTemplateById( {  companyId : value,
 applicationId : value,
 id : value });

// Async/Await
const data = await communication.deleteSmsTemplateById( {  companyId : value,
 applicationId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |   
| id | string | yes | Sms template id |  



Delete sms template by id

*Returned Response:*




Success


[SmsTemplateDeleteSuccessRes](#SmsTemplateDeleteSuccessRes)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SmsTemplateDeleteSuccessRes"
}
```









---


#### getSystemSystemTemplates
Get system sms templates



```javascript
// Promise
const promise = communication.getSystemSystemTemplates( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value,
 sort : value });

// Async/Await
const data = await communication.getSystemSystemTemplates( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value,
 sort : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company id |   
| applicationId | string | yes | Application id |    
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |    
| sort | Object | no | To sort based on created_at |  



Get system sms templates

*Returned Response:*




Success


[SystemSmsTemplates](#SystemSmsTemplates)

Success


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SystemSmsTemplates"
}
```









---





## Payment


#### getBrandPaymentGatewayConfig
Get All Brand Payment Gateway Config Secret



```javascript
// Promise
const promise = payment.getBrandPaymentGatewayConfig( {  companyId : value,
 applicationId : value });

// Async/Await
const data = await payment.getBrandPaymentGatewayConfig( {  companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id |   
| applicationId | string | yes | Application id |  



Get All Brand Payment Gateway Config Secret

*Returned Response:*




Refund Transfer Mode


[PaymentGatewayConfigResponse](#PaymentGatewayConfigResponse)

Refund Transfer Mode









---


#### saveBrandPaymentGatewayConfig
Save Config Secret For Brand Payment Gateway



```javascript
// Promise
const promise = payment.saveBrandPaymentGatewayConfig( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await payment.saveBrandPaymentGatewayConfig( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id |   
| applicationId | string | yes | Application id |  
| body | [PaymentGatewayConfigRequest](#PaymentGatewayConfigRequest) | no | Request body |


Save Config Secret For Brand Payment Gateway

*Returned Response:*




Save Config Secret For Brand Payment Gateway Success Response.


[PaymentGatewayToBeReviewed](#PaymentGatewayToBeReviewed)

Save Config Secret For Brand Payment Gateway Success Response.









---


#### updateBrandPaymentGatewayConfig
Save Config Secret For Brand Payment Gateway



```javascript
// Promise
const promise = payment.updateBrandPaymentGatewayConfig( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await payment.updateBrandPaymentGatewayConfig( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id |   
| applicationId | string | yes | Application id |  
| body | [PaymentGatewayConfigRequest](#PaymentGatewayConfigRequest) | no | Request body |


Save Config Secret For Brand Payment Gateway

*Returned Response:*




Save Config Secret For Brand Payment Gateway Success Response.


[PaymentGatewayToBeReviewed](#PaymentGatewayToBeReviewed)

Save Config Secret For Brand Payment Gateway Success Response.









---


#### getPaymentModeRoutes
Get All Valid Payment Options



```javascript
// Promise
const promise = payment.getPaymentModeRoutes( {  companyId : value,
 applicationId : value,
 refresh : value,
 requestType : value });

// Async/Await
const data = await payment.getPaymentModeRoutes( {  companyId : value,
 applicationId : value,
 refresh : value,
 requestType : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id |   
| applicationId | string | yes | Application id |   
| refresh | boolean | yes |  |   
| requestType | string | yes |  |  



Use this API to get Get All Valid Payment Options for making payment

*Returned Response:*




Success


[PaymentOptionsResponse](#PaymentOptionsResponse)

Success









---


#### getAllPayouts
Get All Payouts



```javascript
// Promise
const promise = payment.getAllPayouts( {  companyId : value,
 uniqueExternalId : value });

// Async/Await
const data = await payment.getAllPayouts( {  companyId : value,
 uniqueExternalId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id |    
| uniqueExternalId | string | no | Fetch payouts using unique external id |  



Get All Payouts

*Returned Response:*




payouts response object


[PayoutsResponse](#PayoutsResponse)

payouts response object









---


#### savePayout
Save Payout



```javascript
// Promise
const promise = payment.savePayout( {  companyId : value,
 body : value });

// Async/Await
const data = await payment.savePayout( {  companyId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id |  
| body | [PayoutRequest](#PayoutRequest) | no | Request body |


Save Payout

*Returned Response:*




save payout response object


[PayoutResponse](#PayoutResponse)

save payout response object









---


#### updatePayout
Update Payout



```javascript
// Promise
const promise = payment.updatePayout( {  companyId : value,
 uniqueTransferNo : value,
 body : value });

// Async/Await
const data = await payment.updatePayout( {  companyId : value,
 uniqueTransferNo : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id |   
| uniqueTransferNo | string | yes | Unique transfer id |  
| body | [PayoutRequest](#PayoutRequest) | no | Request body |


Update Payout

*Returned Response:*




save payout response object


[UpdatePayoutResponse](#UpdatePayoutResponse)

save payout response object









---


#### activateAndDectivatePayout
Partial Update Payout



```javascript
// Promise
const promise = payment.activateAndDectivatePayout( {  companyId : value,
 uniqueTransferNo : value,
 body : value });

// Async/Await
const data = await payment.activateAndDectivatePayout( {  companyId : value,
 uniqueTransferNo : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id |   
| uniqueTransferNo | string | yes | Unique transfer id |  
| body | [UpdatePayoutRequest](#UpdatePayoutRequest) | no | Request body |


Partial Update Payout

*Returned Response:*




save payout response object


[UpdatePayoutResponse](#UpdatePayoutResponse)

save payout response object









---


#### deletePayout
Delete Payout



```javascript
// Promise
const promise = payment.deletePayout( {  companyId : value,
 uniqueTransferNo : value });

// Async/Await
const data = await payment.deletePayout( {  companyId : value,
 uniqueTransferNo : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id |   
| uniqueTransferNo | string | yes | Unique transfer id |  



Delete Payout

*Returned Response:*




delete payout response object


[DeletePayoutResponse](#DeletePayoutResponse)

delete payout response object









---


#### getSubscriptionPaymentMethod
List Subscription Payment Method



```javascript
// Promise
const promise = payment.getSubscriptionPaymentMethod( {  companyId : value });

// Async/Await
const data = await payment.getSubscriptionPaymentMethod( {  companyId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id |  



Get all  Subscription  Payment Method

*Returned Response:*




List Subscription Payment Method Response


[SubscriptionPaymentMethodResponse](#SubscriptionPaymentMethodResponse)

List Subscription Payment Method Response









---


#### deleteSubscriptionPaymentMethod
Delete Subscription Payment Method



```javascript
// Promise
const promise = payment.deleteSubscriptionPaymentMethod( {  companyId : value,
 uniqueExternalId : value,
 paymentMethodId : value });

// Async/Await
const data = await payment.deleteSubscriptionPaymentMethod( {  companyId : value,
 uniqueExternalId : value,
 paymentMethodId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id |   
| uniqueExternalId | string | yes |  |   
| paymentMethodId | string | yes |  |  



Uses this api to Delete Subscription Payment Method

*Returned Response:*




Delete Subscription Payment Method Response.


[DeleteSubscriptionPaymentMethodResponse](#DeleteSubscriptionPaymentMethodResponse)

Delete Subscription Payment Method Response.









---


#### getSubscriptionConfig
List Subscription Config



```javascript
// Promise
const promise = payment.getSubscriptionConfig( {  companyId : value });

// Async/Await
const data = await payment.getSubscriptionConfig( {  companyId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id |  



Get all  Subscription Config details

*Returned Response:*




List Subscription Config Response


[SubscriptionConfigResponse](#SubscriptionConfigResponse)

List Subscription Config Response









---


#### saveSubscriptionSetupIntent
Save Subscription Setup Intent



```javascript
// Promise
const promise = payment.saveSubscriptionSetupIntent( {  companyId : value,
 body : value });

// Async/Await
const data = await payment.saveSubscriptionSetupIntent( {  companyId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id |  
| body | [SaveSubscriptionSetupIntentRequest](#SaveSubscriptionSetupIntentRequest) | no | Request body |


Uses this api to Save Subscription Setup Intent

*Returned Response:*




Save Subscription Setup Intent Response.


[SaveSubscriptionSetupIntentResponse](#SaveSubscriptionSetupIntentResponse)

Save Subscription Setup Intent Response.









---


#### addBeneficiaryDetails
Save bank details for cancelled/returned order



```javascript
// Promise
const promise = payment.addBeneficiaryDetails( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await payment.addBeneficiaryDetails( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id |   
| applicationId | string | yes | Application id |  
| body | [AddBeneficiaryDetailsRequest](#AddBeneficiaryDetailsRequest) | no | Request body |


Use this API to save bank details for returned/cancelled order to refund amount in his account.

*Returned Response:*




Success


[RefundAccountResponse](#RefundAccountResponse)

Success









---


#### verifyIfscCode
Ifsc Code Verification



```javascript
// Promise
const promise = payment.verifyIfscCode( {  companyId : value,
 ifscCode : value });

// Async/Await
const data = await payment.verifyIfscCode( {  companyId : value,
 ifscCode : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id |    
| ifscCode | string | no |  |  



Get True/False for correct IFSC Code for adding bank details for refund

*Returned Response:*




Bank details on correct Ifsc Code


[IfscCodeResponse](#IfscCodeResponse)

Bank details on correct Ifsc Code









---


#### getUserOrderBeneficiaries
List Order Beneficiary



```javascript
// Promise
const promise = payment.getUserOrderBeneficiaries( {  orderId : value,
 companyId : value,
 applicationId : value });

// Async/Await
const data = await payment.getUserOrderBeneficiaries( {  orderId : value,
 companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| orderId | string | yes |  |   
| companyId | number | yes | Company Id |   
| applicationId | string | yes | Application id |  



Get all active  beneficiary details added by the user for refund

*Returned Response:*




List Order Beneficiary


[OrderBeneficiaryResponse](#OrderBeneficiaryResponse)

List Order Beneficiary









---


#### getUserBeneficiaries
List User Beneficiary



```javascript
// Promise
const promise = payment.getUserBeneficiaries( {  orderId : value,
 companyId : value,
 applicationId : value });

// Async/Await
const data = await payment.getUserBeneficiaries( {  orderId : value,
 companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| orderId | string | yes |  |   
| companyId | number | yes | Company Id |   
| applicationId | string | yes | Application id |  



Get all active  beneficiary details added by the user for refund

*Returned Response:*




List User Beneficiary


[OrderBeneficiaryResponse](#OrderBeneficiaryResponse)

List User Beneficiary









---





## Order


#### shipmentStatusUpdate
Update status of Shipment



```javascript
// Promise
const promise = order.shipmentStatusUpdate( {  companyId : value,
 body : value });

// Async/Await
const data = await order.shipmentStatusUpdate( {  companyId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |  
| body | [UpdateShipmentStatusBody](#UpdateShipmentStatusBody) | yes | Request body |


Update Shipment Status

*Returned Response:*




Success


[UpdateShipmentStatusResponse](#UpdateShipmentStatusResponse)

Success









---


#### activityStatus
Get Activity Status



```javascript
// Promise
const promise = order.activityStatus( {  companyId : value,
 bagId : value });

// Async/Await
const data = await order.activityStatus( {  companyId : value,
 bagId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| bagId | string | yes | Bag Id |  



Get Activity Status

*Returned Response:*




Success


[GetActivityStatus](#GetActivityStatus)

Success









---


#### storeProcessShipmentUpdate
Update Store Process-Shipment



```javascript
// Promise
const promise = order.storeProcessShipmentUpdate( {  companyId : value,
 body : value });

// Async/Await
const data = await order.storeProcessShipmentUpdate( {  companyId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |  
| body | [UpdateProcessShipmenstRequestBody](#UpdateProcessShipmenstRequestBody) | yes | Request body |


Update Store Process-Shipment

*Returned Response:*




Success


[UpdateProcessShipmenstRequestResponse](#UpdateProcessShipmenstRequestResponse)

Success









---


#### checkRefund
Check Refund is available or not



```javascript
// Promise
const promise = order.checkRefund( {  companyId : value,
 shipmentId : value });

// Async/Await
const data = await order.checkRefund( {  companyId : value,
 shipmentId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| shipmentId | string | yes | Shipment Id |  



Check Refund is available or not

*Returned Response:*




Success


[Object](#Object)

Success









---


#### getOrdersByCompanyId
Get Orders for company based on Company Id



```javascript
// Promise
const promise = order.getOrdersByCompanyId( {  companyId : value,
 pageNo : value,
 pageSize : value,
 fromDate : value,
 toDate : value,
 q : value,
 stage : value,
 salesChannels : value,
 orderId : value,
 stores : value,
 status : value,
 shortenUrls : value,
 filterType : value });

// Async/Await
const data = await order.getOrdersByCompanyId( {  companyId : value,
 pageNo : value,
 pageSize : value,
 fromDate : value,
 toDate : value,
 q : value,
 stage : value,
 salesChannels : value,
 orderId : value,
 stores : value,
 status : value,
 shortenUrls : value,
 filterType : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |    
| pageNo | string | no | Current page number |    
| pageSize | string | no | Page limit |    
| fromDate | string | no | From Date |    
| toDate | string | no | To Date |    
| q | string | no | Keyword for Search |    
| stage | string | no | Specefic Order Stage |    
| salesChannels | string | no | Selected Sales Channel |    
| orderId | string | no | Order Id |    
| stores | string | no | Selected Stores |    
| status | string | no | Status of order |    
| shortenUrls | boolean | no | Shorten URL option |    
| filterType | string | no | Filters |  



Get Orders

*Returned Response:*




Success


[OrderListing](#OrderListing)

Success









---


#### getOrderLanesCountByCompanyId
Get Order Lanes Count for company based on Company Id



```javascript
// Promise
const promise = order.getOrderLanesCountByCompanyId( {  companyId : value,
 pageNo : value,
 pageSize : value,
 fromDate : value,
 toDate : value,
 q : value,
 stage : value,
 salesChannels : value,
 orderId : value,
 stores : value,
 status : value,
 shortenUrls : value,
 filterType : value });

// Async/Await
const data = await order.getOrderLanesCountByCompanyId( {  companyId : value,
 pageNo : value,
 pageSize : value,
 fromDate : value,
 toDate : value,
 q : value,
 stage : value,
 salesChannels : value,
 orderId : value,
 stores : value,
 status : value,
 shortenUrls : value,
 filterType : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |    
| pageNo | string | no | Current page number |    
| pageSize | string | no | Page limit |    
| fromDate | string | no | From Date |    
| toDate | string | no | To Date |    
| q | string | no | Keyword for Search |    
| stage | string | no | Specefic Order Stage |    
| salesChannels | string | no | Selected Sales Channel |    
| orderId | string | no | Order Id |    
| stores | string | no | Selected Stores |    
| status | string | no | Status of order |    
| shortenUrls | boolean | no | Shorten URL option |    
| filterType | string | no | Filters |  



Get Orders Seperate Lane Count

*Returned Response:*




Success


[OrderLanesCount](#OrderLanesCount)

Success









---


#### getOrderDetails
Get Order Details for company based on Company Id and Order Id



```javascript
// Promise
const promise = order.getOrderDetails( {  companyId : value,
 orderId : value,
 next : value,
 previous : value });

// Async/Await
const data = await order.getOrderDetails( {  companyId : value,
 orderId : value,
 next : value,
 previous : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |    
| orderId | string | no | Order Id |    
| next | string | no | Next |    
| previous | string | no | Previous |  



Get Orders

*Returned Response:*




Success


[OrderDetails](#OrderDetails)

Success









---


#### getPicklistOrdersByCompanyId
Get Orders for company based on Company Id



```javascript
// Promise
const promise = order.getPicklistOrdersByCompanyId( {  companyId : value,
 pageNo : value,
 pageSize : value,
 fromDate : value,
 toDate : value,
 q : value,
 stage : value,
 salesChannels : value,
 orderId : value,
 stores : value,
 status : value,
 shortenUrls : value,
 filterType : value });

// Async/Await
const data = await order.getPicklistOrdersByCompanyId( {  companyId : value,
 pageNo : value,
 pageSize : value,
 fromDate : value,
 toDate : value,
 q : value,
 stage : value,
 salesChannels : value,
 orderId : value,
 stores : value,
 status : value,
 shortenUrls : value,
 filterType : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |    
| pageNo | string | no | Current page number |    
| pageSize | string | no | Page limit |    
| fromDate | string | no | From Date |    
| toDate | string | no | To Date |    
| q | string | no | Keyword for Search |    
| stage | string | no | Specefic Order Stage |    
| salesChannels | string | no | Selected Sales Channel |    
| orderId | string | no | Order Id |    
| stores | string | no | Selected Stores |    
| status | string | no | Status of order |    
| shortenUrls | boolean | no | Shorten URL option |    
| filterType | string | no | Filters |  



Get Orders

*Returned Response:*




Success


[OrderPicklistListing](#OrderPicklistListing)

Success









---


#### trackShipmentPlatform
Track Shipment by shipment id, for application based on application Id



```javascript
// Promise
const promise = order.trackShipmentPlatform( {  companyId : value,
 applicationId : value,
 shipmentId : value });

// Async/Await
const data = await order.trackShipmentPlatform( {  companyId : value,
 applicationId : value,
 shipmentId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |   
| shipmentId | string | yes | Shipment Id |  



Shipment Track

*Returned Response:*




Success


[PlatformShipmentTrack](#PlatformShipmentTrack)

Success









---


#### trackOrder
Track Order by order id, for application based on application Id



```javascript
// Promise
const promise = order.trackOrder( {  companyId : value,
 applicationId : value,
 orderId : value });

// Async/Await
const data = await order.trackOrder( {  companyId : value,
 applicationId : value,
 orderId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |   
| orderId | string | yes | Order Id |  



Order Track

*Returned Response:*




Success


[PlatformOrderTrack](#PlatformOrderTrack)

Success









---


#### failedOrders
Get all failed orders application wise



```javascript
// Promise
const promise = order.failedOrders( {  companyId : value,
 applicationId : value });

// Async/Await
const data = await order.failedOrders( {  companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |  



Failed Orders

*Returned Response:*




Success


[FailedOrders](#FailedOrders)

Success









---


#### reprocessOrder
Reprocess order by order id



```javascript
// Promise
const promise = order.reprocessOrder( {  companyId : value,
 applicationId : value,
 orderId : value });

// Async/Await
const data = await order.reprocessOrder( {  companyId : value,
 applicationId : value,
 orderId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |   
| orderId | string | yes | Order Id |  



Order Reprocess

*Returned Response:*




Success


[UpdateOrderReprocessResponse](#UpdateOrderReprocessResponse)

Success









---


#### updateShipment
Use this API to update the shipment using its shipment ID.



```javascript
// Promise
const promise = order.updateShipment( {  companyId : value,
 applicationId : value,
 shipmentId : value,
 body : value });

// Async/Await
const data = await order.updateShipment( {  companyId : value,
 applicationId : value,
 shipmentId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |   
| shipmentId | string | yes | ID of the shipment. An order may contain multiple items and may get divided into one or more shipment, each having its own ID. |  
| body | [ShipmentUpdateRequest](#ShipmentUpdateRequest) | yes | Request body |


Update the shipment

*Returned Response:*




Success. Check the example shown below or refer `ShipmentUpdateRequest` for more details.


[ShipmentUpdateResponse](#ShipmentUpdateResponse)

Success. Check the example shown below or refer `ShipmentUpdateRequest` for more details.









---


#### getPlatformShipmentReasons
Use this API to retrieve the issues that led to the cancellation of bags within a shipment.



```javascript
// Promise
const promise = order.getPlatformShipmentReasons( {  companyId : value,
 applicationId : value,
 action : value });

// Async/Await
const data = await order.getPlatformShipmentReasons( {  companyId : value,
 applicationId : value,
 action : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |   
| action | string | yes | Action |  



Get reasons behind full or partial cancellation of a shipment

*Returned Response:*




Success. Check the example shown below or refer `ShipmentReasonsResponse` for more details.


[ShipmentReasonsResponse](#ShipmentReasonsResponse)

Success. Check the example shown below or refer `ShipmentReasonsResponse` for more details.









---


#### getShipmentTrackDetails
Use this API to track a shipment using its shipment ID.



```javascript
// Promise
const promise = order.getShipmentTrackDetails( {  companyId : value,
 applicationId : value,
 orderId : value,
 shipmentId : value });

// Async/Await
const data = await order.getShipmentTrackDetails( {  companyId : value,
 applicationId : value,
 orderId : value,
 shipmentId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |   
| orderId | string | yes | ID of the order. |   
| shipmentId | string | yes | ID of the shipment. An order may contain multiple items and may get divided into one or more shipment, each having its own ID. |  



Track shipment

*Returned Response:*




Success. Check the example shown below or refer `ShipmentTrackResponse` for more details.


[ShipmentTrackResponse](#ShipmentTrackResponse)

Success. Check the example shown below or refer `ShipmentTrackResponse` for more details.









---


#### getShipmentAddress
Use this API to get address of a shipment using its shipment ID and Address Category.



```javascript
// Promise
const promise = order.getShipmentAddress( {  companyId : value,
 shipmentId : value,
 addressCategory : value });

// Async/Await
const data = await order.getShipmentAddress( {  companyId : value,
 shipmentId : value,
 addressCategory : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| shipmentId | string | yes | ID of the shipment. An order may contain multiple items and may get divided into one or more shipment, each having its own ID. |   
| addressCategory | string | yes | Category of the address it falls into(billing or delivery). |  



Get Shipment Address

*Returned Response:*




Success. Check the example shown below or refer `GetShipmentAddressResponse` for more details.


[GetShipmentAddressResponse](#GetShipmentAddressResponse)

Success. Check the example shown below or refer `GetShipmentAddressResponse` for more details.









---


#### updateShipmentAddress
Use this API to update address of a shipment using its shipment ID and Address Category.



```javascript
// Promise
const promise = order.updateShipmentAddress( {  companyId : value,
 shipmentId : value,
 addressCategory : value,
 body : value });

// Async/Await
const data = await order.updateShipmentAddress( {  companyId : value,
 shipmentId : value,
 addressCategory : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| shipmentId | string | yes | ID of the shipment. An order may contain multiple items and may get divided into one or more shipment, each having its own ID. |   
| addressCategory | string | yes | Category of the address it falls into(billing or delivery). |  
| body | [UpdateShipmentAddressRequest](#UpdateShipmentAddressRequest) | yes | Request body |


Update Shipment Address

*Returned Response:*




Success. Check the example shown below or refer `UpdateShipmentAddressResponse` for more details.


[UpdateShipmentAddressResponse](#UpdateShipmentAddressResponse)

Success. Check the example shown below or refer `UpdateShipmentAddressResponse` for more details.









---


#### getPing
Get Ping



```javascript
// Promise
const promise = order.getPing( {  companyId : value });

// Async/Await
const data = await order.getPing( {  companyId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |  



Get Ping

*Returned Response:*




Success


[GetPingResponse](#GetPingResponse)

Success









---


#### voiceCallback
Get Voice Callback



```javascript
// Promise
const promise = order.voiceCallback( {  companyId : value });

// Async/Await
const data = await order.voiceCallback( {  companyId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |  



Voice Callback

*Returned Response:*




Success


[GetVoiceCallbackResponse](#GetVoiceCallbackResponse)

Success









---


#### voiceClickToCall
Get Voice Click to Call



```javascript
// Promise
const promise = order.voiceClickToCall( {  companyId : value,
 caller : value,
 receiver : value });

// Async/Await
const data = await order.voiceClickToCall( {  companyId : value,
 caller : value,
 receiver : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| caller | string | yes | Caller contact number |   
| receiver | string | yes | Receiver contact number |  



Voice Click to Call

*Returned Response:*




Success


[GetClickToCallResponse](#GetClickToCallResponse)

Success









---





## Catalog


#### deleteSearchKeywords
Delete a Search Keywords



```javascript
// Promise
const promise = catalog.deleteSearchKeywords( {  companyId : value,
 applicationId : value,
 id : value });

// Async/Await
const data = await catalog.deleteSearchKeywords( {  companyId : value,
 applicationId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| applicationId | string | yes | A `application_id` is a unique identifier for a particular sale channel. |   
| id | string | yes | A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete. |  



Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully

*Returned Response:*




Status object. Tells whether the operation was successful. See example below or refer `DeleteResponse`


[DeleteResponse](#DeleteResponse)

Status object. Tells whether the operation was successful. See example below or refer `DeleteResponse`









---


#### updateSearchKeywords
Update Search Keyword



```javascript
// Promise
const promise = catalog.updateSearchKeywords( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });

// Async/Await
const data = await catalog.updateSearchKeywords( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| applicationId | string | yes | A `application_id` is a unique identifier for a particular sale channel. |   
| id | string | yes | A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete. |  
| body | [CreateSearchKeyword](#CreateSearchKeyword) | yes | Request body |


Update Search Keyword by its id. On successful request, returns the updated collection

*Returned Response:*




The Collection object. See example below or refer `GetSearchWordsDataSchema` for details.


[GetSearchWordsData](#GetSearchWordsData)

The Collection object. See example below or refer `GetSearchWordsDataSchema` for details.









---


#### getSearchKeywords
Get a Search Keywords Details



```javascript
// Promise
const promise = catalog.getSearchKeywords( {  companyId : value,
 applicationId : value,
 id : value });

// Async/Await
const data = await catalog.getSearchKeywords( {  companyId : value,
 applicationId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| applicationId | string | yes | A `application_id` is a unique identifier for a particular sale channel. |   
| id | string | yes | A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to retrieve. |  



Get the details of a words by its `id`. If successful, returns a Collection resource in the response body specified in `GetSearchWordsDetailResponseSchema`

*Returned Response:*




The Collection object. See example below or refer `GetSearchWordsDetailResponseSchema` for details


[GetSearchWordsDetailResponse](#GetSearchWordsDetailResponse)

The Collection object. See example below or refer `GetSearchWordsDetailResponseSchema` for details









---


#### getAllSearchKeyword
List all Search Custom Keyword Listing



```javascript
// Promise
const promise = catalog.getAllSearchKeyword( {  companyId : value,
 applicationId : value });

// Async/Await
const data = await catalog.getAllSearchKeyword( {  companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| applicationId | string | yes | A `application_id` is a unique identifier for a particular sale channel. |  



Custom Search Keyword allows you to map conditions with keywords to give you the ultimate results

*Returned Response:*




List of custom search keywords. See example below or refer `GetSearchWordsResponseSchema` for details


[GetSearchWordsResponse](#GetSearchWordsResponse)

List of custom search keywords. See example below or refer `GetSearchWordsResponseSchema` for details









---


#### createCustomKeyword
Add a Custom Search Keywords



```javascript
// Promise
const promise = catalog.createCustomKeyword( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await catalog.createCustomKeyword( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| applicationId | string | yes | A `application_id` is a unique identifier for a particular sale channel. |  
| body | [CreateSearchKeyword](#CreateSearchKeyword) | yes | Request body |


Create a Custom Search Keywords. See `CreateSearchKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateSearchKeywordSchema`

*Returned Response:*




Get keyword object with id that is added. See example below or refer `GetSearchWordsDataSchema` for details


[GetSearchWordsData](#GetSearchWordsData)

Get keyword object with id that is added. See example below or refer `GetSearchWordsDataSchema` for details









---


#### deleteAutocompleteKeyword
Delete a Autocomplete Keywords



```javascript
// Promise
const promise = catalog.deleteAutocompleteKeyword( {  companyId : value,
 applicationId : value,
 id : value });

// Async/Await
const data = await catalog.deleteAutocompleteKeyword( {  companyId : value,
 applicationId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| applicationId | string | yes | A `application_id` is a unique identifier for a particular sale channel. |   
| id | string | yes | A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete. |  



Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully

*Returned Response:*




Status object. Tells whether the operation was successful. See example below or refer `DeleteResponse`


[DeleteResponse](#DeleteResponse)

Status object. Tells whether the operation was successful. See example below or refer `DeleteResponse`









---


#### updateAutocompleteKeyword
Create & Update Autocomplete Keyword



```javascript
// Promise
const promise = catalog.updateAutocompleteKeyword( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });

// Async/Await
const data = await catalog.updateAutocompleteKeyword( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| applicationId | string | yes | A `application_id` is a unique identifier for a particular sale channel. |   
| id | string | yes | A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete. |  
| body | [CreateAutocompleteKeyword](#CreateAutocompleteKeyword) | yes | Request body |


Update a mapping by it's id. On successful request, returns the updated Keyword mapping

*Returned Response:*




The Mapping object. See example below or refer `GetAutocompleteWordsResponseSchema` for details.


[GetAutocompleteWordsResponse](#GetAutocompleteWordsResponse)

The Mapping object. See example below or refer `GetAutocompleteWordsResponseSchema` for details.









---


#### getAutocompleteKeywordDetail
Get a Autocomplete Keywords Details



```javascript
// Promise
const promise = catalog.getAutocompleteKeywordDetail( {  companyId : value,
 applicationId : value,
 id : value });

// Async/Await
const data = await catalog.getAutocompleteKeywordDetail( {  companyId : value,
 applicationId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| applicationId | string | yes | A `application_id` is a unique identifier for a particular sale channel. |   
| id | string | yes | A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to retrieve. |  



Get the details of a words by its `id`. If successful, returns a keywords resource in the response body specified in `GetAutocompleteWordsResponseSchema`

*Returned Response:*




The mapping object. See example below or refer `GetAutocompleteWordsResponseSchema` for details


[GetAutocompleteWordsResponse](#GetAutocompleteWordsResponse)

The mapping object. See example below or refer `GetAutocompleteWordsResponseSchema` for details









---


#### getAutocompleteConfig
List all Autocomplete Keyword Listing



```javascript
// Promise
const promise = catalog.getAutocompleteConfig( {  companyId : value,
 applicationId : value });

// Async/Await
const data = await catalog.getAutocompleteConfig( {  companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| applicationId | string | yes | A `application_id` is a unique identifier for a particular sale channel. |  



Custom Autocomplete Keyword allows you to map conditions with keywords to give you the ultimate results

*Returned Response:*




List of custom autocomplete keywords. See example below or refer `GetAutocompleteWordsResponseSchema` for details


[GetAutocompleteWordsResponse](#GetAutocompleteWordsResponse)

List of custom autocomplete keywords. See example below or refer `GetAutocompleteWordsResponseSchema` for details









---


#### createCustomAutocompleteRule
Add a Custom Autocomplete Keywords



```javascript
// Promise
const promise = catalog.createCustomAutocompleteRule( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await catalog.createCustomAutocompleteRule( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| applicationId | string | yes | A `application_id` is a unique identifier for a particular sale channel. |  
| body | [CreateAutocompleteKeyword](#CreateAutocompleteKeyword) | yes | Request body |


Create a Custom Autocomplete Keywords. See `CreateAutocompleteKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateAutocompleteKeywordSchema`

*Returned Response:*




List of all the collections including the one you added. See example below or refer `CreateAutocompleteWordsResponseSchema` for details


[CreateAutocompleteWordsResponse](#CreateAutocompleteWordsResponse)

List of all the collections including the one you added. See example below or refer `CreateAutocompleteWordsResponseSchema` for details









---


#### getProductBundle
List all Product Bundles



```javascript
// Promise
const promise = catalog.getProductBundle( {  companyId : value,
 q : value });

// Async/Await
const data = await catalog.getProductBundle( {  companyId : value,
 q : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |    
| q | string | no | A search string that is searched with product bundle name. |  



Get all product bundles for a particular company

*Returned Response:*




List of bundle configured for a company. See example below or refer `GetProductBundleListingResponse` for details


[GetProductBundleListingResponse](#GetProductBundleListingResponse)

List of bundle configured for a company. See example below or refer `GetProductBundleListingResponse` for details









---


#### createProductBundle
Create Product Bundle



```javascript
// Promise
const promise = catalog.createProductBundle( {  companyId : value,
 body : value });

// Async/Await
const data = await catalog.createProductBundle( {  companyId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |  
| body | [ProductBundleRequest](#ProductBundleRequest) | yes | Request body |


Create Product Bundle. See `ProductBundleRequest` for the request body parameter need to create a product bundle. On successful request, returns in `ProductBundleRequest` with id

*Returned Response:*




Get bundle with id that is added. See example below or refer `GetProductBundleCreateResponse` for details


[GetProductBundleCreateResponse](#GetProductBundleCreateResponse)

Get bundle with id that is added. See example below or refer `GetProductBundleCreateResponse` for details









---


#### updateProductBundle
Update a Product Bundle



```javascript
// Promise
const promise = catalog.updateProductBundle( {  companyId : value,
 id : value,
 body : value });

// Async/Await
const data = await catalog.updateProductBundle( {  companyId : value,
 id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| id | string | yes | A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete. |  
| body | [ProductBundleUpdateRequest](#ProductBundleUpdateRequest) | yes | Request body |


Update a Product Bundle by its id. On successful request, returns the updated product bundle

*Returned Response:*




The Collection object. See example below or refer `GetProductBundleCreateResponse` for details.


[GetProductBundleCreateResponse](#GetProductBundleCreateResponse)

The Collection object. See example below or refer `GetProductBundleCreateResponse` for details.









---


#### getProductBundleDetail
Get a particular Product Bundle details



```javascript
// Promise
const promise = catalog.getProductBundleDetail( {  companyId : value,
 id : value });

// Async/Await
const data = await catalog.getProductBundleDetail( {  companyId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| id | string | yes | A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to retrieve. |  



Get a particular Bundle details by its `id`. If successful, returns a Product bundle resource in the response body specified in `GetProductBundleResponse`

*Returned Response:*




The Collection object. See example below or refer `GetProductBundleResponse` for details


[GetProductBundleResponse](#GetProductBundleResponse)

The Collection object. See example below or refer `GetProductBundleResponse` for details









---


#### getSizeGuides
Get list of size guides



```javascript
// Promise
const promise = catalog.getSizeGuides( {  companyId : value,
 active : value,
 q : value,
 tag : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await catalog.getSizeGuides( {  companyId : value,
 active : value,
 q : value,
 tag : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Id of the company for which the size guides are to be fetched. |    
| active | boolean | no | filter size guide on basis of active, in-active |    
| q | string | no | Query that is to be searched. |    
| tag | string | no | to filter size guide on basis of tag. |    
| pageNo | number | no | The page number to navigate through the given set of results |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 10. |  



This API allows to view all the size guides associated to the seller.

*Returned Response:*




Size guide object. See example below or refer `ListSizeGuide` for details


[ListSizeGuide](#ListSizeGuide)

Size guide object. See example below or refer `ListSizeGuide` for details









---


#### createSizeGuide
Create a size guide.



```javascript
// Promise
const promise = catalog.createSizeGuide( {  companyId : value,
 body : value });

// Async/Await
const data = await catalog.createSizeGuide( {  companyId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Id of the company inside which the size guide is to be created. |  
| body | [ValidateSizeGuide](#ValidateSizeGuide) | yes | Request body |


This API allows to create a size guide associated to a brand.

*Returned Response:*




Returns a success response


[SuccessResponse](#SuccessResponse)

Returns a success response









---


#### updateSizeGuide
Edit a size guide.



```javascript
// Promise
const promise = catalog.updateSizeGuide( {  companyId : value,
 id : value,
 body : value });

// Async/Await
const data = await catalog.updateSizeGuide( {  companyId : value,
 id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Id of the company. |   
| id | string | yes | Mongo id of the size guide to be edited |  
| body | [ValidateSizeGuide](#ValidateSizeGuide) | yes | Request body |


This API allows to edit a size guide.

*Returned Response:*




Returns a success response


[SuccessResponse](#SuccessResponse)

Returns a success response









---


#### getSizeGuide
Get a single size guide.



```javascript
// Promise
const promise = catalog.getSizeGuide( {  companyId : value,
 id : value });

// Async/Await
const data = await catalog.getSizeGuide( {  companyId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Id of the company associated to size guide. |   
| id | string | yes | Id of the size guide to be viewed. |  



This API helps to get data associated to a size guide.

*Returned Response:*




Brand object. See example below or refer `SizeGuideResponseSchema` for details


[SizeGuideResponse](#SizeGuideResponse)

Brand object. See example below or refer `SizeGuideResponseSchema` for details









---


#### getCatalogConfiguration
Get configuration meta  details for catalog for admin panel



```javascript
// Promise
const promise = catalog.getCatalogConfiguration( {  companyId : value,
 applicationId : value });

// Async/Await
const data = await catalog.getCatalogConfiguration( {  companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| applicationId | string | yes | A `application_id` is a unique identifier for a particular sale channel. |  



configuration meta  details for catalog.

*Returned Response:*




configuration details for catalog. See example below or refer `GetCatalogConfigurationMetaDataSchema` for details


[GetCatalogConfigurationMetaData](#GetCatalogConfigurationMetaData)

configuration details for catalog. See example below or refer `GetCatalogConfigurationMetaDataSchema` for details









---


#### getConfigurations
Get configured details for catalog



```javascript
// Promise
const promise = catalog.getConfigurations( {  companyId : value,
 applicationId : value });

// Async/Await
const data = await catalog.getConfigurations( {  companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| applicationId | string | yes | A `application_id` is a unique identifier for a particular sale channel. |  



configured details for catalog.

*Returned Response:*




Get application level configured catalog details. See example below or refer `GetAppCatalogConfigurationSchema` for details


[GetAppCatalogConfiguration](#GetAppCatalogConfiguration)

Get application level configured catalog details. See example below or refer `GetAppCatalogConfigurationSchema` for details









---


#### createConfigurationProductListing
Add configuration for products & listings



```javascript
// Promise
const promise = catalog.createConfigurationProductListing( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await catalog.createConfigurationProductListing( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| applicationId | string | yes | A `application_id` is a unique identifier for a particular sale channel. |  
| body | [AppConfiguration](#AppConfiguration) | yes | Request body |


Add configuration for products & listing.

*Returned Response:*




success flag will tell whether the operation was successful.


[GetAppCatalogConfiguration](#GetAppCatalogConfiguration)

success flag will tell whether the operation was successful.









---


#### getConfigurationByType
Get configured details for catalog



```javascript
// Promise
const promise = catalog.getConfigurationByType( {  companyId : value,
 applicationId : value,
 type : value });

// Async/Await
const data = await catalog.getConfigurationByType( {  companyId : value,
 applicationId : value,
 type : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| applicationId | string | yes | A `application_id` is a unique identifier for a particular sale channel. |   
| type | string | yes | type can be brands, categories etc. |  



configured details for catalog.

*Returned Response:*




Get application level configured catalog details. See example below or refer `GetAppCatalogEntityConfigurationSchema` for details


[GetAppCatalogEntityConfiguration](#GetAppCatalogEntityConfiguration)

Get application level configured catalog details. See example below or refer `GetAppCatalogEntityConfigurationSchema` for details









---


#### createConfigurationByType
Add configuration for categories and brands



```javascript
// Promise
const promise = catalog.createConfigurationByType( {  companyId : value,
 applicationId : value,
 type : value,
 body : value });

// Async/Await
const data = await catalog.createConfigurationByType( {  companyId : value,
 applicationId : value,
 type : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| applicationId | string | yes | A `application_id` is a unique identifier for a particular sale channel. |   
| type | string | yes | type can be brands, categories etc. |  
| body | [AppConfiguration](#AppConfiguration) | yes | Request body |


Add configuration for categories & brands.

*Returned Response:*




success flag will tell whether the operation was successful.


[GetAppCatalogConfiguration](#GetAppCatalogConfiguration)

success flag will tell whether the operation was successful.









---


#### getQueryFilters
Get query filters to configure a collection



```javascript
// Promise
const promise = catalog.getQueryFilters( {  companyId : value,
 applicationId : value });

// Async/Await
const data = await catalog.getQueryFilters( {  companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| applicationId | string | yes | A `application_id` is a unique identifier for a particular sale channel. |  



Get query filters to configure a collection

*Returned Response:*




The attached items of an collection. See example below or refer `GetCollectionQueryOptionResponse` for details


[GetCollectionQueryOptionResponse](#GetCollectionQueryOptionResponse)

The attached items of an collection. See example below or refer `GetCollectionQueryOptionResponse` for details









---


#### getAllCollections
List all the collections



```javascript
// Promise
const promise = catalog.getAllCollections( {  companyId : value,
 applicationId : value });

// Async/Await
const data = await catalog.getAllCollections( {  companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| applicationId | string | yes | A `application_id` is a unique identifier for a particular sale channel. |  



A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections as specified in `CollectionListingSchema`

*Returned Response:*




List of collections. See example below or refer `GetCollectionListingResponse` for details


[GetCollectionListingResponse](#GetCollectionListingResponse)

List of collections. See example below or refer `GetCollectionListingResponse` for details









---


#### createCollection
Add a Collection



```javascript
// Promise
const promise = catalog.createCollection( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await catalog.createCollection( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| applicationId | string | yes | A `application_id` is a unique identifier for a particular sale channel. |  
| body | [CreateCollection](#CreateCollection) | yes | Request body |


Create a collection. See `CreateCollectionRequestSchema` for the list of attributes needed to create a collection and collections/query-options for the available options to create a collection. On successful request, returns a paginated list of collections specified in `CollectionCreateResponse`

*Returned Response:*




List of all the collections including the one you added. See example below or refer `CollectionCreateResponse` for details


[CollectionCreateResponse](#CollectionCreateResponse)

List of all the collections including the one you added. See example below or refer `CollectionCreateResponse` for details









---


#### getCollectionDetail
Get a particular collection



```javascript
// Promise
const promise = catalog.getCollectionDetail( {  companyId : value,
 applicationId : value,
 slug : value });

// Async/Await
const data = await catalog.getCollectionDetail( {  companyId : value,
 applicationId : value,
 slug : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| applicationId | string | yes | A `application_id` is a unique identifier for a particular sale channel. |   
| slug | string | yes | A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection which you want to retrieve. |  



Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionDetailResponse`

*Returned Response:*




The Collection object. See example below or refer `CollectionDetailResponse` for details


[CollectionDetailResponse](#CollectionDetailResponse)

The Collection object. See example below or refer `CollectionDetailResponse` for details









---


#### deleteCollection
Delete a Collection



```javascript
// Promise
const promise = catalog.deleteCollection( {  companyId : value,
 applicationId : value,
 id : value });

// Async/Await
const data = await catalog.deleteCollection( {  companyId : value,
 applicationId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| applicationId | string | yes | A `application_id` is a unique identifier for a particular sale channel. |   
| id | string | yes | A `id` is a unique identifier of a collection. |  



Delete a collection by it's id. Returns an object that tells whether the collection was deleted successfully

*Returned Response:*




Status object. Tells whether the operation was successful. See example below or refer `DeleteResponse`


[DeleteResponse](#DeleteResponse)

Status object. Tells whether the operation was successful. See example below or refer `DeleteResponse`









---


#### updateCollection
Update a collection



```javascript
// Promise
const promise = catalog.updateCollection( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });

// Async/Await
const data = await catalog.updateCollection( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| applicationId | string | yes | A `application_id` is a unique identifier for a particular sale channel. |   
| id | string | yes | A `id` is a unique identifier of a collection. |  
| body | [UpdateCollection](#UpdateCollection) | yes | Request body |


Update a collection by it's id. On successful request, returns the updated collection

*Returned Response:*




The Collection object. See example below or refer `UpdateCollectionSchema` for details.


[UpdateCollection](#UpdateCollection)

The Collection object. See example below or refer `UpdateCollectionSchema` for details.









---


#### getCollectionItems
Get the items for a collection



```javascript
// Promise
const promise = catalog.getCollectionItems( {  companyId : value,
 applicationId : value,
 id : value,
 sortOn : value,
 pageId : value,
 pageSize : value });

// Async/Await
const data = await catalog.getCollectionItems( {  companyId : value,
 applicationId : value,
 id : value,
 sortOn : value,
 pageId : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| applicationId | string | yes | A `application_id` is a unique identifier for a particular sale channel. |   
| id | string | yes | A `id` is a unique identifier of a collection. |    
| sortOn | string | no | Each response will contain sort_on param, which should be sent back to make pagination work. |    
| pageId | string | no | Each response will contain next_id param, which should be sent back to make pagination work. |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 12. |  



Get items from a collection specified by its `id`.

*Returned Response:*




The attached items of an collection. See example below or refer `GetCollectionItemsResponseSchema` for details


[GetCollectionItemsResponse](#GetCollectionItemsResponse)

The attached items of an collection. See example below or refer `GetCollectionItemsResponseSchema` for details









---


#### addCollectionItems
Add items to a collection



```javascript
// Promise
const promise = catalog.addCollectionItems( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });

// Async/Await
const data = await catalog.addCollectionItems( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| applicationId | string | yes | A `application_id` is a unique identifier for a particular sale channel. |   
| id | string | yes | A `id` is a unique identifier of a collection. |  
| body | [CollectionItemRequest](#CollectionItemRequest) | yes | Request body |


Adds items to a collection specified by its `id`. See `CollectionItemRequest` for the list of attributes needed to add items to an collection.

*Returned Response:*




Status object. Tells whether the operation was successful.


[UpdatedResponse](#UpdatedResponse)

Status object. Tells whether the operation was successful.









---


#### getCatalogInsights
Analytics data of catalog and inventory.



```javascript
// Promise
const promise = catalog.getCatalogInsights( {  companyId : value,
 applicationId : value,
 brand : value });

// Async/Await
const data = await catalog.getCatalogInsights( {  companyId : value,
 applicationId : value,
 brand : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| applicationId | string | yes | A `application_id` is a unique identifier for a particular sale channel. |    
| brand | string | no | Brand slug |  



Catalog Insights api returns the count of catalog related data like products, brands, departments and categories that have been made live as per configuration of the app.

*Returned Response:*




Response Data


[CatalogInsightResponse](#CatalogInsightResponse)

Response Data









---


#### getSellerInsights
Analytics data of catalog and inventory that are being cross-selled.



```javascript
// Promise
const promise = catalog.getSellerInsights( {  companyId : value,
 sellerAppId : value });

// Async/Await
const data = await catalog.getSellerInsights( {  companyId : value,
 sellerAppId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| sellerAppId | string | yes | Id of the seller application which is serving the invetory/catalog of the company |  



Analytics data of catalog and inventory that are being cross-selled.

*Returned Response:*




Response Data


[CrossSellingResponse](#CrossSellingResponse)

Response Data









---


#### createMarketplaceOptin
Create/Update opt-in infomation.



```javascript
// Promise
const promise = catalog.createMarketplaceOptin( {  companyId : value,
 marketplace : value,
 body : value });

// Async/Await
const data = await catalog.createMarketplaceOptin( {  companyId : value,
 marketplace : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | The company id for which the detail needs to be retrieved. |   
| marketplace | string | yes | The marketplace for which the detail needs to be retrieved. |  
| body | [OptInPostRequest](#OptInPostRequest) | yes | Request body |


Use this API to create/update opt-in information for given platform. If successful, returns data in the response body as specified in `OptInPostResponseSchema`

*Returned Response:*




See example below or refer `UpdatedResponse` for details.


[UpdatedResponse](#UpdatedResponse)

See example below or refer `UpdatedResponse` for details.









---


#### getMarketplaceOptinDetail
Get opt-in infomation.



```javascript
// Promise
const promise = catalog.getMarketplaceOptinDetail( {  companyId : value });

// Async/Await
const data = await catalog.getMarketplaceOptinDetail( {  companyId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes |  |  



Use this API to fetch opt-in information for all the platforms. If successful, returns a logs in the response body as specified in `GetOptInPlatformSchema`

*Returned Response:*




See example below or refer `GetOptInPlatformSchema` for details.


[GetOptInPlatform](#GetOptInPlatform)

See example below or refer `GetOptInPlatformSchema` for details.









---


#### getCompanyDetail
Get the Company details.



```javascript
// Promise
const promise = catalog.getCompanyDetail( {  companyId : value });

// Async/Await
const data = await catalog.getCompanyDetail( {  companyId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | The company id for which the detail needs to be retrieved. |  



Get the details of the company associated with the given company_id passed.

*Returned Response:*




See example below or refer `OptinCompanyDetailSchema` for details


[OptinCompanyDetail](#OptinCompanyDetail)

See example below or refer `OptinCompanyDetailSchema` for details









---


#### getCompanyBrandDetail
Get the Company Brand details of Optin.



```javascript
// Promise
const promise = catalog.getCompanyBrandDetail( {  companyId : value,
 isActive : value,
 q : value,
 pageNo : value,
 pageSize : value,
 marketplace : value });

// Async/Await
const data = await catalog.getCompanyBrandDetail( {  companyId : value,
 isActive : value,
 q : value,
 pageNo : value,
 pageSize : value,
 marketplace : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | The company id for which the detail needs to be retrieved. |    
| isActive | boolean | no | The is_active status for the optin id. |    
| q | boolean | no | The search value to filter the list. |    
| pageNo | number | no | The number of page for the company id. |    
| pageSize | number | no | Number of records that can be seen on the page for the company id. |    
| marketplace | string | no | The marketplace platform associated with the company id. |  



Get the details of the Brands associated with the given company_id passed.

*Returned Response:*




See example below or refer `OptinCompanyBrandDetailsView` for details


[OptinCompanyBrandDetailsView](#OptinCompanyBrandDetailsView)

See example below or refer `OptinCompanyBrandDetailsView` for details









---


#### getCompanyMetrics
Get the Company metrics



```javascript
// Promise
const promise = catalog.getCompanyMetrics( {  companyId : value });

// Async/Await
const data = await catalog.getCompanyMetrics( {  companyId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | The company id for which the detail needs to be retrieved. |  



Get the Company metrics associated with the company ID passed.

*Returned Response:*




See example below or refer `OptinCompanyMetrics` for details


[OptinCompanyMetrics](#OptinCompanyMetrics)

See example below or refer `OptinCompanyMetrics` for details









---


#### getStoreDetail
Get the Store details.



```javascript
// Promise
const promise = catalog.getStoreDetail( {  companyId : value,
 q : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await catalog.getStoreDetail( {  companyId : value,
 q : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | The company id for which the detail needs to be retrieved. |    
| q | string | no | The search related the store for the company id. |    
| pageNo | number | no | The number of page for the company id. |    
| pageSize | number | no | Number of records that can be seen on the page for the company id. |  



Get the details of the store associated with the company ID passed.

*Returned Response:*




See example below or refer `OptinStoreDetailsSchema` for details


[OptinStoreDetails](#OptinStoreDetails)

See example below or refer `OptinStoreDetailsSchema` for details









---


#### getGenderAttribute
Get gender attribute details



```javascript
// Promise
const promise = catalog.getGenderAttribute( {  companyId : value,
 attributeSlug : value });

// Async/Await
const data = await catalog.getGenderAttribute( {  companyId : value,
 attributeSlug : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | company for which you want to view the genders |   
| attributeSlug | string | yes | slug of the attribute for which you want to view the genders |  



This API allows to view the gender attribute details.

*Returned Response:*




Size guide object. See example below or refer `GenderDetailSchema` for details


[GenderDetail](#GenderDetail)

Size guide object. See example below or refer `GenderDetailSchema` for details









---


#### listProductTemplateCategories
List Department specifiec product categories



```javascript
// Promise
const promise = catalog.listProductTemplateCategories( {  companyId : value,
 departments : value,
 itemType : value });

// Async/Await
const data = await catalog.listProductTemplateCategories( {  companyId : value,
 departments : value,
 itemType : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| departments | string | yes | A `department` is name of a departments whose category needs to be listed. Can specify multiple departments. |   
| itemType | string | yes | An `item_type` is the type of item, it can be `set`, `standard`, `digital`, etc. |  



Allows you to list all product categories values for the departments specified

*Returned Response:*




List of all categories attached to departments specified. See example below or refer `ProdcutTemplateCategoriesResponse` for details


[ProdcutTemplateCategoriesResponse](#ProdcutTemplateCategoriesResponse)

List of all categories attached to departments specified. See example below or refer `ProdcutTemplateCategoriesResponse` for details









---


#### listDepartmentsData
List all Departments



```javascript
// Promise
const promise = catalog.listDepartmentsData( {  companyId : value,
 pageNo : value,
 pageSize : value,
 name : value,
 search : value,
 isActive : value });

// Async/Await
const data = await catalog.listDepartmentsData( {  companyId : value,
 pageNo : value,
 pageSize : value,
 name : value,
 search : value,
 isActive : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |    
| pageNo | number | no | The page number to navigate through the given set of results |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 10. |    
| name | string | no | Can search departments by passing name. |    
| search | string | no | Can search departments by passing name of the department in search parameter. |    
| isActive | boolean | no | Can query for departments based on whether they are active or inactive. |  



Allows you to list all departments, also can search using name and filter active and incative departments, and item type

*Returned Response:*




List of departments data. See example below or refer `DepartmentsResponse` for details


[DepartmentsResponse](#DepartmentsResponse)

List of departments data. See example below or refer `DepartmentsResponse` for details









---


#### getDepartmentData
Get specific departments details by passing in unique id of the department



```javascript
// Promise
const promise = catalog.getDepartmentData( {  companyId : value,
 uid : value });

// Async/Await
const data = await catalog.getDepartmentData( {  companyId : value,
 uid : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| uid | string | yes | A `uid` is a unique identifier of a department. |  



Allows you to get department data, by uid

*Returned Response:*




Departments Data. See example below or refer `DepartmentsResponse` for details


[DepartmentsResponse](#DepartmentsResponse)

Departments Data. See example below or refer `DepartmentsResponse` for details









---


#### listProductTemplate
List all Templates



```javascript
// Promise
const promise = catalog.listProductTemplate( {  companyId : value,
 departments : value });

// Async/Await
const data = await catalog.listProductTemplate( {  companyId : value,
 departments : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| departments | string | yes | A `departments` is the name of a particular department. |  



Allows you to list all product templates, also can filter by department

*Returned Response:*




List of product templates. See example below or refer `TemplatesResponse` for details


[TemplatesResponse](#TemplatesResponse)

List of product templates. See example below or refer `TemplatesResponse` for details









---


#### validateProductTemplate
Validate Product Template Schema



```javascript
// Promise
const promise = catalog.validateProductTemplate( {  companyId : value,
 slug : value });

// Async/Await
const data = await catalog.validateProductTemplate( {  companyId : value,
 slug : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| slug | string | yes | A `slug` is a unique identifier for a particular template. |  



Allows you to list all product templates validation values for all the fields present in the database

*Returned Response:*




List of fields and validation values fro each. See example below or refer `TemplatesValidationResponse` for details


[TemplatesValidationResponse](#TemplatesValidationResponse)

List of fields and validation values fro each. See example below or refer `TemplatesValidationResponse` for details









---


#### downloadProductTemplateViews
Download Product Template View



```javascript
// Promise
const promise = catalog.downloadProductTemplateViews( {  companyId : value,
 slug : value });

// Async/Await
const data = await catalog.downloadProductTemplateViews( {  companyId : value,
 slug : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| slug | string | yes | A `slug` is a unique identifier for a particular template. |  



Allows you to download product template data

*Returned Response:*




CSV File of product template data. See example below or refer `TemplatesResponse` for details


[string](#string)

CSV File of product template data. See example below or refer `TemplatesResponse` for details









---


#### downloadProductTemplateView
Download Product Template View



```javascript
// Promise
const promise = catalog.downloadProductTemplateView( {  companyId : value,
 itemType : value });

// Async/Await
const data = await catalog.downloadProductTemplateView( {  companyId : value,
 itemType : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| itemType | string | yes | An `item_type` defines the type of item. |  



Allows you to download product template data

*Returned Response:*




CSV File of product template data.


[string](#string)

CSV File of product template data.









---


#### validateProductTemplateSchema
Validate Product Template Schema



```javascript
// Promise
const promise = catalog.validateProductTemplateSchema( {  companyId : value,
 itemType : value });

// Async/Await
const data = await catalog.validateProductTemplateSchema( {  companyId : value,
 itemType : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| itemType | string | yes | An `item_type` defines the type of item. The default value is standard. |  



Allows you to list all product templates validation values for all the fields present in the database

*Returned Response:*




List of fields and validation values fro each. See example below or refer `InventoryValidationResponse` for details


[InventoryValidationResponse](#InventoryValidationResponse)

List of fields and validation values fro each. See example below or refer `InventoryValidationResponse` for details









---


#### listHSNCodes
List HSN Codes



```javascript
// Promise
const promise = catalog.listHSNCodes( {  companyId : value });

// Async/Await
const data = await catalog.listHSNCodes( {  companyId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |  



Allows you to list all hsn Codes

*Returned Response:*




List of all HSN Codes. See example below or refer `HSNCodesResponse` for details


[HSNCodesResponse](#HSNCodesResponse)

List of all HSN Codes. See example below or refer `HSNCodesResponse` for details









---


#### listProductTemplateExportDetails
Allows you to list all product templates export list details



```javascript
// Promise
const promise = catalog.listProductTemplateExportDetails( {  companyId : value });

// Async/Await
const data = await catalog.listProductTemplateExportDetails( {  companyId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |  



Can view details including trigger data, task id , etc.

*Returned Response:*




List of Product Downloads Data. See example below or refer `ProductDownloadsResponse` for details


[ProductDownloadsResponse](#ProductDownloadsResponse)

List of Product Downloads Data. See example below or refer `ProductDownloadsResponse` for details









---


#### listTemplateBrandTypeValues
Allows you to list all values for Templates, Brands or Type



```javascript
// Promise
const promise = catalog.listTemplateBrandTypeValues( {  companyId : value,
 filter : value });

// Async/Await
const data = await catalog.listTemplateBrandTypeValues( {  companyId : value,
 filter : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| filter | string | yes | A `filter` is the unique identifier of the type of value required. |  



The filter type query parameter defines what type of data to return. The type of query returns the valid values for the same

*Returned Response:*




See example below or refer `ProductConfigurationDownloadsSchema` for details


[ProductConfigurationDownloads](#ProductConfigurationDownloads)

See example below or refer `ProductConfigurationDownloadsSchema` for details









---


#### listCategories
Get product categories list



```javascript
// Promise
const promise = catalog.listCategories( {  companyId : value,
 level : value,
 departments : value,
 q : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await catalog.listCategories( {  companyId : value,
 level : value,
 departments : value,
 q : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |    
| level | string | no | Get category for multiple levels |    
| departments | string | no | Get category for multiple departments filtered |    
| q | string | no | Get multiple categories filtered by search string |    
| pageNo | number | no | The page number to navigate through the given set of results |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 10. |  



This API gets meta associated to product categories.

*Returned Response:*




Category Meta. See example below or refer `CategoryResponse` for details


[CategoryResponse](#CategoryResponse)

Category Meta. See example below or refer `CategoryResponse` for details









---


#### createCategories
Create product categories



```javascript
// Promise
const promise = catalog.createCategories( {  companyId : value,
 body : value });

// Async/Await
const data = await catalog.createCategories( {  companyId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |  
| body | [CategoryRequestBody](#CategoryRequestBody) | yes | Request body |


This API lets user create product categories

*Returned Response:*




Category Meta. See example below or refer `CategoryCreateResponse` for details


[CategoryCreateResponse](#CategoryCreateResponse)

Category Meta. See example below or refer `CategoryCreateResponse` for details









---


#### updateCategory
Update product categories



```javascript
// Promise
const promise = catalog.updateCategory( {  companyId : value,
 uid : value,
 body : value });

// Async/Await
const data = await catalog.updateCategory( {  companyId : value,
 uid : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| uid | string | yes | Category unique id |  
| body | [CategoryRequestBody](#CategoryRequestBody) | yes | Request body |


Update a product category using this apu

*Returned Response:*




Category Meta. See example below or refer `CategoryUpdateResponse` for details


[CategoryUpdateResponse](#CategoryUpdateResponse)

Category Meta. See example below or refer `CategoryUpdateResponse` for details









---


#### getCategoryData
Get product category by uid



```javascript
// Promise
const promise = catalog.getCategoryData( {  companyId : value,
 uid : value });

// Async/Await
const data = await catalog.getCategoryData( {  companyId : value,
 uid : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| uid | string | yes | Category unique id |  



This API gets meta associated to product categories.

*Returned Response:*




Get Data for one category. See example below or refer `CategoryResponse` for details


[SingleCategoryResponse](#SingleCategoryResponse)

Get Data for one category. See example below or refer `CategoryResponse` for details









---


#### getProducts
Get product list



```javascript
// Promise
const promise = catalog.getProducts( {  companyId : value,
 brandIds : value,
 categoryIds : value,
 itemIds : value,
 departmentIds : value,
 itemCode : value,
 q : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await catalog.getProducts( {  companyId : value,
 brandIds : value,
 categoryIds : value,
 itemIds : value,
 departmentIds : value,
 itemCode : value,
 q : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Get list of products filtered by company Id |    
| brandIds | Array<number> | no | Get multiple products filtered by Brand Ids |    
| categoryIds | Array<number> | no | Get multiple products filtered by Category Ids |    
| itemIds | Array<number> | no | Get multiple products filtered by Item Ids |    
| departmentIds | Array<number> | no | Get multiple products filtered by Department Ids |    
| itemCode | Array<number> | no | Get multiple products filtered by Item Code |    
| q | string | no | Get multiple products filtered by q string |    
| pageNo | number | no | The page number to navigate through the given set of results |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 10. |  



This API gets meta associated to products.

*Returned Response:*




Product Meta. See example below for details


[ProductListingResponse](#ProductListingResponse)

Product Meta. See example below for details









---


#### createProduct
Create a product.



```javascript
// Promise
const promise = catalog.createProduct( {  companyId : value,
 body : value });

// Async/Await
const data = await catalog.createProduct( {  companyId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Id of the company associated to product that is to be viewed. |  
| body | [ProductCreateUpdate](#ProductCreateUpdate) | yes | Request body |


This API allows to create product.

*Returned Response:*




Returns a success response


[SuccessResponse](#SuccessResponse)

Returns a success response









---


#### deleteProduct
Delete a product.



```javascript
// Promise
const promise = catalog.deleteProduct( {  companyId : value,
 itemId : value });

// Async/Await
const data = await catalog.deleteProduct( {  companyId : value,
 itemId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id of the company associated to product that is to be deleted. |   
| itemId | number | yes | Id of the product to be updated. |  



This API allows to delete product.

*Returned Response:*




Returns a success response


[SuccessResponse](#SuccessResponse)

Returns a success response









---


#### editProduct
Edit a product.



```javascript
// Promise
const promise = catalog.editProduct( {  companyId : value,
 itemId : value,
 body : value });

// Async/Await
const data = await catalog.editProduct( {  companyId : value,
 itemId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Id of the company associated to product that is to be viewed. |   
| itemId | number | yes | Id of the product to be updated. |  
| body | [ProductCreateUpdate](#ProductCreateUpdate) | yes | Request body |


This API allows to edit product.

*Returned Response:*




Returns a success response


[SuccessResponse](#SuccessResponse)

Returns a success response









---


#### getProduct
Get a single product.



```javascript
// Promise
const promise = catalog.getProduct( {  companyId : value,
 itemId : value,
 itemCode : value,
 brandUid : value,
 uid : value });

// Async/Await
const data = await catalog.getProduct( {  companyId : value,
 itemId : value,
 itemCode : value,
 brandUid : value,
 uid : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| itemCode | string | no | Item code of the product. |   
| companyId | number | yes | Company Id of the product. |   
| itemId | number | yes | Item Id of the product. |    
| brandUid | number | no | Brand Id of the product. |    
| uid | number | no | Id of the product. |  



This API helps to get data associated to a particular product.

*Returned Response:*




Product object. See example below or refer `product.utils.format_product_response` for details


[Product](#Product)

Product object. See example below or refer `product.utils.format_product_response` for details









---


#### getProductValidation
Validate product/size data



```javascript
// Promise
const promise = catalog.getProductValidation( {  companyId : value });

// Async/Await
const data = await catalog.getProductValidation( {  companyId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Validates data against given company |  



This API validates product data.

*Returned Response:*




Validate Meta. See example below for details


[ValidateProduct](#ValidateProduct)

Validate Meta. See example below for details









---


#### getProductSize
Get a single product size.



```javascript
// Promise
const promise = catalog.getProductSize( {  companyId : value,
 itemId : value,
 itemCode : value,
 brandUid : value,
 uid : value });

// Async/Await
const data = await catalog.getProductSize( {  companyId : value,
 itemId : value,
 itemCode : value,
 brandUid : value,
 uid : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| itemCode | string | no | Item code of the product size. |   
| companyId | number | yes | Company Id of the product size. |   
| itemId | number | yes | Item Id of the product size. |    
| brandUid | number | no | Brand Id of the product size. |    
| uid | number | no | Id of the product size. |  



This API helps to get data associated to a particular product size.

*Returned Response:*




Product object. See example below for details


[ProductListingResponse](#ProductListingResponse)

Product object. See example below for details









---


#### getProductBulkUploadHistory
Get a list of all bulk product upload jobs.



```javascript
// Promise
const promise = catalog.getProductBulkUploadHistory( {  companyId : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await catalog.getProductBulkUploadHistory( {  companyId : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id of of which Product Bulk Upload History to be obtained. |    
| pageNo | number | no | The page number to navigate through the given set of results |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 12. |  



This API helps to get bulk product upload jobs data.

*Returned Response:*




List of bulk product upload jobs. See `BulkRequestGetSchema` for details


[ProductBulkRequestList](#ProductBulkRequestList)

List of bulk product upload jobs. See `BulkRequestGetSchema` for details









---


#### updateProductAssetsInBulk
Create a Bulk asset upload Job.



```javascript
// Promise
const promise = catalog.updateProductAssetsInBulk( {  companyId : value,
 body : value });

// Async/Await
const data = await catalog.updateProductAssetsInBulk( {  companyId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id in which assets to be uploaded. |  
| body | [BulkJob](#BulkJob) | yes | Request body |


This API helps to create a bulk asset upload job.

*Returned Response:*




Returns a success response


[SuccessResponse](#SuccessResponse)

Returns a success response









---


#### deleteProductBulkJob
Delete Bulk product job.



```javascript
// Promise
const promise = catalog.deleteProductBulkJob( {  companyId : value,
 batchId : value });

// Async/Await
const data = await catalog.deleteProductBulkJob( {  companyId : value,
 batchId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id of the company associated to size that is to be deleted. |   
| batchId | number | yes | Batch Id of the bulk product job to be deleted. |  



This API allows to delete bulk product job associated with company.

*Returned Response:*




Returns a success response


[SuccessResponse](#SuccessResponse)

Returns a success response









---


#### createProductsInBulk
Create products in bulk associated with given batch Id.



```javascript
// Promise
const promise = catalog.createProductsInBulk( {  companyId : value,
 batchId : value,
 body : value });

// Async/Await
const data = await catalog.createProductsInBulk( {  companyId : value,
 batchId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id in which assets to be uploaded. |   
| batchId | string | yes | Batch Id in which assets to be uploaded. |  
| body | [BulkProductRequest](#BulkProductRequest) | yes | Request body |


This API helps to create products in bulk push to kafka for approval/creation.

*Returned Response:*




Returns a success response


[SuccessResponse](#SuccessResponse)

Returns a success response









---


#### getCompanyTags
Get a list of all tags associated with company.



```javascript
// Promise
const promise = catalog.getCompanyTags( {  companyId : value });

// Async/Await
const data = await catalog.getCompanyTags( {  companyId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id of the product size. |  



This API helps to get tags data associated to a particular copmpany.

*Returned Response:*




Tag List. See example below for details


[ProductTagsViewResponse](#ProductTagsViewResponse)

Tag List. See example below for details









---


#### getProductAssetsInBulk
Get a list of all bulk asset jobs.



```javascript
// Promise
const promise = catalog.getProductAssetsInBulk( {  companyId : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await catalog.getProductAssetsInBulk( {  companyId : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id of the product size. |    
| pageNo | number | no | The page number to navigate through the given set of results |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 12. |  



This API helps to get bulk asset jobs data associated to a particular company.

*Returned Response:*




List of bulk asset jobs List. See `BulkUtil.modify_batch_response` for details


[BulkAssetResponse](#BulkAssetResponse)

List of bulk asset jobs List. See `BulkUtil.modify_batch_response` for details









---


#### createProductAssetsInBulk
Create a Bulk asset upload Job.



```javascript
// Promise
const promise = catalog.createProductAssetsInBulk( {  companyId : value,
 body : value });

// Async/Await
const data = await catalog.createProductAssetsInBulk( {  companyId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id in which assets to be uploaded. |  
| body | [ProductBulkAssets](#ProductBulkAssets) | yes | Request body |


This API helps to create a bulk asset upload job.

*Returned Response:*




Returns a success response


[SuccessResponse](#SuccessResponse)

Returns a success response









---


#### deleteSize
Delete a Size associated with product.



```javascript
// Promise
const promise = catalog.deleteSize( {  companyId : value,
 itemId : value,
 size : value });

// Async/Await
const data = await catalog.deleteSize( {  companyId : value,
 itemId : value,
 size : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id of the company associated to size that is to be deleted. |   
| itemId | number | yes | Item Id of the product associated with size to be deleted. |   
| size | number | yes | size to be deleted. |  



This API allows to delete size associated with product.

*Returned Response:*




Returns a success response


[ProductSizeDeleteResponse](#ProductSizeDeleteResponse)

Returns a success response









---


#### getInventoryBySize
Get Inventory for company



```javascript
// Promise
const promise = catalog.getInventoryBySize( {  companyId : value,
 itemId : value,
 size : value,
 pageNo : value,
 pageSize : value,
 q : value });

// Async/Await
const data = await catalog.getInventoryBySize( {  companyId : value,
 itemId : value,
 size : value,
 pageNo : value,
 pageSize : value,
 q : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Id of the company associated to product that is to be viewed. |   
| itemId | string | yes | Item code of the product of which size is to be get. |   
| size | string | yes | Size of which inventory is to get. |    
| pageNo | number | no | The page number to navigate through the given set of results |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 12. |    
| q | string | no | Search with help of store code. |  



This API allows get Inventory data for particular company grouped by size and store.

*Returned Response:*




returns a list of all inventory grouped by size and store


[InventoryResponse](#InventoryResponse)

returns a list of all inventory grouped by size and store









---


#### addInventory
Add Inventory for particular size and store.



```javascript
// Promise
const promise = catalog.addInventory( {  companyId : value,
 itemId : value,
 size : value,
 body : value });

// Async/Await
const data = await catalog.addInventory( {  companyId : value,
 itemId : value,
 size : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Id of the company associated to product that is to be viewed. |   
| itemId | number | yes | Item code of the product of which size is to be get. |   
| size | string | yes | Size in which inventory is to be added. |  
| body | [InventoryRequest](#InventoryRequest) | yes | Request body |


This API allows add Inventory for particular size and store.

*Returned Response:*




Returns a success response


[SuccessResponse](#SuccessResponse)

Returns a success response









---


#### getInventoryBySizeIdentifier
Get Inventory for company



```javascript
// Promise
const promise = catalog.getInventoryBySizeIdentifier( {  companyId : value,
 itemId : value,
 sizeIdentifier : value,
 pageNo : value,
 pageSize : value,
 q : value,
 locationIds : value });

// Async/Await
const data = await catalog.getInventoryBySizeIdentifier( {  companyId : value,
 itemId : value,
 sizeIdentifier : value,
 pageNo : value,
 pageSize : value,
 q : value,
 locationIds : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Id of the company associated to product that is to be viewed. |   
| itemId | string | yes | Item code of the product of which size is to be get. |   
| sizeIdentifier | string | yes | Size Identifier (Seller Identifier or Primary Identifier) of which inventory is to get. |    
| pageNo | number | no | The page number to navigate through the given set of results |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 12. |    
| q | string | no | Search with help of store code. |    
| locationIds | Array<number> | no | Search by store ids. |  



This API allows get Inventory data for particular company grouped by size and store.

*Returned Response:*




returns a list of all inventory grouped by size and store


[InventoryResponse](#InventoryResponse)

returns a list of all inventory grouped by size and store









---


#### deleteInventory
Delete a Inventory.



```javascript
// Promise
const promise = catalog.deleteInventory( {  companyId : value,
 size : value,
 itemId : value,
 locationId : value });

// Async/Await
const data = await catalog.deleteInventory( {  companyId : value,
 size : value,
 itemId : value,
 locationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id of the company associated with Inventory that is to be deleted. |   
| size | string | yes | size that is to be deleted. |   
| itemId | number | yes | Id of the product associated with Inventory to be deleted. |   
| locationId | number | yes | Location ID of store of which inventory is to be deleted. |  



This API allows to delete inventory of a particular product for particular company.

*Returned Response:*




Returns a success response


[InventoryDelete](#InventoryDelete)

Returns a success response









---


#### getInventoryBulkUploadHistory
Get a list of all bulk Inventory upload jobs.



```javascript
// Promise
const promise = catalog.getInventoryBulkUploadHistory( {  companyId : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await catalog.getInventoryBulkUploadHistory( {  companyId : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id of of which Inventory Bulk Upload History to be obtained. |    
| pageNo | number | no | The page number to navigate through the given set of results |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 12. |  



This API helps to get bulk Inventory upload jobs data.

*Returned Response:*




List of bulk Inventory upload jobs. See `BulkInventoryGetSchema` for details


[BulkInventoryGet](#BulkInventoryGet)

List of bulk Inventory upload jobs. See `BulkInventoryGetSchema` for details









---


#### createBulkInventoryJob
Create a Bulk Inventory upload Job.



```javascript
// Promise
const promise = catalog.createBulkInventoryJob( {  companyId : value,
 body : value });

// Async/Await
const data = await catalog.createBulkInventoryJob( {  companyId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id in which Inventory to be uploaded. |  
| body | [BulkJob](#BulkJob) | yes | Request body |


This API helps to create a bulk Inventory upload job.

*Returned Response:*




Returns a success response


[CommonResponse](#CommonResponse)

Returns a success response









---


#### deleteBulkInventoryJob
Delete Bulk Inventory job.



```javascript
// Promise
const promise = catalog.deleteBulkInventoryJob( {  companyId : value,
 batchId : value });

// Async/Await
const data = await catalog.deleteBulkInventoryJob( {  companyId : value,
 batchId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id of the company of which bulk Inventory job is to be deleted. |   
| batchId | string | yes | Batch Id of the bulk delete job. |  



This API allows to delete bulk Inventory job associated with company.

*Returned Response:*




Returns a success response


[SuccessResponse](#SuccessResponse)

Returns a success response









---


#### createBulkInventory
Create products in bulk associated with given batch Id.



```javascript
// Promise
const promise = catalog.createBulkInventory( {  companyId : value,
 batchId : value,
 body : value });

// Async/Await
const data = await catalog.createBulkInventory( {  companyId : value,
 batchId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id in which Inventory is to be uploaded. |   
| batchId | string | yes | Batch Id of the bulk create job. |  
| body | [InventoryBulkRequest](#InventoryBulkRequest) | yes | Request body |


This API helps to create products in bulk push to kafka for approval/creation.

*Returned Response:*




Returns a success response


[SuccessResponse](#SuccessResponse)

Returns a success response









---


#### getInventoryExport
Get Inventory export history.



```javascript
// Promise
const promise = catalog.getInventoryExport( {  companyId : value });

// Async/Await
const data = await catalog.getInventoryExport( {  companyId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id in which assets to be uploaded. |  



This API helps to get Inventory export history.

*Returned Response:*




Returns a list of inventory export jobs


[InventoryExportJob](#InventoryExportJob)

Returns a list of inventory export jobs









---


#### createInventoryExportJob
Create a Inventory export Job.



```javascript
// Promise
const promise = catalog.createInventoryExportJob( {  companyId : value,
 body : value });

// Async/Await
const data = await catalog.createInventoryExportJob( {  companyId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id in which assets to be uploaded. |  
| body | [InventoryExportRequest](#InventoryExportRequest) | yes | Request body |


This API helps to create a Inventory export job.

*Returned Response:*




Returns a success response


[SuccessResponse](#SuccessResponse)

Returns a success response









---


#### exportInventoryConfig
Get List of different filters for inventory export



```javascript
// Promise
const promise = catalog.exportInventoryConfig( {  companyId : value,
 filterType : value });

// Async/Await
const data = await catalog.exportInventoryConfig( {  companyId : value,
 filterType : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Id of the company associated to product that is to be viewed. |    
| filterType | string | no | filter type from any one of ['brand', 'store', 'type'] |  



This API allows get List of different filters like brand, store, and type for inventory export.

*Returned Response:*




returns filters configuration for inventory export


[InventoryConfig](#InventoryConfig)

returns filters configuration for inventory export









---


#### getAllHsnCodes
Hsn Code List.



```javascript
// Promise
const promise = catalog.getAllHsnCodes( {  companyId : value,
 pageNo : value,
 pageSize : value,
 q : value });

// Async/Await
const data = await catalog.getAllHsnCodes( {  companyId : value,
 pageNo : value,
 pageSize : value,
 q : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | company id |    
| pageNo | number | no | page no |    
| pageSize | number | no | page size |    
| q | string | no | search using hsn code. |  



Hsn Code List.

*Returned Response:*




List of all HSN Codes. See example below or refer `HsnCodesListingResponseSchema` for details


[HsnCodesListingResponse](#HsnCodesListingResponse)

List of all HSN Codes. See example below or refer `HsnCodesListingResponseSchema` for details









---


#### createHsnCode
Create Hsn Code.



```javascript
// Promise
const promise = catalog.createHsnCode( {  companyId : value,
 body : value });

// Async/Await
const data = await catalog.createHsnCode( {  companyId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | company id |  
| body | [HsnUpsert](#HsnUpsert) | yes | Request body |


Create Hsn Code.

*Returned Response:*




See example below for details


[HsnCode](#HsnCode)

See example below for details









---


#### updateHsnCode
Update Hsn Code.



```javascript
// Promise
const promise = catalog.updateHsnCode( {  companyId : value,
 id : value,
 body : value });

// Async/Await
const data = await catalog.updateHsnCode( {  companyId : value,
 id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | company id |   
| id | string | yes | Unique id |  
| body | [HsnUpsert](#HsnUpsert) | yes | Request body |


Update Hsn Code.

*Returned Response:*




See example below for details


[HsnCode](#HsnCode)

See example below for details









---


#### getHsnCode
Fetch Hsn Code.



```javascript
// Promise
const promise = catalog.getHsnCode( {  companyId : value,
 id : value });

// Async/Await
const data = await catalog.getHsnCode( {  companyId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | company id |   
| id | string | yes | Unique id |  



Fetch Hsn Code.

*Returned Response:*




See example below details


[HsnCode](#HsnCode)

See example below details









---


#### bulkHsnCode
Bulk Create or Update Hsn Code.



```javascript
// Promise
const promise = catalog.bulkHsnCode( {  companyId : value,
 body : value });

// Async/Await
const data = await catalog.bulkHsnCode( {  companyId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | company id |  
| body | [BulkHsnUpsert](#BulkHsnUpsert) | yes | Request body |


Bulk Create or Update Hsn Code.

*Returned Response:*




See example below for details


[BulkHsnResponse](#BulkHsnResponse)

See example below for details









---


#### getApplicationBrands
List all the brands



```javascript
// Promise
const promise = catalog.getApplicationBrands( {  companyId : value,
 applicationId : value,
 department : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await catalog.getApplicationBrands( {  companyId : value,
 applicationId : value,
 department : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| applicationId | string | yes | A `application_id` is a unique identifier for a particular sale channel. |    
| department | string | no | The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **v1.0/departments/** API |    
| pageNo | number | no | The page number to navigate through the given set of results |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 12. |  



A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`

*Returned Response:*




List of Brands. See example below or refer `BrandListingResponse` for details


[BrandListingResponse](#BrandListingResponse)

List of Brands. See example below or refer `BrandListingResponse` for details









---


#### getDepartments
List all the departments



```javascript
// Promise
const promise = catalog.getDepartments( {  companyId : value,
 applicationId : value });

// Async/Await
const data = await catalog.getDepartments( {  companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| applicationId | string | yes | A `application_id` is a unique identifier for a particular sale channel. |  



Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse`

*Returned Response:*




List of Departments. See example below or refer `DepartmentResponse` for details.


[DepartmentResponse](#DepartmentResponse)

List of Departments. See example below or refer `DepartmentResponse` for details.









---


#### getCategories
List all the categories



```javascript
// Promise
const promise = catalog.getCategories( {  companyId : value,
 applicationId : value,
 department : value });

// Async/Await
const data = await catalog.getCategories( {  companyId : value,
 applicationId : value,
 department : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| applicationId | string | yes | A `application_id` is a unique identifier for a particular sale channel. |    
| department | string | no | The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **v1.0/departments/** API |  



List all the categories. You can optionally pass filter the brands by the department. If successful, returns a paginated list of brands specified in `CategoryListingResponse`

*Returned Response:*




List of Categories. See example below or refer `CategoryListingResponse` for details.


[CategoryListingResponse](#CategoryListingResponse)

List of Categories. See example below or refer `CategoryListingResponse` for details.









---


#### getAppicationProducts
List the products



```javascript
// Promise
const promise = catalog.getAppicationProducts( {  companyId : value,
 applicationId : value,
 q : value,
 f : value,
 filters : value,
 sortOn : value,
 pageId : value,
 pageSize : value,
 pageNo : value,
 pageType : value });

// Async/Await
const data = await catalog.getAppicationProducts( {  companyId : value,
 applicationId : value,
 q : value,
 f : value,
 filters : value,
 sortOn : value,
 pageId : value,
 pageSize : value,
 pageNo : value,
 pageType : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| applicationId | string | yes | A `application_id` is a unique identifier for a particular sale channel. |    
| q | string | no | The search query. This can be a partial or complete name of a either a product, brand or category |    
| f | string | no | The search filter parameters. All the parameter filtered from filter parameters will be passed in **f** parameter in this format. **?f=brand:voi-jeans||and:::category:t-shirts||shirts** |    
| filters | boolean | no | Pass `filters` parameter to fetch the filter details. This flag is used to fetch all filters |    
| sortOn | string | no | The order to sort the list of products on. The supported sort parameters are popularity, price, redemption and discount in either ascending or descending order. See the supported values below. |    
| pageId | string | no | Each response will contain **page_id** param, which should be sent back to make pagination work. |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 12. |    
| pageNo | number | no | If page_type is number then pass it to fetch page items. Default is 1. |    
| pageType | string | no | For pagination type should be cursor or number. Default is cursor. |  



List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ApplicationProductListingResponse`

*Returned Response:*




List of Products. See example below or refer `ApplicationProductListingResponse` for details


[ApplicationProductListingResponse](#ApplicationProductListingResponse)

List of Products. See example below or refer `ApplicationProductListingResponse` for details









---


#### getProductDetailBySlug
Get a product



```javascript
// Promise
const promise = catalog.getProductDetailBySlug( {  companyId : value,
 applicationId : value,
 slug : value });

// Async/Await
const data = await catalog.getProductDetailBySlug( {  companyId : value,
 applicationId : value,
 slug : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| applicationId | string | yes | A `application_id` is a unique identifier for a particular sale channel. |   
| slug | string | yes | The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/** |  



Products are the core resource of an application. Products can be associated by categories, collections, brands and more. This API retrieves the product specified by the given **slug**. If successful, returns a Product resource in the response body specified in `ProductDetail`

*Returned Response:*




The Product object. See example below or refer `ProductDetail` for details.


[ProductDetail](#ProductDetail)

The Product object. See example below or refer `ProductDetail` for details.









---


#### getAppProducts
Get applicationwise products



```javascript
// Promise
const promise = catalog.getAppProducts( {  companyId : value,
 applicationId : value,
 brandIds : value,
 categoryIds : value,
 departmentIds : value });

// Async/Await
const data = await catalog.getAppProducts( {  companyId : value,
 applicationId : value,
 brandIds : value,
 categoryIds : value,
 departmentIds : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |   
| applicationId | string | yes | A `application_id` is a unique identifier for a particular sale channel. |    
| brandIds | Array<number> | no | Get multiple products filtered by Brand Ids |    
| categoryIds | Array<number> | no | Get multiple products filtered by Category Ids |    
| departmentIds | Array<number> | no | Get multiple products filtered by Department Ids |  



Products are the core resource of an application. Products can be associated by categories, collections, brands and more. If successful, returns a Product resource in the response body specified in `ApplicationProductListingResponseDatabasePowered`

*Returned Response:*




The Product object. See example below or refer `ApplicationProductListingResponseDatabasePowered` for details.


[ProductListingResponse](#ProductListingResponse)

The Product object. See example below or refer `ApplicationProductListingResponseDatabasePowered` for details.









---





## CompanyProfile


#### cbsOnboardGet
Get company profile



```javascript
// Promise
const promise = companyprofile.cbsOnboardGet( {  companyId : value });

// Async/Await
const data = await companyprofile.cbsOnboardGet( {  companyId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |  



This API allows to view the company profile of the seller account.

*Returned Response:*




Company profile object. See example below or refer `GetCompanyProfileSerializerResponse` for details


[GetCompanyProfileSerializerResponse](#GetCompanyProfileSerializerResponse)

Company profile object. See example below or refer `GetCompanyProfileSerializerResponse` for details









---


#### updateCompany
Edit company profile



```javascript
// Promise
const promise = companyprofile.updateCompany( {  companyId : value,
 body : value });

// Async/Await
const data = await companyprofile.updateCompany( {  companyId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |  
| body | [UpdateCompany](#UpdateCompany) | yes | Request body |


This API allows to edit the company profile of the seller account.

*Returned Response:*




Returns a success message


[SuccessResponse](#SuccessResponse)

Returns a success message









---


#### getCompanyMetrics
Get company metrics



```javascript
// Promise
const promise = companyprofile.getCompanyMetrics( {  companyId : value });

// Async/Await
const data = await companyprofile.getCompanyMetrics( {  companyId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | A `company_id` is a unique identifier for a particular seller account. |  



This API allows to view the company metrics, i.e. the status of its brand and stores. Also its allows to view the number of products, company documents & store documents which are verified and unverified.

*Returned Response:*




Metrics response object. See example below or refer `MetricsSerializer` for details


[MetricsSerializer](#MetricsSerializer)

Metrics response object. See example below or refer `MetricsSerializer` for details









---


#### getBrand
Get a single brand.



```javascript
// Promise
const promise = companyprofile.getBrand( {  companyId : value,
 brandId : value });

// Async/Await
const data = await companyprofile.getBrand( {  companyId : value,
 brandId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Id of the company associated to brand that is to be viewed. |   
| brandId | string | yes | Id of the brand to be viewed. |  



This API helps to get data associated to a particular brand.

*Returned Response:*




Brand object. See example below or refer `GetBrandResponseSerializer` for details


[GetBrandResponseSerializer](#GetBrandResponseSerializer)

Brand object. See example below or refer `GetBrandResponseSerializer` for details









---


#### editBrand
Edit a brand.



```javascript
// Promise
const promise = companyprofile.editBrand( {  companyId : value,
 brandId : value,
 body : value });

// Async/Await
const data = await companyprofile.editBrand( {  companyId : value,
 brandId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Id of the company associated to brand that is to be viewed. |   
| brandId | string | yes | Id of the brand to be viewed. |  
| body | [CreateUpdateBrandRequestSerializer](#CreateUpdateBrandRequestSerializer) | yes | Request body |


This API allows to edit meta of a brand.

*Returned Response:*




Returns a success response


[SuccessResponse](#SuccessResponse)

Returns a success response









---


#### createBrand
Create a Brand.



```javascript
// Promise
const promise = companyprofile.createBrand( {  companyId : value,
 body : value });

// Async/Await
const data = await companyprofile.createBrand( {  companyId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Id of the company. |  
| body | [CreateUpdateBrandRequestSerializer](#CreateUpdateBrandRequestSerializer) | yes | Request body |


This API allows to create a brand associated to a company.

*Returned Response:*




Returns a success response


[SuccessResponse](#SuccessResponse)

Returns a success response









---


#### createCompanyBrandMapping
Create a company brand mapping.



```javascript
// Promise
const promise = companyprofile.createCompanyBrandMapping( {  companyId : value,
 body : value });

// Async/Await
const data = await companyprofile.createCompanyBrandMapping( {  companyId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Id of the company inside which the brand is to be mapped. |  
| body | [CompanyBrandPostRequestSerializer](#CompanyBrandPostRequestSerializer) | yes | Request body |


This API allows to create a company brand mapping, for a already existing brand in the system.

*Returned Response:*




Returns a success response


[SuccessResponse](#SuccessResponse)

Returns a success response









---


#### getBrands
Get brands associated to a company



```javascript
// Promise
const promise = companyprofile.getBrands( {  companyId : value,
 pageNo : value,
 pageSize : value,
 q : value });

// Async/Await
const data = await companyprofile.getBrands( {  companyId : value,
 pageNo : value,
 pageSize : value,
 q : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Id of the company. |    
| pageNo | number | no | The page number to navigate through the given set of results |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 10. |    
| q | string | no | Search term for name. |  



This API helps to get view brands associated to a particular company.

*Returned Response:*




Brand object. See example below or refer `CompanyBrandListSerializer` for details


[CompanyBrandListSerializer](#CompanyBrandListSerializer)

Brand object. See example below or refer `CompanyBrandListSerializer` for details









---


#### createLocation
Create a location asscoiated to a company.



```javascript
// Promise
const promise = companyprofile.createLocation( {  companyId : value,
 body : value });

// Async/Await
const data = await companyprofile.createLocation( {  companyId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Id of the company inside which the location is to be created. |  
| body | [LocationSerializer](#LocationSerializer) | yes | Request body |


This API allows to create a location associated to a company.

*Returned Response:*




Returns a success response


[SuccessResponse](#SuccessResponse)

Returns a success response









---


#### getLocations
Get list of locations



```javascript
// Promise
const promise = companyprofile.getLocations( {  companyId : value,
 storeType : value,
 q : value,
 stage : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await companyprofile.getLocations( {  companyId : value,
 storeType : value,
 q : value,
 stage : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Id of the company whose locations are to fetched |    
| storeType | string | no | Helps to sort the location list on the basis of location type. |    
| q | string | no | Query that is to be searched. |    
| stage | string | no | to filter companies on basis of verified or unverified companies. |    
| pageNo | number | no | The page number to navigate through the given set of results |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 10. |  



This API allows to view all the locations asscoiated to a company.

*Returned Response:*




Company profile object. See example below or refer `LocationListSerializer` for details


[LocationListSerializer](#LocationListSerializer)

Company profile object. See example below or refer `LocationListSerializer` for details









---


#### getLocationDetail
Get details of a specific location.



```javascript
// Promise
const promise = companyprofile.getLocationDetail( {  companyId : value,
 locationId : value });

// Async/Await
const data = await companyprofile.getLocationDetail( {  companyId : value,
 locationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Id of the company inside which the location lies. |   
| locationId | string | yes | Id of the location which you want to view. |  



This API helps to get data associated to a specific location.

*Returned Response:*




Brand object. See example below or refer `GetLocationSerializer` for details


[GetLocationSerializer](#GetLocationSerializer)

Brand object. See example below or refer `GetLocationSerializer` for details









---


#### updateLocation
Edit a location asscoiated to a company.



```javascript
// Promise
const promise = companyprofile.updateLocation( {  companyId : value,
 locationId : value,
 body : value });

// Async/Await
const data = await companyprofile.updateLocation( {  companyId : value,
 locationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Id of the company inside which the location is to be created. |   
| locationId | string | yes | Id of the location which you want to edit. |  
| body | [LocationSerializer](#LocationSerializer) | yes | Request body |


This API allows to edit a location associated to a company.

*Returned Response:*




Returns a success response


[SuccessResponse](#SuccessResponse)

Returns a success response









---


#### createLocationBulk
Create a location asscoiated to a company in bulk.



```javascript
// Promise
const promise = companyprofile.createLocationBulk( {  companyId : value,
 body : value });

// Async/Await
const data = await companyprofile.createLocationBulk( {  companyId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Id of the company inside which the location is to be created. |  
| body | [BulkLocationSerializer](#BulkLocationSerializer) | yes | Request body |


This API allows to create a location associated to a company.

*Returned Response:*




Returns a success response


[SuccessResponse](#SuccessResponse)

Returns a success response









---





## FileStorage


#### startUpload
This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.



```javascript
// Promise
const promise = filestorage.startUpload( {  namespace : value,
 companyId : value,
 body : value });

// Async/Await
const data = await filestorage.startUpload( {  namespace : value,
 companyId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| namespace | string | yes | bucket name |   
| companyId | number | yes | company_id |  
| body | [StartRequest](#StartRequest) | no | Request body |


Uploads an arbitrarily sized buffer or blob.

It has three Major Steps:
* Start
* Upload
* Complete

### Start
Initiates the assets upload using `startUpload`.
It returns the storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `startUpload` api with file (Buffer or Blob) as a request body.

### Complete
After successfully upload, call `completeUpload` api to complete the upload process.
This operation will return the url for the uploaded file.


*Returned Response:*




Success


[StartResponse](#StartResponse)

Success









---


#### completeUpload
This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.



```javascript
// Promise
const promise = filestorage.completeUpload( {  namespace : value,
 companyId : value,
 body : value });

// Async/Await
const data = await filestorage.completeUpload( {  namespace : value,
 companyId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| namespace | string | yes | bucket name |   
| companyId | number | yes | company_id |  
| body | [StartResponse](#StartResponse) | no | Request body |


Uploads an arbitrarily sized buffer or blob.

It has three Major Steps:
* Start
* Upload
* Complete

### Start
Initiates the assets upload using `startUpload`.
It returns the storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `startUpload` api with file (Buffer or Blob) as a request body.

### Complete
After successfully upload, call `completeUpload` api to complete the upload process.
This operation will return the url for the uploaded file.


*Returned Response:*




Success


[CompleteResponse](#CompleteResponse)

Success









---


#### appStartUpload
This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.



```javascript
// Promise
const promise = filestorage.appStartUpload( {  namespace : value,
 companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await filestorage.appStartUpload( {  namespace : value,
 companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| namespace | string | yes | bucket name |   
| companyId | number | yes | company_id |   
| applicationId | string | yes | application id |  
| body | [StartRequest](#StartRequest) | no | Request body |


Uploads an arbitrarily sized buffer or blob.

It has three Major Steps:
* Start
* Upload
* Complete

### Start
Initiates the assets upload using `appStartUpload`.
It returns the storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `appStartUpload` api with file (Buffer or Blob) as a request body.

### Complete
After successfully upload, call `appCompleteUpload` api to complete the upload process.
This operation will return the url for the uploaded file.


*Returned Response:*




Success


[StartResponse](#StartResponse)

Success









---


#### appCompleteUpload
This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.



```javascript
// Promise
const promise = filestorage.appCompleteUpload( {  namespace : value,
 companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await filestorage.appCompleteUpload( {  namespace : value,
 companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| namespace | string | yes | bucket name |   
| companyId | number | yes | company_id |   
| applicationId | string | yes | application id |  
| body | [StartResponse](#StartResponse) | no | Request body |


Uploads an arbitrarily sized buffer or blob.

It has three Major Steps:
* Start
* Upload
* Complete

### Start
Initiates the assets upload using `appStartUpload`.
It returns the storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `appStartUpload` api with file (Buffer or Blob) as a request body.

### Complete
After successfully upload, call `appCompleteUpload` api to complete the upload process.
This operation will return the url for the uploaded file.


*Returned Response:*




Success


[CompleteResponse](#CompleteResponse)

Success









---


#### getSignUrls
Explain here



```javascript
// Promise
const promise = filestorage.getSignUrls( {  companyId : value,
 body : value });

// Async/Await
const data = await filestorage.getSignUrls( {  companyId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | company_id |  
| body | [SignUrlRequest](#SignUrlRequest) | no | Request body |


Describe here

*Returned Response:*




Success


[SignUrlResponse](#SignUrlResponse)

Success









---


#### copyFiles
Copy Files



```javascript
// Promise
const promise = filestorage.copyFiles( {  companyId : value,
 body : value,
 sync : value });

// Async/Await
const data = await filestorage.copyFiles( {  companyId : value,
 body : value,
 sync : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| sync | boolean | no | sync |   
| companyId | number | yes | company_id |  
| body | [BulkRequest](#BulkRequest) | no | Request body |


Copy Files

*Returned Response:*




Success


[BulkResponse](#BulkResponse)

Success









---


#### appCopyFiles
Copy Files



```javascript
// Promise
const promise = filestorage.appCopyFiles( {  companyId : value,
 applicationId : value,
 body : value,
 sync : value });

// Async/Await
const data = await filestorage.appCopyFiles( {  companyId : value,
 applicationId : value,
 body : value,
 sync : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| sync | boolean | no | sync |   
| companyId | number | yes | company_id |   
| applicationId | number | yes | application_id |  
| body | [BulkRequest](#BulkRequest) | no | Request body |


Copy Files

*Returned Response:*




Success


[BulkResponse](#BulkResponse)

Success









---


#### browse
Browse Files



```javascript
// Promise
const promise = filestorage.browse( {  namespace : value,
 companyId : value,
 pageNo : value });

// Async/Await
const data = await filestorage.browse( {  namespace : value,
 companyId : value,
 pageNo : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| namespace | string | yes | bucket name |   
| companyId | number | yes | company_id |    
| pageNo | number | no | page no |  



Browse Files

*Returned Response:*




Success


[BrowseResponse](#BrowseResponse)

Success









---


#### browse
Browse Files



```javascript
// Promise
const promise = filestorage.browse( {  namespace : value,
 companyId : value,
 applicationId : value,
 pageNo : value });

// Async/Await
const data = await filestorage.browse( {  namespace : value,
 companyId : value,
 applicationId : value,
 pageNo : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| namespace | string | yes | bucket name |   
| companyId | number | yes | company_id |   
| applicationId | number | yes | application_id |    
| pageNo | number | no | page no |  



Browse Files

*Returned Response:*




Success


[BrowseResponse](#BrowseResponse)

Success









---


#### proxy
Proxy



```javascript
// Promise
const promise = filestorage.proxy( {  companyId : value,
 url : value });

// Async/Await
const data = await filestorage.proxy( {  companyId : value,
 url : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | company_id |   
| url | string | yes | url |  



Proxy

*Returned Response:*




Success


[string](#string)

Success









---





## Share


#### createShortLink
Create short link



```javascript
// Promise
const promise = share.createShortLink( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await share.createShortLink( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |  
| body | [ShortLinkReq](#ShortLinkReq) | no | Request body |


Create short link

*Returned Response:*




Success


[ShortLinkRes](#ShortLinkRes)

Success









---


#### getShortLinks
Get short links



```javascript
// Promise
const promise = share.getShortLinks( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value,
 createdBy : value,
 active : value,
 q : value });

// Async/Await
const data = await share.getShortLinks( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value,
 createdBy : value,
 active : value,
 q : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |    
| pageNo | number | no | Current page number |    
| pageSize | number | no | Current page size |    
| createdBy | string | no | Short link creator |    
| active | string | no | Short link active status |    
| q | string | no | Search text for original and short url |  



Get short links

*Returned Response:*




Success


[ShortLinkList](#ShortLinkList)

Success









---


#### getShortLinkByHash
Get short link by hash



```javascript
// Promise
const promise = share.getShortLinkByHash( {  companyId : value,
 applicationId : value,
 hash : value });

// Async/Await
const data = await share.getShortLinkByHash( {  companyId : value,
 applicationId : value,
 hash : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |   
| hash | string | yes | Hash of short url |  



Get short link by hash

*Returned Response:*




Success


[ShortLinkRes](#ShortLinkRes)

Success









---


#### updateShortLinkById
Update short link by id



```javascript
// Promise
const promise = share.updateShortLinkById( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });

// Async/Await
const data = await share.updateShortLinkById( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |   
| id | string | yes | Short link document identifier |  
| body | [ShortLinkReq](#ShortLinkReq) | no | Request body |


Update short link by id

*Returned Response:*




Success


[ShortLinkRes](#ShortLinkRes)

Success









---





## Inventory


#### getJobsByCompany
Get Job Configs For A Company



```javascript
// Promise
const promise = inventory.getJobsByCompany( {  companyId : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await inventory.getJobsByCompany( {  companyId : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id |    
| pageNo | number | no | Page Number |    
| pageSize | number | no | Page Size |  



REST Endpoint that returns all job configs for a company

*Returned Response:*




Successful operation


[ResponseEnvelopeListJobConfigRawDTO](#ResponseEnvelopeListJobConfigRawDTO)

Successful operation









---


#### updateJob
Updates An Existing Job Config



```javascript
// Promise
const promise = inventory.updateJob( {  companyId : value,
 body : value });

// Async/Await
const data = await inventory.updateJob( {  companyId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id |  
| body | [JobConfigDTO](#JobConfigDTO) | yes | Request body |


REST Endpoint that updates a job config

*Returned Response:*




Job Config Updated Successfully


[ResponseEnvelopeString](#ResponseEnvelopeString)

Job Config Updated Successfully









---


#### createJob
Creates A New Job Config



```javascript
// Promise
const promise = inventory.createJob( {  companyId : value,
 body : value });

// Async/Await
const data = await inventory.createJob( {  companyId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id |  
| body | [JobConfigDTO](#JobConfigDTO) | yes | Request body |


REST Endpoint that creates a new job config

*Returned Response:*




Job Config Created Successfully


[ResponseEnvelopeString](#ResponseEnvelopeString)

Job Config Created Successfully









---


#### getJobByCompanyAndIntegration
Get Job Configs By Company And Integration



```javascript
// Promise
const promise = inventory.getJobByCompanyAndIntegration( {  companyId : value,
 integrationId : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await inventory.getJobByCompanyAndIntegration( {  companyId : value,
 integrationId : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id |   
| integrationId | string | yes | Integration Id |    
| pageNo | number | no | Page Number |    
| pageSize | number | no | Page Size |  



REST Endpoint that returns all job configs by company And integration

*Returned Response:*




Successful operation


[ResponseEnvelopeListJobConfigDTO](#ResponseEnvelopeListJobConfigDTO)

Successful operation









---


#### getJobConfigDefaults
Get Job Configs Defaults



```javascript
// Promise
const promise = inventory.getJobConfigDefaults( {  companyId : value });

// Async/Await
const data = await inventory.getJobConfigDefaults( {  companyId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id |  



REST Endpoint that returns default fields job configs by company And integration

*Returned Response:*




Successful operation


[ResponseEnvelopeJobConfigDTO](#ResponseEnvelopeJobConfigDTO)

Successful operation









---


#### getJobByCode
Get Job Config By Code



```javascript
// Promise
const promise = inventory.getJobByCode( {  companyId : value,
 code : value });

// Async/Await
const data = await inventory.getJobByCode( {  companyId : value,
 code : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id |   
| code | string | yes | Job Code |  



REST Endpoint that returns job config by code

*Returned Response:*




Successful operation


[ResponseEnvelopeJobConfigDTO](#ResponseEnvelopeJobConfigDTO)

Successful operation









---


#### getJobCodeMetrics
Get Job Metrics



```javascript
// Promise
const promise = inventory.getJobCodeMetrics( {  companyId : value,
 code : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await inventory.getJobCodeMetrics( {  companyId : value,
 code : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id |   
| code | string | yes | Code |    
| pageNo | number | no | Page Number |    
| pageSize | number | no | Page Size |  



REST Endpoint that returns Inventory Run History For A Job Code

*Returned Response:*




Successful operation


[ResponseEnvelopeJobMetricsDto](#ResponseEnvelopeJobMetricsDto)

Successful operation









---


#### getJobCodesByCompanyAndIntegration
Get Job Codes By Company And Integration



```javascript
// Promise
const promise = inventory.getJobCodesByCompanyAndIntegration( {  companyId : value,
 integrationId : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await inventory.getJobCodesByCompanyAndIntegration( {  companyId : value,
 integrationId : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id |   
| integrationId | string | yes | Integration Id |    
| pageNo | number | no | Page Number |    
| pageSize | number | no | Page Size |  



REST Endpoint that returns all job codes by company And integration

*Returned Response:*




Successful operation


[ResponseEnvelopeListJobConfigListDTO](#ResponseEnvelopeListJobConfigListDTO)

Successful operation









---





## Configuration


#### getBuildConfig
Get latest build config



```javascript
// Promise
const promise = configuration.getBuildConfig( {  companyId : value,
 applicationId : value,
 platformType : value });

// Async/Await
const data = await configuration.getBuildConfig( {  companyId : value,
 applicationId : value,
 platformType : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current application id |   
| platformType | string | yes | Current platform name |  



Get latest build config

*Returned Response:*




Success


[MobileAppConfiguration](#MobileAppConfiguration)

Success









---


#### updateBuildConfig
Update build config for next build



```javascript
// Promise
const promise = configuration.updateBuildConfig( {  companyId : value,
 applicationId : value,
 platformType : value,
 body : value });

// Async/Await
const data = await configuration.updateBuildConfig( {  companyId : value,
 applicationId : value,
 platformType : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current application id |   
| platformType | string | yes | Current platform name |  
| body | [MobileAppConfigRequest](#MobileAppConfigRequest) | no | Request body |


Update build config for next build

*Returned Response:*




Success


[MobileAppConfiguration](#MobileAppConfiguration)

Success









---


#### getPreviousVersions
Get previous build versions



```javascript
// Promise
const promise = configuration.getPreviousVersions( {  companyId : value,
 applicationId : value,
 platformType : value });

// Async/Await
const data = await configuration.getPreviousVersions( {  companyId : value,
 applicationId : value,
 platformType : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current application id |   
| platformType | string | yes | Current platform name |  



Get previous build versions

*Returned Response:*




Success


[BuildVersionHistory](#BuildVersionHistory)

Success









---


#### getAppFeatures
Get features of application



```javascript
// Promise
const promise = configuration.getAppFeatures( {  companyId : value,
 applicationId : value });

// Async/Await
const data = await configuration.getAppFeatures( {  companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current application id |  



Get features of application

*Returned Response:*




Success


[AppFeatureResponse](#AppFeatureResponse)

Success









---


#### updateAppFeatures
Update features of application



```javascript
// Promise
const promise = configuration.updateAppFeatures( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await configuration.updateAppFeatures( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current application id |  
| body | [AppFeatureRequest](#AppFeatureRequest) | yes | Request body |


Update features of application

*Returned Response:*




Success


[AppFeature](#AppFeature)

Success









---


#### getAppBasicDetails
Get basic application details



```javascript
// Promise
const promise = configuration.getAppBasicDetails( {  companyId : value,
 applicationId : value });

// Async/Await
const data = await configuration.getAppBasicDetails( {  companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current application id |  



Get basic application details like name

*Returned Response:*




Success


[ApplicationDetail](#ApplicationDetail)

Success









---


#### updateAppBasicDetails
Add or update application's basic details



```javascript
// Promise
const promise = configuration.updateAppBasicDetails( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await configuration.updateAppBasicDetails( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current application id |  
| body | [ApplicationDetail](#ApplicationDetail) | yes | Request body |


Add or update application's basic details

*Returned Response:*




Success


[ApplicationDetail](#ApplicationDetail)

Success









---


#### getAppContactInfo
Get application information



```javascript
// Promise
const promise = configuration.getAppContactInfo( {  companyId : value,
 applicationId : value });

// Async/Await
const data = await configuration.getAppContactInfo( {  companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current application id |  



Get Application Current Information. This includes information about social links, address and contact information of company/seller/brand of the application.

*Returned Response:*




Success


[ApplicationInformation](#ApplicationInformation)

Success









---


#### updateAppContactInfo
Get application information



```javascript
// Promise
const promise = configuration.updateAppContactInfo( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await configuration.updateAppContactInfo( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current application id |  
| body | [ApplicationInformation](#ApplicationInformation) | yes | Request body |


Save Application Current Information. This includes information about social links, address and contact information of an application.

*Returned Response:*




Success


[ApplicationInformation](#ApplicationInformation)

Success









---


#### getAppApiTokens
Get social tokens



```javascript
// Promise
const promise = configuration.getAppApiTokens( {  companyId : value,
 applicationId : value });

// Async/Await
const data = await configuration.getAppApiTokens( {  companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current application id |  



Get social tokens.

*Returned Response:*




Success


[TokenResponse](#TokenResponse)

Success









---


#### updateAppApiTokens
Add social tokens



```javascript
// Promise
const promise = configuration.updateAppApiTokens( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await configuration.updateAppApiTokens( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current application id |  
| body | [TokenResponse](#TokenResponse) | no | Request body |


Add social tokens.

*Returned Response:*




Success


[TokenResponse](#TokenResponse)

Success









---


#### getAppCompanies
Application inventory enabled companies



```javascript
// Promise
const promise = configuration.getAppCompanies( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await configuration.getAppCompanies( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current application id |    
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |  



Application inventory enabled companies.

*Returned Response:*




Success


[CompaniesResponse](#CompaniesResponse)

Success









---


#### getAppStores
Application inventory enabled stores



```javascript
// Promise
const promise = configuration.getAppStores( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await configuration.getAppStores( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current application id |    
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |  



Application inventory enabled stores.

*Returned Response:*




Success


[StoresResponse](#StoresResponse)

Success









---


#### getInventoryConfig
Get application configuration



```javascript
// Promise
const promise = configuration.getInventoryConfig( {  companyId : value,
 applicationId : value });

// Async/Await
const data = await configuration.getInventoryConfig( {  companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current application id |  



Get application configuration for various features and data

*Returned Response:*




Success


[ApplicationInventory](#ApplicationInventory)

Success









---


#### updateInventoryConfig
Update application configuration



```javascript
// Promise
const promise = configuration.updateInventoryConfig( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await configuration.updateInventoryConfig( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current application id |  
| body | [ApplicationInventory](#ApplicationInventory) | no | Request body |


Update application configuration for various features and data

*Returned Response:*




Success


[ApplicationInventory](#ApplicationInventory)

Success









---


#### partiallyUpdateInventoryConfig
Partially update application configuration



```javascript
// Promise
const promise = configuration.partiallyUpdateInventoryConfig( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await configuration.partiallyUpdateInventoryConfig( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current application id |  
| body | [AppInventoryPartialUpdate](#AppInventoryPartialUpdate) | no | Request body |


Partially update application configuration for various features and data

*Returned Response:*




Success


[ApplicationInventory](#ApplicationInventory)

Success









---


#### getAppCurrencyConfig
Get application enabled currency list



```javascript
// Promise
const promise = configuration.getAppCurrencyConfig( {  companyId : value,
 applicationId : value });

// Async/Await
const data = await configuration.getAppCurrencyConfig( {  companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current application id |  



Get application enabled currency list

*Returned Response:*




Success


[AppSupportedCurrency](#AppSupportedCurrency)

Success









---


#### updateAppCurrencyConfig
Add initial application supported currency



```javascript
// Promise
const promise = configuration.updateAppCurrencyConfig( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await configuration.updateAppCurrencyConfig( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current application id |  
| body | [AppSupportedCurrency](#AppSupportedCurrency) | no | Request body |


Add initial application supported currency for various features and data. Default INR will be enabled.

*Returned Response:*




Success


[AppSupportedCurrency](#AppSupportedCurrency)

Success









---


#### getOrderingStoresByFilter
Get ordering store by filter



```javascript
// Promise
const promise = configuration.getOrderingStoresByFilter( {  companyId : value,
 applicationId : value,
 body : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await configuration.getOrderingStoresByFilter( {  companyId : value,
 applicationId : value,
 body : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current application id |    
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |  
| body | [FilterOrderingStoreRequest](#FilterOrderingStoreRequest) | no | Request body |


Get ordering store by filter

*Returned Response:*




Success


[OrderingStores](#OrderingStores)

Success









---


#### updateOrderingStoreConfig
Add/Update ordering store config



```javascript
// Promise
const promise = configuration.updateOrderingStoreConfig( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await configuration.updateOrderingStoreConfig( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current application id |  
| body | [OrderingStoreConfig](#OrderingStoreConfig) | no | Request body |


Add/Update ordering store config.

*Returned Response:*




Success


[DeploymentMeta](#DeploymentMeta)

Success









---


#### getDomains
Get attached domain list



```javascript
// Promise
const promise = configuration.getDomains( {  companyId : value,
 applicationId : value });

// Async/Await
const data = await configuration.getDomains( {  companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current application id |  



Get attached domain list.

*Returned Response:*




Success


[DomainsResponse](#DomainsResponse)

Success









---


#### addDomain
Add new domain to application



```javascript
// Promise
const promise = configuration.addDomain( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await configuration.addDomain( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current application id |  
| body | [DomainAddRequest](#DomainAddRequest) | no | Request body |


Add new domain to application.

*Returned Response:*




Success


[Domain](#Domain)

Success









---


#### removeDomainById
Remove attached domain



```javascript
// Promise
const promise = configuration.removeDomainById( {  companyId : value,
 applicationId : value,
 id : value });

// Async/Await
const data = await configuration.removeDomainById( {  companyId : value,
 applicationId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current application id |   
| id | string | yes | Domain _id |  



Remove attached domain.

*Returned Response:*




Success


[SuccessMessageResponse](#SuccessMessageResponse)

Success









---


#### changeDomainType
Change domain type



```javascript
// Promise
const promise = configuration.changeDomainType( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await configuration.changeDomainType( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current application id |  
| body | [UpdateDomainTypeRequest](#UpdateDomainTypeRequest) | no | Request body |


Change a domain to Primary or Shortlink domain

*Returned Response:*




Success


[DomainsResponse](#DomainsResponse)

Success









---


#### getDomainStatus
Get domain connected status.



```javascript
// Promise
const promise = configuration.getDomainStatus( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await configuration.getDomainStatus( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current application id |  
| body | [DomainStatusRequest](#DomainStatusRequest) | no | Request body |


Get domain connected status. Check if domain is live and mapped to appropriate IP to fynd servers.

*Returned Response:*




Success


[DomainStatusResponse](#DomainStatusResponse)

Success









---


#### createApplication
Create application



```javascript
// Promise
const promise = configuration.createApplication( {  companyId : value,
 body : value });

// Async/Await
const data = await configuration.createApplication( {  companyId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |  
| body | [CreateApplicationRequest](#CreateApplicationRequest) | no | Request body |


Create new application

*Returned Response:*




Success


[CreateAppResponse](#CreateAppResponse)

Success









---


#### getApplications
Get list of application under company



```javascript
// Promise
const promise = configuration.getApplications( {  companyId : value,
 pageNo : value,
 pageSize : value,
 q : value });

// Async/Await
const data = await configuration.getApplications( {  companyId : value,
 pageNo : value,
 pageSize : value,
 q : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |    
| pageNo | number | no |  |    
| pageSize | number | no |  |    
| q | string | no | Url encoded object used as mongodb query |  



Get list of application under company

*Returned Response:*




Success


[ApplicationsResponse](#ApplicationsResponse)

Success









---


#### getApplicationById
Get application data from id



```javascript
// Promise
const promise = configuration.getApplicationById( {  companyId : value,
 applicationId : value });

// Async/Await
const data = await configuration.getApplicationById( {  companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current application id |  



Get application data from id

*Returned Response:*




Success


[Application](#Application)

Success









---


#### getCurrencies
Get all currencies



```javascript
// Promise
const promise = configuration.getCurrencies( {  companyId : value });

// Async/Await
const data = await configuration.getCurrencies( {  companyId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |  



Get all currencies

*Returned Response:*




Currencies Success response


[CurrenciesResponse](#CurrenciesResponse)

Currencies Success response









---


#### getDomainAvailibility
Check domain availibility before linking to application



```javascript
// Promise
const promise = configuration.getDomainAvailibility( {  companyId : value,
 body : value });

// Async/Await
const data = await configuration.getDomainAvailibility( {  companyId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |  
| body | [DomainSuggestionsRequest](#DomainSuggestionsRequest) | no | Request body |


Check domain availibility before linking to application. Also sends domain suggestions with similar to queried domain. \ Custom domain search is currently powered by GoDaddy provider.

*Returned Response:*




Success


[DomainSuggestionsResponse](#DomainSuggestionsResponse)

Success


*Examples:*


Suggestions for fynd domains
```json
{
  "value": {
    "domains": [
      {
        "name": "test.hostx1.de",
        "is_available": false
      },
      {
        "name": "testhive.hostx1.de",
        "is_available": true
      }
    ]
  }
}
```

Suggestions for custom domains
```json
{
  "value": {
    "domains": [
      {
        "name": "test25.in",
        "unsupported": false,
        "is_available": false
      },
      {
        "name": "try25.in",
        "unsupported": false,
        "is_available": true,
        "price": 14.99,
        "currency": "USD"
      }
    ]
  }
}
```









---


#### getIntegrationById
Get integration data



```javascript
// Promise
const promise = configuration.getIntegrationById( {  companyId : value,
 id : value });

// Async/Await
const data = await configuration.getIntegrationById( {  companyId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| id | number | yes | Integration id |  



Get integration data

*Returned Response:*




Success


[Integration](#Integration)

Success









---


#### getAvailableOptIns
Get all available integration opt-ins



```javascript
// Promise
const promise = configuration.getAvailableOptIns( {  companyId : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await configuration.getAvailableOptIns( {  companyId : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |    
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |  



Get all available integration opt-ins

*Returned Response:*




Success


[GetIntegrationsOptInsResponse](#GetIntegrationsOptInsResponse)

Success









---


#### getSelectedOptIns
Get company/store level integration opt-ins



```javascript
// Promise
const promise = configuration.getSelectedOptIns( {  companyId : value,
 level : value,
 uid : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await configuration.getSelectedOptIns( {  companyId : value,
 level : value,
 uid : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| level | string | yes | Integration level |   
| uid | number | yes | Integration level uid |    
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |  



Get company/store level integration opt-ins

*Returned Response:*




Success


[GetIntegrationsOptInsResponse](#GetIntegrationsOptInsResponse)

Success









---


#### getIntegrationLevelConfig
Get integration level config



```javascript
// Promise
const promise = configuration.getIntegrationLevelConfig( {  companyId : value,
 id : value,
 level : value,
 opted : value,
 checkPermission : value });

// Async/Await
const data = await configuration.getIntegrationLevelConfig( {  companyId : value,
 id : value,
 level : value,
 opted : value,
 checkPermission : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| id | string | yes | Integration id |   
| level | string | yes | Integration level |    
| opted | boolean | no | Filter on opted stores |    
| checkPermission | boolean | no | Filter on if permissions are present |  



Get integration/integration-opt-in level config

*Returned Response:*




Success


[IntegrationConfigResponse](#IntegrationConfigResponse)

Success









---


#### getIntegrationByLevelId
Get level data for integration



```javascript
// Promise
const promise = configuration.getIntegrationByLevelId( {  companyId : value,
 id : value,
 level : value,
 uid : value });

// Async/Await
const data = await configuration.getIntegrationByLevelId( {  companyId : value,
 id : value,
 level : value,
 uid : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| id | string | yes | Integration id |   
| level | string | yes | Integration level |   
| uid | number | yes | Integration level uid |  



Get level data for integration

*Returned Response:*




Success


[IntegrationLevel](#IntegrationLevel)

Success









---


#### getLevelActiveIntegrations
Check store has active integration



```javascript
// Promise
const promise = configuration.getLevelActiveIntegrations( {  companyId : value,
 id : value,
 level : value,
 uid : value });

// Async/Await
const data = await configuration.getLevelActiveIntegrations( {  companyId : value,
 id : value,
 level : value,
 uid : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| id | string | yes | Integration id |   
| level | string | yes | Integration level |   
| uid | number | yes | Integration level uid |  



API checks if a store is already opted in any other integrations

*Returned Response:*




Success


[OptedStoreIntegration](#OptedStoreIntegration)

Success









---


#### getBrandsByCompany
Get brands by company



```javascript
// Promise
const promise = configuration.getBrandsByCompany( {  companyId : value,
 q : value });

// Async/Await
const data = await configuration.getBrandsByCompany( {  companyId : value,
 q : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |    
| q | string | no | Search text for brand name |  



Get brands by company

*Returned Response:*




Success


[BrandsByCompanyResponse](#BrandsByCompanyResponse)

Success









---


#### getCompanyByBrands
Get company by brand uids



```javascript
// Promise
const promise = configuration.getCompanyByBrands( {  companyId : value,
 body : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await configuration.getCompanyByBrands( {  companyId : value,
 body : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |    
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |  
| body | [CompanyByBrandsRequest](#CompanyByBrandsRequest) | no | Request body |


Get company by brand uids

*Returned Response:*




Success


[CompanyByBrandsResponse](#CompanyByBrandsResponse)

Success









---


#### getStoreByBrands
Get stores by brand uids



```javascript
// Promise
const promise = configuration.getStoreByBrands( {  companyId : value,
 body : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await configuration.getStoreByBrands( {  companyId : value,
 body : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |    
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |  
| body | [StoreByBrandsRequest](#StoreByBrandsRequest) | no | Request body |


Get stores by brand uids

*Returned Response:*




Success


[StoreByBrandsResponse](#StoreByBrandsResponse)

Success









---


#### getOtherSellerApplications
Get other seller applications



```javascript
// Promise
const promise = configuration.getOtherSellerApplications( {  companyId : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await configuration.getOtherSellerApplications( {  companyId : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |    
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |  



Get other seller applications who has opted current company as inventory

*Returned Response:*




Success


[OtherSellerApplications](#OtherSellerApplications)

Success









---


#### getOtherSellerApplicationById
Get other seller applications



```javascript
// Promise
const promise = configuration.getOtherSellerApplicationById( {  companyId : value,
 id : value });

// Async/Await
const data = await configuration.getOtherSellerApplicationById( {  companyId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| id | string | yes | Application Id |  



Get other seller application

*Returned Response:*




Success


[OptedApplicationResponse](#OptedApplicationResponse)

Success









---


#### optOutFromApplication
Opt out company or store from other seller application



```javascript
// Promise
const promise = configuration.optOutFromApplication( {  companyId : value,
 id : value,
 body : value });

// Async/Await
const data = await configuration.optOutFromApplication( {  companyId : value,
 id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| id | string | yes | Application Id |  
| body | [OptOutInventory](#OptOutInventory) | no | Request body |


Opt out company or store from other seller application

*Returned Response:*




Success


[SuccessMessageResponse](#SuccessMessageResponse)

Success









---





## Cart


#### getCoupons
Get with single coupon details or coupon list



```javascript
// Promise
const promise = cart.getCoupons( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value,
 isArchived : value,
 title : value,
 isPublic : value,
 isDisplay : value,
 typeSlug : value,
 code : value });

// Async/Await
const data = await cart.getCoupons( {  companyId : value,
 applicationId : value,
 pageNo : value,
 pageSize : value,
 isArchived : value,
 title : value,
 isPublic : value,
 isDisplay : value,
 typeSlug : value,
 code : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current Application _id |    
| pageNo | number | no |  |    
| pageSize | number | no |  |    
| isArchived | boolean | no |  |    
| title | string | no |  |    
| isPublic | boolean | no |  |    
| isDisplay | boolean | no |  |    
| typeSlug | string | no |  |    
| code | string | no |  |  



Get coupon list with pagination

*Returned Response:*




Coupon List for sent page_size and page_no


[CouponsResponse](#CouponsResponse)

Coupon List for sent page_size and page_no


*Examples:*


Coupon list for sent filter and page size
```json
{
  "value": {
    "items": [
      {
        "_id": "5e1d9bec6d6b7e000146c840",
        "display_meta": {
          "title": "percent50 title"
        },
        "_schedule": {
          "next_schedule": [
            {
              "start": "2020-01-14T10:45:03.600000+00:00",
              "end": "2020-01-16T10:45:03+00:00"
            }
          ],
          "duration": null,
          "start": "2020-01-14T10:45:03.600000+00:00",
          "end": "2020-01-16T10:45:03+00:00",
          "cron": ""
        },
        "state": {
          "is_public": true,
          "is_display": true,
          "is_archived": false
        },
        "ownership": {
          "payable_category": "seller",
          "payable_by": ""
        },
        "code": "percent50",
        "rule_definition": {
          "type": "percentage",
          "scope": [
            "category_id"
          ],
          "applicable_on": "quantity"
        }
      }
    ],
    "page": {
      "has_next": true,
      "size": 10,
      "current": 1,
      "item_total": 30
    }
  }
}
```









---


#### createCoupon
Create new coupon



```javascript
// Promise
const promise = cart.createCoupon( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await cart.createCoupon( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current Application _id |  
| body | [CouponAdd](#CouponAdd) | no | Request body |


Create new coupon

*Returned Response:*




Coupon Created successfully


[SuccessMessage](#SuccessMessage)

Coupon Created successfully









---


#### getCouponById
Get with single coupon details or coupon list



```javascript
// Promise
const promise = cart.getCouponById( {  companyId : value,
 applicationId : value,
 id : value });

// Async/Await
const data = await cart.getCouponById( {  companyId : value,
 applicationId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current Application _id |   
| id | string | yes |  |  



Get single coupon details with `id` in path param

*Returned Response:*




Coupon object for sent `id`


[CouponUpdate](#CouponUpdate)

Coupon object for sent `id`









---


#### updateCoupon
Update existing coupon configuration



```javascript
// Promise
const promise = cart.updateCoupon( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });

// Async/Await
const data = await cart.updateCoupon( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current Application _id |   
| id | string | yes |  |  
| body | [CouponUpdate](#CouponUpdate) | no | Request body |


Update coupon with id sent in `id`

*Returned Response:*




Coupon updated successfully


[SuccessMessage](#SuccessMessage)

Coupon updated successfully









---


#### updateCouponPartially
Update coupon archive state and schedule



```javascript
// Promise
const promise = cart.updateCouponPartially( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });

// Async/Await
const data = await cart.updateCouponPartially( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current Application _id |   
| id | string | yes |  |  
| body | [CouponPartialUpdate](#CouponPartialUpdate) | no | Request body |


Update archive/unarchive and change schedule for coupon

*Returned Response:*




Coupon updated successfully


[SuccessMessage](#SuccessMessage)

Coupon updated successfully


*Examples:*


Archive or Unarchive coupon
```json
{
  "value": {
    "success": true,
    "message": "Coupon Updated"
  }
}
```

Coupon schedule updated successfully
```json
{
  "value": {
    "success": true,
    "message": "Coupon schedule updated"
  }
}
```









---


#### fetchAndvalidateCartItems
Fetch Cart Details



```javascript
// Promise
const promise = cart.fetchAndvalidateCartItems( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await cart.fetchAndvalidateCartItems( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current Application _id |  
| body | [OpenapiCartDetailsRequest](#OpenapiCartDetailsRequest) | no | Request body |


Get all the details of cart for a list of provided `cart_items`

*Returned Response:*




Cart details with breakup


[OpenapiCartDetailsResponse](#OpenapiCartDetailsResponse)

Cart details with breakup









---


#### checkCartServiceability
Check Pincode Serviceability



```javascript
// Promise
const promise = cart.checkCartServiceability( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await cart.checkCartServiceability( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current Application _id |  
| body | [OpenApiCartServiceabilityRequest](#OpenApiCartServiceabilityRequest) | no | Request body |


Check Pincode serviceability for cart items provided in `cart_items` and address pincode in `shipping_address`

*Returned Response:*




Cart details with pincode validity information at item level


[OpenApiCartServiceabilityResponse](#OpenApiCartServiceabilityResponse)

Cart details with pincode validity information at item level


*Examples:*


Valid pincode
```json
{
  "value": {
    "items": [
      {
        "quantity": 1,
        "message": "",
        "coupon_message": "",
        "product": {
          "type": "product",
          "uid": 803140,
          "name": "Green Solid T-Shirt",
          "slug": "celio-green-solid-t-shirt-803140-dd9e2c",
          "brand": {
            "uid": 44,
            "name": "celio"
          },
          "categories": [
            {
              "uid": 192,
              "name": "T-Shirts"
            }
          ],
          "images": [
            {
              "aspect_ratio": "16:25",
              "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/44_NEMIEL@GREENBRITISH/1_1548161273344.jpg",
              "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/44_NEMIEL@GREENBRITISH/1_1548161273344.jpg"
            }
          ],
          "action": {
            "type": "product",
            "url": "https://api.addsale.com/platform/content/v1/products/celio-green-solid-t-shirt-803140-dd9e2c/",
            "query": {
              "product_slug": [
                "celio-green-solid-t-shirt-803140-dd9e2c"
              ]
            }
          }
        },
        "article": {
          "type": "article",
          "uid": "25_44_A7050_NEMIEL@GREENBRITISH_S",
          "size": "S",
          "seller": {
            "uid": 25,
            "name": "CELIO FUTURE FASHION PRIVATE LIMITED"
          },
          "store": {
            "uid": 1486,
            "name": "Forum Mall"
          },
          "quantity": 1,
          "price": {
            "base": {
              "marked": 1299,
              "effective": 649.5,
              "currency_code": "INR"
            },
            "converted": {
              "marked": 1299,
              "effective": 649.5,
              "currency_code": "INR"
            }
          }
        },
        "key": "803140_S",
        "discount": "50% OFF",
        "price": {
          "base": {
            "add_on": 0,
            "marked": 1299,
            "effective": 649.5,
            "selling": 649.5,
            "currency_code": "INR"
          },
          "converted": {
            "add_on": 0,
            "marked": 1299,
            "effective": 649.5,
            "selling": 649.5,
            "currency_code": "INR"
          }
        },
        "availability": {
          "sizes": [
            "L",
            "XL",
            "M",
            "S"
          ],
          "other_store_quantity": 0,
          "out_of_stock": false,
          "deliverable": true,
          "is_valid": true,
          "delivery_promise": {
            "timestamp": {
              "min": 1605306343,
              "max": 1605468343
            },
            "formatted": {
              "min": "Sat, 14 Nov",
              "max": "Mon, 16 Nov"
            }
          },
          "available_sizes": [
            {
              "is_available": true,
              "display": "L",
              "value": "L"
            },
            {
              "is_available": true,
              "display": "XXL",
              "value": "XXL"
            },
            {
              "is_available": true,
              "display": "XL",
              "value": "XL"
            },
            {
              "is_available": true,
              "display": "M",
              "value": "M"
            },
            {
              "is_available": true,
              "display": "S",
              "value": "S"
            },
            {
              "is_available": false,
              "display": "30",
              "value": "30"
            }
          ]
        },
        "bulk_offer": {}
      },
      {
        "quantity": 1,
        "message": "Out of stock. Please remove item",
        "coupon_message": "",
        "product": {
          "type": "product",
          "uid": 803140,
          "name": "Green Solid T-Shirt",
          "slug": "celio-green-solid-t-shirt-803140-dd9e2c",
          "brand": {
            "uid": 44,
            "name": "celio"
          },
          "categories": [
            {
              "uid": 192,
              "name": "T-Shirts"
            }
          ],
          "images": [
            {
              "aspect_ratio": "16:25",
              "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/44_NEMIEL@GREENBRITISH/1_1548161273344.jpg",
              "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/44_NEMIEL@GREENBRITISH/1_1548161273344.jpg"
            }
          ],
          "action": {
            "type": "product",
            "url": "https://api.addsale.com/platform/content/v1/products/celio-green-solid-t-shirt-803140-dd9e2c/",
            "query": {
              "product_slug": [
                "celio-green-solid-t-shirt-803140-dd9e2c"
              ]
            }
          }
        },
        "article": {},
        "key": "803140_S",
        "discount": "",
        "price": {
          "base": {
            "add_on": 0,
            "marked": 1299,
            "effective": 1299,
            "selling": 1299,
            "currency_code": "INR"
          },
          "converted": {
            "add_on": 0,
            "marked": 1299,
            "effective": 1299,
            "selling": 1299,
            "currency_code": "INR"
          }
        },
        "availability": {
          "sizes": [
            "L",
            "XXL",
            "XL",
            "M",
            "S"
          ],
          "other_store_quantity": 0,
          "out_of_stock": true,
          "deliverable": false,
          "is_valid": false,
          "delivery_promise": {
            "timestamp": {
              "min": 1605306343,
              "max": 1605468343
            },
            "formatted": {
              "min": "Sat, 14 Nov",
              "max": "Mon, 16 Nov"
            }
          },
          "available_sizes": [
            {
              "is_available": true,
              "display": "L",
              "value": "L"
            },
            {
              "is_available": true,
              "display": "XXL",
              "value": "XXL"
            },
            {
              "is_available": true,
              "display": "XL",
              "value": "XL"
            },
            {
              "is_available": true,
              "display": "M",
              "value": "M"
            },
            {
              "is_available": true,
              "display": "S",
              "value": "S"
            },
            {
              "is_available": false,
              "display": "30",
              "value": "30"
            }
          ]
        },
        "bulk_offer": {}
      }
    ],
    "delivery_promise": {
      "timestamp": {
        "min": 1605306343,
        "max": 1605468343
      },
      "formatted": {
        "min": "Sat, 14 Nov",
        "max": "Mon, 16 Nov"
      }
    },
    "is_valid": true
  }
}
```

Invalid pincode
```json
{
  "value": {
    "message": "All of the items in your cart are not deliverable to 800108",
    "is_valid": false,
    "items": [
      {
        "discount": "15% OFF",
        "price": {
          "base": {
            "add_on": 0,
            "marked": 2195,
            "effective": 1866,
            "selling": 1866,
            "currency_code": "INR"
          },
          "converted": {
            "add_on": 0,
            "marked": 2195,
            "effective": 1866,
            "selling": 1866,
            "currency_code": "INR"
          }
        },
        "product": {
          "type": "product",
          "uid": 876245,
          "name": "Brown Sandals",
          "slug": "red-chief-brown-sandals-876245-c92507",
          "brand": {
            "uid": 433,
            "name": ""
          },
          "categories": [
            {
              "uid": 176,
              "name": ""
            }
          ],
          "images": [
            {
              "aspect_ratio": "16:25",
              "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/433_RC330004/1_1564147181287.jpg",
              "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/433_RC330004/1_1564147181287.jpg"
            }
          ],
          "action": {
            "type": "product",
            "url": "https://api.addsale.com/platform/content/v1/products/red-chief-brown-sandals-876245-c92507/",
            "query": {
              "product_slug": [
                "red-chief-brown-sandals-876245-c92507"
              ]
            }
          },
          "item_code": "RC330004"
        },
        "bulk_offer": {},
        "key": "876245_6",
        "message": "We are not delivering to 800108",
        "delivery_promise": null,
        "coupon_message": "",
        "availability": {
          "sizes": [
            "7",
            "6",
            "10",
            "8"
          ],
          "other_store_quantity": 21,
          "out_of_stock": false,
          "deliverable": false,
          "is_valid": true,
          "available_sizes": [
            {
              "is_available": false,
              "display": "9",
              "value": "9"
            },
            {
              "is_available": true,
              "display": "10",
              "value": "10"
            },
            {
              "is_available": true,
              "display": "6",
              "value": "6"
            },
            {
              "is_available": true,
              "display": "7",
              "value": "7"
            },
            {
              "is_available": true,
              "display": "8",
              "value": "8"
            }
          ]
        },
        "quantity": 1,
        "article": {
          "type": "article",
          "uid": "304_433_LGPL30402_RC330004_6",
          "size": "6",
          "seller": {
            "uid": 304,
            "name": "LEAYAN GLOBAL PVT. LTD."
          },
          "store": {
            "uid": 9767,
            "name": "Udyog Kunj, Kanpur"
          },
          "quantity": 3,
          "price": {
            "base": {
              "marked": 2195,
              "effective": 1866,
              "currency_code": "INR"
            },
            "converted": {
              "marked": 2195,
              "effective": 1866,
              "currency_code": "INR"
            }
          }
        }
      },
      {
        "discount": "15% OFF",
        "price": {
          "base": {
            "add_on": 0,
            "marked": 2195,
            "effective": 1866,
            "selling": 1866,
            "currency_code": "INR"
          },
          "converted": {
            "add_on": 0,
            "marked": 2195,
            "effective": 1866,
            "selling": 1866,
            "currency_code": "INR"
          }
        },
        "product": {
          "type": "product",
          "uid": 876245,
          "name": "Brown Sandals",
          "slug": "red-chief-brown-sandals-876245-c92507",
          "brand": {
            "uid": 433,
            "name": ""
          },
          "categories": [
            {
              "uid": 176,
              "name": ""
            }
          ],
          "images": [
            {
              "aspect_ratio": "16:25",
              "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/433_RC330004/1_1564147181287.jpg",
              "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/433_RC330004/1_1564147181287.jpg"
            }
          ],
          "action": {
            "type": "product",
            "url": "https://api.addsale.com/platform/content/v1/products/red-chief-brown-sandals-876245-c92507/",
            "query": {
              "product_slug": [
                "red-chief-brown-sandals-876245-c92507"
              ]
            }
          },
          "item_code": "RC330004"
        },
        "bulk_offer": {},
        "key": "876245_6",
        "message": "We are not delivering to 800108",
        "coupon_message": "",
        "availability": {
          "sizes": [
            "7",
            "6",
            "10",
            "8"
          ],
          "other_store_quantity": 21,
          "out_of_stock": false,
          "deliverable": false,
          "is_valid": true,
          "available_sizes": [
            {
              "is_available": false,
              "display": "9",
              "value": "9"
            },
            {
              "is_available": true,
              "display": "10",
              "value": "10"
            },
            {
              "is_available": true,
              "display": "6",
              "value": "6"
            },
            {
              "is_available": true,
              "display": "7",
              "value": "7"
            },
            {
              "is_available": true,
              "display": "8",
              "value": "8"
            }
          ]
        },
        "quantity": 1,
        "article": {
          "type": "article",
          "uid": "304_433_LGPL30402_RC330004_6",
          "size": "6",
          "seller": {
            "uid": 304,
            "name": "LEAYAN GLOBAL PVT. LTD."
          },
          "store": {
            "uid": 9767,
            "name": "Udyog Kunj, Kanpur"
          },
          "quantity": 3,
          "price": {
            "base": {
              "marked": 2195,
              "effective": 1866,
              "currency_code": "INR"
            },
            "converted": {
              "marked": 2195,
              "effective": 1866,
              "currency_code": "INR"
            }
          }
        }
      }
    ]
  }
}
```









---


#### checkoutCart
Create Fynd order with cart details



```javascript
// Promise
const promise = cart.checkoutCart( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await cart.checkoutCart( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current Application _id |  
| body | [OpenApiPlatformCheckoutReq](#OpenApiPlatformCheckoutReq) | no | Request body |


Generate Fynd order for cart details send with provided `cart_items`

*Returned Response:*




Checkout cart and create Fynd order id


[OpenApiCheckoutResponse](#OpenApiCheckoutResponse)

Checkout cart and create Fynd order id









---





## Rewards


#### getGiveaways
List of giveaways of the current application.



```javascript
// Promise
const promise = rewards.getGiveaways( {  companyId : value,
 applicationId : value,
 pageId : value,
 pageSize : value });

// Async/Await
const data = await rewards.getGiveaways( {  companyId : value,
 applicationId : value,
 pageId : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | company id |   
| applicationId | string | yes | application id |    
| pageId | string | no | pagination page id |    
| pageSize | number | no | pagination page size |  



List of giveaways of the current application.

*Returned Response:*




ok


[GiveawayResponse](#GiveawayResponse)

ok









---


#### createGiveaway
Adds a new giveaway.



```javascript
// Promise
const promise = rewards.createGiveaway( {  companyId : value,
 applicationId : value,
 body : value });

// Async/Await
const data = await rewards.createGiveaway( {  companyId : value,
 applicationId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | company id |   
| applicationId | string | yes | application id |  
| body | [Giveaway](#Giveaway) | yes | Request body |


Adds a new giveaway.

*Returned Response:*




ok


[Giveaway](#Giveaway)

ok









---


#### getGiveawayByID
Get giveaway by ID.



```javascript
// Promise
const promise = rewards.getGiveawayByID( {  companyId : value,
 applicationId : value,
 id : value });

// Async/Await
const data = await rewards.getGiveawayByID( {  companyId : value,
 applicationId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | company id |   
| applicationId | string | yes | application id |   
| id | string | yes | Giveaway ID |  



Get giveaway by ID.

*Returned Response:*




ok


[Giveaway](#Giveaway)

ok









---


#### updateGiveaway
Updates the giveaway by it's ID.



```javascript
// Promise
const promise = rewards.updateGiveaway( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });

// Async/Await
const data = await rewards.updateGiveaway( {  companyId : value,
 applicationId : value,
 id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | company id |   
| applicationId | string | yes | application id |   
| id | string | yes | Giveaway ID |  
| body | [Giveaway](#Giveaway) | yes | Request body |


Updates the giveaway by it's ID.

*Returned Response:*




ok


[Giveaway](#Giveaway)

ok









---


#### getOffers
List of offer of the current application.



```javascript
// Promise
const promise = rewards.getOffers( {  companyId : value,
 applicationId : value });

// Async/Await
const data = await rewards.getOffers( {  companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | company id |   
| applicationId | string | yes | application id |  



List of offer of the current application.

*Returned Response:*




ok


[Array<Offer>](#Array<Offer>)

ok









---


#### getOfferByName
Get offer by name.



```javascript
// Promise
const promise = rewards.getOfferByName( {  companyId : value,
 applicationId : value,
 cookie : value,
 name : value });

// Async/Await
const data = await rewards.getOfferByName( {  companyId : value,
 applicationId : value,
 cookie : value,
 name : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | company id |   
| applicationId | string | yes | application id |   
| cookie | string | yes | User's session cookie. This cookie is set in browser cookie when logged-in to fynd's authentication system i.e. `Grimlock` or by using grimlock-backend SDK for backend implementation. |   
| name | string | yes | Offer name |  



Get offer by name.

*Returned Response:*




ok


[Offer](#Offer)

ok









---


#### updateOfferByName
Updates the offer by name.



```javascript
// Promise
const promise = rewards.updateOfferByName( {  companyId : value,
 applicationId : value,
 name : value,
 body : value });

// Async/Await
const data = await rewards.updateOfferByName( {  companyId : value,
 applicationId : value,
 name : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | company id |   
| applicationId | string | yes | application id |   
| name | string | yes | Offer name |  
| body | [Offer](#Offer) | yes | Request body |


Updates the offer by name.

*Returned Response:*




ok


[Offer](#Offer)

ok









---


#### getUserAvailablePoints
User's reward details.



```javascript
// Promise
const promise = rewards.getUserAvailablePoints( {  companyId : value,
 applicationId : value,
 userId : value });

// Async/Await
const data = await rewards.getUserAvailablePoints( {  companyId : value,
 applicationId : value,
 userId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | company id |   
| applicationId | string | yes | application id |   
| userId | string | yes | user id |  



User's reward details.

*Returned Response:*




ok


[UserRes](#UserRes)

ok









---


#### updateUserStatus
Update User status



```javascript
// Promise
const promise = rewards.updateUserStatus( {  companyId : value,
 applicationId : value,
 userId : value,
 body : value });

// Async/Await
const data = await rewards.updateUserStatus( {  companyId : value,
 applicationId : value,
 userId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | company id |   
| applicationId | string | yes | application id |   
| userId | string | yes | user id |  
| body | [AppUser](#AppUser) | yes | Request body |


Update user status, active/archive

*Returned Response:*




Success


[AppUser](#AppUser)

Success









---


#### getUserPointsHistory
Get list of points transactions.



```javascript
// Promise
const promise = rewards.getUserPointsHistory( {  companyId : value,
 applicationId : value,
 userId : value,
 pageId : value,
 pageLimit : value,
 pageSize : value });

// Async/Await
const data = await rewards.getUserPointsHistory( {  companyId : value,
 applicationId : value,
 userId : value,
 pageId : value,
 pageLimit : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | company id |   
| applicationId | string | yes | application id |   
| userId | string | yes | user id |    
| pageId | string | no | PageID is the ID of the requested page. For first request it should be kept empty. |    
| pageLimit | number | no | PageLimit is the number of requested items in response. |    
| pageSize | number | no | PageSize is the number of requested items in response. |  



Get list of points transactions.
The list of points history is paginated.

*Returned Response:*




ok


[HistoryRes](#HistoryRes)

ok









---





## Analytics


#### getStatiscticsGroups
Get statistics groups



```javascript
// Promise
const promise = analytics.getStatiscticsGroups( {  companyId : value,
 applicationId : value });

// Async/Await
const data = await analytics.getStatiscticsGroups( {  companyId : value,
 applicationId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |  



Get statistics groups

*Returned Response:*




Success


[StatsGroups](#StatsGroups)

Success









---


#### getStatiscticsGroupComponents
Get statistics group components



```javascript
// Promise
const promise = analytics.getStatiscticsGroupComponents( {  companyId : value,
 applicationId : value,
 groupName : value });

// Async/Await
const data = await analytics.getStatiscticsGroupComponents( {  companyId : value,
 applicationId : value,
 groupName : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |   
| groupName | string | yes | Group name |  



Get statistics group components

*Returned Response:*




Success


[StatsGroupComponents](#StatsGroupComponents)

Success









---


#### getComponentStatsCSV
Get component statistics csv



```javascript
// Promise
const promise = analytics.getComponentStatsCSV( {  companyId : value,
 applicationId : value,
 componentName : value });

// Async/Await
const data = await analytics.getComponentStatsCSV( {  companyId : value,
 applicationId : value,
 componentName : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |   
| componentName | string | yes | Component name |  



Get component statistics csv

*Returned Response:*




Success


[string](#string)

Success









---


#### getComponentStatsPDF
Get component statistics pdf



```javascript
// Promise
const promise = analytics.getComponentStatsPDF( {  companyId : value,
 applicationId : value,
 componentName : value });

// Async/Await
const data = await analytics.getComponentStatsPDF( {  companyId : value,
 applicationId : value,
 componentName : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |   
| componentName | string | yes | Component name |  



Get component statistics pdf

*Returned Response:*




Success


[string](#string)

Success









---


#### getComponentStats
Get component statistics



```javascript
// Promise
const promise = analytics.getComponentStats( {  companyId : value,
 applicationId : value,
 componentName : value });

// Async/Await
const data = await analytics.getComponentStats( {  companyId : value,
 applicationId : value,
 componentName : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |   
| componentName | string | yes | Component name |  



Get component statistics

*Returned Response:*




Success


[StatsRes](#StatsRes)

Success









---


#### getAbandonCartList
Get abandon carts list



```javascript
// Promise
const promise = analytics.getAbandonCartList( {  companyId : value,
 applicationId : value,
 fromDate : value,
 toDate : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await analytics.getAbandonCartList( {  companyId : value,
 applicationId : value,
 fromDate : value,
 toDate : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |   
| fromDate | string | yes | From date |   
| toDate | string | yes | To date |    
| pageNo | number | no | Current page number |    
| pageSize | number | no | Current page size |  



Get abandon carts list

*Returned Response:*




Success


[AbandonCartsList](#AbandonCartsList)

Success









---


#### getAbandonCartsCSV
Get abandon carts csv



```javascript
// Promise
const promise = analytics.getAbandonCartsCSV( {  companyId : value,
 applicationId : value,
 fromDate : value,
 toDate : value });

// Async/Await
const data = await analytics.getAbandonCartsCSV( {  companyId : value,
 applicationId : value,
 fromDate : value,
 toDate : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |   
| fromDate | string | yes | From date |   
| toDate | string | yes | To date |  



Get abandon carts csv

*Returned Response:*




Success


[string](#string)

Success









---


#### getAbandonCartDetail
Get abandon carts details



```javascript
// Promise
const promise = analytics.getAbandonCartDetail( {  companyId : value,
 applicationId : value,
 cartId : value });

// Async/Await
const data = await analytics.getAbandonCartDetail( {  companyId : value,
 applicationId : value,
 cartId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |   
| cartId | string | yes | Cart Id |  



Get abandon cart details

*Returned Response:*




Success


[AbandonCartDetail](#AbandonCartDetail)

Success









---


#### createExportJob
Create data export job in required format



```javascript
// Promise
const promise = analytics.createExportJob( {  companyId : value,
 exportType : value,
 body : value });

// Async/Await
const data = await analytics.createExportJob( {  companyId : value,
 exportType : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| exportType | string | yes | Export type / format |  
| body | [ExportJobReq](#ExportJobReq) | no | Request body |


Create data export job in required format

*Returned Response:*




Success


[ExportJobRes](#ExportJobRes)

Success









---


#### getExportJobStatus
Get data export job status



```javascript
// Promise
const promise = analytics.getExportJobStatus( {  companyId : value,
 exportType : value,
 jobId : value });

// Async/Await
const data = await analytics.getExportJobStatus( {  companyId : value,
 exportType : value,
 jobId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| exportType | string | yes | Export type / format |   
| jobId | string | yes | Export job id |  



Get data export job status

*Returned Response:*




Success


[ExportJobStatusRes](#ExportJobStatusRes)

Success









---


#### getLogsList
Get logs list



```javascript
// Promise
const promise = analytics.getLogsList( {  companyId : value,
 logType : value,
 body : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await analytics.getLogsList( {  companyId : value,
 logType : value,
 body : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| logType | string | yes | Log type |    
| pageNo | number | no | Current page number |    
| pageSize | number | no | Current page size |  
| body | [GetLogsListReq](#GetLogsListReq) | no | Request body |


Get logs list

*Returned Response:*




Success


[GetLogsListRes](#GetLogsListRes)

Success









---


#### searchLogs
Search logs



```javascript
// Promise
const promise = analytics.searchLogs( {  companyId : value,
 logType : value,
 body : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await analytics.searchLogs( {  companyId : value,
 logType : value,
 body : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |    
| pageNo | number | no | Current page number |    
| pageSize | number | no | Current page size |   
| logType | string | yes | Log type |  
| body | [SearchLogReq](#SearchLogReq) | no | Request body |


Search logs

*Returned Response:*




Success


[SearchLogRes](#SearchLogRes)

Success









---





## Discount


#### getDiscounts
Fetch discount list.



```javascript
// Promise
const promise = discount.getDiscounts( {  companyId : value,
 view : value,
 q : value,
 pageNo : value,
 pageSize : value,
 archived : value,
 month : value,
 year : value,
 type : value,
 appIds : value });

// Async/Await
const data = await discount.getDiscounts( {  companyId : value,
 view : value,
 q : value,
 pageNo : value,
 pageSize : value,
 archived : value,
 month : value,
 year : value,
 type : value,
 appIds : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | company_id |    
| view | string | no | listing or calender.  Default is listing. |    
| q | string | no | The search query. This can be a partial or complete name of a discount. |    
| pageNo | number | no | page number. Default is 1. |    
| pageSize | number | no | page size. Default is 12. |    
| archived | boolean | no | archived. Default is false. |    
| month | number | no | month. Default is current month. |    
| year | number | no | year. Default is current year. |    
| type | string | no | basic or custom. |    
| appIds | Array<string> | no | application ids. |  



Fetch discount list.

*Returned Response:*




Success


[ListOrCalender](#ListOrCalender)

Success









---


#### createDiscount
Create Discount.



```javascript
// Promise
const promise = discount.createDiscount( {  companyId : value,
 body : value });

// Async/Await
const data = await discount.createDiscount( {  companyId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | company_id |  
| body | [CreateUpdateDiscount](#CreateUpdateDiscount) | yes | Request body |


Create Discount.

*Returned Response:*




Success


[DiscountJob](#DiscountJob)

Success









---


#### getDiscount
Fetch discount.



```javascript
// Promise
const promise = discount.getDiscount( {  companyId : value,
 id : value });

// Async/Await
const data = await discount.getDiscount( {  companyId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | company_id |   
| id | string | yes | unique id. |  



Fetch discount.

*Returned Response:*




Success


[DiscountJob](#DiscountJob)

Success









---


#### updateDiscount
Create Discount.



```javascript
// Promise
const promise = discount.updateDiscount( {  companyId : value,
 id : value,
 body : value });

// Async/Await
const data = await discount.updateDiscount( {  companyId : value,
 id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | company_id |   
| id | string | yes | id |  
| body | [CreateUpdateDiscount](#CreateUpdateDiscount) | yes | Request body |


Create Discount.

*Returned Response:*




Success


[DiscountJob](#DiscountJob)

Success









---


#### validateDiscountFile
Validate File.



```javascript
// Promise
const promise = discount.validateDiscountFile( {  companyId : value,
 body : value,
 discount : value });

// Async/Await
const data = await discount.validateDiscountFile( {  companyId : value,
 body : value,
 discount : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | company_id |    
| discount | string | no | discount |  
| body | [DiscountJob](#DiscountJob) | yes | Request body |


Validate File.

*Returned Response:*




Success


[FileJobResponse](#FileJobResponse)

Success









---


#### downloadDiscountFile
Validate File.



```javascript
// Promise
const promise = discount.downloadDiscountFile( {  companyId : value,
 type : value,
 body : value });

// Async/Await
const data = await discount.downloadDiscountFile( {  companyId : value,
 type : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | company_id |   
| type | string | yes | type |  
| body | [DownloadFileJob](#DownloadFileJob) | yes | Request body |


Validate File.

*Returned Response:*




Success


[FileJobResponse](#FileJobResponse)

Success









---


#### getValidationJob
Validate File Job.



```javascript
// Promise
const promise = discount.getValidationJob( {  companyId : value,
 id : value });

// Async/Await
const data = await discount.getValidationJob( {  companyId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | company_id |   
| id | string | yes | id |  



Validate File Job.

*Returned Response:*




Success


[FileJobResponse](#FileJobResponse)

Success









---


#### cancelValidationJob
Cancel Validation Job.



```javascript
// Promise
const promise = discount.cancelValidationJob( {  companyId : value,
 id : value });

// Async/Await
const data = await discount.cancelValidationJob( {  companyId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | company_id |   
| id | string | yes | id |  



Cancel Validation Job.

*Returned Response:*




Success


[CancelJobResponse](#CancelJobResponse)

Success









---


#### getDownloadJob
Download File Job.



```javascript
// Promise
const promise = discount.getDownloadJob( {  companyId : value,
 id : value });

// Async/Await
const data = await discount.getDownloadJob( {  companyId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | company_id |   
| id | string | yes | id |  



Download File Job.

*Returned Response:*




Success


[FileJobResponse](#FileJobResponse)

Success









---


#### cancelDownloadJob
Cancel Download Job.



```javascript
// Promise
const promise = discount.cancelDownloadJob( {  companyId : value,
 id : value });

// Async/Await
const data = await discount.cancelDownloadJob( {  companyId : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | company_id |   
| id | string | yes | id |  



Cancel Download Job.

*Returned Response:*




Success


[CancelJobResponse](#CancelJobResponse)

Success









---





## Partner


#### addProxyPath
Add proxy path for external url



```javascript
// Promise
const promise = partner.addProxyPath( {  companyId : value,
 applicationId : value,
 extensionId : value,
 body : value });

// Async/Await
const data = await partner.addProxyPath( {  companyId : value,
 applicationId : value,
 extensionId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current application id |   
| extensionId | string | yes | Extension id |  
| body | [AddProxyReq](#AddProxyReq) | no | Request body |


Add proxy path for external url

*Returned Response:*




Success


[AddProxyResponse](#AddProxyResponse)

Success









---


#### removeProxyPath
Remove proxy path for external url



```javascript
// Promise
const promise = partner.removeProxyPath( {  companyId : value,
 applicationId : value,
 extensionId : value,
 attachedPath : value });

// Async/Await
const data = await partner.removeProxyPath( {  companyId : value,
 applicationId : value,
 extensionId : value,
 attachedPath : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Current company id |   
| applicationId | string | yes | Current application id |   
| extensionId | string | yes | Extension id |   
| attachedPath | string | yes | Attachaed path slug |  



Remove proxy path for external url

*Returned Response:*




Success


[RemoveProxyResponse](#RemoveProxyResponse)

Success









---





## Webhook


#### getSubscribersByCompany
Get Subscribers By Company ID



```javascript
// Promise
const promise = webhook.getSubscribersByCompany( {  companyId : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await webhook.getSubscribersByCompany( {  companyId : value,
 pageNo : value,
 pageSize : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | Page Number |    
| pageSize | number | no | Page Size |   
| companyId | number | yes | Company ID of the application |  



Get Subscribers By CompanyId

*Returned Response:*




Success


[SubscriberResponse](#SubscriberResponse)

Success









---


#### registerSubscriberToEvent
Register Subscriber



```javascript
// Promise
const promise = webhook.registerSubscriberToEvent( {  companyId : value,
 body : value });

// Async/Await
const data = await webhook.registerSubscriberToEvent( {  companyId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company Id of the application |  
| body | [SubscriberConfig](#SubscriberConfig) | no | Request body |


Register Subscriber

*Returned Response:*




Success


[SubscriberConfig](#SubscriberConfig)

Success









---


#### updateSubscriberConfig
Update Subscriber



```javascript
// Promise
const promise = webhook.updateSubscriberConfig( {  companyId : value,
 body : value });

// Async/Await
const data = await webhook.updateSubscriberConfig( {  companyId : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company ID of the application |  
| body | [SubscriberConfig](#SubscriberConfig) | no | Request body |


Update Subscriber

*Returned Response:*




Success


[SubscriberConfig](#SubscriberConfig)

Success









---


#### getSubscriberById
Get Subscriber By Subscriber ID



```javascript
// Promise
const promise = webhook.getSubscriberById( {  companyId : value,
 subscriberId : value });

// Async/Await
const data = await webhook.getSubscriberById( {  companyId : value,
 subscriberId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company ID of the application |   
| subscriberId | number | yes | Subscriber ID |  



Get Subscriber By Subscriber ID

*Returned Response:*




Success


[SubscriberResponse](#SubscriberResponse)

Success









---


#### fetchAllEventConfigurations
Get All Webhook Events



```javascript
// Promise
const promise = webhook.fetchAllEventConfigurations( {  companyId : value });

// Async/Await
const data = await webhook.fetchAllEventConfigurations( {  companyId : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | number | yes | Company ID of the application |  



Get All Webhook Events

*Returned Response:*




Success


[EventConfigList](#EventConfigList)

Success









---





### Schemas


 
 
 #### [ProductDetailAttribute](#ProductDetailAttribute)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string |  no  |  |
 | value | string |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [ProductDetailGroupedAttribute](#ProductDetailGroupedAttribute)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | details | [[ProductDetailAttribute](#ProductDetailAttribute)] |  no  |  |

---


 
 
 #### [Meta](#Meta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | source | string |  no  |  |

---


 
 
 #### [Media](#Media)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | meta | [Meta](#Meta) |  no  |  |
 | url | string |  no  |  |

---


 
 
 #### [ProductListingActionPage](#ProductListingActionPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | params | string |  no  |  |
 | query | string |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [ProductListingAction](#ProductListingAction)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | page | [ProductListingActionPage](#ProductListingActionPage) |  no  |  |

---


 
 
 #### [ProductBrand](#ProductBrand)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | uid | number |  no  |  |
 | logo | [Media](#Media) |  no  |  |
 | action | [ProductListingAction](#ProductListingAction) |  no  |  |

---


 
 
 #### [Price](#Price)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | currency_code | string |  no  |  |
 | min | number |  no  |  |
 | currency_symbol | string |  no  |  |
 | max | number |  no  |  |

---


 
 
 #### [ProductListingPrice](#ProductListingPrice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | marked | [Price](#Price) |  no  |  |
 | effective | [Price](#Price) |  no  |  |

---


 
 
 #### [ProductDetail](#ProductDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | grouped_attributes | [[ProductDetailGroupedAttribute](#ProductDetailGroupedAttribute)] |  no  |  |
 | short_description | string |  no  |  |
 | highlights | [string] |  no  |  |
 | rating_count | number |  no  |  |
 | teaser_tag | string |  no  |  |
 | categories | [[ProductBrand](#ProductBrand)] |  no  |  |
 | medias | [[Media](#Media)] |  no  |  |
 | attributes | string |  no  |  |
 | item_code | string |  no  |  |
 | price | [ProductListingPrice](#ProductListingPrice) |  no  |  |
 | uid | number |  no  |  |
 | brand | [ProductBrand](#ProductBrand) |  no  |  |
 | name | string |  no  |  |
 | image_nature | string |  no  |  |
 | description | string |  no  |  |
 | slug | string |  yes  |  |
 | item_type | string |  no  |  |
 | has_variant | boolean |  no  |  |
 | similars | [string] |  no  |  |
 | discount | string |  no  |  |
 | action | [ProductListingAction](#ProductListingAction) |  no  |  |
 | color | string |  no  |  |
 | type | string |  no  |  |
 | product_online_date | string |  no  |  |
 | rating | number |  no  |  |
 | tryouts | [string] |  no  |  |

---


 
 
 #### [ErrorResponse](#ErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | string |  no  |  |

---


 
 
 #### [ColumnHeader](#ColumnHeader)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | convertable | boolean |  no  |  |
 | value | string |  no  |  |

---


 
 
 #### [ColumnHeaders](#ColumnHeaders)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | col_2 | [ColumnHeader](#ColumnHeader) |  no  |  |
 | col_1 | [ColumnHeader](#ColumnHeader) |  no  |  |
 | col_4 | [ColumnHeader](#ColumnHeader) |  no  |  |
 | col_6 | [ColumnHeader](#ColumnHeader) |  no  |  |
 | col_5 | [ColumnHeader](#ColumnHeader) |  no  |  |
 | col_3 | [ColumnHeader](#ColumnHeader) |  no  |  |

---


 
 
 #### [SizeChartValues](#SizeChartValues)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | col_2 | string |  no  |  |
 | col_1 | string |  no  |  |
 | col_4 | string |  no  |  |
 | col_6 | string |  no  |  |
 | col_5 | string |  no  |  |
 | col_3 | string |  no  |  |

---


 
 
 #### [SizeChart](#SizeChart)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | headers | [ColumnHeaders](#ColumnHeaders) |  no  |  |
 | description | string |  no  |  |
 | sizes | [[SizeChartValues](#SizeChartValues)] |  no  |  |
 | image | string |  no  |  |
 | unit | string |  no  |  |
 | size_tip | string |  no  |  |
 | title | string |  no  |  |

---


 
 
 #### [ProductSizeStores](#ProductSizeStores)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | count | number |  no  |  |

---


 
 
 #### [ProductSize](#ProductSize)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_available | boolean |  no  |  |
 | value | string |  no  |  |
 | quantity | number |  no  |  |
 | display | string |  no  |  |

---


 
 
 #### [ProductSizes](#ProductSizes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | discount | string |  no  |  |
 | size_chart | [SizeChart](#SizeChart) |  no  |  |
 | sellable | boolean |  no  |  |
 | stores | [ProductSizeStores](#ProductSizeStores) |  no  |  |
 | sizes | [[ProductSize](#ProductSize)] |  no  |  |
 | price | [ProductListingPrice](#ProductListingPrice) |  no  |  |

---


 
 
 #### [Seller](#Seller)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | uid | number |  no  |  |
 | count | number |  no  |  |

---


 
 
 #### [ProductSetDistributionSize](#ProductSetDistributionSize)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | size | string |  no  |  |
 | pieces | number |  no  |  |

---


 
 
 #### [ProductSetDistribution](#ProductSetDistribution)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sizes | [[ProductSetDistributionSize](#ProductSetDistributionSize)] |  no  |  |

---


 
 
 #### [ProductSet](#ProductSet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | quantity | number |  no  |  |
 | size_distribution | [ProductSetDistribution](#ProductSetDistribution) |  no  |  |

---


 
 
 #### [ArticleAssignment](#ArticleAssignment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | level | string |  no  |  |
 | strategy | string |  no  |  |

---


 
 
 #### [StrategyWiseListing](#StrategyWiseListing)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | quantity | number |  no  |  |
 | distance | number |  no  |  |
 | pincode | number |  no  |  |
 | tat | number |  no  |  |

---


 
 
 #### [ProductStockPrice](#ProductStockPrice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | marked | number |  no  |  |
 | effective | number |  no  |  |
 | currency | string |  no  |  |

---


 
 
 #### [Details](#Details)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string |  no  |  |
 | value | string |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [MarketPlaceSttributes](#MarketPlaceSttributes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | details | [[Details](#Details)] |  no  |  |

---


 
 
 #### [ReturnConfig](#ReturnConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | unit | string |  no  |  |
 | returnable | boolean |  no  |  |
 | time | number |  no  |  |

---


 
 
 #### [Store](#Store)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | uid | number |  no  |  |
 | count | number |  no  |  |

---


 
 
 #### [ProductSizePriceResponse](#ProductSizePriceResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | seller | [Seller](#Seller) |  no  |  |
 | set | [ProductSet](#ProductSet) |  no  |  |
 | seller_count | number |  no  |  |
 | discount | string |  no  |  |
 | article_assignment | [ArticleAssignment](#ArticleAssignment) |  no  |  |
 | strategy_wise_listing | [[StrategyWiseListing](#StrategyWiseListing)] |  no  |  |
 | price_per_piece | [ProductStockPrice](#ProductStockPrice) |  no  |  |
 | marketplace_attributes | [[MarketPlaceSttributes](#MarketPlaceSttributes)] |  no  |  |
 | quantity | number |  no  |  |
 | item_type | string |  no  |  |
 | article_id | string |  no  |  |
 | return_config | [ReturnConfig](#ReturnConfig) |  no  |  |
 | long_lat | [number] |  no  |  |
 | store | [Store](#Store) |  no  |  |
 | price | [ProductStockPrice](#ProductStockPrice) |  no  |  |
 | pincode | number |  no  |  |
 | special_badge | string |  no  |  |

---


 
 
 #### [ProductSizeSellerFilter](#ProductSizeSellerFilter)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | value | string |  no  |  |
 | is_selected | boolean |  no  |  |

---


 
 
 #### [ProductSizeSellersResponse](#ProductSizeSellersResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ProductSizePriceResponse](#ProductSizePriceResponse)] |  no  |  |
 | sort_on | [[ProductSizeSellerFilter](#ProductSizeSellerFilter)] |  no  |  |
 | page | [Page](#Page) |  yes  |  |

---


 
 
 #### [AttributeDetail](#AttributeDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string |  no  |  |
 | logo | string |  no  |  |
 | description | string |  no  |  |
 | display | string |  no  |  |

---


 
 
 #### [AttributeMetadata](#AttributeMetadata)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | details | [[AttributeDetail](#AttributeDetail)] |  no  |  |

---


 
 
 #### [ProductsComparisonResponse](#ProductsComparisonResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ProductDetail](#ProductDetail)] |  no  |  |
 | attributes_metadata | [[AttributeMetadata](#AttributeMetadata)] |  no  |  |

---


 
 
 #### [ProductCompareResponse](#ProductCompareResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ProductDetail](#ProductDetail)] |  no  |  |
 | attributes_metadata | [[AttributeMetadata](#AttributeMetadata)] |  no  |  |
 | subtitle | string |  no  |  |
 | title | string |  no  |  |

---


 
 
 #### [ProductFrequentlyComparedSimilarResponse](#ProductFrequentlyComparedSimilarResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | similars | [ProductCompareResponse](#ProductCompareResponse) |  no  |  |

---


 
 
 #### [ProductSimilarItem](#ProductSimilarItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ProductDetail](#ProductDetail)] |  no  |  |
 | subtitle | string |  no  |  |
 | title | string |  no  |  |

---


 
 
 #### [SimilarProductByTypeResponse](#SimilarProductByTypeResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | similars | [ProductSimilarItem](#ProductSimilarItem) |  no  |  |

---


 
 
 #### [ProductVariantItemResponse](#ProductVariantItemResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | number |  no  |  |
 | name | string |  no  |  |
 | action | [ProductListingAction](#ProductListingAction) |  no  |  |
 | color | string |  no  |  |
 | color_name | string |  no  |  |
 | slug | string |  no  |  |
 | is_available | boolean |  no  |  |
 | value | string |  no  |  |
 | medias | [[Media](#Media)] |  no  |  |

---


 
 
 #### [ProductVariantResponse](#ProductVariantResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string |  no  |  |
 | header | string |  no  |  |
 | items | [[ProductVariantItemResponse](#ProductVariantItemResponse)] |  no  |  |
 | display_type | string |  no  |  |

---


 
 
 #### [ProductVariantsResponse](#ProductVariantsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | variants | [[ProductVariantResponse](#ProductVariantResponse)] |  no  |  |

---


 
 
 #### [CompanyDetail](#CompanyDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number |  no  |  |
 | name | string |  no  |  |

---


 
 
 #### [StoreDetail](#StoreDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number |  no  |  |
 | code | string |  no  |  |
 | name | string |  no  |  |
 | city | string |  no  |  |

---


 
 
 #### [ProductStockStatusItem](#ProductStockStatusItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_id | number |  no  |  |
 | uid | string |  no  |  |
 | company | [CompanyDetail](#CompanyDetail) |  no  |  |
 | seller | [Seller](#Seller) |  no  |  |
 | size | string |  no  |  |
 | store | [StoreDetail](#StoreDetail) |  no  |  |
 | quantity | number |  no  |  |
 | identifier | string |  no  |  |
 | price | [ProductStockPrice](#ProductStockPrice) |  no  |  |

---


 
 
 #### [ProductStockStatusResponse](#ProductStockStatusResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ProductStockStatusItem](#ProductStockStatusItem)] |  no  |  |

---


 
 
 #### [ProductStockPolling](#ProductStockPolling)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ProductStockStatusItem](#ProductStockStatusItem)] |  no  |  |
 | page | [Page](#Page) |  yes  |  |

---


 
 
 #### [ProductListingDetail](#ProductListingDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | grouped_attributes | [[ProductDetailGroupedAttribute](#ProductDetailGroupedAttribute)] |  no  |  |
 | short_description | string |  no  |  |
 | highlights | [string] |  no  |  |
 | rating_count | number |  no  |  |
 | sellable | boolean |  no  |  |
 | teaser_tag | string |  no  |  |
 | categories | [[ProductBrand](#ProductBrand)] |  no  |  |
 | medias | [[Media](#Media)] |  no  |  |
 | attributes | string |  no  |  |
 | item_code | string |  no  |  |
 | price | [ProductListingPrice](#ProductListingPrice) |  no  |  |
 | uid | number |  no  |  |
 | brand | [ProductBrand](#ProductBrand) |  no  |  |
 | name | string |  no  |  |
 | image_nature | string |  no  |  |
 | description | string |  no  |  |
 | slug | string |  yes  |  |
 | item_type | string |  no  |  |
 | has_variant | boolean |  no  |  |
 | similars | [string] |  no  |  |
 | discount | string |  no  |  |
 | action | [ProductListingAction](#ProductListingAction) |  no  |  |
 | color | string |  no  |  |
 | type | string |  no  |  |
 | product_online_date | string |  no  |  |
 | rating | number |  no  |  |
 | tryouts | [string] |  no  |  |

---


 
 
 #### [ProductFiltersKey](#ProductFiltersKey)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  yes  |  |
 | kind | string |  no  |  |
 | logo | string |  no  |  |
 | display | string |  yes  |  |

---


 
 
 #### [ProductFiltersValue](#ProductFiltersValue)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | min | number |  no  |  |
 | currency_symbol | string |  no  |  |
 | selected_min | number |  no  |  |
 | count | number |  no  |  |
 | is_selected | boolean |  yes  |  |
 | currency_code | string |  no  |  |
 | query_format | string |  no  |  |
 | max | number |  no  |  |
 | value | string |  no  |  |
 | display_format | string |  no  |  |
 | selected_max | number |  no  |  |
 | display | string |  yes  |  |

---


 
 
 #### [ProductFilters](#ProductFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | [ProductFiltersKey](#ProductFiltersKey) |  yes  |  |
 | values | [[ProductFiltersValue](#ProductFiltersValue)] |  yes  |  |

---


 
 
 #### [ProductSortOn](#ProductSortOn)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | value | string |  no  |  |
 | is_selected | boolean |  no  |  |

---


 
 
 #### [ProductListingResponse](#ProductListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ProductListingDetail](#ProductListingDetail)] |  no  |  |
 | filters | [[ProductFilters](#ProductFilters)] |  no  |  |
 | sort_on | [[ProductSortOn](#ProductSortOn)] |  no  |  |
 | page | [Page](#Page) |  yes  |  |

---


 
 
 #### [ImageUrls](#ImageUrls)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | portrait | [Media](#Media) |  no  |  |
 | landscape | [Media](#Media) |  no  |  |

---


 
 
 #### [BrandItem](#BrandItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | number |  no  |  |
 | discount | string |  no  |  |
 | name | string |  no  |  |
 | action | [ProductListingAction](#ProductListingAction) |  no  |  |
 | slug | string |  no  |  |
 | logo | [Media](#Media) |  no  |  |
 | banners | [ImageUrls](#ImageUrls) |  no  |  |
 | departments | [string] |  no  |  |

---


 
 
 #### [BrandListingResponse](#BrandListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[BrandItem](#BrandItem)] |  no  |  |
 | page | [Page](#Page) |  yes  |  |

---


 
 
 #### [BrandDetailResponse](#BrandDetailResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logo | [Media](#Media) |  no  |  |
 | banners | [ImageUrls](#ImageUrls) |  no  |  |
 | name | string |  no  |  |
 | uid | number |  no  |  |

---


 
 
 #### [DepartmentIdentifier](#DepartmentIdentifier)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | number |  no  |  |
 | slug | string |  no  |  |

---


 
 
 #### [ThirdLevelChild](#ThirdLevelChild)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | number |  no  |  |
 | name | string |  no  |  |
 | action | [ProductListingAction](#ProductListingAction) |  no  |  |
 | childs | [string] |  no  |  |
 | slug | string |  no  |  |
 | _custom_json | string |  no  |  |
 | banners | [ImageUrls](#ImageUrls) |  no  |  |

---


 
 
 #### [SecondLevelChild](#SecondLevelChild)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | number |  no  |  |
 | name | string |  no  |  |
 | action | [ProductListingAction](#ProductListingAction) |  no  |  |
 | childs | [[ThirdLevelChild](#ThirdLevelChild)] |  no  |  |
 | slug | string |  no  |  |
 | _custom_json | string |  no  |  |
 | banners | [ImageUrls](#ImageUrls) |  no  |  |

---


 
 
 #### [Child](#Child)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | number |  no  |  |
 | name | string |  no  |  |
 | action | [ProductListingAction](#ProductListingAction) |  no  |  |
 | childs | [[SecondLevelChild](#SecondLevelChild)] |  no  |  |
 | slug | string |  no  |  |
 | _custom_json | string |  no  |  |
 | banners | [ImageUrls](#ImageUrls) |  no  |  |

---


 
 
 #### [CategoryItems](#CategoryItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | number |  no  |  |
 | name | string |  no  |  |
 | action | [ProductListingAction](#ProductListingAction) |  no  |  |
 | childs | [[Child](#Child)] |  no  |  |
 | slug | string |  no  |  |
 | banners | [ImageUrls](#ImageUrls) |  no  |  |

---


 
 
 #### [DepartmentCategoryTree](#DepartmentCategoryTree)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[CategoryItems](#CategoryItems)] |  no  |  |
 | department | string |  no  |  |

---


 
 
 #### [CategoryListingResponse](#CategoryListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | departments | [[DepartmentIdentifier](#DepartmentIdentifier)] |  no  |  |
 | data | [[DepartmentCategoryTree](#DepartmentCategoryTree)] |  no  |  |

---


 
 
 #### [CategoryMetaResponse](#CategoryMetaResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logo | [Media](#Media) |  no  |  |
 | banners | [ImageUrls](#ImageUrls) |  no  |  |
 | name | string |  no  |  |
 | uid | number |  no  |  |

---


 
 
 #### [HomeListingResponse](#HomeListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ProductListingDetail](#ProductListingDetail)] |  no  |  |
 | message | string |  no  |  |
 | page | [Page](#Page) |  yes  |  |

---


 
 
 #### [Department](#Department)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | number |  no  |  |
 | name | string |  no  |  |
 | slug | string |  no  |  |
 | logo | [Media](#Media) |  no  |  |
 | priority_order | number |  no  |  |

---


 
 
 #### [DepartmentResponse](#DepartmentResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Department](#Department)] |  no  |  |

---


 
 
 #### [AutocompleteItem](#AutocompleteItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logo | [Media](#Media) |  no  |  |
 | action | [ProductListingAction](#ProductListingAction) |  no  |  |
 | type | string |  no  |  |
 | display | string |  no  |  |

---


 
 
 #### [AutoCompleteResponse](#AutoCompleteResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[AutocompleteItem](#AutocompleteItem)] |  no  |  |

---


 
 
 #### [GetCollectionDetailNest](#GetCollectionDetailNest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | banners | [ImageUrls](#ImageUrls) |  no  |  |
 | is_active | boolean |  no  |  |
 | badge | string |  no  |  |
 | visible_facets_keys | [string] |  no  |  |
 | tag | [string] |  no  |  |
 | _schedule | string |  no  |  |
 | uid | string |  no  |  |
 | name | string |  no  |  |
 | query | string |  no  |  |
 | description | string |  no  |  |
 | slug | string |  no  |  |
 | allow_facets | boolean |  no  |  |
 | action | [ProductListingAction](#ProductListingAction) |  no  |  |
 | type | string |  no  |  |
 | cron | string |  no  |  |
 | logo | [Media](#Media) |  no  |  |
 | app_id | string |  no  |  |
 | allow_sort | boolean |  no  |  |
 | meta | string |  no  |  |

---


 
 
 #### [CollectionListingFilterTag](#CollectionListingFilterTag)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | is_selected | boolean |  no  |  |
 | display | string |  no  |  |

---


 
 
 #### [CollectionListingFilterType](#CollectionListingFilterType)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | is_selected | boolean |  no  |  |
 | display | string |  no  |  |

---


 
 
 #### [CollectionListingFilter](#CollectionListingFilter)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | tags | [[CollectionListingFilterTag](#CollectionListingFilterTag)] |  no  |  |
 | type | [[CollectionListingFilterType](#CollectionListingFilterType)] |  no  |  |

---


 
 
 #### [GetCollectionListingResponse](#GetCollectionListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[GetCollectionDetailNest](#GetCollectionDetailNest)] |  no  |  |
 | filters | [CollectionListingFilter](#CollectionListingFilter) |  no  |  |
 | page | [Page](#Page) |  yes  |  |

---


 
 
 #### [CollectionDetailResponse](#CollectionDetailResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | badge | string |  no  |  |
 | allow_facets | boolean |  no  |  |
 | name | string |  no  |  |
 | query | string |  no  |  |
 | description | string |  no  |  |
 | cron | string |  no  |  |
 | slug | string |  no  |  |
 | type | string |  no  |  |
 | logo | [Media](#Media) |  no  |  |
 | banners | [ImageUrls](#ImageUrls) |  no  |  |
 | is_active | boolean |  no  |  |
 | visible_facets_keys | [string] |  no  |  |
 | app_id | string |  no  |  |
 | allow_sort | boolean |  no  |  |
 | tag | [string] |  no  |  |
 | _schedule | string |  no  |  |
 | meta | string |  no  |  |

---


 
 
 #### [GetFollowListingResponse](#GetFollowListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ProductListingDetail](#ProductListingDetail)] |  yes  |  |
 | page | [Page](#Page) |  yes  |  |

---


 
 
 #### [FollowPostResponse](#FollowPostResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | message | string |  yes  |  |

---


 
 
 #### [FollowerCountResponse](#FollowerCountResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | count | number |  no  |  |

---


 
 
 #### [FollowIdsData](#FollowIdsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | collections | [number] |  no  |  |
 | products | [number] |  no  |  |
 | brands | [number] |  no  |  |

---


 
 
 #### [FollowIdsResponse](#FollowIdsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [FollowIdsData](#FollowIdsData) |  no  |  |

---


 
 
 #### [LatLong](#LatLong)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | coordinates | [number] |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [Store1](#Store1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | number |  no  |  |
 | store_code | string |  no  |  |
 | name | string |  no  |  |
 | state | string |  no  |  |
 | city | string |  no  |  |
 | lat_long | [LatLong](#LatLong) |  no  |  |
 | address | string |  no  |  |
 | country | string |  no  |  |
 | store_email | string |  no  |  |
 | pincode | number |  no  |  |

---


 
 
 #### [StoreListingResponse](#StoreListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Store1](#Store1)] |  yes  |  |
 | page | [Page](#Page) |  yes  |  |

---




 
 
 #### [DisplayBreakup](#DisplayBreakup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | number |  no  |  |
 | display | string |  no  |  |
 | key | string |  no  |  |
 | currency_code | string |  no  |  |
 | currency_symbol | string |  no  |  |
 | message | [string] |  no  |  |

---


 
 
 #### [RawBreakup](#RawBreakup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | subtotal | number |  no  |  |
 | convenience_fee | number |  no  |  |
 | total | number |  no  |  |
 | gst_charges | number |  no  |  |
 | you_saved | number |  no  |  |
 | vog | number |  no  |  |
 | fynd_cash | number |  no  |  |
 | discount | number |  no  |  |
 | cod_charge | number |  no  |  |
 | mrp_total | string |  no  |  |
 | delivery_charge | number |  no  |  |
 | coupon | number |  no  |  |

---


 
 
 #### [CouponBreakup](#CouponBreakup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | number |  no  |  |
 | type | string |  no  |  |
 | message | string |  no  |  |
 | is_applied | boolean |  no  |  |
 | code | string |  no  |  |
 | uid | string |  no  |  |

---


 
 
 #### [LoyaltyPoints](#LoyaltyPoints)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  no  |  |
 | is_applied | boolean |  no  |  |
 | applicable | number |  no  |  |
 | total | number |  no  |  |

---


 
 
 #### [CartBreakup](#CartBreakup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | [[DisplayBreakup](#DisplayBreakup)] |  no  |  |
 | raw | [RawBreakup](#RawBreakup) |  no  |  |
 | coupon | [CouponBreakup](#CouponBreakup) |  no  |  |
 | loyalty_points | [LoyaltyPoints](#LoyaltyPoints) |  no  |  |

---


 
 
 #### [CartCurrency](#CartCurrency)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | symbol | string |  no  |  |
 | code | string |  no  | Currency code defined by ISO 4217:2015 |

---


 
 
 #### [PromoMeta](#PromoMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---


 
 
 #### [ProductPrice](#ProductPrice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | add_on | number |  no  |  |
 | marked | number |  no  |  |
 | currency_code | string |  no  |  |
 | selling | number |  no  |  |
 | currency_symbol | string |  no  |  |
 | effective | number |  no  |  |

---


 
 
 #### [ProductPriceInfo](#ProductPriceInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | base | [ProductPrice](#ProductPrice) |  no  |  |
 | converted | [ProductPrice](#ProductPrice) |  no  |  |

---


 
 
 #### [BaseInfo](#BaseInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | uid | number |  no  |  |

---


 
 
 #### [CategoryInfo](#CategoryInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | uid | number |  no  | Product Category Id |

---


 
 
 #### [ActionQuery](#ActionQuery)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | product_slug | [string] |  no  | Contains list of product slug |

---


 
 
 #### [ProductAction](#ProductAction)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | query | [ActionQuery](#ActionQuery) |  no  |  |
 | url | string |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [ProductImage](#ProductImage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | url | string |  no  |  |
 | secure_url | string |  no  |  |
 | aspect_ratio | string |  no  |  |

---


 
 
 #### [CartProduct](#CartProduct)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | brand | [BaseInfo](#BaseInfo) |  no  |  |
 | categories | [[CategoryInfo](#CategoryInfo)] |  no  |  |
 | slug | string |  no  | Unique product url name generated via product name and other meta data |
 | action | [ProductAction](#ProductAction) |  no  |  |
 | name | string |  no  |  |
 | images | [[ProductImage](#ProductImage)] |  no  |  |
 | uid | number |  no  |  |

---


 
 
 #### [BasePrice](#BasePrice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | marked | number |  no  |  |
 | currency_symbol | string |  no  |  |
 | effective | number |  no  |  |
 | currency_code | string |  no  |  |

---


 
 
 #### [ArticlePriceInfo](#ArticlePriceInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | base | [BasePrice](#BasePrice) |  no  |  |
 | converted | [BasePrice](#BasePrice) |  no  |  |

---


 
 
 #### [ProductArticle](#ProductArticle)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | extra_meta | string |  no  |  |
 | price | [ArticlePriceInfo](#ArticlePriceInfo) |  no  |  |
 | size | string |  no  |  |
 | seller | [BaseInfo](#BaseInfo) |  no  |  |
 | store | [BaseInfo](#BaseInfo) |  no  |  |
 | quantity | number |  no  |  |
 | uid | string |  no  |  |

---


 
 
 #### [ProductAvailability](#ProductAvailability)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | deliverable | boolean |  no  |  |
 | sizes | [string] |  no  |  |
 | is_valid | boolean |  no  |  |
 | out_of_stock | boolean |  no  |  |
 | other_store_quantity | number |  no  |  |

---


 
 
 #### [CartProductIdentifer](#CartProductIdentifer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | identifier | string |  no  | Article idenfier generated by cart |

---


 
 
 #### [CartProductInfo](#CartProductInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | promo_meta | [PromoMeta](#PromoMeta) |  no  |  |
 | price | [ProductPriceInfo](#ProductPriceInfo) |  no  |  |
 | is_set | boolean |  no  |  |
 | product | [CartProduct](#CartProduct) |  no  |  |
 | article | [ProductArticle](#ProductArticle) |  no  |  |
 | availability | [ProductAvailability](#ProductAvailability) |  no  |  |
 | bulk_offer | string |  no  |  |
 | identifiers | [CartProductIdentifer](#CartProductIdentifer) |  yes  |  |
 | key | string |  no  |  |
 | coupon_message | string |  no  |  |
 | price_per_unit | [ProductPriceInfo](#ProductPriceInfo) |  no  |  |
 | quantity | number |  no  |  |
 | discount | string |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [PromiseTimestamp](#PromiseTimestamp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | max | number |  no  |  |
 | min | number |  no  |  |

---


 
 
 #### [PromiseFormatted](#PromiseFormatted)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | max | string |  no  |  |
 | min | string |  no  |  |

---


 
 
 #### [ShipmentPromise](#ShipmentPromise)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | timestamp | [PromiseTimestamp](#PromiseTimestamp) |  no  |  |
 | formatted | [PromiseFormatted](#PromiseFormatted) |  no  |  |

---


 
 
 #### [PaymentSelectionLock](#PaymentSelectionLock)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | payment_identifier | string |  no  |  |
 | default_options | string |  no  |  |
 | enabled | boolean |  no  |  |

---


 
 
 #### [CartDetailResponse](#CartDetailResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | checkout_mode | string |  no  |  |
 | gstin | string |  no  |  |
 | coupon_text | string |  no  |  |
 | restrict_checkout | boolean |  no  |  |
 | comment | string |  no  |  |
 | breakup_values | [CartBreakup](#CartBreakup) |  no  |  |
 | currency | [CartCurrency](#CartCurrency) |  no  |  |
 | items | [[CartProductInfo](#CartProductInfo)] |  no  |  |
 | is_valid | boolean |  no  |  |
 | last_modified | string |  no  |  |
 | delivery_promise | [ShipmentPromise](#ShipmentPromise) |  no  |  |
 | delivery_charge_info | string |  no  |  |
 | id | string |  no  |  |
 | payment_selection_lock | [PaymentSelectionLock](#PaymentSelectionLock) |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [AddProductCart](#AddProductCart)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_size | string |  no  |  |
 | extra_meta | string |  no  |  |
 | display | string |  no  |  |
 | article_id | string |  no  |  |
 | seller_id | number |  no  |  |
 | pos | boolean |  no  |  |
 | store_id | number |  no  |  |
 | article_assignment | string |  no  |  |
 | item_id | number |  no  |  |
 | quantity | number |  no  |  |

---


 
 
 #### [AddCartRequest](#AddCartRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[AddProductCart](#AddProductCart)] |  no  |  |

---


 
 
 #### [AddCartDetailResponse](#AddCartDetailResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cart | [CartDetailResponse](#CartDetailResponse) |  no  |  |
 | partial | boolean |  no  | When adding multiple items check if all added. True if only few are added. |
 | success | boolean |  no  | True if all items are added successfully. False if partially added or not added. |
 | message | string |  no  |  |

---


 
 
 #### [UpdateProductCart](#UpdateProductCart)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_index | number |  no  |  |
 | item_size | string |  no  |  |
 | extra_meta | string |  no  |  |
 | article_id | string |  no  |  |
 | identifiers | [CartProductIdentifer](#CartProductIdentifer) |  yes  |  |
 | item_id | number |  no  |  |
 | quantity | number |  no  |  |

---


 
 
 #### [UpdateCartRequest](#UpdateCartRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[UpdateProductCart](#UpdateProductCart)] |  no  |  |
 | operation | string |  yes  |  |

---


 
 
 #### [UpdateCartDetailResponse](#UpdateCartDetailResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cart | [CartDetailResponse](#CartDetailResponse) |  no  |  |
 | success | boolean |  no  | True if all items are added successfully. False if partially added or not added. |
 | message | string |  no  |  |

---


 
 
 #### [CartItemCountResponse](#CartItemCountResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user_cart_items_count | number |  no  | Item count present in cart |

---


 
 
 #### [Coupon](#Coupon)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_applicable | boolean |  no  |  |
 | sub_title | string |  no  |  |
 | max_discount_value | number |  no  |  |
 | title | string |  no  |  |
 | is_applied | boolean |  no  |  |
 | coupon_code | string |  no  |  |
 | minimum_cart_value | number |  no  |  |
 | coupon_value | number |  no  |  |
 | expires_on | string |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [PageCoupon](#PageCoupon)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | total | number |  no  |  |
 | total_item_count | number |  no  |  |
 | has_next | boolean |  no  |  |
 | current | number |  no  |  |
 | has_previous | boolean |  no  |  |

---


 
 
 #### [GetCouponResponse](#GetCouponResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | available_coupon_list | [[Coupon](#Coupon)] |  no  |  |
 | page | [PageCoupon](#PageCoupon) |  no  |  |

---


 
 
 #### [ApplyCouponRequest](#ApplyCouponRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | coupon_code | string |  yes  | Coupon code to be applied |

---


 
 
 #### [OfferSeller](#OfferSeller)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | uid | number |  no  | Seller id |

---


 
 
 #### [OfferPrice](#OfferPrice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bulk_effective | number |  no  | Discounted per unit price for current offer object |
 | marked | number |  no  | Original price of product |
 | currency_code | string |  no  | Currency code for all amounts |
 | currency_symbol | string |  no  | Currency symbol for currency |
 | effective | number |  no  | Current per unit price of product after existing deductions |

---


 
 
 #### [OfferItem](#OfferItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | margin | number |  no  | Percentage value of discount |
 | auto_applied | boolean |  no  |  |
 | type | string |  no  | Offer type |
 | total | number |  no  | Total price of offer quantity with discount |
 | price | [OfferPrice](#OfferPrice) |  no  |  |
 | best | boolean |  no  | Is true for best offer from all offers present for all sellers |
 | quantity | number |  no  | Quantity on which offer is applicable |

---


 
 
 #### [BulkPriceOffer](#BulkPriceOffer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | seller | [OfferSeller](#OfferSeller) |  no  |  |
 | offers | [[OfferItem](#OfferItem)] |  no  |  |

---


 
 
 #### [BulkPriceResponse](#BulkPriceResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[BulkPriceOffer](#BulkPriceOffer)] |  no  | Consist of offers from multiple seller |

---


 
 
 #### [RewardPointRequest](#RewardPointRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | points | boolean |  yes  |  |

---


 
 
 #### [GeoLocation](#GeoLocation)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | longitude | number |  no  |  |
 | latitude | number |  no  |  |

---


 
 
 #### [Address](#Address)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_active | boolean |  no  |  |
 | meta | string |  no  |  |
 | google_map_point | string |  no  |  |
 | email | string |  no  |  |
 | checkout_mode | string |  no  |  |
 | country_code | string |  no  |  |
 | tags | [string] |  no  |  |
 | country | string |  no  |  |
 | area_code_slug | string |  no  |  |
 | city | string |  no  |  |
 | geo_location | [GeoLocation](#GeoLocation) |  no  |  |
 | area_code | string |  no  |  |
 | is_default_address | boolean |  no  |  |
 | phone | string |  no  |  |
 | name | string |  no  |  |
 | user_id | string |  no  |  |
 | landmark | string |  no  |  |
 | area | string |  no  |  |
 | state | string |  no  |  |
 | id | string |  no  |  |
 | address_type | string |  no  |  |
 | address | string |  no  |  |

---


 
 
 #### [GetAddressesResponse](#GetAddressesResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | [[Address](#Address)] |  no  |  |

---


 
 
 #### [SaveAddressResponse](#SaveAddressResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_default_address | boolean |  no  |  |
 | id | string |  no  |  |
 | success | boolean |  no  |  |

---


 
 
 #### [UpdateAddressResponse](#UpdateAddressResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_default_address | boolean |  no  |  |
 | is_updated | boolean |  no  |  |
 | id | string |  no  |  |
 | success | boolean |  no  |  |

---


 
 
 #### [DeleteAddressResponse](#DeleteAddressResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_deleted | boolean |  no  |  |
 | id | string |  no  |  |

---


 
 
 #### [SelectCartAddressRequest](#SelectCartAddressRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cart_id | string |  no  |  |
 | billing_address_id | string |  no  |  |
 | id | string |  no  |  |

---


 
 
 #### [UpdateCartPaymentRequest](#UpdateCartPaymentRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address_id | string |  no  |  |
 | payment_identifier | string |  no  |  |
 | id | string |  no  |  |
 | merchant_code | string |  no  |  |
 | payment_mode | string |  no  |  |
 | aggregator_name | string |  no  |  |

---


 
 
 #### [CouponValidity](#CouponValidity)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | valid | boolean |  no  |  |
 | title | string |  no  |  |
 | display_message_en | string |  no  |  |
 | code | string |  no  |  |
 | discount | number |  no  |  |

---


 
 
 #### [PaymentCouponValidate](#PaymentCouponValidate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | coupon_validity | [CouponValidity](#CouponValidity) |  no  |  |
 | success | boolean |  yes  |  |
 | message | string |  no  |  |

---


 
 
 #### [ShipmentResponse](#ShipmentResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | box_type | string |  no  |  |
 | shipments | number |  no  |  |
 | promise | [ShipmentPromise](#ShipmentPromise) |  no  |  |
 | shipment_type | string |  no  |  |
 | items | [[CartProductInfo](#CartProductInfo)] |  no  |  |
 | dp_options | string |  no  |  |
 | order_type | string |  no  |  |
 | fulfillment_id | number |  no  |  |
 | dp_id | number |  no  |  |
 | fulfillment_type | string |  no  |  |

---


 
 
 #### [CartShipmentsResponse](#CartShipmentsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | coupon_text | string |  no  |  |
 | error | boolean |  no  |  |
 | cart_id | number |  no  |  |
 | checkout_mode | string |  no  |  |
 | gstin | string |  no  |  |
 | delivery_charge_info | string |  no  |  |
 | uid | string |  no  |  |
 | message | string |  no  |  |
 | comment | string |  no  |  |
 | breakup_values | [CartBreakup](#CartBreakup) |  no  |  |
 | currency | [CartCurrency](#CartCurrency) |  no  |  |
 | restrict_checkout | boolean |  no  |  |
 | shipments | [[ShipmentResponse](#ShipmentResponse)] |  no  |  |
 | last_modified | string |  no  |  |
 | is_valid | boolean |  no  |  |
 | delivery_promise | [ShipmentPromise](#ShipmentPromise) |  no  |  |
 | id | string |  no  |  |
 | payment_selection_lock | [PaymentSelectionLock](#PaymentSelectionLock) |  no  |  |

---


 
 
 #### [StaffCheckout](#StaffCheckout)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  yes  |  |
 | last_name | string |  yes  |  |
 | user | string |  yes  |  |
 | first_name | string |  yes  |  |

---


 
 
 #### [CartCheckoutDetailRequest](#CartCheckoutDetailRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address_id | string |  no  |  |
 | aggregator | string |  no  |  |
 | staff | [StaffCheckout](#StaffCheckout) |  no  |  |
 | extra_meta | string |  no  |  |
 | fyndstore_emp_id | string |  no  |  |
 | meta | string |  no  |  |
 | delivery_address | string |  no  |  |
 | payment_identifier | string |  no  |  |
 | payment_params | string |  no  |  |
 | billing_address_id | string |  no  |  |
 | merchant_code | string |  no  |  |
 | callback_url | string |  no  |  |
 | payment_auto_confirm | boolean |  no  |  |
 | payment_mode | string |  yes  |  |
 | billing_address | string |  no  |  |
 | ordering_store | number |  no  |  |

---


 
 
 #### [CheckCart](#CheckCart)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | delivery_charges | number |  no  |  |
 | coupon_text | string |  no  |  |
 | order_id | string |  no  |  |
 | cart_id | number |  no  |  |
 | delivery_charge_order_value | number |  no  |  |
 | checkout_mode | string |  no  |  |
 | gstin | string |  no  |  |
 | success | boolean |  no  |  |
 | cod_charges | number |  no  |  |
 | items | [[CartProductInfo](#CartProductInfo)] |  no  |  |
 | store_code | string |  no  |  |
 | store_emps | [string] |  no  |  |
 | delivery_charge_info | string |  no  |  |
 | uid | string |  no  |  |
 | message | string |  no  |  |
 | cod_available | boolean |  no  |  |
 | cod_message | string |  no  |  |
 | comment | string |  no  |  |
 | breakup_values | [CartBreakup](#CartBreakup) |  no  |  |
 | currency | [CartCurrency](#CartCurrency) |  no  |  |
 | error_message | string |  no  |  |
 | restrict_checkout | boolean |  no  |  |
 | last_modified | string |  no  |  |
 | is_valid | boolean |  no  |  |
 | delivery_promise | [ShipmentPromise](#ShipmentPromise) |  no  |  |
 | id | string |  no  |  |
 | payment_selection_lock | [PaymentSelectionLock](#PaymentSelectionLock) |  no  |  |
 | user_type | string |  no  |  |

---


 
 
 #### [CartCheckoutResponse](#CartCheckoutResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | order_id | string |  no  |  |
 | data | string |  no  |  |
 | cart | [CheckCart](#CheckCart) |  no  |  |
 | callback_url | string |  no  |  |
 | app_intercept_url | string |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [CartMetaRequest](#CartMetaRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | comment | string |  no  |  |
 | checkout_mode | string |  no  |  |
 | gstin | string |  no  |  |
 | pick_up_customer_details | string |  no  | Customer contact details for customer pickup at store |

---


 
 
 #### [CartMetaResponse](#CartMetaResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---


 
 
 #### [CartMetaMissingResponse](#CartMetaMissingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | errors | [string] |  no  |  |

---


 
 
 #### [GetShareCartLinkRequest](#GetShareCartLinkRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | meta | string |  no  | Staff, Ordering store or any other data. This data will be used to generate link as well as sent as shared details. |
 | id | string |  no  | Cart uid for generating sharing |
 | uid | number |  yes  | Cart uid for generating sharing |

---


 
 
 #### [GetShareCartLinkResponse](#GetShareCartLinkResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | token | string |  no  | Short url unique id |
 | share_url | string |  no  | Short shareable final url |

---


 
 
 #### [SharedCartDetails](#SharedCartDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | meta | string |  no  | Meta data sent while generating share cart link |
 | token | string |  no  | Short link id |
 | source | string |  no  | Share link device and other source information |
 | user | string |  no  | User details of who generated share link |
 | created_on | string |  no  |  |

---


 
 
 #### [SharedCart](#SharedCart)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | checkout_mode | string |  no  |  |
 | gstin | string |  no  |  |
 | coupon_text | string |  no  |  |
 | restrict_checkout | boolean |  no  |  |
 | comment | string |  no  |  |
 | breakup_values | [CartBreakup](#CartBreakup) |  no  |  |
 | currency | [CartCurrency](#CartCurrency) |  no  |  |
 | items | [[CartProductInfo](#CartProductInfo)] |  no  |  |
 | is_valid | boolean |  no  |  |
 | last_modified | string |  no  |  |
 | uid | string |  no  |  |
 | delivery_promise | [ShipmentPromise](#ShipmentPromise) |  no  |  |
 | delivery_charge_info | string |  no  |  |
 | id | string |  no  |  |
 | payment_selection_lock | [PaymentSelectionLock](#PaymentSelectionLock) |  no  |  |
 | cart_id | number |  no  |  |
 | shared_cart_details | [SharedCartDetails](#SharedCartDetails) |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [SharedCartResponse](#SharedCartResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cart | [SharedCart](#SharedCart) |  no  |  |
 | error | string |  no  |  |

---




 
 
 #### [LocationDefaultLanguage](#LocationDefaultLanguage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | code | string |  no  |  |

---


 
 
 #### [LocationDefaultCurrency](#LocationDefaultCurrency)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | symbol | string |  no  |  |
 | code | string |  no  |  |

---


 
 
 #### [LocationCountry](#LocationCountry)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | capital | string |  no  |  |
 | currency | string |  no  |  |
 | iso2 | string |  no  |  |
 | iso3 | string |  no  |  |
 | name | string |  no  |  |
 | parent | string |  no  |  |
 | phone_code | string |  no  |  |
 | type | string |  no  |  |
 | uid | number |  no  |  |
 | __v | number |  no  |  |
 | _id | string |  no  |  |
 | default_currency | [LocationDefaultCurrency](#LocationDefaultCurrency) |  no  |  |
 | default_language | [LocationDefaultLanguage](#LocationDefaultLanguage) |  no  |  |

---


 
 
 #### [Locations](#Locations)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[LocationCountry](#LocationCountry)] |  no  |  |

---




 
 
 #### [TicketList](#TicketList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Ticket](#Ticket)] |  no  | List of tickets |
 | filters | [Filter](#Filter) |  no  | All the filters available for tickets |
 | page | [Page](#Page) |  no  | Describes the pagination state |

---


 
 
 #### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_total | number |  no  |  |
 | next_id | string |  no  |  |
 | has_previous | boolean |  no  |  |
 | has_next | boolean |  no  |  |
 | current | number |  no  |  |
 | type | string |  yes  |  |
 | size | number |  no  |  |

---


 
 
 #### [TicketHistoryList](#TicketHistoryList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[TicketHistory](#TicketHistory)] |  no  | List of ticket history |
 | page | [Page](#Page) |  no  | Describes the pagination state |

---


 
 
 #### [CustomFormList](#CustomFormList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[CustomForm](#CustomForm)] |  no  | List of forms |
 | page | [Page](#Page) |  no  | Describes the pagination state |

---


 
 
 #### [CreateCustomFormPayload](#CreateCustomFormPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | slug | string |  yes  | Slug for the form |
 | title | string |  yes  | Title for the form |
 | inputs | [string] |  yes  | List of all the form components |
 | description | string |  no  | Description of the form |
 | header_image | string |  no  | Header image that is to be shown for the form |
 | priority | any |  yes  | Describes the priority of the tickets created by the form |
 | should_notify | boolean |  no  | Indicates if staff should be notified when a response is received |
 | success_message | string |  no  | Success message that will be shown on submission |
 | poll_for_assignment | [PollForAssignment](#PollForAssignment) |  no  | Describes how polling will be done for the tickets createds |

---


 
 
 #### [EditCustomFormPayload](#EditCustomFormPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  yes  | Title for the form |
 | inputs | [string] |  yes  | List of all the form components |
 | description | string |  no  | Description of the form |
 | priority | any |  yes  | Describes the priority of the tickets created by the form |
 | header_image | string |  no  | Header image that is to be shown for the form |
 | should_notify | boolean |  no  | Indicates if staff should be notified when a response is received |
 | login_required | boolean |  no  | Denotes if login is required to make a form response submission |
 | success_message | string |  no  | Success message that will be shown on submission |
 | poll_for_assignment | [PollForAssignment](#PollForAssignment) |  no  | Describes how polling will be done for the tickets createds |

---


 
 
 #### [EditTicketPayload](#EditTicketPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | content | [TicketContent](#TicketContent) |  no  | Ticket conetent details |
 | category | string |  no  | Category assigned to the ticket |
 | sub_category | string |  no  | Sub-category assigned to the ticket |
 | source | string |  no  | Denotes if the ticket was created at company or application level |
 | status | string |  no  | Denotes in what state is the ticket |
 | priority | any |  no  | Denotes the priority of ticket |
 | assigned_to | [AgentChangePayload](#AgentChangePayload) |  no  | Details of support staff to whom ticket is assigned |
 | tags | [string] |  no  | Tags relevant to ticket |

---


 
 
 #### [AgentChangePayload](#AgentChangePayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | agent_id | string |  yes  | Agent's unique ID |

---


 
 
 #### [CreateVideoRoomResponse](#CreateVideoRoomResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | unique_name | string |  yes  | Video Room's unique name |

---


 
 
 #### [CloseVideoRoomResponse](#CloseVideoRoomResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  | Denotes if operation was successfully |

---


 
 
 #### [CreateVideoRoomPayload](#CreateVideoRoomPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | unique_name | string |  yes  | Ticket id |
 | notify | [[NotifyUser](#NotifyUser)] |  no  | List of people to be notified |

---


 
 
 #### [NotifyUser](#NotifyUser)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string |  yes  | Country code |
 | phone_number | string |  yes  | Phone number |

---


 
 
 #### [Filter](#Filter)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | priorities | [[Priority](#Priority)] |  yes  | List of possible priorities for tickets |
 | categories | [[TicketCategory](#TicketCategory)] |  no  | List of possible categories for tickets |
 | statuses | [[Status](#Status)] |  yes  | List of possible statuses for tickets |
 | assignees | [string] |  yes  | List of support staff availble for tickets assignment |

---


 
 
 #### [TicketHistoryPayload](#TicketHistoryPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | string |  yes  | Details of history event |
 | type | any |  yes  | Type of history event |

---


 
 
 #### [CustomFormSubmissionPayload](#CustomFormSubmissionPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | response | [[KeyValue](#KeyValue)] |  yes  | Form response |
 | attachments | [[TicketAsset](#TicketAsset)] |  no  | List of all attachments related to the form |

---


 
 
 #### [KeyValue](#KeyValue)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string |  yes  | Parameter for evaluating |
 | value | string |  yes  | Response for the parameter |

---


 
 
 #### [GetTokenForVideoRoomResponse](#GetTokenForVideoRoomResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | access_token | string |  yes  | Access token to be used for video room |

---


 
 
 #### [GetParticipantsInsideVideoRoomResponse](#GetParticipantsInsideVideoRoomResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | participants | [[Participant](#Participant)] |  yes  | List of participants of the video room |

---


 
 
 #### [Participant](#Participant)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | [UserSchema](#UserSchema) |  no  | Details of participant |
 | identity | string |  no  | Unique identifier of participant |
 | status | string |  no  | Status of participant |

---


 
 
 #### [PhoneNumber](#PhoneNumber)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean |  no  | Denotes if the phone number is active |
 | primary | boolean |  no  | Denotes it's the primary phone number for the account |
 | verified | boolean |  no  | Denotes it's a verified phone number |
 | phone | string |  no  | Phone number |
 | country_code | number |  no  | Country code |

---


 
 
 #### [Email](#Email)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | primary | boolean |  no  | Denotes it's the primary email for the account |
 | verified | boolean |  no  | Denotes it's a verified email |
 | email | string |  no  | Email Address |
 | active | boolean |  no  | Denotes if the email is active |

---


 
 
 #### [Debug](#Debug)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | source | string |  no  | Source of user |
 | platform | string |  no  | Platform of user |

---


 
 
 #### [SubmitCustomFormResponse](#SubmitCustomFormResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ticket | [Ticket](#Ticket) |  yes  | Ticket created on form submission |

---


 
 
 #### [TicketContext](#TicketContext)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application_id | string |  no  | Application ID related to the ticket |
 | company_id | string |  yes  | Company ID related to the ticket |

---


 
 
 #### [CreatedOn](#CreatedOn)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user_agent | string |  yes  | Useragent details |

---


 
 
 #### [TicketAsset](#TicketAsset)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string |  no  | Display text for asset |
 | value | string |  yes  | To be used for details |
 | type | any |  yes  | Type of asset |

---


 
 
 #### [TicketContent](#TicketContent)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  yes  | Title for ticket |
 | description | string |  no  | Long description of issue |
 | attachments | [[TicketAsset](#TicketAsset)] |  no  | List of all attachments related to the ticket |

---


 
 
 #### [AddTicketPayload](#AddTicketPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_by | string |  no  | Creator of the ticket |
 | status | string |  no  | Status of the ticket |
 | priority | any |  no  | Priority of the ticket |
 | category | string |  yes  | Category of the ticket |
 | content | [TicketContent](#TicketContent) |  yes  | Content for the ticket |

---


 
 
 #### [Priority](#Priority)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | [PriorityEnum](#PriorityEnum) |  yes  | Key for priority |
 | display | string |  yes  | Display text for priority |
 | color | string |  yes  | Color for priority |

---


 
 
 #### [Status](#Status)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string |  yes  | Key for status |
 | display | string |  yes  | Display text for status |
 | color | string |  yes  | Color for status |

---


 
 
 #### [TicketCategory](#TicketCategory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string |  yes  | Key for category |
 | display | string |  yes  | Display text for category |
 | form | [CustomForm](#CustomForm) |  no  | Form related to the category |
 | sub_categories | [[TicketSubCategory](#TicketSubCategory)] |  no  | Sub-category related to the category |
 | feedback_form | [TicketFeedbackForm](#TicketFeedbackForm) |  no  | Feedback form of category used to submit ticket feedback |

---


 
 
 #### [TicketSubCategory](#TicketSubCategory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string |  yes  | Key for sub-category |
 | display | string |  yes  | Display text for sub-category |

---


 
 
 #### [TicketFeedbackForm](#TicketFeedbackForm)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  yes  | Feedback form title that will be shown to the user |
 | display | [string] |  no  | List of all the form fields |

---


 
 
 #### [TicketFeedbackList](#TicketFeedbackList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[TicketFeedback](#TicketFeedback)] |  no  | List of all ticket feedback for the ticket |

---


 
 
 #### [TicketFeedbackPayload](#TicketFeedbackPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | form_response | string |  no  | Key-value pairs of all the form fields and their response |

---


 
 
 #### [SubmitButton](#SubmitButton)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  yes  | Title for submit button |
 | title_color | string |  yes  | Title color submit button |
 | background_color | string |  yes  | Color for submit button |

---


 
 
 #### [PollForAssignment](#PollForAssignment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | duration | number |  yes  | Duration for polling of staff |
 | message | string |  yes  | Message for polling |
 | success_message | string |  yes  | Message for successful polling |
 | failure_message | string |  yes  | Message if polling failed |

---


 
 
 #### [CustomForm](#CustomForm)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application_id | string |  yes  | Application ID for form |
 | slug | string |  yes  | Slug for the form, which is to be used for accessing the form |
 | header_image | string |  no  | Form header image that will be shown to the user |
 | title | string |  yes  | Form title that will be shown to the user |
 | description | string |  no  | Form description that will be shown to the user |
 | priority | [Priority](#Priority) |  yes  | Sets priority of tickets created by form response |
 | login_required | boolean |  yes  | Denotes if login is required to make a form response submission |
 | should_notify | boolean |  yes  | Denotes if new response submission for the form should be notified to the assignees |
 | success_message | string |  no  | Message that is to be shown on succesfull form response submission |
 | submit_button | [SubmitButton](#SubmitButton) |  no  | Details for submit button |
 | inputs | [string] |  yes  | List of all the form fields |
 | created_on | [CreatedOn](#CreatedOn) |  no  | Gives details of when the form was created |
 | created_by | string |  no  | Gives details of user who created the form |
 | poll_for_assignment | [PollForAssignment](#PollForAssignment) |  no  | Details of how polling should be done for support |
 | _id | string |  yes  | Unique identifier for the form |

---


 
 
 #### [FeedbackResponseItem](#FeedbackResponseItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string |  yes  | Question/Title of the form field |
 | key | string |  yes  | Key of the form field |
 | value | string |  yes  | User response value for the form field |

---


 
 
 #### [TicketFeedback](#TicketFeedback)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  yes  | Unique identifier for the feedback |
 | ticket_id | string |  yes  | Readable ticket number |
 | company_id | string |  yes  | Company id for which ticket was raised |
 | response | [[FeedbackResponseItem](#FeedbackResponseItem)] |  yes  |  |
 | category | string |  no  | Category of the ticket |
 | user | string |  no  | User who submitted the feedback |
 | updated_at | string |  no  | Time when the feedback was last updated |
 | created_at | string |  no  | Time when the feedback was created |

---


 
 
 #### [TicketHistory](#TicketHistory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  yes  | Type of the history event |
 | value | string |  yes  | Data of the history event |
 | ticket_id | string |  yes  | Readable ticket number |
 | created_on | [CreatedOn](#CreatedOn) |  no  | Time of creation of the history event |
 | created_by | string |  no  | User who created the history event |
 | _id | string |  yes  | Unique identifier of the history event |
 | updated_at | string |  no  | Time of last update of the history event |
 | created_at | string |  no  | Time of creation of the history event |

---


 
 
 #### [Ticket](#Ticket)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | context | [TicketContext](#TicketContext) |  no  | Details of company and application realated to the ticket |
 | created_on | [CreatedOn](#CreatedOn) |  no  | Details of company and application realated to the ticket |
 | response_id | string |  no  | Details of company and application realated to the ticket |
 | content | [TicketContent](#TicketContent) |  no  | Ticket conetent details |
 | ticket_id | string |  yes  | Readable ticket number |
 | category | [TicketCategory](#TicketCategory) |  yes  | Category assigned to the ticket |
 | sub_category | [TicketSubCategory](#TicketSubCategory) |  no  | Sub-category assigned to the ticket |
 | source | any |  yes  | Denotes if the ticket was created at company or application level |
 | status | [Status](#Status) |  yes  | Denotes in what state is the ticket |
 | priority | [Priority](#Priority) |  yes  | Denotes the priority of ticket |
 | created_by | string |  no  | User details of ticket creator |
 | assigned_to | string |  no  | Details of support staff to whom ticket is assigned |
 | tags | [string] |  no  | Tags relevant to ticket |
 | _custom_json | string |  no  | custom json relevant to the ticket |
 | is_feedback_pending | boolean |  no  | Denotes if feedback submission is pending for the ticket |
 | _id | string |  yes  | Unique identifier for the ticket |
 | updated_at | string |  no  | Time when the ticket was last updated |
 | created_at | string |  no  | Time when the ticket was created |

---




 
 
 #### [AvailablePageSchema](#AvailablePageSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | string |  no  |  |
 | text | string |  no  |  |
 | path | string |  no  |  |
 | type | string |  no  |  |
 | sections | [[AvailablePageSchemaSections](#AvailablePageSchemaSections)] |  no  |  |
 | sections_meta | [[AvailablePageSectionMetaAttributes](#AvailablePageSectionMetaAttributes)] |  no  |  |
 | theme | string |  no  |  |
 | seo | [AvailablePageSeo](#AvailablePageSeo) |  no  |  |
 | props | [string] |  no  |  |
 | _id | string |  no  |  |

---


 
 
 #### [AvailablePageSectionMetaAttributes](#AvailablePageSectionMetaAttributes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attributes | string |  no  |  |

---


 
 
 #### [AvailablePageSeo](#AvailablePageSeo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | description | string |  no  |  |
 | _id | string |  no  |  |

---


 
 
 #### [AvailablePageSchemaSections](#AvailablePageSchemaSections)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | label | string |  no  |  |
 | props | string |  no  |  |
 | blocks | [string] |  no  |  |
 | preset | string |  no  |  |
 | predicate | [AvailablePagePredicate](#AvailablePagePredicate) |  no  |  |

---


 
 
 #### [AvailablePageScreenPredicate](#AvailablePageScreenPredicate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mobile | boolean |  no  |  |
 | desktop | boolean |  no  |  |
 | tablet | boolean |  no  |  |

---


 
 
 #### [AvailablePageUserPredicate](#AvailablePageUserPredicate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | authenticated | boolean |  no  |  |
 | anonymous | boolean |  no  |  |

---


 
 
 #### [AvailablePageRoutePredicate](#AvailablePageRoutePredicate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | selected | string |  no  |  |
 | exact_url | string |  no  |  |
 | query | string |  no  |  |

---


 
 
 #### [AvailablePagePredicate](#AvailablePagePredicate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | screen | [AvailablePageScreenPredicate](#AvailablePageScreenPredicate) |  no  |  |
 | user | [AvailablePageUserPredicate](#AvailablePageUserPredicate) |  no  |  |
 | route | [AvailablePageRoutePredicate](#AvailablePageRoutePredicate) |  no  |  |

---


 
 
 #### [AllAvailablePageSchema](#AllAvailablePageSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pages | [[AvailablePageSchema](#AvailablePageSchema)] |  no  |  |

---


 
 
 #### [PaginationSchema](#PaginationSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | size | number |  no  |  |
 | item_total | number |  no  |  |
 | has_next | boolean |  no  |  |
 | type | string |  no  |  |
 | current | number |  no  |  |

---


 
 
 #### [ThemesListingResponseSchema](#ThemesListingResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ThemesSchema](#ThemesSchema)] |  no  |  |
 | page | [PaginationSchema](#PaginationSchema) |  no  |  |

---


 
 
 #### [AddThemeRequestSchema](#AddThemeRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | theme_id | string |  no  |  |

---


 
 
 #### [UpgradableThemeSchema](#UpgradableThemeSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | parent_theme | string |  no  |  |
 | applied_theme | string |  no  |  |
 | upgrade | boolean |  no  |  |

---


 
 
 #### [FontsSchema](#FontsSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [FontsSchemaItems](#FontsSchemaItems) |  no  |  |
 | kind | string |  no  |  |

---


 
 
 #### [BlitzkriegApiErrorSchema](#BlitzkriegApiErrorSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---


 
 
 #### [BlitzkriegNotFoundSchema](#BlitzkriegNotFoundSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---


 
 
 #### [BlitzkriegInternalServerErrorSchema](#BlitzkriegInternalServerErrorSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---


 
 
 #### [FontsSchemaItems](#FontsSchemaItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | family | string |  no  |  |
 | variants | [string] |  no  |  |
 | subsets | [string] |  no  |  |
 | version | string |  no  |  |
 | last_modified | string |  no  |  |
 | files | [FontsSchemaItemsFiles](#FontsSchemaItemsFiles) |  no  |  |
 | category | string |  no  |  |
 | kind | string |  no  |  |

---


 
 
 #### [FontsSchemaItemsFiles](#FontsSchemaItemsFiles)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | regular | string |  no  |  |
 | italic | string |  no  |  |
 | bold | string |  no  |  |

---


 
 
 #### [ThemesSchema](#ThemesSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | string |  no  |  |
 | applied | boolean |  no  |  |
 | customized | boolean |  no  |  |
 | published | boolean |  no  |  |
 | archived | boolean |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |
 | version | string |  no  |  |
 | parent_theme_version | string |  no  |  |
 | parent_theme | string |  no  |  |
 | information | [Information](#Information) |  no  |  |
 | tags | [string] |  no  |  |
 | src | [Src](#Src) |  no  |  |
 | assets | [AssetsSchema](#AssetsSchema) |  no  |  |
 | available_sections | [[availableSectionSchema](#availableSectionSchema)] |  no  |  |
 | constants | string |  no  |  |
 | styles | string |  no  |  |
 | config | [Config](#Config) |  no  |  |
 | settings | string |  no  |  |
 | font | [Font](#Font) |  no  |  |
 | _id | string |  no  |  |
 | __v | number |  no  |  |
 | colors | [Colors](#Colors) |  no  |  |

---


 
 
 #### [availableSectionSchema](#availableSectionSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | blocks | [[Blocks](#Blocks)] |  no  |  |
 | name | string |  no  |  |
 | label | string |  no  |  |
 | props | [[BlocksProps](#BlocksProps)] |  no  |  |

---


 
 
 #### [Information](#Information)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | images | [Images](#Images) |  no  |  |
 | features | [string] |  no  |  |
 | name | string |  no  |  |
 | description | string |  no  |  |

---


 
 
 #### [Images](#Images)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | desktop | [string] |  no  |  |
 | android | [string] |  no  |  |
 | ios | [string] |  no  |  |
 | thumbnail | [string] |  no  |  |

---


 
 
 #### [Src](#Src)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | link | string |  no  |  |

---


 
 
 #### [AssetsSchema](#AssetsSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | umd_js | [UmdJs](#UmdJs) |  no  |  |
 | common_js | [CommonJs](#CommonJs) |  no  |  |
 | css | [Css](#Css) |  no  |  |

---


 
 
 #### [UmdJs](#UmdJs)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | link | string |  no  |  |

---


 
 
 #### [CommonJs](#CommonJs)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | link | string |  no  |  |

---


 
 
 #### [Css](#Css)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | link | string |  no  |  |

---


 
 
 #### [Seo](#Seo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | description | string |  no  |  |

---


 
 
 #### [Sections](#Sections)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attributes | string |  no  |  |

---


 
 
 #### [Config](#Config)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | preset | [Preset](#Preset) |  no  |  |
 | global_schema | [GlobalSchema](#GlobalSchema) |  no  |  |
 | current | string |  no  |  |
 | list | [[ListSchemaItem](#ListSchemaItem)] |  no  |  |

---


 
 
 #### [Preset](#Preset)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pages | [[AvailablePageSchema](#AvailablePageSchema)] |  no  |  |

---


 
 
 #### [GlobalSchema](#GlobalSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | props | [[GlobalSchemaProps](#GlobalSchemaProps)] |  no  |  |

---


 
 
 #### [ListSchemaItem](#ListSchemaItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | global | string |  no  |  |
 | page | [[ConfigPage](#ConfigPage)] |  no  |  |
 | name | string |  no  |  |

---


 
 
 #### [Colors](#Colors)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bg_color | string |  no  |  |
 | primary_color | string |  no  |  |
 | secondary_color | string |  no  |  |
 | accent_color | string |  no  |  |
 | link_color | string |  no  |  |
 | button_secondary_color | string |  no  |  |

---


 
 
 #### [Custom](#Custom)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | props | string |  no  |  |

---


 
 
 #### [ConfigPage](#ConfigPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | settings | string |  no  |  |
 | page | string |  no  |  |

---


 
 
 #### [Font](#Font)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | family | string |  no  |  |
 | variants | [Variants](#Variants) |  no  |  |

---


 
 
 #### [Variants](#Variants)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | medium | [Medium](#Medium) |  no  |  |
 | semi_bold | [SemiBold](#SemiBold) |  no  |  |
 | bold | [Bold](#Bold) |  no  |  |
 | light | [Light](#Light) |  no  |  |
 | regular | [Regular](#Regular) |  no  |  |

---


 
 
 #### [Medium](#Medium)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | file | string |  no  |  |

---


 
 
 #### [SemiBold](#SemiBold)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | file | string |  no  |  |

---


 
 
 #### [Bold](#Bold)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | file | string |  no  |  |

---


 
 
 #### [Light](#Light)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | file | string |  no  |  |

---


 
 
 #### [Regular](#Regular)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | file | string |  no  |  |

---


 
 
 #### [Blocks](#Blocks)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | name | string |  no  |  |
 | props | [[BlocksProps](#BlocksProps)] |  no  |  |

---


 
 
 #### [GlobalSchemaProps](#GlobalSchemaProps)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | label | string |  no  |  |
 | type | string |  no  |  |
 | category | string |  no  |  |

---


 
 
 #### [BlocksProps](#BlocksProps)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | label | string |  no  |  |
 | type | string |  no  |  |

---




 
 
 #### [EditEmailRequestSchema](#EditEmailRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string |  no  |  |

---


 
 
 #### [SendVerificationLinkMobileRequestSchema](#SendVerificationLinkMobileRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | verified | boolean |  no  |  |
 | active | boolean |  no  |  |
 | country_code | string |  no  |  |
 | phone | string |  no  |  |
 | primary | boolean |  no  |  |

---


 
 
 #### [EditMobileRequestSchema](#EditMobileRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string |  no  |  |
 | phone | string |  no  |  |

---


 
 
 #### [EditProfileRequestSchema](#EditProfileRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | first_name | string |  no  |  |
 | last_name | string |  no  |  |
 | mobile | [EditProfileMobileSchema](#EditProfileMobileSchema) |  no  |  |
 | country_code | string |  no  |  |
 | email | string |  no  |  |
 | gender | string |  no  |  |
 | dob | string |  no  |  |
 | profile_pic_url | string |  no  |  |
 | android_hash | string |  no  |  |
 | sender | string |  no  |  |
 | register_token | string |  no  |  |

---


 
 
 #### [EditProfileMobileSchema](#EditProfileMobileSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | phone | string |  no  |  |
 | country_code | string |  no  |  |

---


 
 
 #### [SendEmailOtpRequestSchema](#SendEmailOtpRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string |  no  |  |
 | action | string |  no  |  |
 | token | string |  no  |  |
 | register_token | string |  no  |  |

---


 
 
 #### [VerifyEmailOtpRequestSchema](#VerifyEmailOtpRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string |  no  |  |
 | action | string |  no  |  |
 | register_token | string |  no  |  |
 | otp | string |  no  |  |

---


 
 
 #### [VerifyOtpRequestSchema](#VerifyOtpRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | request_id | string |  no  |  |
 | register_token | string |  no  |  |
 | otp | string |  no  |  |

---


 
 
 #### [SendMobileOtpRequestSchema](#SendMobileOtpRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mobile | string |  no  |  |
 | country_code | string |  no  |  |
 | action | string |  no  |  |
 | token | string |  no  |  |
 | android_hash | string |  no  |  |
 | force | string |  no  |  |
 | captcha_code | string |  no  |  |

---


 
 
 #### [UpdatePasswordRequestSchema](#UpdatePasswordRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | old_password | string |  no  |  |
 | new_password | string |  no  |  |

---


 
 
 #### [FormRegisterRequestSchema](#FormRegisterRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | first_name | string |  no  |  |
 | last_name | string |  no  |  |
 | gender | string |  no  |  |
 | email | string |  no  |  |
 | password | string |  no  |  |
 | phone | [FormRegisterRequestSchemaPhone](#FormRegisterRequestSchemaPhone) |  no  |  |
 | register_token | string |  no  |  |

---


 
 
 #### [TokenRequestBodySchema](#TokenRequestBodySchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | token | string |  no  |  |

---


 
 
 #### [ForgotPasswordRequestSchema](#ForgotPasswordRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  no  |  |
 | password | string |  no  |  |

---


 
 
 #### [CodeRequestBodySchema](#CodeRequestBodySchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  no  |  |

---


 
 
 #### [SendResetPasswordEmailRequestSchema](#SendResetPasswordEmailRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string |  no  |  |
 | captcha_code | string |  no  |  |

---


 
 
 #### [PasswordLoginRequestSchema](#PasswordLoginRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | captcha_code | string |  no  |  |
 | password | string |  no  |  |
 | username | string |  no  |  |

---


 
 
 #### [SendOtpRequestSchema](#SendOtpRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string |  no  |  |
 | captcha_code | string |  no  |  |
 | mobile | string |  no  |  |

---


 
 
 #### [OAuthRequestSchema](#OAuthRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_signed_in | boolean |  no  |  |
 | oauth2 | [OAuthRequestSchemaOauth2](#OAuthRequestSchemaOauth2) |  no  |  |
 | profile | [OAuthRequestSchemaProfile](#OAuthRequestSchemaProfile) |  no  |  |

---


 
 
 #### [UserObjectSchema](#UserObjectSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | [UserSchema](#UserSchema) |  no  |  |

---


 
 
 #### [AuthSuccess](#AuthSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | register_token | string |  no  |  |
 | user_exists | boolean |  no  |  |
 | user | [UserSchema](#UserSchema) |  no  |  |

---


 
 
 #### [SendOtpResponse](#SendOtpResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | resend_timer | number |  no  |  |
 | resend_token | string |  no  |  |
 | success | boolean |  no  |  |
 | request_id | string |  no  |  |
 | message | string |  no  |  |
 | mobile | string |  no  |  |
 | country_code | string |  no  |  |
 | email | string |  no  |  |
 | resend_email_token | string |  no  |  |
 | register_token | string |  no  |  |
 | verify_email_otp | boolean |  no  |  |
 | verify_mobile_otp | boolean |  no  |  |
 | user_exists | boolean |  no  |  |

---


 
 
 #### [ProfileEditSuccess](#ProfileEditSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | [UserSchema](#UserSchema) |  no  |  |
 | register_token | string |  no  |  |
 | user_exists | boolean |  no  |  |
 | verify_email_link | boolean |  no  |  |
 | verify_email_otp | boolean |  no  |  |
 | verify_mobile_otp | boolean |  no  |  |
 | email | string |  no  |  |

---


 
 
 #### [LoginSuccess](#LoginSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | [UserSchema](#UserSchema) |  no  |  |
 | request_id | string |  no  |  |
 | register_token | string |  no  |  |

---


 
 
 #### [VerifyOtpSuccess](#VerifyOtpSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | [UserSchema](#UserSchema) |  no  |  |
 | user_exists | boolean |  no  |  |
 | register_token | string |  no  |  |

---


 
 
 #### [ResetPasswordSuccess](#ResetPasswordSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  no  |  |

---


 
 
 #### [RegisterFormSuccess](#RegisterFormSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string |  no  |  |
 | resend_timer | number |  no  |  |
 | resend_token | string |  no  |  |
 | resend_email_token | string |  no  |  |
 | register_token | string |  no  |  |
 | success | boolean |  no  |  |
 | request_id | string |  no  |  |
 | message | string |  no  |  |
 | mobile | string |  no  |  |
 | country_code | string |  no  |  |
 | verify_email_otp | boolean |  no  |  |
 | verify_mobile_otp | boolean |  no  |  |
 | user_exists | boolean |  no  |  |

---


 
 
 #### [VerifyEmailSuccess](#VerifyEmailSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---


 
 
 #### [HasPasswordSuccess](#HasPasswordSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | result | boolean |  no  |  |

---


 
 
 #### [LogoutSuccess](#LogoutSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logout | boolean |  no  |  |

---


 
 
 #### [OtpSuccess](#OtpSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | resend_timer | number |  no  |  |
 | resend_token | string |  no  |  |
 | register_token | string |  no  |  |
 | success | boolean |  no  |  |
 | request_id | string |  no  |  |
 | message | string |  no  |  |
 | mobile | string |  no  |  |
 | country_code | string |  no  |  |

---


 
 
 #### [EmailOtpSuccess](#EmailOtpSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |

---


 
 
 #### [SessionListSuccess](#SessionListSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sessions | [string] |  no  |  |

---


 
 
 #### [VerifyMobileOTPSuccess](#VerifyMobileOTPSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | [UserSchema](#UserSchema) |  no  |  |
 | verify_mobile_link | boolean |  no  |  |

---


 
 
 #### [VerifyEmailOTPSuccess](#VerifyEmailOTPSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | [UserSchema](#UserSchema) |  no  |  |
 | verify_email_link | boolean |  no  |  |

---


 
 
 #### [SendMobileVerifyLinkSuccess](#SendMobileVerifyLinkSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | verify_mobile_link | boolean |  no  |  |

---


 
 
 #### [SendEmailVerifyLinkSuccess](#SendEmailVerifyLinkSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | verify_email_link | boolean |  no  |  |

---


 
 
 #### [UserSearchResponseSchema](#UserSearchResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | users | [[UserSchema](#UserSchema)] |  no  |  |

---


 
 
 #### [CustomerListResponseSchema](#CustomerListResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[UserSchema](#UserSchema)] |  no  |  |
 | page | [PaginationSchema](#PaginationSchema) |  no  |  |

---


 
 
 #### [UnauthorizedSchema](#UnauthorizedSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---


 
 
 #### [UnauthenticatedSchema](#UnauthenticatedSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | authenticated | boolean |  no  |  |

---


 
 
 #### [NotFoundSchema](#NotFoundSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---


 
 
 #### [AuthenticationInternalServerErrorSchema](#AuthenticationInternalServerErrorSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---


 
 
 #### [AuthenticationApiErrorSchema](#AuthenticationApiErrorSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---


 
 
 #### [ProfileEditSuccessSchema](#ProfileEditSuccessSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string |  no  |  |
 | verify_email_otp | boolean |  no  |  |
 | verify_email_link | boolean |  no  |  |
 | verify_mobile_otp | boolean |  no  |  |
 | user | string |  no  |  |
 | register_token | string |  no  |  |
 | user_exists | boolean |  no  |  |

---


 
 
 #### [FormRegisterRequestSchemaPhone](#FormRegisterRequestSchemaPhone)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string |  no  |  |
 | mobile | string |  no  |  |

---


 
 
 #### [OAuthRequestSchemaOauth2](#OAuthRequestSchemaOauth2)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | access_token | string |  no  |  |
 | expiry | number |  no  |  |
 | refresh_token | string |  no  |  |

---


 
 
 #### [OAuthRequestSchemaProfile](#OAuthRequestSchemaProfile)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | last_name | string |  no  |  |
 | image | string |  no  |  |
 | id | string |  no  |  |
 | email | string |  no  |  |
 | full_name | string |  no  |  |
 | first_name | string |  no  |  |

---


 
 
 #### [AuthSuccessUser](#AuthSuccessUser)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | first_name | string |  no  |  |
 | last_name | string |  no  |  |
 | debug | [AuthSuccessUserDebug](#AuthSuccessUserDebug) |  no  |  |
 | active | boolean |  no  |  |
 | emails | [AuthSuccessUserEmails](#AuthSuccessUserEmails) |  no  |  |

---


 
 
 #### [AuthSuccessUserDebug](#AuthSuccessUserDebug)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | platform | string |  no  |  |

---


 
 
 #### [AuthSuccessUserEmails](#AuthSuccessUserEmails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string |  no  |  |
 | verified | boolean |  no  |  |
 | primary | boolean |  no  |  |
 | active | boolean |  no  |  |

---


 
 
 #### [CreateUserRequestSchema](#CreateUserRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | phone_number | string |  yes  |  |
 | email | string |  no  |  |
 | first_name | string |  no  |  |
 | last_name | string |  no  |  |
 | gender | string |  no  |  |
 | username | string |  yes  |  |
 | meta | string |  no  |  |

---


 
 
 #### [CreateUserResponseSchema](#CreateUserResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | [UserSchema](#UserSchema) |  no  |  |

---


 
 
 #### [CreateUserSessionRequestSchema](#CreateUserSessionRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | domain | string |  no  |  |
 | max_age | number |  no  |  |
 | user_id | string |  no  |  |

---


 
 
 #### [CreateUserSessionResponseSchema](#CreateUserSessionResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | domain | string |  no  |  |
 | max_age | number |  no  |  |
 | secure | boolean |  no  |  |
 | http_only | boolean |  no  |  |
 | cookie | string |  no  |  |

---


 
 
 #### [PlatformSchema](#PlatformSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string |  no  |  |
 | look_and_feel | [LookAndFeel](#LookAndFeel) |  no  |  |
 | updated_at | string |  no  |  |
 | active | boolean |  no  |  |
 | forgot_password | boolean |  no  |  |
 | login | [Login](#Login) |  no  |  |
 | skip_captcha | boolean |  no  |  |
 | name | string |  no  |  |
 | meta | [MetaSchema](#MetaSchema) |  no  |  |
 | _id | string |  no  |  |
 | social | [Social](#Social) |  no  |  |
 | required_fields | [RequiredFields](#RequiredFields) |  no  |  |
 | register_required_fields | [RegisterRequiredFields](#RegisterRequiredFields) |  no  |  |
 | skip_login | boolean |  no  |  |
 | flash_card | [FlashCard](#FlashCard) |  no  |  |
 | subtext | string |  no  |  |
 | social_tokens | [SocialTokens](#SocialTokens) |  no  |  |
 | created_at | string |  no  |  |
 | register | boolean |  no  |  |
 | mobile_image | string |  no  |  |
 | desktop_image | string |  no  |  |

---


 
 
 #### [LookAndFeel](#LookAndFeel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | card_position | string |  no  |  |
 | background_color | string |  no  |  |

---


 
 
 #### [Login](#Login)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | password | boolean |  no  |  |
 | otp | boolean |  no  |  |

---


 
 
 #### [MetaSchema](#MetaSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fynd_default | boolean |  no  |  |

---


 
 
 #### [Social](#Social)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | account_kit | boolean |  no  |  |
 | facebook | boolean |  no  |  |
 | google | boolean |  no  |  |

---


 
 
 #### [RequiredFields](#RequiredFields)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | [PlatformEmail](#PlatformEmail) |  no  |  |
 | mobile | [PlatformMobile](#PlatformMobile) |  no  |  |

---


 
 
 #### [PlatformEmail](#PlatformEmail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_required | boolean |  no  |  |
 | level | string |  no  |  |

---


 
 
 #### [PlatformMobile](#PlatformMobile)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_required | boolean |  no  |  |
 | level | string |  no  |  |

---


 
 
 #### [RegisterRequiredFields](#RegisterRequiredFields)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | [RegisterRequiredFieldsEmail](#RegisterRequiredFieldsEmail) |  no  |  |
 | mobile | [RegisterRequiredFieldsMobile](#RegisterRequiredFieldsMobile) |  no  |  |

---


 
 
 #### [RegisterRequiredFieldsEmail](#RegisterRequiredFieldsEmail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_required | boolean |  no  |  |
 | level | string |  no  |  |

---


 
 
 #### [RegisterRequiredFieldsMobile](#RegisterRequiredFieldsMobile)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_required | boolean |  no  |  |
 | level | string |  no  |  |

---


 
 
 #### [FlashCard](#FlashCard)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | text | string |  no  |  |
 | text_color | string |  no  |  |
 | background_color | string |  no  |  |

---


 
 
 #### [SocialTokens](#SocialTokens)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | facebook | [Facebook](#Facebook) |  no  |  |
 | account_kit | [Accountkit](#Accountkit) |  no  |  |
 | google | [Google](#Google) |  no  |  |

---


 
 
 #### [Facebook](#Facebook)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_id | string |  no  |  |

---


 
 
 #### [Accountkit](#Accountkit)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_id | string |  no  |  |

---


 
 
 #### [Google](#Google)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_id | string |  no  |  |

---


 
 
 #### [UpdateUserRequestSchema](#UpdateUserRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | first_name | string |  no  |  |
 | last_name | string |  no  |  |
 | gender | string |  no  |  |
 | meta | string |  no  |  |

---


 
 
 #### [UserSchema](#UserSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | first_name | string |  no  |  |
 | meta | string |  no  |  |
 | last_name | string |  no  |  |
 | phone_numbers | [[PhoneNumber](#PhoneNumber)] |  no  |  |
 | emails | [[Email](#Email)] |  no  |  |
 | gender | string |  no  |  |
 | dob | string |  no  |  |
 | active | boolean |  no  |  |
 | profile_pic_url | string |  no  |  |
 | username | string |  no  |  |
 | account_type | string |  no  |  |
 | uid | string |  no  |  |
 | debug | [Debug](#Debug) |  no  |  |
 | has_old_password_hash | boolean |  no  |  |
 | _id | string |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |

---




 
 
 #### [ApplicationLegal](#ApplicationLegal)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | string |  no  |  |
 | tnc | string |  no  |  |
 | policy | string |  no  |  |
 | shipping | string |  no  |  |
 | faq | [[ApplicationLegalFAQ](#ApplicationLegalFAQ)] |  no  |  |
 | _id | string |  no  |  |
 | updated_at | string |  no  |  |
 | created_at | string |  no  |  |

---


 
 
 #### [ApplicationLegalFAQ](#ApplicationLegalFAQ)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | question | string |  no  |  |
 | answer | string |  no  |  |

---


 
 
 #### [SeoComponent](#SeoComponent)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | seo | [SeoSchema](#SeoSchema) |  no  |  |

---


 
 
 #### [SeoSchema](#SeoSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app | string |  no  |  |
 | _id | string |  no  |  |
 | robots_txt | string |  no  |  |
 | sitemap_enabled | boolean |  no  |  |
 | custom_meta_tags | [[CustomMetaTag](#CustomMetaTag)] |  no  |  |
 | details | [Detail](#Detail) |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |

---


 
 
 #### [CustomMetaTag](#CustomMetaTag)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | content | string |  no  |  |
 | _id | string |  no  |  |

---


 
 
 #### [Detail](#Detail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | description | string |  no  |  |

---


 
 
 #### [AnnouncementPageSchema](#AnnouncementPageSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page_slug | string |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [EditorMeta](#EditorMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | foreground_color | string |  no  |  |
 | background_color | string |  no  |  |
 | content_type | string |  no  |  |
 | content | string |  no  |  |

---


 
 
 #### [AnnouncementAuthorSchema](#AnnouncementAuthorSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_by | string |  no  |  |
 | modified_by | string |  no  |  |

---


 
 
 #### [AdminAnnouncementSchema](#AdminAnnouncementSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | platforms | [string] |  no  |  |
 | title | string |  no  |  |
 | announcement | string |  no  |  |
 | pages | [[AnnouncementPageSchema](#AnnouncementPageSchema)] |  no  |  |
 | editor_meta | [EditorMeta](#EditorMeta) |  no  |  |
 | author | [AnnouncementAuthorSchema](#AnnouncementAuthorSchema) |  no  |  |
 | created_at | string |  no  |  |
 | app | string |  no  |  |
 | modified_at | string |  no  |  |
 | _schedule | [ScheduleSchema](#ScheduleSchema) |  no  |  |

---


 
 
 #### [ScheduleSchema](#ScheduleSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cron | string |  no  |  |
 | start | string |  no  |  |
 | end | string |  no  |  |
 | duration | number |  no  |  |
 | next_schedule | [[NextSchedule](#NextSchedule)] |  no  |  |

---


 
 
 #### [NextSchedule](#NextSchedule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | start | string |  no  |  |
 | end | string |  no  |  |

---


 
 
 #### [AnnouncementSchema](#AnnouncementSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | announcement | string |  no  |  |
 | schedule | [ScheduleStartSchema](#ScheduleStartSchema) |  no  |  |

---


 
 
 #### [ScheduleStartSchema](#ScheduleStartSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | start | string |  no  |  |
 | end | string |  no  |  |

---


 
 
 #### [BlogGetResponse](#BlogGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[BlogSchema](#BlogSchema)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [ResourceContent](#ResourceContent)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | value | string |  no  |  |

---


 
 
 #### [Asset](#Asset)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aspect_ratio | string |  no  |  |
 | id | string |  no  |  |
 | secure_url | string |  no  |  |

---


 
 
 #### [Author](#Author)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | designation | string |  no  |  |
 | id | string |  no  |  |
 | name | string |  no  |  |

---


 
 
 #### [BlogSchema](#BlogSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | _custom_json | string |  no  |  |
 | application | string |  no  |  |
 | archived | boolean |  no  |  |
 | author | [Author](#Author) |  no  |  |
 | content | [[ResourceContent](#ResourceContent)] |  no  |  |
 | feature_image | [Asset](#Asset) |  no  |  |
 | published | boolean |  no  |  |
 | reading_time | string |  no  |  |
 | slug | string |  no  |  |
 | tags | [string] |  no  |  |
 | seo | [SEO](#SEO) |  no  |  |
 | _schedule | [CronSchedule](#CronSchedule) |  no  |  |
 | title | string |  no  |  |
 | date_meta | [DateMeta](#DateMeta) |  no  |  |

---


 
 
 #### [SEO](#SEO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  no  |  |
 | image | [SEOImage](#SEOImage) |  no  |  |
 | title | string |  no  |  |

---


 
 
 #### [SEOImage](#SEOImage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | url | string |  no  |  |

---


 
 
 #### [DateMeta](#DateMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_on | string |  no  |  |
 | modified_on | string |  no  |  |

---


 
 
 #### [BlogRequest](#BlogRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | string |  no  |  |
 | _custom_json | string |  no  |  |
 | author | [Author](#Author) |  no  |  |
 | content | [[ResourceContent](#ResourceContent)] |  no  |  |
 | feature_image | [Asset](#Asset) |  no  |  |
 | published | boolean |  no  |  |
 | reading_time | string |  no  |  |
 | slug | string |  no  |  |
 | tags | [string] |  no  |  |
 | title | string |  no  |  |
 | seo | [SEO](#SEO) |  no  |  |
 | _schedule | [CronSchedule](#CronSchedule) |  no  |  |

---


 
 
 #### [GetAnnouncementListSchema](#GetAnnouncementListSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[AdminAnnouncementSchema](#AdminAnnouncementSchema)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [CreateAnnouncementSchema](#CreateAnnouncementSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | data | [AdminAnnouncementSchema](#AdminAnnouncementSchema) |  no  |  |

---


 
 
 #### [Navigation](#Navigation)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | slug | string |  no  |  |
 | orientation | string |  no  |  |
 | created_by | [CreatedBySchema](#CreatedBySchema) |  no  |  |
 | date_meta | [DateMeta](#DateMeta) |  no  |  |
 | _id | string |  no  |  |
 | position | string |  no  |  |
 | application | string |  no  |  |
 | platform | string |  no  |  |
 | navigation | [NavigationReference](#NavigationReference) |  no  |  |

---


 
 
 #### [LocaleLanguage](#LocaleLanguage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | hi | [Language](#Language) |  no  |  |
 | ar | [Language](#Language) |  no  |  |
 | en_us | [Language](#Language) |  no  |  |

---


 
 
 #### [Language](#Language)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string |  no  |  |

---


 
 
 #### [Action](#Action)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page | [ActionPage](#ActionPage) |  no  |  |
 | popup | [ActionPage](#ActionPage) |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [ActionPage](#ActionPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | params | [String: [string]] |  no  |  |
 | query | [String: [string]] |  no  |  |
 | url | string |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [NavigationReference](#NavigationReference)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | acl | [string] |  no  |  |
 | tags | [string] |  no  |  |
 | _locale_language | [LocaleLanguage](#LocaleLanguage) |  no  |  |
 | image | string |  no  |  |
 | type | string |  no  |  |
 | action | [Action](#Action) |  no  |  |
 | active | boolean |  no  |  |
 | display | string |  no  |  |
 | sort_order | number |  no  |  |
 | sub_navigation | [[NavigationReference](#NavigationReference)] |  no  |  |

---


 
 
 #### [LandingPage](#LandingPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [LandingPageSchema](#LandingPageSchema) |  no  |  |
 | success | boolean |  no  |  |

---


 
 
 #### [ConfigurationSchema](#ConfigurationSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sleep_time | number |  no  |  |
 | start_on_launch | boolean |  no  |  |
 | duration | number |  no  |  |
 | slide_direction | string |  no  |  |

---


 
 
 #### [SlideshowMedia](#SlideshowMedia)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | url | string |  no  |  |
 | bg_color | string |  no  |  |
 | duration | number |  no  |  |
 | auto_decide_duration | boolean |  no  |  |
 | action | [Action](#Action) |  no  |  |

---


 
 
 #### [Slideshow](#Slideshow)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [SlideshowSchema](#SlideshowSchema) |  no  |  |
 | success | boolean |  no  |  |

---


 
 
 #### [AnnouncementsResponseSchema](#AnnouncementsResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | announcements | [String: [[AnnouncementSchema](#AnnouncementSchema)]] |  no  |  |
 | refresh_rate | number |  no  | number of seconds after which api should hit again to fetch new announcements |
 | refresh_pages | [string] |  no  | list of page slugs on which announcement should be fetched as soon as they are loaded |

---


 
 
 #### [FaqResponseSchema](#FaqResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | faqs | [[FaqSchema](#FaqSchema)] |  no  |  |

---


 
 
 #### [UpdateHandpickedSchema](#UpdateHandpickedSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | tag | [HandpickedTagSchema](#HandpickedTagSchema) |  no  |  |

---


 
 
 #### [HandpickedTagSchema](#HandpickedTagSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | position | string |  no  |  |
 | attributes | string |  no  |  |
 | name | string |  no  |  |
 | url | string |  no  |  |
 | type | string |  no  |  |
 | sub_type | string |  no  |  |
 | content | string |  no  |  |

---


 
 
 #### [RemoveHandpickedSchema](#RemoveHandpickedSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | tags | [string] |  no  |  |

---


 
 
 #### [CreateTagSchema](#CreateTagSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | sub_type | string |  no  |  |
 | _id | string |  no  |  |
 | type | string |  no  |  |
 | url | string |  no  |  |
 | position | string |  no  |  |
 | attributes | string |  no  |  |
 | content | string |  no  |  |

---


 
 
 #### [CreateTagRequestSchema](#CreateTagRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | tags | [[CreateTagSchema](#CreateTagSchema)] |  no  |  |

---


 
 
 #### [APIError](#APIError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | status | number |  no  |  |
 | code | string |  no  |  |
 | exception | string |  no  |  |
 | info | string |  no  |  |
 | request_id | string |  no  |  |
 | stack_trace | string |  no  |  |
 | meta | string |  no  |  |

---


 
 
 #### [CategorySchema](#CategorySchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | index | number |  no  |  |
 | title | string |  no  |  |
 | description | string |  no  |  |
 | children | [string] |  no  |  |
 | _id | string |  no  |  |
 | slug | string |  no  |  |
 | application | string |  no  |  |
 | icon_url | string |  no  |  |
 | _custom_json | string |  no  |  |

---


 
 
 #### [ChildrenSchema](#ChildrenSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | question | string |  no  |  |
 | answer | string |  no  |  |
 | slug | string |  no  |  |
 | application | string |  no  |  |
 | _id | string |  no  |  |

---


 
 
 #### [CategoryRequestSchema](#CategoryRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | slug | string |  no  |  |
 | title | string |  no  |  |

---


 
 
 #### [FAQCategorySchema](#FAQCategorySchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | index | number |  no  |  |
 | title | string |  no  |  |
 | description | string |  no  |  |
 | children | [[ChildrenSchema](#ChildrenSchema)] |  no  |  |
 | _id | string |  no  |  |
 | slug | string |  no  |  |
 | application | string |  no  |  |
 | icon_url | string |  no  |  |
 | _custom_json | string |  no  |  |

---


 
 
 #### [FaqSchema](#FaqSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | slug | string |  no  |  |
 | application | string |  no  |  |
 | _id | string |  no  |  |
 | question | string |  no  |  |
 | answer | string |  no  |  |

---


 
 
 #### [FAQ](#FAQ)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | slug | string |  no  |  |
 | question | string |  no  |  |
 | answer | string |  no  |  |

---


 
 
 #### [CreateFaqResponseSchema](#CreateFaqResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | faq | [FaqSchema](#FaqSchema) |  no  |  |

---


 
 
 #### [CreateFaqSchema](#CreateFaqSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | faq | [FAQ](#FAQ) |  no  |  |

---


 
 
 #### [GetFaqSchema](#GetFaqSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | faqs | [[FaqSchema](#FaqSchema)] |  no  |  |

---


 
 
 #### [UpdateFaqCategoryRequestSchema](#UpdateFaqCategoryRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category | [CategorySchema](#CategorySchema) |  no  |  |

---


 
 
 #### [CreateFaqCategoryRequestSchema](#CreateFaqCategoryRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category | [CategoryRequestSchema](#CategoryRequestSchema) |  no  |  |

---


 
 
 #### [CreateFaqCategorySchema](#CreateFaqCategorySchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category | [CategorySchema](#CategorySchema) |  no  |  |

---


 
 
 #### [GetFaqCategoriesSchema](#GetFaqCategoriesSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | categories | [[CategorySchema](#CategorySchema)] |  no  |  |

---


 
 
 #### [GetFaqCategoryBySlugSchema](#GetFaqCategoryBySlugSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category | [FAQCategorySchema](#FAQCategorySchema) |  no  |  |

---


 
 
 #### [LandingPageGetResponse](#LandingPageGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[LandingPageSchema](#LandingPageSchema)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [LandingPageSchema](#LandingPageSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | slug | string |  no  |  |
 | action | [Action](#Action) |  no  |  |
 | platform | [string] |  no  |  |
 | created_by | [CreatedBySchema](#CreatedBySchema) |  no  |  |
 | date_meta | [DateMeta](#DateMeta) |  no  |  |
 | _id | string |  no  |  |
 | application | string |  no  |  |
 | archived | boolean |  no  |  |
 | _custom_json | string |  no  |  |

---


 
 
 #### [DefaultNavigationResponse](#DefaultNavigationResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[NavigationSchema](#NavigationSchema)] |  no  |  |

---


 
 
 #### [NavigationGetResponse](#NavigationGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[NavigationSchema](#NavigationSchema)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [Orientation](#Orientation)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | portrait | [string] |  no  |  |
 | landscape | [string] |  no  |  |

---


 
 
 #### [NavigationSchema](#NavigationSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | application | string |  no  |  |
 | archived | boolean |  no  |  |
 | name | string |  no  |  |
 | slug | string |  no  |  |
 | platform | [string] |  no  |  |
 | created_by | [CreatedBySchema](#CreatedBySchema) |  no  |  |
 | date_meta | [DateMeta](#DateMeta) |  no  |  |
 | orientation | [Orientation](#Orientation) |  no  |  |
 | version | number |  no  |  |
 | navigation | [[NavigationReference](#NavigationReference)] |  no  |  |

---


 
 
 #### [NavigationRequest](#NavigationRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | slug | string |  no  |  |
 | platform | [string] |  no  |  |
 | orientation | [Orientation](#Orientation) |  no  |  |
 | navigation | [[NavigationReference](#NavigationReference)] |  no  |  |

---


 
 
 #### [CustomPageSchema](#CustomPageSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | platform | string |  no  |  |
 | title | string |  no  |  |
 | slug | string |  no  |  |
 | type | string |  no  |  |
 | orientation | string |  no  |  |
 | application | string |  no  |  |
 | description | string |  no  |  |
 | published | boolean |  no  |  |
 | tags | [string] |  no  |  |
 | content | [string] |  no  |  |
 | created_by | [CreatedBySchema](#CreatedBySchema) |  no  |  |
 | date_meta | [DateMeta](#DateMeta) |  no  |  |
 | _schedule | [ScheduleSchema](#ScheduleSchema) |  no  |  |

---


 
 
 #### [ContentSchema](#ContentSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | value | string |  no  |  |

---


 
 
 #### [CustomPage](#CustomPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [CustomPageSchema](#CustomPageSchema) |  no  |  |

---


 
 
 #### [FeatureImage](#FeatureImage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | secure_url | string |  no  |  |

---


 
 
 #### [PageGetResponse](#PageGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[PageSchema](#PageSchema)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [PageSpec](#PageSpec)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | specifications | [[PageSpecItem](#PageSpecItem)] |  no  |  |

---


 
 
 #### [PageSpecParam](#PageSpecParam)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string |  no  |  |
 | required | boolean |  no  |  |

---


 
 
 #### [PageSpecItem](#PageSpecItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page_type | string |  no  |  |
 | display_name | string |  no  |  |
 | params | [[PageSpecParam](#PageSpecParam)] |  no  |  |
 | query | [[PageSpecParam](#PageSpecParam)] |  no  |  |

---


 
 
 #### [PageSchema](#PageSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | application | string |  no  |  |
 | component_ids | [string] |  no  | Components can be used to store multiple components |
 | content | [string] |  no  |  |
 | created_by | [CreatedBySchema](#CreatedBySchema) |  no  |  |
 | date_meta | [DateMeta](#DateMeta) |  no  |  |
 | description | string |  no  |  |
 | feature_image | [Asset](#Asset) |  no  |  |
 | page_meta | [[PageMeta](#PageMeta)] |  no  |  |
 | _schedule | [ScheduleSchema](#ScheduleSchema) |  no  |  |
 | _custom_json | string |  no  |  |
 | orientation | string |  no  |  |
 | platform | string |  no  |  |
 | published | boolean |  no  |  |
 | slug | string |  no  |  |
 | tags | [string] |  no  |  |
 | title | string |  no  |  |
 | type | string |  no  |  |
 | seo | [SEO](#SEO) |  no  |  |
 | visibility | string |  no  |  |
 | archived | boolean |  no  |  |

---


 
 
 #### [CreatedBySchema](#CreatedBySchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |

---


 
 
 #### [PageContent](#PageContent)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | value | string |  no  |  |

---


 
 
 #### [PageMeta](#PageMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string |  no  |  |
 | value | string |  no  |  |

---


 
 
 #### [PageRequest](#PageRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _schedule | [CronSchedule](#CronSchedule) |  no  |  |
 | application | string |  no  |  |
 | author | [Author](#Author) |  no  |  |
 | _custom_json | string |  no  |  |
 | orientation | string |  no  |  |
 | content | [string] |  no  |  |
 | feature_image | [Asset](#Asset) |  no  |  |
 | published | boolean |  no  |  |
 | reading_time | string |  no  |  |
 | slug | string |  no  |  |
 | tags | [string] |  no  |  |
 | seo | [SEO](#SEO) |  no  |  |
 | title | string |  no  |  |

---


 
 
 #### [CronSchedule](#CronSchedule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cron | string |  no  |  |
 | start | string |  no  |  |
 | end | string |  no  |  |
 | duration | number |  no  |  |

---


 
 
 #### [PagePublishRequest](#PagePublishRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | publish | boolean |  no  |  |

---


 
 
 #### [PageMetaSchema](#PageMetaSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | system_pages | [[NavigationSchema](#NavigationSchema)] |  no  |  |
 | custom_pages | [[PageSchema](#PageSchema)] |  no  |  |
 | application_id | string |  no  |  |

---


 
 
 #### [SlideshowGetResponse](#SlideshowGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[SlideshowSchema](#SlideshowSchema)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [SlideshowSchema](#SlideshowSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | slug | string |  no  |  |
 | date_meta | [DateMeta](#DateMeta) |  no  |  |
 | application | string |  no  |  |
 | platform | string |  no  |  |
 | configuration | [ConfigurationSchema](#ConfigurationSchema) |  no  |  |
 | media | [[SlideshowMedia](#SlideshowMedia)] |  no  |  |
 | active | boolean |  no  |  |
 | archived | boolean |  no  |  |
 | _custom_json | string |  no  |  |

---


 
 
 #### [SlideshowRequest](#SlideshowRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | slug | string |  no  |  |
 | platform | string |  no  |  |
 | configuration | [ConfigurationSchema](#ConfigurationSchema) |  no  |  |
 | media | [SlideshowMedia](#SlideshowMedia) |  no  |  |
 | active | boolean |  no  |  |

---


 
 
 #### [Support](#Support)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created | boolean |  no  |  |
 | _id | string |  no  |  |
 | config_type | string |  no  |  |
 | application | string |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |
 | contact | [ContactSchema](#ContactSchema) |  no  |  |

---


 
 
 #### [PhoneProperties](#PhoneProperties)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string |  no  |  |
 | code | string |  no  |  |
 | number | string |  no  |  |

---


 
 
 #### [PhoneSchema](#PhoneSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean |  no  |  |
 | phone | [[PhoneProperties](#PhoneProperties)] |  no  |  |

---


 
 
 #### [EmailProperties](#EmailProperties)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string |  no  |  |
 | value | string |  no  |  |

---


 
 
 #### [EmailSchema](#EmailSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean |  no  |  |
 | email | [[EmailProperties](#EmailProperties)] |  no  |  |

---


 
 
 #### [ContactSchema](#ContactSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | phone | [PhoneSchema](#PhoneSchema) |  no  |  |
 | email | [EmailSchema](#EmailSchema) |  no  |  |

---


 
 
 #### [TagsSchema](#TagsSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | string |  no  |  |
 | _id | string |  no  |  |
 | tags | [[TagSchema](#TagSchema)] |  no  |  |

---


 
 
 #### [TagSchema](#TagSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | url | string |  no  |  |
 | type | string |  no  |  |
 | sub_type | string |  no  |  |
 | _id | string |  no  |  |
 | position | string |  no  |  |
 | attributes | string |  no  |  |
 | content | string |  no  |  |

---




 
 
 #### [CommunicationConsentReq](#CommunicationConsentReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | response | string |  no  |  |
 | action | string |  no  |  |
 | channel | string |  no  |  |

---


 
 
 #### [CommunicationConsentRes](#CommunicationConsentRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_id | string |  no  |  |
 | user_id | string |  no  |  |
 | channels | [CommunicationConsentChannels](#CommunicationConsentChannels) |  no  |  |

---


 
 
 #### [CommunicationConsentChannelsEmail](#CommunicationConsentChannelsEmail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | response | string |  no  |  |
 | display_name | string |  no  |  |

---


 
 
 #### [CommunicationConsentChannelsSms](#CommunicationConsentChannelsSms)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | response | string |  no  |  |
 | display_name | string |  no  |  |

---


 
 
 #### [CommunicationConsentChannelsWhatsapp](#CommunicationConsentChannelsWhatsapp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | response | string |  no  |  |
 | display_name | string |  no  |  |
 | country_code | string |  no  |  |
 | phone_number | string |  no  |  |

---


 
 
 #### [CommunicationConsentChannels](#CommunicationConsentChannels)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | [CommunicationConsentChannelsEmail](#CommunicationConsentChannelsEmail) |  no  |  |
 | sms | [CommunicationConsentChannelsSms](#CommunicationConsentChannelsSms) |  no  |  |
 | whatsapp | [CommunicationConsentChannelsWhatsapp](#CommunicationConsentChannelsWhatsapp) |  no  |  |

---


 
 
 #### [CommunicationConsent](#CommunicationConsent)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_id | string |  no  |  |
 | user_id | string |  no  |  |
 | channels | [CommunicationConsentChannels](#CommunicationConsentChannels) |  no  |  |

---


 
 
 #### [PushtokenReq](#PushtokenReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string |  no  |  |
 | bundle_identifier | string |  no  |  |
 | push_token | string |  no  |  |
 | unique_device_id | string |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [PushtokenRes](#PushtokenRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | bundle_identifier | string |  no  |  |
 | push_token | string |  no  |  |
 | unique_device_id | string |  no  |  |
 | type | string |  no  |  |
 | platform | string |  no  |  |
 | application_id | string |  no  |  |
 | user_id | string |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |
 | expired_at | string |  no  |  |

---




 
 
 #### [QRCodeResp](#QRCodeResp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | link | string |  no  |  |
 | svg | string |  no  |  |

---


 
 
 #### [RedirectDevice](#RedirectDevice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | link | string |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [WebRedirect](#WebRedirect)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | link | string |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [Redirects](#Redirects)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ios | [RedirectDevice](#RedirectDevice) |  no  |  |
 | android | [RedirectDevice](#RedirectDevice) |  no  |  |
 | web | [WebRedirect](#WebRedirect) |  no  |  |
 | force_web | boolean |  no  |  |

---


 
 
 #### [CampaignShortLink](#CampaignShortLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | source | string |  no  |  |
 | medium | string |  no  |  |

---


 
 
 #### [Attribution](#Attribution)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | campaign_cookie_expiry | string |  no  |  |

---


 
 
 #### [SocialMediaTags](#SocialMediaTags)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | description | string |  no  |  |
 | image | string |  no  |  |

---


 
 
 #### [ShortLinkReq](#ShortLinkReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  yes  | Give a name to the link. |
 | url | string |  yes  | The web address to shorten. |
 | hash | string |  no  |  |
 | active | boolean |  no  |  |
 | expire_at | string |  no  |  |
 | enable_tracking | boolean |  no  |  |
 | personalized | boolean |  no  | To create personalized short links. |
 | campaign | [CampaignShortLink](#CampaignShortLink) |  no  |  |
 | redirects | [Redirects](#Redirects) |  no  |  |
 | attribution | [Attribution](#Attribution) |  no  |  |
 | social_media_tags | [SocialMediaTags](#SocialMediaTags) |  no  |  |
 | count | number |  no  |  |

---


 
 
 #### [UrlInfo](#UrlInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | original | string |  no  |  |
 | short | string |  no  |  |
 | hash | string |  no  |  |

---


 
 
 #### [ShortLinkRes](#ShortLinkRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | url | [UrlInfo](#UrlInfo) |  no  |  |
 | created_by | string |  no  |  |
 | app_redirect | boolean |  no  |  |
 | fallback | string |  no  |  |
 | active | boolean |  no  |  |
 | _id | string |  no  |  |
 | enable_tracking | boolean |  no  |  |
 | expire_at | string |  no  |  |
 | application | string |  no  |  |
 | user_id | string |  no  |  |
 | created_at | string |  no  |  |
 | meta | string |  no  |  |
 | updated_at | string |  no  |  |
 | personalized | boolean |  no  | To create personalized short links |
 | campaign | [CampaignShortLink](#CampaignShortLink) |  no  |  |
 | redirects | [Redirects](#Redirects) |  no  |  |
 | attribution | [Attribution](#Attribution) |  no  |  |
 | social_media_tags | [SocialMediaTags](#SocialMediaTags) |  no  |  |
 | count | number |  no  |  |

---


 
 
 #### [ShortLinkList](#ShortLinkList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ShortLinkRes](#ShortLinkRes)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [ErrorRes](#ErrorRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---




 
 
 #### [FailedResponse](#FailedResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  yes  |  |

---


 
 
 #### [CDN](#CDN)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | url | string |  yes  |  |

---


 
 
 #### [Upload](#Upload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | expiry | number |  yes  |  |
 | url | string |  yes  |  |

---


 
 
 #### [StartResponse](#StartResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | file_name | string |  yes  |  |
 | file_path | string |  yes  |  |
 | content_type | string |  yes  |  |
 | method | string |  yes  |  |
 | namespace | string |  yes  |  |
 | operation | string |  yes  |  |
 | size | number |  yes  |  |
 | upload | [Upload](#Upload) |  yes  |  |
 | cdn | [CDN](#CDN) |  yes  |  |
 | tags | [string] |  no  |  |

---


 
 
 #### [StartRequest](#StartRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | file_name | string |  yes  |  |
 | content_type | string |  yes  |  |
 | size | number |  yes  |  |
 | tags | [string] |  no  |  |
 | params | string |  no  |  |

---


 
 
 #### [CompleteResponse](#CompleteResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  yes  |  |
 | file_name | string |  yes  |  |
 | file_path | string |  yes  |  |
 | content_type | string |  yes  |  |
 | method | string |  yes  |  |
 | namespace | string |  yes  |  |
 | operation | string |  yes  |  |
 | size | number |  yes  |  |
 | upload | [Upload](#Upload) |  yes  |  |
 | cdn | [CDN](#CDN) |  yes  |  |
 | success | string |  yes  |  |
 | tags | [string] |  no  |  |
 | created_on | string |  yes  |  |
 | modified_on | string |  yes  |  |

---


 
 
 #### [Opts](#Opts)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attempts | number |  no  |  |
 | timestamp | number |  no  |  |
 | delay | number |  no  |  |

---


 
 
 #### [CopyFileTask](#CopyFileTask)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | name | string |  yes  |  |
 | data | [BulkRequest](#BulkRequest) |  yes  |  |
 | opts | [Opts](#Opts) |  yes  |  |
 | progress | number |  yes  |  |
 | delay | number |  yes  |  |
 | timestamp | number |  yes  |  |
 | attempts_made | number |  yes  |  |
 | stacktrace | [string] |  no  |  |
 | finished_on | number |  yes  |  |
 | processed_on | number |  yes  |  |

---


 
 
 #### [BulkResponse](#BulkResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | tracking_url | string |  yes  |  |
 | task | [CopyFileTask](#CopyFileTask) |  yes  |  |

---


 
 
 #### [ReqConfiguration](#ReqConfiguration)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | concurrency | number |  no  |  |

---


 
 
 #### [Destination](#Destination)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | namespace | string |  yes  |  |
 | rewrite | string |  yes  |  |
 | basepath | string |  no  |  |

---


 
 
 #### [BulkRequest](#BulkRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | urls | [string] |  yes  |  |
 | destination | [Destination](#Destination) |  yes  |  |
 | configuration | [ReqConfiguration](#ReqConfiguration) |  no  |  |

---


 
 
 #### [Urls](#Urls)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | url | string |  yes  |  |
 | signed_url | string |  yes  |  |
 | expiry | number |  yes  |  |

---


 
 
 #### [SignUrlResponse](#SignUrlResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | urls | [[Urls](#Urls)] |  yes  |  |

---


 
 
 #### [SignUrlRequest](#SignUrlRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | expiry | number |  yes  |  |
 | urls | [string] |  yes  |  |

---


 
 
 #### [DbRecord](#DbRecord)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | tags | [string] |  yes  |  |
 | _id | string |  yes  |  |
 | file_name | string |  yes  |  |
 | operation | string |  no  |  |
 | namespace | string |  yes  |  |
 | content_type | string |  yes  |  |
 | file_path | string |  yes  |  |
 | upload | [Upload](#Upload) |  yes  |  |
 | cdn | [CDN](#CDN) |  yes  |  |
 | created_on | string |  yes  |  |
 | modified_on | string |  yes  |  |

---


 
 
 #### [BrowseResponse](#BrowseResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[DbRecord](#DbRecord)] |  yes  |  |
 | page | [Page](#Page) |  yes  |  |

---




 
 
 #### [ApplicationAboutResponse](#ApplicationAboutResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application_info | [ApplicationInfo](#ApplicationInfo) |  no  |  |
 | company_info | [CompanyInfo](#CompanyInfo) |  no  |  |
 | owner_info | [OwnerInfo](#OwnerInfo) |  no  |  |

---


 
 
 #### [ApplicationInfo](#ApplicationInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | domain | [Domain](#Domain) |  no  |  |
 | website | [ApplicationWebsite](#ApplicationWebsite) |  no  |  |
 | cors | [ApplicationCors](#ApplicationCors) |  no  |  |
 | description | string |  no  |  |
 | name | string |  no  |  |
 | meta | [ApplicationMeta](#ApplicationMeta) |  no  |  |
 | token | string |  no  |  |
 | secret | string |  no  |  |
 | created_at | string |  no  |  |
 | banner | [SecureUrl](#SecureUrl) |  no  |  |
 | logo | [SecureUrl](#SecureUrl) |  no  |  |
 | is_active | boolean |  no  |  |

---


 
 
 #### [CompanyInfo](#CompanyInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | uid | number |  no  |  |
 | created_on | string |  no  |  |
 | is_active | boolean |  no  |  |
 | name | string |  no  |  |
 | addresses | [[CompanyAboutAddress](#CompanyAboutAddress)] |  no  |  |
 | notification_emails | [string] |  no  |  |

---


 
 
 #### [OwnerInfo](#OwnerInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | emails | [[UserEmail](#UserEmail)] |  no  |  |
 | phone_numbers | [[UserPhoneNumber](#UserPhoneNumber)] |  no  |  |
 | first_name | string |  no  |  |
 | last_name | string |  no  |  |
 | profile_pic | string |  no  |  |

---


 
 
 #### [AppVersionRequest](#AppVersionRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | [ApplicationVersionRequest](#ApplicationVersionRequest) |  yes  |  |
 | device | [Device](#Device) |  yes  |  |
 | locale | string |  no  |  |
 | timezone | string |  no  |  |

---


 
 
 #### [ApplicationVersionRequest](#ApplicationVersionRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | name | string |  yes  |  |
 | namespace | string |  no  |  |
 | token | string |  no  |  |
 | version | string |  yes  |  |

---


 
 
 #### [Device](#Device)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | build | number |  no  |  |
 | model | string |  no  |  |
 | os | [OS](#OS) |  yes  |  |

---


 
 
 #### [OS](#OS)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  yes  |  |
 | version | string |  no  |  |

---


 
 
 #### [SupportedLanguage](#SupportedLanguage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | code | string |  no  |  |

---


 
 
 #### [LanguageResponse](#LanguageResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[SupportedLanguage](#SupportedLanguage)] |  no  |  |

---


 
 
 #### [AppStaffResponse](#AppStaffResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | staff_users | [[AppStaff](#AppStaff)] |  no  |  |

---


 
 
 #### [UpdateDialog](#UpdateDialog)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | interval | number |  no  |  |

---


 
 
 #### [OrderingStoreSelectRequest](#OrderingStoreSelectRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ordering_store | [OrderingStoreSelect](#OrderingStoreSelect) |  yes  |  |

---


 
 
 #### [OrderingStoreSelect](#OrderingStoreSelect)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | number |  yes  | store uid |

---


 
 
 #### [AppStaff](#AppStaff)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | order_incent | boolean |  no  |  |
 | stores | [number] |  no  |  |
 | application | string |  no  |  |
 | title | string |  no  |  |
 | user | string |  no  |  |
 | employee_code | string |  no  |  |
 | first_name | string |  no  |  |
 | last_name | string |  no  |  |
 | profile_pic_url | string |  no  |  |

---


 
 
 #### [AppTokenResponse](#AppTokenResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | tokens | [Tokens](#Tokens) |  no  |  |
 | _id | string |  no  |  |
 | application | string |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |
 | __v | number |  no  |  |

---


 
 
 #### [Tokens](#Tokens)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | firebase | [Firebase](#Firebase) |  no  |  |
 | moengage | [Moengage](#Moengage) |  no  |  |
 | segment | [Segment](#Segment) |  no  |  |
 | gtm | [Gtm](#Gtm) |  no  |  |
 | freshchat | [Freshchat](#Freshchat) |  no  |  |
 | safetynet | [Safetynet](#Safetynet) |  no  |  |
 | fynd_rewards | [FyndRewards](#FyndRewards) |  no  |  |
 | google_map | [GoogleMap](#GoogleMap) |  no  |  |

---


 
 
 #### [Firebase](#Firebase)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credentials | [Credentials](#Credentials) |  no  |  |
 | enabled | boolean |  no  |  |

---


 
 
 #### [Credentials](#Credentials)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ios | [Ios](#Ios) |  no  |  |
 | android | [Android](#Android) |  no  |  |
 | project_id | string |  no  |  |
 | gcm_sender_id | string |  no  |  |
 | application_id | string |  no  |  |
 | api_key | string |  no  |  |

---


 
 
 #### [Ios](#Ios)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application_id | string |  no  |  |
 | api_key | string |  no  |  |

---


 
 
 #### [Android](#Android)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application_id | string |  no  |  |
 | api_key | string |  no  |  |

---


 
 
 #### [Moengage](#Moengage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credentials | [MoengageCredentials](#MoengageCredentials) |  no  |  |
 | enabled | boolean |  no  |  |

---


 
 
 #### [MoengageCredentials](#MoengageCredentials)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_id | string |  no  |  |

---


 
 
 #### [Segment](#Segment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credentials | [SegmentCredentials](#SegmentCredentials) |  no  |  |
 | enabled | boolean |  no  |  |

---


 
 
 #### [SegmentCredentials](#SegmentCredentials)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | write_key | string |  no  |  |

---


 
 
 #### [Gtm](#Gtm)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credentials | [GtmCredentials](#GtmCredentials) |  no  |  |
 | enabled | boolean |  no  |  |

---


 
 
 #### [GtmCredentials](#GtmCredentials)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | api_key | string |  no  |  |

---


 
 
 #### [Freshchat](#Freshchat)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credentials | [FreshchatCredentials](#FreshchatCredentials) |  no  |  |
 | enabled | boolean |  no  |  |

---


 
 
 #### [FreshchatCredentials](#FreshchatCredentials)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_id | string |  no  |  |
 | app_key | string |  no  |  |
 | web_token | string |  no  |  |

---


 
 
 #### [Safetynet](#Safetynet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credentials | [SafetynetCredentials](#SafetynetCredentials) |  no  |  |
 | enabled | boolean |  no  |  |

---


 
 
 #### [SafetynetCredentials](#SafetynetCredentials)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | api_key | string |  no  |  |

---


 
 
 #### [FyndRewards](#FyndRewards)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credentials | [FyndRewardsCredentials](#FyndRewardsCredentials) |  no  |  |

---


 
 
 #### [FyndRewardsCredentials](#FyndRewardsCredentials)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | public_key | string |  no  |  |

---


 
 
 #### [GoogleMap](#GoogleMap)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credentials | [GoogleMapCredentials](#GoogleMapCredentials) |  no  |  |

---


 
 
 #### [GoogleMapCredentials](#GoogleMapCredentials)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | api_key | string |  no  |  |

---


 
 
 #### [RewardPointsConfig](#RewardPointsConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credit | [Credit](#Credit) |  no  |  |
 | debit | [Debit](#Debit) |  no  |  |

---


 
 
 #### [Credit](#Credit)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |

---


 
 
 #### [Debit](#Debit)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |
 | auto_apply | boolean |  no  |  |
 | strategy_channel | string |  no  |  |

---


 
 
 #### [ProductDetailFeature](#ProductDetailFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | similar | [string] |  no  |  |
 | seller_selection | boolean |  no  |  |
 | update_product_meta | boolean |  no  |  |
 | request_product | boolean |  no  |  |

---


 
 
 #### [LaunchPage](#LaunchPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page_type | string |  no  |  |
 | params | string |  no  |  |
 | query | string |  no  |  |

---


 
 
 #### [LandingPageFeature](#LandingPageFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | launch_page | [LaunchPage](#LaunchPage) |  no  |  |
 | continue_as_guest | boolean |  no  |  |
 | login_btn_text | string |  no  |  |
 | show_domain_textbox | boolean |  no  |  |
 | show_register_btn | boolean |  no  |  |

---


 
 
 #### [RegistrationPageFeature](#RegistrationPageFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ask_store_address | boolean |  no  |  |

---


 
 
 #### [AppFeature](#AppFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | product_detail | [ProductDetailFeature](#ProductDetailFeature) |  no  |  |
 | landing_page | [LandingPageFeature](#LandingPageFeature) |  no  |  |
 | registration_page | [RegistrationPageFeature](#RegistrationPageFeature) |  no  |  |
 | home_page | [HomePageFeature](#HomePageFeature) |  no  |  |
 | common | [CommonFeature](#CommonFeature) |  no  |  |
 | cart | [CartFeature](#CartFeature) |  no  |  |
 | qr | [QrFeature](#QrFeature) |  no  |  |
 | pcr | [PcrFeature](#PcrFeature) |  no  |  |
 | order | [OrderFeature](#OrderFeature) |  no  |  |
 | _id | string |  no  |  |
 | app | string |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |
 | __v | number |  no  |  |

---


 
 
 #### [HomePageFeature](#HomePageFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order_processing | boolean |  no  |  |

---


 
 
 #### [CommonFeature](#CommonFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | communication_optin_dialog | [CommunicationOptinDialogFeature](#CommunicationOptinDialogFeature) |  no  |  |
 | deployment_store_selection | [DeploymentStoreSelectionFeature](#DeploymentStoreSelectionFeature) |  no  |  |
 | listing_price | [ListingPriceFeature](#ListingPriceFeature) |  no  |  |
 | listing_page | [ListingPageFeature](#ListingPageFeature) |  no  |  |
 | currency | [CurrencyFeature](#CurrencyFeature) |  no  |  |
 | revenue_engine | [RevenueEngineFeature](#RevenueEngineFeature) |  no  |  |
 | feedback | [FeedbackFeature](#FeedbackFeature) |  no  |  |
 | compare_products | [CompareProductsFeature](#CompareProductsFeature) |  no  |  |
 | reward_points | [RewardPointsConfig](#RewardPointsConfig) |  no  |  |

---


 
 
 #### [CommunicationOptinDialogFeature](#CommunicationOptinDialogFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | visibility | boolean |  no  |  |

---


 
 
 #### [DeploymentStoreSelectionFeature](#DeploymentStoreSelectionFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [ListingPriceFeature](#ListingPriceFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | string |  no  |  |
 | sort | string |  no  |  |

---


 
 
 #### [ListingPageFeature](#ListingPageFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sort_on | string |  no  |  |

---


 
 
 #### [CurrencyFeature](#CurrencyFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | [string] |  no  |  |
 | type | string |  no  |  |
 | default_currency | string |  no  |  |

---


 
 
 #### [RevenueEngineFeature](#RevenueEngineFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |

---


 
 
 #### [FeedbackFeature](#FeedbackFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |

---


 
 
 #### [CompareProductsFeature](#CompareProductsFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |

---


 
 
 #### [CartFeature](#CartFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gst_input | boolean |  no  |  |
 | staff_selection | boolean |  no  |  |
 | placing_for_customer | boolean |  no  |  |
 | google_map | boolean |  no  |  |

---


 
 
 #### [QrFeature](#QrFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | boolean |  no  |  |
 | products | boolean |  no  |  |
 | collections | boolean |  no  |  |

---


 
 
 #### [PcrFeature](#PcrFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | staff_selection | boolean |  no  |  |

---


 
 
 #### [OrderFeature](#OrderFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | buy_again | boolean |  no  |  |

---


 
 
 #### [AppFeatureRequest](#AppFeatureRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | feature | [AppFeature](#AppFeature) |  no  |  |

---


 
 
 #### [AppFeatureResponse](#AppFeatureResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | feature | [AppFeature](#AppFeature) |  no  |  |

---


 
 
 #### [Currency](#Currency)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | is_active | boolean |  no  |  |
 | name | string |  no  |  |
 | code | string |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |
 | decimal_digits | number |  no  |  |
 | symbol | string |  no  |  |

---


 
 
 #### [Domain](#Domain)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | verified | boolean |  no  |  |
 | is_primary | boolean |  no  |  |
 | is_default | boolean |  no  |  |
 | is_shortlink | boolean |  no  |  |
 | _id | string |  no  |  |
 | name | string |  no  |  |

---


 
 
 #### [ApplicationWebsite](#ApplicationWebsite)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |
 | basepath | string |  no  |  |

---


 
 
 #### [ApplicationCors](#ApplicationCors)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | domains | [string] |  no  |  |

---


 
 
 #### [ApplicationAuth](#ApplicationAuth)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |

---


 
 
 #### [ApplicationRedirections](#ApplicationRedirections)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | from | string |  no  |  |
 | redirect_to | string |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [ApplicationMeta](#ApplicationMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | value | string |  no  |  |

---


 
 
 #### [SecureUrl](#SecureUrl)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | secure_url | string |  no  |  |

---


 
 
 #### [Application](#Application)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | website | [ApplicationWebsite](#ApplicationWebsite) |  no  |  |
 | cors | [ApplicationCors](#ApplicationCors) |  no  |  |
 | auth | [ApplicationAuth](#ApplicationAuth) |  no  |  |
 | description | string |  no  |  |
 | channel_type | string |  no  |  |
 | cache_ttl | number |  no  |  |
 | is_internal | boolean |  no  |  |
 | is_active | boolean |  no  |  |
 | _id | string |  no  |  |
 | name | string |  no  |  |
 | owner | string |  no  |  |
 | company_id | number |  no  |  |
 | token | string |  no  |  |
 | redirections | [[ApplicationRedirections](#ApplicationRedirections)] |  no  |  |
 | meta | [[ApplicationMeta](#ApplicationMeta)] |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |
 | __v | number |  no  |  |
 | banner | [SecureUrl](#SecureUrl) |  no  |  |
 | logo | [SecureUrl](#SecureUrl) |  no  |  |
 | favicon | [SecureUrl](#SecureUrl) |  no  |  |
 | domains | [[Domain](#Domain)] |  no  |  |
 | app_type | string |  no  |  |
 | mobile_logo | [SecureUrl](#SecureUrl) |  no  |  |
 | domain | [Domain](#Domain) |  no  |  |

---


 
 
 #### [NotFound](#NotFound)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---


 
 
 #### [UnhandledError](#UnhandledError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---


 
 
 #### [InvalidPayloadRequest](#InvalidPayloadRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---


 
 
 #### [SuccessMessageResponse](#SuccessMessageResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---


 
 
 #### [InventoryBrandRule](#InventoryBrandRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | criteria | string |  no  | Whether enable all or explicitly few brands as inventory |
 | brands | [number] |  no  | Brand uids in case of explicit criteria |

---


 
 
 #### [StoreCriteriaRule](#StoreCriteriaRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | companies | [number] |  no  | list of company uids |
 | brands | [number] |  no  | list of brand uids |

---


 
 
 #### [InventoryStoreRule](#InventoryStoreRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | criteria | string |  no  | Whether enable all or explicitly few stores or use filter of brands and company as inventory stores |
 | rules | [[StoreCriteriaRule](#StoreCriteriaRule)] |  no  | List of rules with company and brands uids. Used when critera is `filter` |
 | stores | [number] |  no  | List of store uids. Used when critera is `explicit` |

---


 
 
 #### [InventoryPaymentConfig](#InventoryPaymentConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mode_of_payment | string |  no  |  |
 | source | string |  no  |  |

---


 
 
 #### [StorePriorityRule](#StorePriorityRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |
 | storetype_order | [string] |  no  |  |

---


 
 
 #### [ArticleAssignmentRule](#ArticleAssignmentRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | store_priority | [StorePriorityRule](#StorePriorityRule) |  no  |  |

---


 
 
 #### [InventoryArticleAssignment](#InventoryArticleAssignment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | post_order_reassignment | boolean |  no  |  |
 | rules | [ArticleAssignmentRule](#ArticleAssignmentRule) |  no  |  |

---


 
 
 #### [CompanyAboutAddress](#CompanyAboutAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pincode | number |  no  |  |
 | address1 | string |  no  |  |
 | address2 | string |  no  |  |
 | city | string |  no  |  |
 | state | string |  no  |  |
 | country | string |  no  |  |
 | address_type | string |  no  |  |

---


 
 
 #### [UserEmail](#UserEmail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean |  no  |  |
 | primary | boolean |  no  |  |
 | verified | boolean |  no  |  |
 | email | string |  no  |  |

---


 
 
 #### [UserPhoneNumber](#UserPhoneNumber)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean |  no  |  |
 | primary | boolean |  no  |  |
 | verified | boolean |  no  |  |
 | country_code | number |  no  |  |
 | phone | string |  no  |  |

---


 
 
 #### [ApplicationInformation](#ApplicationInformation)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | [InformationAddress](#InformationAddress) |  no  |  |
 | support | [InformationSupport](#InformationSupport) |  no  |  |
 | social_links | [SocialLinks](#SocialLinks) |  no  |  |
 | links | [Links](#Links) |  no  |  |
 | copyright_text | string |  no  |  |
 | _id | string |  no  |  |
 | business_highlights | [BusinessHighlights](#BusinessHighlights) |  no  |  |
 | application | string |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |
 | __v | number |  no  |  |

---


 
 
 #### [InformationAddress](#InformationAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | loc | string |  no  |  |
 | address_line | [string] |  no  |  |
 | phone | [InformationPhone](#InformationPhone) |  no  |  |
 | city | string |  no  |  |
 | country | string |  no  |  |
 | pincode | number |  no  |  |

---


 
 
 #### [InformationPhone](#InformationPhone)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  no  |  |
 | number | string |  no  |  |

---


 
 
 #### [InformationSupport](#InformationSupport)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | phone | [string] |  no  |  |
 | email | [string] |  no  |  |
 | timing | string |  no  |  |

---


 
 
 #### [SocialLinks](#SocialLinks)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | facebook | [FacebookLink](#FacebookLink) |  no  |  |
 | instagram | [InstagramLink](#InstagramLink) |  no  |  |
 | twitter | [TwitterLink](#TwitterLink) |  no  |  |
 | pinterest | [PinterestLink](#PinterestLink) |  no  |  |
 | google_plus | [GooglePlusLink](#GooglePlusLink) |  no  |  |
 | youtube | [YoutubeLink](#YoutubeLink) |  no  |  |
 | linked_in | [LinkedInLink](#LinkedInLink) |  no  |  |
 | vimeo | [VimeoLink](#VimeoLink) |  no  |  |
 | blog_link | [BlogLink](#BlogLink) |  no  |  |

---


 
 
 #### [FacebookLink](#FacebookLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | icon | string |  no  |  |
 | link | string |  no  |  |

---


 
 
 #### [InstagramLink](#InstagramLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | icon | string |  no  |  |
 | link | string |  no  |  |

---


 
 
 #### [TwitterLink](#TwitterLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | icon | string |  no  |  |
 | link | string |  no  |  |

---


 
 
 #### [PinterestLink](#PinterestLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | icon | string |  no  |  |
 | link | string |  no  |  |

---


 
 
 #### [GooglePlusLink](#GooglePlusLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | icon | string |  no  |  |
 | link | string |  no  |  |

---


 
 
 #### [YoutubeLink](#YoutubeLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | icon | string |  no  |  |
 | link | string |  no  |  |

---


 
 
 #### [LinkedInLink](#LinkedInLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | icon | string |  no  |  |
 | link | string |  no  |  |

---


 
 
 #### [VimeoLink](#VimeoLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | icon | string |  no  |  |
 | link | string |  no  |  |

---


 
 
 #### [BlogLink](#BlogLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | icon | string |  no  |  |
 | link | string |  no  |  |

---


 
 
 #### [Links](#Links)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | link | string |  no  |  |

---


 
 
 #### [BusinessHighlights](#BusinessHighlights)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | title | string |  no  |  |
 | icon | string |  no  |  |
 | sub_title | string |  no  |  |

---


 
 
 #### [ApplicationDetail](#ApplicationDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  yes  |  |
 | description | string |  yes  |  |
 | logo | [SecureUrl](#SecureUrl) |  yes  |  |
 | mobile_logo | [SecureUrl](#SecureUrl) |  yes  |  |
 | favicon | [SecureUrl](#SecureUrl) |  yes  |  |
 | banner | [SecureUrl](#SecureUrl) |  yes  |  |
 | domain | [Domain](#Domain) |  no  |  |
 | domains | [[Domain](#Domain)] |  no  |  |
 | _id | string |  no  |  |

---


 
 
 #### [CurrenciesResponse](#CurrenciesResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Currency](#Currency)] |  no  |  |

---


 
 
 #### [StoreLatLong](#StoreLatLong)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | coordinates | [number] |  no  |  |

---


 
 
 #### [OptedStoreAddress](#OptedStoreAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | state | string |  no  |  |
 | address1 | string |  no  |  |
 | lat_long | [StoreLatLong](#StoreLatLong) |  no  |  |
 | address2 | string |  no  |  |
 | pincode | number |  no  |  |
 | country | string |  no  |  |
 | city | string |  no  |  |

---


 
 
 #### [OrderingStore](#OrderingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | [OptedStoreAddress](#OptedStoreAddress) |  no  |  |
 | _id | string |  no  |  |
 | uid | number |  no  |  |
 | name | string |  no  |  |
 | display_name | string |  no  |  |
 | store_type | string |  no  |  |
 | store_code | string |  no  |  |
 | pincode | number |  no  |  |
 | code | string |  no  |  |

---


 
 
 #### [OrderingStores](#OrderingStores)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page | [Page](#Page) |  no  |  |
 | items | [[OrderingStore](#OrderingStore)] |  no  |  |
 | deployed_stores | [number] |  no  |  |
 | all_stores | boolean |  no  |  |
 | enabled | boolean |  no  |  |
 | type | string |  no  |  |
 | _id | string |  no  |  |
 | app | string |  no  |  |
 | __v | number |  no  |  |

---




 
 
 #### [AggregatorConfigDetail](#AggregatorConfigDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | merchant_key | string |  no  | Unique merchant key |
 | key | string |  yes  | Payment gateway api key |
 | config_type | string |  yes  | Fynd or self payment gateway |
 | secret | string |  yes  | Masked payment gateway api secret |
 | sdk | boolean |  no  | SDK |
 | api | string |  no  | Payment gateway api endpoint |
 | merchant_id | string |  no  | Unique merchant id |
 | user_id | string |  no  | Registered User id |
 | pin | string |  no  | Masked pin |
 | verify_api | string |  no  | Payment gateway verify payment api endpoint |

---


 
 
 #### [AggregatorsConfigDetailResponse](#AggregatorsConfigDetailResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | juspay | [AggregatorConfigDetail](#AggregatorConfigDetail) |  no  |  |
 | stripe | [AggregatorConfigDetail](#AggregatorConfigDetail) |  no  |  |
 | rupifi | [AggregatorConfigDetail](#AggregatorConfigDetail) |  no  |  |
 | env | string |  yes  | Environment i.e Live or Test |
 | payumoney | [AggregatorConfigDetail](#AggregatorConfigDetail) |  no  |  |
 | razorpay | [AggregatorConfigDetail](#AggregatorConfigDetail) |  no  |  |
 | mswipe | [AggregatorConfigDetail](#AggregatorConfigDetail) |  no  |  |
 | simpl | [AggregatorConfigDetail](#AggregatorConfigDetail) |  no  |  |
 | success | boolean |  yes  |  |
 | ccavenue | [AggregatorConfigDetail](#AggregatorConfigDetail) |  no  |  |

---


 
 
 #### [ErrorCodeAndDescription](#ErrorCodeAndDescription)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  yes  | Error human understandable description. |
 | code | string |  yes  | Error descrption code. |

---


 
 
 #### [HttpErrorCodeAndResponse](#HttpErrorCodeAndResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | [ErrorCodeAndDescription](#ErrorCodeAndDescription) |  yes  |  |
 | success | boolean |  yes  | Response is successful or not |

---


 
 
 #### [AttachCardRequest](#AttachCardRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name_on_card | string |  no  |  |
 | nickname | string |  no  |  |
 | refresh | boolean |  no  | Refresh cache flag. |
 | card_id | string |  yes  | Card token of payment gateway. |

---


 
 
 #### [AttachCardsResponse](#AttachCardsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | string |  yes  | List of cards of customer. |
 | success | boolean |  yes  | Response is successful or not. |
 | message | string |  no  | Human readable message. |

---


 
 
 #### [CardPaymentGateway](#CardPaymentGateway)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aggregator | string |  yes  | Payment gateway name. |
 | customer_id | string |  no  | Payment gateway customer id. |
 | api | string |  no  | Payment gateway CARD api endpoint |

---


 
 
 #### [ActiveCardPaymentGatewayResponse](#ActiveCardPaymentGatewayResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cards | [CardPaymentGateway](#CardPaymentGateway) |  yes  | Card's payment gateway with customer id. |
 | success | boolean |  yes  | Response is successful or not. |
 | message | string |  yes  | Human readable message. |

---


 
 
 #### [Card](#Card)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aggregator_name | string |  yes  | aggregator_name |
 | card_brand | string |  no  | card_brand |
 | expired | boolean |  no  | expired |
 | card_fingerprint | string |  no  | card_fingerprint |
 | card_reference | string |  no  | card_reference |
 | card_number | string |  no  | card_number |
 | nickname | string |  no  | nickname |
 | card_name | string |  no  | card_name |
 | card_isin | string |  no  | card_isin |
 | card_type | string |  no  | card_type |
 | exp_month | number |  no  | exp_month |
 | card_id | string |  no  | card_id |
 | card_issuer | string |  no  | card_issuer |
 | exp_year | number |  no  | exp_year |
 | card_brand_image | string |  no  | card_brand_image |
 | card_token | string |  no  | card_token |

---


 
 
 #### [ListCardsResponse](#ListCardsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[Card](#Card)] |  no  | List of cards of customer. |
 | success | boolean |  yes  | Response is successful or not. |
 | message | string |  yes  | Human readable message. |

---


 
 
 #### [DeletehCardRequest](#DeletehCardRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | card_id | string |  yes  | Card token of payment gateway. |

---


 
 
 #### [DeleteCardsResponse](#DeleteCardsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  | Response is successful or not. |
 | message | string |  no  | Human readable message. |

---


 
 
 #### [ValidateCustomerRequest](#ValidateCustomerRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | merchant_params | string |  yes  | Extra meta fields. |
 | aggregator | string |  yes  | Payment gateway name in camel case i.e Simpl, Rupifi |
 | payload | string |  yes  | Hashed payload string. |
 | phone_number | string |  yes  | User mobile number without country code. |
 | transaction_amount_in_paise | number |  yes  | Payable amount in paise |

---


 
 
 #### [ValidateCustomerResponse](#ValidateCustomerResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | string |  yes  | Payment gateway response data |
 | success | boolean |  yes  | Response is successful or not |
 | message | string |  yes  | Error or success message. |

---


 
 
 #### [ChargeCustomerRequest](#ChargeCustomerRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | number |  yes  | Chargable amount of order. |
 | aggregator | string |  yes  | Payment gateway name i.e Simpl, Mswipe |
 | order_id | string |  yes  | Unique order id. |
 | verified | boolean |  no  | Already Verified flag from payment gateway i.e Mswipe |
 | transaction_token | string |  no  | Transaction token of payment gateway. |

---


 
 
 #### [ChargeCustomerResponse](#ChargeCustomerResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | delivery_address_id | string |  no  | Delivery adddress id of customer |
 | status | string |  yes  | Status of charged payment. |
 | aggregator | string |  yes  | Payment gateway name i.e Simpl, Mswipe |
 | order_id | string |  yes  | Unique order id. |
 | cart_id | string |  no  | Cart id of customer |
 | success | boolean |  yes  | Response is successful or not. |
 | message | string |  yes  | Human readable message. |

---


 
 
 #### [PaymentInitializationRequest](#PaymentInitializationRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | merchant_order_id | string |  yes  | Unique fynd order id |
 | timeout | number |  yes  | Payment polling timeout if not recieved response |
 | polling_url | string |  yes  | Polling url to check payment status |
 | virtual_id | string |  no  | Bharat QR code virtual id |
 | customer_id | string |  yes  | Payment gateway customer id. |
 | aggregator | string |  yes  | Payment gateway name |
 | aggregator_order_id | string |  yes  | Payment gateway order id |
 | method | string |  yes  | Payment method |
 | razorpay_payment_id | string |  yes  | Payment gateway payment id |

---


 
 
 #### [PaymentInitializationResponse](#PaymentInitializationResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | merchant_order_id | string |  yes  | order id |
 | currency | string |  no  | Currency code. |
 | polling_url | string |  yes  | Polling url. |
 | amount | number |  no  | Payable amount. |
 | timeout | number |  no  | timeout. |
 | bqr_image | string |  no  | Bharath qr image url. |
 | virtual_id | string |  no  | Payment virtual address. |
 | customer_id | string |  no  | Payment gateway customer id. |
 | status | string |  no  | Status of payment. |
 | aggregator | string |  yes  | Payment gateway name |
 | vpa | string |  no  | Customer vpa address |
 | aggregator_order_id | string |  no  | Payment order id |
 | method | string |  yes  | Payment method |
 | success | boolean |  yes  | Response is successful or not. |
 | razorpay_payment_id | string |  no  | Payment  id. |

---


 
 
 #### [PaymentStatusUpdateRequest](#PaymentStatusUpdateRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | merchant_order_id | string |  yes  | Unique fynd order id |
 | currency | string |  yes  | Currency code. |
 | contact | string |  yes  | Customer valid mobile number |
 | amount | number |  yes  | Payable amount. |
 | email | string |  yes  | Customer valid email |
 | customer_id | string |  yes  | Payment gateway customer id. |
 | status | string |  yes  | Status of payment. |
 | aggregator | string |  yes  | Payment gateway name |
 | order_id | string |  yes  | Payment gateway order id |
 | vpa | string |  yes  | Customer vpa address |
 | method | string |  yes  | Payment method |

---


 
 
 #### [PaymentStatusUpdateResponse](#PaymentStatusUpdateResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aggregator_name | string |  yes  | Payment gateway name |
 | status | string |  yes  | Payment status |
 | retry | boolean |  yes  | Response is successful or not. |

---


 
 
 #### [AggregatorRoute](#AggregatorRoute)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | string |  no  | Data |
 | api_link | string |  no  | api_link |
 | payment_flow | string |  no  | payment_flow |

---


 
 
 #### [PaymentFlow](#PaymentFlow)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | juspay | [AggregatorRoute](#AggregatorRoute) |  no  | Juspay |
 | stripe | [AggregatorRoute](#AggregatorRoute) |  no  | Stripe |
 | rupifi | [AggregatorRoute](#AggregatorRoute) |  no  | Rupifi |
 | payubiz | [AggregatorRoute](#AggregatorRoute) |  no  | Payubiz |
 | razorpay | [AggregatorRoute](#AggregatorRoute) |  no  | Razorpay |
 | simpl | [AggregatorRoute](#AggregatorRoute) |  no  | simpl |
 | upi_razorpay | [AggregatorRoute](#AggregatorRoute) |  no  | UPI_Razorpay |
 | msipe | [AggregatorRoute](#AggregatorRoute) |  no  | mswipe |
 | bqr_razorpay | [AggregatorRoute](#AggregatorRoute) |  no  | BQR_Razorpay |
 | fynd | [AggregatorRoute](#AggregatorRoute) |  no  | Fynd |
 | ccavenue | [AggregatorRoute](#AggregatorRoute) |  no  | Ccavenue |

---


 
 
 #### [PaymentModeLogo](#PaymentModeLogo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | large | string |  yes  | large |
 | small | string |  yes  | smalll |

---


 
 
 #### [PaymentModeList](#PaymentModeList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | card_brand | string |  no  | card_brand |
 | card_name | string |  no  | card_name |
 | card_number | string |  no  | card_number |
 | display_name | string |  no  | display name |
 | aggregator_name | string |  yes  | aggregator_name |
 | timeout | number |  no  | timeout |
 | expired | boolean |  no  | expired |
 | name | string |  no  | name |
 | card_isin | string |  no  | card_isin |
 | card_type | string |  no  | card_type |
 | retry_count | number |  no  | retry_count |
 | exp_month | number |  no  | exp_month |
 | card_issuer | string |  no  | card_issuer |
 | intent_flow | string |  no  | intent_flow |
 | logo_url | [PaymentModeLogo](#PaymentModeLogo) |  no  | Logo |
 | card_token | string |  no  | card_token |
 | card_fingerprint | string |  no  | card_fingerprint |
 | card_reference | string |  no  | card_reference |
 | nickname | string |  no  | nickname |
 | display_priority | number |  no  | Dispaly Priority |
 | merchant_code | string |  no  | merchant code |
 | card_id | string |  no  | card_id |
 | card_brand_image | string |  no  | card_brand_image |
 | intent_app_error_list | [string] |  no  | intent_app_error_list |
 | exp_year | number |  no  | exp_year |
 | code | string |  no  | code |
 | fynd_vpa | string |  no  | fynd_vpa |

---


 
 
 #### [RootPaymentMode](#RootPaymentMode)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aggregator_name | string |  no  | Dispaly Priority |
 | name | string |  yes  | Payment mode name |
 | add_card_enabled | boolean |  no  | Annonymous card flag |
 | list | [[PaymentModeList](#PaymentModeList)] |  no  | Payment mode |
 | display_priority | number |  yes  | Dispaly Priority |
 | anonymous_enable | boolean |  no  | Annonymous card flag |
 | display_name | string |  yes  | Payment mode display name |

---


 
 
 #### [PaymentOptionAndFlow](#PaymentOptionAndFlow)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | payment_flows | [PaymentFlow](#PaymentFlow) |  yes  | payment_flows |
 | payment_option | [[RootPaymentMode](#RootPaymentMode)] |  yes  | Payment options |

---


 
 
 #### [PaymentModeRouteResponse](#PaymentModeRouteResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  | Response is successful or not |
 | payment_options | [PaymentOptionAndFlow](#PaymentOptionAndFlow) |  yes  | payment_options |

---


 
 
 #### [RupifiBannerData](#RupifiBannerData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  no  | Rupifi KYC status |
 | kyc_url | string |  no  | Rupifi KYC banner url. |

---


 
 
 #### [RupifiBannerResponse](#RupifiBannerResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [RupifiBannerData](#RupifiBannerData) |  yes  | Rupifi KYC banner details. |
 | success | boolean |  yes  | Successful or not. |

---


 
 
 #### [TransferItemsDetails](#TransferItemsDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |   |
 | name | string |  yes  |  Beneficiary Name |
 | logo_large | string |  yes  | Beneficiary large Logo |
 | display_name | boolean |  no  | Beneficiary Display Name |
 | logo_small | string |  yes  | Beneficiary small Logo |

---


 
 
 #### [TransferModeDetails](#TransferModeDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_name | string |  yes  | Beneficiary Mode Name |
 | items | [[TransferItemsDetails](#TransferItemsDetails)] |  no  | Beneficiary Mode Items |

---


 
 
 #### [TransferModeResponse](#TransferModeResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[TransferModeDetails](#TransferModeDetails)] |  yes  | Response Object |

---


 
 
 #### [UpdateRefundTransferModeRequest](#UpdateRefundTransferModeRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | transfer_mode | string |  yes  | Transfer Mode of the Beneficiary to be added |
 | enable | boolean |  yes  | True for enabling the Transfer Mode |

---


 
 
 #### [UpdateRefundTransferModeResponse](#UpdateRefundTransferModeResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  | Response is successful or not |

---


 
 
 #### [OrderBeneficiaryDetails](#OrderBeneficiaryDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number |  yes  |   |
 | transfer_mode | string |  yes  | Transfer Mode Of Account |
 | address | string |  yes  | Address of User |
 | display_name | string |  yes  | Display Name Of Account |
 | comment | boolean |  no  | Remarks |
 | delights_user_name | string |  yes  | User Id Who filled the Beneficiary  |
 | branch_name | boolean |  no  | Branch Name Of Account |
 | created_on | string |  yes  | Creation Date of Beneficiary |
 | modified_on | string |  yes  | MOdification Date of Beneficiary |
 | subtitle | string |  yes  | SHort Title Of Account |
 | title | string |  yes  | Title Of Account |
 | beneficiary_id | string |  yes  | Benenficiary Id |
 | mobile | boolean |  no  | MObile no of User |
 | account_no | string |  yes  | Account Number |
 | is_active | boolean |  yes  | Boolean Flag whether Beneficiary set or not |
 | account_holder | string |  yes  | Account Holder Name |
 | email | string |  yes  | EMail of User |
 | ifsc_code | string |  yes  | Ifsc Code Of Account |
 | bank_name | string |  yes  | Bank Name Of Account |

---


 
 
 #### [OrderBeneficiaryResponse](#OrderBeneficiaryResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | beneficiaries | [[OrderBeneficiaryDetails](#OrderBeneficiaryDetails)] |  yes  | All Beneficiaries Of An Order |
 | show_beneficiary_details | boolean |  no  | Show beneficiary details or not. |

---


 
 
 #### [NotFoundResourceError](#NotFoundResourceError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  yes  | Not Found |
 | code | string |  yes  | Bad Request Data |
 | success | boolean |  yes  | Response is successful or not |

---


 
 
 #### [IfscCodeResponse](#IfscCodeResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | branch_name | string |  yes  | Branch Name Of Account |
 | bank_name | string |  yes  | Bank Name Of Account |
 | success | boolean |  no  | Response is successful or not |

---


 
 
 #### [ErrorCodeDescription](#ErrorCodeDescription)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  yes  | Error human understandable description. |
 | code | string |  yes  | Error descrption code. |
 | success | boolean |  yes  | Response is successful or not |

---


 
 
 #### [AddBeneficiaryViaOtpVerificationRequest](#AddBeneficiaryViaOtpVerificationRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | hash_key | string |  yes  | Hash key of the beneficiary Id |
 | otp | string |  yes  | Otp sent to the given Mobile No |
 | request_id | string |  yes  | Request Id sent in  |

---


 
 
 #### [AddBeneficiaryViaOtpVerificationResponse](#AddBeneficiaryViaOtpVerificationResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | hash_key | string |  yes  | Hash key of the beneficiary Id |
 | otp | string |  yes  | Otp sent to the given Mobile No |
 | request_id | string |  yes  | Request Id of the otp  |

---


 
 
 #### [WrongOtpError](#WrongOtpError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  yes  | Wrong OTP Code |
 | success | string |  yes  | Response is successful or not |

---


 
 
 #### [BeneficiaryModeDetails](#BeneficiaryModeDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | branch_name | string |  yes  | Branch Name of the Account |
 | email | string |  yes  | Email of the Account Holder |
 | address | string |  no  | Address of the User |
 | account_no | string |  yes  | Account NUmber of the Account Holder |
 | mobile | string |  yes  | Moblie Number of the User |
 | wallet | string |  no  |  |
 | ifsc_code | string |  yes  | Ifsc Code of the Account |
 | bank_name | string |  yes  | Bank Name of the Account |
 | comment | string |  no  | Remarks added by The user |
 | vpa | string |  no  |  |
 | account_holder | string |  yes  | Name of the Account Holder |

---


 
 
 #### [AddBeneficiaryDetailsRequest](#AddBeneficiaryDetailsRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | transfer_mode | string |  yes  | Transfer Mode of the Beneficiary to be added |
 | shipment_id | string |  yes  | Shipment Id of the respective Merchant Order Id |
 | otp | string |  no  |  |
 | details | [BeneficiaryModeDetails](#BeneficiaryModeDetails) |  yes  | Beneficiary bank details |
 | order_id | string |  yes  | Merchant Order Id |
 | request_id | string |  no  |  |
 | delights | boolean |  yes  | True if  beneficiary to be added by delights or False if by User |

---


 
 
 #### [RefundAccountResponse](#RefundAccountResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | string |  no  | Refund account data. |
 | success | boolean |  yes  | Success or failure flag. |
 | message | string |  yes  | Response message |

---


 
 
 #### [WalletOtpRequest](#WalletOtpRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string |  yes  | Country Code of the Mobile Number |
 | mobile | string |  yes  | Wallet Moblie Number of the User |

---


 
 
 #### [WalletOtpResponse](#WalletOtpResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_verified_flag | string |  yes  | Boolean Flag whether OTP Validation is already done or not |
 | request_id | string |  yes  | request id  |
 | success | boolean |  no  | Response is successful or not |

---


 
 
 #### [SetDefaultBeneficiaryRequest](#SetDefaultBeneficiaryRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | beneficiary_id | string |  yes  | Beneficiary Hash Id of the beneficiary added |
 | order_id | string |  yes  | Merchant Order Id |

---


 
 
 #### [SetDefaultBeneficiaryResponse](#SetDefaultBeneficiaryResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  | Response is successful or not |
 | is_beneficiary_set | boolean |  yes  | Boolean Flag whether Beneficiary set or not |

---




 
 
 #### [OrderById](#OrderById)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order | [OrderSchema](#OrderSchema) |  yes  |  |

---


 
 
 #### [OrderList](#OrderList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[OrderSchema](#OrderSchema)] |  yes  |  |
 | page | [OrderPage](#OrderPage) |  yes  |  |
 | filters | [OrderFilters](#OrderFilters) |  yes  |  |

---


 
 
 #### [OrderPage](#OrderPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_total | number |  no  |  |
 | type | string |  no  |  |
 | size | number |  no  |  |
 | current | number |  no  |  |
 | has_next | boolean |  no  |  |

---


 
 
 #### [OrderFilters](#OrderFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | statuses | [[OrderStatuses](#OrderStatuses)] |  no  |  |

---


 
 
 #### [OrderStatuses](#OrderStatuses)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string |  no  |  |
 | value | number |  no  |  |
 | is_selected | boolean |  no  |  |

---


 
 
 #### [ShipmentById](#ShipmentById)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment | [Shipments](#Shipments) |  yes  |  |

---


 
 
 #### [ShipmentReasons](#ShipmentReasons)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reasons | [[Reasons](#Reasons)] |  yes  |  |

---


 
 
 #### [ShipmentStatusUpdateBody](#ShipmentStatusUpdateBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | statuses | [[StatusesBody](#StatusesBody)] |  yes  |  |
 | force_transition | boolean |  yes  |  |

---


 
 
 #### [StatusesBody](#StatusesBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  no  |  |
 | shipments | string |  no  |  |

---


 
 
 #### [ShipmentStatusUpdate](#ShipmentStatusUpdate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | [string] |  yes  |  |
 | status | boolean |  yes  |  |

---


 
 
 #### [ShipmentTrack](#ShipmentTrack)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | results | [[Track](#Track)] |  yes  |  |

---


 
 
 #### [OrderSchema](#OrderSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order_id | string |  no  |  |
 | breakup_values | [[BreakupValues](#BreakupValues)] |  no  |  |
 | order_created_time | string |  no  |  |
 | shipments | [[Shipments](#Shipments)] |  no  |  |
 | total_shipments_in_order | number |  no  |  |
 | user_info | [UserInfo](#UserInfo) |  no  |  |
 | bags_for_reorder | [[BagsForReorder](#BagsForReorder)] |  no  |  |

---


 
 
 #### [BagsForReorder](#BagsForReorder)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_id | number |  no  |  |
 | item_size | string |  no  |  |
 | store_id | number |  no  |  |
 | seller_id | number |  no  |  |
 | quantity | number |  no  |  |
 | article_assignment | [BagsForReorderArticleAssignment](#BagsForReorderArticleAssignment) |  no  |  |

---


 
 
 #### [BagsForReorderArticleAssignment](#BagsForReorderArticleAssignment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | level | string |  no  |  |
 | strategy | string |  no  |  |

---


 
 
 #### [PosOrderById](#PosOrderById)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order | [OrderSchema](#OrderSchema) |  yes  |  |

---


 
 
 #### [Bags](#Bags)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item | [Item](#Item) |  no  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | current_status | [CurrentStatus](#CurrentStatus) |  no  |  |
 | id | number |  no  |  |
 | financial_breakup | [[FinancialBreakup](#FinancialBreakup)] |  no  |  |

---


 
 
 #### [Item](#Item)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand | [ItemBrand](#ItemBrand) |  no  |  |
 | name | string |  no  |  |
 | size | string |  no  |  |
 | slug_key | string |  no  |  |
 | image | [string] |  no  |  |
 | code | string |  no  |  |
 | id | number |  no  |  |

---


 
 
 #### [Prices](#Prices)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount_paid_roundoff | number |  no  |  |
 | fynd_credits | number |  no  |  |
 | cod_charges | number |  no  |  |
 | cashback | number |  no  |  |
 | added_to_fynd_cash | boolean |  no  |  |
 | price_marked | number |  no  |  |
 | transfer_price | number |  no  |  |
 | coupon_value | number |  no  |  |
 | price_effective | number |  no  |  |
 | refund_credit | number |  no  |  |
 | amount_paid | number |  no  |  |
 | refund_amount | number |  no  |  |
 | cashback_applied | number |  no  |  |
 | gst_tax_percentage | number |  no  |  |
 | value_of_good | number |  no  |  |
 | brand_calculated_amount | number |  no  |  |
 | promotion_effective_discount | number |  no  |  |
 | discount | number |  no  |  |
 | coupon_effective_discount | number |  no  |  |
 | delivery_charge | number |  no  |  |

---


 
 
 #### [CurrentStatus](#CurrentStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | updated_at | string |  no  |  |
 | status | string |  no  |  |
 | name | string |  no  |  |
 | journey_type | string |  no  |  |

---


 
 
 #### [FinancialBreakup](#FinancialBreakup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_calculated_amount | number |  no  |  |
 | coupon_value | number |  no  |  |
 | amount_paid_roundoff | number |  no  |  |
 | gst_fee | string |  no  |  |
 | refund_credit | number |  no  |  |
 | cashback | number |  no  |  |
 | refund_amount | number |  no  |  |
 | value_of_good | number |  no  |  |
 | promotion_effective_discount | number |  no  |  |
 | size | string |  no  |  |
 | total_units | number |  no  |  |
 | discount | number |  no  |  |
 | amount_paid | number |  no  |  |
 | fynd_credits | number |  no  |  |
 | added_to_fynd_cash | boolean |  no  |  |
 | delivery_charge | number |  no  |  |
 | hsn_code | string |  no  |  |
 | coupon_effective_discount | number |  no  |  |
 | transfer_price | number |  no  |  |
 | identifiers | [Identifiers](#Identifiers) |  no  |  |
 | gst_tag | string |  no  |  |
 | price_marked | number |  no  |  |
 | price_effective | number |  no  |  |
 | cod_charges | number |  no  |  |
 | item_name | string |  no  |  |
 | cashback_applied | number |  no  |  |
 | gst_tax_percentage | number |  no  |  |

---


 
 
 #### [Identifiers](#Identifiers)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ean | string |  no  |  |
 | sku_code | string |  no  |  |

---


 
 
 #### [ItemBrand](#ItemBrand)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | logo | string |  no  |  |

---


 
 
 #### [BreakupValues](#BreakupValues)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string |  no  |  |
 | value | number |  no  |  |
 | name | string |  no  |  |

---


 
 
 #### [DeliveryAddress](#DeliveryAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pincode | string |  no  |  |
 | landmark | string |  no  |  |
 | contact_person | string |  no  |  |
 | phone | string |  no  |  |
 | state | string |  no  |  |
 | version | string |  no  |  |
 | address1 | string |  no  |  |
 | created_at | string |  no  |  |
 | address_type | string |  no  |  |
 | address_category | string |  no  |  |
 | area | string |  no  |  |
 | city | string |  no  |  |
 | latitude | number |  no  |  |
 | longitude | number |  no  |  |
 | email | string |  no  |  |
 | country | string |  no  |  |
 | address2 | string |  no  |  |
 | updated_at | string |  no  |  |
 | name | string |  no  |  |
 | address | string |  no  |  |

---


 
 
 #### [FulfillingStore](#FulfillingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  no  |  |
 | id | number |  no  |  |
 | name | string |  no  |  |
 | company_id | number |  no  |  |

---


 
 
 #### [Invoice](#Invoice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | updated_date | string |  no  |  |
 | invoice_url | string |  no  |  |
 | label_url | string |  no  |  |

---


 
 
 #### [Promise](#Promise)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | timestamp | [Timestamp](#Timestamp) |  no  |  |

---


 
 
 #### [Timestamp](#Timestamp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | min | string |  no  |  |
 | max | string |  no  |  |

---


 
 
 #### [Reasons](#Reasons)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reason_text | string |  no  |  |
 | show_text_area | boolean |  no  |  |
 | feedback_type | string |  no  |  |
 | flow | string |  no  |  |
 | reason_id | number |  no  |  |
 | priority | number |  no  |  |

---


 
 
 #### [ShipmentStatus](#ShipmentStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | hex_code | string |  no  |  |

---


 
 
 #### [ShipmentUserInfo](#ShipmentUserInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gender | string |  no  |  |
 | mobile | string |  no  |  |
 | first_name | string |  no  |  |
 | last_name | string |  no  |  |

---


 
 
 #### [Shipments](#Shipments)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order_id | string |  no  |  |
 | breakup_values | [[BreakupValues](#BreakupValues)] |  no  |  |
 | track_url | string |  no  |  |
 | traking_no | string |  no  |  |
 | tracking_details | [[TrackingDetails](#TrackingDetails)] |  no  |  |
 | beneficiary_details | boolean |  no  |  |
 | can_return | boolean |  no  |  |
 | prices | [Prices](#Prices) |  no  |  |
 | need_help_url | string |  no  |  |
 | shipment_id | string |  no  |  |
 | total_bags | number |  no  |  |
 | delivery_address | [DeliveryAddress](#DeliveryAddress) |  no  |  |
 | invoice | [Invoice](#Invoice) |  no  |  |
 | comment | string |  no  |  |
 | order_type | string |  no  |  |
 | promise | [Promise](#Promise) |  no  |  |
 | fulfilling_store | [FulfillingStore](#FulfillingStore) |  no  |  |
 | bags | [[Bags](#Bags)] |  no  |  |
 | can_cancel | boolean |  no  |  |
 | payment | [ShipmentPayment](#ShipmentPayment) |  no  |  |
 | shipment_created_at | string |  no  |  |
 | shipment_status | [ShipmentStatus](#ShipmentStatus) |  no  |  |
 | user_info | [ShipmentUserInfo](#ShipmentUserInfo) |  no  |  |
 | size_info | string |  no  |  |
 | total_details | [ShipmentTotalDetails](#ShipmentTotalDetails) |  no  |  |

---


 
 
 #### [ShipmentTotalDetails](#ShipmentTotalDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | total_price | number |  no  |  |
 | sizes | number |  no  |  |
 | pieces | number |  no  |  |

---


 
 
 #### [ShipmentPayment](#ShipmentPayment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logo | string |  no  |  |
 | mode | string |  no  |  |
 | status | string |  no  |  |

---


 
 
 #### [Track](#Track)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | awb | string |  no  |  |
 | updated_at | string |  no  |  |
 | last_location_recieved_at | string |  no  |  |
 | reason | string |  no  |  |
 | shipment_type | string |  no  |  |
 | status | string |  no  |  |
 | updated_time | string |  no  |  |
 | account_name | string |  no  |  |

---


 
 
 #### [TrackingDetails](#TrackingDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_current | boolean |  no  |  |
 | status | string |  no  |  |
 | time | string |  no  |  |
 | is_passed | boolean |  no  |  |

---


 
 
 #### [UserInfo](#UserInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gender | string |  no  |  |
 | mobile | string |  no  |  |
 | name | string |  no  |  |
 | email | string |  no  |  |

---


 
 
 #### [ApefaceApiError](#ApefaceApiError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---




 
 
 #### [ActionPageParams](#ActionPageParams)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | slug | [string] |  no  |  |

---


 
 
 #### [CatalogueOrderRequest](#CatalogueOrderRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | articles | [[RewardsArticle](#RewardsArticle)] |  no  |  |

---


 
 
 #### [CatalogueOrderResponse](#CatalogueOrderResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | articles | [[RewardsArticle](#RewardsArticle)] |  no  |  |

---


 
 
 #### [DiscountProperties](#DiscountProperties)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | absolute | number |  no  |  |
 | currency | string |  no  |  |
 | display_absolute | string |  no  |  |
 | display_percent | string |  no  |  |
 | percent | number |  no  |  |

---


 
 
 #### [Error](#Error)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | number |  no  |  |
 | exception | string |  no  |  |
 | info | string |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [Offer](#Offer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _schedule | [Schedule](#Schedule) |  no  |  |
 | active | boolean |  no  |  |
 | application_id | string |  no  |  |
 | banner_image | [Asset](#Asset) |  no  |  |
 | created_at | string |  no  |  |
 | name | string |  no  |  |
 | rule | string |  no  |  |
 | share | [ShareMessages](#ShareMessages) |  no  |  |
 | sub_text | string |  no  |  |
 | text | string |  no  |  |
 | type | string |  no  |  |
 | updated_at | string |  no  |  |
 | updated_by | string |  no  |  |
 | url | string |  no  |  |

---


 
 
 #### [OrderDiscountRequest](#OrderDiscountRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | currency | string |  no  |  |
 | order_amount | number |  yes  |  |

---


 
 
 #### [OrderDiscountResponse](#OrderDiscountResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | applied_rule_bucket | [OrderDiscountRuleBucket](#OrderDiscountRuleBucket) |  no  |  |
 | base_discount | [DiscountProperties](#DiscountProperties) |  no  |  |
 | discount | [DiscountProperties](#DiscountProperties) |  no  |  |
 | order_amount | number |  no  |  |
 | points | number |  no  |  |

---


 
 
 #### [OrderDiscountRuleBucket](#OrderDiscountRuleBucket)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | high | number |  no  |  |
 | low | number |  no  |  |
 | max | number |  no  |  |
 | value | number |  no  |  |
 | value_type | string |  no  |  |

---


 
 
 #### [PointsHistory](#PointsHistory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | application_id | string |  no  |  |
 | claimed | boolean |  no  |  |
 | created_at | string |  no  |  |
 | expires_on | string |  no  |  |
 | meta | string |  no  |  |
 | points | number |  no  |  |
 | remaining_points | number |  no  |  |
 | text_1 | string |  no  |  |
 | text_2 | string |  no  |  |
 | text_3 | string |  no  |  |
 | txn_name | string |  no  |  |
 | updated_at | string |  no  |  |
 | user_id | string |  no  |  |

---


 
 
 #### [PointsHistoryResponse](#PointsHistoryResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[PointsHistory](#PointsHistory)] |  no  | History is the list of points transaction. |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [PointsResponse](#PointsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | points | number |  no  | Points is the total available |

---


 
 
 #### [RedeemReferralCodeRequest](#RedeemReferralCodeRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | device_id | string |  yes  |  |
 | referral_code | string |  yes  |  |

---


 
 
 #### [RedeemReferralCodeResponse](#RedeemReferralCodeResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | points | number |  no  |  |
 | redeemed | boolean |  no  |  |
 | referrer_id | string |  no  |  |
 | referrer_info | string |  no  |  |

---


 
 
 #### [ReferralDetailsResponse](#ReferralDetailsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | referral | [Offer](#Offer) |  no  |  |
 | referrer_info | string |  no  |  |
 | share | [ShareMessages](#ShareMessages) |  no  |  |
 | user | [ReferralDetailsUser](#ReferralDetailsUser) |  no  |  |

---


 
 
 #### [ReferralDetailsUser](#ReferralDetailsUser)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | blocked | boolean |  no  |  |
 | points | number |  no  |  |
 | redeemed | boolean |  no  |  |
 | referral_code | string |  no  |  |

---


 
 
 #### [RewardsArticle](#RewardsArticle)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | points | number |  no  |  |
 | price | number |  no  |  |

---


 
 
 #### [Schedule](#Schedule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cron | string |  no  |  |
 | duration | number |  no  |  |
 | end | string |  no  |  |
 | start | string |  no  |  |

---


 
 
 #### [ShareMessages](#ShareMessages)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string |  no  |  |
 | facebook | string |  no  |  |
 | fallback | string |  no  |  |
 | message | string |  no  |  |
 | messenger | string |  no  |  |
 | sms | string |  no  |  |
 | text | string |  no  |  |
 | twitter | string |  no  |  |
 | whatsapp | string |  no  |  |

---




 
 
 #### [AbuseReport](#AbuseReport)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | abused | boolean |  no  |  |
 | date_meta | [DateMeta](#DateMeta) |  no  |  |
 | description | string |  no  |  |
 | entity | [Entity](#Entity) |  no  |  |
 | id | string |  no  |  |
 | name | string |  no  |  |
 | state | [FeedbackState](#FeedbackState) |  no  |  |
 | tags | [[TagMeta](#TagMeta)] |  no  |  |

---


 
 
 #### [Access](#Access)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | answer | boolean |  no  |  |
 | ask_question | boolean |  no  |  |
 | comment | boolean |  no  |  |
 | rnr | boolean |  no  |  |

---


 
 
 #### [AddMediaListRequest](#AddMediaListRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | entity_id | string |  no  |  |
 | entity_type | string |  no  |  |
 | media_list | [[AddMediaRequest](#AddMediaRequest)] |  no  |  |
 | ref_id | string |  no  |  |
 | ref_type | string |  no  |  |

---


 
 
 #### [AddMediaRequest](#AddMediaRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cloud_id | string |  no  |  |
 | cloud_name | string |  no  |  |
 | cloud_provider | string |  no  |  |
 | entity_id | string |  no  |  |
 | entity_type | string |  no  |  |
 | media_url | string |  no  |  |
 | ref_id | string |  no  |  |
 | ref_type | string |  no  |  |
 | tags | [string] |  no  |  |
 | thumbnail_url | string |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [ApplicationSchema](#ApplicationSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |

---


 
 
 #### [Attribute](#Attribute)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | date_meta | [DateMeta](#DateMeta) |  no  |  |
 | description | string |  no  |  |
 | id | string |  no  |  |
 | name | string |  no  |  |
 | slug | string |  no  |  |
 | tags | [[TagMeta](#TagMeta)] |  no  |  |

---


 
 
 #### [AttributeObject](#AttributeObject)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  no  |  |
 | name | string |  yes  |  |
 | slug | string |  no  |  |
 | title | string |  no  |  |
 | type | string |  yes  |  |
 | value | number |  yes  |  |

---


 
 
 #### [AttributeResponse](#AttributeResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Attribute](#Attribute)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [AutoDetectors](#AutoDetectors)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | text_detector | [[TextDetector](#TextDetector)] |  no  |  |

---


 
 
 #### [CheckEligibilityResponse](#CheckEligibilityResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | access | [Access](#Access) |  no  |  |

---


 
 
 #### [Cloud](#Cloud)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | name | string |  no  |  |
 | provider | string |  no  |  |

---


 
 
 #### [Comment](#Comment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | comment | [string] |  no  |  |
 | date_meta | [DateMeta](#DateMeta) |  no  |  |
 | entity | [Entity](#Entity) |  no  |  |
 | id | string |  no  |  |
 | name | string |  no  |  |
 | state | [FeedbackState](#FeedbackState) |  no  |  |
 | tags | [[TagMeta](#TagMeta)] |  no  |  |
 | vote_count | [VoteCount](#VoteCount) |  no  |  |

---


 
 
 #### [CommentGetResponse](#CommentGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Comment](#Comment)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [CommentRequest](#CommentRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | comment | [string] |  yes  |  |
 | entity_id | string |  yes  |  |
 | entity_type | string |  yes  |  |

---


 
 
 #### [CreateQNARequest](#CreateQNARequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | choices | [string] |  no  |  |
 | entity_id | string |  yes  |  |
 | entity_type | string |  yes  |  |
 | max_len | number |  no  |  |
 | sort_priority | number |  no  |  |
 | tags | [string] |  no  |  |
 | text | string |  yes  |  |
 | type | string |  no  |  |

---


 
 
 #### [CreatedBy](#CreatedBy)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | name | string |  no  |  |
 | tags | [[TagMeta](#TagMeta)] |  no  |  |

---


 
 
 #### [CursorGetResponse](#CursorGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [string] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [CustomerReview](#CustomerReview)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | auto_detectors | [AutoDetectors](#AutoDetectors) |  no  |  |
 | created_on | string |  no  |  |
 | device_meta | [DeviceMeta](#DeviceMeta) |  no  |  |
 | entity | [ProductEntity](#ProductEntity) |  no  |  |
 | id | string |  no  |  |
 | location_meta | [LocationMeta](#LocationMeta) |  no  |  |
 | modified_on | string |  no  |  |
 | name | string |  no  |  |
 | rating | [ReviewRating](#ReviewRating) |  no  |  |
 | review | [Review](#Review) |  no  |  |
 | slug | string |  no  |  |
 | state | [State](#State) |  no  |  |
 | tags | [[TagMeta](#TagMeta)] |  no  |  |
 | template | [Template](#Template) |  no  |  |
 | vote_count | [VoteCount](#VoteCount) |  no  |  |

---


 
 
 #### [DeviceMeta](#DeviceMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_version | string |  no  |  |
 | platform | string |  no  |  |

---


 
 
 #### [Entity](#Entity)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | type | string |  no  | entity type could be review/comment/ |

---


 
 
 #### [EntityMeta](#EntityMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order_id | string |  no  |  |
 | type | string |  no  | product, delivery,seller |

---


 
 
 #### [FeedbackError](#FeedbackError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  no  |  |
 | exception | string |  no  |  |
 | info | string |  no  |  |
 | message | string |  no  |  |
 | meta | string |  no  |  |
 | request_id | string |  no  |  |
 | stack_trace | string |  no  |  |
 | status | number |  no  |  |

---


 
 
 #### [FeedbackMedia](#FeedbackMedia)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | [ApplicationSchema](#ApplicationSchema) |  no  |  |
 | cloud | [Cloud](#Cloud) |  no  |  |
 | created_by | [CreatedBy](#CreatedBy) |  no  |  |
 | date_meta | [DateMeta](#DateMeta) |  no  |  |
 | description | string |  no  |  |
 | entity | [Entity](#Entity) |  no  |  |
 | id | string |  no  |  |
 | name | string |  no  |  |
 | reference | [Entity](#Entity) |  no  |  |
 | state | [MediaState](#MediaState) |  no  |  |
 | tags | [[TagMeta](#TagMeta)] |  no  |  |
 | type | string |  no  |  |
 | url | [Url](#Url) |  no  |  |

---


 
 
 #### [FeedbackState](#FeedbackState)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean |  no  |  |
 | archive | boolean |  no  |  |
 | media | string |  no  |  |
 | qna | boolean |  no  |  |
 | rating | boolean |  no  |  |
 | review | boolean |  no  |  |

---


 
 
 #### [GeoLoc](#GeoLoc)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | latitude | string |  no  |  |
 | longitude | string |  no  |  |

---


 
 
 #### [InsertResponse](#InsertResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ids | string |  no  |  |

---


 
 
 #### [Location](#Location)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string |  no  |  |
 | flag_url | string |  no  |  |
 | geo_loc | [GeoLoc](#GeoLoc) |  no  |  |
 | name | string |  no  |  |
 | pincode | string |  no  |  |

---


 
 
 #### [LocationMeta](#LocationMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | demand | [Location](#Location) |  no  |  |
 | supply | [Location](#Location) |  no  |  |

---


 
 
 #### [MediaGetResponse](#MediaGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[FeedbackMedia](#FeedbackMedia)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [MediaMeta](#MediaMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cloud | [Cloud](#Cloud) |  no  |  |
 | comment | [string] |  no  |  |
 | description | string |  no  |  |
 | id | string |  no  |  |
 | type | string |  no  |  |
 | url | [Url](#Url) |  no  |  |

---


 
 
 #### [MediaState](#MediaState)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | approve | boolean |  no  |  |
 | archive | boolean |  no  |  |

---


 
 
 #### [NumberGetResponse](#NumberGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [string] |  no  |  |
 | page | [PageNumber](#PageNumber) |  no  |  |

---


 
 
 #### [PageNumber](#PageNumber)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  no  |  |
 | has_next | boolean |  no  |  |
 | item_total | number |  no  |  |
 | size | number |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [ProductEntity](#ProductEntity)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  | For products, ID will be product ID, delivery, ID will be order id, seller ID will be company ID |
 | meta | [EntityMeta](#EntityMeta) |  no  |  |
 | type | string |  no  | product, delivery, seller, app, order |

---


 
 
 #### [QNA](#QNA)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | comments | [[Comment](#Comment)] |  no  |  |
 | date_meta | [DateMeta](#DateMeta) |  no  |  |
 | entity | [Entity](#Entity) |  no  |  |
 | id | string |  no  |  |
 | name | string |  no  |  |
 | question | [Question](#Question) |  no  |  |
 | state | [QNAState](#QNAState) |  no  |  |
 | tag | [string] |  no  |  |
 | tags | [[TagMeta](#TagMeta)] |  no  |  |

---


 
 
 #### [QNAGetResponse](#QNAGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[QNA](#QNA)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [QNAState](#QNAState)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean |  no  |  |
 | approve | boolean |  no  |  |
 | modify | boolean |  no  |  |
 | priority | number |  no  |  |
 | reply | boolean |  no  |  |
 | vote | boolean |  no  |  |

---


 
 
 #### [Question](#Question)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | choices | [string] |  no  |  |
 | max_len | number |  no  |  |
 | text | string |  no  |  |
 | type | string |  no  | type could be single_choice/text/multi_choice |

---


 
 
 #### [Rating](#Rating)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attributes | [[Attribute](#Attribute)] |  no  |  |
 | attributes_slugs | [string] |  no  |  |
 | ui | [UI](#UI) |  no  |  |

---


 
 
 #### [RatingGetResponse](#RatingGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Rating](#Rating)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [RatingMetric](#RatingMetric)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | avg | number |  no  |  |
 | count | number |  no  | Valuetype could be average, count |
 | name | string |  no  | Attribute name like Camera, Battery and rating name like a number 5,4,3 |
 | slug | string |  no  |  |
 | type | string |  no  | type could be attribute_rating and rating |

---


 
 
 #### [ReportAbuseGetResponse](#ReportAbuseGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[AbuseReport](#AbuseReport)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [ReportAbuseRequest](#ReportAbuseRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  no  |  |
 | entity_id | string |  yes  |  |
 | entity_type | string |  yes  |  |

---


 
 
 #### [Review](#Review)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | answer_ids | [string] |  no  |  |
 | comments | [string] |  no  |  |
 | description | string |  no  |  |
 | media_meta | [[MediaMeta](#MediaMeta)] |  no  |  |
 | title | string |  no  |  |

---


 
 
 #### [ReviewFacet](#ReviewFacet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string |  no  |  |
 | name | string |  no  |  |
 | selected | boolean |  no  |  |
 | slug | string |  no  |  |
 | type | string |  no  | rating, attribute rating |

---


 
 
 #### [ReviewGetResponse](#ReviewGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | facets | [[ReviewFacet](#ReviewFacet)] |  no  |  |
 | items | [[CustomerReview](#CustomerReview)] |  no  |  |
 | page | [Page](#Page) |  no  |  |
 | sort | [[SortMethod](#SortMethod)] |  no  |  |

---


 
 
 #### [ReviewMediaMeta](#ReviewMediaMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | max_count | number |  no  |  |
 | size | number |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [ReviewMetric](#ReviewMetric)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attribute_metric | [[RatingMetric](#RatingMetric)] |  no  |  |
 | created_on | string |  no  |  |
 | entity | [Entity](#Entity) |  no  | entity could be product, seller, delivery |
 | id | string |  no  |  |
 | modified_on | string |  no  |  |
 | rating_avg | number |  no  |  |
 | rating_count | number |  no  | total rating count |
 | rating_metric | [[RatingMetric](#RatingMetric)] |  no  |  |
 | review_count | number |  no  | total review count |

---


 
 
 #### [ReviewMetricGetResponse](#ReviewMetricGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ReviewMetric](#ReviewMetric)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [ReviewRating](#ReviewRating)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attributes | [[AttributeObject](#AttributeObject)] |  no  |  |
 | value | number |  no  |  |

---


 
 
 #### [SaveAttributeRequest](#SaveAttributeRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  no  |  |
 | name | string |  yes  |  |
 | slug | string |  yes  |  |

---


 
 
 #### [SortMethod](#SortMethod)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | selected | boolean |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [State](#State)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean |  no  |  |
 | approve | boolean |  no  |  |
 | auto_decided | boolean |  no  |  |
 | status | number |  no  |  |

---


 
 
 #### [TagMeta](#TagMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | media | [[MediaMeta](#MediaMeta)] |  no  |  |
 | name | string |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [Template](#Template)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | date_meta | [DateMeta](#DateMeta) |  no  |  |
 | entity | [Entity](#Entity) |  no  |  |
 | id | string |  no  |  |
 | name | string |  no  |  |
 | rating | [Rating](#Rating) |  no  |  |
 | review | [TemplateReview](#TemplateReview) |  no  |  |
 | state | [FeedbackState](#FeedbackState) |  no  |  |

---


 
 
 #### [TemplateGetResponse](#TemplateGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Template](#Template)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [TemplateReview](#TemplateReview)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  no  |  |
 | header | string |  no  |  |
 | image_meta | [ReviewMediaMeta](#ReviewMediaMeta) |  no  |  |
 | title | string |  no  |  |
 | video_meta | [ReviewMediaMeta](#ReviewMediaMeta) |  no  |  |
 | vote_allowed | boolean |  no  |  |

---


 
 
 #### [TextDetector](#TextDetector)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | confidence | number |  no  |  |
 | text | string |  no  |  |
 | text_class | string |  no  |  |
 | text_type | string |  no  |  |

---


 
 
 #### [UI](#UI)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | feedback_question | [string] |  no  |  |
 | icon | [UIIcon](#UIIcon) |  no  |  |
 | text | [string] |  no  |  |
 | type | string |  no  | star | images | gifs | smileys |

---


 
 
 #### [UIIcon](#UIIcon)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | string |  no  |  |
 | inactive | string |  no  |  |
 | selected | [string] |  no  |  |

---


 
 
 #### [UpdateAbuseStatusRequest](#UpdateAbuseStatusRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | abusive | boolean |  no  |  |
 | active | boolean |  no  |  |
 | approve | boolean |  no  |  |
 | description | string |  no  |  |
 | entity_id | string |  no  |  |
 | entity_type | string |  no  |  |
 | id | string |  no  |  |

---


 
 
 #### [UpdateAttributeRequest](#UpdateAttributeRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  no  |  |
 | name | string |  yes  |  |
 | slug | string |  no  |  |

---


 
 
 #### [UpdateCommentRequest](#UpdateCommentRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean |  no  |  |
 | approve | boolean |  no  |  |
 | comment | [string] |  yes  |  |
 | id | string |  yes  |  |

---


 
 
 #### [UpdateMediaListRequest](#UpdateMediaListRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | approve | boolean |  no  |  |
 | archive | boolean |  no  |  |
 | entity_type | string |  no  |  |
 | ids | [string] |  no  |  |

---


 
 
 #### [UpdateQNARequest](#UpdateQNARequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean |  no  |  |
 | approve | boolean |  no  |  |
 | choices | [string] |  no  |  |
 | id | string |  no  |  |
 | tags | [string] |  no  |  |

---


 
 
 #### [UpdateResponse](#UpdateResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |

---


 
 
 #### [UpdateReviewRequest](#UpdateReviewRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean |  no  |  |
 | application | string |  no  |  |
 | approve | boolean |  no  |  |
 | archive | boolean |  no  |  |
 | attributes_rating | [[AttributeObject](#AttributeObject)] |  no  |  |
 | description | string |  no  |  |
 | device_meta | [DeviceMeta](#DeviceMeta) |  no  |  |
 | entity_id | string |  no  |  |
 | entity_type | string |  no  |  |
 | media_resource | [[MediaMeta](#MediaMeta)] |  no  |  |
 | rating | number |  no  |  |
 | review_id | string |  no  |  |
 | template_id | string |  no  |  |
 | title | string |  no  |  |

---


 
 
 #### [UpdateVoteRequest](#UpdateVoteRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string |  no  |  |
 | active | boolean |  no  |  |
 | id | string |  no  |  |
 | ref_id | string |  no  |  |
 | ref_type | string |  no  |  |

---


 
 
 #### [Url](#Url)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | main | string |  no  |  |
 | thumbnail | string |  no  |  |

---


 
 
 #### [Vote](#Vote)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string |  no  | upvote and downvote |
 | date_meta | [DateMeta](#DateMeta) |  no  |  |
 | entity | [Entity](#Entity) |  no  |  |
 | id | string |  no  |  |
 | name | string |  no  |  |
 | reference | [Entity](#Entity) |  no  | review | comment |
 | state | [FeedbackState](#FeedbackState) |  no  |  |
 | tags | [[TagMeta](#TagMeta)] |  no  |  |

---


 
 
 #### [VoteCount](#VoteCount)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | downvote | number |  no  |  |
 | upvote | number |  no  |  |

---


 
 
 #### [VoteRequest](#VoteRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string |  no  |  |
 | entity_id | string |  no  |  |
 | entity_type | string |  no  |  |
 | ref_id | string |  no  |  |
 | ref_type | string |  no  | review | comment |

---


 
 
 #### [VoteResponse](#VoteResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Vote](#Vote)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---




 
 
 #### [UpdateCartShipmentItem](#UpdateCartShipmentItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipment_type | string |  yes  | Shipment delivery type |
 | article_uid | string |  yes  | Article mongo id |
 | quantity | number |  no  | Quantity of product in shipment |

---


 
 
 #### [UpdateCartShipmentRequest](#UpdateCartShipmentRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipments | [[UpdateCartShipmentItem](#UpdateCartShipmentItem)] |  yes  |  |

---


 
 
 #### [Files](#Files)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string |  yes  |  |
 | values | [string] |  yes  |  |

---


 
 
 #### [CartPosCheckoutDetailRequest](#CartPosCheckoutDetailRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | payment_mode | string |  yes  |  |
 | delivery_address | string |  no  |  |
 | ordering_store | number |  no  |  |
 | payment_identifier | string |  no  |  |
 | pick_at_store_uid | number |  no  |  |
 | billing_address | string |  no  |  |
 | payment_params | string |  no  |  |
 | billing_address_id | string |  no  |  |
 | address_id | string |  no  |  |
 | callback_url | string |  no  |  |
 | merchant_code | string |  no  |  |
 | order_type | string |  yes  |  |
 | meta | string |  no  |  |
 | files | [[Files](#Files)] |  no  | List of file url |
 | payment_auto_confirm | boolean |  no  |  |
 | staff | [StaffCheckout](#StaffCheckout) |  no  |  |
 | extra_meta | string |  no  |  |
 | pos | boolean |  no  |  |
 | fyndstore_emp_id | string |  no  |  |
 | aggregator | string |  no  |  |

---


 
 
 #### [CartDeliveryModesResponse](#CartDeliveryModesResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | available_modes | [string] |  no  | Available delivery modes |
 | pickup_stores | [number] |  no  | Store pick up available store uids |

---


 
 
 #### [PickupStoreDetail](#PickupStoreDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | area_code_slug | string |  no  |  |
 | area | string |  no  |  |
 | uid | number |  no  |  |
 | name | string |  no  |  |
 | pincode | number |  no  |  |
 | area_code | string |  no  |  |
 | address | string |  no  |  |
 | city | string |  no  |  |
 | address_type | string |  no  |  |
 | landmark | string |  no  |  |
 | state | string |  no  |  |
 | email | string |  no  |  |
 | phone | string |  no  |  |
 | country | string |  no  |  |
 | id | number |  no  |  |
 | store_code | string |  no  |  |

---


 
 
 #### [StoreDetailsResponse](#StoreDetailsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[PickupStoreDetail](#PickupStoreDetail)] |  no  |  |

---




 
 
 #### [GetPincodeCityResponse](#GetPincodeCityResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | request_uuid | string |  yes  |  |
 | stormbreaker_uuid | string |  yes  |  |
 | success | boolean |  yes  |  |
 | data | [[LogisticPincodeData](#LogisticPincodeData)] |  yes  |  |

---


 
 
 #### [LogisticPincodeData](#LogisticPincodeData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | meta | [LogisticMeta](#LogisticMeta) |  no  |  |
 | parents | [[LogisticParents](#LogisticParents)] |  no  |  |
 | sub_type | string |  no  |  |
 | name | string |  no  |  |
 | error | [LogisticError](#LogisticError) |  no  |  |
 | uid | string |  no  |  |
 | display_name | string |  no  |  |

---


 
 
 #### [LogisticMeta](#LogisticMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | zone | string |  no  |  |
 | deliverables | [any] |  no  |  |

---


 
 
 #### [LogisticParents](#LogisticParents)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sub_type | string |  no  |  |
 | name | string |  no  |  |
 | display_name | string |  no  |  |
 | uid | string |  no  |  |

---


 
 
 #### [LogisticError](#LogisticError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | value | string |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [GetTatProductReqBody](#GetTatProductReqBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | location_details | [[LocationDetailsReq](#LocationDetailsReq)] |  yes  |  |
 | to_pincode | string |  yes  |  |
 | action | string |  no  |  |

---


 
 
 #### [LocationDetailsReq](#LocationDetailsReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | from_pincode | string |  no  |  |
 | articles | [[TatReqProductArticles](#TatReqProductArticles)] |  no  |  |
 | fulfillment_id | number |  no  |  |

---


 
 
 #### [TatReqProductArticles](#TatReqProductArticles)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category | [LogisticRequestCategory](#LogisticRequestCategory) |  no  |  |

---


 
 
 #### [LogisticRequestCategory](#LogisticRequestCategory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number |  no  |  |
 | level | string |  no  |  |

---


 
 
 #### [GetTatProductResponse](#GetTatProductResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | location_details | [[LocationDetails](#LocationDetails)] |  yes  |  |
 | request_uuid | string |  yes  |  |
 | error | string |  yes  |  |
 | to_city | string |  yes  |  |
 | source | string |  yes  |  |
 | to_pincode | string |  yes  |  |
 | action | string |  yes  |  |
 | stormbreaker_uuid | string |  yes  |  |
 | success | boolean |  yes  |  |
 | identifier | string |  yes  |  |
 | journey | string |  yes  |  |

---


 
 
 #### [LocationDetails](#LocationDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | from_pincode | string |  no  |  |
 | articles | [[TatProductArticles](#TatProductArticles)] |  no  |  |
 | fulfillment_id | number |  no  |  |

---


 
 
 #### [TatProductArticles](#TatProductArticles)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | string |  no  |  |
 | category | [LogisticResponseCategory](#LogisticResponseCategory) |  no  |  |
 | promise | [LogisticPromise](#LogisticPromise) |  no  |  |

---


 
 
 #### [LogisticResponseCategory](#LogisticResponseCategory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number |  no  |  |
 | level | string |  no  |  |

---


 
 
 #### [LogisticPromise](#LogisticPromise)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | timestamp | [LogisticTimestamp](#LogisticTimestamp) |  no  |  |
 | formatted | [Formatted](#Formatted) |  no  |  |

---


 
 
 #### [LogisticTimestamp](#LogisticTimestamp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | min | number |  no  |  |
 | max | number |  no  |  |

---


 
 
 #### [Formatted](#Formatted)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | min | string |  no  |  |
 | max | string |  no  |  |

---



