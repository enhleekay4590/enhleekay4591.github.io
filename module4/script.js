var names = new Array();
names[0] = "Lucky";
names[1] = "Brad";
names[2] = "Victor";
names[3] = "Lucy";
names[4] = "Zack";
names[5] = "Matt";
names[6] = "Duke";
names[7] = "Lyric";
names[8] = "Xavier";
names[9] = "David";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}