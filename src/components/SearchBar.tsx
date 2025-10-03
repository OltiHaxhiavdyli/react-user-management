interface Props {
  value: string;
  onChange: (val: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <input
      type="text"
      className="form-control mb-3"
      placeholder="Search by name or email..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}