let newUser = {};
let bestFriend = {
	diff: 100,
	name: "",
	image: ""
};

// storing entered value into variables
$('#submit').on('click', () => {
	let userName = $('#name').val().trim();
	let imag = $('#image').val().trim();
	let ans1 = $('#quest1').val().trim();
	let ans2 = $('#quest2').val().trim();
	let ans3 = $('#quest3').val().trim();
	let ans4 = $('#quest4').val().trim();
	let ans5 = $('#quest5').val().trim();
	let ans6 = $('#quest6').val().trim();
	let ans7 = $('#quest7').val().trim();
	let ans8 = $('#quest8').val().trim();
	let ans9 = $('#quest9').val().trim();
	let ans10 = $('#quest10').val().trim();

	// check if any field is empty
	if (userName === "" || imag === "" || ans1 === "" || ans2 === "" || ans3 === "" || ans4 === "" || ans5 === "" || ans6 == "" || ans7 == "" || ans8 == "" || ans9 == "" || ans10 == "") {
		alert("Please fill in all fields");
	}
	// alert("working"); //to test if above if block and else block is working

	//else store entered values into an object named newUser
	else {
		newUser = {
			name: userName,
			photo: imag,
			// made an array named scores to enter all answers from user
			scores: [ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans10]
		};

		// call a function findFriend() to find friends and this function will take scores as an argument
		findFriend(newUser.scores);

		setTimeout(postData, 1500);

		function postData() {
			$.post({ url: '/api/friends', contentType: 'application/json' }, JSON.stringify(newUser));
		}

		$('#name').val("");
		$('#image').val("");
		$('#quest1').val("");
		$('#quest2').val("");
		$('#quest3').val("");
		$('#quest4').val("");
		$('#quest5').val("");
		$('#quest6').val("");
		$('#quest7').val("");
		$('#quest8').val("");
		$('#quest9').val("");
		$('#quest10').val("");
	}
});

// defining a function findFriend
function findFriend(scores) {

	$.get('/api/friends', (friends) => {

		let count = 0;
		let arrayLength = friends.length;

		// loop through the all values in friends
		for (var i = 0; i < arrayLength; i++) {

			// called a function to calculate scores on all elements in friends array
			calcScoreDiff(scores, friends[i]);
			count++;
		}

		if (count === arrayLength) {
			$('#friendName').text(bestFriend.name);
			$('#friendImg').attr('src', bestFriend.image);
			$('#myModal').modal('toggle');
		}
	});
}


function calcScoreDiff(user, friend) {

	let diff = 0;
	let count = 0;

	for (var i = 0; i < 5; i++) {

		// diff will add values as if
		// user1 = 4,5,3,4,2;
		// user2 = 3,5,3,2,1;
		// diff+ = 1+0+0+2+1;
		// that is diff = 4

		diff += Math.abs(user[i] - friend.scores[i]);
		count++;  //count will be incremented
	}

	// if count is =5 than stop and check if diff < bestfriend.diff
	if (count === 5) {
		if (diff < bestFriend.diff) {
			
			// if its true than set diff to bestFriend.diff, name to bestFriend.name and image to bestFriend.image
			bestFriend.diff = diff;

			//friend.name is the name that fetched from friends
			bestFriend.name = friend.name;
			bestFriend.image = friend.photo;
			
			//else return
		} else {
			return;
			
		}
	}
}



