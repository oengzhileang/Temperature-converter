import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface UnitSelectorProps {
  unit: string;
  onChangeUnit: (value: string) => void;
}

const UnitSelector = ({ unit, onChangeUnit }: UnitSelectorProps) => {
  return (
    <>
      <div className="w-full">
        <RadioGroup value={unit} onValueChange={onChangeUnit} className="flex gap-x-10 ">
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="Celsius"
              id="Celsius"
              checked={unit === "Celsius"}
              onChange={(e) =>
                onChangeUnit((e.target as HTMLInputElement).value)
              }
            />
            <Label htmlFor="Celsius" className="text-xl font-semibold">Celsius</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="Fahrenheit"
              id="Fahrenheit"
              checked={unit === "Fahrenheit"}
              onChange={(e) =>
                onChangeUnit((e.target as HTMLInputElement).value)
              }
            />
            <Label htmlFor="Fahrenheit" className="text-xl font-semibold">Fahrenheit</Label>
          </div>
        </RadioGroup>
      </div>
    </>
  );
};

export default UnitSelector;
