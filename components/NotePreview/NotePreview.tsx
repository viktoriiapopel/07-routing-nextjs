"use client";

import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";

interface NotePreviewProps {
  note: { id: string; title: string; content: string };
}

export default function NotePreview({ note }: NotePreviewProps) {
  const router = useRouter();
  const handleClose = () => router.back();

  return (
    <Modal onClose={handleClose}>
      <NotePreview note={note} />
    </Modal>
  );
}
