import type { NextApiResponse } from "next";
import LRUCache from "lru-cache";
// handleRequestCancellation?: () => AbortController
//
type CancelObject<T> = {
  [P in keyof T]: T[P] & { handleRequestCancellation?: () => AbortController };
};

export function defineCancelApiObject(apiObject: any) {
  // an object that will contain a cancellation handler
  // associated to each API property name in the apiObject API object
  const cancelApiObject: CancelObject<any> = {};

  // each property in the apiObject API layer object
  // is associated with a function that defines an API call

  // this loop iterates over each API property name
  Object.getOwnPropertyNames(apiObject).forEach((apiPropertyName) => {
    const cancellationControllerObject: {
      controller: AbortController | undefined;
    } = {
      controller: undefined,
    };

    // associating the request cancellation handler with the API property name
    cancelApiObject[apiPropertyName] = {
      handleRequestCancellation: () => {
        // if the controller already exists,
        // canceling the request
        if (cancellationControllerObject.controller) {
          // canceling the request and returning this custom message
          cancellationControllerObject.controller.abort();
        }

        // generating a new controller
        // with the AbortController factory
        cancellationControllerObject.controller = new AbortController();

        return cancellationControllerObject.controller;
      },
    };
  });

  return cancelApiObject;
}

type Options = {
  uniqueTokenPerInterval?: number;
  interval?: number;
};

export function rateLimit(options?: Options) {
  const tokenCache = new LRUCache({
    max: options?.uniqueTokenPerInterval || 500,
    ttl: options?.interval || 60000,
  });

  return {
    check: (res: NextApiResponse, limit: number, token: string) =>
      new Promise<void>((resolve, reject) => {
        const tokenCount = (tokenCache.get(token) as number[]) || [0];
        if (tokenCount[0] === 0) {
          tokenCache.set(token, tokenCount);
        }
        tokenCount[0] += 1;

        const currentUsage = tokenCount[0];
        const isRateLimited = currentUsage >= limit;
        res.setHeader("X-RateLimit-Limit", limit);
        res.setHeader(
          "X-RateLimit-Remaining",
          isRateLimited ? 0 : limit - currentUsage,
        );

        return isRateLimited ? reject() : resolve();
      }),
  };
}

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}
