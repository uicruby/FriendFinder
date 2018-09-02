
let newUser = {};
let bestFriend = {
	diff: 100,
	name: "",
	image: ""
};


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

	if (userName === "" || imag === "" || ans1 === "" || ans2 === "" || ans3 === "" || ans4 === "" || ans5 === "") {
		alert("Please fill in all fields");
	}
	else {
		newUser = {
			name: userName,
			photo: imag,
			scores: [ans1, ans2, ans3, ans4, ans5]
		};

		findFriend(newUser.scores);

		setTimeout(postData, 1500);

		function postData() {
			$.post({ url: '/api/friends', contentType: 'application/json' },JSON.stringify(newUser));
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

function findFriend(scores) {
	$.get('/api/friends', (friends) => {
		var count = 0;
		var arrayLength = friends.length;
		for (var i = 0; i <= arrayLength; i++) {
			calcScoreDiff(scores, friends[i]);
			count++
		}
		if(count==arrayLength){
			$("#match-name").text(data.name);
          $("#match-img").attr("src", data.photo);

          // Show the modal with the best match
          $("#results-modal").modal("toggle");
			// $('#friendName').text(bestFriend.name);
			// $('#friendImg').attr('src', bestFriend.image);
			// $('#myModal').modal('toggle');
		}
	});

}