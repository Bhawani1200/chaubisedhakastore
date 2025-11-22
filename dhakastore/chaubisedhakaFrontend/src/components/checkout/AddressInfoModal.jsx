import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import React from "react";
import { FaTimes } from "react-icons/fa";

const AddressInfoModal = ({ open, setOpen, children }) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="relative w-full max-w-md mx-auto transform overflow-hidden bg-white rounded-lg shadow-xl transition-all">
          <div className="px-8 py-2">{children}</div>
          <div className="flex justify-end absolute right-4 top-2">
            <button onClick={() => setOpen(false)} type="button">
              <FaTimes size={25} className="text-slate-700"/>
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default AddressInfoModal;
