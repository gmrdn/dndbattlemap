import * as actions from "../actions";

describe("actions", () => {
  it("should create an action to set a nickname", () => {
    const nickname = "Jest User";
    const expectedAction = {
      type: "SET_NICKNAME",
      nickname,
    };
    expect(actions.setUserName(nickname)).toEqual(expectedAction);
  });

  it("should create an action to set a roomId", () => {
    const roomId = "ABCDEFGH";
    const expectedAction = {
      type: "SET_ROOMID",
      roomId,
    };
    expect(actions.setRoomId(roomId)).toEqual(expectedAction);
  });

  it("should create an action to add a token", () => {
    const token = { x: 1, y: 1, color: "green", name: "Jest Token" };
    const expectedAction = {
      type: "ADD_TOKEN",
      x: token.x,
      y: token.y,
      name: token.name,
      color: token.color,
    };
    expect(actions.addToken(token)).toEqual(expectedAction);
  });
  it("should create an action to add a token with an image", () => {
    const token = {
      x: 1,
      y: 1,
      color: "green",
      name: "Jest Token",
      image: "/tokens/1.png",
    };
    const expectedAction = {
      type: "ADD_TOKEN",
      x: token.x,
      y: token.y,
      name: token.name,
      color: token.color,
      image: token.image,
    };
    expect(actions.addToken(token)).toEqual(expectedAction);
  });

  it("should create an action to reset the tokens to initial state", () => {
    const expectedAction = {
      type: "RESET_TOKENS",
    };
    expect(actions.resetTokens()).toEqual(expectedAction);
  });

  it("should create an action to select a token", () => {
    const id = "5e9a1a39152f9a9ce03b9343";
    const expectedAction = {
      type: "SELECT_TOKEN",
      tokenId: id,
    };
    expect(actions.selectToken(id)).toEqual(expectedAction);
  });

  it("should create an action to move a token", () => {
    const id = "5e9a1a39152f9a9ce03b9343";
    const newPosition = {
      x: 21,
      y: 12,
    };
    const expectedAction = {
      type: "MOVE_TOKEN",
      tokenId: id,
      newPosition: newPosition,
    };
    expect(actions.moveToken(id, newPosition)).toEqual(expectedAction);
  });

  it("should create an action to delete a token", () => {
    const id = "5e9a1a39152f9a9ce03b9343";
    const expectedAction = {
      type: "DELETE_TOKEN",
      tokenId: id,
    };
    expect(actions.deleteToken(id)).toEqual(expectedAction);
  });

  it("should create an action to open the delete token dialog", () => {
    const id = "5e9a1a39152f9a9ce03b9343";
    const expectedAction = {
      type: "OPEN_DELETE_TOKEN_DIALOG",
      tokenId: id,
    };
    expect(actions.openDeleteTokenDialog(id)).toEqual(expectedAction);
  });

  it("should create an action to open the add token dialog", () => {
    const expectedAction = {
      type: "OPEN_NEW_TOKEN_DIALOG",
    };
    expect(actions.openNewTokenDialog()).toEqual(expectedAction);
  });
});
