Oni Tic Toc Toe
===============
>##### you can play this game at https://wcc356.github.io/oni-tic-tac-toe
>##### Language: Typescript  
>##### Framework: Phaser 

Introduction
---------------
> **Oni(鬼)** in japanese language is like an ogre. 
> Use your chess(oni) to control the castles! 
> This is a complicated tic-tac-toe!


## Rules:
> There's 3 different sizes of oni, each has 2 chess pieces. 
>
> The bigger one can cover the smaller and make the covered can't move
>
> You can move one of your chess on the board in your turn, 
>
> but can leave the board after enter the board
>
>Just like a tic-tac-toe, winner is the first who make a line (but when you move and try to make a line, the covered chess making the line will faster than you to become the winner)

## future target:
>1. introduce the ancient Japanese castle, their location is not located randomly
>
>2. make the tutorial more exquisite, now I just make a video to demo that, I hope I can just use the code to represent the tutorial
>
>3. multiple player connecting, I am learning but still not on site

## 規則:

>有三種大小的棋子各兩個 大的可以蓋住小的，被蓋住的棋子無法移動
>
>輪到你時可以自由移動一個棋子，但如果已經放入棋盤上的棋子就必須一直待再棋盤上
>
>勝利條件就是井字遊戲(OOXX)，連成一直線就贏了(但如果你動作後在下面對方先連成一線就算你連線了也算對方贏，)

## 未來預計:
>
> 1.新增那些日本古城的介紹
>
> 2.會有規則的演示和小提示
>
> 3.連線對戰

### Credit: Andrew Ku, rexrainbow, anyone who helped me
### Image source: いらすとや

The detail about this porject
===============

Why I used phaser
---------------
First, I want to make a web game like a flash game I played when I was young. 

Kinds of that small but interesting game.

The biggest program to make a game is Unity. 

There's lots of sources talking about how to make a game with Unity.

BUT I found another light framework for making a web game called phaser. 

I read a book about how to make a game with Phaser by OURCADE.

If the game I want to make is just a 2D game. Why do I need to control Unity like control an airplane. 

Finally, I used **Phaser**.


let's talk about how this game works  
---------------
I spent less time deciding to make that complicated tic-tac-toe. 

It's a board game I had played with my friend once. 

Simply rule: like a normal tic-tac-toe just try your best to make a line then win.

But this is not just a tic-tac-toe game, it has other rules: there are 3 sizes of chess and each one has 2 for each team respectively.

There are 3 sizes: large, middle, small, and the bigger one can cover the smaller one no matter what the chess player owns. 

Then this game will be fun. 

It requires using more strategy to think how to win, like if your opponent is making 2 blocks and going to get a line, 

which approach would you do? 

If you put the smaller chess on the last board to block the line, can he have another bigger chess to cover that and make the line to win? 

Or do you just make a bigger chess cover for each one of his 2 chess? 

And do you cover your smaller chess with bigger one and try to give your opponent a punch?

There are still many strategies to talk about.So i said, it’s not just a tic-tac-toe.

Then, how do I start? There are many things I didn't expect to need at the beginning. 
---------------
Primarily, I need a board, a chess and a win condition. 

I searched the ancient castles in Japan, and checked their position to make boards. 

Then I made chess with the class, using the class syntax , this is the first time I used the OOP concepts. 

I’m not sure about everything. 

Looking for others making game videos on  the net. 

I want to use this Chess-class to make all my chess. 

Then I made the Castle-class as my board. Just use the iterated and generate those chess and board.

Now, I have red chess group on the left side, blue chess group on the right side, 

and the “#”type (9 blocks) board with castles is in the middle. 
	
Let’s introduce how I instruct those classes. 
---------------
### First is the Chess-class ,
in this class there are 
- size 
- team 
- Chesstexture  

the typescript feature has an enum method to clarify what your string prevent you got confuse you can do like ‘Size.Large’, 
> so the enum has 
>- Size: Large, Medim, Small
>- Team: Red, Blue, None
>- CastleTexture: lots textstring like:  "aduchijou", "himejijou" ... so on
>- ChessTexture: lots textstring like: "large-red", "medium-blue" ...

these may easily know this is the large size, and i also use at ‘Team.Red’, ‘ChessTexture.LargeRed’ and so on… 

and use the texture string  to generate the image, and according size to change the display size. 

Team will use it at the time when you occupy a castle, I’ll talk about it in the next paragraph.
	
### Then there is the Castle-class. 
Castle-class has the background, owner, and size.

1. Owner is which team has this castle, there are ‘Team.Red’, ‘Team.Blue’, and default is ‘Team.Nonde’ as there is still no one at this land. 
2. The background will auto change the color on the basis of the owner. I used the ‘get’ and ‘set’ (the es6 syntax)  as a listener. 

The size would be the biggest one chess on the castle, at start I forgot there’s may not only one chess on the castle, 
maybe there are larger chess covering the smaller. 

So I **added an array** to help this problem.  

When there is another chess put on the castle , unshift it to the head and change the owner and size.

And upgrade the castle where the chess comes from, make that castle shift the array,and change owner and size.

I write the game-object event  on the Chess-class,
--------------- 
there are many events to set.

Long story short, when I drag a chess, then tint the chess(change color on ground of its team). 

Next, when I **drag** to the castle, tint the castle too. 

Of course when you leave the castle or stop dragging chess, make the color back. 

Further, you need to check if you can drop the chess on the castle. 

It was decided at the castle size we talked about in the last paragraph 

and after you pass the condition the castle will do that changing the owner,size,array things.


If not, just put you back at the first position you drag.


#### Until now, we have almost finished the game, 
#### we can drag our chess, and make the board change the owner(team's color). 


So after that we are going to set the winner condition.
--------------- 

At first I just check all the castle's colors and check if they are a line.

This is just a brute force method, check all line's castles's team is equal or not 

After some days I realized there’s another easy way to check the winner. 

Just make the red = 1, blue =-1 and none = 0 then sum the line. 

Though this is still a brute force method, it seems more efficient. 

However, I faced another problem. If there are **two color lines after I move out a chess.** 

It may happen because when you take the larger chess and put it to another board then make a line.

But if there’s another team’s chess under the chess which you take off, it’ll take place! 

The underneath chess also makes a line. 

So how to fix this problem? 

At our past approach, the winner just on the basis of the brute force of which line is checked first. 

Thus, my approach is to **check the condition twice**. 

We want the underneath chess team to be the winner when it gets line. It makes sense right?

So this is my method: check the condition for the first time **without the chess we just dropped.** 

First make the chosen chess = 0 (normally, it shall be 1 or -1 ) and the line sum will never become 3 or -3. 

Then we make the value back and check one more time if there’s a win line.

It's looks a lit weird, but it's effective.
