function changeImage(id){
	let imagePath = document.getElementById(id).getAttribute('src');
	console.log(imagePath);
	document.getElementById('img-main').setAttribute('src',imagePath)
}