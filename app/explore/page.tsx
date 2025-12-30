import ExplorePage from "@/components/pages/explore/ExplorePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Explore Nathdwara & Beyond - Tourist Attractions Near NathBliss Hotels",
  description:
    "Discover spiritual temples, historic forts, serene lakes, and natural wonders near NathBliss Hotels. Explore Shreenathji Temple, Kumbhalgarh Fort, Pichola Lake, and more attractions in and around Nathdwara, Rajasthan.",
  keywords:
    "Nathdwara attractions, Shreenathji Temple, places to visit Nathdwara, Rajasthan tourism, Kumbhalgarh Fort, Udaipur lakes, spiritual tours, religious sites Rajasthan",
};

export default function Explore() {
  return <ExplorePage />;
}
