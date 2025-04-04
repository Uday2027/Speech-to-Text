alert("->Press start button and then say something to convert your speech to text && -> To stop press stop button")
        const recog = new webkitSpeechRecognition();
recog.lang='en-US';
recog.interimResults = true;
recog.continuous = true;

document.getElementById("st-btn").onclick = () => recog.start();

document.getElementById("stp-btn").onclick = () => recog.stop();

recog.onresult = event => {
    output.value = event.results[event.results.length-1][0].transcript;
}
navigator.mediaDevices.getUserMedia({audio:true});