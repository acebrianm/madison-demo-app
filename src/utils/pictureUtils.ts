/* Receives a large image from the documented Pictures API and reduces the size 80% */
export const downsizeImage = (image: string): string => {
  const splitImage: string[] = image.split('/');
  const reducedWidth: number = Math.floor(Number(splitImage[5]) * 0.2);
  const reducedHeight: number = Math.floor(Number(splitImage[6]) * 0.2);

  splitImage[5] = reducedWidth.toString();
  splitImage[6] = reducedHeight.toString();

  return splitImage.join('/');
};
