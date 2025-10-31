import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import { MdDone } from "react-icons/md";
import { MdClose } from "react-icons/md";
import Status from "./Status";

function ProductViewModal({ open, setOpen, product, isAvailable }) {
  const {
    id,
    productName,
    image,
    description,
    quantity,
    price,
    discount,
    specialPrice,
  } = product;

  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Dialog
        open={open}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
        __demoMode
      >
        {/* <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" /> */}
        <DialogBackdrop className="fixed inset-0 bg-black/20 transition-opacity" />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all md:max-w-[500px] md:min-w-[500px] w-full"
            >
              {image && (
                <div className="flex justify-center aspect-3/2">
                  <img src={image} alt={productName} />
                </div>
              )}
              <div className="px-6 pt-10 pb-2">
                <DialogTitle
                  as="h1"
                  className="lg:text-3xl sm:text-2xl text-xl font-semibold leading-6 text-gray-800 mb-4"
                >
                  {productName}
                </DialogTitle>
                <div className="space-y-2 text-gray-700 pb-4">
                  <div className="flex items-center justify-between gap-2">
                    {specialPrice ? (
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 line-through">
                          ${Number(price).toFixed(2)}
                        </span>
                        <span className="text-lg text-gray-700 ">
                          ${Number(specialPrice).toFixed(2)}
                        </span>
                      </div>
                    ) : (
                      <span className="text-lg text-gray-700 ">
                        {" "}
                        ${Number(price).toFixed(2)}
                      </span>
                    )}
                    {isAvailable ? (
                      <Status
                        text="In Stock"
                        icon={MdDone}
                        bg="bg-teal-200"
                        color="text-teal-900"
                      />
                    ) : (
                      <Status
                        text="Out-of-Stock"
                        icon={MdClose}
                        bg="bg-rose-200"
                        color="text-rose-700"
                      />
                    )}
                  </div>
                  <Divider />
                  <p className="pt-4">{description}</p>
                </div>
              </div>
              <div className="px-6 py-6 flex justify-end gap-4">
                <button
                  onClick={() => setOpen(false)}
                  type="button"
                  className="px-4 py-2 font-semibold text-sm text-slate-700 hover:text-slate-800 hover:border-slate-800 rounded-md"
                >
                  Close
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
export default ProductViewModal;
