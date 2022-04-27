(()=>{"use strict";var e={d:(t,i)=>{for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{J:()=>i,X:()=>n});const t={canvas:{x:0,y:0,width:50,height:50},player:{x:23,y:23,width:1,height:1,direction:39,cells:[],speed:1,speedinterval:10,intervalcount:0,initiallength:5,color:"gray"},fruit:{x:4,y:4,width:1,height:1},game:{score:0,idle:!0,spinner:{margin:23}}},i=document.getElementById("gamecanvas"),n=i.getContext("2d");new class{constructor(){this.interval=null,this.utility={spinner:()=>{const{player:e,canvas:i,game:n}=t,a=n.spinner.margin,r=a,s=i.width-e.width-a;e.x==r&&e.y==r&&(e.direction=39),e.x==s&&e.y==r&&(e.direction=40),e.x==r&&e.y==s&&(e.direction=38),e.x==s&&e.y==s&&(e.direction=37)},step:function(e,t){return[{x:t.x,y:t.y},...e.slice(0,-1)]},speedup:{},eat:e=>{const{player:i,fruit:n,game:a}=t;if(i.x>=n.x&&i.x<=n.x&&i.y>=n.y&&i.y<=n.y){const r=t.canvas.width;n.x=this.utility.randomrange(2,r-2),n.y=this.utility.randomrange(2,r-2),a.score++,i.cells.push(e)}},randomrange:function(e,t){const i=Math.random();return Math.floor(t*i+e)}},this.oninit()}oninit(){this.interval=setInterval((()=>this.update()),100);const{player:e}=t;Array(e.initiallength).fill(0).forEach(((i,n)=>{e.cells.push((e=>({x:t.player.x-e*t.player.width,y:0}))(n))}))}update(){const{player:e,canvas:i,game:n}=t,a=i.width-e.width;switch(n.idle&&this.utility.spinner(),e.x>a&&(e.x=0),e.y>a&&(e.y=0),e.x<0&&(e.x=a),e.y<0&&(e.y=a),e.direction){case 37:e.x-=e.speed;break;case 38:e.y-=e.speed;break;case 39:e.x+=e.speed;break;case 40:e.y+=e.speed}const r=e.cells[e.cells.length-1];if(e.cells=this.utility.step(e.cells,e),e.intervalcount++,e.intervalcount>e.speedinterval){e.intervalcount=0,this.interval&&clearInterval(this.interval);const t=Math.min(10+n.score/100,50);this.interval=setInterval((()=>this.update()),1e3/t)}this.utility.eat(r)}},new class{constructor(){this.animationframe()}animationframe(){requestAnimationFrame((()=>this.animationframe())),this.render()}render(){const{canvas:e,player:i,fruit:a}=t;n.clearRect(0,0,e.width,e.height),n.fillStyle=t.player.color,n.fillRect(i.x,i.y,i.width,i.height),n.fillRect(a.x,a.y,a.width,a.height),i.cells.forEach((e=>{n.fillRect(e.x,e.y,i.width,i.height)}))}},new class{constructor(){window.addEventListener("keydown",this.keydown),document.addEventListener("mouseenter",this.mousein),document.addEventListener("mouseout",this.mouseout)}keydown(e){t.player.direction=e.keyCode}mousein(){i.style.transform="scale(1)",t.game.idle=!1}mouseout(){i.style.transform="scale(5)",t.game.idle=!0,t.player.direction=39,t.player.x=t.game.spinner.margin-5,t.player.y=t.game.spinner.margin,t.player.cells.length=t.player.initiallength}}})();
