"use strict";
// Get boards to populate a users board
app.factory("BoardStorage", ($q, $http, FirebaseURL) => {
  let getUserBoards = (user) => {
    let boards = [];
    return $q((resolve, reject)=>{
      $http.get('${FirebaseURL}/boards.json?orderBy="uid"&equalTo="${user}"')
      .success((boardObject)=>{
        if (boardObject !== null){
          Object.keys(boardObject).forEach((key)=>{
            boardObject[key].id = key;
            boards.push(boardObject[key]);
          });
          resolve(boards);
        } else {
          resolve(boards);
        }
      })
      .error((error)=>{
        reject(error);
      });
    });
  };
// Get a single board
  let getSingleBoard = (boardId) => {
    return $q( (resolve, reject) => {
      $http.get(`${FirebaseURL}boards/${boardId}.json`)
      .success( (boardObject) => {
        resolve(boardObject);
      })
      .error( (error) => {
        reject(error);
      });
    });
  };
// Edit a board
  let updateBoard = (boardId, editedBoard) => {
    return $q( (resolve, reject) => {
      $http.patch(`${FirebaseURL}boards/${boardId}.json`,
        JSON.stringify(editedBoard))
      .success( (boardFromFirebase) => {
        resolve(boardFromFirebase);
      })
      .error( (error) => {
        reject(error);
      });
    });
  };
// Add new board to board
  let postNewBoard = (newBoard) => {
    return $q( (resolve, reject) => {
      $http.post(`${FirebaseURL}/boards.json`,
        JSON.stringify(newBoard))
        .success( (boardFromFirebase) => {
          resolve(boardFromFirebase);
        })
        .error( (error) => {
          reject(error);
        });
    });
  };
// Delete board from board
  let deleteBoard = (boardId) => {
    return $q( (resolve, reject) => {
      $http.delete(`${FirebaseURL}/boards/${boardId}.json`)
      .success( (boardFromFirebase) => {
        resolve(boardFromFirebase);
      });
    });
  };
  return {getUserBoards, getSingleBoard, updateBoard, postNewBoard, deleteBoard};
});