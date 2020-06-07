// Sample code to perform I/O:
 
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
 
process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});
 
process.stdin.on("end", function () {
   main(stdin_input);
});
 
function main(input) {
    var data=input.split('\n');
    var t=data[0];
    var mod=1000000007;
    for(var tc=1; tc<=t; tc++){
        var curr=data[tc];
        var sum=0;
       // process.stdout.write(curr+"\n");
        for(var i=1; i<=curr; i++){
            
            var second=parseInt(curr/i);
            var prod=i*second;
         //   process.stdout.write(i+" "+second+"\n");
            sum=(sum%mod+prod%mod)%mod;
        }
        process.stdout.write(sum+"\n");
        
        
    }
    
         // Writing output to STDOUT
}
 
// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail
 
 
// Write your code here
//Language: JavaScript(Node.js)
