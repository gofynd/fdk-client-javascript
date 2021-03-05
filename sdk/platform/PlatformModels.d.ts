export class Lead {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary:  Gets the list of company level tickets and/or ticket filters depending on query params
      * @description:  Gets the list of company level tickets and/or ticket filters
      * @param  {string} companyId - Company ID for which the data will be returned
      * @param  {boolean} [items] - Decides that the reponse will contain the list of tickets
      * @param  {boolean} [filters] - Decides that the reponse will contain the ticket filters
      
      **/
    getTickets(companyId: string, items?: boolean, filters?: boolean): any;
    /**
      *
      * @summary:  Gets the list of Application level Tickets and/or ticket filters depending on query params
      * @description:  Gets the list of Application level Tickets and/or ticket filters
      * @param  {string} companyId - Company ID of the application
      * @param  {string} applicationId - Application ID for which the data will be returned
      * @param  {boolean} [items] - Decides that the reponse will contain the list of tickets
      * @param  {boolean} [filters] - Decides that the reponse will contain the ticket filters
      
      **/
    getTickets(companyId: string, applicationId: string, items?: boolean, filters?: boolean): any;
    /**
     *
     * @summary:  Creates a company level ticket
     * @description:  Creates a company level ticket
     * @param  {string} companyId - Company ID for which the data will be returned
     * @param  {AddTicketPayload} body
     **/
    createTicket(companyId: string, body: any): any;
    /**
      *
      * @summary:  Retreives ticket details of a company level ticket with ticket ID
      * @description:  Retreives ticket details of a company level ticket
      * @param  {string} companyId - Company ID for which the data will be returned
      * @param  {string} ticketId - Tiket ID of the ticket to be fetched
      
      **/
    getTicket(companyId: string, ticketId: string): any;
    /**
      *
      * @summary:  Retreives ticket details of a application level ticket
      * @description:  Retreives ticket details of a application level ticket with ticket ID
      * @param  {string} companyId - Company ID of the application
      * @param  {string} applicationId - Application ID for which the data will be returned
      * @param  {string} ticketId - Tiket ID of the ticket to be fetched
      
      **/
    getTicket(companyId: string, applicationId: string, ticketId: string): any;
    /**
     *
     * @summary:  Edits ticket details of a company level ticket
     * @description:  Edits ticket details of a company level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
     * @param  {string} companyId - Company ID for ticket
     * @param  {string} ticketId - Ticket ID of ticket to be edited
     * @param  {EditTicketPayload} body
     **/
    editTicket(companyId: string, ticketId: string, body: any): any;
    /**
     *
     * @summary:  Edits ticket details of a application level ticket
     * @description:  Edits ticket details of a application level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
     * @param  {string} companyId - Company ID of the application
     * @param  {string} applicationId - Application ID for ticket
     * @param  {string} ticketId - Ticket ID of ticket to be edited
     * @param  {EditTicketPayload} body
     **/
    editTicket(companyId: string, applicationId: string, ticketId: string, body: any): any;
    /**
     *
     * @summary:  Create history for specific company level ticket
     * @description:  Create history for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     * @param  {string} companyId - Company ID for ticket
     * @param  {string} ticketId - Ticket ID for which history is created
     * @param  {TicketHistoryPayload} body
     **/
    createHistory(companyId: string, ticketId: string, body: any): any;
    /**
     *
     * @summary:  Create history for specific application level ticket
     * @description:  Create history for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     * @param  {string} companyId - Company ID of the application
     * @param  {string} applicationId - Application ID for ticket
     * @param  {string} ticketId - Ticket ID for which history is created
     * @param  {TicketHistoryPayload} body
     **/
    createHistory(companyId: string, applicationId: string, ticketId: string, body: any): any;
    /**
      *
      * @summary:  Gets history list for specific company level ticket
      * @description:  Gets history list for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
      * @param  {string} companyId - Company ID for ticket
      * @param  {string} ticketId - Ticket ID for which history is to be fetched
      
      **/
    getTicketHistory(companyId: string, ticketId: string): any;
    /**
      *
      * @summary:  Gets history list for specific application level ticket
      * @description:  Gets history list for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
      * @param  {string} companyId - Company ID of application
      * @param  {string} applicationId - Application ID for ticket
      * @param  {string} ticketId - Ticket ID for which history is to be fetched
      
      **/
    getTicketHistory(companyId: string, applicationId: string, ticketId: string): any;
    /**
      *
      * @summary:  Get specific custom form using it's slug
      * @description:  Get specific custom form using it's slug, this is used to view the form.
      * @param  {string} companyId - Company ID of the application
      * @param  {string} applicationId - Application ID for the form
      * @param  {string} slug - Slug of form whose response is getting submitted
      
      **/
    getCustomForm(companyId: string, applicationId: string, slug: string): any;
    /**
     *
     * @summary:  Edit the given custom form
     * @description:  Edit the given custom form field such as adding or deleting input, assignee, title, decription, notification and polling information.
     * @param  {string} companyId - Company ID of the application
     * @param  {string} applicationId - Application ID for the form
     * @param  {string} slug - Slug of form whose response is getting submitted
     * @param  {EditCustomFormPayload} body
     **/
    editCustomForm(companyId: string, applicationId: string, slug: string, body: any): any;
    /**
      *
      * @summary:  Get list of custom form
      * @description:  Get list of custom form for given application
      * @param  {string} companyId - Company ID of the application
      * @param  {string} applicationId - Application ID for the form
      
      **/
    getCustomForms(companyId: string, applicationId: string): any;
    /**
     *
     * @summary:  Creates a new custom form
     * @description:  Creates a new custom form for given application
     * @param  {string} companyId - Company ID of the application
     * @param  {string} applicationId - Application ID for the form
     * @param  {CreateCustomFormPayload} body
     **/
    createCustomForm(companyId: string, applicationId: string, body: any): any;
    /**
      *
      * @summary:  Get Token to join a specific Video Room using it's unqiue name
      * @description:  Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
      * @param  {string} companyId - Company ID of the application
      * @param  {string} applicationId - Application ID for video room
      * @param  {string} uniqueName - Unique name of video room
      
      **/
    getTokenForVideoRoom(companyId: string, applicationId: string, uniqueName: string): any;
    /**
      *
      * @summary:  Get participants of a specific Video Room using it's unique name
      * @description:  Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
      * @param  {string} companyId - Company ID of the application
      * @param  {string} applicationId - Application ID for video room
      * @param  {string} uniqueName - Unique name of Video Room
      
      **/
    getVideoParticipants(companyId: string, applicationId: string, uniqueName: string): any;
    /**
     *
     * @summary:  Open a video room.
     * @description:  Open a video room.
     * @param  {string} companyId - Company ID of the application
     * @param  {string} applicationId - Application ID for video room
     * @param  {CreateVideoRoomPayload} body
     **/
    openVideoRoom(companyId: string, applicationId: string, body: any): any;
    /**
      *
      * @summary:  Close the video room and force all participants to leave.
      * @description:  Close the video room and force all participants to leave.
      * @param  {string} companyId - Company ID of the application
      * @param  {string} applicationId - Application ID for video room
      
      **/
    closeVideoRoom(companyId: string, applicationId: string): any;
}
export class Theme {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary:  Gets list of themes in theme library
      * @description:  Gets list of themes in theme library
      * @param  {string} companyId - Company ID
      * @param  {string} applicationId - Application ID
      * @param  {number} [pageSize] - Number of items to retrieve in each page. Default is 10.
      * @param  {number} [pageNo] - Page number. Default is 1.
      
      **/
    getThemeLibrary(companyId: string, applicationId: string, pageSize?: number, pageNo?: number): any;
    /**
     *
     * @summary:  Add theme to theme library
     * @description:  Add theme to theme library
     * @param  {string} companyId - Company ID
     * @param  {string} applicationId - Application ID
     * @param  {AddThemeRequestSchema} body
     **/
    addToThemeLibrary(companyId: string, applicationId: string, body: any): any;
    /**
     *
     * @summary:  Apply theme
     * @description:  Apply theme
     * @param  {string} companyId - Company ID
     * @param  {string} applicationId - Application ID
     * @param  {AddThemeRequestSchema} body
     **/
    applyTheme(companyId: string, applicationId: string, body: any): any;
    /**
      *
      * @summary:  Checks if theme is upgradable
      * @description:  Checks if theme is upgradable
      * @param  {string} companyId - Company ID
      * @param  {string} applicationId - Application ID
      * @param  {string} themeId - Theme ID
      
      **/
    isUpgradable(companyId: string, applicationId: string, themeId: string): any;
    /**
      *
      * @summary:  Upgrades theme
      * @description:  Upgrades theme
      * @param  {string} companyId - Company ID
      * @param  {string} applicationId - Application ID
      * @param  {string} themeId - Theme ID
      
      **/
    upgradeTheme(companyId: string, applicationId: string, themeId: string): any;
    /**
      *
      * @summary:  Gets public themes
      * @description:  Gets public themes
      * @param  {string} companyId - Company ID
      * @param  {string} applicationId - Application ID
      * @param  {number} [pageSize] - Number of items to retrieve in each page. Default is 10.
      * @param  {number} [pageNo] - Page number. Default is 1.
      
      **/
    getPublicThemes(companyId: string, applicationId: string, pageSize?: number, pageNo?: number): any;
    /**
     *
     * @summary:  Create new theme
     * @description:  Create new theme
     * @param  {string} companyId - Company ID
     * @param  {string} applicationId - Application ID
     * @param  {ThemesSchema} body
     **/
    createTheme(companyId: string, applicationId: string, body: any): any;
    /**
      *
      * @summary:  Get applied theme
      * @description:  Get applied theme
      * @param  {string} companyId - Company ID
      * @param  {string} applicationId - Application ID
      
      **/
    getAppliedTheme(companyId: string, applicationId: string): any;
    /**
      *
      * @summary:  Gets fonts
      * @description:  Gets fonts
      * @param  {string} companyId - Company ID
      * @param  {string} applicationId - Application ID
      
      **/
    getFonts(companyId: string, applicationId: string): any;
    /**
      *
      * @summary:  Gets theme by id
      * @description:  Gets theme by id
      * @param  {string} companyId - Company ID
      * @param  {string} applicationId - Application ID
      * @param  {string} themeId - Theme ID
      
      **/
    getThemeById(companyId: string, applicationId: string, themeId: string): any;
    /**
     *
     * @summary:  Update theme
     * @description:  Update theme
     * @param  {string} companyId - Company ID
     * @param  {string} applicationId - Application ID
     * @param  {string} themeId - Theme ID
     * @param  {ThemesSchema} body
     **/
    updateTheme(companyId: string, applicationId: string, themeId: string, body: any): any;
    /**
      *
      * @summary:  Delete theme
      * @description:  Delete theme
      * @param  {string} companyId - Company ID
      * @param  {string} applicationId - Application ID
      * @param  {string} themeId - Theme ID
      
      **/
    deleteTheme(companyId: string, applicationId: string, themeId: string): any;
    /**
      *
      * @summary:  Gets theme for preview
      * @description:  Gets theme for preview
      * @param  {string} companyId - Company ID
      * @param  {string} applicationId - Application ID
      * @param  {string} themeId - Theme ID
      
      **/
    getThemeForPreview(companyId: string, applicationId: string, themeId: string): any;
    /**
      *
      * @summary:  Publish theme
      * @description:  Publish theme
      * @param  {string} companyId - Company ID
      * @param  {string} applicationId - Application ID
      * @param  {string} themeId - Theme ID
      
      **/
    publishTheme(companyId: string, applicationId: string, themeId: string): any;
    /**
      *
      * @summary:  Unpublish theme
      * @description:  Unpublish theme
      * @param  {string} companyId - Company ID
      * @param  {string} applicationId - Application ID
      * @param  {string} themeId - Theme ID
      
      **/
    unpublishTheme(companyId: string, applicationId: string, themeId: string): any;
    /**
      *
      * @summary:  Archive theme
      * @description:  Archive theme
      * @param  {string} companyId - Company ID
      * @param  {string} applicationId - Application ID
      * @param  {string} themeId - Theme ID
      
      **/
    archiveTheme(companyId: string, applicationId: string, themeId: string): any;
    /**
      *
      * @summary:  Unarchive theme
      * @description:  Unarchive theme
      * @param  {string} companyId - Company ID
      * @param  {string} applicationId - Application ID
      * @param  {string} themeId - Theme ID
      
      **/
    unarchiveTheme(companyId: string, applicationId: string, themeId: string): any;
}
export class User {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary:  Gets list of customers
      * @description:  Used to get application customers list
      * @param  {string} companyId - Company ID
      * @param  {string} applicationId - Application ID
      * @param  {string} [q] - The search query. This can be a partial or complete name of a either a product, brand or category
      * @param  {number} [pageSize] - Number of items to retrieve in each page. Default is 10.
      * @param  {number} [pageNo] - Page number. Default is 1.
      
      **/
    getCustomers(companyId: string, applicationId: string, q?: string, pageSize?: number, pageNo?: number): any;
    /**
      *
      * @summary:  Search users
      * @description:  Search users
      * @param  {string} companyId - Company ID
      * @param  {string} applicationId - Application ID
      * @param  {string} [query] - The search query. This can be a partial or complete name of a either a product, brand or category
      
      **/
    searchUsers(companyId: string, applicationId: string, query?: string): any;
    /**
      *
      * @summary:  Get platform config
      * @description:  Used to get platform config
      * @param  {string} companyId - Company ID
      * @param  {string} applicationId - Application ID
      
      **/
    getPlatformConfig(companyId: string, applicationId: string): any;
    /**
     *
     * @summary:  Update platform config
     * @description:  Used to update platform config
     * @param  {string} companyId - Company ID
     * @param  {string} applicationId - Application ID
     * @param  {PlatformSchema} body
     **/
    updatePlatformConfig(companyId: string, applicationId: string, body: any): any;
}
export class Content {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary:  Get annoucements list
      * @description:  Get list of announcements
      * @param  {string} companyId - Company ID
      * @param  {string} applicationId - Application ID
      
      **/
    getAnnouncementsList(companyId: string, applicationId: string): any;
    /**
     *
     * @summary:  Create an annoucement
     * @description:  Create an announcement
     * @param  {string} companyId - Company ID
     * @param  {string} applicationId - Application ID
     * @param  {AdminAnnouncementSchema} body
     **/
    createAnnouncement(companyId: string, applicationId: string, body: any): any;
    /**
      *
      * @summary:  Get annoucement by id
      * @description:  Get announcement by id
      * @param  {string} companyId - Company ID
      * @param  {string} applicationId - Application ID
      * @param  {string} announcementId - Announcement ID
      
      **/
    getAnnouncementById(companyId: string, applicationId: string, announcementId: string): any;
    /**
     *
     * @summary:  Update an annoucement
     * @description:  Update an announcement
     * @param  {string} companyId - Company ID
     * @param  {string} applicationId - Application ID
     * @param  {string} announcementId - Announcement ID
     * @param  {AdminAnnouncementSchema} body
     **/
    updateAnnouncement(companyId: string, applicationId: string, announcementId: string, body: any): any;
    /**
     *
     * @summary:  Update schedule or published status of an annoucement
     * @description:  Update schedule or published status of an announcement
     * @param  {string} companyId - Company ID
     * @param  {string} applicationId - Application ID
     * @param  {string} announcementId - Announcement ID
     * @param  {ScheduleSchema} body
     **/
    updateAnnouncementSchedule(companyId: string, applicationId: string, announcementId: string, body: any): any;
    /**
      *
      * @summary:  Delete annoucement by id
      * @description:  Delete announcement by id
      * @param  {string} companyId - Company ID
      * @param  {string} applicationId - Application ID
      * @param  {string} announcementId - Announcement ID
      
      **/
    deleteAnnouncement(companyId: string, applicationId: string, announcementId: string): any;
    /**
      *
      * @summary:  Get FAQ categories list
      * @description:  Get list of FAQ categories
      * @param  {string} companyId - Company ID
      * @param  {string} applicationId - Application ID
      
      **/
    getFaqCategories(companyId: string, applicationId: string): any;
    /**
      *
      * @summary:  Get FAQ category by slug or id
      * @description:  Get FAQ category by slug or id
      * @param  {string} companyId - Company ID
      * @param  {string} applicationId - Application ID
      * @param  {string} idOrSlug - Slug or Id of FAQ Category
      
      **/
    getFaqCategoryBySlugOrId(companyId: string, applicationId: string, idOrSlug: string): any;
    /**
     *
     * @summary:  Creates a FAQ category
     * @description:  Add Faq Category
     * @param  {string} companyId - Company ID
     * @param  {string} applicationId - Application ID
     * @param  {CreateFaqCategoryRequestSchema} body
     **/
    createFaqCategory(companyId: string, applicationId: string, body: any): any;
    /**
     *
     * @summary:  Updates a FAQ category
     * @description:  Update Faq Category
     * @param  {string} companyId - Company ID
     * @param  {string} applicationId - Application ID
     * @param  {string} id - Faq category ID
     * @param  {UpdateFaqCategoryRequestSchema} body
     **/
    updateFaqCategory(companyId: string, applicationId: string, id: string, body: any): any;
    /**
      *
      * @summary:  Deletes a FAQ category
      * @description:  Delete Faq Category
      * @param  {string} companyId - Company ID
      * @param  {string} applicationId - Application ID
      * @param  {string} id - Faq category ID
      
      **/
    deleteFaqCategory(companyId: string, applicationId: string, id: string): any;
    /**
      *
      * @summary:  Get FAQs of a Faq Category id or slug
      * @description:  Get FAQs of a Faq Category `id` or `slug`
      * @param  {string} companyId - Company ID
      * @param  {string} applicationId - Application ID
      * @param  {string} idOrSlug - Faq category ID or slug
      
      **/
    getFaqsByCategoryIdOrSlug(companyId: string, applicationId: string, idOrSlug: string): any;
    /**
     *
     * @summary:  Creates FAQs for category whose `id` is specified
     * @description:  Creates FAQs for category whose `id` is specified
     * @param  {string} companyId - Company ID
     * @param  {string} applicationId - Application ID
     * @param  {string} categoryId - Faq category ID
     * @param  {CreateFaqSchema} body
     **/
    addFaqToFaqCategory(companyId: string, applicationId: string, categoryId: string, body: any): any;
    /**
     *
     * @summary:  Updates FAQ
     * @description:  Updates FAQ
     * @param  {string} companyId - Company ID
     * @param  {string} applicationId - Application ID
     * @param  {string} categoryId - Faq category ID
     * @param  {string} faqId - Faq ID
     * @param  {CreateFaqSchema} body
     **/
    updateFaq(companyId: string, applicationId: string, categoryId: string, faqId: string, body: any): any;
    /**
      *
      * @summary:  Delete FAQ
      * @description:  Delete FAQ
      * @param  {string} companyId - Company ID
      * @param  {string} applicationId - Application ID
      * @param  {string} categoryId - Faq category ID
      * @param  {string} faqId - Faq ID
      
      **/
    deleteFaq(companyId: string, applicationId: string, categoryId: string, faqId: string): any;
    /**
      *
      * @summary:  Get legal information
      * @description:  Get legal information of application, which includes policy, Terms and Conditions, and FAQ information of application.
      * @param  {string} companyId - Company ID
      * @param  {string} applicationId - Application ID
      
      **/
    getLegalInformation(companyId: string, applicationId: string): any;
    /**
     *
     * @summary:  Save legal information
     * @description:  Save legal information of application, which includes Policy, Terms and Conditions, and FAQ information of application.
     * @param  {string} companyId - Company ID
     * @param  {string} applicationId - Application ID
     * @param  {ApplicationLegal} body
     **/
    updateLegalInformation(companyId: string, applicationId: string, body: any): any;
    /**
      *
      * @summary:  Get seo of application
      * @description:  Get seo of application
      * @param  {string} companyId - Company ID
      * @param  {string} applicationId - Application ID
      
      **/
    getSeoConfiguration(companyId: string, applicationId: string): any;
    /**
     *
     * @summary:  Update seo of application
     * @description:  Update seo of application
     * @param  {string} companyId - Company ID
     * @param  {string} applicationId - Application ID
     * @param  {Seo} body
     **/
    updateSeoConfiguration(companyId: string, applicationId: string, body: any): any;
    /**
      *
      * @summary:  Get support information
      * @description:  Get contact details for customer support. Including emails and phone numbers
      * @param  {string} companyId - Company ID
      * @param  {string} applicationId - Application ID
      
      **/
    getSupportInformation(companyId: string, applicationId: string): any;
    /**
     *
     * @summary:  Update support data of application
     * @description:  Update support data of application
     * @param  {string} companyId - Company ID
     * @param  {string} applicationId - Application ID
     * @param  {Support} body
     **/
    updateSupportInformation(companyId: string, applicationId: string, body: any): any;
    /**
     *
     * @summary:  Creates Tag
     * @description:  Create tags
     * @param  {string} companyId - Company ID
     * @param  {string} applicationId - Application ID
     * @param  {CreateTagRequestSchema} body
     **/
    createTag(companyId: string, applicationId: string, body: any): any;
    /**
     *
     * @summary:  Updates a Tag
     * @description:  Update tag
     * @param  {string} companyId - Company ID
     * @param  {string} applicationId - Application ID
     * @param  {CreateTagRequestSchema} body
     **/
    updateTag(companyId: string, applicationId: string, body: any): any;
    /**
      *
      * @summary:  Delete tags for application
      * @description:  Delete tags for application
      * @param  {string} companyId - Company ID
      * @param  {string} applicationId - Application ID
      
      **/
    deleteAllTags(companyId: string, applicationId: string): any;
    /**
      *
      * @summary:  Get tags for application
      * @description:  Get tags for application
      * @param  {string} companyId - Company ID
      * @param  {string} applicationId - Application ID
      
      **/
    getTags(companyId: string, applicationId: string): any;
    /**
     *
     * @summary:  Adds a Tag
     * @description:  Add tag
     * @param  {string} companyId - Company ID
     * @param  {string} applicationId - Application ID
     * @param  {CreateTagRequestSchema} body
     **/
    addTag(companyId: string, applicationId: string, body: any): any;
    /**
     *
     * @summary:  Removes a Tag
     * @description:  Remove a particular tag
     * @param  {string} companyId - Company ID
     * @param  {string} applicationId - Application ID
     * @param  {RemoveHandpickedSchema} body
     **/
    removeTag(companyId: string, applicationId: string, body: any): any;
    /**
     *
     * @summary:  Edits a Tag by Id
     * @description:  Edits a particular tag
     * @param  {string} companyId - Company ID
     * @param  {string} applicationId - Application ID
     * @param  {string} tagId - Tag ID
     * @param  {UpdateHandpickedSchema} body
     **/
    editTag(companyId: string, applicationId: string, tagId: string, body: any): any;
}
export class CompanyProfile {
    constructor(_conf: any);
    _conf: any;
    /**
     *
     * @summary:  Create a Seller account.
     * @description:  This API allows to create a seller account on Fynd Platform.
     * @param  {CompanyStoreSerializerRequest} body
     **/
    registerCompany(body: any): any;
    /**
      *
      * @summary:  Get company profile
      * @description:  This API allows to view the company profile of the seller account.
      * @param  {string} companyId - A `company_id` is a unique identifier for a particular seller account.
      
      **/
    cbsOnboardGet(companyId: string): any;
    /**
     *
     * @summary:  Edit company profile
     * @description:  This API allows to edit the company profile of the seller account.
     * @param  {string} companyId - A `company_id` is a unique identifier for a particular seller account.
     * @param  {CompanyStoreSerializerRequest} body
     **/
    cbsOnboardEdit(companyId: string, body: any): any;
    /**
      *
      * @summary:  Get list of companies
      * @description:  This API allows to view all the companies created by the seller.
      * @param  {string} [sortBy] - Helps to sort the company list on the basis of last accessed, ascending or descending order.
      * @param  {string} [q] - Query that is to be searched.
      * @param  {string} [stage] - to filter companies on basis of verified or unverified companies.
      * @param  {number} [pageNo] - The page number to navigate through the given set of results
      * @param  {number} [pageSize] - Number of items to retrieve in each page. Default is 10.
      
      **/
    companyList(sortBy?: string, q?: string, stage?: string, pageNo?: number, pageSize?: number): any;
    /**
      *
      * @summary:  Get company metrics
      * @description:  This API allows to view the company metrics, i.e. the status of its brand and stores. Also its allows to view the number of products, company documents & store documents which are verified and unverified.
      * @param  {string} companyId - A `company_id` is a unique identifier for a particular seller account.
      
      **/
    getCompanyMetrics(companyId: string): any;
    /**
      *
      * @summary:  Get data associated to countries
      * @description:  This API gets meta associated to countries for eg valid documents.
      * @param  {string} [type] - The type of entity. This can be company or store. By default it is company.
      * @param  {string} [stage] - Ths stage from where the API is called. This can be profile & onboarding. By default it is profile.
      
      **/
    getCountries(type?: string, stage?: string): any;
    /**
     *
     * @summary:  Verify GST/PAN against legal name.
     * @description:  This API is used to verify legal name againt GST/PAN number.
     * @param  {GstPanResponseSerializer} body
     **/
    verifyGstPan(body: any): any;
    /**
      *
      * @summary:  Get a single brand.
      * @description:  This API helps to get data associated to a particular brand.
      * @param  {string} brandId - Id of the brand to be viewed.
      
      **/
    getBrand(brandId: string): any;
    /**
     *
     * @summary:  Edit a brand.
     * @description:  This API allows to edit meta of a brand.
     * @param  {string} brandId - Id of the brand to be viewed.
     * @param  {CreateUpdateBrandRequestSerializer} body
     **/
    editBrand(brandId: string, body: any): any;
    /**
     *
     * @summary:  Create a Brand.
     * @description:  This API allows to create a brand associated to a company.
     * @param  {CreateUpdateBrandRequestSerializer} body
     **/
    createBrand(body: any): any;
    /**
      *
      * @summary:  Get brands associated to a company
      * @description:  This API helps to get view brands associated to a particular company.
      * @param  {string} companyId - Id of the company.
      
      **/
    getCompanyBrands(companyId: string): any;
    /**
     *
     * @summary:  Create a company brand mapping.
     * @description:  This API allows to create a company brand mapping, for a already existing brand in the system.
     * @param  {string} companyId - Id of the company inside which the brand is to be mapped.
     * @param  {CompanyBrandPostRequestSerializer} body
     **/
    createCompanyBrand(companyId: string, body: any): any;
    /**
      *
      * @summary:  Get list of locations
      * @description:  This API allows to view all the locations asscoiated to a company.
      * @param  {string} companyId - Id of the company whose locations are to fetched
      * @param  {string} [storeType] - Helps to sort the location list on the basis of location type.
      * @param  {string} [q] - Query that is to be searched.
      * @param  {string} [stage] - to filter companies on basis of verified or unverified companies.
      * @param  {number} [pageNo] - The page number to navigate through the given set of results
      * @param  {number} [pageSize] - Number of items to retrieve in each page. Default is 10.
      
      **/
    locationList(companyId: string, storeType?: string, q?: string, stage?: string, pageNo?: number, pageSize?: number): any;
    /**
     *
     * @summary:  Create a location asscoiated to a company.
     * @description:  This API allows to create a location associated to a company.
     * @param  {string} companyId - Id of the company inside which the location is to be created.
     * @param  {LocationSerializer} body
     **/
    createLocation(companyId: string, body: any): any;
    /**
      *
      * @summary:  Get a single location.
      * @description:  This API helps to get data associated to a particular location.
      * @param  {string} companyId - Id of the company inside which the location lies.
      * @param  {string} locationId - Id of the location which you want to view.
      
      **/
    getSingleLocation(companyId: string, locationId: string): any;
    /**
     *
     * @summary:  Edit a location asscoiated to a company.
     * @description:  This API allows to edit a location associated to a company.
     * @param  {string} companyId - Id of the company inside which the location is to be created.
     * @param  {string} locationId - Id of the location which you want to edit.
     * @param  {LocationSerializer} body
     **/
    editLocation(companyId: string, locationId: string, body: any): any;
    /**
      *
      * @summary:  Get constant data asccoiated to company, brand, locations.
      * @description:  This API gets constant data asccoiated to company, brand, locations.
      * @param  {string} [choiceType] - Lists all the constants associated to the passed choice types. Acceptable choice types for the API are as follows, business_type, market_channels, company_type, address_type, brand_tier, store_type, account_type, weekday, admin_stage, stage, verification_stage, integration_type, identifier_type, item_dimension_measure_unit, item_weight_measure_unit, colors, channels, designations, manufacturer, variants, item_types, manufacturing_time_unit.
      
      **/
    getChoices(choiceType?: string): any;
}
export class Inventory {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary:  Get All Job Configs
      * @description:  REST Endpoint that returns all job configs
      * @param  {number} [pageNo] - Page Number
      * @param  {number} [pageSize] - Page Size
      
      **/
    getJobs(pageNo?: number, pageSize?: number): any;
    /**
     *
     * @summary:  Updates An Existing Job Config
     * @description:  REST Endpoint that updates a job config
     * @param  {string} [xUserData] -
     * @param  {JobConfigDTO} body
     **/
    update(body: any, xUserData?: string): any;
    /**
     *
     * @summary:  Creates A New Job Config
     * @description:  REST Endpoint that creates a new job config
     * @param  {string} [xUserData] -
     * @param  {JobConfigDTO} body
     **/
    create(body: any, xUserData?: string): any;
    /**
      *
      * @summary:  Get Job Configs Defaults
      * @description:  REST Endpoint that returns default fields job configs by company And integration
      
      **/
    getJobConfigDefaults(): any;
    /**
      *
      * @summary:  Get Job Configs For A Company
      * @description:  REST Endpoint that returns all job configs for a company
      * @param  {number} companyId - Company Id
      * @param  {number} [pageNo] - Page Number
      * @param  {number} [pageSize] - Page Size
      
      **/
    getJobsByCompany(companyId: number, pageNo?: number, pageSize?: number): any;
    /**
      *
      * @summary:  Get Job Configs By Company And Integration
      * @description:  REST Endpoint that returns all job configs by company And integration
      * @param  {number} companyId - Company Id
      * @param  {string} integrationId - Integration Id
      * @param  {number} [pageNo] - Page Number
      * @param  {number} [pageSize] - Page Size
      
      **/
    getJobByCompanyAndIntegration(companyId: number, integrationId: string, pageNo?: number, pageSize?: number): any;
    /**
      *
      * @summary:  Get Job Config By Code
      * @description:  REST Endpoint that returns job config by code
      * @param  {string} code - Job Code
      
      **/
    getJobByCode(code: string): any;
    /**
      *
      * @summary:  Get Job Codes By Company And Integration
      * @description:  REST Endpoint that returns all job codes by company And integration
      * @param  {number} companyId - Company Id
      * @param  {string} integrationId - Integration Id
      * @param  {number} [pageNo] - Page Number
      * @param  {number} [pageSize] - Page Size
      
      **/
    getJobCodesByCompanyAndIntegration(companyId: number, integrationId: string, pageNo?: number, pageSize?: number): any;
}
