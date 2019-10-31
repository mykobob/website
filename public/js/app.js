var load_email = function () {
	var arr = [109, 105, 99, 104, 97, 101, 108, 46, 108, 105, 64, 117, 116, 101, 120, 97, 115, 46, 101, 100, 117];
    var em = "";
    var arr_length = arr.length;
	var i;
	
    for (i=0;i<arr_length;i++) em+=String.fromCharCode(arr[i]);

    $("#email").html("Email");
    $("#email").attr("href", "mailto:"+em);
};

$(function() {
	load_email();
});
