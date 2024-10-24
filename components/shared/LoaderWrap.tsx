import { FadeLoader } from "react-spinners";

interface LoaderProps{
    height?: number;
    width?: number;
}

export const LoaderWrap = ({height, width}: LoaderProps) => {
  return (
    <div>
      <FadeLoader />
    </div>
  );
};
