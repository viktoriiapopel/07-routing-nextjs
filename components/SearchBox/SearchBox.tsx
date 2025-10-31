"use client";

import css from "./SearchBox.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SearchBoxProps {
  categoryid: string;
  onChange?: (value: string) => void;
}

const SearchBox = ({ categoryid, onChange }: SearchBoxProps) => {
  const router = useRouter();
  const [title, setTitle] = useState("");

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    router.push(
      `/notes/filter/${categoryid === "ALL_NOTES" ? "" : categoryid}/${title}`
    );
    // router.push(`/notes/filter/${categoryid}/${title}`);
  };

  return (
    <form action={onSubmit}>
      <input
        className={css.input}
        type="text"
        placeholder="Search notes"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          onChange?.(e.target.value);
        }}
      />
    </form>
  );
};

export default SearchBox;
