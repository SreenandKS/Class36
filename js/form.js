class Form{
    constructor(){
      this.input = createInput("name");
      this.button = createButton('Play');
      this.greeting = createElement('h3');
    }

    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
        
    }

    display(){
        var title = createElement('h2');
        title.html("Car Racing Game By Sreenand");
        title.position(230,0);

       
        

        this.input.position(230,160);
        this.button.position(350,200);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello " + name);
            this.greeting.position(230,160);

        });
    }
}