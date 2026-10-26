import images from '../data/optimized-images.json';

export const responsiveImages = Object.fromEntries(
  Object.entries(images).flatMap(([source, image]) => [[source, image], [image.src, image]])
);

export function imageSource(source: string) {
  return responsiveImages[source]?.src ?? source;
}
