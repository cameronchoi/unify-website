import React from "react";
import Avatar from "avataaars";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
  },
  innerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nameText: {
    fontWeight: 600,
    marginBottom: 10,
  },
});

const Conversation = () => {
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
      <div className={classes.innerContainer}>
        <div className={classes.nameText}>Bob Smith</div>
        <div>Latest Message</div>
      </div>
    </div>
  );
};

export default Conversation;
