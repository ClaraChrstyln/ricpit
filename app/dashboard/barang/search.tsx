"use client";

import { Input } from "../../../components/ui/input";
import { useState } from "react";

interface SearchProps {
  onSearch: (value: string) => void;
}

export default function Search({ onSearch }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="flex justify-end mb-4">
      <Input
        type="text"
        placeholder="Cari barang..."
        className="w-64 rounded-full"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}
