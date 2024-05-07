import { useState, useEffect } from "react";

type ModalAnimation = "in" | "out";

export interface ModalProps {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  animation: ModalAnimation;
}

const useModal = (): ModalProps => {
  const [open, setIsOpen] = useState(false);
  const [animation, setAnimation] = useState<ModalAnimation>("in");

  useEffect(() => {
    if (open) {
      setAnimation("in");
    }

    // document.body.style.overflow = open ? "visible" : "auto";

    if (open) {
      // document.body.style.setProperty(
      //   "--st",
      //   -document.documentElement.scrollTop + "px"
      // );

      if (document.documentElement.scrollHeight > window.innerHeight) {
        let scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        document.documentElement.classList.add("noscroll");
        document.documentElement.style.top = -scrollTop + "px";
      }

      // document.body.classList.add("noscroll");
    } else {
      // document.body.classList.remove("noscroll");
      let scrollTop = parseInt(
        window
          .getComputedStyle(document.documentElement)
          .getPropertyValue("top")
      );
      document.documentElement.classList.remove("noscroll");
      window.scrollTo(0, -scrollTop);
    }

    // open
    //   ? document.body.classList.add("noscroll")
    //   : document.body.classList.remove("noscroll");
  }, [open]);

  const handleOpenModal = () => setIsOpen(true);

  const handleCloseModal = () => {
    setAnimation("out");
    setTimeout(() => setIsOpen(false), 200);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseModal();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return {
    open,
    onOpen: handleOpenModal,
    onClose: handleCloseModal,
    animation,
  };
};

export default useModal;
