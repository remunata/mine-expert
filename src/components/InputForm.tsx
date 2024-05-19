import { useDataContext } from "../DataContext";

interface InputFormProps {
  label: string;
  name: string;
  unit: string;
  placeholder: string;
  data: number;
  cfIndex: number;
  setData: (data: number, label: string) => void;
}

export default function InputForm({
  label,
  name,
  unit,
  placeholder,
  data,
  cfIndex,
  setData,
}: InputFormProps) {
  const { cfValues, setCfValues } = useDataContext();

  const setCfValue = (value: number) => {
    const arr = cfValues.slice();
    arr.splice(cfIndex, 1, value);
    setCfValues(arr);
  };

  return (
    <div className="grid grid-cols-3 gap-x-10">
      <div className="space-y-1 col-span-2">
        <label className="text-sm text-gray-700" htmlFor={name}>
          {label}
        </label>
        <div className="flex items-center">
          <input
            type="number"
            id={name}
            placeholder={placeholder}
            value={data == 0 ? "" : data}
            onChange={(e) => setData(Number(e.target.value), name)}
            className="w-5/6 px-3 py-2 text-lg border border-gray-500 rounded-md rounded-r-none"
          />
          <div className="w-1/6 flex justify-center bg-gray-500 text-white h-full py-2 text-lg border border-gray-500 rounded-r-md">
            {unit}
          </div>
        </div>
      </div>
      <div className="space-y-1">
        <label className="text-sm text-gray-700" htmlFor={"cf_" + name}>
          Tingkat Kepastian
        </label>
        <div className="flex items-center">
          <input
            type="number"
            id={"cf_" + name}
            placeholder="eg. 0.7"
            value={cfValues[cfIndex]}
            onChange={(e) => setCfValue(Number(e.target.value))}
            className="w-3/4 px-3 py-2 text-lg border border-gray-500 rounded-md rounded-r-none"
            min={-1}
            max={1}
            step={0.1}
          />
          <div className="w-1/4 flex justify-center bg-gray-500 text-white h-full py-2 text-lg border border-gray-500 rounded-r-md">
            %
          </div>
        </div>
      </div>
    </div>
  );
}
