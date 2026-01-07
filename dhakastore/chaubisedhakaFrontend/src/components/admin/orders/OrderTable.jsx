import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { adminOrderColumnTable } from "../../helper/TableColumn";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

const OrderTable = ({ adminOrder, pagination }) => {
  const [currentPage, setCurrentPage] = useState(
    pagination?.pageNumber + 1 || 1
  );
  const [searchParams] = useSearchParams();
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
  const params = new URLSearchParams(searchParams);

  const tableRecords = adminOrder?.map((item) => {
    return {
      id: item.orderId,
      email: item.email,
      totalAmount: item.totalAmount,
      status: item.orderStatus,
      date: item.orderDate,
    };
  });

  const handlePagination = (paginationModel) => {
    const page = paginationModel.page + 1;
    setCurrentPage(page);
    params.set("page", page.toString());
    navigate(`${pathname}?${params}`);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 text-center pb-6 uppercase ">
        All Orders
      </h1>
      <DataGrid
        className="w-full"
        rows={tableRecords}
        columns={adminOrderColumnTable}
        rowCount={pagination?.totalElements || 0}
        paginationMode="server"
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: pagination?.pageSize || 10,
              page: currentPage - 1,
            },
          },
        }}
        onPaginationModelChange={handlePagination}
        disableRowSelectionOnClick
        pageSizeOptions={[pagination?.pageSize || 10]}
        pagination
        checkboxSelection
        disableColumnResize
        paginationOptions={{
          showFirstButton: true,
          showLastButton: true,
          hideNextButton: currentPage === pagination?.totalPages,
        }}
      />
    </div>
  );
};

export default OrderTable;
