export class Lead {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * Summary: Gets the list of company level tickets and/or ticket filters depending on query params
      * Description:  Gets the list of company level tickets and/or ticket filters
       * @param { string } companyId - Company ID for which the data will be returned
       * @param { boolean } [items] - Decides that the reponse will contain the list of tickets
       * @param { boolean } [filters] - Decides that the reponse will contain the ticket filters
       
      **/
    getTickets(companyId?: string, items?: boolean, filters?: boolean): any;
    /**
      *
      * Summary: Gets the list of Application level Tickets and/or ticket filters depending on query params
      * Description:  Gets the list of Application level Tickets and/or ticket filters
       * @param { string } companyId - Company ID of the application
       * @param { string } applicationId - Application ID for which the data will be returned
       * @param { boolean } [items] - Decides that the reponse will contain the list of tickets
       * @param { boolean } [filters] - Decides that the reponse will contain the ticket filters
       
      **/
    getTickets(companyId?: string, applicationId?: string, items?: boolean, filters?: boolean): any;
    /**
      *
      * Summary: Creates a company level ticket
      * Description:  Creates a company level ticket
       * @param { string } companyId - Company ID for which the data will be returned
       body: AddTicketPayload,
      **/
    createTicket(companyId: string, body: any): any;
    /**
      *
      * Summary: Retreives ticket details of a company level ticket with ticket ID
      * Description:  Retreives ticket details of a company level ticket
       * @param { string } companyId - Company ID for which the data will be returned
       * @param { string } ticketId - Tiket ID of the ticket to be fetched
       
      **/
    getTicket(companyId?: string, ticketId?: string): any;
    /**
      *
      * Summary: Retreives ticket details of a application level ticket
      * Description:  Retreives ticket details of a application level ticket with ticket ID
       * @param { string } companyId - Company ID of the application
       * @param { string } applicationId - Application ID for which the data will be returned
       * @param { string } ticketId - Tiket ID of the ticket to be fetched
       
      **/
    getTicket(companyId?: string, applicationId?: string, ticketId?: string): any;
    /**
      *
      * Summary: Edits ticket details of a company level ticket
      * Description:  Edits ticket details of a company level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
       * @param { string } companyId - Company ID for ticket
       * @param { string } ticketId - Ticket ID of ticket to be edited
       body: EditTicketPayload,
      **/
    editTicket(companyId: string, ticketId: string, body: any): any;
    /**
      *
      * Summary: Edits ticket details of a application level ticket
      * Description:  Edits ticket details of a application level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
       * @param { string } companyId - Company ID of the application
       * @param { string } applicationId - Application ID for ticket
       * @param { string } ticketId - Ticket ID of ticket to be edited
       body: EditTicketPayload,
      **/
    editTicket(companyId: string, applicationId: string, ticketId: string, body: any): any;
    /**
      *
      * Summary: Create history for specific company level ticket
      * Description:  Create history for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
       * @param { string } companyId - Company ID for ticket
       * @param { string } ticketId - Ticket ID for which history is created
       body: TicketHistoryPayload,
      **/
    createHistory(companyId: string, ticketId: string, body: any): any;
    /**
      *
      * Summary: Create history for specific application level ticket
      * Description:  Create history for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
       * @param { string } companyId - Company ID of the application
       * @param { string } applicationId - Application ID for ticket
       * @param { string } ticketId - Ticket ID for which history is created
       body: TicketHistoryPayload,
      **/
    createHistory(companyId: string, applicationId: string, ticketId: string, body: any): any;
    /**
      *
      * Summary: Gets history list for specific company level ticket
      * Description:  Gets history list for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
       * @param { string } companyId - Company ID for ticket
       * @param { string } ticketId - Ticket ID for which history is to be fetched
       
      **/
    getTicketHistory(companyId?: string, ticketId?: string): any;
    /**
      *
      * Summary: Gets history list for specific application level ticket
      * Description:  Gets history list for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
       * @param { string } companyId - Company ID of application
       * @param { string } applicationId - Application ID for ticket
       * @param { string } ticketId - Ticket ID for which history is to be fetched
       
      **/
    getTicketHistory(companyId?: string, applicationId?: string, ticketId?: string): any;
    /**
      *
      * Summary: Get specific custom form using it's slug
      * Description:  Get specific custom form using it's slug, this is used to view the form.
       * @param { string } companyId - Company ID of the application
       * @param { string } applicationId - Application ID for the form
       * @param { string } slug - Slug of form whose response is getting submitted
       
      **/
    getCustomForm(companyId?: string, applicationId?: string, slug?: string): any;
    /**
      *
      * Summary: Edit the given custom form
      * Description:  Edit the given custom form field such as adding or deleting input, assignee, title, decription, notification and polling information.
       * @param { string } companyId - Company ID of the application
       * @param { string } applicationId - Application ID for the form
       * @param { string } slug - Slug of form whose response is getting submitted
       body: EditCustomFormPayload,
      **/
    editCustomForm(companyId: string, applicationId: string, slug: string, body: any): any;
    /**
      *
      * Summary: Get list of custom form
      * Description:  Get list of custom form for given application
       * @param { string } companyId - Company ID of the application
       * @param { string } applicationId - Application ID for the form
       
      **/
    getCustomForms(companyId?: string, applicationId?: string): any;
    /**
      *
      * Summary: Creates a new custom form
      * Description:  Creates a new custom form for given application
       * @param { string } companyId - Company ID of the application
       * @param { string } applicationId - Application ID for the form
       body: CreateCustomFormPayload,
      **/
    createCustomForm(companyId: string, applicationId: string, body: any): any;
    /**
      *
      * Summary: Get Token to join a specific Video Room using it's unqiue name
      * Description:  Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
       * @param { string } companyId - Company ID of the application
       * @param { string } applicationId - Application ID for video room
       * @param { string } uniqueName - Unique name of video room
       
      **/
    getTokenForVideoRoom(companyId?: string, applicationId?: string, uniqueName?: string): any;
    /**
      *
      * Summary: Get participants of a specific Video Room using it's unique name
      * Description:  Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
       * @param { string } companyId - Company ID of the application
       * @param { string } applicationId - Application ID for video room
       * @param { string } uniqueName - Unique name of Video Room
       
      **/
    getVideoParticipants(companyId?: string, applicationId?: string, uniqueName?: string): any;
    /**
      *
      * Summary: Get video room id
      * Description:  Get video room id.
       * @param { string } companyId - Company ID of the application
       * @param { string } applicationId - Application ID for video room
       body: CreateVideoRoomPayload,
      **/
    createVideoRoom(companyId: string, applicationId: string, body: any): any;
}
export class Theme {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * Summary: Gets list of themes in theme library
      * Description:  Gets list of themes in theme library
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       * @param { number } [pageSize] - Number of items to retrieve in each page. Default is 10.
       * @param { number } [pageNo] - Page number. Default is 1.
       
      **/
    getThemeLibrary(companyId?: string, applicationId?: string, pageSize?: number, pageNo?: number): any;
    /**
      *
      * Summary: Add theme to theme library
      * Description:  Add theme to theme library
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       body: AddThemeRequestSchema,
      **/
    addToThemeLibrary(companyId: string, applicationId: string, body: any): any;
    /**
      *
      * Summary: Apply theme
      * Description:  Apply theme
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       body: AddThemeRequestSchema,
      **/
    applyTheme(companyId: string, applicationId: string, body: any): any;
    /**
      *
      * Summary: Checks if theme is upgradable
      * Description:  Checks if theme is upgradable
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       * @param { string } themeId - Theme ID
       
      **/
    isUpgradable(companyId?: string, applicationId?: string, themeId?: string): any;
    /**
      *
      * Summary: Upgrades theme
      * Description:  Upgrades theme
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       * @param { string } themeId - Theme ID
       
      **/
    upgradeTheme(companyId?: string, applicationId?: string, themeId?: string): any;
    /**
      *
      * Summary: Gets public themes
      * Description:  Gets public themes
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       * @param { number } [pageSize] - Number of items to retrieve in each page. Default is 10.
       * @param { number } [pageNo] - Page number. Default is 1.
       
      **/
    getPublicThemes(companyId?: string, applicationId?: string, pageSize?: number, pageNo?: number): any;
    /**
      *
      * Summary: Create new theme
      * Description:  Create new theme
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       body: ThemesSchema,
      **/
    createTheme(companyId: string, applicationId: string, body: any): any;
    /**
      *
      * Summary: Get applied theme
      * Description:  Get applied theme
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       
      **/
    getAppliedTheme(companyId?: string, applicationId?: string): any;
    /**
      *
      * Summary: Gets fonts
      * Description:  Gets fonts
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       
      **/
    getFonts(companyId?: string, applicationId?: string): any;
    /**
      *
      * Summary: Gets theme by id
      * Description:  Gets theme by id
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       * @param { string } themeId - Theme ID
       
      **/
    getThemeById(companyId?: string, applicationId?: string, themeId?: string): any;
    /**
      *
      * Summary: Update theme
      * Description:  Update theme
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       * @param { string } themeId - Theme ID
       body: ThemesSchema,
      **/
    updateTheme(companyId: string, applicationId: string, themeId: string, body: any): any;
    /**
      *
      * Summary: Delete theme
      * Description:  Delete theme
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       * @param { string } themeId - Theme ID
       
      **/
    deleteTheme(companyId?: string, applicationId?: string, themeId?: string): any;
    /**
      *
      * Summary: Gets theme for preview
      * Description:  Gets theme for preview
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       * @param { string } themeId - Theme ID
       
      **/
    getThemeForPreview(companyId?: string, applicationId?: string, themeId?: string): any;
    /**
      *
      * Summary: Publish theme
      * Description:  Publish theme
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       * @param { string } themeId - Theme ID
       
      **/
    publishTheme(companyId?: string, applicationId?: string, themeId?: string): any;
    /**
      *
      * Summary: Unpublish theme
      * Description:  Unpublish theme
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       * @param { string } themeId - Theme ID
       
      **/
    unpublishTheme(companyId?: string, applicationId?: string, themeId?: string): any;
    /**
      *
      * Summary: Archive theme
      * Description:  Archive theme
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       * @param { string } themeId - Theme ID
       
      **/
    archiveTheme(companyId?: string, applicationId?: string, themeId?: string): any;
    /**
      *
      * Summary: Unarchive theme
      * Description:  Unarchive theme
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       * @param { string } themeId - Theme ID
       
      **/
    unarchiveTheme(companyId?: string, applicationId?: string, themeId?: string): any;
}
export class Content {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * Summary: Get annoucements list
      * Description:  Get list of announcements
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       
      **/
    getAnnouncementsList(companyId?: string, applicationId?: string): any;
    /**
      *
      * Summary: Create an annoucement
      * Description:  Create an announcement
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       body: AdminAnnouncementSchema,
      **/
    createAnnouncement(companyId: string, applicationId: string, body: any): any;
    /**
      *
      * Summary: Get annoucement by id
      * Description:  Get announcement by id
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       * @param { string } announcementId - Announcement ID
       
      **/
    getAnnouncementById(companyId?: string, applicationId?: string, announcementId?: string): any;
    /**
      *
      * Summary: Update an annoucement
      * Description:  Update an announcement
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       * @param { string } announcementId - Announcement ID
       body: AdminAnnouncementSchema,
      **/
    updateAnnouncement(companyId: string, applicationId: string, announcementId: string, body: any): any;
    /**
      *
      * Summary: Update schedule or published status of an annoucement
      * Description:  Update schedule or published status of an announcement
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       * @param { string } announcementId - Announcement ID
       body: ScheduleSchema,
      **/
    updateAnnouncementSchedule(companyId: string, applicationId: string, announcementId: string, body: any): any;
    /**
      *
      * Summary: Delete annoucement by id
      * Description:  Delete announcement by id
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       * @param { string } announcementId - Announcement ID
       
      **/
    deleteAnnouncement(companyId?: string, applicationId?: string, announcementId?: string): any;
    /**
      *
      * Summary: Get FAQ categories list
      * Description:  Get list of FAQ categories
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       
      **/
    getFaqCategories(companyId?: string, applicationId?: string): any;
    /**
      *
      * Summary: Get FAQ category by slug or id
      * Description:  Get FAQ category by slug or id
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       * @param { string } idOrSlug - Slug or Id of FAQ Category
       
      **/
    getFaqCategoryBySlugOrId(companyId?: string, applicationId?: string, idOrSlug?: string): any;
    /**
      *
      * Summary: Creates a FAQ category
      * Description:  Add Faq Category
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       body: CreateFaqCategoryRequestSchema,
      **/
    createFaqCategory(companyId: string, applicationId: string, body: any): any;
    /**
      *
      * Summary: Updates a FAQ category
      * Description:  Update Faq Category
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       * @param { string } id - Faq category ID
       body: UpdateFaqCategoryRequestSchema,
      **/
    updateFaqCategory(companyId: string, applicationId: string, id: string, body: any): any;
    /**
      *
      * Summary: Deletes a FAQ category
      * Description:  Delete Faq Category
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       * @param { string } id - Faq category ID
       
      **/
    deleteFaqCategory(companyId?: string, applicationId?: string, id?: string): any;
    /**
      *
      * Summary: Get FAQs of a Faq Category id or slug
      * Description:  Get FAQs of a Faq Category `id` or `slug`
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       * @param { string } idOrSlug - Faq category ID or slug
       
      **/
    getFaqsByCategoryIdOrSlug(companyId?: string, applicationId?: string, idOrSlug?: string): any;
    /**
      *
      * Summary: Creates FAQs for category whose `id` is specified
      * Description:  Creates FAQs for category whose `id` is specified
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       * @param { string } categoryId - Faq category ID
       body: CreateFaqSchema,
      **/
    addFaqToFaqCategory(companyId: string, applicationId: string, categoryId: string, body: any): any;
    /**
      *
      * Summary: Updates FAQ
      * Description:  Updates FAQ
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       * @param { string } categoryId - Faq category ID
       * @param { string } faqId - Faq ID
       body: CreateFaqSchema,
      **/
    updateFaq(companyId: string, applicationId: string, categoryId: string, faqId: string, body: any): any;
    /**
      *
      * Summary: Delete FAQ
      * Description:  Delete FAQ
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       * @param { string } categoryId - Faq category ID
       * @param { string } faqId - Faq ID
       
      **/
    deleteFaq(companyId?: string, applicationId?: string, categoryId?: string, faqId?: string): any;
    /**
      *
      * Summary: Get legal information
      * Description:  Get legal information of application, which includes policy, Terms and Conditions, and FAQ information of application.
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       
      **/
    getLegalInformation(companyId?: string, applicationId?: string): any;
    /**
      *
      * Summary: Save legal information
      * Description:  Save legal information of application, which includes Policy, Terms and Conditions, and FAQ information of application.
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       body: ApplicationLegal,
      **/
    updateLegalInformation(companyId: string, applicationId: string, body: any): any;
    /**
      *
      * Summary: Get seo of application
      * Description:  Get seo of application
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       
      **/
    getSeoConfiguration(companyId?: string, applicationId?: string): any;
    /**
      *
      * Summary: Update seo of application
      * Description:  Update seo of application
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       body: Seo,
      **/
    updateSeoConfiguration(companyId: string, applicationId: string, body: any): any;
    /**
      *
      * Summary: Get support information
      * Description:  Get contact details for customer support. Including emails and phone numbers
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       
      **/
    getSupportInformation(companyId?: string, applicationId?: string): any;
    /**
      *
      * Summary: Update support data of application
      * Description:  Update support data of application
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       body: Support,
      **/
    updateSupportInformation(companyId: string, applicationId: string, body: any): any;
    /**
      *
      * Summary: Creates Tag
      * Description:  Create tags
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       body: CreateTagRequestSchema,
      **/
    createTag(companyId: string, applicationId: string, body: any): any;
    /**
      *
      * Summary: Updates a Tag
      * Description:  Update tag
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       body: CreateTagRequestSchema,
      **/
    updateTag(companyId: string, applicationId: string, body: any): any;
    /**
      *
      * Summary: Delete tags for application
      * Description:  Delete tags for application
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       
      **/
    deleteAllTags(companyId?: string, applicationId?: string): any;
    /**
      *
      * Summary: Get tags for application
      * Description:  Get tags for application
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       
      **/
    getTags(companyId?: string, applicationId?: string): any;
    /**
      *
      * Summary: Adds a Tag
      * Description:  Add tag
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       body: CreateTagRequestSchema,
      **/
    addTag(companyId: string, applicationId: string, body: any): any;
    /**
      *
      * Summary: Removes a Tag
      * Description:  Remove a particular tag
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       body: RemoveHandpickedSchema,
      **/
    removeTag(companyId: string, applicationId: string, body: any): any;
    /**
      *
      * Summary: Edits a Tag by Id
      * Description:  Edits a particular tag
       * @param { string } companyId - Company ID
       * @param { string } applicationId - Application ID
       * @param { string } tagId - Tag ID
       body: UpdateHandpickedSchema,
      **/
    editTag(companyId: string, applicationId: string, tagId: string, body: any): any;
}
