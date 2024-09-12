import axios from 'axios';

type GetShortenUrlProps = { url: string,  };
type GetShortenUrl = (props: GetShortenUrlProps) => Promise<string>

export const getShortenUrl: GetShortenUrl = async ({ url }) => {
    const res = await axios.post(`${process.env.API_URL}/shorten`, {
        url
    });

    return res.data.shortUrl;
}