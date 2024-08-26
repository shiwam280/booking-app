import Image from "./Image";

const PlaceImg = ({ place, index = 0, classname = null }) => {
  if (!place.photos?.length) {
    return "";
  }

  if (!classname) {
    classname = "object-cover";
  }
  return <Image className={classname} src={place.photos[index]} alt="" />;
};

export default PlaceImg;
