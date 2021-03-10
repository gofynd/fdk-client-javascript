const APIClient = require("./PlatformAPIClient");

class Lead {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
    *
    * @summary: Gets the list of Application level Tickets and/or ticket filters depending on query params
    * @description: Gets the list of Application level Tickets and/or ticket filters
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.items] - Decides that the reponse will contain the list of tickets
    * @param {boolean} [arg.filters] - Decides that the reponse will contain the ticket filters
    
    **/
  getTickets({ items, filters } = {}) {
    const queryObj = {};
    queryObj["items"] = items;
    queryObj["filters"] = filters;

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.company}/application/${this.applicationId}/ticket`,
      queryObj,
      {}
    );
  }

  /**
    *
    * @summary: Retreives ticket details of a application level ticket
    * @description: Retreives ticket details of a application level ticket with ticket ID
    * @param {Object} arg - arg object.
    * @param {string} arg.ticketId - Tiket ID of the ticket to be fetched
    
    **/
  getTicket({ ticketId } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.company}/application/${this.applicationId}/ticket/${ticketId}`,
      queryObj,
      {}
    );
  }

  /**
   *
   * @summary: Edits ticket details of a application level ticket
   * @description: Edits ticket details of a application level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
   * @param {Object} arg - arg object.
   * @param {string} arg.ticketId - Ticket ID of ticket to be edited
   * @param {EditTicketPayload} arg.body
   **/
  editTicket({ ticketId, body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/lead/v1.0/company/${this.config.company}/application/${this.applicationId}/ticket/${ticketId}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Create history for specific application level ticket
   * @description: Create history for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
   * @param {Object} arg - arg object.
   * @param {string} arg.ticketId - Ticket ID for which history is created
   * @param {TicketHistoryPayload} arg.body
   **/
  createHistory({ ticketId, body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/lead/v1.0/company/${this.config.company}/application/${this.applicationId}/ticket/${ticketId}/history`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Gets history list for specific application level ticket
    * @description: Gets history list for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
    * @param {Object} arg - arg object.
    * @param {string} arg.ticketId - Ticket ID for which history is to be fetched
    
    **/
  getTicketHistory({ ticketId } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.company}/application/${this.applicationId}/ticket/${ticketId}/history`,
      queryObj,
      {}
    );
  }

  /**
    *
    * @summary: Get specific custom form using it's slug
    * @description: Get specific custom form using it's slug, this is used to view the form.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - Slug of form whose response is getting submitted
    
    **/
  getCustomForm({ slug } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.company}/application/${this.applicationId}/form/${slug}`,
      queryObj,
      {}
    );
  }

  /**
   *
   * @summary: Edit the given custom form
   * @description: Edit the given custom form field such as adding or deleting input, assignee, title, decription, notification and polling information.
   * @param {Object} arg - arg object.
   * @param {string} arg.slug - Slug of form whose response is getting submitted
   * @param {EditCustomFormPayload} arg.body
   **/
  editCustomForm({ slug, body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/lead/v1.0/company/${this.config.company}/application/${this.applicationId}/form/${slug}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get list of custom form
    * @description: Get list of custom form for given application
    * @param {Object} arg - arg object.
    
    **/
  getCustomForms({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.company}/application/${this.applicationId}/form`,
      queryObj,
      {}
    );
  }

  /**
   *
   * @summary: Creates a new custom form
   * @description: Creates a new custom form for given application
   * @param {Object} arg - arg object.
   * @param {CreateCustomFormPayload} arg.body
   **/
  createCustomForm({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/lead/v1.0/company/${this.config.company}/application/${this.applicationId}/form`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get Token to join a specific Video Room using it's unqiue name
    * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
    * @param {Object} arg - arg object.
    * @param {string} arg.uniqueName - Unique name of video room
    
    **/
  getTokenForVideoRoom({ uniqueName } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.company}/application/${this.applicationId}/video/room/${uniqueName}/token`,
      queryObj,
      {}
    );
  }

  /**
    *
    * @summary: Get participants of a specific Video Room using it's unique name
    * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
    * @param {Object} arg - arg object.
    * @param {string} arg.uniqueName - Unique name of Video Room
    
    **/
  getVideoParticipants({ uniqueName } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.company}/application/${this.applicationId}/video/room/${uniqueName}/participants`,
      queryObj,
      {}
    );
  }

  /**
   *
   * @summary: Open a video room.
   * @description: Open a video room.
   * @param {Object} arg - arg object.
   * @param {CreateVideoRoomPayload} arg.body
   **/
  openVideoRoom({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/lead/v1.0/company/${this.config.company}/application/${this.applicationId}/video/room`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Close the video room and force all participants to leave.
    * @description: Close the video room and force all participants to leave.
    * @param {Object} arg - arg object.
    
    **/
  closeVideoRoom({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "delete",
      `/service/platform/lead/v1.0/company/${this.config.company}/application/${this.applicationId}/video/room`,
      queryObj,
      {}
    );
  }
}

class Theme {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
    *
    * @summary: Gets list of themes in theme library
    * @description: Gets list of themes in theme library
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
    * @param {number} [arg.pageNo] - Page number. Default is 1.
    
    **/
  getThemeLibrary({ pageSize, pageNo } = {}) {
    const queryObj = {};
    queryObj["page_size"] = pageSize;
    queryObj["page_no"] = pageNo;

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.company}/application/${this.applicationId}/library`,
      queryObj,
      {}
    );
  }

  /**
   *
   * @summary: Add theme to theme library
   * @description: Add theme to theme library
   * @param {Object} arg - arg object.
   * @param {AddThemeRequestSchema} arg.body
   **/
  addToThemeLibrary({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/theme/v1.0/company/${this.config.company}/application/${this.applicationId}/library`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Apply theme
   * @description: Apply theme
   * @param {Object} arg - arg object.
   * @param {AddThemeRequestSchema} arg.body
   **/
  applyTheme({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/theme/v1.0/company/${this.config.company}/application/${this.applicationId}/apply`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Checks if theme is upgradable
    * @description: Checks if theme is upgradable
    * @param {Object} arg - arg object.
    * @param {string} arg.themeId - Theme ID
    
    **/
  isUpgradable({ themeId } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.company}/application/${this.applicationId}/${themeId}/upgradable`,
      queryObj,
      {}
    );
  }

  /**
    *
    * @summary: Upgrades theme
    * @description: Upgrades theme
    * @param {Object} arg - arg object.
    * @param {string} arg.themeId - Theme ID
    
    **/
  upgradeTheme({ themeId } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.company}/application/${this.applicationId}/${themeId}/upgrade`,
      queryObj,
      {}
    );
  }

  /**
    *
    * @summary: Gets public themes
    * @description: Gets public themes
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
    * @param {number} [arg.pageNo] - Page number. Default is 1.
    
    **/
  getPublicThemes({ pageSize, pageNo } = {}) {
    const queryObj = {};
    queryObj["page_size"] = pageSize;
    queryObj["page_no"] = pageNo;

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.company}/application/${this.applicationId}/public/library`,
      queryObj,
      {}
    );
  }

  /**
   *
   * @summary: Create new theme
   * @description: Create new theme
   * @param {Object} arg - arg object.
   * @param {ThemesSchema} arg.body
   **/
  createTheme({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/theme/v1.0/company/${this.config.company}/application/${this.applicationId}/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get applied theme
    * @description: Get applied theme
    * @param {Object} arg - arg object.
    
    **/
  getAppliedTheme({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.company}/application/${this.applicationId}/`,
      queryObj,
      {}
    );
  }

  /**
    *
    * @summary: Gets fonts
    * @description: Gets fonts
    * @param {Object} arg - arg object.
    
    **/
  getFonts({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.company}/application/${this.applicationId}/fonts`,
      queryObj,
      {}
    );
  }

  /**
    *
    * @summary: Gets theme by id
    * @description: Gets theme by id
    * @param {Object} arg - arg object.
    * @param {string} arg.themeId - Theme ID
    
    **/
  getThemeById({ themeId } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.company}/application/${this.applicationId}/${themeId}`,
      queryObj,
      {}
    );
  }

  /**
   *
   * @summary: Update theme
   * @description: Update theme
   * @param {Object} arg - arg object.
   * @param {string} arg.themeId - Theme ID
   * @param {ThemesSchema} arg.body
   **/
  updateTheme({ themeId, body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.company}/application/${this.applicationId}/${themeId}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete theme
    * @description: Delete theme
    * @param {Object} arg - arg object.
    * @param {string} arg.themeId - Theme ID
    
    **/
  deleteTheme({ themeId } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "delete",
      `/service/platform/theme/v1.0/company/${this.config.company}/application/${this.applicationId}/${themeId}`,
      queryObj,
      {}
    );
  }

  /**
    *
    * @summary: Gets theme for preview
    * @description: Gets theme for preview
    * @param {Object} arg - arg object.
    * @param {string} arg.themeId - Theme ID
    
    **/
  getThemeForPreview({ themeId } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.company}/application/${this.applicationId}/${themeId}/preview`,
      queryObj,
      {}
    );
  }

  /**
    *
    * @summary: Publish theme
    * @description: Publish theme
    * @param {Object} arg - arg object.
    * @param {string} arg.themeId - Theme ID
    
    **/
  publishTheme({ themeId } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.company}/application/${this.applicationId}/${themeId}/publish`,
      queryObj,
      {}
    );
  }

  /**
    *
    * @summary: Unpublish theme
    * @description: Unpublish theme
    * @param {Object} arg - arg object.
    * @param {string} arg.themeId - Theme ID
    
    **/
  unpublishTheme({ themeId } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.company}/application/${this.applicationId}/${themeId}/unpublish`,
      queryObj,
      {}
    );
  }

  /**
    *
    * @summary: Archive theme
    * @description: Archive theme
    * @param {Object} arg - arg object.
    * @param {string} arg.themeId - Theme ID
    
    **/
  archiveTheme({ themeId } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.company}/application/${this.applicationId}/${themeId}/archive`,
      queryObj,
      {}
    );
  }

  /**
    *
    * @summary: Unarchive theme
    * @description: Unarchive theme
    * @param {Object} arg - arg object.
    * @param {string} arg.themeId - Theme ID
    
    **/
  unarchiveTheme({ themeId } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.company}/application/${this.applicationId}/${themeId}/unarchive`,
      queryObj,
      {}
    );
  }
}

class User {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
    *
    * @summary: Gets list of customers
    * @description: Used to get application customers list
    * @param {Object} arg - arg object.
    * @param {string} [arg.q] - The search query. This can be a partial or complete name of a either a product, brand or category
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
    * @param {number} [arg.pageNo] - Page number. Default is 1.
    
    **/
  getCustomers({ q, pageSize, pageNo } = {}) {
    const queryObj = {};
    queryObj["q"] = q;
    queryObj["page_size"] = pageSize;
    queryObj["page_no"] = pageNo;

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/user/v1.0/company/${this.config.company}/application/${this.applicationId}/customers/list`,
      queryObj,
      {}
    );
  }

  /**
    *
    * @summary: Search users
    * @description: Search users
    * @param {Object} arg - arg object.
    * @param {string} [arg.query] - The search query. This can be a partial or complete name of a either a product, brand or category
    
    **/
  searchUsers({ query } = {}) {
    const queryObj = {};
    queryObj["query"] = query;

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/user/v1.0/company/${this.config.company}/application/${this.applicationId}/customers/search`,
      queryObj,
      {}
    );
  }

  /**
    *
    * @summary: Get platform config
    * @description: Used to get platform config
    * @param {Object} arg - arg object.
    
    **/
  getPlatformConfig({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/user/v1.0/company/${this.config.company}/application/${this.applicationId}/platform/config`,
      queryObj,
      {}
    );
  }

  /**
   *
   * @summary: Update platform config
   * @description: Used to update platform config
   * @param {Object} arg - arg object.
   * @param {PlatformSchema} arg.body
   **/
  updatePlatformConfig({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/user/v1.0/company/${this.config.company}/application/${this.applicationId}/platform/config`,
      queryObj,
      body
    );
  }
}

class Content {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
    *
    * @summary: Get annoucements list
    * @description: Get list of announcements
    * @param {Object} arg - arg object.
    
    **/
  getAnnouncementsList({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/announcements`,
      queryObj,
      {}
    );
  }

  /**
   *
   * @summary: Create an annoucement
   * @description: Create an announcement
   * @param {Object} arg - arg object.
   * @param {AdminAnnouncementSchema} arg.body
   **/
  createAnnouncement({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/announcements`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get annoucement by id
    * @description: Get announcement by id
    * @param {Object} arg - arg object.
    * @param {string} arg.announcementId - Announcement ID
    
    **/
  getAnnouncementById({ announcementId } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/announcements/${announcementId}`,
      queryObj,
      {}
    );
  }

  /**
   *
   * @summary: Update an annoucement
   * @description: Update an announcement
   * @param {Object} arg - arg object.
   * @param {string} arg.announcementId - Announcement ID
   * @param {AdminAnnouncementSchema} arg.body
   **/
  updateAnnouncement({ announcementId, body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/announcements/${announcementId}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update schedule or published status of an annoucement
   * @description: Update schedule or published status of an announcement
   * @param {Object} arg - arg object.
   * @param {string} arg.announcementId - Announcement ID
   * @param {ScheduleSchema} arg.body
   **/
  updateAnnouncementSchedule({ announcementId, body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "patch",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/announcements/${announcementId}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete annoucement by id
    * @description: Delete announcement by id
    * @param {Object} arg - arg object.
    * @param {string} arg.announcementId - Announcement ID
    
    **/
  deleteAnnouncement({ announcementId } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/announcements/${announcementId}`,
      queryObj,
      {}
    );
  }

  /**
    *
    * @summary: Updates a component
    * @description: Updates a component for the given component ID
    * @param {Object} arg - arg object.
    * @param {string} arg.id - ID of component to be fetched
    
    **/
  updateComponent({ id } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/components/${id}`,
      queryObj,
      {}
    );
  }

  /**
    *
    * @summary: Get components by component ID
    * @description: The endpoint fetches the component by component ID
    * @param {Object} arg - arg object.
    * @param {string} arg.id - ID of component to be fetched
    
    **/
  getComponentByID({ id } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/components/${id}`,
      queryObj,
      {}
    );
  }

  /**
    *
    * @summary: Delete a component from the page
    * @description: It deletes a component from the page
    * @param {Object} arg - arg object.
    * @param {string} arg.id - ID of component to be deleted
    
    **/
  deleteComponent({ id } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/components/${id}`,
      queryObj,
      {}
    );
  }

  /**
    *
    * @summary: Get components
    * @description: The endpoint fetches the components
    * @param {Object} arg - arg object.
    
    **/
  getComponents({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/components`,
      queryObj,
      {}
    );
  }

  /**
    *
    * @summary: Get FAQ categories list
    * @description: Get list of FAQ categories
    * @param {Object} arg - arg object.
    
    **/
  getFaqCategories({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/faq/categories`,
      queryObj,
      {}
    );
  }

  /**
    *
    * @summary: Get FAQ category by slug or id
    * @description: Get FAQ category by slug or id
    * @param {Object} arg - arg object.
    * @param {string} arg.idOrSlug - Slug or Id of FAQ Category
    
    **/
  getFaqCategoryBySlugOrId({ idOrSlug } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/faq/category/${idOrSlug}`,
      queryObj,
      {}
    );
  }

  /**
   *
   * @summary: Creates a FAQ category
   * @description: Add Faq Category
   * @param {Object} arg - arg object.
   * @param {CreateFaqCategoryRequestSchema} arg.body
   **/
  createFaqCategory({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/faq/category`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Updates a FAQ category
   * @description: Update Faq Category
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Faq category ID
   * @param {UpdateFaqCategoryRequestSchema} arg.body
   **/
  updateFaqCategory({ id, body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/faq/category/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Deletes a FAQ category
    * @description: Delete Faq Category
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Faq category ID
    
    **/
  deleteFaqCategory({ id } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/faq/category/${id}`,
      queryObj,
      {}
    );
  }

  /**
    *
    * @summary: Get FAQs of a Faq Category id or slug
    * @description: Get FAQs of a Faq Category `id` or `slug`
    * @param {Object} arg - arg object.
    * @param {string} arg.idOrSlug - Faq category ID or slug
    
    **/
  getFaqsByCategoryIdOrSlug({ idOrSlug } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/faq/category/${idOrSlug}/faqs`,
      queryObj,
      {}
    );
  }

  /**
   *
   * @summary: Creates FAQs for category whose `id` is specified
   * @description: Creates FAQs for category whose `id` is specified
   * @param {Object} arg - arg object.
   * @param {string} arg.categoryId - Faq category ID
   * @param {CreateFaqSchema} arg.body
   **/
  addFaqToFaqCategory({ categoryId, body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/faq/category/${categoryId}/faqs`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Updates FAQ
   * @description: Updates FAQ
   * @param {Object} arg - arg object.
   * @param {string} arg.categoryId - Faq category ID
   * @param {string} arg.faqId - Faq ID
   * @param {CreateFaqSchema} arg.body
   **/
  updateFaq({ categoryId, faqId, body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/faq/category/${categoryId}/faq/${faqId}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete FAQ
    * @description: Delete FAQ
    * @param {Object} arg - arg object.
    * @param {string} arg.categoryId - Faq category ID
    * @param {string} arg.faqId - Faq ID
    
    **/
  deleteFaq({ categoryId, faqId } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/faq/category/${categoryId}/faq/${faqId}`,
      queryObj,
      {}
    );
  }

  /**
   *
   * @summary: Create key values for templating
   * @description: Use this to create key-values for templating.
   * @param {Object} arg - arg object.
   * @param {KeyValueRequestBody} arg.body
   **/
  createKeyValue({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/key-values/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get KeyValue by id
    * @description: Use this to fetch a keyvalue by `id`
    * @param {Object} arg - arg object.
    * @param {string} arg.id - The `id` of a keyvalue. Use this parameter to retrieve a particular keyvalue
    
    **/
  getKeyValueByID({ id } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/key-values/${id}`,
      queryObj,
      {}
    );
  }

  /**
   *
   * @summary: Create landing-page
   * @description: Use this to create landing-page.
   * @param {Object} arg - arg object.
   * @param {KeyValueRequestBody} arg.body
   **/
  createLandingPage({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/landing-page/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get legal information
    * @description: Get legal information of application, which includes policy, Terms and Conditions, and FAQ information of application.
    * @param {Object} arg - arg object.
    
    **/
  getLegalInformation({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/legal`,
      queryObj,
      {}
    );
  }

  /**
   *
   * @summary: Save legal information
   * @description: Save legal information of application, which includes Policy, Terms and Conditions, and FAQ information of application.
   * @param {Object} arg - arg object.
   * @param {ApplicationLegal} arg.body
   **/
  updateLegalInformation({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/legal`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get seo of application
    * @description: Get seo of application
    * @param {Object} arg - arg object.
    
    **/
  getSeoConfiguration({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/seo`,
      queryObj,
      {}
    );
  }

  /**
   *
   * @summary: Update seo of application
   * @description: Update seo of application
   * @param {Object} arg - arg object.
   * @param {Seo} arg.body
   **/
  updateSeoConfiguration({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/seo`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get support information
    * @description: Get contact details for customer support. Including emails and phone numbers
    * @param {Object} arg - arg object.
    
    **/
  getSupportInformation({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/support`,
      queryObj,
      {}
    );
  }

  /**
   *
   * @summary: Update support data of application
   * @description: Update support data of application
   * @param {Object} arg - arg object.
   * @param {Support} arg.body
   **/
  updateSupportInformation({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/support`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Creates Tag
   * @description: Create tags
   * @param {Object} arg - arg object.
   * @param {CreateTagRequestSchema} arg.body
   **/
  createTag({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/tags`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Updates a Tag
   * @description: Update tag
   * @param {Object} arg - arg object.
   * @param {CreateTagRequestSchema} arg.body
   **/
  updateTag({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/tags`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete tags for application
    * @description: Delete tags for application
    * @param {Object} arg - arg object.
    
    **/
  deleteAllTags({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/tags`,
      queryObj,
      {}
    );
  }

  /**
    *
    * @summary: Get tags for application
    * @description: Get tags for application
    * @param {Object} arg - arg object.
    
    **/
  getTags({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/tags`,
      queryObj,
      {}
    );
  }

  /**
   *
   * @summary: Adds a Tag
   * @description: Add tag
   * @param {Object} arg - arg object.
   * @param {CreateTagRequestSchema} arg.body
   **/
  addTag({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/tags/add`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Removes a Tag
   * @description: Remove a particular tag
   * @param {Object} arg - arg object.
   * @param {RemoveHandpickedSchema} arg.body
   **/
  removeTag({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/tags/remove/handpicked`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Edits a Tag by Id
   * @description: Edits a particular tag
   * @param {Object} arg - arg object.
   * @param {string} arg.tagId - Tag ID
   * @param {UpdateHandpickedSchema} arg.body
   **/
  editTag({ tagId, body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.company}/application/${this.applicationId}/tags/remove/handpicked/${tagId}`,
      queryObj,
      body
    );
  }
}

class Communication {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }
}

class CompanyProfile {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }
}

class Inventory {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
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
