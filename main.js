function random(randomNumbar) {
	return Math.ceil(Math.random() * randomNumbar);
}

let name = prompt('Как вас зовут?');

while (name == '' || name == null) {
	name = prompt('Как вас зовут?');
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
let maxAttempts = getRandomInt(4, 8);

alert(name + ', угадай число от 1 до 100. У тебя есть ' + maxAttempts + ' попыток. Удачи!');

let numbar = random(100);
let attempts = 1;
let gues = prompt('Угадайте число:');
while (gues != numbar) {
	attempts++;
	if (gues < numbar) {
		gues = prompt('↑ Бери выше!');
	} else if (gues > numbar) {
		gues = prompt('↓ Опускайся, куда ты полез!');
	}

	if (attempts == maxAttempts && gues != numbar) {
		alert('Вы потратили слишком много попыток. У вас их было ' + maxAttempts + ', чтобы попробовать еще раз, нажмите "F5"');
		breka;
	}
}

alert(name + ', молодца! Это было число "' + numbar + '". Разоблачил меня за ' + attempts + '/' + maxAttempts + ' попыток');
