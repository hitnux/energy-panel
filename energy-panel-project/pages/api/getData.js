import axios from "axios";
import fs from 'fs';
import oldData from '../../data.json';
import settings from "../../settings.json";

const urls = {
    GES_Enerji_Uretimi: `${process.env.NEXT_PUBLIC_API}/WSI/api/values/ApplicationView_Logics_VirtualObjects_Dashboard_Enerji_Tuketimleri_GES_Enerji_Uretimi`,
    Hastane_Enerji_Tuketimi: `${process.env.NEXT_PUBLIC_API}/WSI/api/values/ApplicationView_Logics_VirtualObjects_Dashboard_Enerji_Tuketimleri_Hastane_Enerji_Tuketimi`,
    Klima_Santralleri_Enerji_Tuketimi: `${process.env.NEXT_PUBLIC_API}/WSI/api/values/ApplicationView_Logics_VirtualObjects_Dashboard_Enerji_Tuketimleri_Klima_Santralleri_Enerji_Tuketimi_Son_1Ay`,
    Priz_Yukleri_Enerji_Tuketimi: `${process.env.NEXT_PUBLIC_API}/WSI/api/values/ApplicationView_Logics_VirtualObjects_Dashboard_Enerji_Tuketimleri_Priz_Yukleri_Enerji_Tuketimi_Son_1Ay`,
    Sogutma_Sistemleri_Enerji_Tuketimi: `${process.env.NEXT_PUBLIC_API}/WSI/api/values/ApplicationView_Logics_VirtualObjects_Dashboard_Enerji_Tuketimleri_Sogutma_Sistemleri_Enerji_Tuketimi_Son_1Ay`,
}

export default async function handler(
  req,
  res) {
    const opt = {
        headers: {
            Authorization: req.headers.authorization
        }
    };

    try {
        const GES_Enerji_Uretimi = await axios.get(urls["GES_Enerji_Uretimi"], opt);
        const Hastane_Enerji_Tuketimi = await axios.get(urls["Hastane_Enerji_Tuketimi"], opt);
        const Klima_Santralleri_Enerji_Tuketimi = await axios.get(urls["Klima_Santralleri_Enerji_Tuketimi"], opt);
        const Priz_Yukleri_Enerji_Tuketimi = await axios.get(urls["Priz_Yukleri_Enerji_Tuketimi"], opt);
        const Sogutma_Sistemleri_Enerji_Tuketimi = await axios.get(urls["Sogutma_Sistemleri_Enerji_Tuketimi"], opt);
        const response = [
            {
                type: 'GES_Enerji_Uretimi',
                title: settings.Data["GES_Enerji_Uretimi"].title,
                icon: settings.Data["GES_Enerji_Uretimi"].icon,
                data: GES_Enerji_Uretimi.data.find((n) => n.Value?.Value !== "0") ? GES_Enerji_Uretimi.data : oldData.find((d) => d.type === "GES_Enerji_Uretimi")
            },
            {
                type: 'Hastane_Enerji_Tuketimi',
                title: settings.Data["Hastane_Enerji_Tuketimi"].title,
                icon: settings.Data["Hastane_Enerji_Tuketimi"].icon,
                data: Hastane_Enerji_Tuketimi.data.find((n) => n.Value?.Value !== "0") ? Hastane_Enerji_Tuketimi.data : oldData.find((d) => d.type === "Hastane_Enerji_Tuketimi")
            },
            {
                type: 'Klima_Santralleri_Enerji_Tuketimi',
                title: settings.Data["Klima_Santralleri_Enerji_Tuketimi"].title,
                icon: settings.Data["Klima_Santralleri_Enerji_Tuketimi"].icon,
                data: Klima_Santralleri_Enerji_Tuketimi.data.find((n) => n.Value?.Value !== "0") ? Klima_Santralleri_Enerji_Tuketimi.data : oldData.find((d) => d.type === "Klima_Santralleri_Enerji_Tuketimi")
            },
            {
                type: 'Priz_Yukleri_Enerji_Tuketimi',
                title: settings.Data["Priz_Yukleri_Enerji_Tuketimi"].title,
                icon: settings.Data["Priz_Yukleri_Enerji_Tuketimi"].icon,
                data: Priz_Yukleri_Enerji_Tuketimi.data.find((n) => n.Value?.Value !== "0") ? Priz_Yukleri_Enerji_Tuketimi.data : oldData.find((d) => d.type === "Priz_Yukleri_Enerji_Tuketimi")
            },
            {
                type: 'Sogutma_Sistemleri_Enerji_Tuketimi',
                title: settings.Data["Sogutma_Sistemleri_Enerji_Tuketimi"].title,
                icon: settings.Data["Sogutma_Sistemleri_Enerji_Tuketimi"].icon,
                data: Sogutma_Sistemleri_Enerji_Tuketimi.data.find((n) => n.Value?.Value !== "0") ? Sogutma_Sistemleri_Enerji_Tuketimi.data : oldData.find((d) => d.type === "Sogutma_Sistemleri_Enerji_Tuketimi")
            }
        ];

        fs.writeFileSync('data.json', JSON.stringify(response));


        res.status(200).json(response)
    } catch (error) {
        res.status(error.response.status).json({ message: error.message });
    }
}