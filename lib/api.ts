import type { Category, Note } from "../types/note";
import axios from "axios";

const api = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
  },
});

export interface FetchNotesParams {
  page?: number;
  perPage?: number;
  search?: string;
}

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

// export const fetchNotes = async ({
//   page = 1,
//   perPage = 12,
//   search = "",
// }: FetchNotesParams): Promise<FetchNotesResponse> => {
//   const res = await api.get<FetchNotesResponse>("/notes", {
//     params: { page, perPage, search },
//   });
//   return res.data;
// };

export interface NoteListType {
  notes: Note[];
  total: number;
}

export const fetchNotes = async (categoryId?: string, title?: string) => {
  const { data } = await api.get<NoteListType>("/notes", {
    params: {
      categoryId,
      title,
    },
  });
  return data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const res = await api.delete<Note>(`/notes/${id}`);
  return res.data;
};

export const createNote = async (noteData: {
  title: string;
  content: string;
  tag: string;
}): Promise<Note> => {
  const res = await api.post<Note>("/notes", noteData);
  {
    return res.data;
  }
};

export const fetchNoteById = async (id: string) => {
  const res = await api.get<Note>(`/notes/${id}`);
  return res.data;
};

// export const getCategories = async () => {
//   const { data } = await axios.get<CategoryNote[]>(`/categories`);
//   return data;
// };

export const getCategories = async () => {
  const { data } = await api.get<Category[]>("/categories");
  return data;
};
