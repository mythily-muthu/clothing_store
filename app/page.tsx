import FeelTheReel from "@/components/FeelTheReel";
import NewArrivals from "@/components/NewArrivals";
import Slider from "@/components/Slider";
import TheBottomWearLounge from "@/components/TheBottomWearLounge";
import WardrobeFavourites from "@/components/WardrobeFavourites";

export default function Home() {
  return (
    <>
      <Slider />
      <NewArrivals />
      <FeelTheReel />
      <WardrobeFavourites />
      <TheBottomWearLounge />
    </>
  );
}
