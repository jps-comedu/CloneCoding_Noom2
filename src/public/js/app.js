// alert("hi!");
// const socket = new WebSocket("http://localhost:3000");
const socket = new WebSocket(`ws://${window.location.host}`);
// `` <- 1 왼쪽에 있는 키