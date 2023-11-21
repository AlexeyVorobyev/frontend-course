import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IGraphsPayload} from "./types/graphs";

const disabledAuthTokenEndpoints = [
    'auth',
]
export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['graphs'],
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_APP_API_HOST,
        prepareHeaders: (headers, api) => {
            if (disabledAuthTokenEndpoints.includes(api.endpoint)) {
                return headers
            }
            headers.set('Authorization', `testdatabase`)
            return headers
        }
    }),
    endpoints: () => ({})
})

type TConstructQueryStringConfig = IGraphsPayload

export const constructQueryString = (config: TConstructQueryStringConfig): string => {
    let resString = '?'

    for (const key of Object.keys(config)) {
        resString += `${key}=${config[key as keyof TConstructQueryStringConfig]}&`
    }

    console.log('DEBUG QUERYPARAMS', resString)

    return resString === '?' ? '' : resString
}