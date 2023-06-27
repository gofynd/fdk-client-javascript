export = Content;
declare class Content {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {ContentPlatformApplicationValidator.addDataLoader} arg - Arg object
     * @returns {Promise<ContentPlatformModel.DataLoaderResponseSchema>} -
     *   Success response
     * @name addDataLoader
     * @summary: Adds a data loader
     * @description: Use this API to add data loader. This includes the data loader name, operationId, service name and its type (url/function) with corresponding value.
     */
    addDataLoader({ body }?: ContentPlatformApplicationValidator.addDataLoader): Promise<ContentPlatformModel.DataLoaderResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.addFaq} arg - Arg object
     * @returns {Promise<ContentPlatformModel.CreateFaqResponseSchema>} - Success response
     * @name addFaq
     * @summary: Create an FAQ
     * @description: FAQs help users to solve an issue or know more about a process. Use this API to create an FAQ for a given FAQ category.
     */
    addFaq({ categoryId, body }?: ContentPlatformApplicationValidator.addFaq): Promise<ContentPlatformModel.CreateFaqResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.addInjectableTag} arg - Arg object
     * @returns {Promise<ContentPlatformModel.TagsSchema>} - Success response
     * @name addInjectableTag
     * @summary: Add a tag
     * @description: CSS and JS can be injected in the application (website) with the help of tags. Use this API to create such tags by entering the tag name, tag type (css/js), url and position of the tag.
     */
    addInjectableTag({ body }?: ContentPlatformApplicationValidator.addInjectableTag): Promise<ContentPlatformModel.TagsSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.addPathRedirectionRules} arg
     *   - Arg object
     *
     * @returns {Promise<ContentPlatformModel.PathMappingSchema>} - Success response
     * @name addPathRedirectionRules
     * @summary: Save path based redirection rules
     * @description: Use this API to add redirection rules
     */
    addPathRedirectionRules({ body }?: ContentPlatformApplicationValidator.addPathRedirectionRules): Promise<ContentPlatformModel.PathMappingSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.createAnnouncement} arg - Arg object
     * @returns {Promise<ContentPlatformModel.CreateAnnouncementSchema>} -
     *   Success response
     * @name createAnnouncement
     * @summary: Create an announcement
     * @description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to create an announcement.
     */
    createAnnouncement({ body }?: ContentPlatformApplicationValidator.createAnnouncement): Promise<ContentPlatformModel.CreateAnnouncementSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.createBlog} arg - Arg object
     * @returns {Promise<ContentPlatformModel.BlogSchema>} - Success response
     * @name createBlog
     * @summary: Create a blog
     * @description: Use this API to create a blog.
     */
    createBlog({ body }?: ContentPlatformApplicationValidator.createBlog): Promise<ContentPlatformModel.BlogSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.createFaqCategory} arg - Arg object
     * @returns {Promise<ContentPlatformModel.CreateFaqCategorySchema>} - Success response
     * @name createFaqCategory
     * @summary: Create an FAQ category
     * @description: FAQs help users to solve an issue or know more about a process. FAQs can be categorized separately, for e.g. some questions can be related to payment, some could be related to purchase, shipping, navigating, etc. Use this API to create an FAQ category.
     */
    createFaqCategory({ body }?: ContentPlatformApplicationValidator.createFaqCategory): Promise<ContentPlatformModel.CreateFaqCategorySchema>;
    /**
     * @param {ContentPlatformApplicationValidator.createLandingPage} arg - Arg object
     * @returns {Promise<ContentPlatformModel.LandingPageSchema>} - Success response
     * @name createLandingPage
     * @summary: Create a landing page
     * @description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to create a landing page.
     */
    createLandingPage({ body }?: ContentPlatformApplicationValidator.createLandingPage): Promise<ContentPlatformModel.LandingPageSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.createNavigation} arg - Arg object
     * @returns {Promise<ContentPlatformModel.NavigationSchema>} - Success response
     * @name createNavigation
     * @summary: Create a navigation
     * @description: Navigation is the arrangement of navigational items to ease the accessibility of resources for users on a website. Use this API to create a navigation.
     */
    createNavigation({ body }?: ContentPlatformApplicationValidator.createNavigation): Promise<ContentPlatformModel.NavigationSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.createPage} arg - Arg object
     * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
     * @name createPage
     * @summary: Create a page
     * @description: Use this API to create a custom page using a title, seo, publish status, feature image, tags, meta, etc.
     */
    createPage({ body }?: ContentPlatformApplicationValidator.createPage): Promise<ContentPlatformModel.PageSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.createPagePreview} arg - Arg object
     * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
     * @name createPagePreview
     * @summary: Create a page preview
     * @description: Use this API to create a page preview to check the appearance of a custom page.
     */
    createPagePreview({ body }?: ContentPlatformApplicationValidator.createPagePreview): Promise<ContentPlatformModel.PageSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.createSlideshow} arg - Arg object
     * @returns {Promise<ContentPlatformModel.SlideshowSchema>} - Success response
     * @name createSlideshow
     * @summary: Create a slideshow
     * @description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to create a slideshow.
     */
    createSlideshow({ body }?: ContentPlatformApplicationValidator.createSlideshow): Promise<ContentPlatformModel.SlideshowSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.deleteAllInjectableTags} arg
     *   - Arg object
     *
     * @returns {Promise<ContentPlatformModel.TagsSchema>} - Success response
     * @name deleteAllInjectableTags
     * @summary: Delete tags in application
     * @description: Use this API to delete all the existing tags at once.
     */
    deleteAllInjectableTags({}?: any): Promise<ContentPlatformModel.TagsSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.deleteAnnouncement} arg - Arg object
     * @returns {Promise<ContentPlatformModel.CreateAnnouncementSchema>} -
     *   Success response
     * @name deleteAnnouncement
     * @summary: Delete announcement by id
     * @description: Use this API to delete an existing announcement.
     */
    deleteAnnouncement({ announcementId }?: ContentPlatformApplicationValidator.deleteAnnouncement): Promise<ContentPlatformModel.CreateAnnouncementSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.deleteBlog} arg - Arg object
     * @returns {Promise<ContentPlatformModel.BlogSchema>} - Success response
     * @name deleteBlog
     * @summary: Delete blogs
     * @description: Use this API to delete a blog.
     */
    deleteBlog({ id }?: ContentPlatformApplicationValidator.deleteBlog): Promise<ContentPlatformModel.BlogSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.deleteDataLoader} arg - Arg object
     * @returns {Promise<ContentPlatformModel.DataLoaderResponseSchema>} -
     *   Success response
     * @name deleteDataLoader
     * @summary: Delete data loader in application
     * @description: Use this API to delete data loader.
     */
    deleteDataLoader({ dataLoaderId }?: ContentPlatformApplicationValidator.deleteDataLoader): Promise<ContentPlatformModel.DataLoaderResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.deleteFaq} arg - Arg object
     * @returns {Promise<ContentPlatformModel.CreateFaqResponseSchema>} - Success response
     * @name deleteFaq
     * @summary: Delete an FAQ
     * @description: Use this API to delete an existing FAQ.
     */
    deleteFaq({ categoryId, faqId }?: ContentPlatformApplicationValidator.deleteFaq): Promise<ContentPlatformModel.CreateFaqResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.deleteFaqCategory} arg - Arg object
     * @returns {Promise<ContentPlatformModel.FaqSchema>} - Success response
     * @name deleteFaqCategory
     * @summary: Delete an FAQ category
     * @description: Use this API to delete an FAQ category.
     */
    deleteFaqCategory({ id }?: ContentPlatformApplicationValidator.deleteFaqCategory): Promise<ContentPlatformModel.FaqSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.deleteLandingPage} arg - Arg object
     * @returns {Promise<ContentPlatformModel.LandingPageSchema>} - Success response
     * @name deleteLandingPage
     * @summary: Delete a landing page
     * @description: Use this API to delete an existing landing page.
     */
    deleteLandingPage({ id }?: ContentPlatformApplicationValidator.deleteLandingPage): Promise<ContentPlatformModel.LandingPageSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.deleteNavigation} arg - Arg object
     * @returns {Promise<ContentPlatformModel.NavigationSchema>} - Success response
     * @name deleteNavigation
     * @summary: Delete a navigation
     * @description: Use this API to delete an existing navigation.
     */
    deleteNavigation({ id }?: ContentPlatformApplicationValidator.deleteNavigation): Promise<ContentPlatformModel.NavigationSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.deletePage} arg - Arg object
     * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
     * @name deletePage
     * @summary: Delete a page
     * @description: Use this API to delete an existing page.
     */
    deletePage({ id }?: ContentPlatformApplicationValidator.deletePage): Promise<ContentPlatformModel.PageSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.deletePathRedirectionRules} arg
     *   - Arg object
     *
     * @returns {Promise<Object>} - Success response
     * @name deletePathRedirectionRules
     * @summary: Delete path based redirection rules
     * @description: Use this API to delete redirection rules
     */
    deletePathRedirectionRules({ pathId }?: ContentPlatformApplicationValidator.deletePathRedirectionRules): Promise<any>;
    /**
     * @param {ContentPlatformApplicationValidator.deleteSlideshow} arg - Arg object
     * @returns {Promise<ContentPlatformModel.SlideshowSchema>} - Success response
     * @name deleteSlideshow
     * @summary: Delete a slideshow
     * @description: Use this API to delete an existing slideshow.
     */
    deleteSlideshow({ id }?: ContentPlatformApplicationValidator.deleteSlideshow): Promise<ContentPlatformModel.SlideshowSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.editDataLoader} arg - Arg object
     * @returns {Promise<ContentPlatformModel.DataLoaderResponseSchema>} -
     *   Success response
     * @name editDataLoader
     * @summary: Edit a data loader by id
     * @description: Use this API to edit the details of an existing data loader by its ID.
     */
    editDataLoader({ dataLoaderId, body }?: ContentPlatformApplicationValidator.editDataLoader): Promise<ContentPlatformModel.DataLoaderResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.editInjectableTag} arg - Arg object
     * @returns {Promise<ContentPlatformModel.TagsSchema>} - Success response
     * @name editInjectableTag
     * @summary: Edit a tag by id
     * @description: Use this API to edit the details of an existing tag by its ID.
     */
    editInjectableTag({ tagId, body }?: ContentPlatformApplicationValidator.editInjectableTag): Promise<ContentPlatformModel.TagsSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.generateSEOTitle} arg - Arg object
     * @returns {Promise<ContentPlatformModel.GeneratedSEOContent>} - Success response
     * @name generateSEOTitle
     * @summary: Get SEO meta tag title for content
     * @description: Use this API to get GPT3 generated SEO meta tag title for content
     */
    generateSEOTitle({ type, body }?: ContentPlatformApplicationValidator.generateSEOTitle): Promise<ContentPlatformModel.GeneratedSEOContent>;
    /**
     * @param {ContentPlatformApplicationValidator.getAnnouncementById} arg - Arg object
     * @returns {Promise<ContentPlatformModel.AdminAnnouncementSchema>} - Success response
     * @name getAnnouncementById
     * @summary: Get announcement by ID
     * @description: Use this API to retrieve an announcement and its details such as the target platform and pages on which it's applicable
     */
    getAnnouncementById({ announcementId }?: ContentPlatformApplicationValidator.getAnnouncementById): Promise<ContentPlatformModel.AdminAnnouncementSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.getAnnouncementsList} arg - Arg object
     * @returns {Promise<ContentPlatformModel.GetAnnouncementListSchema>} -
     *   Success response
     * @name getAnnouncementsList
     * @summary: Get a list of announcements
     * @description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to retrieve a list of announcements.
     */
    getAnnouncementsList({ pageNo, pageSize }?: ContentPlatformApplicationValidator.getAnnouncementsList): Promise<ContentPlatformModel.GetAnnouncementListSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @returns {Paginator<ContentPlatformModel.GetAnnouncementListSchema>}
     * @summary: Get a list of announcements
     * @description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to retrieve a list of announcements.
     */
    getAnnouncementsListPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator<ContentPlatformModel.GetAnnouncementListSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.getBlogBySlug} arg - Arg object
     * @returns {Promise<ContentPlatformModel.BlogSchema>} - Success response
     * @name getBlogBySlug
     * @summary: Get blog by slug
     * @description: Use this API to retrieve the components of a blog, such as title, slug, feature image, content, schedule, publish status, author, etc.
     */
    getBlogBySlug({ slug }?: ContentPlatformApplicationValidator.getBlogBySlug): Promise<ContentPlatformModel.BlogSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.getBlogs} arg - Arg object
     * @returns {Promise<ContentPlatformModel.BlogGetResponse>} - Success response
     * @name getBlogs
     * @summary: Get blogs
     * @description: Use this API to get a list of blogs along with their details, such as the title, reading time, publish status, feature image, tags, author, etc.
     */
    getBlogs({ pageNo, pageSize }?: ContentPlatformApplicationValidator.getBlogs): Promise<ContentPlatformModel.BlogGetResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @returns {Paginator<ContentPlatformModel.BlogGetResponse>}
     * @summary: Get blogs
     * @description: Use this API to get a list of blogs along with their details, such as the title, reading time, publish status, feature image, tags, author, etc.
     */
    getBlogsPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator<ContentPlatformModel.BlogGetResponse>;
    /**
     * @param {ContentPlatformApplicationValidator.getComponentById} arg - Arg object
     * @returns {Promise<ContentPlatformModel.BlogSchema>} - Success response
     * @name getComponentById
     * @summary: Get components of a blog
     * @description: Use this API to retrieve the components of a blog, such as title, slug, feature image, content, schedule, publish status, author, etc.
     */
    getComponentById({ slug }?: ContentPlatformApplicationValidator.getComponentById): Promise<ContentPlatformModel.BlogSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.getDataLoaders} arg - Arg object
     * @returns {Promise<ContentPlatformModel.DataLoadersSchema>} - Success response
     * @name getDataLoaders
     * @summary: Get all the data loaders in an application
     * @description: Use this to get all data loaders of an application
     */
    getDataLoaders({}?: any): Promise<ContentPlatformModel.DataLoadersSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.getDefaultNavigations} arg - Arg object
     * @returns {Promise<ContentPlatformModel.DefaultNavigationResponse>} -
     *   Success response
     * @name getDefaultNavigations
     * @summary: Get default navigations
     * @description: On any website (application), there are navigations that are present by default. Use this API to retrieve those default navigations.
     */
    getDefaultNavigations({}?: any): Promise<ContentPlatformModel.DefaultNavigationResponse>;
    /**
     * @param {ContentPlatformApplicationValidator.getFaqByIdOrSlug} arg - Arg object
     * @returns {Promise<ContentPlatformModel.CreateFaqResponseSchema>} - Success response
     * @name getFaqByIdOrSlug
     * @summary: Get an FAQ
     * @description: Use this API to retrieve a specific FAQ. You will get the question and answer of that FAQ.
     */
    getFaqByIdOrSlug({ idOrSlug }?: ContentPlatformApplicationValidator.getFaqByIdOrSlug): Promise<ContentPlatformModel.CreateFaqResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.getFaqCategories} arg - Arg object
     * @returns {Promise<ContentPlatformModel.GetFaqCategoriesSchema>} - Success response
     * @name getFaqCategories
     * @summary: Get a list of FAQ categories
     * @description: FAQs can be divided into categories. Use this API to get a list of FAQ categories.
     */
    getFaqCategories({}?: any): Promise<ContentPlatformModel.GetFaqCategoriesSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.getFaqCategoryBySlugOrId} arg
     *   - Arg object
     *
     * @returns {Promise<ContentPlatformModel.GetFaqCategoryBySlugSchema>} -
     *   Success response
     * @name getFaqCategoryBySlugOrId
     * @summary: Get an FAQ category by slug or id
     * @description: FAQs can be divided into categories. Use this API to get an FAQ categories using its slug or ID.
     */
    getFaqCategoryBySlugOrId({ idOrSlug }?: ContentPlatformApplicationValidator.getFaqCategoryBySlugOrId): Promise<ContentPlatformModel.GetFaqCategoryBySlugSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.getFaqsByCategoryIdOrSlug} arg
     *   - Arg object
     *
     * @returns {Promise<ContentPlatformModel.GetFaqSchema>} - Success response
     * @name getFaqsByCategoryIdOrSlug
     * @summary: Get question and answers within an FAQ category
     * @description: Use this API to retrieve all the commonly asked question and answers belonging to an FAQ category.
     */
    getFaqsByCategoryIdOrSlug({ idOrSlug }?: ContentPlatformApplicationValidator.getFaqsByCategoryIdOrSlug): Promise<ContentPlatformModel.GetFaqSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.getInjectableTags} arg - Arg object
     * @returns {Promise<ContentPlatformModel.TagsSchema>} - Success response
     * @name getInjectableTags
     * @summary: Get all the tags in an application
     * @description: Use this API to get all the CSS and JS injected in the application in the form of tags.
     */
    getInjectableTags({}?: any): Promise<ContentPlatformModel.TagsSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.getLandingPages} arg - Arg object
     * @returns {Promise<ContentPlatformModel.LandingPageGetResponse>} - Success response
     * @name getLandingPages
     * @summary: Get landing pages
     * @description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to fetch a list of landing pages.
     */
    getLandingPages({ pageNo, pageSize }?: ContentPlatformApplicationValidator.getLandingPages): Promise<ContentPlatformModel.LandingPageGetResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @returns {Paginator<ContentPlatformModel.LandingPageGetResponse>}
     * @summary: Get landing pages
     * @description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to fetch a list of landing pages.
     */
    getLandingPagesPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator<ContentPlatformModel.LandingPageGetResponse>;
    /**
     * @param {ContentPlatformApplicationValidator.getLegalInformation} arg - Arg object
     * @returns {Promise<ContentPlatformModel.ApplicationLegal>} - Success response
     * @name getLegalInformation
     * @summary: Get legal information
     * @description: Use this API to get the legal information of an application, which includes Policy, Terms and Conditions, Shipping Policy and FAQ regarding the application.
     */
    getLegalInformation({}?: any): Promise<ContentPlatformModel.ApplicationLegal>;
    /**
     * @param {ContentPlatformApplicationValidator.getNavigationBySlug} arg - Arg object
     * @returns {Promise<ContentPlatformModel.NavigationSchema>} - Success response
     * @name getNavigationBySlug
     * @summary: Get a navigation by slug
     * @description: Use this API to retrieve a navigation by its slug.
     */
    getNavigationBySlug({ slug, devicePlatform }?: ContentPlatformApplicationValidator.getNavigationBySlug): Promise<ContentPlatformModel.NavigationSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.getNavigations} arg - Arg object
     * @returns {Promise<ContentPlatformModel.NavigationGetResponse>} - Success response
     * @name getNavigations
     * @summary: Get navigations
     * @description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the orientation, links, sub-navigations, etc.
     */
    getNavigations({ devicePlatform, pageNo, pageSize }?: ContentPlatformApplicationValidator.getNavigations): Promise<ContentPlatformModel.NavigationGetResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {string} arg.devicePlatform - Filter navigations by platform.
     *   Acceptable values are: web, android, ios, all
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @returns {Paginator<ContentPlatformModel.NavigationGetResponse>}
     * @summary: Get navigations
     * @description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the orientation, links, sub-navigations, etc.
     */
    getNavigationsPaginator({ companyId, applicationId, devicePlatform, pageSize, }?: {
        companyId: string;
        applicationId: string;
        devicePlatform: string;
        pageSize?: number;
    }): Paginator<ContentPlatformModel.NavigationGetResponse>;
    /**
     * @param {ContentPlatformApplicationValidator.getPageBySlug} arg - Arg object
     * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
     * @name getPageBySlug
     * @summary: Get page by slug
     * @description: Use this API to retrieve the components of a page, such as its title, seo, publish status, feature image, tags, schedule, etc.
     */
    getPageBySlug({ slug }?: ContentPlatformApplicationValidator.getPageBySlug): Promise<ContentPlatformModel.PageSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.getPageMeta} arg - Arg object
     * @returns {Promise<ContentPlatformModel.PageMetaSchema>} - Success response
     * @name getPageMeta
     * @summary: Get page meta
     * @description: Use this API to get the meta of custom pages (blog, page) and default system pages (e.g. home/brand/category/collection).
     */
    getPageMeta({}?: any): Promise<ContentPlatformModel.PageMetaSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.getPageSpec} arg - Arg object
     * @returns {Promise<ContentPlatformModel.PageSpec>} - Success response
     * @name getPageSpec
     * @summary: Get page spec
     * @description: Use this API to get the specifications of a page, such as page type, display name, params and query.
     */
    getPageSpec({}?: any): Promise<ContentPlatformModel.PageSpec>;
    /**
     * @param {ContentPlatformApplicationValidator.getPages} arg - Arg object
     * @returns {Promise<ContentPlatformModel.PageGetResponse>} - Success response
     * @name getPages
     * @summary: Get a list of pages
     * @description: Use this API to retrieve a list of pages.
     */
    getPages({ pageNo, pageSize }?: ContentPlatformApplicationValidator.getPages): Promise<ContentPlatformModel.PageGetResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @returns {Paginator<ContentPlatformModel.PageGetResponse>}
     * @summary: Get a list of pages
     * @description: Use this API to retrieve a list of pages.
     */
    getPagesPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator<ContentPlatformModel.PageGetResponse>;
    /**
     * @param {ContentPlatformApplicationValidator.getPathRedirectionRule} arg
     *   - Arg object
     *
     * @returns {Promise<ContentPlatformModel.PathMappingSchema>} - Success response
     * @name getPathRedirectionRule
     * @summary: Get path based redirection rule
     * @description: Use this API to get path based redirection rule.
     */
    getPathRedirectionRule({ pathId }?: ContentPlatformApplicationValidator.getPathRedirectionRule): Promise<ContentPlatformModel.PathMappingSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.getPathRedirectionRules} arg
     *   - Arg object
     *
     * @returns {Promise<ContentPlatformModel.PathMappingSchema>} - Success response
     * @name getPathRedirectionRules
     * @summary: Get path based redirection rules
     * @description: Use this API to get path based redirection rules.
     */
    getPathRedirectionRules({ pageSize, pageNo }?: ContentPlatformApplicationValidator.getPathRedirectionRules): Promise<ContentPlatformModel.PathMappingSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.getSEOConfiguration} arg - Arg object
     * @returns {Promise<ContentPlatformModel.SeoComponent>} - Success response
     * @name getSEOConfiguration
     * @summary: Get SEO configuration of an application
     * @description: Use this API to know how the SEO is configured in the application. This includes the sitemap, robot.txt, custom meta tags, etc.
     */
    getSEOConfiguration({}?: any): Promise<ContentPlatformModel.SeoComponent>;
    /**
     * @param {ContentPlatformApplicationValidator.getSlideshowBySlug} arg - Arg object
     * @returns {Promise<ContentPlatformModel.SlideshowSchema>} - Success response
     * @name getSlideshowBySlug
     * @summary: Get slideshow by slug
     * @description: Use this API to retrieve the details of a slideshow by its slug.
     */
    getSlideshowBySlug({ slug, devicePlatform }?: ContentPlatformApplicationValidator.getSlideshowBySlug): Promise<ContentPlatformModel.SlideshowSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.getSlideshows} arg - Arg object
     * @returns {Promise<ContentPlatformModel.SlideshowGetResponse>} - Success response
     * @name getSlideshows
     * @summary: Get slideshows
     * @description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to fetch a list of slideshows.
     */
    getSlideshows({ devicePlatform, pageNo, pageSize }?: ContentPlatformApplicationValidator.getSlideshows): Promise<ContentPlatformModel.SlideshowGetResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {string} arg.devicePlatform - Filter slideshows by platform.
     *   Acceptable values are: web, android, ios and all
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @returns {Paginator<ContentPlatformModel.SlideshowGetResponse>}
     * @summary: Get slideshows
     * @description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to fetch a list of slideshows.
     */
    getSlideshowsPaginator({ companyId, applicationId, devicePlatform, pageSize, }?: {
        companyId: string;
        applicationId: string;
        devicePlatform: string;
        pageSize?: number;
    }): Paginator<ContentPlatformModel.SlideshowGetResponse>;
    /**
     * @param {ContentPlatformApplicationValidator.getSupportInformation} arg - Arg object
     * @returns {Promise<ContentPlatformModel.Support>} - Success response
     * @name getSupportInformation
     * @summary: Get support information
     * @description: Use this API to get the contact details for customer support, including emails and phone numbers.
     */
    getSupportInformation({}?: any): Promise<ContentPlatformModel.Support>;
    /**
     * @param {ContentPlatformApplicationValidator.removeInjectableTag} arg - Arg object
     * @returns {Promise<ContentPlatformModel.TagDeleteSuccessResponse>} -
     *   Success response
     * @name removeInjectableTag
     * @summary: Remove a tag
     * @description: Use this API to delete an existing tag.
     */
    removeInjectableTag({ body }?: ContentPlatformApplicationValidator.removeInjectableTag): Promise<ContentPlatformModel.TagDeleteSuccessResponse>;
    /**
     * @param {ContentPlatformApplicationValidator.resetDataLoader} arg - Arg object
     * @returns {Promise<ContentPlatformModel.DataLoaderResetResponseSchema>} -
     *   Success response
     * @name resetDataLoader
     * @summary: Reset a data loader by serive name and operation Id
     * @description: Use this API to reselect a data loader.
     */
    resetDataLoader({ service, operationId }?: ContentPlatformApplicationValidator.resetDataLoader): Promise<ContentPlatformModel.DataLoaderResetResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.selectDataLoader} arg - Arg object
     * @returns {Promise<ContentPlatformModel.DataLoaderResponseSchema>} -
     *   Success response
     * @name selectDataLoader
     * @summary: Select a data loader by id
     * @description: Use this API to select a data loader to be used in applications.
     */
    selectDataLoader({ dataLoaderId }?: ContentPlatformApplicationValidator.selectDataLoader): Promise<ContentPlatformModel.DataLoaderResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.updateAnnouncement} arg - Arg object
     * @returns {Promise<ContentPlatformModel.CreateAnnouncementSchema>} -
     *   Success response
     * @name updateAnnouncement
     * @summary: Update an announcement
     * @description: Use this API to edit an existing announcement and its details such as the target platform and pages on which it's applicable
     */
    updateAnnouncement({ announcementId, body }?: ContentPlatformApplicationValidator.updateAnnouncement): Promise<ContentPlatformModel.CreateAnnouncementSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.updateAnnouncementSchedule} arg
     *   - Arg object
     *
     * @returns {Promise<ContentPlatformModel.CreateAnnouncementSchema>} -
     *   Success response
     * @name updateAnnouncementSchedule
     * @summary: Update the schedule and the publish status of an announcement
     * @description: Use this API to edit the duration, i.e. start date-time and end date-time of an announcement. Moreover, you can enable/disable an announcement using this API.
     */
    updateAnnouncementSchedule({ announcementId, body }?: ContentPlatformApplicationValidator.updateAnnouncementSchedule): Promise<ContentPlatformModel.CreateAnnouncementSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.updateBlog} arg - Arg object
     * @returns {Promise<ContentPlatformModel.BlogSchema>} - Success response
     * @name updateBlog
     * @summary: Update a blog
     * @description: Use this API to update the details of an existing blog which includes title, feature image, content, SEO details, expiry, etc.
     */
    updateBlog({ id, body }?: ContentPlatformApplicationValidator.updateBlog): Promise<ContentPlatformModel.BlogSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.updateFaq} arg - Arg object
     * @returns {Promise<ContentPlatformModel.CreateFaqResponseSchema>} - Success response
     * @name updateFaq
     * @summary: Update an FAQ
     * @description: Use this API to edit an existing FAQ.
     */
    updateFaq({ categoryId, faqId, body }?: ContentPlatformApplicationValidator.updateFaq): Promise<ContentPlatformModel.CreateFaqResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.updateFaqCategory} arg - Arg object
     * @returns {Promise<ContentPlatformModel.CreateFaqCategorySchema>} - Success response
     * @name updateFaqCategory
     * @summary: Update an FAQ category
     * @description: Use this API to edit an existing FAQ category.
     */
    updateFaqCategory({ id, body }?: ContentPlatformApplicationValidator.updateFaqCategory): Promise<ContentPlatformModel.CreateFaqCategorySchema>;
    /**
     * @param {ContentPlatformApplicationValidator.updateInjectableTag} arg - Arg object
     * @returns {Promise<ContentPlatformModel.TagsSchema>} - Success response
     * @name updateInjectableTag
     * @summary: Update a tag
     * @description: Use this API to edit the details of an existing tag. This includes the tag name, tag type (css/js), url and position of the tag.
     */
    updateInjectableTag({ body }?: ContentPlatformApplicationValidator.updateInjectableTag): Promise<ContentPlatformModel.TagsSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.updateLandingPage} arg - Arg object
     * @returns {Promise<ContentPlatformModel.LandingPageSchema>} - Success response
     * @name updateLandingPage
     * @summary: Update a landing page
     * @description: Use this API to edit the details of an existing landing page.
     */
    updateLandingPage({ id, body }?: ContentPlatformApplicationValidator.updateLandingPage): Promise<ContentPlatformModel.LandingPageSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.updateLegalInformation} arg
     *   - Arg object
     *
     * @returns {Promise<ContentPlatformModel.ApplicationLegal>} - Success response
     * @name updateLegalInformation
     * @summary: Save legal information
     * @description: Use this API to edit, update and save the legal information of an application, which includes Policy, Terms and Conditions, Shipping Policy and FAQ regarding the application.
     */
    updateLegalInformation({ body }?: ContentPlatformApplicationValidator.updateLegalInformation): Promise<ContentPlatformModel.ApplicationLegal>;
    /**
     * @param {ContentPlatformApplicationValidator.updateNavigation} arg - Arg object
     * @returns {Promise<ContentPlatformModel.NavigationSchema>} - Success response
     * @name updateNavigation
     * @summary: Update a navigation
     * @description: Use this API to edit the details of an existing navigation.
     */
    updateNavigation({ id, body }?: ContentPlatformApplicationValidator.updateNavigation): Promise<ContentPlatformModel.NavigationSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.updatePage} arg - Arg object
     * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
     * @name updatePage
     * @summary: Update a page
     * @description: Use this API to edit the details of an existing page, such as its title, seo, publish status, feature image, tags, schedule, etc.
     */
    updatePage({ id, body }?: ContentPlatformApplicationValidator.updatePage): Promise<ContentPlatformModel.PageSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.updatePagePreview} arg - Arg object
     * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
     * @name updatePagePreview
     * @summary: Change the publish status of a page
     * @description: Use this API to change the publish status of an existing page. Allows you to publish and unpublish the page.
     */
    updatePagePreview({ slug, body }?: ContentPlatformApplicationValidator.updatePagePreview): Promise<ContentPlatformModel.PageSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.updatePathRedirectionRules} arg
     *   - Arg object
     *
     * @returns {Promise<ContentPlatformModel.PathMappingSchema>} - Success response
     * @name updatePathRedirectionRules
     * @summary: Update path based redirection rules
     * @description: Use this API to update redirection rules
     */
    updatePathRedirectionRules({ pathId, body }?: ContentPlatformApplicationValidator.updatePathRedirectionRules): Promise<ContentPlatformModel.PathMappingSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.updateSEOConfiguration} arg
     *   - Arg object
     *
     * @returns {Promise<ContentPlatformModel.SeoSchema>} - Success response
     * @name updateSEOConfiguration
     * @summary: Update SEO of application
     * @description: Use this API to edit the SEO details of an application. This includes the sitemap, robot.txt, custom meta tags, etc.
     */
    updateSEOConfiguration({ body }?: ContentPlatformApplicationValidator.updateSEOConfiguration): Promise<ContentPlatformModel.SeoSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.updateSlideshow} arg - Arg object
     * @returns {Promise<ContentPlatformModel.SlideshowSchema>} - Success response
     * @name updateSlideshow
     * @summary: Update a slideshow
     * @description: Use this API to edit the details of an existing slideshow.
     */
    updateSlideshow({ id, body }?: ContentPlatformApplicationValidator.updateSlideshow): Promise<ContentPlatformModel.SlideshowSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.updateSupportInformation} arg
     *   - Arg object
     *
     * @returns {Promise<ContentPlatformModel.Support>} - Success response
     * @name updateSupportInformation
     * @summary: Update the support data of an application
     * @description: Use this API to edit the existing contact details for customer support, including emails and phone numbers.
     */
    updateSupportInformation({ body }?: ContentPlatformApplicationValidator.updateSupportInformation): Promise<ContentPlatformModel.Support>;
}
import ContentPlatformApplicationValidator = require("./ContentPlatformApplicationValidator");
import ContentPlatformModel = require("./ContentPlatformModel");
import Paginator = require("../../common/Paginator");
