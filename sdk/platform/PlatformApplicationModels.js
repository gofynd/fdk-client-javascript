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
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ticket`,
      queryObj,
      undefined
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
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ticket/${ticketId}`,
      queryObj,
      undefined
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
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ticket/${ticketId}`,
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
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ticket/${ticketId}/history`,
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
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ticket/${ticketId}/history`,
      queryObj,
      undefined
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
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/form/${slug}`,
      queryObj,
      undefined
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
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/form/${slug}`,
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
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/form`,
      queryObj,
      undefined
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
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/form`,
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
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/video/room/${uniqueName}/token`,
      queryObj,
      undefined
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
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/video/room/${uniqueName}/participants`,
      queryObj,
      undefined
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
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/video/room`,
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
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/video/room`,
      queryObj,
      undefined
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
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/library`,
      queryObj,
      undefined
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
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/library`,
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
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/apply`,
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
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/upgradable`,
      queryObj,
      undefined
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
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/upgrade`,
      queryObj,
      undefined
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
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/public/library`,
      queryObj,
      undefined
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
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/`,
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
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/`,
      queryObj,
      undefined
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
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/fonts`,
      queryObj,
      undefined
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
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}`,
      queryObj,
      undefined
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
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}`,
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
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}`,
      queryObj,
      undefined
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
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/preview`,
      queryObj,
      undefined
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
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/publish`,
      queryObj,
      undefined
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
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/unpublish`,
      queryObj,
      undefined
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
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/archive`,
      queryObj,
      undefined
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
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/unarchive`,
      queryObj,
      undefined
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
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/list`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Search users
    * @description: Search users
    * @param {Object} arg - arg object.
    * @param {string} [arg.q] - The search query. This can be a partial or complete name of a either a product, brand or category
    
    **/
  searchUsers({ q } = {}) {
    const queryObj = {};
    queryObj["q"] = q;

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/search`,
      queryObj,
      undefined
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
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/platform/config`,
      queryObj,
      undefined
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
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/platform/config`,
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
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements`,
      queryObj,
      undefined
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
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements`,
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
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements/${announcementId}`,
      queryObj,
      undefined
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
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements/${announcementId}`,
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
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements/${announcementId}`,
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
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements/${announcementId}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create blog
   * @description: Use this to create a blog.
   * @param {Object} arg - arg object.
   * @param {BlogRequest} arg.body
   **/
  createBlog({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/blogs/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get blogs
    * @description: Use this to get blogs.
    * @param {Object} arg - arg object.
    
    **/
  getBlogs({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/blogs/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update blog
   * @description: Use this to update blog.
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Blog Id
   * @param {BlogRequest} arg.body
   **/
  updateBlog({ id, body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/blogs/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete blogs
    * @description: Use this to delete blogs.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Blog Id
    
    **/
  deleteBlog({ id } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/blogs/${id}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get components by component Id
    * @description: The endpoint fetches the component by component Id
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - slug of page to be fetched
    
    **/
  getComponentById({ slug } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/blogs/${slug}`,
      queryObj,
      undefined
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
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/categories`,
      queryObj,
      undefined
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
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${idOrSlug}`,
      queryObj,
      undefined
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
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category`,
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
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${id}`,
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
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${id}`,
      queryObj,
      undefined
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
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${idOrSlug}/faqs`,
      queryObj,
      undefined
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
  addFaq({ categoryId, body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${categoryId}/faqs`,
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
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${categoryId}/faq/${faqId}`,
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
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${categoryId}/faq/${faqId}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get frequently asked question
    * @description: Get frequently asked questions list. These will be helpful for users to using website.
    * @param {Object} arg - arg object.
    * @param {string} arg.idOrSlug - Slug or Id of FAQ
    
    **/
  getFaqByIdOrSlug({ idOrSlug } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/${idOrSlug}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get landing-pages
    * @description: Use this to get landing-pages.
    * @param {Object} arg - arg object.
    
    **/
  getLandingPages({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/landing-page/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create landing-page
   * @description: Use this to create landing-page.
   * @param {Object} arg - arg object.
   * @param {LandingPageRequest} arg.body
   **/
  createLandingPage({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/landing-page/`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update landing-page
   * @description: Use this to update landing-page.
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Landing page ID
   * @param {LandingPageRequest} arg.body
   **/
  updateLandingPage({ id, body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/landing-page/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete landing-page
    * @description: Use this to delete landing-page.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Landing page ID
    
    **/
  deleteLandingPage({ id } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/landing-page/${id}`,
      queryObj,
      undefined
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
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/legal`,
      queryObj,
      undefined
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
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/legal`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get navigations
    * @description: Use this to get navigations.
    * @param {Object} arg - arg object.
    * @param {string} arg.devicePlatform - Device platform
    
    **/
  getNavigations({ devicePlatform } = {}) {
    const queryObj = {};
    queryObj["device_platform"] = devicePlatform;

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create navigation
   * @description: Use this to create navigation.
   * @param {Object} arg - arg object.
   * @param {NavigationRequest} arg.body
   **/
  createNavigation({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get default navigations
    * @description: Use this to get default navigations.
    * @param {Object} arg - arg object.
    
    **/
  getDefaultNavigations({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/default`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get navigation by slug
    * @description: Use this to get navigation by slug.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - Slug
    * @param {string} arg.devicePlatform - Device platform
    
    **/
  getNavigationBySlug({ slug, devicePlatform } = {}) {
    const queryObj = {};
    queryObj["device_platform"] = devicePlatform;

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/${slug}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update navigation
   * @description: Use this to update navigation.
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Navigation ID
   * @param {NavigationRequest} arg.body
   **/
  updateNavigation({ id, body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete navigation
    * @description: Use this to delete navigation.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Navigation ID
    
    **/
  deleteNavigation({ id } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/${id}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get page meta
    * @description: Use this to get Page Meta.
    * @param {Object} arg - arg object.
    
    **/
  getPageMeta({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/meta`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get page spec
    * @description: Use this to get page spec.
    * @param {Object} arg - arg object.
    
    **/
  getPageSpec({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/spec`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create page
   * @description: Use this to create a page.
   * @param {Object} arg - arg object.
   * @param {PageRequest} arg.body
   **/
  createPage({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get pages
    * @description: Use this to get pages.
    * @param {Object} arg - arg object.
    
    **/
  getPages({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create page preview
   * @description: Use this to create a page preview.
   * @param {Object} arg - arg object.
   * @param {PageRequest} arg.body
   **/
  createPagePreview({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/preview/`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update page
   * @description: Use this to update page.
   * @param {Object} arg - arg object.
   * @param {string} arg.slug - Page publish slug
   * @param {PagePublishRequest} arg.body
   **/
  updatePagePreview({ slug, body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/publish/${slug}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update page
   * @description: Use this to update page.
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Page Id
   * @param {PageRequest} arg.body
   **/
  updatePage({ id, body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete page
    * @description: Use this to delete page.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Page Id
    
    **/
  deletePage({ id } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/${id}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get pages by component Id
    * @description: The endpoint fetches the component by component Id
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - Slug of page to be fetched
    
    **/
  getPageBySlug({ slug } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/${slug}`,
      queryObj,
      undefined
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
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/seo`,
      queryObj,
      undefined
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
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/seo`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get slideshows
    * @description: Use this to get slideshows.
    * @param {Object} arg - arg object.
    * @param {string} arg.devicePlatform - Device platform
    
    **/
  getSlideshows({ devicePlatform } = {}) {
    const queryObj = {};
    queryObj["device_platform"] = devicePlatform;

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/slideshows/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create slideshow
   * @description: Use this to create slideshow.
   * @param {Object} arg - arg object.
   * @param {SlideshowRequest} arg.body
   **/
  createSlideshow({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/slideshows/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get slideshow by slug
    * @description: Use this to get slideshow by slug.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - Slug
    * @param {string} arg.devicePlatform - Device platform
    
    **/
  getSlideshowBySlug({ slug, devicePlatform } = {}) {
    const queryObj = {};
    queryObj["device_platform"] = devicePlatform;

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/slideshows/${slug}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update slideshow
   * @description: Use this to update slideshow.
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Slideshow ID
   * @param {SlideshowRequest} arg.body
   **/
  updateSlideshow({ id, body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/slideshows/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete slideshow
    * @description: Use this to delete slideshow.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Slideshow ID
    
    **/
  deleteSlideshow({ id } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/slideshows/${id}`,
      queryObj,
      undefined
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
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/support`,
      queryObj,
      undefined
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
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/support`,
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
  createInjectableTag({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags`,
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
  updateInjectableTag({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags`,
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
  deleteAllInjectableTags({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get tags for application
    * @description: Get tags for application
    * @param {Object} arg - arg object.
    
    **/
  getInjectableTags({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Adds a Tag
   * @description: Add tag
   * @param {Object} arg - arg object.
   * @param {CreateTagRequestSchema} arg.body
   **/
  addInjectableTag({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags/add`,
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
  removeInjectableTag({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags/remove/handpicked`,
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
  editInjectableTag({ tagId, body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags/remove/handpicked/${tagId}`,
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

  /**
    *
    * @summary: Get campaigns
    * @description: Get campaigns
    * @param {Object} arg - arg object.
    
    **/
  getCampaigns({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/campaigns/campaigns`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create campaign
   * @description: Create campaign
   * @param {Object} arg - arg object.
   * @param {CampaignReq} arg.body
   **/
  createCampaign({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/campaigns/campaigns`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get campaign by id
    * @description: Get campaign by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Campaign id
    
    **/
  getCampaignById({ id } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/campaigns/campaigns/${id}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update campaign by id
   * @description: Update campaign by id
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Campaign id
   * @param {CampaignReq} arg.body
   **/
  updateCampaignById({ id, body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/campaigns/campaigns/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get stats of campaign by id
    * @description: Get stats of campaign by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Campaign id
    
    **/
  getStatsOfCampaignById({ id } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/campaigns/get-stats/${id}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get audiences
    * @description: Get audiences
    * @param {Object} arg - arg object.
    
    **/
  getAudiences({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/datasources`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create audience
   * @description: Create audience
   * @param {Object} arg - arg object.
   * @param {AudienceReq} arg.body
   **/
  createAudience({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/datasources`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Get bigquery headers
   * @description: Get bigquery headers
   * @param {Object} arg - arg object.
   * @param {BigqueryHeadersReq} arg.body
   **/
  getBigqueryHeaders({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/bigquery-headers`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get audience by id
    * @description: Get audience by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Audience id
    
    **/
  getAudienceById({ id } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/datasources/${id}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update audience by id
   * @description: Update audience by id
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Audience id
   * @param {AudienceReq} arg.body
   **/
  updateAudienceById({ id, body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/datasources/${id}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Get n sample records from csv
   * @description: Get n sample records from csv
   * @param {Object} arg - arg object.
   * @param {GetNRecordsCsvReq} arg.body
   **/
  getNSampleRecordsFromCsv({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/get-n-records`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get email providers
    * @description: Get email providers
    * @param {Object} arg - arg object.
    
    **/
  getEmailProviders({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/providers`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create email provider
   * @description: Create email provider
   * @param {Object} arg - arg object.
   * @param {EmailProviderReq} arg.body
   **/
  createEmailProvider({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/providers`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get email provider by id
    * @description: Get email provider by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Email provider id
    
    **/
  getEmailProviderById({ id } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/providers/${id}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update email provider by id
   * @description: Update email provider by id
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Email provider id
   * @param {EmailProviderReq} arg.body
   **/
  updateEmailProviderById({ id, body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/providers/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get email templates
    * @description: Get email templates
    * @param {Object} arg - arg object.
    
    **/
  getEmailTemplates({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/templates`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create email template
   * @description: Create email template
   * @param {Object} arg - arg object.
   * @param {EmailTemplateReq} arg.body
   **/
  createEmailTemplate({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/templates`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get system email templates
    * @description: Get system email templates
    * @param {Object} arg - arg object.
    
    **/
  getSystemEmailTemplates({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/system-templates`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get email template by id
    * @description: Get email template by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Email template id
    
    **/
  getEmailTemplateById({ id } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/templates/${id}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update email template by id
   * @description: Update email template by id
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Email template id
   * @param {EmailTemplateReq} arg.body
   **/
  updateEmailTemplateById({ id, body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/templates/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete email template by id
    * @description: Delete email template by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Email template id
    
    **/
  deleteEmailTemplateById({ id } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "delete",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/templates/${id}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get event subscriptions
    * @description: Get event subscriptions
    * @param {Object} arg - arg object.
    
    **/
  getEventSubscriptions({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/event/event-subscriptions`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get jobs
    * @description: Get jobs
    * @param {Object} arg - arg object.
    
    **/
  getJobs({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/jobs/jobs`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Trigger campaign job
   * @description: Trigger campaign job
   * @param {Object} arg - arg object.
   * @param {TriggerJobRequest} arg.body
   **/
  triggerCampaignJob({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/jobs/trigger-job`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get job logs
    * @description: Get job logs
    * @param {Object} arg - arg object.
    
    **/
  getJobLogs({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/jobs/logs`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get communication logs
    * @description: Get communication logs
    * @param {Object} arg - arg object.
    
    **/
  getCommunicationLogs({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/log`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get sms providers
    * @description: Get sms providers
    * @param {Object} arg - arg object.
    
    **/
  getSmsProviders({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/providers`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create sms provider
   * @description: Create sms provider
   * @param {Object} arg - arg object.
   * @param {SmsProviderReq} arg.body
   **/
  createSmsProvider({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/providers`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get sms provider by id
    * @description: Get sms provider by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Sms provider id
    
    **/
  getSmsProviderById({ id } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/providers/${id}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update sms provider by id
   * @description: Update sms provider by id
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Sms provider id
   * @param {SmsProviderReq} arg.body
   **/
  updateSmsProviderById({ id, body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/providers/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get sms templates
    * @description: Get sms templates
    * @param {Object} arg - arg object.
    
    **/
  getSmsTemplates({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/templates`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create sms template
   * @description: Create sms template
   * @param {Object} arg - arg object.
   * @param {SmsTemplateReq} arg.body
   **/
  createSmsTemplate({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/templates`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get sms template by id
    * @description: Get sms template by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Sms template id
    
    **/
  getSmsTemplateById({ id } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/templates/${id}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update sms template by id
   * @description: Update sms template by id
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Sms template id
   * @param {SmsTemplateReq} arg.body
   **/
  updateSmsTemplateById({ id, body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/templates/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete sms template by id
    * @description: Delete sms template by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Sms template id
    
    **/
  deleteSmsTemplateById({ id } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "delete",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/templates/${id}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get system sms templates
    * @description: Get system sms templates
    * @param {Object} arg - arg object.
    
    **/
  getSystemSystemTemplates({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/system-templates`,
      queryObj,
      undefined
    );
  }
}

class Payment {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
    *
    * @summary: Get All Brand Payment Gateway Config Secret
    * @description: Get All Brand Payment Gateway Config Secret
    * @param {Object} arg - arg object.
    
    **/
  getBrandPaymentGatewayConfig({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/aggregator/request`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Save Config Secret For Brand Payment Gateway
   * @description: Save Config Secret For Brand Payment Gateway
   * @param {Object} arg - arg object.
   * @param {PaymentGatewayConfigRequest} arg.body
   **/
  saveBrandPaymentGatewayConfig({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/aggregator/request`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Save Config Secret For Brand Payment Gateway
   * @description: Save Config Secret For Brand Payment Gateway
   * @param {Object} arg - arg object.
   * @param {PaymentGatewayConfigRequest} arg.body
   **/
  updateBrandPaymentGatewayConfig({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/aggregator/request`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get All Valid Payment Options
    * @description: Use this API to get Get All Valid Payment Options for making payment
    * @param {Object} arg - arg object.
    * @param {boolean} arg.refresh - 
    * @param {string} arg.requestType - 
    
    **/
  getPaymentModeRoutes({ refresh, requestType } = {}) {
    const queryObj = {};
    queryObj["refresh"] = refresh;
    queryObj["request_type"] = requestType;

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/options`,
      queryObj,
      undefined
    );
  }
}

class Order {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
    *
    * @summary: Track Shipment by shipment id, for application based on application Id
    * @description: Shipment Track
    * @param {Object} arg - arg object.
    * @param {string} arg.shipmentId - Shipment Id
    
    **/
  trackShipmentPlatform({ shipmentId } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/application/${this.applicationId}/orders/shipments/${shipmentId}/track`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Track Order by order id, for application based on application Id
    * @description: Order Track
    * @param {Object} arg - arg object.
    * @param {string} arg.orderId - Order Id
    
    **/
  trackOrder({ orderId } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/order/v1.0/company/${this.config.companyId}/application/${this.applicationId}/orders/${orderId}/track`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get all failed orders application wise
    * @description: Failed Orders
    * @param {Object} arg - arg object.
    
    **/
  failedOrders({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/application/${this.applicationId}/orders/failed`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Reprocess order by order id
    * @description: Order Reprocess
    * @param {Object} arg - arg object.
    * @param {string} arg.orderId - Order Id
    
    **/
  reprocessOrder({ orderId } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/order/v1.0/company/${this.config.companyId}/application/${this.applicationId}/orders/${orderId}/reprocess`,
      queryObj,
      undefined
    );
  }
}

class Assets {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   *
   * @summary: Copy Files
   * @description: Copy Files
   * @param {Object} arg - arg object.
   * @param {boolean} [arg.sync] - sync
   * @param {BulkRequest} arg.body
   **/
  appCopyFiles({ body, sync } = {}) {
    const queryObj = {};
    queryObj["sync"] = sync;

    return APIClient.execute(
      this.config,
      "post",
      `/service/application/assets/v1.0/uploads/company/${this.config.companyId}/application/${this.applicationId}/copy/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Browse Files
    * @description: Browse Files
    * @param {Object} arg - arg object.
    * @param {string} arg.namespace - bucket name
    
    **/
  appBrowse({ namespace } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/application/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/namespaces/${namespace}/browse/`,
      queryObj,
      undefined
    );
  }
}

class Share {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   *
   * @summary: Create short link
   * @description: Create short link
   * @param {Object} arg - arg object.
   * @param {ShortLinkReq} arg.body
   **/
  createShortLink({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/share/v1.0/company/${this.config.companyId}/application/${this.applicationId}/links/short-link`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get short links
    * @description: Get short links
    * @param {Object} arg - arg object.
    * @param {string} [arg.pageNo] - Current page number
    * @param {string} [arg.pageSize] - Current page size
    * @param {string} [arg.createdBy] - Short link creator
    * @param {string} [arg.active] - Short link active status
    * @param {string} [arg.q] - Search text for original and short url
    
    **/
  getShortLinks({ pageNo, pageSize, createdBy, active, q } = {}) {
    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;
    queryObj["created_by"] = createdBy;
    queryObj["active"] = active;
    queryObj["q"] = q;

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/share/v1.0/company/${this.config.companyId}/application/${this.applicationId}/links/short-link`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get short link by hash
    * @description: Get short link by hash
    * @param {Object} arg - arg object.
    * @param {string} arg.hash - Hash of short url
    
    **/
  getShortLinkByHash({ hash } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/share/v1.0/company/${this.config.companyId}/application/${this.applicationId}/links/short-link/${hash}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Update short link by id
    * @description: Update short link by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Short link document identifier
    
    **/
  updateShortLinkById({ id } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "patch",
      `/services/platform/share/v1.0/company/${this.config.companyId}/application/${this.applicationId}/links/short-link/${id}`,
      queryObj,
      undefined
    );
  }
}

class Cart {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
    *
    * @summary: Get with single coupon details or coupon list
    * @description: Get coupon list with pagination
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - 
    * @param {number} [arg.pageSize] - 
    * @param {boolean} [arg.isArchived] - 
    * @param {string} [arg.title] - 
    * @param {boolean} [arg.isPublic] - 
    * @param {boolean} [arg.isDisplay] - 
    * @param {string} [arg.typeSlug] - 
    * @param {string} [arg.code] - 
    
    **/
  getCoupons({
    pageNo,
    pageSize,
    isArchived,
    title,
    isPublic,
    isDisplay,
    typeSlug,
    code,
  } = {}) {
    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;
    queryObj["is_archived"] = isArchived;
    queryObj["title"] = title;
    queryObj["is_public"] = isPublic;
    queryObj["is_display"] = isDisplay;
    queryObj["type_slug"] = typeSlug;
    queryObj["code"] = code;

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/coupon`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create new coupon
   * @description: Create new coupon
   * @param {Object} arg - arg object.
   * @param {CouponAdd} arg.body
   **/
  createCoupon({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/coupon`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get with single coupon details or coupon list
    * @description: Get single coupon details with `id` in path param
    * @param {Object} arg - arg object.
    * @param {string} arg.id - 
    
    **/
  getCouponById({ id } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/coupon/${id}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update existing coupon configuration
   * @description: Update coupon with id sent in `id`
   * @param {Object} arg - arg object.
   * @param {string} arg.id -
   * @param {CouponUpdate} arg.body
   **/
  updateCoupon({ id, body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/coupon/${id}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update coupon archive state and schedule
   * @description: Update archive/unarchive and change schedule for coupon
   * @param {Object} arg - arg object.
   * @param {string} arg.id -
   * @param {CouponPartialUpdate} arg.body
   **/
  updateCouponPartially({ id, body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "patch",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/coupon/${id}`,
      queryObj,
      body
    );
  }
}

module.exports = {
  Lead,
  Theme,
  User,
  Content,
  Communication,
  Payment,
  Order,
  Assets,
  Share,
  Cart,
};
