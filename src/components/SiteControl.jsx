import React from "react";
import BoardList from "./BoardList";
import Details from "./Details";
import EditBoard from "./Edit";
import NewBoard from "./NewBoard";



class SiteControl extends React.Component{

      constructor(props){
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
          this.setState({mainBoardList: newMainBoardList,
          fromVisitableOnPage: false});
        }

        handleClick = () => {
          if(this.state.selectedBoard != null){
            this.setState({
              fromVisitableOnPage: false,
              selectedBoard: null,
              editing: false
            });
          } else{
            this.setState(preState => ({
              fromVisitableOnPage: !preState.fromVisitableOnPage,
            }));
          }
        }

      handleEditClick = () => {
        console.log("handleEditClick Reached");
        this.setState({editing: true});
      }

      handleChangingSelectedBoard = (id) => {
        const newMainBoardList = this.state.mainBoardList.filter(board => board.id !== id);
        this.setState({
          mainBoardList: newMainBoardList,
          selectedBoard: null
        });
      }

}








// function SiteControl() {
//   return(
//     <React.Fragment>
//       <h1>Mr.Fenks SnowBoards</h1>
//       <h1>welcome</h1>
//     </React.Fragment>
//   );
  
// }


export default SiteControl; 