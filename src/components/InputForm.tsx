interface InputFormProps {
  label: string;
  name: string;
  unit: string;
  data: number,
  setData: (data: number, label: string) => void;
}

export default function InputForm({ label, name, unit, data, setData }: InputFormProps) {
  return (
    <div className="space-y-1">
      <label className="text-sm text-gray-700" htmlFor={name}>
        {label}
      </label>
      <div className="flex items-center">
        <input
          type="number"
          name={name}
          value={data == 0 ? "" : data}
          onChange={(e) => setData(Number(e.target.value), name)}
          className="w-4/5 px-3 py-2 text-lg border border-gray-500 rounded-md rounded-r-none"
        />
        <div className="w-1/5 flex justify-center bg-gray-500 text-white h-full py-2 text-lg border border-gray-500 rounded-r-md">
          {unit}
        </div>
      </div>
    </div>
  );
}
