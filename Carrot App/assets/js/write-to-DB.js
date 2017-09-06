var firebaseRef = firebase.database().ref();

function writeToUsers() {
    console.log("Writing to Users");
    firebaseRef.child("Users").push({
        Email: document.getElementById('UsersEmail').value,
        Password: document.getElementById('UsersPassword').value
    });
    console.log("Wrote to Users");
}

function writeToRewards() {
    console.log("Writing to Rewards");
    firebaseRef.child("Rewards").push({
        Name: document.getElementById('RewardsName').value,
        Currency: document.getElementById('RewardsCurrency').value,
        Ratio: document.getElementById('RewardsRatio').value
    });
    console.log("Wrote to Rewards");
}

function writeToUserRewards() {
    var rewards = document.getElementById('UserRewardsRewards').value.split(',');
    var points = document.getElementById('UserRewardsPoints').value.split(',');

    if (rewards.length != points.length) {
        alert("Make sure that the rewards and points arrary are equal");
    }
    else {
        for (var i = 0; i < rewards.length; i++) {
            rewards[i] = rewards[i].trim();
            points[i] = points[i].trim();
        }
    }

    console.log("Writing to User Rewards");
    firebaseRef.child("User Rewards").push({
        User: document.getElementById('RewardsName').value,
        Rewards: rewards,
        Points: points
    });
    console.log("Wrote to User Rewards");
}

function readFromUsers(){
    firebaseRef.child('Users').on("value", function(snapshot){
        console.table(snapshot.val());
    }, function (error){
        console.log("Error: " + error.code);
    });
}