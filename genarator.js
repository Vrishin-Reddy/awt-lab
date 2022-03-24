function* gendemo(){
    let x=0;
    x=22;
    yield x;
    x=53;
    yield x;
    x=120;
    yield x;
}
let gen=gendemo();
for(let x of gen){
    console.log(x);
}
