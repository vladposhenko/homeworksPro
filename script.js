hero = ['Ivan'];
native = ['York','Of'].reverse();
destination = ['Poltava','In'].reverse();


colors = ["red","orange","yellow","green","lightblue","blue","pink"];
rainbow = [];
rainbow = rainbow.concat(hero,native);
rainbow.push("Gave", "Battle");
rainbow =  rainbow.concat(destination);



document.write(`<div class="wrap" style="display:flex; gap:30px; justify-content:center;">`);

for(i = 0; i < rainbow.length; i++){
    document.write(`
        <div class="circle" style="background-color:${colors[i]}">
            <p style="margin-top:60px; text-align:center;">${rainbow[i]}</p>
        </div>
    `);
}

document.write(`</div>`);
