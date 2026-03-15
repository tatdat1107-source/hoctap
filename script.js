// Hiệu ứng cuộn mượt

document.querySelectorAll("a").forEach(link => {

link.addEventListener("click", function(e){

let target = this.getAttribute("href");

if(target.startsWith("#")){
e.preventDefault();
document.querySelector(target).scrollIntoView({
behavior: "smooth"
});
}

});

});


// Thông báo tải file

document.querySelectorAll(".download").forEach(btn => {

btn.addEventListener("click", function(){

alert("Tính năng tải tài liệu sẽ được cập nhật sớm!");

});

});
