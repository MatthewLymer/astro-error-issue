import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async (context, next) => {
    console.log("Request starting", context.request.url);

    try {
        const response = await next();

        console.log("Request completed", context.request.url, response.status);

        return response;
    } catch (err) {
        console.log("Request errored", context.request.url, err);
        throw err;
    }
});
