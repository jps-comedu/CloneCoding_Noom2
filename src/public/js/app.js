// alert("hi!");
// const socket = new WebSocket("http://localhost:3000");
const socket = new WebSocket(`ws://${window.location.host}`);
// `` <- 1 왼쪽에 있는 키

socket.addEventListener("open", () => {
    console.log("Connected to Server");
});

socket.addEventListener("message", (message) => {
    console.log("Just got this:", message.data, "from the server");
});

socket.addEventListener("close", () => {
    console.log("Disconnected to Server");
});

setTimeout(() => {
    socket.send("hello from browser!");
}, 5000);