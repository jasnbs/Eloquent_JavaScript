  When action grows unprofitable, gather information; when infor
mation grows unprofitable, sleep.
 —Ursula K. Le Guin, The Left Hand of Darkness
  At one point, language-based interfaces, such as the BASIC and DOS prompts
 of the 1980s and 1990s, were the main method of interacting with computers
  Computers themselves can do only stupidly straightforward things.
 The reason they are so useful is that they do these things at an incredibly
 high speed. A program can ingeniously combine an enormous number of these
 simple actions to do very complicated things.
 A program is a building of thought. It is costless to build, it is weightless,
 and it grows easily under our typing hands
  But as a program grows, so does
 its complexity. The skill of programming is the skill of building programs that
 don’t confuse the programmer. The best programs are those that manage to
 do something interesting while still being easy to understand.
  Newproblemsoftenrequirenew
 solutions.Thefieldofprogrammingisyoungandstilldevelopingrapidly,and
 it isvariedenoughtohave roomforwildlydifferentapproaches. Thereare
 manyterriblemistakestomake inprogramdesign, andyoushouldgoahead
 andmakethematleastoncesothatyouunderstandthem.Asenseofwhata
 goodprogramlooks likeisdevelopedwithpractice,not learnedfromalistof
 rules
 Programslookedsomethinglikethis:
 00110001 00000000 00000000
 00110001 00000001 00000001
 00110011 00000001 00000010
 01010001 00001011 00000010
 00100010 00000010 00001000
 01000011 00000001 00000000
 01000001 00000001 00000001
 00010000 00000010 00000000
 01100010 00000000 00000000
 This isaprogramtoaddthenumbers from1to10togetherandprint the  the
 result: 1+2+ ... +10=55.


 Set “total” to 0.
 Set “count” to 1.
 [loop]
 Set “compare” to “count”.
 Subtract 11 from “compare”.
 If “compare” is 0, continue at [end].
 Add “count” to “total”.
 Add 1 to “count”.
 Continue at [loop].
 [end]
 Output “total”.
 Can you see how the program works at this point? The first two lines give
 two memory locations their starting values: total will be used to build up the
 result of the computation, and count will keep track of the number that we are
 currently looking at. The lines using compare are probably the most confusing
 ones. The program wants to see whether count is equal to 11 to decide whether
 it can stop running. Because our hypothetical machine is rather primitive, it
 can test only whether a number is zero and make a decision based on that.
 It therefore uses the memory location labeled compare to compute the value
 of count- 11 and makes a decision based on that value. The next two lines
 add the value of count to the result and increment count by 1 every time the
 program decides that count is not 11 yet.


 
 result: 1+2+ ... +10=55.
 
