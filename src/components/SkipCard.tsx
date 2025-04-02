
import { AlertTriangle, ArrowRight, LucideCheck } from "lucide-react";
import cardBG from "../assets/card-bg.jpg"
import { cn } from "@/lib/utils";

interface SkipCardProps {
  size: number;
  price: number;
  yardSize: number;
  privateOnly?: boolean;
  selected?: boolean;
  onClick: () => void;
}

const SkipCard = ({
  size,
  price,
  yardSize,
  privateOnly = false,
  selected = false,
  onClick,
}: SkipCardProps) => {
  return (
    <div
      className={cn("relative rounded-lg border-2 p-4 md:p-6 transition-all hover:border-[#0037C1]/50 bg-[#1C1C1C] text-white cursor-pointer",
        selected ? 'border-[#0037C1]' : 'border-[#2A2A2A]')}
      onClick={onClick}
    >
      <div 
        className="bg-cover bg-center relative w-full h-48 mb-4 rounded flex flex-col justify-end p-[10px]"
        style={{ backgroundImage: `url(${cardBG})` }}
      >
        {
          selected && <LucideCheck className="w-4 h-4 text-[#0037c1] absolute top-[-12px] right-[-5px]" />
        }
        <div className="absolute top-3 right-3 bg-[#0037c1] text-white px-3 py-1 rounded-full font-medium">
          {yardSize} Yards
        </div>
        {privateOnly && (
          <div className="w-max bg-[#030405] text-yellow-400 text-[14px] px-3 py-1 rounded-md font-medium flex items-center">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Private Property Only
          </div>
        )}
      </div>
      <h3 className="text-white text-xl font-bold mb-1">{size} Yard Skip</h3>
      <p className="text-sm text-gray-400 mb-4 md:mb-6">14 day hire period</p>
      <div className="flex items-end mb-6">
        <span className="text-skip-price text-3xl font-bold">£{price}</span>
        <span className="text-gray-400 ml-2 mb-1">per week</span>
      </div>
      <button 
        className={cn(
          "w-full py-3 rounded flex items-center justify-center text-white font-medium transition-colors",
          selected 
            ? "bg-[#0037c1]" 
            : "bg-[#2a2a2a] hover:bg-gray-600"
        )}
      >
        {selected ? (
          "Selected"
        ) : (
          <>
            Select This Skip
            <ArrowRight className="w-4 h-4 ml-2" />
          </>
        )}
      </button>
    </div>
  );
};

export default SkipCard;
