let pronoun = ['the','our','their'];
let adj = ['great', 'big','small' ];
let noun = ['jogger','racoon','rat'];
let dom = ['.com','.net','.us','.io','.org'];

/*for(var i=0;i<10;i++){

let index1 = Math.floor(Math.random() * (3 - 0) ) + 0;
let index2 = Math.floor(Math.random() * (3 - 0) ) + 0;
let index3 = Math.floor(Math.random() * (3 - 0) ) + 0;
let index4 = Math.floor(Math.random() * (5 - 0) ) + 0;

console.log(pronoun[index1]+adj[index2]+noun[index3]+dom[index4]);
}*/

for(var p=0;p<pronoun.length;p++){

        for(var a=0;a<adj.length;a++){

                for(var n=0;n<noun.length;n++){

                        for(var d=0;d<dom.length;d++){

                            console.log(pronoun[p]+adj[a]+noun[n]+dom[d]);

                        }


                }


               

        }


}




