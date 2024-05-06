import { FC, PropsWithChildren } from "react";
import { ModalProps } from "../../../hooks/useModal";
import Portal from "../../common/Portal";

interface ModalLayoutProps extends PropsWithChildren<ModalProps> {}

const ModalLayout: FC<ModalLayoutProps> = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <Portal target="modals-root">
      <div
        className="h-screen overscroll-none z-50 top-0 left-0 w-full bg-black/30 flex justify-center items-center fixed"
        onClick={onClose}
      >
        <div
          className="bg-white text-black max-w-xl w-full p-5 rounded shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default ModalLayout;
