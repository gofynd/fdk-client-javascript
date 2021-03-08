const PlatformClient = require("./PlatformClient");
const { required } = require("../common/Utils");

class Lead {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary:  Gets the list of company level tickets and/or ticket filters depending on query params
    * @description:  Gets the list of company level tickets and/or ticket filters
    * @param  {string} companyId - Company ID for which the data will be returned
    * @param  {boolean} [items] - Decides that the reponse will contain the list of tickets
    * @param  {boolean} [filters] - Decides that the reponse will contain the ticket filters
    
    **/
  getTickets(companyId, items, filters) {
    const query = {};
    query["items"] = items;
    query["filters"] = filters;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/lead/v1.0/company/${companyId}/ticket`,
      query,
      {}
    );
  }

  /**
   *
   * @summary:  Creates a company level ticket
   * @description:  Creates a company level ticket
   * @param  {string} companyId - Company ID for which the data will be returned
   * @param  {AddTicketPayload} body
   **/
  createTicket(companyId, body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/lead/v1.0/company/${companyId}/ticket`,
      query,
      body
    );
  }

  /**
    *
    * @summary:  Gets the list of Application level Tickets and/or ticket filters depending on query params
    * @description:  Gets the list of Application level Tickets and/or ticket filters
    * @param  {string} companyId - Company ID of the application
    * @param  {string} applicationId - Application ID for which the data will be returned
    * @param  {boolean} [items] - Decides that the reponse will contain the list of tickets
    * @param  {boolean} [filters] - Decides that the reponse will contain the ticket filters
    
    **/
  getTickets(companyId, applicationId, items, filters) {
    const query = {};
    query["items"] = items;
    query["filters"] = filters;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/ticket`,
      query,
      {}
    );
  }

  /**
    *
    * @summary:  Retreives ticket details of a company level ticket with ticket ID
    * @description:  Retreives ticket details of a company level ticket
    * @param  {string} companyId - Company ID for which the data will be returned
    * @param  {string} ticketId - Tiket ID of the ticket to be fetched
    
    **/
  getTicket(companyId, ticketId) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/lead/v1.0/company/${companyId}/ticket/${ticketId}`,
      query,
      {}
    );
  }

  /**
   *
   * @summary:  Edits ticket details of a company level ticket
   * @description:  Edits ticket details of a company level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
   * @param  {string} companyId - Company ID for ticket
   * @param  {string} ticketId - Ticket ID of ticket to be edited
   * @param  {EditTicketPayload} body
   **/
  editTicket(companyId, ticketId, body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/platform/lead/v1.0/company/${companyId}/ticket/${ticketId}`,
      query,
      body
    );
  }

  /**
    *
    * @summary:  Retreives ticket details of a application level ticket
    * @description:  Retreives ticket details of a application level ticket with ticket ID
    * @param  {string} companyId - Company ID of the application
    * @param  {string} applicationId - Application ID for which the data will be returned
    * @param  {string} ticketId - Tiket ID of the ticket to be fetched
    
    **/
  getTicket(companyId, applicationId, ticketId) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/lead/v1.0/company/${companyId}/ticket/application/${applicationId}/${ticketId}`,
      query,
      {}
    );
  }

  /**
   *
   * @summary:  Edits ticket details of a application level ticket
   * @description:  Edits ticket details of a application level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
   * @param  {string} companyId - Company ID of the application
   * @param  {string} applicationId - Application ID for ticket
   * @param  {string} ticketId - Ticket ID of ticket to be edited
   * @param  {EditTicketPayload} body
   **/
  editTicket(companyId, applicationId, ticketId, body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/ticket/${ticketId}`,
      query,
      body
    );
  }

  /**
   *
   * @summary:  Create history for specific company level ticket
   * @description:  Create history for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
   * @param  {string} companyId - Company ID for ticket
   * @param  {string} ticketId - Ticket ID for which history is created
   * @param  {TicketHistoryPayload} body
   **/
  createHistory(companyId, ticketId, body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/lead/v1.0/company/${companyId}/ticket/${ticketId}/history`,
      query,
      body
    );
  }

  /**
    *
    * @summary:  Gets history list for specific company level ticket
    * @description:  Gets history list for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
    * @param  {string} companyId - Company ID for ticket
    * @param  {string} ticketId - Ticket ID for which history is to be fetched
    
    **/
  getTicketHistory(companyId, ticketId) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/lead/v1.0/company/${companyId}/ticket/${ticketId}/history`,
      query,
      {}
    );
  }

  /**
   *
   * @summary:  Create history for specific application level ticket
   * @description:  Create history for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
   * @param  {string} companyId - Company ID of the application
   * @param  {string} applicationId - Application ID for ticket
   * @param  {string} ticketId - Ticket ID for which history is created
   * @param  {TicketHistoryPayload} body
   **/
  createHistory(companyId, applicationId, ticketId, body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/ticket/${ticketId}/history`,
      query,
      body
    );
  }

  /**
    *
    * @summary:  Gets history list for specific application level ticket
    * @description:  Gets history list for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
    * @param  {string} companyId - Company ID of application
    * @param  {string} applicationId - Application ID for ticket
    * @param  {string} ticketId - Ticket ID for which history is to be fetched
    
    **/
  getTicketHistory(companyId, applicationId, ticketId) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/ticket/${ticketId}/history`,
      query,
      {}
    );
  }

  /**
    *
    * @summary:  Get specific custom form using it's slug
    * @description:  Get specific custom form using it's slug, this is used to view the form.
    * @param  {string} companyId - Company ID of the application
    * @param  {string} applicationId - Application ID for the form
    * @param  {string} slug - Slug of form whose response is getting submitted
    
    **/
  getCustomForm(companyId, applicationId, slug) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/form/${slug}`,
      query,
      {}
    );
  }

  /**
   *
   * @summary:  Edit the given custom form
   * @description:  Edit the given custom form field such as adding or deleting input, assignee, title, decription, notification and polling information.
   * @param  {string} companyId - Company ID of the application
   * @param  {string} applicationId - Application ID for the form
   * @param  {string} slug - Slug of form whose response is getting submitted
   * @param  {EditCustomFormPayload} body
   **/
  editCustomForm(companyId, applicationId, slug, body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/form/${slug}`,
      query,
      body
    );
  }

  /**
    *
    * @summary:  Get list of custom form
    * @description:  Get list of custom form for given application
    * @param  {string} companyId - Company ID of the application
    * @param  {string} applicationId - Application ID for the form
    
    **/
  getCustomForms(companyId, applicationId) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/form`,
      query,
      {}
    );
  }

  /**
   *
   * @summary:  Creates a new custom form
   * @description:  Creates a new custom form for given application
   * @param  {string} companyId - Company ID of the application
   * @param  {string} applicationId - Application ID for the form
   * @param  {CreateCustomFormPayload} body
   **/
  createCustomForm(companyId, applicationId, body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/form`,
      query,
      body
    );
  }

  /**
    *
    * @summary:  Get Token to join a specific Video Room using it's unqiue name
    * @description:  Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
    * @param  {string} companyId - Company ID of the application
    * @param  {string} applicationId - Application ID for video room
    * @param  {string} uniqueName - Unique name of video room
    
    **/
  getTokenForVideoRoom(companyId, applicationId, uniqueName) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/video/room/${uniqueName}/token`,
      query,
      {}
    );
  }

  /**
    *
    * @summary:  Get participants of a specific Video Room using it's unique name
    * @description:  Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
    * @param  {string} companyId - Company ID of the application
    * @param  {string} applicationId - Application ID for video room
    * @param  {string} uniqueName - Unique name of Video Room
    
    **/
  getVideoParticipants(companyId, applicationId, uniqueName) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/video/room/${uniqueName}/participants`,
      query,
      {}
    );
  }

  /**
   *
   * @summary:  Open a video room.
   * @description:  Open a video room.
   * @param  {string} companyId - Company ID of the application
   * @param  {string} applicationId - Application ID for video room
   * @param  {CreateVideoRoomPayload} body
   **/
  openVideoRoom(companyId, applicationId, body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/video/room`,
      query,
      body
    );
  }

  /**
    *
    * @summary:  Close the video room and force all participants to leave.
    * @description:  Close the video room and force all participants to leave.
    * @param  {string} companyId - Company ID of the application
    * @param  {string} applicationId - Application ID for video room
    
    **/
  closeVideoRoom(companyId, applicationId) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/video/room`,
      query,
      {}
    );
  }
}

class Theme {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary:  Gets list of themes in theme library
    * @description:  Gets list of themes in theme library
    * @param  {string} companyId - Company ID
    * @param  {string} applicationId - Application ID
    * @param  {number} [pageSize] - Number of items to retrieve in each page. Default is 10.
    * @param  {number} [pageNo] - Page number. Default is 1.
    
    **/
  getThemeLibrary(companyId, applicationId, pageSize, pageNo) {
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
   * @summary:  Add theme to theme library
   * @description:  Add theme to theme library
   * @param  {string} companyId - Company ID
   * @param  {string} applicationId - Application ID
   * @param  {AddThemeRequestSchema} body
   **/
  addToThemeLibrary(companyId, applicationId, body) {
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
   * @summary:  Apply theme
   * @description:  Apply theme
   * @param  {string} companyId - Company ID
   * @param  {string} applicationId - Application ID
   * @param  {AddThemeRequestSchema} body
   **/
  applyTheme(companyId, applicationId, body) {
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
    * @summary:  Checks if theme is upgradable
    * @description:  Checks if theme is upgradable
    * @param  {string} companyId - Company ID
    * @param  {string} applicationId - Application ID
    * @param  {string} themeId - Theme ID
    
    **/
  isUpgradable(companyId, applicationId, themeId) {
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
    * @summary:  Upgrades theme
    * @description:  Upgrades theme
    * @param  {string} companyId - Company ID
    * @param  {string} applicationId - Application ID
    * @param  {string} themeId - Theme ID
    
    **/
  upgradeTheme(companyId, applicationId, themeId) {
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
    * @summary:  Gets public themes
    * @description:  Gets public themes
    * @param  {string} companyId - Company ID
    * @param  {string} applicationId - Application ID
    * @param  {number} [pageSize] - Number of items to retrieve in each page. Default is 10.
    * @param  {number} [pageNo] - Page number. Default is 1.
    
    **/
  getPublicThemes(companyId, applicationId, pageSize, pageNo) {
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
   * @summary:  Create new theme
   * @description:  Create new theme
   * @param  {string} companyId - Company ID
   * @param  {string} applicationId - Application ID
   * @param  {ThemesSchema} body
   **/
  createTheme(companyId, applicationId, body) {
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
    * @summary:  Get applied theme
    * @description:  Get applied theme
    * @param  {string} companyId - Company ID
    * @param  {string} applicationId - Application ID
    
    **/
  getAppliedTheme(companyId, applicationId) {
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
    * @summary:  Gets fonts
    * @description:  Gets fonts
    * @param  {string} companyId - Company ID
    * @param  {string} applicationId - Application ID
    
    **/
  getFonts(companyId, applicationId) {
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
    * @summary:  Gets theme by id
    * @description:  Gets theme by id
    * @param  {string} companyId - Company ID
    * @param  {string} applicationId - Application ID
    * @param  {string} themeId - Theme ID
    
    **/
  getThemeById(companyId, applicationId, themeId) {
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
   * @summary:  Update theme
   * @description:  Update theme
   * @param  {string} companyId - Company ID
   * @param  {string} applicationId - Application ID
   * @param  {string} themeId - Theme ID
   * @param  {ThemesSchema} body
   **/
  updateTheme(companyId, applicationId, themeId, body) {
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
    * @summary:  Delete theme
    * @description:  Delete theme
    * @param  {string} companyId - Company ID
    * @param  {string} applicationId - Application ID
    * @param  {string} themeId - Theme ID
    
    **/
  deleteTheme(companyId, applicationId, themeId) {
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
    * @summary:  Gets theme for preview
    * @description:  Gets theme for preview
    * @param  {string} companyId - Company ID
    * @param  {string} applicationId - Application ID
    * @param  {string} themeId - Theme ID
    
    **/
  getThemeForPreview(companyId, applicationId, themeId) {
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
    * @summary:  Publish theme
    * @description:  Publish theme
    * @param  {string} companyId - Company ID
    * @param  {string} applicationId - Application ID
    * @param  {string} themeId - Theme ID
    
    **/
  publishTheme(companyId, applicationId, themeId) {
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
    * @summary:  Unpublish theme
    * @description:  Unpublish theme
    * @param  {string} companyId - Company ID
    * @param  {string} applicationId - Application ID
    * @param  {string} themeId - Theme ID
    
    **/
  unpublishTheme(companyId, applicationId, themeId) {
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
    * @summary:  Archive theme
    * @description:  Archive theme
    * @param  {string} companyId - Company ID
    * @param  {string} applicationId - Application ID
    * @param  {string} themeId - Theme ID
    
    **/
  archiveTheme(companyId, applicationId, themeId) {
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
    * @summary:  Unarchive theme
    * @description:  Unarchive theme
    * @param  {string} companyId - Company ID
    * @param  {string} applicationId - Application ID
    * @param  {string} themeId - Theme ID
    
    **/
  unarchiveTheme(companyId, applicationId, themeId) {
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

class User {
  constructor(_conf) {
    this._conf = _conf;
  }

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
  getCustomers(companyId, applicationId, q, pageSize, pageNo) {
    const query = {};
    query["q"] = q;
    query["page_size"] = pageSize;
    query["page_no"] = pageNo;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/user/v1.0/company/${companyId}/application/${applicationId}/customers/list`,
      query,
      {}
    );
  }

  /**
    *
    * @summary:  Search users
    * @description:  Search users
    * @param  {string} companyId - Company ID
    * @param  {string} applicationId - Application ID
    * @param  {string} [query] - The search query. This can be a partial or complete name of a either a product, brand or category
    
    **/
  searchUsers(companyId, applicationId, query) {
    const query = {};
    query["query"] = query;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/user/v1.0/company/${companyId}/application/${applicationId}/customers/search`,
      query,
      {}
    );
  }

  /**
    *
    * @summary:  Get platform config
    * @description:  Used to get platform config
    * @param  {string} companyId - Company ID
    * @param  {string} applicationId - Application ID
    
    **/
  getPlatformConfig(companyId, applicationId) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/user/v1.0/company/${companyId}/application/${applicationId}/platform/config`,
      query,
      {}
    );
  }

  /**
   *
   * @summary:  Update platform config
   * @description:  Used to update platform config
   * @param  {string} companyId - Company ID
   * @param  {string} applicationId - Application ID
   * @param  {PlatformSchema} body
   **/
  updatePlatformConfig(companyId, applicationId, body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/user/v1.0/company/${companyId}/application/${applicationId}/platform/config`,
      query,
      body
    );
  }
}

class Content {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary:  Get annoucements list
    * @description:  Get list of announcements
    * @param  {string} companyId - Company ID
    * @param  {string} applicationId - Application ID
    
    **/
  getAnnouncementsList(companyId, applicationId) {
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
   * @summary:  Create an annoucement
   * @description:  Create an announcement
   * @param  {string} companyId - Company ID
   * @param  {string} applicationId - Application ID
   * @param  {AdminAnnouncementSchema} body
   **/
  createAnnouncement(companyId, applicationId, body) {
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
    * @summary:  Get annoucement by id
    * @description:  Get announcement by id
    * @param  {string} companyId - Company ID
    * @param  {string} applicationId - Application ID
    * @param  {string} announcementId - Announcement ID
    
    **/
  getAnnouncementById(companyId, applicationId, announcementId) {
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
   * @summary:  Update an annoucement
   * @description:  Update an announcement
   * @param  {string} companyId - Company ID
   * @param  {string} applicationId - Application ID
   * @param  {string} announcementId - Announcement ID
   * @param  {AdminAnnouncementSchema} body
   **/
  updateAnnouncement(companyId, applicationId, announcementId, body) {
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
   * @summary:  Update schedule or published status of an annoucement
   * @description:  Update schedule or published status of an announcement
   * @param  {string} companyId - Company ID
   * @param  {string} applicationId - Application ID
   * @param  {string} announcementId - Announcement ID
   * @param  {ScheduleSchema} body
   **/
  updateAnnouncementSchedule(companyId, applicationId, announcementId, body) {
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
    * @summary:  Delete annoucement by id
    * @description:  Delete announcement by id
    * @param  {string} companyId - Company ID
    * @param  {string} applicationId - Application ID
    * @param  {string} announcementId - Announcement ID
    
    **/
  deleteAnnouncement(companyId, applicationId, announcementId) {
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
    * @summary:  Get FAQ categories list
    * @description:  Get list of FAQ categories
    * @param  {string} companyId - Company ID
    * @param  {string} applicationId - Application ID
    
    **/
  getFaqCategories(companyId, applicationId) {
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
    * @summary:  Get FAQ category by slug or id
    * @description:  Get FAQ category by slug or id
    * @param  {string} companyId - Company ID
    * @param  {string} applicationId - Application ID
    * @param  {string} idOrSlug - Slug or Id of FAQ Category
    
    **/
  getFaqCategoryBySlugOrId(companyId, applicationId, idOrSlug) {
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
   * @summary:  Creates a FAQ category
   * @description:  Add Faq Category
   * @param  {string} companyId - Company ID
   * @param  {string} applicationId - Application ID
   * @param  {CreateFaqCategoryRequestSchema} body
   **/
  createFaqCategory(companyId, applicationId, body) {
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
   * @summary:  Updates a FAQ category
   * @description:  Update Faq Category
   * @param  {string} companyId - Company ID
   * @param  {string} applicationId - Application ID
   * @param  {string} id - Faq category ID
   * @param  {UpdateFaqCategoryRequestSchema} body
   **/
  updateFaqCategory(companyId, applicationId, id, body) {
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
    * @summary:  Deletes a FAQ category
    * @description:  Delete Faq Category
    * @param  {string} companyId - Company ID
    * @param  {string} applicationId - Application ID
    * @param  {string} id - Faq category ID
    
    **/
  deleteFaqCategory(companyId, applicationId, id) {
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
    * @summary:  Get FAQs of a Faq Category id or slug
    * @description:  Get FAQs of a Faq Category `id` or `slug`
    * @param  {string} companyId - Company ID
    * @param  {string} applicationId - Application ID
    * @param  {string} idOrSlug - Faq category ID or slug
    
    **/
  getFaqsByCategoryIdOrSlug(companyId, applicationId, idOrSlug) {
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
   * @summary:  Creates FAQs for category whose `id` is specified
   * @description:  Creates FAQs for category whose `id` is specified
   * @param  {string} companyId - Company ID
   * @param  {string} applicationId - Application ID
   * @param  {string} categoryId - Faq category ID
   * @param  {CreateFaqSchema} body
   **/
  addFaqToFaqCategory(companyId, applicationId, categoryId, body) {
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
   * @summary:  Updates FAQ
   * @description:  Updates FAQ
   * @param  {string} companyId - Company ID
   * @param  {string} applicationId - Application ID
   * @param  {string} categoryId - Faq category ID
   * @param  {string} faqId - Faq ID
   * @param  {CreateFaqSchema} body
   **/
  updateFaq(companyId, applicationId, categoryId, faqId, body) {
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
    * @summary:  Delete FAQ
    * @description:  Delete FAQ
    * @param  {string} companyId - Company ID
    * @param  {string} applicationId - Application ID
    * @param  {string} categoryId - Faq category ID
    * @param  {string} faqId - Faq ID
    
    **/
  deleteFaq(companyId, applicationId, categoryId, faqId) {
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
    * @summary:  Get legal information
    * @description:  Get legal information of application, which includes policy, Terms and Conditions, and FAQ information of application.
    * @param  {string} companyId - Company ID
    * @param  {string} applicationId - Application ID
    
    **/
  getLegalInformation(companyId, applicationId) {
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
   * @summary:  Save legal information
   * @description:  Save legal information of application, which includes Policy, Terms and Conditions, and FAQ information of application.
   * @param  {string} companyId - Company ID
   * @param  {string} applicationId - Application ID
   * @param  {ApplicationLegal} body
   **/
  updateLegalInformation(companyId, applicationId, body) {
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
    * @summary:  Get seo of application
    * @description:  Get seo of application
    * @param  {string} companyId - Company ID
    * @param  {string} applicationId - Application ID
    
    **/
  getSeoConfiguration(companyId, applicationId) {
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
   * @summary:  Update seo of application
   * @description:  Update seo of application
   * @param  {string} companyId - Company ID
   * @param  {string} applicationId - Application ID
   * @param  {Seo} body
   **/
  updateSeoConfiguration(companyId, applicationId, body) {
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
    * @summary:  Get support information
    * @description:  Get contact details for customer support. Including emails and phone numbers
    * @param  {string} companyId - Company ID
    * @param  {string} applicationId - Application ID
    
    **/
  getSupportInformation(companyId, applicationId) {
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
   * @summary:  Update support data of application
   * @description:  Update support data of application
   * @param  {string} companyId - Company ID
   * @param  {string} applicationId - Application ID
   * @param  {Support} body
   **/
  updateSupportInformation(companyId, applicationId, body) {
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
   * @summary:  Creates Tag
   * @description:  Create tags
   * @param  {string} companyId - Company ID
   * @param  {string} applicationId - Application ID
   * @param  {CreateTagRequestSchema} body
   **/
  createTag(companyId, applicationId, body) {
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
   * @summary:  Updates a Tag
   * @description:  Update tag
   * @param  {string} companyId - Company ID
   * @param  {string} applicationId - Application ID
   * @param  {CreateTagRequestSchema} body
   **/
  updateTag(companyId, applicationId, body) {
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
    * @summary:  Delete tags for application
    * @description:  Delete tags for application
    * @param  {string} companyId - Company ID
    * @param  {string} applicationId - Application ID
    
    **/
  deleteAllTags(companyId, applicationId) {
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
    * @summary:  Get tags for application
    * @description:  Get tags for application
    * @param  {string} companyId - Company ID
    * @param  {string} applicationId - Application ID
    
    **/
  getTags(companyId, applicationId) {
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
   * @summary:  Adds a Tag
   * @description:  Add tag
   * @param  {string} companyId - Company ID
   * @param  {string} applicationId - Application ID
   * @param  {CreateTagRequestSchema} body
   **/
  addTag(companyId, applicationId, body) {
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
   * @summary:  Removes a Tag
   * @description:  Remove a particular tag
   * @param  {string} companyId - Company ID
   * @param  {string} applicationId - Application ID
   * @param  {RemoveHandpickedSchema} body
   **/
  removeTag(companyId, applicationId, body) {
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
   * @summary:  Edits a Tag by Id
   * @description:  Edits a particular tag
   * @param  {string} companyId - Company ID
   * @param  {string} applicationId - Application ID
   * @param  {string} tagId - Tag ID
   * @param  {UpdateHandpickedSchema} body
   **/
  editTag(companyId, applicationId, tagId, body) {
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

class Communication {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary:  Get campaigns
    * @description:  Get campaigns
    
    **/
  getCampaigns() {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/campaigns/campaigns`,
      query,
      {}
    );
  }

  /**
   *
   * @summary:  Create campaign
   * @description:  Create campaign
   * @param  {CampaignReq} body
   **/
  createCampaign(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/campaigns/campaigns`,
      query,
      body
    );
  }

  /**
    *
    * @summary:  Get campaign by id
    * @description:  Get campaign by id
    * @param  {string} id - Campaign id
    
    **/
  getCampaignById(id) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/campaigns/campaigns/${id}`,
      query,
      {}
    );
  }

  /**
   *
   * @summary:  Update campaign by id
   * @description:  Update campaign by id
   * @param  {string} id - Campaign id
   * @param  {CampaignReq} body
   **/
  updateCampaignById(id, body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/campaigns/campaigns/${id}`,
      query,
      body
    );
  }

  /**
    *
    * @summary:  Get stats of campaign by id
    * @description:  Get stats of campaign by id
    * @param  {string} id - Campaign id
    
    **/
  getStatsOfCampaignById(id) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/campaigns/get-stats/${id}`,
      query,
      {}
    );
  }

  /**
    *
    * @summary:  Get audiences
    * @description:  Get audiences
    
    **/
  getAudiences() {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/sources/datasources`,
      query,
      {}
    );
  }

  /**
   *
   * @summary:  Create audience
   * @description:  Create audience
   * @param  {AudienceReq} body
   **/
  createAudience(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/sources/datasources`,
      query,
      body
    );
  }

  /**
   *
   * @summary:  Get bigquery headers
   * @description:  Get bigquery headers
   * @param  {BigqueryHeadersReq} body
   **/
  getBigqueryHeaders(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/sources/bigquery-headers`,
      query,
      body
    );
  }

  /**
    *
    * @summary:  Get audience by id
    * @description:  Get audience by id
    * @param  {string} id - Audience id
    
    **/
  getAudienceById(id) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/sources/datasources/${id}`,
      query,
      {}
    );
  }

  /**
   *
   * @summary:  Update audience by id
   * @description:  Update audience by id
   * @param  {string} id - Audience id
   * @param  {AudienceReq} body
   **/
  updateAudienceById(id, body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/sources/datasources/${id}`,
      query,
      body
    );
  }

  /**
   *
   * @summary:  Get n sample records from csv
   * @description:  Get n sample records from csv
   * @param  {GetNRecordsCsvReq} body
   **/
  getNSampleRecordsFromCsv(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/sources/get-n-records`,
      query,
      body
    );
  }

  /**
    *
    * @summary:  Get email providers
    * @description:  Get email providers
    * @param  {string} companyId - Company id
    * @param  {string} applicationId - Application id
    
    **/
  getEmailProviders(companyId, applicationId) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/email/providers`,
      query,
      {}
    );
  }

  /**
   *
   * @summary:  Create email provider
   * @description:  Create email provider
   * @param  {EmailProviderReq} body
   **/
  createEmailProvider(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/email/providers`,
      query,
      body
    );
  }

  /**
    *
    * @summary:  Get email provider by id
    * @description:  Get email provider by id
    * @param  {string} id - Email provider id
    
    **/
  getEmailProviderById(id) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/email/providers/${id}`,
      query,
      {}
    );
  }

  /**
   *
   * @summary:  Update email provider by id
   * @description:  Update email provider by id
   * @param  {string} id - Email provider id
   * @param  {EmailProviderReq} body
   **/
  updateEmailProviderById(id, body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/email/providers/${id}`,
      query,
      body
    );
  }

  /**
    *
    * @summary:  Get email templates
    * @description:  Get email templates
    
    **/
  getEmailTemplates() {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/email/templates`,
      query,
      {}
    );
  }

  /**
   *
   * @summary:  Create email template
   * @description:  Create email template
   * @param  {EmailTemplateReq} body
   **/
  createEmailTemplate(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/email/templates`,
      query,
      body
    );
  }

  /**
    *
    * @summary:  Get system email templates
    * @description:  Get system email templates
    
    **/
  getSystemEmailTemplates() {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/email/system-templates`,
      query,
      {}
    );
  }

  /**
    *
    * @summary:  Get email template by id
    * @description:  Get email template by id
    * @param  {string} id - Email template id
    
    **/
  getEmailTemplateById(id) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/email/templates/${id}`,
      query,
      {}
    );
  }

  /**
   *
   * @summary:  Update email template by id
   * @description:  Update email template by id
   * @param  {string} id - Email template id
   * @param  {EmailTemplateReq} body
   **/
  updateEmailTemplateById(id, body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/email/templates/${id}`,
      query,
      body
    );
  }

  /**
    *
    * @summary:  Delete email template by id
    * @description:  Delete email template by id
    * @param  {string} id - Email template id
    
    **/
  deleteEmailTemplateById(id) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/email/templates/${id}`,
      query,
      {}
    );
  }

  /**
    *
    * @summary:  Get event subscriptions
    * @description:  Get event subscriptions
    * @param  {string} companyId - Company id
    * @param  {string} applicationId - Application id
    
    **/
  getEventSubscriptions(companyId, applicationId) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/event/event-subscriptions`,
      query,
      {}
    );
  }

  /**
    *
    * @summary:  Get jobs
    * @description:  Get jobs
    * @param  {string} companyId - Company id
    * @param  {string} applicationId - Application id
    
    **/
  getJobs(companyId, applicationId) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/jobs/jobs`,
      query,
      {}
    );
  }

  /**
   *
   * @summary:  Trigger campaign job
   * @description:  Trigger campaign job
   * @param  {TriggerJobRequest} body
   **/
  triggerCampaignJob(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/jobs/trigger-job`,
      query,
      body
    );
  }

  /**
    *
    * @summary:  Get job logs
    * @description:  Get job logs
    * @param  {string} companyId - Company id
    * @param  {string} applicationId - Application id
    
    **/
  getJobLogs(companyId, applicationId) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/jobs/logs`,
      query,
      {}
    );
  }

  /**
    *
    * @summary:  Get communication logs
    * @description:  Get communication logs
    * @param  {string} companyId - Company id
    * @param  {string} applicationId - Application id
    
    **/
  getCommunicationLogs(companyId, applicationId) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/log`,
      query,
      {}
    );
  }

  /**
    *
    * @summary:  Get sms providers
    * @description:  Get sms providers
    
    **/
  getSmsProviders() {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/sms/providers`,
      query,
      {}
    );
  }

  /**
   *
   * @summary:  Create sms provider
   * @description:  Create sms provider
   * @param  {SmsProviderReq} body
   **/
  createSmsProvider(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/sms/providers`,
      query,
      body
    );
  }

  /**
    *
    * @summary:  Get sms provider by id
    * @description:  Get sms provider by id
    * @param  {string} id - Sms provider id
    
    **/
  getSmsProviderById(id) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/sms/providers/${id}`,
      query,
      {}
    );
  }

  /**
   *
   * @summary:  Update sms provider by id
   * @description:  Update sms provider by id
   * @param  {string} id - Sms provider id
   * @param  {SmsProviderReq} body
   **/
  updateSmsProviderById(id, body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/sms/providers/${id}`,
      query,
      body
    );
  }

  /**
    *
    * @summary:  Get sms templates
    * @description:  Get sms templates
    
    **/
  getSmsTemplates() {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/sms/templates`,
      query,
      {}
    );
  }

  /**
   *
   * @summary:  Create sms template
   * @description:  Create sms template
   * @param  {SmsTemplateReq} body
   **/
  createSmsTemplate(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/sms/templates`,
      query,
      body
    );
  }

  /**
    *
    * @summary:  Get sms template by id
    * @description:  Get sms template by id
    * @param  {string} id - Sms template id
    
    **/
  getSmsTemplateById(id) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/sms/templates/${id}`,
      query,
      {}
    );
  }

  /**
   *
   * @summary:  Update sms template by id
   * @description:  Update sms template by id
   * @param  {string} id - Sms template id
   * @param  {SmsTemplateReq} body
   **/
  updateSmsTemplateById(id, body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/sms/templates/${id}`,
      query,
      body
    );
  }

  /**
    *
    * @summary:  Delete sms template by id
    * @description:  Delete sms template by id
    * @param  {string} id - Sms template id
    
    **/
  deleteSmsTemplateById(id) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/sms/templates/${id}`,
      query,
      {}
    );
  }

  /**
    *
    * @summary:  Get system sms templates
    * @description:  Get system sms templates
    
    **/
  getSystemSystemTemplates() {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/communication/v1.0/company/${companyId}/application/${applicationId}/sms/system-templates`,
      query,
      {}
    );
  }
}

class CompanyProfile {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
   *
   * @summary:  Create a Seller account.
   * @description:  This API allows to create a seller account on Fynd Platform.
   * @param  {CompanyStoreSerializerRequest} body
   **/
  registerCompany(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/company-profile/v1.0/onboard/`,
      query,
      body
    );
  }

  /**
   *
   * @summary:  Edit company profile
   * @description:  This API allows to edit the company profile of the seller account.
   * @param  {string} companyId - A `company_id` is a unique identifier for a particular seller account.
   * @param  {CompanyStoreSerializerRequest} body
   **/
  cbsOnboardEdit(companyId, body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "patch",
      `/service/platform/company-profile/v1.0/company/${companyId}`,
      query,
      body
    );
  }

  /**
    *
    * @summary:  Get company profile
    * @description:  This API allows to view the company profile of the seller account.
    * @param  {string} companyId - A `company_id` is a unique identifier for a particular seller account.
    
    **/
  cbsOnboardGet(companyId) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/company-profile/v1.0/company/${companyId}`,
      query,
      {}
    );
  }

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
  companyList(sortBy, q, stage, pageNo, pageSize) {
    const query = {};
    query["sort_by"] = sortBy;
    query["q"] = q;
    query["stage"] = stage;
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/company-profile/v1.0/companies/`,
      query,
      {}
    );
  }

  /**
    *
    * @summary:  Get company metrics
    * @description:  This API allows to view the company metrics, i.e. the status of its brand and stores. Also its allows to view the number of products, company documents & store documents which are verified and unverified.
    * @param  {string} companyId - A `company_id` is a unique identifier for a particular seller account.
    
    **/
  getCompanyMetrics(companyId) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/company-profile/v1.0/company/${companyId}/metrics`,
      query,
      {}
    );
  }

  /**
    *
    * @summary:  Get data associated to countries
    * @description:  This API gets meta associated to countries for eg valid documents.
    * @param  {string} [type] - The type of entity. This can be company or store. By default it is company.
    * @param  {string} [stage] - Ths stage from where the API is called. This can be profile & onboarding. By default it is profile.
    
    **/
  getCountries(type, stage) {
    const query = {};
    query["type"] = type;
    query["stage"] = stage;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/company-profile/v1.0/countries`,
      query,
      {}
    );
  }

  /**
   *
   * @summary:  Verify GST/PAN against legal name.
   * @description:  This API is used to verify legal name againt GST/PAN number.
   * @param  {GstPanResponseSerializer} body
   **/
  verifyGstPan(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/company-profile/v1.0/documents/verification/config`,
      query,
      body
    );
  }

  /**
   *
   * @summary:  Edit a brand.
   * @description:  This API allows to edit meta of a brand.
   * @param  {string} brandId - Id of the brand to be viewed.
   * @param  {CreateUpdateBrandRequestSerializer} body
   **/
  editBrand(brandId, body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/platform/company-profile/v1.0/brand/${brandId}`,
      query,
      body
    );
  }

  /**
    *
    * @summary:  Get a single brand.
    * @description:  This API helps to get data associated to a particular brand.
    * @param  {string} brandId - Id of the brand to be viewed.
    
    **/
  getBrand(brandId) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/company-profile/v1.0/brand/${brandId}`,
      query,
      {}
    );
  }

  /**
   *
   * @summary:  Create a Brand.
   * @description:  This API allows to create a brand associated to a company.
   * @param  {CreateUpdateBrandRequestSerializer} body
   **/
  createBrand(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/company-profile/v1.0/onboard/brand`,
      query,
      body
    );
  }

  /**
   *
   * @summary:  Create a company brand mapping.
   * @description:  This API allows to create a company brand mapping, for a already existing brand in the system.
   * @param  {string} companyId - Id of the company inside which the brand is to be mapped.
   * @param  {CompanyBrandPostRequestSerializer} body
   **/
  createCompanyBrand(companyId, body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/company-profile/v1.0/company/${companyId}/company-brand`,
      query,
      body
    );
  }

  /**
    *
    * @summary:  Get brands associated to a company
    * @description:  This API helps to get view brands associated to a particular company.
    * @param  {string} companyId - Id of the company.
    
    **/
  getCompanyBrands(companyId) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/company-profile/v1.0/company/${companyId}/company-brand`,
      query,
      {}
    );
  }

  /**
   *
   * @summary:  Create a location asscoiated to a company.
   * @description:  This API allows to create a location associated to a company.
   * @param  {string} companyId - Id of the company inside which the location is to be created.
   * @param  {LocationSerializer} body
   **/
  createLocation(companyId, body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/company-profile/v1.0/company/${companyId}/location`,
      query,
      body
    );
  }

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
  locationList(companyId, storeType, q, stage, pageNo, pageSize) {
    const query = {};
    query["store_type"] = storeType;
    query["q"] = q;
    query["stage"] = stage;
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/company-profile/v1.0/company/${companyId}/location`,
      query,
      {}
    );
  }

  /**
   *
   * @summary:  Edit a location asscoiated to a company.
   * @description:  This API allows to edit a location associated to a company.
   * @param  {string} companyId - Id of the company inside which the location is to be created.
   * @param  {string} locationId - Id of the location which you want to edit.
   * @param  {LocationSerializer} body
   **/
  editLocation(companyId, locationId, body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/platform/company-profile/v1.0/company/${companyId}/location/${locationId}`,
      query,
      body
    );
  }

  /**
    *
    * @summary:  Get a single location.
    * @description:  This API helps to get data associated to a particular location.
    * @param  {string} companyId - Id of the company inside which the location lies.
    * @param  {string} locationId - Id of the location which you want to view.
    
    **/
  getSingleLocation(companyId, locationId) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/company-profile/v1.0/company/${companyId}/location/${locationId}`,
      query,
      {}
    );
  }

  /**
    *
    * @summary:  Get constant data asccoiated to company, brand, locations.
    * @description:  This API gets constant data asccoiated to company, brand, locations.
    * @param  {string} [choiceType] - Lists all the constants associated to the passed choice types. Acceptable choice types for the API are as follows, business_type, market_channels, company_type, address_type, brand_tier, store_type, account_type, weekday, admin_stage, stage, verification_stage, integration_type, identifier_type, item_dimension_measure_unit, item_weight_measure_unit, colors, channels, designations, manufacturer, variants, item_types, manufacturing_time_unit.
    
    **/
  getChoices(choiceType) {
    const query = {};
    query["choice_type"] = choiceType;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/company-profile/v1.0/choices`,
      query,
      {}
    );
  }

  /**
    *
    * @summary:  Validate a seller
    * @description:  This API helps in validating a seller and returns the Seller name
    * @param  {string} companyId - Id of the seller to be validated.
    
    **/
  validateSeller(companyId) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/company-profile/v1.0/company/${companyId}/validate`,
      query,
      {}
    );
  }
}

class Inventory {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary:  Get All Job Configs
    * @description:  REST Endpoint that returns all job configs
    * @param  {number} [pageNo] - Page Number
    * @param  {number} [pageSize] - Page Size
    
    **/
  getJobs(pageNo, pageSize) {
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/configurations/v1.0/jobs`,
      query,
      {}
    );
  }

  /**
   *
   * @summary:  Updates An Existing Job Config
   * @description:  REST Endpoint that updates a job config
   * @param  {string} [xUserData] -
   * @param  {JobConfigDTO} body
   **/
  update(body, xUserData) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/configurations/v1.0/jobs`,
      query,
      body
    );
  }

  /**
   *
   * @summary:  Creates A New Job Config
   * @description:  REST Endpoint that creates a new job config
   * @param  {string} [xUserData] -
   * @param  {JobConfigDTO} body
   **/
  create(body, xUserData) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/configurations/v1.0/jobs`,
      query,
      body
    );
  }

  /**
    *
    * @summary:  Get Job Configs Defaults
    * @description:  REST Endpoint that returns default fields job configs by company And integration
    
    **/
  getJobConfigDefaults() {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/configurations/v1.0/jobs/defaults`,
      query,
      {}
    );
  }

  /**
    *
    * @summary:  Get Job Configs For A Company
    * @description:  REST Endpoint that returns all job configs for a company
    * @param  {number} companyId - Company Id
    * @param  {number} [pageNo] - Page Number
    * @param  {number} [pageSize] - Page Size
    
    **/
  getJobsByCompany(companyId, pageNo, pageSize) {
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/configurations/v1.0/jobs/company/${companyId}`,
      query,
      {}
    );
  }

  /**
    *
    * @summary:  Get Job Configs By Company And Integration
    * @description:  REST Endpoint that returns all job configs by company And integration
    * @param  {number} companyId - Company Id
    * @param  {string} integrationId - Integration Id
    * @param  {number} [pageNo] - Page Number
    * @param  {number} [pageSize] - Page Size
    
    **/
  getJobByCompanyAndIntegration(companyId, integrationId, pageNo, pageSize) {
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/configurations/v1.0/jobs/company/${companyId}/integration/${integrationId}`,
      query,
      {}
    );
  }

  /**
    *
    * @summary:  Get Job Config By Code
    * @description:  REST Endpoint that returns job config by code
    * @param  {string} code - Job Code
    
    **/
  getJobByCode(code) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/configurations/v1.0/jobs/code/${code}`,
      query,
      {}
    );
  }

  /**
    *
    * @summary:  Get Job Codes By Company And Integration
    * @description:  REST Endpoint that returns all job codes by company And integration
    * @param  {number} companyId - Company Id
    * @param  {string} integrationId - Integration Id
    * @param  {number} [pageNo] - Page Number
    * @param  {number} [pageSize] - Page Size
    
    **/
  getJobCodesByCompanyAndIntegration(
    companyId,
    integrationId,
    pageNo,
    pageSize
  ) {
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/configurations/v1.0/jobs/code/company/${companyId}/integration/${integrationId}`,
      query,
      {}
    );
  }
}

module.exports = {
  Lead,
  Theme,
  User,
  Content,
  Communication,
  CompanyProfile,
  Inventory,
};
