"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./Button";

export interface SearchBarProps {
  placeholder?: string;
  buttonLabel?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

export function SearchBar({
  placeholder = "Course, topic, creator",
  buttonLabel = "Search",
  onSearch,
  className = "",
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative flex items-center w-full max-w-[500px] h-[58px] bg-white rounded-full p-2 pl-5 shadow-lg border border-white/40 focus-within:ring-2 focus-within:ring-secondary-400 transition-all ${className}`}
    >
      <div className="shrink-0 mr-3 flex items-center pointer-events-none">
        <Image
          src="/images/icon-search.svg"
          alt=""
          width={18}
          height={18}
          className="w-[18px] h-[18px] opacity-60"
        />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        aria-label="Search courses"
        className="w-full bg-transparent border-none outline-none text-neutral-900 placeholder:text-neutral-400 text-body-s sm:text-body-m pr-2"
      />
      <Button
        type="submit"
        variant="primary"
        size="sm"
        className="shrink-0 !h-10 px-6 font-medium text-label-s"
      >
        {buttonLabel}
      </Button>
    </form>
  );
}

export default SearchBar;
