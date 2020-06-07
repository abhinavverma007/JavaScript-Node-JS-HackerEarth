
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
 
process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});
 
process.stdin.on("end", function () {
   var input=stdin_input;
   var data=input.split("\n");
   var t=parseInt(data[0]);
   var start=2;
   for(var tc=0; tc<t; tc++){
       var arr=data[start].split(' ');
       main(arr);
       start=start+2;
   }
});
function gcd(a,b){
    if(a===0){
        return b;
    }
    return gcd(b%a,a);
}
function main(input) {
        var gcd1=input[0];
        for(var i=1; i<input.length; i++){
            gcd1=gcd(gcd1,input[i]);
        }
        process.stdout.write(gcd1+"\n");
        
        
        
        // Writing output to STDOUT
}
 
// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail
 
 
// Write your code here
