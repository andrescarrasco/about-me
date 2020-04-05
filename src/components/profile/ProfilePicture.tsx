import React from "react";

interface ProfilePictureProps {
  src: string;
  name: string;
  maxWidth: number | string;
}

export default function ProfilePicture(props: ProfilePictureProps): JSX.Element {
  return (
    <img
      src={props.src}
      alt={`head shot of ${props.name}`}
      style={{
        clipPath: "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
        maxWidth: props.maxWidth,
      }}
    />
  );
}
