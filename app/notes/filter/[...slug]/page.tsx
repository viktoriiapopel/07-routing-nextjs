import { fetchNotes } from "@/lib/api";
import { ALL_NOTES } from "@/lib/constants";
import NotesClient from "./Notes.client";

interface Props {
  params: Promise<{ slug: string[] }>;
}

const FilterPage = async ({ params }: Props) => {
  const { slug } = await params;

  const tag = slug[0] === ALL_NOTES ? undefined : slug[0];
  const title = slug[1] || "";

  return <NotesClient tag={tag} />;
};

export default FilterPage;
