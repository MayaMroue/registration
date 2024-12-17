import React, { useState } from "react";
import "./ProductCard.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, aspect = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const pieces = product?.options?.map(
    (variant) => variant?.title === "Quantity" && variant?.values[0]?.value
  );

  const navigate = useNavigate();

  return (
    <div
      className={`w-full overflow-hidden ${
        aspect ? "aspect-square " : "h-[25rem]"
      } bg-cover bg-center relative cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        navigate(`/product/${product?.id}`);
      }}
    >
      <img
        src={product?.thumbnail}
        alt="Product"
        className="w-full h-full object-cover"
      />
      <AnimatePresence>
        {isHovered && (
          <>
            <div className="absolute w-full h-full glass top-0 left-0 overflow-hidden"></div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              exit={{ opacity: 0, y: 100, transition: { duration: 0.2 } }}
              className="text-center absolute top-0  w-full h-full flex justify-center items-center overflow-hidden"
            >
              <div className="flex flex-col items-center gap-5">
                <p className="text-black uppercase font-ASemiBold max-w-[72%]">
                  {product?.title}
                </p>
                <div className="w-[1px] h-[4rem] bg-black"></div>
                <div>
                  <p className="font-ABook text-[16px] text-black">
                    {product?.collection?.title}
                  </p>
                  <p className="font-ABook text-[16px] opacity-50">
                    ${product?.variants[0]?.prices[0]?.amount}/Pack de {pieces}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductCard;
