const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach((counter) => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		const inc = target / speed;
		// console.log(inc);
		if (count < target) {
			counter.innerText = count + inc;
			setTimeout(() => {
				updateCount();
			}, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});
