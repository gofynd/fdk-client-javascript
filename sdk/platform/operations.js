const APIClient = require("./api_client");
const Configuration = require("./configuration");

const {} = require("./schema");

class Lead {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * Summary: Gets the list of company level tickets and/or ticket filters depending on query params
    * Description:  Gets the list of company level tickets and/or ticket filters
     * @param { string } companyId - Company ID for which the data will be returned
     * @param { boolean } [items] - Decides that the reponse will contain the list of tickets
     * @param { boolean } [filters] - Decides that the reponse will contain the ticket filters
     
    **/
  getTickets(companyId = required("companyId"), items, filters) {
    const query = {};
    query["items"] = items;
    query["filters"] = filters;

    return APIClient.execute(
      this._conf,
      "get",
      `service/platform/lead/v1.0/company/${companyId}/ticket`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Creates a company level ticket
    * Description:  Creates a company level ticket
     * @param { string } companyId - Company ID for which the data will be returned
     body: AddTicketPayload,
    **/
  createTicket(companyId = required("companyId"), body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `service/platform/lead/v1.0/company/${companyId}/ticket`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Gets the list of Application level Tickets and/or ticket filters depending on query params
    * Description:  Gets the list of Application level Tickets and/or ticket filters
     * @param { string } companyId - Company ID of the application
     * @param { string } applicationId - Application ID for which the data will be returned
     * @param { boolean } [items] - Decides that the reponse will contain the list of tickets
     * @param { boolean } [filters] - Decides that the reponse will contain the ticket filters
     
    **/
  getTickets(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    items,
    filters
  ) {
    const query = {};
    query["items"] = items;
    query["filters"] = filters;

    return APIClient.execute(
      this._conf,
      "get",
      `service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/ticket`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Retreives ticket details of a company level ticket with ticket ID
    * Description:  Retreives ticket details of a company level ticket
     * @param { string } companyId - Company ID for which the data will be returned
     * @param { string } ticketId - Tiket ID of the ticket to be fetched
     
    **/
  getTicket(
    companyId = required("companyId"),
    ticketId = required("ticketId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `service/platform/lead/v1.0/company/${companyId}/ticket/${ticketId}`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Edits ticket details of a company level ticket
    * Description:  Edits ticket details of a company level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
     * @param { string } companyId - Company ID for ticket
     * @param { string } ticketId - Ticket ID of ticket to be edited
     body: EditTicketPayload,
    **/
  editTicket(
    companyId = required("companyId"),
    ticketId = required("ticketId"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `service/platform/lead/v1.0/company/${companyId}/ticket/${ticketId}`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Retreives ticket details of a application level ticket
    * Description:  Retreives ticket details of a application level ticket with ticket ID
     * @param { string } companyId - Company ID of the application
     * @param { string } applicationId - Application ID for which the data will be returned
     * @param { string } ticketId - Tiket ID of the ticket to be fetched
     
    **/
  getTicket(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    ticketId = required("ticketId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `service/platform/lead/v1.0/company/${companyId}/ticket/application/${applicationId}/${ticketId}`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Edits ticket details of a application level ticket
    * Description:  Edits ticket details of a application level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
     * @param { string } companyId - Company ID of the application
     * @param { string } applicationId - Application ID for ticket
     * @param { string } ticketId - Ticket ID of ticket to be edited
     body: EditTicketPayload,
    **/
  editTicket(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    ticketId = required("ticketId"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/ticket/${ticketId}`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Create history for specific company level ticket
    * Description:  Create history for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     * @param { string } companyId - Company ID for ticket
     * @param { string } ticketId - Ticket ID for which history is created
     body: TicketHistoryPayload,
    **/
  createHistory(
    companyId = required("companyId"),
    ticketId = required("ticketId"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `service/platform/lead/v1.0/company/${companyId}/ticket/${ticketId}/history`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Gets history list for specific company level ticket
    * Description:  Gets history list for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     * @param { string } companyId - Company ID for ticket
     * @param { string } ticketId - Ticket ID for which history is to be fetched
     
    **/
  getTicketHistory(
    companyId = required("companyId"),
    ticketId = required("ticketId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `service/platform/lead/v1.0/company/${companyId}/ticket/${ticketId}/history`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Create history for specific application level ticket
    * Description:  Create history for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     * @param { string } companyId - Company ID of the application
     * @param { string } applicationId - Application ID for ticket
     * @param { string } ticketId - Ticket ID for which history is created
     body: TicketHistoryPayload,
    **/
  createHistory(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    ticketId = required("ticketId"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/ticket/${ticketId}/history`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Gets history list for specific application level ticket
    * Description:  Gets history list for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     * @param { string } companyId - Company ID of application
     * @param { string } applicationId - Application ID for ticket
     * @param { string } ticketId - Ticket ID for which history is to be fetched
     
    **/
  getTicketHistory(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    ticketId = required("ticketId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/ticket/${ticketId}/history`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get specific custom form using it's slug
    * Description:  Get specific custom form using it's slug, this is used to view the form.
     * @param { string } companyId - Company ID of the application
     * @param { string } applicationId - Application ID for the form
     * @param { string } slug - Slug of form whose response is getting submitted
     
    **/
  getCustomForm(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    slug = required("slug")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/form/${slug}`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Edit the given custom form
    * Description:  Edit the given custom form field such as adding or deleting input, assignee, title, decription, notification and polling information.
     * @param { string } companyId - Company ID of the application
     * @param { string } applicationId - Application ID for the form
     * @param { string } slug - Slug of form whose response is getting submitted
     body: EditCustomFormPayload,
    **/
  editCustomForm(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    slug = required("slug"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/form/${slug}`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Get list of custom form
    * Description:  Get list of custom form for given application
     * @param { string } companyId - Company ID of the application
     * @param { string } applicationId - Application ID for the form
     
    **/
  getCustomForms(
    companyId = required("companyId"),
    applicationId = required("applicationId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/form`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Creates a new custom form
    * Description:  Creates a new custom form for given application
     * @param { string } companyId - Company ID of the application
     * @param { string } applicationId - Application ID for the form
     body: CreateCustomFormPayload,
    **/
  createCustomForm(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/form`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Get Token to join a specific Video Room using it's unqiue name
    * Description:  Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
     * @param { string } companyId - Company ID of the application
     * @param { string } applicationId - Application ID for video room
     * @param { string } uniqueName - Unique name of video room
     
    **/
  getTokenForVideoRoom(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    uniqueName = required("uniqueName")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/video/room/${uniqueName}/token`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get participants of a specific Video Room using it's unique name
    * Description:  Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
     * @param { string } companyId - Company ID of the application
     * @param { string } applicationId - Application ID for video room
     * @param { string } uniqueName - Unique name of Video Room
     
    **/
  getVideoParticipants(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    uniqueName = required("uniqueName")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/video/room/${uniqueName}/participants`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get video room id
    * Description:  Get video room id.
     * @param { string } companyId - Company ID of the application
     * @param { string } applicationId - Application ID for video room
     body: CreateVideoRoomPayload,
    **/
  createVideoRoom(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/video/room`,
      query,
      body
    );
  }
}

exports.Lead = Lead;

const {
  PaginationSchema,
  ThemesListingResponseSchema,
  AddThemeRequestSchema,
  UpgradableThemeSchema,
  FontsSchema,
  ThemesSchema,
  pagesSchema,
  availableSectionSchema,
  sectionSchema,
} = require("./schema");

class Theme {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * Summary: Gets list of themes in theme library
    * Description:  Gets list of themes in theme library
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     * @param { number } [pageSize] - Number of items to retrieve in each page. Default is 10.
     * @param { number } [pageNo] - Page number. Default is 1.
     
    **/
  getThemeLibrary(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    pageSize,
    pageNo
  ) {
    const query = {};
    query["page_size"] = pageSize;
    query["page_no"] = pageNo;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/theme/v1.0/company/${companyId}/application/${applicationId}/library`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Add theme to theme library
    * Description:  Add theme to theme library
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     body: AddThemeRequestSchema,
    **/
  addToThemeLibrary(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/theme/v1.0/company/${companyId}/application/${applicationId}/library`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Apply theme
    * Description:  Apply theme
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     body: AddThemeRequestSchema,
    **/
  applyTheme(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/theme/v1.0/company/${companyId}/application/${applicationId}/apply`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Checks if theme is upgradable
    * Description:  Checks if theme is upgradable
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     * @param { string } themeId - Theme ID
     
    **/
  isUpgradable(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    themeId = required("themeId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/theme/v1.0/company/${companyId}/application/${applicationId}/${themeId}/upgradable`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Upgrades theme
    * Description:  Upgrades theme
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     * @param { string } themeId - Theme ID
     
    **/
  upgradeTheme(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    themeId = required("themeId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/platform/theme/v1.0/company/${companyId}/application/${applicationId}/${themeId}/upgrade`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Gets public themes
    * Description:  Gets public themes
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     * @param { number } [pageSize] - Number of items to retrieve in each page. Default is 10.
     * @param { number } [pageNo] - Page number. Default is 1.
     
    **/
  getPublicThemes(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    pageSize,
    pageNo
  ) {
    const query = {};
    query["page_size"] = pageSize;
    query["page_no"] = pageNo;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/theme/v1.0/company/${companyId}/application/${applicationId}/public/library`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Create new theme
    * Description:  Create new theme
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     body: ThemesSchema,
    **/
  createTheme(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/theme/v1.0/company/${companyId}/application/${applicationId}/`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Get applied theme
    * Description:  Get applied theme
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     
    **/
  getAppliedTheme(
    companyId = required("companyId"),
    applicationId = required("applicationId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/platform/theme/v1.0/company/${companyId}/application/${applicationId}/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Gets fonts
    * Description:  Gets fonts
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     
    **/
  getFonts(
    companyId = required("companyId"),
    applicationId = required("applicationId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/theme/v1.0/company/${companyId}/application/${applicationId}/fonts`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Gets theme by id
    * Description:  Gets theme by id
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     * @param { string } themeId - Theme ID
     
    **/
  getThemeById(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    themeId = required("themeId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/theme/v1.0/company/${companyId}/application/${applicationId}/${themeId}`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Update theme
    * Description:  Update theme
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     * @param { string } themeId - Theme ID
     body: ThemesSchema,
    **/
  updateTheme(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    themeId = required("themeId"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/platform/theme/v1.0/company/${companyId}/application/${applicationId}/${themeId}`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Delete theme
    * Description:  Delete theme
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     * @param { string } themeId - Theme ID
     
    **/
  deleteTheme(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    themeId = required("themeId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/platform/theme/v1.0/company/${companyId}/application/${applicationId}/${themeId}`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Gets theme for preview
    * Description:  Gets theme for preview
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     * @param { string } themeId - Theme ID
     
    **/
  getThemeForPreview(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    themeId = required("themeId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/theme/v1.0/company/${companyId}/application/${applicationId}/${themeId}/preview`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Publish theme
    * Description:  Publish theme
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     * @param { string } themeId - Theme ID
     
    **/
  publishTheme(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    themeId = required("themeId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/platform/theme/v1.0/company/${companyId}/application/${applicationId}/${themeId}/publish`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Unpublish theme
    * Description:  Unpublish theme
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     * @param { string } themeId - Theme ID
     
    **/
  unpublishTheme(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    themeId = required("themeId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/platform/theme/v1.0/company/${companyId}/application/${applicationId}/${themeId}/unpublish`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Archive theme
    * Description:  Archive theme
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     * @param { string } themeId - Theme ID
     
    **/
  archiveTheme(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    themeId = required("themeId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/platform/theme/v1.0/company/${companyId}/application/${applicationId}/${themeId}/archive`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Unarchive theme
    * Description:  Unarchive theme
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     * @param { string } themeId - Theme ID
     
    **/
  unarchiveTheme(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    themeId = required("themeId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/platform/theme/v1.0/company/${companyId}/application/${applicationId}/${themeId}/unarchive`,
      query,
      {}
    );
  }
}

exports.Theme = Theme;

const {
  ApplicationLegal,
  Seo,
  StorefrontAnnouncement,
  AdminAnnouncementSchema,
  ScheduleSchema,
  GetAnnouncementListSchema,
  CreateAnnouncementSchema,
  CreateFaqResponseSchema,
  CreateFaqSchema,
  GetFaqSchema,
  UpdateFaqCategoryRequestSchema,
  CreateFaqCategoryRequestSchema,
  CreateFaqCategorySchema,
  GetFaqCategoriesSchema,
  GetFaqCategoryByIdOrSlugSchema,
  Navigation,
  NavigationRef,
  LandingPage,
  Slideshow,
  AnnouncementsResponseSchema,
  FaqResponseSchema,
  UpdateHandpickedSchema,
  RemoveHandpickedSchema,
  TagsSchema,
  CreateTagRequestSchema,
  Faq,
  CustomPage,
  CustomBlog,
  Support,
} = require("./schema");

class Content {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * Summary: Get annoucements list
    * Description:  Get list of announcements
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     
    **/
  getAnnouncementsList(
    companyId = required("companyId"),
    applicationId = required("applicationId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/content/v1.0/company/${companyId}/application/${applicationId}/announcements`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Create an annoucement
    * Description:  Create an announcement
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     body: AdminAnnouncementSchema,
    **/
  createAnnouncement(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/content/v1.0/company/${companyId}/application/${applicationId}/announcements`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Get annoucement by id
    * Description:  Get announcement by id
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     * @param { string } announcementId - Announcement ID
     
    **/
  getAnnouncementById(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    announcementId = required("announcementId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/content/v1.0/company/${companyId}/application/${applicationId}/announcements/${announcementId}`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Update an annoucement
    * Description:  Update an announcement
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     * @param { string } announcementId - Announcement ID
     body: AdminAnnouncementSchema,
    **/
  updateAnnouncement(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    announcementId = required("announcementId"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/platform/content/v1.0/company/${companyId}/application/${applicationId}/announcements/${announcementId}`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Update schedule or published status of an annoucement
    * Description:  Update schedule or published status of an announcement
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     * @param { string } announcementId - Announcement ID
     body: ScheduleSchema,
    **/
  updateAnnouncementSchedule(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    announcementId = required("announcementId"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "patch",
      `/service/platform/content/v1.0/company/${companyId}/application/${applicationId}/announcements/${announcementId}`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Delete annoucement by id
    * Description:  Delete announcement by id
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     * @param { string } announcementId - Announcement ID
     
    **/
  deleteAnnouncement(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    announcementId = required("announcementId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/platform/content/v1.0/company/${companyId}/application/${applicationId}/announcements/${announcementId}`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get FAQ categories list
    * Description:  Get list of FAQ categories
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     
    **/
  getFaqCategories(
    companyId = required("companyId"),
    applicationId = required("applicationId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/content/v1.0/company/${companyId}/application/${applicationId}/faq/categories`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get FAQ category by slug or id
    * Description:  Get FAQ category by slug or id
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     * @param { string } idOrSlug - Slug or Id of FAQ Category
     
    **/
  getFaqCategoryBySlugOrId(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    idOrSlug = required("idOrSlug")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/content/v1.0/company/${companyId}/application/${applicationId}/faq/category/${idOrSlug}`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Creates a FAQ category
    * Description:  Add Faq Category
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     body: CreateFaqCategoryRequestSchema,
    **/
  createFaqCategory(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/content/v1.0/company/${companyId}/application/${applicationId}/faq/category`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Updates a FAQ category
    * Description:  Update Faq Category
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     * @param { string } id - Faq category ID
     body: UpdateFaqCategoryRequestSchema,
    **/
  updateFaqCategory(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    id = required("id"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/platform/content/v1.0/company/${companyId}/application/${applicationId}/faq/category/${id}`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Deletes a FAQ category
    * Description:  Delete Faq Category
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     * @param { string } id - Faq category ID
     
    **/
  deleteFaqCategory(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    id = required("id")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/platform/content/v1.0/company/${companyId}/application/${applicationId}/faq/category/${id}`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get FAQs of a Faq Category id or slug
    * Description:  Get FAQs of a Faq Category `id` or `slug`
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     * @param { string } idOrSlug - Faq category ID or slug
     
    **/
  getFaqsByCategoryIdOrSlug(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    idOrSlug = required("idOrSlug")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/content/v1.0/company/${companyId}/application/${applicationId}/faq/category/${idOrSlug}/faqs`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Creates FAQs for category whose `id` is specified
    * Description:  Creates FAQs for category whose `id` is specified
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     * @param { string } categoryId - Faq category ID
     body: CreateFaqSchema,
    **/
  addFaqToFaqCategory(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    categoryId = required("categoryId"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/content/v1.0/company/${companyId}/application/${applicationId}/faq/category/${categoryId}/faqs`,
      query,
      body
    );
  }

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
  updateFaq(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    categoryId = required("categoryId"),
    faqId = required("faqId"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/platform/content/v1.0/company/${companyId}/application/${applicationId}/faq/category/${categoryId}/faq/${faqId}`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Delete FAQ
    * Description:  Delete FAQ
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     * @param { string } categoryId - Faq category ID
     * @param { string } faqId - Faq ID
     
    **/
  deleteFaq(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    categoryId = required("categoryId"),
    faqId = required("faqId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/platform/content/v1.0/company/${companyId}/application/${applicationId}/faq/category/${categoryId}/faq/${faqId}`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get legal information
    * Description:  Get legal information of application, which includes policy, Terms and Conditions, and FAQ information of application.
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     
    **/
  getLegalInformation(
    companyId = required("companyId"),
    applicationId = required("applicationId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/content/v1.0/company/${companyId}/application/${applicationId}/legal`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Save legal information
    * Description:  Save legal information of application, which includes Policy, Terms and Conditions, and FAQ information of application.
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     body: ApplicationLegal,
    **/
  updateLegalInformation(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/content/v1.0/company/${companyId}/application/${applicationId}/legal`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Get seo of application
    * Description:  Get seo of application
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     
    **/
  getSeoConfiguration(
    companyId = required("companyId"),
    applicationId = required("applicationId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/content/v1.0/company/${companyId}/application/${applicationId}/seo`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Update seo of application
    * Description:  Update seo of application
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     body: Seo,
    **/
  updateSeoConfiguration(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/content/v1.0/company/${companyId}/application/${applicationId}/seo`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Get support information
    * Description:  Get contact details for customer support. Including emails and phone numbers
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     
    **/
  getSupportInformation(
    companyId = required("companyId"),
    applicationId = required("applicationId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/content/v1.0/company/${companyId}/application/${applicationId}/support`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Update support data of application
    * Description:  Update support data of application
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     body: Support,
    **/
  updateSupportInformation(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/content/v1.0/company/${companyId}/application/${applicationId}/support`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Creates Tag
    * Description:  Create tags
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     body: CreateTagRequestSchema,
    **/
  createTag(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/content/v1.0/company/${companyId}/application/${applicationId}/tags`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Updates a Tag
    * Description:  Update tag
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     body: CreateTagRequestSchema,
    **/
  updateTag(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/platform/content/v1.0/company/${companyId}/application/${applicationId}/tags`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Delete tags for application
    * Description:  Delete tags for application
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     
    **/
  deleteAllTags(
    companyId = required("companyId"),
    applicationId = required("applicationId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/platform/content/v1.0/company/${companyId}/application/${applicationId}/tags`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get tags for application
    * Description:  Get tags for application
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     
    **/
  getTags(
    companyId = required("companyId"),
    applicationId = required("applicationId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/content/v1.0/company/${companyId}/application/${applicationId}/tags`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Adds a Tag
    * Description:  Add tag
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     body: CreateTagRequestSchema,
    **/
  addTag(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/platform/content/v1.0/company/${companyId}/application/${applicationId}/tags/add`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Removes a Tag
    * Description:  Remove a particular tag
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     body: RemoveHandpickedSchema,
    **/
  removeTag(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/platform/content/v1.0/company/${companyId}/application/${applicationId}/tags/remove/handpicked`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Edits a Tag by Id
    * Description:  Edits a particular tag
     * @param { string } companyId - Company ID
     * @param { string } applicationId - Application ID
     * @param { string } tagId - Tag ID
     body: UpdateHandpickedSchema,
    **/
  editTag(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    tagId = required("tagId"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/platform/content/v1.0/company/${companyId}/application/${applicationId}/tags/remove/handpicked/${tagId}`,
      query,
      body
    );
  }
}

exports.Content = Content;
