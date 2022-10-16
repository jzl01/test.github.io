var titleEl = document.querySelector("#title");
var contentEl = document.querySelector("#content");
var addBtn = document.querySelector("#btn");
var ul = document.querySelector(".comment-list ul");

addBtn.onclick = function(){
	var title = titleEl.value;
	var content = contentEl.value;
	if(title == "" || content == ""){
		alert("请正确输入内容!");
		return;
	}
	titleEl.value = "";
	contentEl.value = "";
	
	var li = document.createElement("li");
	li.className = "box";
	if(ul.childElementCount == 0){
		ul.appendChild(li);
	}else{
		ul.insertBefore(li, ul.firstElementChild);
	}
	li.innerHTML = "<h3>" + title + "</h3><p>" + content + "</p><button class='delete-btn'>删除</btn>";
	deleteBtn = document.querySelector(".delete-btn");
	
	deleteBtn.onclick = function(){
		console.log(this.parentElement);
		this.parentElement.remove();
	}	
}


