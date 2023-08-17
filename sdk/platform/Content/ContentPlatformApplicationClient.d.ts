export = Content;
declare class Content {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {ContentPlatformApplicationValidator.AddDataLoaderParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.DataLoaderResponseSchema>} -
     *   Success response
     * @name addDataLoader
     * @summary: Adds a data loader
     * @description: Use this API to add data loader. This includes the data loader name, operationId, service name and its type (url/function) with corresponding value. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/addDataLoader/).
     */
    addDataLoader({ body }?: ContentPlatformApplicationValidator.AddDataLoaderParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.DataLoaderResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.AddFaqParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CreateFaqResponseSchema>} - Success response
     * @name addFaq
     * @summary: Create an FAQ
     * @description: FAQs help users to solve an issue or know more about a process. Use this API to create an FAQ for a given FAQ category. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/addFaq/).
     */
    addFaq({ categoryId, body }?: ContentPlatformApplicationValidator.AddFaqParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.CreateFaqResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.AddInjectableTagParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.TagsSchema>} - Success response
     * @name addInjectableTag
     * @summary: Add a tag
     * @description: CSS and JS can be injected in the application (website) with the help of tags. Use this API to create such tags by entering the tag name, tag type (css/js), url and position of the tag. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/addInjectableTag/).
     */
    addInjectableTag({ body }?: ContentPlatformApplicationValidator.AddInjectableTagParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.TagsSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.AddPathRedirectionRulesParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.PathMappingSchema>} - Success response
     * @name addPathRedirectionRules
     * @summary: Save path based redirection rules
     * @description: Use this API to add redirection rules - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/addPathRedirectionRules/).
     */
    addPathRedirectionRules({ body }?: ContentPlatformApplicationValidator.AddPathRedirectionRulesParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.PathMappingSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.CreateAnnouncementParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CreateAnnouncementSchema>} -
     *   Success response
     * @name createAnnouncement
     * @summary: Create an announcement
     * @description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to create an announcement. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createAnnouncement/).
     */
    createAnnouncement({ body }?: ContentPlatformApplicationValidator.CreateAnnouncementParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.CreateAnnouncementSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.CreateBlogParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.BlogSchema>} - Success response
     * @name createBlog
     * @summary: Create a blog
     * @description: Use this API to create a blog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createBlog/).
     */
    createBlog({ body }?: ContentPlatformApplicationValidator.CreateBlogParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.BlogSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.CreateFaqCategoryParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CreateFaqCategorySchema>} - Success response
     * @name createFaqCategory
     * @summary: Create an FAQ category
     * @description: FAQs help users to solve an issue or know more about a process. FAQs can be categorized separately, for e.g. some questions can be related to payment, some could be related to purchase, shipping, navigating, etc. Use this API to create an FAQ category. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createFaqCategory/).
     */
    createFaqCategory({ body }?: ContentPlatformApplicationValidator.CreateFaqCategoryParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.CreateFaqCategorySchema>;
    /**
     * @param {ContentPlatformApplicationValidator.CreateLandingPageParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.LandingPageSchema>} - Success response
     * @name createLandingPage
     * @summary: Create a landing page
     * @description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to create a landing page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createLandingPage/).
     */
    createLandingPage({ body }?: ContentPlatformApplicationValidator.CreateLandingPageParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.LandingPageSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.CreateNavigationParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.NavigationSchema>} - Success response
     * @name createNavigation
     * @summary: Create a navigation
     * @description: Navigation is the arrangement of navigational items to ease the accessibility of resources for users on a website. Use this API to create a navigation. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createNavigation/).
     */
    createNavigation({ body }?: ContentPlatformApplicationValidator.CreateNavigationParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.NavigationSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.CreatePageParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
     * @name createPage
     * @summary: Create a page
     * @description: Use this API to create a custom page using a title, seo, publish status, feature image, tags, meta, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createPage/).
     */
    createPage({ body }?: ContentPlatformApplicationValidator.CreatePageParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.PageSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.CreatePagePreviewParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
     * @name createPagePreview
     * @summary: Create a page preview
     * @description: Use this API to create a page preview to check the appearance of a custom page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createPagePreview/).
     */
    createPagePreview({ body }?: ContentPlatformApplicationValidator.CreatePagePreviewParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.PageSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.CreateSlideshowParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.SlideshowSchema>} - Success response
     * @name createSlideshow
     * @summary: Create a slideshow
     * @description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to create a slideshow. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createSlideshow/).
     */
    createSlideshow({ body }?: ContentPlatformApplicationValidator.CreateSlideshowParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.SlideshowSchema>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.TagsSchema>} - Success response
     * @name deleteAllInjectableTags
     * @summary: Delete tags in application
     * @description: Use this API to delete all the existing tags at once. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteAllInjectableTags/).
     */
    deleteAllInjectableTags({ headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.TagsSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.DeleteAnnouncementParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CreateAnnouncementSchema>} -
     *   Success response
     * @name deleteAnnouncement
     * @summary: Delete announcement by id
     * @description: Use this API to delete an existing announcement. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteAnnouncement/).
     */
    deleteAnnouncement({ announcementId }?: ContentPlatformApplicationValidator.DeleteAnnouncementParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.CreateAnnouncementSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.DeleteBlogParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.BlogSchema>} - Success response
     * @name deleteBlog
     * @summary: Delete blogs
     * @description: Use this API to delete a blog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteBlog/).
     */
    deleteBlog({ id }?: ContentPlatformApplicationValidator.DeleteBlogParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.BlogSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.DeleteDataLoaderParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.DataLoaderResponseSchema>} -
     *   Success response
     * @name deleteDataLoader
     * @summary: Delete data loader in application
     * @description: Use this API to delete data loader. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteDataLoader/).
     */
    deleteDataLoader({ dataLoaderId }?: ContentPlatformApplicationValidator.DeleteDataLoaderParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.DataLoaderResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.DeleteFaqParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CreateFaqResponseSchema>} - Success response
     * @name deleteFaq
     * @summary: Delete an FAQ
     * @description: Use this API to delete an existing FAQ. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteFaq/).
     */
    deleteFaq({ categoryId, faqId }?: ContentPlatformApplicationValidator.DeleteFaqParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.CreateFaqResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.DeleteFaqCategoryParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.FaqSchema>} - Success response
     * @name deleteFaqCategory
     * @summary: Delete an FAQ category
     * @description: Use this API to delete an FAQ category. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteFaqCategory/).
     */
    deleteFaqCategory({ id }?: ContentPlatformApplicationValidator.DeleteFaqCategoryParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.FaqSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.DeleteLandingPageParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.LandingPageSchema>} - Success response
     * @name deleteLandingPage
     * @summary: Delete a landing page
     * @description: Use this API to delete an existing landing page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteLandingPage/).
     */
    deleteLandingPage({ id }?: ContentPlatformApplicationValidator.DeleteLandingPageParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.LandingPageSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.DeleteNavigationParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.NavigationSchema>} - Success response
     * @name deleteNavigation
     * @summary: Delete a navigation
     * @description: Use this API to delete an existing navigation. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteNavigation/).
     */
    deleteNavigation({ id }?: ContentPlatformApplicationValidator.DeleteNavigationParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.NavigationSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.DeletePageParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
     * @name deletePage
     * @summary: Delete a page
     * @description: Use this API to delete an existing page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deletePage/).
     */
    deletePage({ id }?: ContentPlatformApplicationValidator.DeletePageParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.PageSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.DeletePathRedirectionRulesParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name deletePathRedirectionRules
     * @summary: Delete path based redirection rules
     * @description: Use this API to delete redirection rules - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deletePathRedirectionRules/).
     */
    deletePathRedirectionRules({ pathId }?: ContentPlatformApplicationValidator.DeletePathRedirectionRulesParam, { headers }?: import("../PlatformAPIClient").Options): Promise<any>;
    /**
     * @param {ContentPlatformApplicationValidator.DeleteSlideshowParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.SlideshowSchema>} - Success response
     * @name deleteSlideshow
     * @summary: Delete a slideshow
     * @description: Use this API to delete an existing slideshow. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteSlideshow/).
     */
    deleteSlideshow({ id }?: ContentPlatformApplicationValidator.DeleteSlideshowParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.SlideshowSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.EditDataLoaderParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.DataLoaderResponseSchema>} -
     *   Success response
     * @name editDataLoader
     * @summary: Edit a data loader by id
     * @description: Use this API to edit the details of an existing data loader by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/editDataLoader/).
     */
    editDataLoader({ dataLoaderId, body }?: ContentPlatformApplicationValidator.EditDataLoaderParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.DataLoaderResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.EditInjectableTagParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.TagsSchema>} - Success response
     * @name editInjectableTag
     * @summary: Edit a tag by id
     * @description: Use this API to edit the details of an existing tag by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/editInjectableTag/).
     */
    editInjectableTag({ tagId, body }?: ContentPlatformApplicationValidator.EditInjectableTagParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.TagsSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GenerateSEOTitleParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.GeneratedSEOContent>} - Success response
     * @name generateSEOTitle
     * @summary: Get SEO meta tag title for content
     * @description: Use this API to get GPT3 generated SEO meta tag title for content - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/generateSEOTitle/).
     */
    generateSEOTitle({ type, body }?: ContentPlatformApplicationValidator.GenerateSEOTitleParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.GeneratedSEOContent>;
    /**
     * @param {ContentPlatformApplicationValidator.GetAnnouncementByIdParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.AdminAnnouncementSchema>} - Success response
     * @name getAnnouncementById
     * @summary: Get announcement by ID
     * @description: Use this API to retrieve an announcement and its details such as the target platform and pages on which it's applicable - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getAnnouncementById/).
     */
    getAnnouncementById({ announcementId }?: ContentPlatformApplicationValidator.GetAnnouncementByIdParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.AdminAnnouncementSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetAnnouncementsListParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.GetAnnouncementListSchema>} -
     *   Success response
     * @name getAnnouncementsList
     * @summary: Get a list of announcements
     * @description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to retrieve a list of announcements.	 - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getAnnouncementsList/).
     */
    getAnnouncementsList({ pageNo, pageSize }?: ContentPlatformApplicationValidator.GetAnnouncementsListParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.GetAnnouncementListSchema>;
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
     * @param {ContentPlatformApplicationValidator.GetBlogBySlugParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.BlogSchema>} - Success response
     * @name getBlogBySlug
     * @summary: Get blog by slug
     * @description: Use this API to retrieve the components of a blog, such as title, slug, feature image, content, schedule, publish status, author, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getBlogBySlug/).
     */
    getBlogBySlug({ slug }?: ContentPlatformApplicationValidator.GetBlogBySlugParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.BlogSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetBlogsParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.BlogGetResponse>} - Success response
     * @name getBlogs
     * @summary: Get blogs
     * @description: Use this API to get a list of blogs along with their details, such as the title, reading time, publish status, feature image, tags, author, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getBlogs/).
     */
    getBlogs({ pageNo, pageSize }?: ContentPlatformApplicationValidator.GetBlogsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.BlogGetResponse>;
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
     * @param {ContentPlatformApplicationValidator.GetComponentByIdParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.BlogSchema>} - Success response
     * @name getComponentById
     * @summary: Get components of a blog
     * @description: Use this API to retrieve the components of a blog, such as title, slug, feature image, content, schedule, publish status, author, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getComponentById/).
     */
    getComponentById({ slug }?: ContentPlatformApplicationValidator.GetComponentByIdParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.BlogSchema>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.DataLoadersSchema>} - Success response
     * @name getDataLoaders
     * @summary: Get all the data loaders in an application
     * @description: Use this to get all data loaders of an application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getDataLoaders/).
     */
    getDataLoaders({ headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.DataLoadersSchema>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.DefaultNavigationResponse>} -
     *   Success response
     * @name getDefaultNavigations
     * @summary: Get default navigations
     * @description: On any website (application), there are navigations that are present by default. Use this API to retrieve those default navigations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getDefaultNavigations/).
     */
    getDefaultNavigations({ headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.DefaultNavigationResponse>;
    /**
     * @param {ContentPlatformApplicationValidator.GetFaqByIdOrSlugParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CreateFaqResponseSchema>} - Success response
     * @name getFaqByIdOrSlug
     * @summary: Get an FAQ
     * @description: Use this API to retrieve a specific FAQ. You will get the question and answer of that FAQ. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getFaqByIdOrSlug/).
     */
    getFaqByIdOrSlug({ idOrSlug }?: ContentPlatformApplicationValidator.GetFaqByIdOrSlugParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.CreateFaqResponseSchema>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.GetFaqCategoriesSchema>} - Success response
     * @name getFaqCategories
     * @summary: Get a list of FAQ categories
     * @description: FAQs can be divided into categories. Use this API to get a list of FAQ categories. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getFaqCategories/).
     */
    getFaqCategories({ headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.GetFaqCategoriesSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetFaqCategoryBySlugOrIdParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.GetFaqCategoryBySlugSchema>} -
     *   Success response
     * @name getFaqCategoryBySlugOrId
     * @summary: Get an FAQ category by slug or id
     * @description: FAQs can be divided into categories. Use this API to get an FAQ categories using its slug or ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getFaqCategoryBySlugOrId/).
     */
    getFaqCategoryBySlugOrId({ idOrSlug }?: ContentPlatformApplicationValidator.GetFaqCategoryBySlugOrIdParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.GetFaqCategoryBySlugSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetFaqsByCategoryIdOrSlugParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.GetFaqSchema>} - Success response
     * @name getFaqsByCategoryIdOrSlug
     * @summary: Get question and answers within an FAQ category
     * @description: Use this API to retrieve all the commonly asked question and answers belonging to an FAQ category. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getFaqsByCategoryIdOrSlug/).
     */
    getFaqsByCategoryIdOrSlug({ idOrSlug }?: ContentPlatformApplicationValidator.GetFaqsByCategoryIdOrSlugParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.GetFaqSchema>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.TagsSchema>} - Success response
     * @name getInjectableTags
     * @summary: Get all the tags in an application
     * @description: Use this API to get all the CSS and JS injected in the application in the form of tags. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getInjectableTags/).
     */
    getInjectableTags({ headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.TagsSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetLandingPagesParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.LandingPageGetResponse>} - Success response
     * @name getLandingPages
     * @summary: Get landing pages
     * @description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to fetch a list of landing pages. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getLandingPages/).
     */
    getLandingPages({ pageNo, pageSize }?: ContentPlatformApplicationValidator.GetLandingPagesParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.LandingPageGetResponse>;
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
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.ApplicationLegal>} - Success response
     * @name getLegalInformation
     * @summary: Get legal information
     * @description: Use this API to get the legal information of an application, which includes Policy, Terms and Conditions, Shipping Policy and FAQ regarding the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getLegalInformation/).
     */
    getLegalInformation({ headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.ApplicationLegal>;
    /**
     * @param {ContentPlatformApplicationValidator.GetNavigationBySlugParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.NavigationSchema>} - Success response
     * @name getNavigationBySlug
     * @summary: Get a navigation by slug
     * @description: Use this API to retrieve a navigation by its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getNavigationBySlug/).
     */
    getNavigationBySlug({ slug, devicePlatform }?: ContentPlatformApplicationValidator.GetNavigationBySlugParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.NavigationSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetNavigationsParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.NavigationGetResponse>} - Success response
     * @name getNavigations
     * @summary: Get navigations
     * @description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the orientation, links, sub-navigations, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getNavigations/).
     */
    getNavigations({ devicePlatform, pageNo, pageSize }?: ContentPlatformApplicationValidator.GetNavigationsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.NavigationGetResponse>;
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
     * @param {ContentPlatformApplicationValidator.GetPageBySlugParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
     * @name getPageBySlug
     * @summary: Get page by slug
     * @description: Use this API to retrieve the components of a page, such as its title, seo, publish status, feature image, tags, schedule, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getPageBySlug/).
     */
    getPageBySlug({ slug }?: ContentPlatformApplicationValidator.GetPageBySlugParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.PageSchema>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.PageMetaSchema>} - Success response
     * @name getPageMeta
     * @summary: Get page meta
     * @description: Use this API to get the meta of custom pages (blog, page) and default system pages (e.g. home/brand/category/collection). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getPageMeta/).
     */
    getPageMeta({ headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.PageMetaSchema>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.PageSpec>} - Success response
     * @name getPageSpec
     * @summary: Get page spec
     * @description: Use this API to get the specifications of a page, such as page type, display name, params and query. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getPageSpec/).
     */
    getPageSpec({ headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.PageSpec>;
    /**
     * @param {ContentPlatformApplicationValidator.GetPagesParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.PageGetResponse>} - Success response
     * @name getPages
     * @summary: Get a list of pages
     * @description: Use this API to retrieve a list of pages. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getPages/).
     */
    getPages({ pageNo, pageSize }?: ContentPlatformApplicationValidator.GetPagesParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.PageGetResponse>;
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
     * @param {ContentPlatformApplicationValidator.GetPathRedirectionRuleParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.PathMappingSchema>} - Success response
     * @name getPathRedirectionRule
     * @summary: Get path based redirection rule
     * @description: Use this API to get path based redirection rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getPathRedirectionRule/).
     */
    getPathRedirectionRule({ pathId }?: ContentPlatformApplicationValidator.GetPathRedirectionRuleParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.PathMappingSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetPathRedirectionRulesParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.PathMappingSchema>} - Success response
     * @name getPathRedirectionRules
     * @summary: Get path based redirection rules
     * @description: Use this API to get path based redirection rules. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getPathRedirectionRules/).
     */
    getPathRedirectionRules({ pageSize, pageNo }?: ContentPlatformApplicationValidator.GetPathRedirectionRulesParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.PathMappingSchema>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.SeoComponent>} - Success response
     * @name getSEOConfiguration
     * @summary: Get SEO configuration of an application
     * @description: Use this API to know how the SEO is configured in the application. This includes the sitemap, robot.txt, custom meta tags, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getSEOConfiguration/).
     */
    getSEOConfiguration({ headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.SeoComponent>;
    /**
     * @param {ContentPlatformApplicationValidator.GetSlideshowBySlugParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.SlideshowSchema>} - Success response
     * @name getSlideshowBySlug
     * @summary: Get slideshow by slug
     * @description: Use this API to retrieve the details of a slideshow by its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getSlideshowBySlug/).
     */
    getSlideshowBySlug({ slug, devicePlatform }?: ContentPlatformApplicationValidator.GetSlideshowBySlugParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.SlideshowSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetSlideshowsParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.SlideshowGetResponse>} - Success response
     * @name getSlideshows
     * @summary: Get slideshows
     * @description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to fetch a list of slideshows. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getSlideshows/).
     */
    getSlideshows({ devicePlatform, pageNo, pageSize }?: ContentPlatformApplicationValidator.GetSlideshowsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.SlideshowGetResponse>;
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
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.Support>} - Success response
     * @name getSupportInformation
     * @summary: Get support information
     * @description: Use this API to get the contact details for customer support, including emails and phone numbers. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getSupportInformation/).
     */
    getSupportInformation({ headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.Support>;
    /**
     * @param {ContentPlatformApplicationValidator.RemoveInjectableTagParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.TagDeleteSuccessResponse>} -
     *   Success response
     * @name removeInjectableTag
     * @summary: Remove a tag
     * @description: Use this API to delete an existing tag. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/removeInjectableTag/).
     */
    removeInjectableTag({ body }?: ContentPlatformApplicationValidator.RemoveInjectableTagParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.TagDeleteSuccessResponse>;
    /**
     * @param {ContentPlatformApplicationValidator.ResetDataLoaderParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.DataLoaderResetResponseSchema>} -
     *   Success response
     * @name resetDataLoader
     * @summary: Reset a data loader by serive name and operation Id
     * @description: Use this API to reselect a data loader. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/resetDataLoader/).
     */
    resetDataLoader({ service, operationId }?: ContentPlatformApplicationValidator.ResetDataLoaderParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.DataLoaderResetResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.SelectDataLoaderParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.DataLoaderResponseSchema>} -
     *   Success response
     * @name selectDataLoader
     * @summary: Select a data loader by id
     * @description: Use this API to select a data loader to be used in applications. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/selectDataLoader/).
     */
    selectDataLoader({ dataLoaderId }?: ContentPlatformApplicationValidator.SelectDataLoaderParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.DataLoaderResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateAnnouncementParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CreateAnnouncementSchema>} -
     *   Success response
     * @name updateAnnouncement
     * @summary: Update an announcement
     * @description: Use this API to edit an existing announcement and its details such as the target platform and pages on which it's applicable - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateAnnouncement/).
     */
    updateAnnouncement({ announcementId, body }?: ContentPlatformApplicationValidator.UpdateAnnouncementParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.CreateAnnouncementSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateAnnouncementScheduleParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CreateAnnouncementSchema>} -
     *   Success response
     * @name updateAnnouncementSchedule
     * @summary: Update the schedule and the publish status of an announcement
     * @description: Use this API to edit the duration, i.e. start date-time and end date-time of an announcement. Moreover, you can enable/disable an announcement using this API. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateAnnouncementSchedule/).
     */
    updateAnnouncementSchedule({ announcementId, body }?: ContentPlatformApplicationValidator.UpdateAnnouncementScheduleParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.CreateAnnouncementSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateBlogParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.BlogSchema>} - Success response
     * @name updateBlog
     * @summary: Update a blog
     * @description: Use this API to update the details of an existing blog which includes title, feature image, content, SEO details, expiry, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateBlog/).
     */
    updateBlog({ id, body }?: ContentPlatformApplicationValidator.UpdateBlogParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.BlogSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateFaqParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CreateFaqResponseSchema>} - Success response
     * @name updateFaq
     * @summary: Update an FAQ
     * @description: Use this API to edit an existing FAQ. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateFaq/).
     */
    updateFaq({ categoryId, faqId, body }?: ContentPlatformApplicationValidator.UpdateFaqParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.CreateFaqResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateFaqCategoryParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CreateFaqCategorySchema>} - Success response
     * @name updateFaqCategory
     * @summary: Update an FAQ category
     * @description: Use this API to edit an existing FAQ category. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateFaqCategory/).
     */
    updateFaqCategory({ id, body }?: ContentPlatformApplicationValidator.UpdateFaqCategoryParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.CreateFaqCategorySchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateInjectableTagParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.TagsSchema>} - Success response
     * @name updateInjectableTag
     * @summary: Update a tag
     * @description: Use this API to edit the details of an existing tag. This includes the tag name, tag type (css/js), url and position of the tag. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateInjectableTag/).
     */
    updateInjectableTag({ body }?: ContentPlatformApplicationValidator.UpdateInjectableTagParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.TagsSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateLandingPageParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.LandingPageSchema>} - Success response
     * @name updateLandingPage
     * @summary: Update a landing page
     * @description: Use this API to edit the details of an existing landing page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateLandingPage/).
     */
    updateLandingPage({ id, body }?: ContentPlatformApplicationValidator.UpdateLandingPageParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.LandingPageSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateLegalInformationParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.ApplicationLegal>} - Success response
     * @name updateLegalInformation
     * @summary: Save legal information
     * @description: Use this API to edit, update and save the legal information of an application, which includes Policy, Terms and Conditions, Shipping Policy and FAQ regarding the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateLegalInformation/).
     */
    updateLegalInformation({ body }?: ContentPlatformApplicationValidator.UpdateLegalInformationParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.ApplicationLegal>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateNavigationParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.NavigationSchema>} - Success response
     * @name updateNavigation
     * @summary: Update a navigation
     * @description: Use this API to edit the details of an existing navigation. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateNavigation/).
     */
    updateNavigation({ id, body }?: ContentPlatformApplicationValidator.UpdateNavigationParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.NavigationSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdatePageParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
     * @name updatePage
     * @summary: Update a page
     * @description: Use this API to edit the details of an existing page, such as its title, seo, publish status, feature image, tags, schedule, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updatePage/).
     */
    updatePage({ id, body }?: ContentPlatformApplicationValidator.UpdatePageParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.PageSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdatePagePreviewParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
     * @name updatePagePreview
     * @summary: Change the publish status of a page
     * @description: Use this API to change the publish status of an existing page. Allows you to publish and unpublish the page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updatePagePreview/).
     */
    updatePagePreview({ slug, body }?: ContentPlatformApplicationValidator.UpdatePagePreviewParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.PageSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdatePathRedirectionRulesParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.PathMappingSchema>} - Success response
     * @name updatePathRedirectionRules
     * @summary: Update path based redirection rules
     * @description: Use this API to update redirection rules - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updatePathRedirectionRules/).
     */
    updatePathRedirectionRules({ pathId, body }?: ContentPlatformApplicationValidator.UpdatePathRedirectionRulesParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.PathMappingSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateSEOConfigurationParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.SeoSchema>} - Success response
     * @name updateSEOConfiguration
     * @summary: Update SEO of application
     * @description: Use this API to edit the SEO details of an application. This includes the sitemap, robot.txt, custom meta tags, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateSEOConfiguration/).
     */
    updateSEOConfiguration({ body }?: ContentPlatformApplicationValidator.UpdateSEOConfigurationParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.SeoSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateSlideshowParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.SlideshowSchema>} - Success response
     * @name updateSlideshow
     * @summary: Update a slideshow
     * @description: Use this API to edit the details of an existing slideshow. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateSlideshow/).
     */
    updateSlideshow({ id, body }?: ContentPlatformApplicationValidator.UpdateSlideshowParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.SlideshowSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateSupportInformationParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.Support>} - Success response
     * @name updateSupportInformation
     * @summary: Update the support data of an application
     * @description: Use this API to edit the existing contact details for customer support, including emails and phone numbers. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateSupportInformation/).
     */
    updateSupportInformation({ body }?: ContentPlatformApplicationValidator.UpdateSupportInformationParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ContentPlatformModel.Support>;
}
import ContentPlatformApplicationValidator = require("./ContentPlatformApplicationValidator");
import ContentPlatformModel = require("./ContentPlatformModel");
import Paginator = require("../../common/Paginator");
