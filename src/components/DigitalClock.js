const DigitalClock = () => {
    const time1 = setInterval(() => {
        const now = new Date();
        const currentTime = now.toLocaleTimeString("en-US", { hour12: true });

        console.log(currentTime);

        if (currentTime === "12:03:00 PM") {
            clearInterval(time1);
            console.log("Clock stopped at 12:02 PM");
        }
    }, 1000);
};

export default DigitalClock;
