import Modal from "@/components/Modal/Modal";
import { fetchNoteById } from "@/lib/api";
import NotePreview from "../../../../components/NotePreview/NotePreview";

type Props = {
  params: { id: string };
};

const NotePreviewPage = async ({ params }: Props) => {
  const note = await fetchNoteById(params.id);

  const handleClose = () => {
    // Повернення на попередню сторінку
    history.back();
  };

  return (
    <Modal onClose={handleClose}>
      <NotePreview note={note} />
    </Modal>
  );
};
