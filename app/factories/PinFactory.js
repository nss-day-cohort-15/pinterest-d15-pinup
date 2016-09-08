"use strict";
// Still need valid firebase URLs for each promise
app.factory("PinStorage", ($q, $http, FirebaseURL) => {
  let getUserPins = (user) => {
    let pins = [];
    return $q((resolve, reject)=>{
      $http.get('${FirebaseURL}/pins.json?orderBy="uid"&equalTo="${user}"')
      .success((pinObject)=>{
        if (pinObject !== null){
          Object.keys(pinObject).forEach((key)=>{
            pinObject[key].id = key;
            pins.push(pinObject[key]);
          });
          resolve(pins);
        } else {
          resolve(pins);
        }
      })
      .error((error)=>{
        reject(error);
      });
    });
  };

  let getSinglePin = (pinId) => {
    return $q( (resolve, reject) => {
      $http.get(`${FirebaseURL}pins/${pinId}.json`)
      .success( (pinObject) => {
        resolve(pinObject);
      })
      .error( (error) => {
        reject(error);
      });
    });
  };

  let updatePin = (pinId, editedPin) => {
    return $q( (resolve, reject) => {
      $http.patch(`${FirebaseURL}pins/${pinId}.json`,
        JSON.stringify(editedPin))
      .success( (pinFromFirebase) => {
        resolve(pinFromFirebase);
      })
      .error( (error) => {
        reject(error);
      });
    });
  };

  let postNewPin = (newPin) => {
    return $q( (resolve, reject) => {
      $http.post(`${FirebaseURL}/pins.json`,
        JSON.stringify(newPin))
        .success( (pinFromFirebase) => {
          resolve(pinFromFirebase);
        })
        .error( (error) => {
          reject(error);
        });
    });
  };

  let deletePin = (pinId) => {
    return $q( (resolve, reject) => {
      $http.delete(`${FirebaseURL}/pins/${pinId}.json`)
      .success( (pinFromFirebase) => {
        resolve(pinFromFirebase);
      });
    });
  };
  return {getUserPins, getSinglePin, updatePin, postNewPin, deletePin};
});