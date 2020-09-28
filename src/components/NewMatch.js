import React from "react";
import Avatar from "avataaars";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

const NewMatch = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Avatar
        style={{ width: 90, height: 90 }}
        avatarStyle="Circle"
        topType="LongHairMiaWallace"
        accessoriesType="Prescription02"
        hairColor="BrownDark"
        facialHairType="Blank"
        clotheType="Hoodie"
        clotheColor="PastelBlue"
        eyeType="Happy"
        eyebrowType="Default"
        mouthType="Smile"
        skinColor="Light"
      />
      <div>James</div>
    </div>
  );
};

export default NewMatch;
