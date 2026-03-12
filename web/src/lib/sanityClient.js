import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'dzbspuj2',
  dataset: 'production',
  useCdn: true,       // usa la CDN de Sanity para respuestas más rápidas
  apiVersion: '2024-01-01',
});

// Helper para construir URLs de imágenes desde un asset de Sanity
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
