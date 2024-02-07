import Slider from "@/components/Slider";

const v2Settings = {
  Slider: {
    delay: 16000,
    slides: [
      {
        id: 2,
        title: "Slide 2",
        description: "Slide 2 Description",
        image: "/slide1.png",
      },
      {
        id: 3,
        title: "Slide 3",
        description: "Slide 3 Description",
        image: "/slide2.png",
      },
      {
        id: 4,
        title: "Slide 4",
        description: "Slide 4 Description",
        image: "/slide3.png",
      },
      {
        id: 5,
        title: "Slide 5",
        description: "Slide 5 Description",
        image: "/slide5.png",
      },
    ],
  },
};

export default function Home() {
  return (
    <main>
      <Slider settings={v2Settings} />
    </main>
  );
}
