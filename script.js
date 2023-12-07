let loadImgsBtn = document.getElementById("loadBtn");
let loadImgsBtn2 = document.getElementById("loadBtn2");
loadImgsBtn.addEventListener("click", loadImgs("nature"));
loadImgsBtn2.addEventListener("click", loadImgs("city"));
let pictureWrapper = document.getElementById("pictureWrapper");

function loadImgs(variable) {
	fetch(`https://api.pexels.com/v1/search?query=${variable}`, {
		headers: {
			Authorization: "y24VAi79pJ5X1DgVgWNtXBVeW0MGWfyDKoKEsfdeEA8wyEuwIjKmIDB0",
		},
	})
		.then((resp) => resp.json())
		.then((pictures) => {
			displayPictures(pictures);
		})
		.catch((err) => console.error(err.message));
}

function hide() {
	const targetElement = event.target;

	targetElement.parentElement.style.opacity = 0;
}

function displayPictures(pictures) {
	let photos = pictures.photos;
	photos.forEach((picture) => {
		console.log(picture);
		pictureWrapper.innerHTML += `
			<div class="card" style="width: 18rem">
				<img src="${picture.src.landscape}" class="card-img-top" alt="..." />
				<div class="card-body">
					<h5 class="card-title">"${picture.id}"</h5>
				</div>
      <button onclick="hide()">Hide</button>
			</div>`;
	});
}
