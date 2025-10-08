
			function generateText(sentenceCount){
                let bodyText=["The smaller your reality, the more convinced you are that you know everything.",
                     "If the facts don't fit the theory, change the facts.",
                      "The past has no power over the present moment.",
                       "This, too, will pass.",
                        "</p><p>You will not be punished for your anger, you will be punished by your anger.", 
                        "Peace comes from within. Do not seek it without.", 
                        "<h2>Heading</h2><p>The most important moment of your life is now. The most important person in your life is the one you are with now, and the most important activity in your life is the one you are involved with now."]
				for (let i=0; i<sentenceCount; i++)
				document.write(bodyText[Math.floor(Math.random()*7)]+" ")
			}