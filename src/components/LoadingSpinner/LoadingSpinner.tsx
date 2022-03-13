import loadingSpinner from "../../assets/loading.json";
import { useLottie } from "lottie-react";


const LoadingSpinner = () => {
  const options = {
    animationData: loadingSpinner,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default LoadingSpinner;