var load_email = function() {
	var arr = [109, 105, 99, 104, 97, 101, 108, 46, 101, 97, 103, 108, 101, 64, 117, 116, 101, 120, 97, 115, 46, 101, 100, 117];
    var em = "";
    var arr_length = arr.length;
    for(var i=0;i<arr_length;i++)em+=String.fromCharCode(arr[i]);

    $("#email").html("Email");
    $("#email").attr("href", "mailto:"+em);
};

var load_background_pic = function() {
	
	var index = (parseInt(Math.random() * 5, 10));
	if (index < 4) {
		var imageUrl = 'trail-of-lights-' + index + '.jpg';
	} else {
		var imageUrl = 'lake-sammamish.jpg';		
	}
	
	
	$(".background-pic").css({
			"background": 
				'url(img/' + imageUrl + ') no-repeat bottom center scroll',
		}
	);
}

$(function() {
	load_email();
	load_background_pic();
});