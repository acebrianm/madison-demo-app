import { downsizeImage } from '../../utils/pictureUtils';
import { Picture, PictureApiResponse } from './types';

const PICTURES_HOST = 'https://picsum.photos/v2/list';

const getPictures = async (limit = 100): Promise<PictureApiResponse> => {
  try {
    const res = await fetch(`${PICTURES_HOST}?limit=${limit}`);

    if (!res.ok) {
      console.error('could not load images');
      throw Error;
    }

    const json: Picture[] = await res.json();

    const data: Picture[] = json.map((item) => ({
      ...item,
      /* Downsizing images to 20 percent since they slow the app and take too much space on the cache */
      download_url: downsizeImage(item.download_url),
    }));

    return { data };
  } catch (err) {
    console.error('could not load images');
    throw Error;
  }
};

export { getPictures };
