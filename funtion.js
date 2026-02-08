const dateOfParty = new Date("2026-11-14T19:00:00Z"); // Set the date of the party here

const timer = () => {
    const now = new Date();
    const difference = dateOfParty - now;
    
    if (difference <= 0) {
        document.getElementById("timer").innerHTML = "The party has started! 🎉";
        clearInterval(interval);
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

const interval = setInterval(timer, 1000);
    timer();
    