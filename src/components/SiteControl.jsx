import React from "react";
import BoardList from "./BoardList";
import Details from "./Details";
import EditBoard from "./Edit";
import NewBoard from "./NewBoard";



class SiteControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mainBoardList: [],
      fromVisitableOnPage: false,
      editing: false,
      selectedBoard: null
    };
  }

  handleAddingNewBoardToList = (newBoard) => {
    const newMainBoardList = this.state.mainBoardList.concat(newBoard);
    this.setState({
      mainBoardList: newMainBoardList,
      fromVisitableOnPage: false
    });
  }

  handleClick = () => {
    if (this.state.selectedBoard != null) {
      this.setState({
        fromVisitableOnPage: false,
        selectedBoard: null,
        editing: false
      });
    } else {
      this.setState(preState => ({
        fromVisitableOnPage: !preState.fromVisitableOnPage,
      }));
    }
  }

  handleEditClick = () => {
    console.log("handleEditClick Reached");
    this.setState({ editing: true });
  }

  handleChangingSelectedBoard = (id) => {
    const newMainBoardList = this.state.mainBoardList.filter(board => board.id !== id);
    this.setState({ selectedBoard: selectedBoard });
  }

  handleDeleteBoard = (id) => {
    const newMainBoardList = this.state.mainBoardList.filter(board => board.id !== id);
    this.setState({
      mainBoardList: newMainBoardList,
      selectedBoard: null
    });

  }
  handleSellingBoard = (id) => {
    let boardToEdit = this.state.mainBoardList.filter(board => board.id)[0];
    if (boardToEdit.quantity === 0) {
      boardToEdit.quantity = 0;
    } else {
      boardToEdit.quantity--;
      const editMainBoardList = this.state.newMainBoardList
        .filter(board => board.id !== id)
        .concat(boardToEdit);
      this.setBoard({
        mainBoardList: editMainBoardList.sort((a, b) => a.terrain.localeCompare(b.name))
      });
    }
  }

  handleEditBoardInList = (boardToEdit) => {
    const editMainBoardList = this.state.mainBoardList
      .filter(board => board.id !== this.state.selectedBoard.id)
      .concat(boardToEdit);
    this.setState({
      mainBoardList: editMainBoardList,
      editing: false,
      selectedBoard: null
    })
  }



  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState =
        <EditBoard
          board={this.state.selectedBoard}
          onEditBoard={this.handleEditBoardInList} />
      buttonText = "return To Board List";
    } else if (this.state.selectedBoard != null) {
      currentlyVisibleState =
        <Details
          board={this.state.selectedBoard}
          onClickingDelete={this.handleDeleteBoard}
          onClickingEdit={this.handleEditBoardInList}
          onClickingSell={this.handleSellingBoard} />
      buttonText = "return to board list";
    } else if (this.state.fromVisitableOnPage) {
      currentlyVisibleState =
        <newBoard
          onNewBoardCreation={this.handleAddingNewBoardToList} />
      buttonText = "return to board list";
    } else {
      currentlyVisibleState =
        <BoardList
          boardList={this.state.mainBoardList}
          onBoardSelection={this.handleChangingSelectedBoard} />
      buttonText = "add board";

    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onclick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );

  }
}


export default SiteControl;
