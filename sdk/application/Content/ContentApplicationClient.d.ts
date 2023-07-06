export = Content;
declare class Content {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getAnnouncements: string;
        getBlog: string;
        getBlogs: string;
        getDataLoaders: string;
        getFaqBySlug: string;
        getFaqCategories: string;
        getFaqCategoryBySlug: string;
        getFaqs: string;
        getFaqsByCategorySlug: string;
        getLandingPage: string;
        getLegalInformation: string;
        getNavigations: string;
        getPage: string;
        getPages: string;
        getSEOConfiguration: string;
        getSlideshow: string;
        getSlideshows: string;
        getSupportInformation: string;
        getTags: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {ContentApplicationValidator.GetAnnouncementsParam} arg - Arg object.
     * @returns {Promise<ContentApplicationModel.AnnouncementsResponseSchema>}
     *   - Success response
     *
     * @name getAnnouncements
     * @summary: Get live announcements
     * @description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to retrieve live announcements. Get announcements on individual pages or for all pages.
     */
    getAnnouncements({}?: any): Promise<ContentApplicationModel.AnnouncementsResponseSchema>;
    /**
     * @param {ContentApplicationValidator.GetBlogParam} arg - Arg object.
     * @returns {Promise<ContentApplicationModel.BlogSchema>} - Success response
     * @name getBlog
     * @summary: Get a blog
     * @description: Use this API to get the details of a blog using its slug. Details include the title, reading time, publish status, feature image, tags, author, etc.
     */
    getBlog({ slug, rootId }?: ContentApplicationValidator.GetBlogParam): Promise<ContentApplicationModel.BlogSchema>;
    /**
     * @param {ContentApplicationValidator.GetBlogsParam} arg - Arg object.
     * @returns {Promise<ContentApplicationModel.BlogGetResponse>} - Success response
     * @name getBlogs
     * @summary: Get a list of blogs
     * @description: Use this API to get all the blogs.
     */
    getBlogs({ pageNo, pageSize }?: ContentApplicationValidator.GetBlogsParam): Promise<ContentApplicationModel.BlogGetResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Paginator<ContentApplicationModel.BlogGetResponse>}
     * @summary: Get a list of blogs
     * @description: Use this API to get all the blogs.
     */
    getBlogsPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator<ContentApplicationModel.BlogGetResponse>;
    /**
     * @param {ContentApplicationValidator.GetDataLoadersParam} arg - Arg object.
     * @returns {Promise<ContentApplicationModel.DataLoadersSchema>} - Success response
     * @name getDataLoaders
     * @summary: Get the data loaders associated with an application
     * @description: Use this API to get all selected data loaders of the application in the form of tags.
     */
    getDataLoaders({}?: any): Promise<ContentApplicationModel.DataLoadersSchema>;
    /**
     * @param {ContentApplicationValidator.GetFaqBySlugParam} arg - Arg object.
     * @returns {Promise<ContentApplicationModel.FaqSchema>} - Success response
     * @name getFaqBySlug
     * @summary: Get an FAQ
     * @description: Use this API to get a particular FAQ by its slug.
     */
    getFaqBySlug({ slug }?: ContentApplicationValidator.GetFaqBySlugParam): Promise<ContentApplicationModel.FaqSchema>;
    /**
     * @param {ContentApplicationValidator.GetFaqCategoriesParam} arg - Arg object.
     * @returns {Promise<ContentApplicationModel.GetFaqCategoriesSchema>} -
     *   Success response
     * @name getFaqCategories
     * @summary: Get a list of FAQ categories
     * @description: FAQs can be divided into categories. Use this API to get a list of FAQ categories.
     */
    getFaqCategories({}?: any): Promise<ContentApplicationModel.GetFaqCategoriesSchema>;
    /**
     * @param {ContentApplicationValidator.GetFaqCategoryBySlugParam} arg - Arg object.
     * @returns {Promise<ContentApplicationModel.GetFaqCategoryBySlugSchema>} -
     *   Success response
     * @name getFaqCategoryBySlug
     * @summary: Get the FAQ category
     * @description: FAQs can be divided into categories. Use this API to get the category to which an FAQ belongs.
     */
    getFaqCategoryBySlug({ slug }?: ContentApplicationValidator.GetFaqCategoryBySlugParam): Promise<ContentApplicationModel.GetFaqCategoryBySlugSchema>;
    /**
     * @param {ContentApplicationValidator.GetFaqsParam} arg - Arg object.
     * @returns {Promise<ContentApplicationModel.FaqResponseSchema>} - Success response
     * @name getFaqs
     * @summary: Get a list of FAQs
     * @description: Use this API to get a list of frequently asked questions. Users will benefit from it when facing any issue with the website.
     */
    getFaqs({}?: any): Promise<ContentApplicationModel.FaqResponseSchema>;
    /**
     * @param {ContentApplicationValidator.GetFaqsByCategorySlugParam} arg - Arg object.
     * @returns {Promise<ContentApplicationModel.GetFaqSchema>} - Success response
     * @name getFaqsByCategorySlug
     * @summary: Get FAQs using the slug of FAQ category
     * @description: FAQs can be divided into categories. Use this API to get all the FAQs belonging to a category by using the category slug.
     */
    getFaqsByCategorySlug({ slug }?: ContentApplicationValidator.GetFaqsByCategorySlugParam): Promise<ContentApplicationModel.GetFaqSchema>;
    /**
     * @param {ContentApplicationValidator.GetLandingPageParam} arg - Arg object.
     * @returns {Promise<ContentApplicationModel.LandingPageSchema>} - Success response
     * @name getLandingPage
     * @summary: Get the landing page
     * @description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to fetch the details of a landing page.
     */
    getLandingPage({}?: any): Promise<ContentApplicationModel.LandingPageSchema>;
    /**
     * @param {ContentApplicationValidator.GetLegalInformationParam} arg - Arg object.
     * @returns {Promise<ContentApplicationModel.ApplicationLegal>} - Success response
     * @name getLegalInformation
     * @summary: Get legal information
     * @description: Use this API to get the legal information of an application, which includes Privacy Policy, Terms and Conditions, Shipping Policy and FAQs regarding the usage of the application.
     */
    getLegalInformation({}?: any): Promise<ContentApplicationModel.ApplicationLegal>;
    /**
     * @param {ContentApplicationValidator.GetNavigationsParam} arg - Arg object.
     * @returns {Promise<ContentApplicationModel.NavigationGetResponse>} -
     *   Success response
     * @name getNavigations
     * @summary: Get the navigation
     * @description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the links and sub-navigations.
     */
    getNavigations({ pageNo, pageSize }?: ContentApplicationValidator.GetNavigationsParam): Promise<ContentApplicationModel.NavigationGetResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Paginator<ContentApplicationModel.NavigationGetResponse>}
     * @summary: Get the navigation
     * @description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the links and sub-navigations.
     */
    getNavigationsPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator<ContentApplicationModel.NavigationGetResponse>;
    /**
     * @param {ContentApplicationValidator.GetPageParam} arg - Arg object.
     * @returns {Promise<ContentApplicationModel.PageSchema>} - Success response
     * @name getPage
     * @summary: Get a page
     * @description: Use this API to get the details of a page using its slug. Details include the title, seo, publish status, feature image, tags, meta, etc.
     */
    getPage({ slug, rootId }?: ContentApplicationValidator.GetPageParam): Promise<ContentApplicationModel.PageSchema>;
    /**
     * @param {ContentApplicationValidator.GetPagesParam} arg - Arg object.
     * @returns {Promise<ContentApplicationModel.PageGetResponse>} - Success response
     * @name getPages
     * @summary: Get all pages
     * @description: Use this API to get a list of pages.
     */
    getPages({ pageNo, pageSize }?: ContentApplicationValidator.GetPagesParam): Promise<ContentApplicationModel.PageGetResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Paginator<ContentApplicationModel.PageGetResponse>}
     * @summary: Get all pages
     * @description: Use this API to get a list of pages.
     */
    getPagesPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator<ContentApplicationModel.PageGetResponse>;
    /**
     * @param {ContentApplicationValidator.GetSEOConfigurationParam} arg - Arg object.
     * @returns {Promise<ContentApplicationModel.SeoComponent>} - Success response
     * @name getSEOConfiguration
     * @summary: Get the SEO of an application
     * @description: Use this API to get the SEO details of an application, which includes a robot.txt, meta-tags and sitemap.
     */
    getSEOConfiguration({}?: any): Promise<ContentApplicationModel.SeoComponent>;
    /**
     * @param {ContentApplicationValidator.GetSlideshowParam} arg - Arg object.
     * @returns {Promise<ContentApplicationModel.SlideshowSchema>} - Success response
     * @name getSlideshow
     * @summary: Get a slideshow
     * @description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to fetch a slideshow using its `slug`.
     */
    getSlideshow({ slug }?: ContentApplicationValidator.GetSlideshowParam): Promise<ContentApplicationModel.SlideshowSchema>;
    /**
     * @param {ContentApplicationValidator.GetSlideshowsParam} arg - Arg object.
     * @returns {Promise<ContentApplicationModel.SlideshowGetResponse>} - Success response
     * @name getSlideshows
     * @summary: Get the slideshows
     * @description: Use this API to get a list of slideshows along with their details.
     */
    getSlideshows({ pageNo, pageSize }?: ContentApplicationValidator.GetSlideshowsParam): Promise<ContentApplicationModel.SlideshowGetResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Paginator<ContentApplicationModel.SlideshowGetResponse>}
     * @summary: Get the slideshows
     * @description: Use this API to get a list of slideshows along with their details.
     */
    getSlideshowsPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator<ContentApplicationModel.SlideshowGetResponse>;
    /**
     * @param {ContentApplicationValidator.GetSupportInformationParam} arg - Arg object.
     * @returns {Promise<ContentApplicationModel.Support>} - Success response
     * @name getSupportInformation
     * @summary: Get the support information
     * @description: Use this API to get contact details for customer support including emails and phone numbers.
     */
    getSupportInformation({}?: any): Promise<ContentApplicationModel.Support>;
    /**
     * @param {ContentApplicationValidator.GetTagsParam} arg - Arg object.
     * @returns {Promise<ContentApplicationModel.TagsSchema>} - Success response
     * @name getTags
     * @summary: Get the tags associated with an application
     * @description: Use this API to get all the CSS and JS injected in the application in the form of tags.
     */
    getTags({}?: any): Promise<ContentApplicationModel.TagsSchema>;
}
import ContentApplicationModel = require("./ContentApplicationModel");
import ContentApplicationValidator = require("./ContentApplicationValidator");
import Paginator = require("../../common/Paginator");
