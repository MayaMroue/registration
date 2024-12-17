import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
 
} from "../ui/carousel";

const ProductCarousel = ({ product }) => {
  return (
   
    <div >
      <Carousel>
        <CarouselContent className="gap-7">
          {product?.map((product, index) => (
            <CarouselItem className="basis-72" key={index}>
              <section
                className=" flex flex-col justify-between items-start  lg:w-[33.33%] md:w-full sm:w-full "
                key={index}
              >
                <img
                  className="object-cover  aspect-square w-full h-full "
                  src={product?.images[0].url}
                  alt="Product Image"
                />

                <div className="details w-full flex flex-col justify-between items-start  ">
                  <span className="title mt-2">{product?.title}</span>
                  <span className=" font-ALight price text-gray-500 ">
                    {/* {product?.price ?? "$54.99/12pieces"} */}
                    ${product?.variants[0]?.prices[0]?.amount}/Pack de 
                  </span>
                </div>
              </section>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

     
    </div>
  );
};

export default ProductCarousel;
