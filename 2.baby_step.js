var i = 2;
var sum = 0;
for(; i < process.argv.length; i++) {
	sum += +process.argv[i];
}
console.log(sum);


