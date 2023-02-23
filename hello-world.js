if (process.argv.length <= 2) {
    console.log("hello world");
}
else if (process.argv.length > 2) {
    let a = "";
    for (let i = 2; i <= process.argv.length - 1; i++) {
        a += process.argv[i];
        a += " ";

    }
    console.log(a);
}