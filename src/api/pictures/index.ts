import { Picture, PictureApiResponse } from './types';

const PICTURES_HOST = 'https://picsum.photos/v2/list';

const getPictures = async (limit = 100): Promise<PictureApiResponse> => {
  try {
    const res = await fetch(`${PICTURES_HOST}?limit=${limit}`);

    if (!res.ok) {
      console.error('could not load images');
      throw Error;
    }

    const data: Picture[] = await res.json();

    return { data };
  } catch (err) {
    console.error('could not load images');
    throw Error;
  }
};

export { getPictures };
