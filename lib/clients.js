import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'm0v9ff4c',
  dataset: 'production',
  apiVersion: '2022-06-08',
  useCdn: true,
  token: 'sk9Nv2UCT3IFKj3L3KGqgeaKP7zzEBkOYSYN4b1DpuDv7FIUawS48hOFpAIUJFXAwMZhuKimuZM0L0QX7sI47PckACNXZ1BKeGemqMIWik9rUs7alpHeuKtyF6fINj9x1d2tJAjYg6eftUJEwLazlH7bxRYFJ6nfdquk69x6qvgXQEBJwqES'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);