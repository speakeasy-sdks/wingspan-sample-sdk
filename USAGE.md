<!-- Start SDK Example Usage [usage] -->
```typescript
import { WingspanUsersAPI } from "Wingspan-Users-API";

async function run() {
    const sdk = new WingspanUsersAPI({
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const res = await sdk.deleteUsersAccountId({
        id: "<ID>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->