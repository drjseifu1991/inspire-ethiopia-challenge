// class to create a countdown timer
class CountdownTimer {
    // setup timer values
    constructor({ selector, targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate;

        // grab divs on frontend using supplied selector ID
        this.refs = {
            clock: document.querySelector(`${this.selector}`)
        };
    }

    getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((total / 1000 / 60) % 60);
        const secs = Math.floor((total / 1000) % 60);
        return {
            total,
            days,
            hours,
            mins,
            secs,
        };
    }

    updateTimer({ days, hours, mins, secs }) {
        this.refs.clock.textContent = days +'d, '+ hours+':'+mins+':'+secs;
    }

    startTimer() {
        const timer = this.getTimeRemaining(this.targetDate);
        this.updateTimer(timer);
        setInterval(() => {
            const timer = this.getTimeRemaining(this.targetDate);
            this.updateTimer(timer);
        }, 1000);
    }
}