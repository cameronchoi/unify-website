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
  nameText: {
    fontWeight: 600,
  },
});

const NewMatch = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Avatar
        style={{ height: 90, width: 90 }}
        // className={classes.avatar}
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
      <div className={classes.nameText}>James</div>
    </div>
  );
};

export default NewMatch;
