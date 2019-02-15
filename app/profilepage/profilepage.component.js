"use strict";
const profilepage = {
  template: `
  <p>Name :{{$ctrl.userDocs.name}}</p>
  <p>Email :{{$ctrl.userDocs.email}}</p>
  <p>Bio :{{$ctrl.userDocs.bio}}</p>
  <button ng-click="$ctrl.pullEditPage()">Edit</button>
  `,
  controller: ["ProfileService", function(ProfileService){
      const vm  = this;
      vm.pullEditPage = () => {
        ProfileService.editUserProfile();
      };
      vm.$onInit = () => {
        vm.userDocs = ProfileService.getUserProfile();
      }
  }]
};
angular
    .module("ProfileApp")
    .component("profilepage", profilepage);