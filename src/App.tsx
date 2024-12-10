import { useState } from "react";
import TemperInput from "./components/TemperInput";
import UnitSelector from "./components/UnitSelector";

const App = () => {
  const [temperature, setTemperature] = useState<string>("");
  const [unit, setUnit] = useState<string>("Celsius");
  const convertedTemp =
    unit === "Celsius"
      ? ((parseFloat(temperature) * 9) / 5 + 32).toFixed(1)
      : (((parseFloat(temperature) - 32) * 5) / 9).toFixed(1);
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-[40%] border flex-col p-5 space-y-5 shadow rounded-lg">
          <div className="w-full space-y-5">
            <h1 className="text-center text-3xl font-bold">
              Temperature Converter
            </h1>
            <p className="text-xl font-semibold">
              Converted: {temperature ? convertedTemp : ""}
              {unit === "Celsius" ? "F" : "C"}
            </p>
          </div>
          <TemperInput
            value={temperature}
            unit={unit}
            onChangeTemp={setTemperature}
          />
          <UnitSelector unit={unit} onChangeUnit={setUnit} />
        </div>
      </div>
    </>
  );
};

export default App;
