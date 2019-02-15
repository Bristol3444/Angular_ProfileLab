"use strict"
const editprofile = {
    template: `
      <form ng-submit="$ctrl.getProf($ctrl.userDocs)">
      <p>Name</p>
      <input type="text" placeholder="Stuart" ng-model="$ctrl.userDocs.name">
      <p>Email</p>
      <input type="text" placeholder="a.s@gmail.com" ng-model="$ctrl.userDocs.email">
      <p>Bio</p>
      <input type="text" placeholder="Hello Hello" ng-model="$ctrl.userDocs.bio">
      <button>submit changes</button>
      </form>
    `,
    controller: ["ProfileService", function(ProfileService){
      const vm = this;
      vm.getProf = (userDocs) => {
        console.log(userDocs);
        ProfileService.setUserProfile(userDocs);
        ProfileService.goHome();
      }
    }]
  
  };
angular
    .module("ProfileApp")
    .component("editprofile", editprofile);