import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import JoinRoom from "../components/JoinRoom";
import Title from "../components/Title";
import CreateRoomButton from "../components/CreateRoomButton";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

interface RootState {
  roomId: string;
}

interface IProps {
  roomId: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100vh - 64px)",
    display: "grid",
    placeItems: "center",
  },
}));

export const Home: React.FC<IProps> = (props) => {
  const classes = useStyles();

  if (props.roomId !== "") {
    return <Redirect to={`/room/${props.roomId}`} />;
  }
  return (
    <Box className={classes.root}>
      <Title></Title>
      <JoinRoom></JoinRoom>
      <CreateRoomButton></CreateRoomButton>
    </Box>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    roomId: state.roomId,
  };
};

export default connect(mapStateToProps)(Home);
