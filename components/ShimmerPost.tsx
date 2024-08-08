import type { FC } from "react";
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native";
import { Dimensions } from "react-native";

interface ShimmerPostProps {
  backgroundColor?: string;
  foregroundColor?: string;
}

const ShimmerPost: FC<ShimmerPostProps> = ({
  backgroundColor = "#f3f3f3",
  foregroundColor = "#ecebeb",
  ...props
}) => {
  const height = Dimensions.get("screen").height * 0.8;
  const width = Dimensions.get("screen").width;

  return (
    <ContentLoader
      backgroundColor={backgroundColor}
      foregroundColor={foregroundColor}
      height={height}
      speed={1}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      {...props}
    >
      <Circle cx="31" cy="31" r="15" />
      <Rect x="58" y="18" rx="2" ry="2" width="140" height="10" />
      <Rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
      <Rect x="10" y="60" rx="2" ry="2" width="95%" height="478" />
      <Rect x="10" y="550" rx="2" ry="2" width="95%" height="24" />
      <Rect x="10" y="582" rx="2" ry="2" width="140" height="20" />
      <Rect x="10" y="612" rx="2" ry="2" width="140" height="10" />
      <Rect x="10" y="642" rx="2" ry="2" width="95%" height="1" />
    </ContentLoader>
  );
};

export default ShimmerPost;
