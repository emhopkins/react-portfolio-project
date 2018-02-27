# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

michael = Character.create(name: 'Michael')
pam = Character.create(name: 'Pam')
jim = Character.create(name: 'Jim')
dwight = Character.create(name: 'Dwight')
kelly = Character.create(name: 'Kelly')
andy = Character.create(name: 'Andy')
ryan = Character.create(name: 'Ryan')

quotes = Quote.create([{ text: "I feel like all my kids grew up, and then they married each other. It's every parent's dream.", character: michael},
	{ text: "This is my last Dundies ever, if I want mind control over him, is that too much to ask?", character: michael},
	{ text: "Holly this isn't Ocean's Eleven where you get together with your friends and you just have fun and you don't care about how it turns out.", character: michael},
	{ text: "The diabetes award goes to Stanley Hudson. Come on up here you sick bastard.", character: michael},
	{ text: "It goes to show that everything you want in life you get. And you can't work for it. It just comes to you.", character: michael},
	{ text: "I'm upset. My bladder is full. There is no telling what I might do right now, all over the inside of your precious little car.", character: michael},
	{ text: "I used to love coming here. The chicken parm is good, big part of my childhood. Oh! Maybe Michael will start dating that too.", character: pam},
	{ text: "I make that one copy, and I become the girl who makes copies, and by the end of the day I'm receptionist again. And the worst part is, I like making copies. The paper comes out all warm and stuff. And it's cold in there. Cause it's technically a closet.", character: pam},
	{ text: "Dwight mercy killed Angela's cat. It's very complicated. It's caused a lot of unpleasantness between Dwight and Angela. Who are both already prone to unpleasantness.", character: pam},
	{ text: "This is the last day of our summer interns. It's been nice. We haven't had interns in a while. Ever since Michael's Monica Lewinsky incident. He didn't do anything sexual, he just made far, far too many Monica Lewinsky jokes. It was just easier for Corporate to shut down the program.", character: pam},
	{ text: "I know way too much about Andy's scrotum.", character: pam},
	{ text: "We should have hired a professional to take the mental pictures.", character: pam},
	{ text: "I don't care what they say, I just want to eat. Which I realize is a lot to ask for... at a dinner party.", character: pam},
	{ text: "Last week, Dwight sent out a memo about the dress code. So, this is me showing him that I'm taking it very seriously.", character: jim},
	{ text: "Michael has asked Pam and me to dinner at least nine times. And every time we've been able to get out of it. But I've got to give him credit, he got me. Because I'm starting to suspect that there was no assignment from corporate.", character: jim},
	{ text: "One day Michael came in complaining about a speed bump on the highway. I wonder who he ran over then.", character: jim},
	{ text: "When Michael told us that Jan was pregnant, he led us to believe that he was the father. By telling us that he was the father.", character: jim},
	{ text: "Today is Thursday, but Dwight thinks that it's Friday. Aaaand, that's what I'll be working on this afternoon.", character: jim},
	{ text: "The eyes are the groin of the head.", character: dwight},
	{ text: "As of this morning, we are completely wireless here on Schrute Farms. So as soon as I find out where Mose hid all the wires, we can have power back on.", character: dwight},
	{ text: "When I die. I want to be frozen. And if they have to freeze me in pieces, so be it. I will wake up stronger than ever, because I will have used that time, to figure out exactly why I died. And what moves I could have used to defend myself better now that I know what hold he had me in.", character: dwight},
	{ text: "I like the people that I work with, generally. With four exceptions.", character: dwight},
	{ text: "And I did not become a Lackawanna County volunteer sheriff's deputy to make friends. And by the way, I haven't.", character: dwight},
	{ text: "Who am I? I'm Kelly Kapoor, the business bitch.", character: kelly},
	{ text: "I can't get anything lately unless I threaten to kill myself.", character: kelly},
	{ text: "My birthday was yesterday, and everybody forgot. I got really dressed up and excited, and no one said a word. There wasn't even a party. I think sometimes people are really mean to the hot, popular girl.", character: kelly},
	{ text: "Kobe Bryant has a foundation, and he is so hot. And he gave his wife the biggest diamond ring. I know he didn't do it. Maybe he did it.", character: kelly},
	{ text: "If I get to stay and Ryan is laid off, I will kill myself, like Romeo and Juliet... the Claire Danes one.", character: kelly},
	{ text: "Rid-dit-dit-dit-do.", character: andy},
	{ text: "You know, it's true what they say. Long Island iced teas are way stronger in Canada.", character: andy},
	{ text: "You meet a lot of ladies driving an Xterra, because you pull up to a stoplight, and look over and there's an Xterra next to you. They're always driven by chicks, so there's your icebreaker.", character: andy},
	{ text: "Several weeks ago, Andy Bernard had an incident. But after five weeks in Anger Management, I'm back. And I've got a new attitude. And a new name. And... a bunch of new techniques for dealing with the grumpies.", character: andy},
	{ text: "I live to frolf.", character: andy},
	{ text: "Saboteur! Saboteur! I'm going to kill you for real. This game... the game is over, I'm really going to shoot you!", character: andy},
	{ text: "I can't believe I started the fire.", character: ryan},
	{ text: "I miss the days when there was only one party I didn't want to go to.", character: ryan},
	{ text: "Last year, Creed asked me how to set up a blog. Wanting to protect the world from being exposed to Creed's brain, I opened up a Word document on his computer and put an address at the top. I've read some of it. Even for the Internet, it's... pretty shocking.", character: ryan},
	{ text: "Yes, the social networking feature of the Dunder Mifflin Infinity website was infiltrated by sexual predators.", character: ryan},
	{ text: "If you bring your boss to class, it automatically bumps you up a full letter grade. So... I'd be stupid not to do it, right?", character: ryan},
	])

