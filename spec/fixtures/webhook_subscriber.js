module.exports = {
    "id": 16,
    "name": "Test 2",
    "webhook_url": "http://localdev.fyndx0.de/v1/webhooks",
    "association": {
        "company_id": 1,
        "criteria": "ALL"
    },
    "status": "active",
    "auth_meta": {
        "type": "hmac",
        "secret": "abc"
    },
    "email_id": "brijeshgajjar@gofynd.com",
    "created_on": "2021-08-30T13:28:28.223Z",
    "updated_on": "2021-08-30T13:28:28.223Z",
    "modified_by": "Brijesh Gajjar",
    "event_configs": [
        {
            "id": 1,
            "event_name": "integration",
            "event_type": "update",
            "event_category": "company",
            "version": "1",
            "display_name": "store integration config",
            "description": "this event is for store integration config",
            "created_on": "2021-05-06T09:41:50.379Z",
            "updated_on": "2021-05-06T09:41:50.379Z",
            "subscriber_event_mapping": {
                "id": 67,
                "event_id": 1,
                "subscriber_id": 16,
                "created_on": "2021-08-30T13:28:28.229Z"
            }
        }
    ]
}