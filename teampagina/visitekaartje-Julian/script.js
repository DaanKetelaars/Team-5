const backgroundNormal = document.querySelector('.bg1');
const backgroundFunny = document.querySelector('.bg2');

function showFunnypic() {
	backgroundFunny.classList.remove('hide');
	setTimeout(function() { backgroundFunny.classList.add('hide'); }, 500);
}

backgroundNormal.addEventListener('click', showFunnypic);