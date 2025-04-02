
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterDrawerProps {
  selectedSkip: {
    size: number;
    price: number;
    yardSize: number;
  } | null;
  isOpen: boolean;
}

const FooterDrawer = ({ selectedSkip, isOpen }: FooterDrawerProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  if (!selectedSkip) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 transition-transform duration-300 ease-out",
        isVisible ? "animate-drawer-in" : "translate-y-full"
      )}
    >
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-x-[20px] smaller:flex-col smaller:items-start">
          <div className="text-xl">
            <span className="text-gray-400">{selectedSkip.yardSize}</span>
          </div>
          <div className="flex gap-x-[10px] items-center smaller:flex-col smaller:items-start">
            <p className="text-skip-price font-bold text-2xl">£{selectedSkip.price}</p>
            <p className="text-gray-400">7 day hire</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <button className="bg-[#2a2a2a] text-white px-6 py-2 rounded mr-4 hover:bg-gray-600 transition">
            Back
          </button>
          <button className="bg-[#0037c1] text-white px-6 py-2 rounded flex items-center hover:bg-blue-700 transition">
            Continue
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterDrawer;
