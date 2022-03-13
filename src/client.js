import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
   projectId: '2ghltg5m',
   dataset: 'production',
   apiVersion: '2022-02-01',
   useCdn: true,
   token: 'skUHAj1qKCXILfofrXsS6llhYhTliCp9VIhDYDFwg7QGW2U3tbOoKYgYHrw8erDCe0EeSYYl4LjaNawuLA7P3Jt3NKVzSpSfMc7VuMWHLvXKkz0gVpl3AJQWEBexbxHU9gwUY4QCKQUEg0hbu7fMStb2wMKEef9UQcGOjEvJ1LgKXvW6mDll'
});


const builder = imageUrlBuilder(client);


export const urlFor = (source) => builder.image(source);