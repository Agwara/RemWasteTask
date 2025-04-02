
import { useState, useEffect } from "react";
import ProgressHeader from "@/components/ProgressHeader";
import SkipCard from "@/components/SkipCard";
import FooterDrawer from "@/components/FooterDrawer";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/api/fetchData";
interface Skip {
  id: number;
  size: number;
  price: number;
  yardSize: number;
  privateOnly: boolean;
}

const API_URL = "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"

const Index = () => {
  const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { data, error, isLoading } = useQuery({
    queryKey: ["data", API_URL], 
    queryFn: () => fetchData(API_URL),
  });

  // Assuming the API returns an array, map the API data to your Skip interface.
  const fetchedSkips: Skip[] =
  Array.isArray(data) && data.length > 0
    ? data.map((item: any) => ({
        id: item.id,
        size: item.size,
        price: item.price_before_vat,
        yardSize: item.size, 
        privateOnly: !item.allowed_on_road, 
      }))
    : [];

  // Optional: Fallback to static data if no data is returned.
  const staticSkips: Skip[] = [
    { id: 1, size: 4, price: 218, yardSize: 4, privateOnly: false },
    { id: 2, size: 5, price: 260, yardSize: 5, privateOnly: true },
    { id: 3, size: 6, price: 296, yardSize: 6, privateOnly: false },
    { id: 4, size: 8, price: 294, yardSize: 8, privateOnly: false },
    { id: 5, size: 10, price: 369, yardSize: 10, privateOnly: true },
    { id: 6, size: 12, price: 407, yardSize: 12, privateOnly: true },
    { id: 7, size: 14, price: 477, yardSize: 14, privateOnly: true },
    { id: 8, size: 16, price: 571, yardSize: 16, privateOnly: false },
    { id: 9, size: 20, price: 763, yardSize: 20, privateOnly: true },
    { id: 10, size: 40, price: 836, yardSize: 40, privateOnly: true },
  ];

  const skips: Skip[] = fetchedSkips.length > 0 ? fetchedSkips : staticSkips;
  const selectedSkip = skips.find((skip) => skip.id === selectedSkipId) || null;

  const handleSkipSelect = (skipId: number) => {
    setSelectedSkipId(skipId);
    setIsDrawerOpen(true);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading skips</div>;

  return (
    <div className="min-h-screen pb-20 flex flex-col">
      <ProgressHeader currentStep={3} />
      
      <div className="max-w-6xl mx-auto w-full px-4">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold text-center mb-4 text-[white]">Choose Your Skip Size</h1>
          <p className="text-gray-400 text-center mb-8">Select the skip size that best suits your needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {skips.map((skip) => (
            <SkipCard
              key={skip.id}
              size={skip.size}
              price={skip.price}
              yardSize={skip.yardSize}
              privateOnly={skip.privateOnly}
              selected={skip.id === selectedSkipId}
              onClick={() => handleSkipSelect(skip.id)}
            />
          ))}
        </div>
      </div>
      
      <FooterDrawer
        selectedSkip={selectedSkip}
        isOpen={isDrawerOpen}
      />
    </div>
  );
};

export default Index;
