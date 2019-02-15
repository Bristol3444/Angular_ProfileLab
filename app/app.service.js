"use strict";
function ProfileService ($location) {
    const self = this;
    self.userDocs = {
        name: "Grant Chirpus",
        email: "chirpus@gc.com",
        bio: "code-a-doodle-do motherclucker"
    }
    self.getUserProfile = () => {
        return self.userDocs;
    }
    self.setUserProfile = (userDocs) => {
        self.userDocs = userDocs;
    }
    self.editUserProfile = () => {
        $location.path("/edit");
    }
    self.goHome = () => {
        $location.path("/form");
    }

}

angular
    .module("ProfileApp")
    .service("ProfileService", ProfileService);