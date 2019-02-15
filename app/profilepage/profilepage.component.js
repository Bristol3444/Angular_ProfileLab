"use strict";
const profilepage = {
  template: `
  <div class="prof-display"
    <div id="img-hold"
      <img src="app/style/chicken.jpg" alt="chicken">
    </div>
  <p class="prof-name">{{$ctrl.userDocs.name}}</p>
  <p class="prof-contact">{{$ctrl.userDocs.email}}</p>
  <p class="prof-bio">{{$ctrl.userDocs.bio}}</p>
  <button class="edit-btn" ng-click="$ctrl.pullEditPage()">Edit</button>
  </div
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