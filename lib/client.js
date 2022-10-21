
import { createCurrentUserHook, createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

export const config = {

    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true
}

export const Client = createClient(config);

export const urlFor = (source) => imageUrlBuilder(config).image(source);

export const useCurrentUser = createCurrentUserHook(config);


