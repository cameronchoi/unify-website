import React from "react";
import { createUseStyles } from "react-jss";
import Avatar from "avataaars";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Colours from "../constants/colours";

const useStyles = createUseStyles({
  container: {
    width: "100%",
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #E8E8E8",
  },
  title: {
    fontSize: 15,
    marginLeft: 10,
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const MessagingHeader = () => {
  const classes = useStyles();
  return (
    <header className={classes.container}>
      <Link to="/matches">
        <IoIosArrowBack size={30} color={Colours.primary} />
      </Link>
      <div className={classes.titleContainer}>
        <Avatar
          style={{ width: 30, height: 30 }}
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
        <p className={classes.title}>James</p>
      </div>
      <BiDotsHorizontalRounded size={30} color={Colours.primary} />
    </header>
  );
};

export default MessagingHeader;
