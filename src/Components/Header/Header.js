import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "Assets/Images/logo.svg";
import { Dot, MenuIcon } from "lucide-react";
import { Sheet, SheetContent } from "../../Components/ui/sheet";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../Redux/Cart/CartActions";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const { cart, checkoutSuccess, deleteCartItemSuccess } = useSelector(
    (state) => state.CartReducer
  );
  const { addToCartSuccess } = useSelector((state) => state.ProductsReducer);

  const isActive = (routes) => routes.some((route) => path.includes(route));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, []);

  useEffect(() => {
    if (addToCartSuccess) {
      dispatch(getCart());
    }
  }, [addToCartSuccess]);

  useEffect(() => {
    if (checkoutSuccess || deleteCartItemSuccess) {
      dispatch(getCart);
    }
  }, [checkoutSuccess, deleteCartItemSuccess]);

  return (
    <>
      {/* Desktop Header */}
      <div className="h-[6rem] sticky bg-background top-0 w-full md:flex justify-between items-center px-[3.5rem] py-4 border-b text-sm hidden z-[20] ">
        <div className="flex-[0.86]">
          <Link to="/products" className="flex items-center">
            {isActive(["/products", "/product"]) && <Dot strokeWidth={5} />}{" "}
            COLLECTIONS
          </Link>
        </div>
        <div className="flex-1 flex  justify-between">
          <div className="flex">
            <img
              src={Logo}
              alt="Logo"
              className="w-[6.25rem] cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>
          <div className="flex gap-10 items-center">
            <Link to="/search" className="flex items-center">
              {isActive(["/search"]) && <Dot strokeWidth={5} />} SEARCH
            </Link>
            {/* <Link to="/" className="flex items-center">
              {isActive(["/account"]) && <Dot strokeWidth={5} />} ACCOUNT
            </Link> */}
            <Link to="/cart" className="flex items-center">
              {isActive(["/cart", "/checkout"]) && <Dot strokeWidth={5} />} CART
              {cart &&
                Object.keys(cart ?? {})?.length > 0 &&
                cart?.items?.length > 0 &&
                `(${cart?.items?.length})`}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="h-[5rem] md:hidden block">
        <div className="flex justify-between items-center px-5 py-2.5">
          <img src={Logo} alt="Logo" className="w-[5rem]" />
          <MenuIcon
            strokeWidth={3}
            onClick={() => setOpen(true)}
            className="cursor-pointer hover:opacity-70"
          />
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent className="border-none flex flex-col justify-between p-10 w-full md:w-[70%]">
            <div className="flex flex-col gap-2">
              <Link to="/products" onClick={() => setOpen(false)}>
                COLLECTIONS
              </Link>
              <Link to="/search" onClick={() => setOpen(false)}>
                SEARCH
              </Link>
            </div>
            <div className="flex items-center justify-between">
              {/* <Link to="/" className="flex items-center">
                <Dot strokeWidth={5} /> ACCOUNT
              </Link> */}
              <Link to="/cart" onClick={() => setOpen(false)}>
                CART{" "}
                {cart &&
                  Object.keys(cart)?.length > 0 &&
                  cart?.items?.length > 0 &&
                  `(${cart?.items?.length})`}
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Header;
