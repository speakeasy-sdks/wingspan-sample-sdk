<!-- Start SDK Example Usage -->


```typescript
import { WingspanUsersAPI } from "Wingspan-Users-API";

(async () => {
    const sdk = new WingspanUsersAPI({
        bearerAuth: "",
    });

    const res = await sdk.wingspanUsersAPI.deleteUsersAccountId({
        id: "<ID>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->