let total=0,count=1;
while(count<=10){           
    total+=count;
    count++;
}
console.log(total);//this is basic code in introduction that counts numbers from 1 to 10 
 /*This version gives us a few more improvements. Most importantly, there  no need to specify the way we want the program to jump back and forth
anymore—the while construct takes care of that. It continues executing the
block (wrapped in braces) below it as long as the condition it was given holds.
That condition is count <= 10, which means “the count is less than or equal  to 10”. */