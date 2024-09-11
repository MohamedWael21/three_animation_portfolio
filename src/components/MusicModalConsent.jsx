import { createPortal } from "react-dom";

const MusicModalConsent = ({ onClose, toggle }) => {
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm">
      <div className="bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] py-8 px-6 xs:px-10 sm:px-16 rounded text-center space-y-8 shadow-glass-inset">
        <p className="font-light">Do you like to play the background music ?</p>
        <div className="flex items-center justify-center space-x-4">
          <button
            className="px-4 py-2 mr-2 border border-solid rounded border-accent/30 hover:shadow-glass-sm"
            onClick={toggle}
          >
            Yes
          </button>
          <button
            className="px-4 py-2 border border-solid rounded border-accent/30 hover:shadow-glass-sm "
            onClick={onClose}
          >
            No
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("my-modal")
  );
};
export default MusicModalConsent;
