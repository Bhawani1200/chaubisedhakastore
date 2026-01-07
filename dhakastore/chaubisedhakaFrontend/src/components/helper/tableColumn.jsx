import { FaEdit } from "react-icons/fa";

export const adminOrderColumnTable = [
  {
    sortable: false,
    disableColumnMenu: true,
    field: "id",
    headerName: "orderId",
    headerAlign: "center",
    minWidth: 80,
    editable: false,
    headerClassName: "text-black font-semibold border text-center",
    cellClassName: "font-normal text-slate-700 border text-center",
    renderHeader: (params) => <span>Order ID</span>
  },
  {
    sortable: false,
    disableColumnMenu: true,
    field: "email",
    headerName: "Email",
    headerAlign: "center",
    minWidth: 200,
    editable: false,
    headerClassName: "text-black font-semibold border text-center",
    cellClassName: "font-normal text-slate-700 border text-center",
    renderHeader: (params) => <span>Email</span>,
  },
  {
    sortable: true,
    disableColumnMenu: true,
    field: "totalAmount",
    headerName: "Total Amount",
    headerAlign: "center",
    minWidth: 150,
    editable: false,
    headerClassName: "text-black font-semibold border text-center",
    cellClassName: "font-normal text-slate-700 border text-center",
    renderHeader: (params) => <span>Total Amount</span>,
  },
  {
    sortable: false,
    disableColumnMenu: true,
    field: "status",
    headerName: "Status",
    headerAlign: "center",
    minWidth: 150,
    editable: false,
    headerClassName: "text-black font-semibold  text-center",
    cellClassName: "font-normal text-slate-700 border text-center",
    renderHeader: (params) => <span>Status</span>,
  },
  {
    sortable: false,
    disableColumnMenu: true,
    field: "orderDate",
    headerName: "Order Date",
    headerAlign: "center",
    minWidth: 180,
    editable: false,
    headerClassName: "text-black font-semibold border text-center",
    cellClassName: "font-normal text-slate-700 border text-center",
    renderHeader: (params) => <span>Order Date</span>,
  },
  {
    sortable: false,
    disableColumnMenu: true,
    field: "action",
    headerName: "Action",
    headerAlign: "center",
    minWidth: 350,
    editable: false,
    headerClassName: "text-black font-semibold text-center border",
    cellClassName: "font-normal text-slate-700 border text-center",
    renderHeader: (params) => <span>Action</span>,
    renderCell: (params) => {
      return (
        <div className="flex justify-start items-center pt-2 space-x-2 h-full">
          <button className="flex items-center bg-blue-600 px-4 rounded-lg text-white">
            <FaEdit className="mr-2" />
            Edit
          </button>
        </div>
      );
    },
  },
];
