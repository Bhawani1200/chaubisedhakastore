import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import React from "react";

const AddressInfoModal = ({ open, setOpen, children }) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg space-y-4 border bg-slate-100 p-12">
        <div className="px-6 py-6">
          {children}
        </div>
          <div className="flex gap-4">
            <button onClick={() => setOpen(false)}>Cancel</button>
            <button onClick={() => setOpen(false)}>Deactivate</button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default AddressInfoModal;
