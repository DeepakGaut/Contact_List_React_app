import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search contacts by name..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 h-11 bg-card border-border focus-visible:ring-primary"
      />
    </div>
  );
};
