import ImageLazyLoading from "../../../components/imageLazyLoading/imageLazyLoading";
import { ContentWrapper } from "../../../utility/components/contentWrapper/contentWrapper";
import { FaUser } from "react-icons/fa";
import mobile from "../../../../assets/mobile.png";

const HeroBanner = () => {
  return (
    <div className="carouselSection mb-5">
      <ContentWrapper>
        <div className="lg:flex justify-between items-center py-4 px-4 lg:px-20 bg-gray-900 text-white rounded-lg">
          <div className="lg:w-1/2">
            <h1 className="text-xl lg:text-3xl text-center lg:text-start font-semibold my-5">
              Download Your Movies and TV Shows Watch Offline. Enjoy On Your
              Mobile.
            </h1>
            <p className="text-sm text-center md:text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              similique ad eos praesentium eius provident dicta porro illo
              autem! Dolores, et. Explicabo, id facere? Molestias ratione
              expedita facere iste minus ex quaerat fugit facilis quisquam.
            </p>
            <div className="mt-5 flex items-center justify-center">
              <button className="bg-black py-3 px-5 text-red-600 font-semibold">
                HD 4K
              </button>
              <div className="flex ms-4 bg-black py-3 px-5 text-red-600 font-semibold">
                <FaUser />
                <button className="ms-3"> 2K</button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:py-0 py-10">
            <ImageLazyLoading src={mobile} className="w-full" />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
