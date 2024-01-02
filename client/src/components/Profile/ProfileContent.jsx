import React, { useEffect, useState } from "react";
import { backend_url } from "../../server";
import { useDispatch, useSelector } from "react-redux";
import {
  AiOutlineCamera,
  AiOutlineArrowRight,
  AiOutlineDelete,
} from "react-icons/ai";
import styles from "../../styles/styles";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { MdOutlineTrackChanges } from "react-icons/md";
import { updateUserInformation } from "../../redux/actions/user";
import { toast } from "react-toastify";

const ProfileContent = ({ active }) => {
  const { user, error } = useSelector((state) => state.user);
  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [phoneNumber, setPhoneNumber] = useState(user && user.phoneNumber);
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserInformation({ name, email, phoneNumber, password }));
  };

  return (
    <div className="w-full">
      {/* Profile Page */}
      {active === 1 && (
        <>
          <div className="flex justify-center w-full">
            <div className="relative">
              <img
                src={`${backend_url}${user?.avatar}`}
                className="w-[150px] h-[150px] rounded-full object-cover border-[3px]  border-[#7777e3]"
                alt=""
              />
              <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                <input type="file" id="image" className="hidden" />
                <label htmlFor="image">
                  <AiOutlineCamera />
                </label>
              </div>
            </div>
          </div>
          <br />
          <div className="w-full px-5">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center"
            >
              {/* <div className="w-full 800px:flex block pb-3"> */}
              <div className=" w-[100%] 800px:w-[50%] pb-3">
                <label className="block pb-2">Full Name</label>
                <input
                  type="text"
                  className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                  required
                  value={name || ""}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              {/*   </div> */}
              <div className=" w-[100%] 800px:w-[50%] pb-3">
                <label className="block pb-2">Email Address</label>
                <input
                  type="text"
                  className={`${styles.input} !w-[95%] mb-1 800px:mb-0`}
                  required
                  value={email || ""}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* <div className="w-full 800px:flex block pb-3"> */}
              <div className=" w-[100%] 800px:w-[50%] pb-3">
                <label className="block pb-2">Phone Number</label>
                <input
                  type="number"
                  className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                  required
                  value={phoneNumber || ""}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              {/*   </div> */}
              <div className=" w-[100%] 800px:w-[50%] ">
                <label className="block pb-2">Password</label>
                <input
                  type="password"
                  className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                  required
                  value={password || ""}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <input
                className={`w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer`}
                required
                value="Update"
                type="submit"
              />
            </form>
          </div>
        </>
      )}

      {/* Orders Page */}
      {active === 2 && (
        <div>
          <AllOrders />
        </div>
      )}
      {/* Refund Page */}
      {active === 3 && (
        <div>
          <AllRefundOrders />
        </div>
      )}
      {/* Track order Page */}
      {active === 5 && (
        <div>
          <TrackOrders />
        </div>
      )}
      {/* Track order Page */}
      {active === 6 && (
        <div>
          <PaymentMethod />
        </div>
      )}
      {/* Address Page */}
      {active === 7 && (
        <div>
          <Address />
        </div>
      )}
    </div>
  );
};
/* 
const AllOrders = () => {
  const orders = [
    {
      _id: "ead1439e4df111eebe560242ac120002",
      orderItems: [{ name: "Iphone 14 pro  max" }],
      totalPrice: 200,
      orderStatus: "Processing",
    },
  ];
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: "actions",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US$ " + item.totalPrice,
        status: item.orderStatus,
      });
    });

  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
}; */

const AllOrders = () => {
  const orders = [
    {
      _id: "ead1439e4df111eebe560242ac120002",
      orderItems: [{ name: "Iphone 14 pro  max" }],
      totalPrice: 200,
      orderStatus: "Processing",
    },
  ];

  const column = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.row.status === "Delivered" ? "greenColor" : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: "actions",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.row.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = orders.map((item) => ({
    id: item._id,
    itemsQty: item.orderItems.length,
    total: "US$ " + item.totalPrice,
    status: item.orderStatus,
  }));

  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={column}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

const AllRefundOrders = () => {
  const orders = [
    {
      _id: "ead1439e4df111eebe560242ac120002",
      orderItems: [{ name: "Iphone 14 pro  max" }],
      totalPrice: 200,
      orderStatus: "Processing",
    },
  ];

  const column = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.row.status === "Delivered" ? "greenColor" : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: "actions",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.row.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = orders.map((item) => ({
    id: item._id,
    itemsQty: item.orderItems.length,
    total: "US$ " + item.totalPrice,
    status: item.orderStatus,
  }));

  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={column}
        pageSize={10}
        autoHeight
        disableSelectionOnClick
      />
    </div>
  );
};

const TrackOrders = () => {
  const orders = [
    {
      _id: "ead1439e4df111eebe560242ac120002",
      orderItems: [{ name: "Iphone 14 pro  max" }],
      totalPrice: 200,
      orderStatus: "Processing",
    },
  ];

  const column = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.row.status === "Delivered" ? "greenColor" : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },
    {
      field: "actions",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.row.id}`}>
              <Button>
                <MdOutlineTrackChanges size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = orders.map((item) => ({
    id: item._id,
    itemsQty: item.orderItems.length,
    total: "US$ " + item.totalPrice,
    status: item.orderStatus,
  }));

  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={column}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

const PaymentMethod = () => {
  return (
    <div className="w-full px-5">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-[25px] font-[600] text-[#000] pb-2">
          Payment Methods
        </h1>
        <div className={`${styles.button}`}>
          <span className="text-[#fff]">Add New</span>
        </div>
      </div>
      <br />
      <div className="w-full bg-white h-[70px] flex items-center px-3 shadow justify-between pr-10">
        <div className="flex items-center">
          <img
            src="https://bonik-react.vercel.app/assets/images/payment-methods/Visa.svg"
            alt="payment"
          />
          <h5 className="pl-5 font-[600]"> simi maxwell</h5>
        </div>
        <div className="pl-8 flex font-[600] items-center gap-10">
          <h6>1234 **** **** ****</h6>
          <h5 className="pl-6"> 09/2026</h5>
        </div>
        <div className="min-w-[10%] flex  items-center justify-between pl-8">
          <AiOutlineDelete size={22} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

const Address = () => {
  return <div className="w-full px-5"></div>;
};

export default ProfileContent;
