import { Input } from "./ui/input";
interface TemperInputProps {
  value: string;
  unit: string;
  onChangeTemp: (value: string) => void;
}
const TemperInput = ({ value, unit, onChangeTemp }: TemperInputProps) => {
  return (
    <>
      <div className="w-full flex justify-center items-center gap-x-5">
        <Input
          type="number"
          value={value}
          onChange={(e) => onChangeTemp(e.target.value)}
          placeholder={unit}
        />
        <span className="text-xl font-semibold">{unit}</span>
      </div>
    </>
  );    
};

export default TemperInput;
