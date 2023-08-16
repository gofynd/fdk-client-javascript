export = Content;
declare class Content {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {DataLoaderSchema} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DataLoaderResponseSchema>} - Success response
     * @summary: Adds a data loader
     * @description: Use this API to add data loader. This includes the data loader name, operationId, service name and its type (url/function) with corresponding value.
     */
    addDataLoader({ body }?: {
        body: DataLoaderSchema;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<DataLoaderResponseSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.categoryId - ID allotted to an FAQ category.
     * @param {CreateFaqSchema} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CreateFaqResponseSchema>} - Success response
     * @summary: Create an FAQ
     * @description: FAQs help users to solve an issue or know more about a process. Use this API to create an FAQ for a given FAQ category.
     */
    addFaq({ categoryId, body }?: {
        categoryId: string;
        body: CreateFaqSchema;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<CreateFaqResponseSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateTagRequestSchema} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<TagsSchema>} - Success response
     * @summary: Add a tag
     * @description: CSS and JS can be injected in the application (website) with the help of tags. Use this API to create such tags by entering the tag name, tag type (css/js), url and position of the tag.
     */
    addInjectableTag({ body }?: {
        body: CreateTagRequestSchema;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<TagsSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PathMappingSchema} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PathMappingSchema>} - Success response
     * @summary: Save path based redirection rules
     * @description: Use this API to add redirection rules
     */
    addPathRedirectionRules({ body }?: {
        body: PathMappingSchema;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<PathMappingSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AdminAnnouncementSchema} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CreateAnnouncementSchema>} - Success response
     * @summary: Create an announcement
     * @description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to create an announcement.
     */
    createAnnouncement({ body }?: {
        body: AdminAnnouncementSchema;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<CreateAnnouncementSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {BlogRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BlogSchema>} - Success response
     * @summary: Create a blog
     * @description: Use this API to create a blog.
     */
    createBlog({ body }?: {
        body: BlogRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<BlogSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateFaqCategoryRequestSchema} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CreateFaqCategorySchema>} - Success response
     * @summary: Create an FAQ category
     * @description: FAQs help users to solve an issue or know more about a process. FAQs can be categorized separately, for e.g. some questions can be related to payment, some could be related to purchase, shipping, navigating, etc. Use this API to create an FAQ category.
     */
    createFaqCategory({ body }?: {
        body: CreateFaqCategoryRequestSchema;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<CreateFaqCategorySchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {LandingPageSchema} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LandingPageSchema>} - Success response
     * @summary: Create a landing page
     * @description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to create a landing page.
     */
    createLandingPage({ body }?: {
        body: LandingPageSchema;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<LandingPageSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {NavigationRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<NavigationSchema>} - Success response
     * @summary: Create a navigation
     * @description: Navigation is the arrangement of navigational items to ease the accessibility of resources for users on a website. Use this API to create a navigation.
     */
    createNavigation({ body }?: {
        body: NavigationRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<NavigationSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PageRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PageSchema>} - Success response
     * @summary: Create a page
     * @description: Use this API to create a custom page using a title, seo, publish status, feature image, tags, meta, etc.
     */
    createPage({ body }?: {
        body: PageRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<PageSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PageRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PageSchema>} - Success response
     * @summary: Create a page preview
     * @description: Use this API to create a page preview to check the appearance of a custom page.
     */
    createPagePreview({ body }?: {
        body: PageRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<PageSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SlideshowRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SlideshowSchema>} - Success response
     * @summary: Create a slideshow
     * @description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to create a slideshow.
     */
    createSlideshow({ body }?: {
        body: SlideshowRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<SlideshowSchema>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<TagsSchema>} - Success response
     * @summary: Delete tags in application
     * @description: Use this API to delete all the existing tags at once.
     */
    deleteAllInjectableTags({ headers }?: import("../PlatformAPIClient").Options): Promise<TagsSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.announcementId - ID allotted to the announcement.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CreateAnnouncementSchema>} - Success response
     * @summary: Delete announcement by id
     * @description: Use this API to delete an existing announcement.
     */
    deleteAnnouncement({ announcementId }?: {
        announcementId: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<CreateAnnouncementSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the blog.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BlogSchema>} - Success response
     * @summary: Delete blogs
     * @description: Use this API to delete a blog.
     */
    deleteBlog({ id }?: {
        id: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<BlogSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.dataLoaderId - ID allotted to the data loader.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DataLoaderResponseSchema>} - Success response
     * @summary: Delete data loader in application
     * @description: Use this API to delete data loader.
     */
    deleteDataLoader({ dataLoaderId }?: {
        dataLoaderId: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<DataLoaderResponseSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.categoryId - ID allotted to an FAQ category.
     * @param {string} arg.faqId - ID allotted to an FAQ.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CreateFaqResponseSchema>} - Success response
     * @summary: Delete an FAQ
     * @description: Use this API to delete an existing FAQ.
     */
    deleteFaq({ categoryId, faqId }?: {
        categoryId: string;
        faqId: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<CreateFaqResponseSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to an FAQ category.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FaqSchema>} - Success response
     * @summary: Delete an FAQ category
     * @description: Use this API to delete an FAQ category.
     */
    deleteFaqCategory({ id }?: {
        id: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<FaqSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to a landing page.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LandingPageSchema>} - Success response
     * @summary: Delete a landing page
     * @description: Use this API to delete an existing landing page.
     */
    deleteLandingPage({ id }?: {
        id: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<LandingPageSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the navigation.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<NavigationSchema>} - Success response
     * @summary: Delete a navigation
     * @description: Use this API to delete an existing navigation.
     */
    deleteNavigation({ id }?: {
        id: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<NavigationSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the page.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PageSchema>} - Success response
     * @summary: Delete a page
     * @description: Use this API to delete an existing page.
     */
    deletePage({ id }?: {
        id: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<PageSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.pathId - ID allotted to the path redirection rule.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @summary: Delete path based redirection rules
     * @description: Use this API to delete redirection rules
     */
    deletePathRedirectionRules({ pathId }?: {
        pathId: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the slideshow.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SlideshowSchema>} - Success response
     * @summary: Delete a slideshow
     * @description: Use this API to delete an existing slideshow.
     */
    deleteSlideshow({ id }?: {
        id: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<SlideshowSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.dataLoaderId - ID allotted to the data loader.
     * @param {DataLoaderSchema} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DataLoaderResponseSchema>} - Success response
     * @summary: Edit a data loader by id
     * @description: Use this API to edit the details of an existing data loader by its ID.
     */
    editDataLoader({ dataLoaderId, body }?: {
        dataLoaderId: string;
        body: DataLoaderSchema;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<DataLoaderResponseSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.tagId - ID allotted to the tag.
     * @param {UpdateHandpickedSchema} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<TagsSchema>} - Success response
     * @summary: Edit a tag by id
     * @description: Use this API to edit the details of an existing tag by its ID.
     */
    editInjectableTag({ tagId, body }?: {
        tagId: string;
        body: UpdateHandpickedSchema;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<TagsSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GenerationEntityType} arg.type - String representing the type of
     *   SEO content to be generated. Possible values are: title, description
     * @param {GenerateSEOContent} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<GeneratedSEOContent>} - Success response
     * @summary: Get SEO meta tag title for content
     * @description: Use this API to get GPT3 generated SEO meta tag title for content
     */
    generateSEOTitle({ type, body }?: {
        type: GenerationEntityType;
        body: GenerateSEOContent;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<GeneratedSEOContent>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.announcementId - ID allotted to the announcement.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<AdminAnnouncementSchema>} - Success response
     * @summary: Get announcement by ID
     * @description: Use this API to retrieve an announcement and its details such as the target platform and pages on which it's applicable
     */
    getAnnouncementById({ announcementId }?: {
        announcementId: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<AdminAnnouncementSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<GetAnnouncementListSchema>} - Success response
     * @summary: Get a list of announcements
     * @description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to retrieve a list of announcements.
     */
    getAnnouncementsList({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<GetAnnouncementListSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get a list of announcements
     * @description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to retrieve a list of announcements.
     */
    getAnnouncementsListPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a blog page. You can get slug value of a blog from `getBlogs` API.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BlogSchema>} - Success response
     * @summary: Get blog by slug
     * @description: Use this API to retrieve the components of a blog, such as title, slug, feature image, content, schedule, publish status, author, etc.
     */
    getBlogBySlug({ slug }?: {
        slug: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<BlogSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BlogGetResponse>} - Success response
     * @summary: Get blogs
     * @description: Use this API to get a list of blogs along with their details, such as the title, reading time, publish status, feature image, tags, author, etc.
     */
    getBlogs({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<BlogGetResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get blogs
     * @description: Use this API to get a list of blogs along with their details, such as the title, reading time, publish status, feature image, tags, author, etc.
     */
    getBlogsPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a blog page. You can get slug value of a blog from `getBlogs` API.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BlogSchema>} - Success response
     * @summary: Get components of a blog
     * @description: Use this API to retrieve the components of a blog, such as title, slug, feature image, content, schedule, publish status, author, etc.
     */
    getComponentById({ slug }?: {
        slug: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<BlogSchema>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DataLoadersSchema>} - Success response
     * @summary: Get all the data loaders in an application
     * @description: Use this to get all data loaders of an application
     */
    getDataLoaders({ headers }?: import("../PlatformAPIClient").Options): Promise<DataLoadersSchema>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DefaultNavigationResponse>} - Success response
     * @summary: Get default navigations
     * @description: On any website (application), there are navigations that are present by default. Use this API to retrieve those default navigations.
     */
    getDefaultNavigations({ headers }?: import("../PlatformAPIClient").Options): Promise<DefaultNavigationResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.idOrSlug - ID or the slug allotted to an FAQ
     *   category. Slug is a short, human-readable, URL-friendly identifier of
     *   an object. You can get slug value of an FAQ category from
     *   `getFaqCategories` API.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CreateFaqResponseSchema>} - Success response
     * @summary: Get an FAQ
     * @description: Use this API to retrieve a specific FAQ. You will get the question and answer of that FAQ.
     */
    getFaqByIdOrSlug({ idOrSlug }?: {
        idOrSlug: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<CreateFaqResponseSchema>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<GetFaqCategoriesSchema>} - Success response
     * @summary: Get a list of FAQ categories
     * @description: FAQs can be divided into categories. Use this API to get a list of FAQ categories.
     */
    getFaqCategories({ headers }?: import("../PlatformAPIClient").Options): Promise<GetFaqCategoriesSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.idOrSlug - ID or the slug allotted to an FAQ
     *   category. Slug is a short, human-readable, URL-friendly identifier of
     *   an object. You can get slug value of an FAQ category from
     *   `getFaqCategories` API.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<GetFaqCategoryBySlugSchema>} - Success response
     * @summary: Get an FAQ category by slug or id
     * @description: FAQs can be divided into categories. Use this API to get an FAQ categories using its slug or ID.
     */
    getFaqCategoryBySlugOrId({ idOrSlug }?: {
        idOrSlug: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<GetFaqCategoryBySlugSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.idOrSlug - ID or the slug allotted to an FAQ
     *   category. Slug is a short, human-readable, URL-friendly identifier of
     *   an object. You can get slug value of an FAQ category from
     *   `getFaqCategories` API.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<GetFaqSchema>} - Success response
     * @summary: Get question and answers within an FAQ category
     * @description: Use this API to retrieve all the commonly asked question and answers belonging to an FAQ category.
     */
    getFaqsByCategoryIdOrSlug({ idOrSlug }?: {
        idOrSlug: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<GetFaqSchema>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<TagsSchema>} - Success response
     * @summary: Get all the tags in an application
     * @description: Use this API to get all the CSS and JS injected in the application in the form of tags.
     */
    getInjectableTags({ headers }?: import("../PlatformAPIClient").Options): Promise<TagsSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LandingPageGetResponse>} - Success response
     * @summary: Get landing pages
     * @description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to fetch a list of landing pages.
     */
    getLandingPages({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<LandingPageGetResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get landing pages
     * @description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to fetch a list of landing pages.
     */
    getLandingPagesPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ApplicationLegal>} - Success response
     * @summary: Get legal information
     * @description: Use this API to get the legal information of an application, which includes Policy, Terms and Conditions, Shipping Policy and FAQ regarding the application.
     */
    getLegalInformation({ headers }?: import("../PlatformAPIClient").Options): Promise<ApplicationLegal>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a navigation. You can get slug value of a navigation from
     *   `getNavigations` API.
     * @param {string} arg.devicePlatform - Filter navigations by platform.
     *   Acceptable values are: web, android, ios, all
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<NavigationSchema>} - Success response
     * @summary: Get a navigation by slug
     * @description: Use this API to retrieve a navigation by its slug.
     */
    getNavigationBySlug({ slug, devicePlatform }?: {
        slug: string;
        devicePlatform: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<NavigationSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.devicePlatform - Filter navigations by platform.
     *   Acceptable values are: web, android, ios, all
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<NavigationGetResponse>} - Success response
     * @summary: Get navigations
     * @description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the orientation, links, sub-navigations, etc.
     */
    getNavigations({ devicePlatform, pageNo, pageSize }?: {
        devicePlatform: string;
        pageNo?: number;
        pageSize?: number;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<NavigationGetResponse>;
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
     * @summary: Get navigations
     * @description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the orientation, links, sub-navigations, etc.
     */
    getNavigationsPaginator({ companyId, applicationId, devicePlatform, pageSize, }?: {
        companyId: string;
        applicationId: string;
        devicePlatform: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a page. You can get slug value of a page from `getPages` API.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PageSchema>} - Success response
     * @summary: Get page by slug
     * @description: Use this API to retrieve the components of a page, such as its title, seo, publish status, feature image, tags, schedule, etc.
     */
    getPageBySlug({ slug }?: {
        slug: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<PageSchema>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PageMetaSchema>} - Success response
     * @summary: Get page meta
     * @description: Use this API to get the meta of custom pages (blog, page) and default system pages (e.g. home/brand/category/collection).
     */
    getPageMeta({ headers }?: import("../PlatformAPIClient").Options): Promise<PageMetaSchema>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PageSpec>} - Success response
     * @summary: Get page spec
     * @description: Use this API to get the specifications of a page, such as page type, display name, params and query.
     */
    getPageSpec({ headers }?: import("../PlatformAPIClient").Options): Promise<PageSpec>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PageGetResponse>} - Success response
     * @summary: Get a list of pages
     * @description: Use this API to retrieve a list of pages.
     */
    getPages({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<PageGetResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get a list of pages
     * @description: Use this API to retrieve a list of pages.
     */
    getPagesPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.pathId - ID allotted to the path redirection rule.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PathMappingSchema>} - Success response
     * @summary: Get path based redirection rule
     * @description: Use this API to get path based redirection rule.
     */
    getPathRedirectionRule({ pathId }?: {
        pathId: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<PathMappingSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 5.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PathMappingSchema>} - Success response
     * @summary: Get path based redirection rules
     * @description: Use this API to get path based redirection rules.
     */
    getPathRedirectionRules({ pageSize, pageNo }?: {
        pageSize?: number;
        pageNo?: number;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<PathMappingSchema>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SeoComponent>} - Success response
     * @summary: Get SEO configuration of an application
     * @description: Use this API to know how the SEO is configured in the application. This includes the sitemap, robot.txt, custom meta tags, etc.
     */
    getSEOConfiguration({ headers }?: import("../PlatformAPIClient").Options): Promise<SeoComponent>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a slideshow. You can get slug value of a page from
     *   `getSlideshows` API.
     * @param {string} arg.devicePlatform - Filter slideshows by platform.
     *   Acceptable values are: web, android, ios and all
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SlideshowSchema>} - Success response
     * @summary: Get slideshow by slug
     * @description: Use this API to retrieve the details of a slideshow by its slug.
     */
    getSlideshowBySlug({ slug, devicePlatform }?: {
        slug: string;
        devicePlatform: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<SlideshowSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.devicePlatform - Filter slideshows by platform.
     *   Acceptable values are: web, android, ios and all
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SlideshowGetResponse>} - Success response
     * @summary: Get slideshows
     * @description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to fetch a list of slideshows.
     */
    getSlideshows({ devicePlatform, pageNo, pageSize }?: {
        devicePlatform: string;
        pageNo?: number;
        pageSize?: number;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<SlideshowGetResponse>;
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
     * @summary: Get slideshows
     * @description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to fetch a list of slideshows.
     */
    getSlideshowsPaginator({ companyId, applicationId, devicePlatform, pageSize, }?: {
        companyId: string;
        applicationId: string;
        devicePlatform: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Support>} - Success response
     * @summary: Get support information
     * @description: Use this API to get the contact details for customer support, including emails and phone numbers.
     */
    getSupportInformation({ headers }?: import("../PlatformAPIClient").Options): Promise<Support>;
    /**
     * @param {Object} arg - Arg object.
     * @param {RemoveHandpickedSchema} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<TagDeleteSuccessResponse>} - Success response
     * @summary: Remove a tag
     * @description: Use this API to delete an existing tag.
     */
    removeInjectableTag({ body }?: {
        body: RemoveHandpickedSchema;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<TagDeleteSuccessResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.service - Name of service.
     * @param {string} arg.operationId - Name of operation id of the service.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DataLoaderResetResponseSchema>} - Success response
     * @summary: Reset a data loader by serive name and operation Id
     * @description: Use this API to reselect a data loader.
     */
    resetDataLoader({ service, operationId }?: {
        service: string;
        operationId: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<DataLoaderResetResponseSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.dataLoaderId - ID allotted to the data loader.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DataLoaderResponseSchema>} - Success response
     * @summary: Select a data loader by id
     * @description: Use this API to select a data loader to be used in applications.
     */
    selectDataLoader({ dataLoaderId }?: {
        dataLoaderId: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<DataLoaderResponseSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.announcementId - ID allotted to the announcement.
     * @param {AdminAnnouncementSchema} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CreateAnnouncementSchema>} - Success response
     * @summary: Update an announcement
     * @description: Use this API to edit an existing announcement and its details such as the target platform and pages on which it's applicable
     */
    updateAnnouncement({ announcementId, body }?: {
        announcementId: string;
        body: AdminAnnouncementSchema;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<CreateAnnouncementSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.announcementId - ID allotted to the announcement.
     * @param {ScheduleSchema} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CreateAnnouncementSchema>} - Success response
     * @summary: Update the schedule and the publish status of an announcement
     * @description: Use this API to edit the duration, i.e. start date-time and end date-time of an announcement. Moreover, you can enable/disable an announcement using this API.
     */
    updateAnnouncementSchedule({ announcementId, body }?: {
        announcementId: string;
        body: ScheduleSchema;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<CreateAnnouncementSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the blog.
     * @param {BlogRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BlogSchema>} - Success response
     * @summary: Update a blog
     * @description: Use this API to update the details of an existing blog which includes title, feature image, content, SEO details, expiry, etc.
     */
    updateBlog({ id, body }?: {
        id: string;
        body: BlogRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<BlogSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.categoryId - ID allotted to an FAQ category.
     * @param {string} arg.faqId - ID allotted to an FAQ.
     * @param {CreateFaqSchema} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CreateFaqResponseSchema>} - Success response
     * @summary: Update an FAQ
     * @description: Use this API to edit an existing FAQ.
     */
    updateFaq({ categoryId, faqId, body }?: {
        categoryId: string;
        faqId: string;
        body: CreateFaqSchema;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<CreateFaqResponseSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to an FAQ category.
     * @param {UpdateFaqCategoryRequestSchema} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CreateFaqCategorySchema>} - Success response
     * @summary: Update an FAQ category
     * @description: Use this API to edit an existing FAQ category.
     */
    updateFaqCategory({ id, body }?: {
        id: string;
        body: UpdateFaqCategoryRequestSchema;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<CreateFaqCategorySchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateTagRequestSchema} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<TagsSchema>} - Success response
     * @summary: Update a tag
     * @description: Use this API to edit the details of an existing tag. This includes the tag name, tag type (css/js), url and position of the tag.
     */
    updateInjectableTag({ body }?: {
        body: CreateTagRequestSchema;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<TagsSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to a landing page.
     * @param {LandingPageSchema} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LandingPageSchema>} - Success response
     * @summary: Update a landing page
     * @description: Use this API to edit the details of an existing landing page.
     */
    updateLandingPage({ id, body }?: {
        id: string;
        body: LandingPageSchema;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<LandingPageSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ApplicationLegal} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ApplicationLegal>} - Success response
     * @summary: Save legal information
     * @description: Use this API to edit, update and save the legal information of an application, which includes Policy, Terms and Conditions, Shipping Policy and FAQ regarding the application.
     */
    updateLegalInformation({ body }?: {
        body: ApplicationLegal;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ApplicationLegal>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the navigation.
     * @param {NavigationRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<NavigationSchema>} - Success response
     * @summary: Update a navigation
     * @description: Use this API to edit the details of an existing navigation.
     */
    updateNavigation({ id, body }?: {
        id: string;
        body: NavigationRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<NavigationSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the page.
     * @param {PageSchema} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PageSchema>} - Success response
     * @summary: Update a page
     * @description: Use this API to edit the details of an existing page, such as its title, seo, publish status, feature image, tags, schedule, etc.
     */
    updatePage({ id, body }?: {
        id: string;
        body: PageSchema;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<PageSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a page. You can get slug value of a page from `getPages` API.
     * @param {PagePublishRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PageSchema>} - Success response
     * @summary: Change the publish status of a page
     * @description: Use this API to change the publish status of an existing page. Allows you to publish and unpublish the page.
     */
    updatePagePreview({ slug, body }?: {
        slug: string;
        body: PagePublishRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<PageSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.pathId - ID allotted to the path redirection rule.
     * @param {PathMappingSchema} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PathMappingSchema>} - Success response
     * @summary: Update path based redirection rules
     * @description: Use this API to update redirection rules
     */
    updatePathRedirectionRules({ pathId, body }?: {
        pathId: string;
        body: PathMappingSchema;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<PathMappingSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SeoComponent} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SeoSchema>} - Success response
     * @summary: Update SEO of application
     * @description: Use this API to edit the SEO details of an application. This includes the sitemap, robot.txt, custom meta tags, etc.
     */
    updateSEOConfiguration({ body }?: {
        body: SeoComponent;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<SeoSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the slideshow.
     * @param {SlideshowRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SlideshowSchema>} - Success response
     * @summary: Update a slideshow
     * @description: Use this API to edit the details of an existing slideshow.
     */
    updateSlideshow({ id, body }?: {
        id: string;
        body: SlideshowRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<SlideshowSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {Support} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Support>} - Success response
     * @summary: Update the support data of an application
     * @description: Use this API to edit the existing contact details for customer support, including emails and phone numbers.
     */
    updateSupportInformation({ body }?: {
        body: Support;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<Support>;
}
import Paginator = require("../../common/Paginator");
