import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

import React, { useState } from "react";
import Sidebar from "../shared/Sidebar";
import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <div>
      <Dialog
        open={sideBarOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={setSideBarOpen}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white"
              >
                Payment successful
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-white/50">
                Your payment has been successfully submitted. We’ve sent you an
                email with all of the details of your order.
              </p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                  onClick={close}
                >
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <div className="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col">
        <Sidebar />
      </div>

      <div className="xl:pl-72">
        <button
          type="submit"
          onClick={() => setSideBarOpen(true)}
          className="-m-2.5 text-gray-700 p-4 xl:hidden"
        >
          <span className="sr-only">Open sidebar</span>
          <FaBars className="text-slate-800 text-2xl" />
        </button>

        <main className="">
          <div className="p-4 sm:p-6 xl:p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
