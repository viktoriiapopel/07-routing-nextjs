// import { createPortal } from "react-dom";
// import css from "./Modal.module.css";
// import { useEffect } from "react";

// interface ModalProps {
//   onClose: () => void;
//   children: React.ReactNode;
// }

// export default function Modal({ children, onClose }: ModalProps) {
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") onClose();
//     };

//     const originalOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";

//     window.addEventListener("keydown", handleKeyDown);
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       document.body.style.overflow = originalOverflow;
//     };
//   }, [onClose]);

//   const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (e.target === e.currentTarget) onClose();
//   };
//   return createPortal(
//     <div
//       className={css.backdrop}
//       role="dialog"
//       aria-modal="true"
//       onClick={handleBackdropClick}
//     >
//       <div className={css.modal}>{children}</div>
//     </div>,
//     document.body
//   );
// }

// components/Modal/Modal.tsx

"use client";

import { useRouter } from "next/navigation";
import css from "./Modal.module.css";

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  const router = useRouter();

  const close = () => router.back();

  return (
    <div className={css.backdrop} role="dialog" aria-modal="true">
      <div className={css.modal}>{children}</div>
    </div>
  );
};

export default Modal;
