"use strict"
const editprofile = {
    template: `
      <p class="explain">Use the form below to update your profile.</p>
      <form ng-submit="$ctrl.getProf($ctrl.userDocs)">
      <p class="form-directive">Name</p>
      <input type="text" placeholder="Stuart" ng-model="$ctrl.userDocs.name">
      <p class="form-directive">Email</p>
      <input type="text" placeholder="a.s@gmail.com" ng-model="$ctrl.userDocs.email">
      <p class="form-directive">Bio</p>
      <input type="text" placeholder="Hello Hello" rows="7" ng-model="$ctrl.userDocs.bio">
      <button class="submit-btn">submit changes</button>
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