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
     * @param {Object} arg - Arg object.
     * @returns {Promise<AnnouncementsResponseSchema>} - Success response
     * @summary: Get live announcements
     * @description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to retrieve live announcements. Get announcements on individual pages or for all pages.
     */
    getAnnouncements({}?: any): Promise<AnnouncementsResponseSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a blog. You can get slug value from the endpoint
     *   /service/application/content/v1.0/blogs/.
     * @param {string} [arg.rootId] - ID given to the HTML element
     * @returns {Promise<BlogSchema>} - Success response
     * @summary: Get a blog
     * @description: Use this API to get the details of a blog using its slug. Details include the title, reading time, publish status, feature image, tags, author, etc.
     */
    getBlog({ slug, rootId }?: {
        slug: string;
        rootId?: string;
    }): Promise<BlogSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Promise<BlogGetResponse>} - Success response
     * @summary: Get a list of blogs
     * @description: Use this API to get all the blogs.
     */
    getBlogs({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<BlogGetResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: Get a list of blogs
     * @description: Use this API to get all the blogs.
     */
    getBlogsPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<DataLoadersSchema>} - Success response
     * @summary: Get the data loaders associated with an application
     * @description: Use this API to get all selected data loaders of the application in the form of tags.
     */
    getDataLoaders({}?: any): Promise<DataLoadersSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of an FAQ. You can get slug value from the endpoint
     *   /service/application/content/v1.0/faq.
     * @returns {Promise<FaqSchema>} - Success response
     * @summary: Get an FAQ
     * @description: Use this API to get a particular FAQ by its slug.
     */
    getFaqBySlug({ slug }?: {
        slug: string;
    }): Promise<FaqSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<GetFaqCategoriesSchema>} - Success response
     * @summary: Get a list of FAQ categories
     * @description: FAQs can be divided into categories. Use this API to get a list of FAQ categories.
     */
    getFaqCategories({}?: any): Promise<GetFaqCategoriesSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of an FAQ category. You can get slug value from the endpoint
     *   /service/application/content/v1.0/faq/categories.
     * @returns {Promise<GetFaqCategoryBySlugSchema>} - Success response
     * @summary: Get the FAQ category
     * @description: FAQs can be divided into categories. Use this API to get the category to which an FAQ belongs.
     */
    getFaqCategoryBySlug({ slug }?: {
        slug: string;
    }): Promise<GetFaqCategoryBySlugSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<FaqResponseSchema>} - Success response
     * @summary: Get a list of FAQs
     * @description: Use this API to get a list of frequently asked questions. Users will benefit from it when facing any issue with the website.
     */
    getFaqs({}?: any): Promise<FaqResponseSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of an FAQ category. You can get slug value from the endpoint
     *   /service/application/content/v1.0/faq/categories.
     * @returns {Promise<GetFaqSchema>} - Success response
     * @summary: Get FAQs using the slug of FAQ category
     * @description: FAQs can be divided into categories. Use this API to get all the FAQs belonging to a category by using the category slug.
     */
    getFaqsByCategorySlug({ slug }?: {
        slug: string;
    }): Promise<GetFaqSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<LandingPageSchema>} - Success response
     * @summary: Get the landing page
     * @description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to fetch the details of a landing page.
     */
    getLandingPage({}?: any): Promise<LandingPageSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<ApplicationLegal>} - Success response
     * @summary: Get legal information
     * @description: Use this API to get the legal information of an application, which includes Privacy Policy, Terms and Conditions, Shipping Policy and FAQs regarding the usage of the application.
     */
    getLegalInformation({}?: any): Promise<ApplicationLegal>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Promise<NavigationGetResponse>} - Success response
     * @summary: Get the navigation
     * @description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the links and sub-navigations.
     */
    getNavigations({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<NavigationGetResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: Get the navigation
     * @description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the links and sub-navigations.
     */
    getNavigationsPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a page. You can get slug value from the endpoint
     *   /service/application/content/v2.0/pages/.
     * @param {string} [arg.rootId] - ID given to the HTML element
     * @returns {Promise<PageSchema>} - Success response
     * @summary: Get a page
     * @description: Use this API to get the details of a page using its slug. Details include the title, seo, publish status, feature image, tags, meta, etc.
     */
    getPage({ slug, rootId }?: {
        slug: string;
        rootId?: string;
    }): Promise<PageSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Promise<PageGetResponse>} - Success response
     * @summary: Get all pages
     * @description: Use this API to get a list of pages.
     */
    getPages({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<PageGetResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: Get all pages
     * @description: Use this API to get a list of pages.
     */
    getPagesPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<SeoComponent>} - Success response
     * @summary: Get the SEO of an application
     * @description: Use this API to get the SEO details of an application, which includes a robot.txt, meta-tags and sitemap.
     */
    getSEOConfiguration({}?: any): Promise<SeoComponent>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a slideshow. You can get slug value from the endpoint
     *   /service/application/content/v1.0/slideshow/.
     * @returns {Promise<SlideshowSchema>} - Success response
     * @summary: Get a slideshow
     * @description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to fetch a slideshow using its `slug`.
     */
    getSlideshow({ slug }?: {
        slug: string;
    }): Promise<SlideshowSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Promise<SlideshowGetResponse>} - Success response
     * @summary: Get the slideshows
     * @description: Use this API to get a list of slideshows along with their details.
     */
    getSlideshows({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<SlideshowGetResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: Get the slideshows
     * @description: Use this API to get a list of slideshows along with their details.
     */
    getSlideshowsPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<Support>} - Success response
     * @summary: Get the support information
     * @description: Use this API to get contact details for customer support including emails and phone numbers.
     */
    getSupportInformation({}?: any): Promise<Support>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<TagsSchema>} - Success response
     * @summary: Get the tags associated with an application
     * @description: Use this API to get all the CSS and JS injected in the application in the form of tags.
     */
    getTags({}?: any): Promise<TagsSchema>;
}
import Paginator = require("../../common/Paginator");
