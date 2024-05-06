import { useState, useEffect } from "react";

export interface ModalProps {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useModal = (): ModalProps => {
  const [open, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return { open, onOpen: handleOpenModal, onClose: handleCloseModal };
};

export default useModal;
