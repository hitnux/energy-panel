import axios from "axios";

const tokenURL = `${process.env.NEXT_PUBLIC_API}/WSI/api/token`;


export default async function handler(
  req,
  res) {
    try {
        const response = await axios.post(tokenURL, 'username=DashboardWSI&password=d49OfazP5XwD*&grant_type=password');
        res.status(200).json({ token:  response.data.access_token })
    } catch (error) {
        res.status(error.response.status).json({ message: error.message });
    }
}