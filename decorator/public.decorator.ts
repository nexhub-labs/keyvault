import { SetMetadata } from '@nestjs/common';

// This code defines a custom decorator `Public` that can be used to mark routes or methods as public. The `SetMetadata` function from the `@nestjs/common` package is used to attach metadata to the target, which can then be used by guards or interceptors to determine if the route should be accessible without authentication.

// The `IS_PUBLIC_KEY` constant is used as the key for the metadata. This key is then checked by the `AuthGuard` to determine if the route should be accessible without authentication.

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
