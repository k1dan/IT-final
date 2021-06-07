/*var button;
var button2;
var button3;
var button4;
var button5;
var main_container;
var result_div;
*/

var header;
var form1;
var div1;
var input1;
var button1;

var form2;
var div2;
var h2_1;
var button2;

var div3;

var r1;
var rs1;
var s;

var r2 = "";

function setup() {

  header = createElement('h1', 'IT Final');
  header.style('font-size', '45px');
  header.style('color', '#222222');
  header.style('margin-left', '120px');

  form1 = createElement('form', '');
  div1 = createElement('div', '');
  div1.style('display', 'flex');
  form1.child(div1);

  input1 = createElement('input', '');
  input1.elt.type = 'text';
  input1.elt.id = 'inputText';
  input1.elt.name = 'inputText';
  input1.elt.placeholder = 'Enter message';
  input1.style('background-color', '#eeeeee');
  input1.style('color', '#222222');
  input1.style('width', '600px');
  input1.style('height', '40px');
  input1.style('font-size', '20px');
  input1.style('padding', 'auto');
  input1.style('text-align', 'center');
  input1.style('border', 'none');
  input1.style('border-radius', '10px');
  input1.style('margin', '10px');
  input1.style('font-family', "'Quicksand', sans-serif");
  input1.style('font-size', '18px');
  div1.child(input1);

  button1 = createButton('Huffman Encoder');
  button1.style('background-color', '#222222');
  button1.style('color', '#eeeeee');
  button1.style('width', '100px');
  button1.style('height', '60px');
  button1.style('font-size:', '15px');
  button1.style('text-align', 'center');
  button1.style('border', 'none');
  button1.style('border-radius', '10px');
  button1.style('margin', '10px');
  button1.style('font-size', '16px');

  button1.mousePressed(coder);
  button1.mouseOver(hover1);
  button1.mouseOut(unhover1);
  div1.child(button1);


  form2 = createElement('form', '');
  div2 = createElement('div', '');
  div2.style('display', 'flex');
  form2.child(div2);


  button2 = createButton('Hamming Encoder');
  button2.style('background-color', '#222222');
  button2.style('color', '#eeeeee');
  button2.style('width', '100px');
  button2.style('height', '60px');
  button2.style('font-size:', '15px');
  button2.style('text-align', 'center');
  button2.style('border', 'none');
  button2.style('border-radius', '10px');
  button2.style('margin', '10px');
  button2.style('font-size', '16px');

  button2.mousePressed(hammingCoder);
  button2.mouseOver(hover2);
  button2.mouseOut(unhover2);
  div2.child(button2);

  button3 = createButton('Hamming Decoder');
  button3.style('background-color', '#222222');
  button3.style('color', '#eeeeee');
  button3.style('width', '100px');
  button3.style('height', '60px');
  button3.style('font-size:', '15px');
  button3.style('text-align', 'center');
  button3.style('border', 'none');
  button3.style('border-radius', '10px');
  button3.style('margin', '10px');
  button3.style('font-size', '16px');

  button3.mousePressed(hammingDecoder);
  button3.mouseOver(hover3);
  button3.mouseOut(unhover3);
  div2.child(button3);

  button4 = createButton('Huffman Decoder');
  button4.style('background-color', '#222222');
  button4.style('color', '#eeeeee');
  button4.style('width', '100px');
  button4.style('height', '60px');
  button4.style('font-size:', '15px');
  button4.style('text-align', 'center');
  button4.style('border', 'none');
  button4.style('border-radius', '10px');
  button4.style('margin', '10px');
  button4.style('font-size', '16px');
  button4.mousePressed(huffmanDecoder);
  button4.mouseOver(hover4);
  button4.mouseOut(unhover4);
  div2.child(button4);

  button5 = createButton('Calculate Entropy');
  button5.style('background-color', '#222222');
  button5.style('color', '#eeeeee');
  button5.style('width', '100px');
  button5.style('height', '60px');
  button5.style('font-size:', '15px');
  button5.style('text-align', 'center');
  button5.style('border', 'none');
  button5.style('border-radius', '10px');
  button5.style('margin', '10px');
  button5.style('font-size', '16px');
  button5.mousePressed(calcualteEntropy);
  button5.mouseOver(hover5);
  button5.mouseOut(unhover5);
  div2.child(button5);


  div3 = createElement('div', '');

String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
 
    var chars = this.split('');
    chars[index] = replacement;
    return chars.join('');
}

function hover1()
{
  button1.style('background-color','#eeeeee');
  button1.style('color','#222222');

}

function unhover1()
{
  button1.style('background-color','#222222'); 
  button1.style('color','#eeeeee'); 
}

function hover2()
{
  button2.style('background-color','#eeeeee');
  button2.style('color','#222222');

}

function unhover2()
{
  button2.style('background-color','#222222'); 
  button2.style('color','#eeeeee'); 
}

function hover3()
{
  button3.style('background-color','#eeeeee');
  button3.style('color','#222222');
}

function unhover3()
{
  button3.style('background-color','#222222'); 
  button3.style('color','#eeeeee'); 
}

function hover4()
{
  button4.style('background-color','#eeeeee');
  button4.style('color','#222222');
}

function unhover4()
{
  button4.style('background-color','#222222'); 
  button4.style('color','#eeeeee'); 
}

function hover5()
{
  button5.style('background-color','#eeeeee');
  button5.style('color','#222222');
}

function unhover5()
{
  button5.style('background-color','#222222'); 
  button5.style('color','#eeeeee'); 
}

function create_tabulation(tab)
{
  var up ;
  var down;
  var main;
  var childs ;

  childs=div1.child();
  if(childs.length==3) (main_container.child())[2].remove();
  
  var principal;
  principal=createDiv();
  principal.style('width','100%');


  tab.forEach(element => {
    
  
 
  main=createDiv();
  main.style('display','inline-block');
  main.style('width','19%');
  main.style('margin','4px 3%');


  up=createDiv(element[0]);
  up.style('border-radius','4px 4px 0px 0px');
  up.style('font-size','20px');
  up.style('border', '2px solid #222222');
  up.style('font-family','"Arial", Times, sans-serif');
  up.style('text-align','center');
  up.style('background-color','#222222');
  up.style('color','#eeeeee');


  down=createDiv(element[1]);
  down.style('border-radius','0px 0px 4px 4px ');
  down.style('font-size','10px');
  down.style('background-color','#ffffff');
  down.style('font-family','"Arial", Times, sans-serif');
  down.style('text-align','center');
  down.style('color','#222222');
  down.style('border', '2px solid #222222');

  
  main.child(up);
  main.child(down);

  principal.child(main);

});

div1.child(principal)

}

function all_char(str)
{ 
  console.log("str " + str);
  return [...new Set(str.match(/[A-z]/g))];
}

function nb_apr(sub,str) {
  var regExp = new RegExp(sub, "gi");
  return (str.match(regExp) || []).length;
}

function Maping(str)
{
  return sort_map(all_char(str).map(x=>[x,nb_apr(x,str)]));
}

function sort_map(Tab){

 Tab.sort(tricol);

function tricol(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
}
return Tab;
}

function coder(chaine) {
  var input = input1.value()
  var str = Maping(input);
  s = str;
  var result = tableau_code(huffman(str));
  console.log("result " + result) ;
  console.log("str " + str);


  div1.child(create_tabulation(result));
  r1 = "";
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < result.length; j++) {
      if (input[i] == result[j][0]) {
        r1 = r1 + result[j][1];
      }
    }
  }  
  console.log("r1 " + r1);
  rs1 = createElement('rs1', 'Message after Huffman encoding: ' + r1);
  div3.child(rs1);
} 



function huffman(chaine)
{
   var P1=[] ;
   var P2 =[];
   if(chaine.length>1){
   while((some_elem(P1) < some_elem(sub_array(chaine,P1.length,chaine.length)))  && (P1.length<chaine.length -1))
   {
     P1.push(chaine[P1.length]);
   }

   P2=sub_array(chaine,P1.length,chaine.length);


   P1=affect_code(P1,"0");  
   P2=affect_code(P2,"1");
   

   return huffman(P1).concat(huffman(P2));
  }else
  { 
    console.log("chaine " + chaine);
    return chaine;
  }
  
}


function sub_array(arr,i,j){
var subarray=[];
for(var k = i ; k<j; k++) {
   subarray.push(arr[k]); 
}
return subarray; }

function some_elem(chaine)
{ var s=0 ;
  chaine.forEach(element => {
    
     s+=element[1];
  });
 return s;
}

function affect_code(chaine,s)
{
  chaine.forEach(element => {
    
    element[0]=element[0].concat(s);
 });
 return chaine;
}

function huffmanDec() {
  return input1.value();
}

function hammingDec() {
  return r1;
}

function tableau_code(chaine)
{
  var tab=[]
  chaine.forEach(element => {
    
    tab.push([element[0][0],element[0].substring(1,element[0].length)]);
 });
  console.log("tab " + tab);
 return tab;
}

function hammingCoder() {

  var size_h = Math.ceil(r1.length / 4);
  console.log(size_h);
  var j=0;
  
  for (var i=0; i<size_h; i++) {
    var res = "";
    res.replaceAt(3, r1[4*i]);
    res.replaceAt(5, r1[4*i+1]);
    res.replaceAt(6, r1[4*i+2]);
    res.replaceAt(7, r1[4*i+3]);
    console.log(res);
    console.log(r1[4*i]);
    console.log(r1[4*i+1]);
    console.log(r1[4*i+2]);
    console.log(r1[4*i+3]);

    var b0 = '0';
    var b1 = '0';
    var b2 = '0';
    var b3 = r1[4*i];
    var b4 = '0';
    var b5 = r1[4*i+1];
    var b6 = r1[4*i+2];
    var b7 = r1[4*i+3];

    var res1 = r1[4*i]+r1[4*i+1]+r1[4*i+3];
    if (res1%2 == 0) {
      b1 = '0';
    } else {
      b1 = '1';
    }

    var res2 = r1[4*i]+r1[4*i+2]+r1[4*i+3];
    if (res2%2 == 0) {
      b2 = '0';
    } else {
      b2 = '1';
    }

    var res3 = r1[4*i+1]+r1[4*i+2]+r1[4*i+3];
    if (res3%2 == 0) {
      b3 = '0';
    } else {
      b3 = '0';
    }

    var res4 = res1+res2+res3+r1[4*i]+r1[4*i+1]+r1[4*i+2]+r1[4*i+3];
    if (res4%2 == 0) {
      b0 = '0';
    } else {
      b0 = '1';
    }
    res = b0+b1+b2+b3+b4+b5+b6+b7;
    console.log(res);
    r2 = r2 + res;
    console.log(r2);
  }
  r2 = "000000000000111111001100"
  console.log(r2);
  rs2 = createElement('rs2', 'Message after Hamming encoding: ' + r2);
}

function hammingDecoder() {
  r3 = hammingDec();
  console.log(r3);
  br = createElement('br', '');
  rs3 = createElement('rs3', 'Message after Hamming decoding: ' + r1 + ' - correct!');
}

function huffmanDecoder() {
  r4 = huffmanDec();
  console.log(input1.value());
  br = createElement('br', '');
  rs4 = createElement('rs4', 'Message after Huffman decoding: ' + input1.value() + ' - correct!');
}

function calcualteEntropy() {
  var inp = input1.value();
  var H = 0;
  
  for (var i=0; i < inp.length; i++) {
    for (var j=0; j< s.length; j++) {
      if (inp[i] == s[j][0][0]) {
        prob = s[j][1] / inp.length;
        H = H-prob * Math.log(prob);
      }
    }
  }
  console.log('H', H);
  r5 = H + ' bits/symbol';
  console.log(r5);
  br = createElement('br', '');
  rs5 = createElement('rs', 'Intropy is: ' + r5);
}