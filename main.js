const btn = document.querySelector('.talk');
        const content = document.querySelector('.content');
        //Copyright of Mathews Antony
        //
        const greetings = ["I am Fine,Thank You"]
        const weather = ['Weather is fine']
        const Me = ["I'm an AI"]
        const Bored = ["Watch Some Youtube"]
        const Thnx = ["You are Welcome"]
        const User = ["You"]
        const line = ["For You Always"]
        const ready = ["I am online and Ready"]
        const you = ["You are My Owner,Mathews Antony"]
        const Tragedy = ["I get that a Lot"]
        const hello = ["Hello"]
        const Reply = ["Here You Go "]
        const comparison = ["You Underestimate Me "]
        const Bye = ["Bye"]
        const Diagnostics = ["Running diagnostics"]
         
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition =  new SpeechRecognition();

        recognition.onstart = function(){
            console.log('Speak Now!!')
        }
        recognition.onresult = function (event) {
            const current = event.resultIndex;

            const transcript = event.results[current][0].transcript;
            content.textContent = transcript;
            readOutLoud(transcript);

        };

        btn.addEventListener('click', () =>{
            recognition.start();
        });

        function readOutLoud(message){
            const speech = new SpeechSynthesisUtterance();

            speech.text = "I don't know";

            if (message.includes('how are you')) {
		    const finalText =
			greetings[Math.floor(Math.random() * greetings.length)];
		   speech.text = finalText;
	     }
		 if (message.includes('who are you')) {
		    const finalText =
			Me[Math.floor(Math.random() * Me.length)];
		   speech.text = finalText;
	     }
		 if (message.includes('how is the weather')) {
		    const finalText =
			weather[Math.floor(Math.random() * weather.length)];
		   speech.text = finalText;
		   window.open('https://www.google.com/search?query=how+is+the+weather');
	     }
		 if (message.includes('hello')) {
		    const finalText =
			hello[Math.floor(Math.random() * hello.length)];
		   speech.text = finalText;
	     }
		 if (message.includes('open Google')) {
		    const finalText =
			Reply[Math.floor(Math.random() * Reply.length)];
		   speech.text = finalText;
		   window.open('https://www.google.com/');
	     }
		 if (message.includes('open YouTube')) {
		    const finalText =
			Reply[Math.floor(Math.random() * Reply.length)];
		   speech.text = finalText;
		   window.open('https://www.youtube.com/');
	     }
         if (message.includes('open YouTube music')) {
		    const finalText =
			Reply[Math.floor(Math.random() * Reply.length)];
		   speech.text = finalText;
		   window.open('https://www.music.youtube.com/');
	     }
         if (message.includes('open Gmail')) {
		    const finalText =
			Reply[Math.floor(Math.random() * Reply.length)];
		   speech.text = finalText;
           window.open('https://mail.google.com/');
	     }
         if (message.includes('open to do list')) {
		    const finalText =
			Reply[Math.floor(Math.random() * Reply.length)];
		   speech.text = finalText;
           window.open('https://chat-3f351.web.app/To%20Do%20List.html');
	     }
         if (message.includes('open Wikipedia')) {
            const finalText =
                Reply[Math.floor(Math.random() * Reply.length)];
            speech.text = finalText;
            window.open('https://www.wikipedia.org/')
        }
         if (message.includes('I am bored')) {
		    const finalText =
			Bored[Math.floor(Math.random() * Bored.length)];
		   speech.text = finalText;
	     }
         if (message.includes('thank you')) {
		    const finalText =
			Thnx[Math.floor(Math.random() * Thnx.length)];
		   speech.text = finalText;
	     }
         if (message.includes('thanks')) {
		    const finalText =
			Thnx[Math.floor(Math.random() * Thnx.length)];
		   speech.text = finalText;
	     }
		 if (message.includes('bye')) {
		    const finalText =
			Bye[Math.floor(Math.random() * Bye.length)];
		   speech.text = finalText;
	     }
		if (message.includes('close')) {
		    window.close(this);
	     }
		if(message.includes(SuperBot)) {
			window.open('https://mathewsthecoder007.github.io/SuperBot/');
		}
            speech.volume = 1;
            speech.rate = 1;
            speech.pitch = 1;

            window.speechSynthesis.speak(speech);
        }
