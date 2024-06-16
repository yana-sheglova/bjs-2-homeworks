class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	};

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы')
		};
		if (this.alarmCollection.some(item => item.time === time)) {
			console.warn('Уже присутствует звонок на это же время')
		}; 
		this.alarmCollection.push({
			time,
			callback,
			canCall: true
		})
	};

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(item => item.time !== time)
	};

	getCurrentFormattedTime() {
		let now = new Date();
		let hours = now.getHours();
		let mins = now.getMinutes();
		if (hours < 10) {
			hours = '0' + hours;
		};
		if (mins < 10) {
			mins = '0' + mins
		};
		return `${hours}:${mins}`
	};

	start() {
		if (this.intervalId) {
			return
		};

		this.intervalId = setInterval(() => {
			let currentTime = this.getCurrentFormattedTime();
			this.alarmCollection.forEach(item => {
				if (item.time === currentTime && item.canCall) {
					item.canCall = false;
					item.callback();
				}
			})
		}, 1000);
	};

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	};

	resetAllCalls() {
		this.alarmCollection.forEach(item => item.canCall = true)
	};

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	};
};
