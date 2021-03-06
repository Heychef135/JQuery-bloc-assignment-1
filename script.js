$(function() {
	var state = {};

	var addItem = function(state, item) {
		state[item] = 
			{ displayName: item,
			checked: false };
		console.log(state);
	};


	var renderList = function(state, element) {
		var itemsHTML = function(){
			for (var i=0; i < Object.keys(state).length; i++) {
				var currentItemName = Object.keys(state)[i];
				return '<li><span class="shopping-item">' + 
				currentItemName +
				'</span><div class="shopping-item-controls">' +
				'<button class="shopping-item-toggle">' +
				'<span class="button-label">check</span>' +
				'</button><button class="shopping-item-delete" value="' + currentItemName + '">' +
				'delete' +
				'</button></div>'
				'</li>';
			};
		};
		element.html(itemsHTML);
	}

	

	$("#js-shopping-list-form").submit(function(event) {
		event.preventDefault();
		addItem(state, $("#shopping-list-entry").val());
		renderList(state, $(".shopping-list"));
	})

	$(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
		console.log(event.target);
		$(".shopping-item").closest("span").toggleClass("shopping-item__checked");
	});

	$(".shopping-list").on("click", ".shopping-item-delete", function(event) {
		console.log(event.target);
		$(".shopping-item").closest("li").remove();
		var targetToDelete = $(event.target).attr("value");
		delete state[targetToDelete];
		console.log(state);
	});	
})
