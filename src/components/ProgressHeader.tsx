
import { MapPin, Trash2, PackageOpen, Shield, Calendar, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProgressHeaderProps {
  currentStep: number;
}

const ProgressHeader = ({ currentStep }: ProgressHeaderProps) => {
  const steps = [
    { name: "Postcode", icon: MapPin, step: 1 },
    { name: "Waste Type", icon: Trash2, step: 2 },
    { name: "Select Skip", icon: PackageOpen, step: 3 },
    { name: "Permit Check", icon: Shield, step: 4 },
    { name: "Choose Date", icon: Calendar, step: 5 },
    { name: "Payment", icon: CreditCard, step: 6 },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-4 overflow-x-auto pb-2">
        {steps.map((step, index) => {
          // There should be a difference between completed, active and in-active
          // The live design only considered two states instead of three.
          // I took it upon myself to implement the three states
          const Icon = step.icon;
          let statusClass = "step-inactive";
          
          if (step.step < currentStep) {
            statusClass = "step-completed";
          } else if (step.step === currentStep) {
            statusClass = "step-active";
          }

          return (
            <div key={step.name} className={cn("flex items-center", index < steps.length - 1 && "flex-1")}>
              <div className="flex items-center">
                <Icon className={cn("w-5 h-5 mr-2", statusClass)} />
                <span className={cn("whitespace-nowrap", statusClass)}>
                  {step.name}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={cn("flex-1 h-[1px] mx-4", step.step < currentStep ? "bg-skip-blue" : "bg-gray-600")}></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressHeader;
