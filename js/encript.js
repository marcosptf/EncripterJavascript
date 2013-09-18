/**
*@author:Marcos Paulo
*@since:22/05/10
*@desc:engine para encriptar textos
*@copyright:marcosptf@yahoo.com.br
*/

function $(id){ return document.getElementById(id);}

window.onload=function(){
	Counter()
	EncriptClear();
        $('chkEncript').checked=false;
	$('btnEncriptar').onclick=function(){Encript();}
	$('btnDecriptar').onclick=function(){Decript();}
	$('btnLimpar').onclick=function(){EncriptClear();}
	$('txtEdit').onkeydown=function(){Counter();}
	$('chkEncript').onclick=function(){ButtonEncript();}
}

function Counter(){
    var a,b,c;
    a=$('txtEdit').value;
    b=a.length;
    if((b==0) || (b==null) || (b==undefined) || (b=="")){c=0;}
    if(b>0){c=b;}
    if(b>=150){
        $('RespCounter').innerHTML="Valor Máximo!";
        // inserir bloqueador de digitos
    }else{
        $('RespCounter').innerHTML=c;
    }
}

function ButtonEncript(){
    if($('chkEncript').checked)	{
            $('btnEncriptar').style.display="none";
            $('btnDecriptar').style.display="block";
    }else{
            $('btnEncriptar').style.display="block";
            $('btnDecriptar').style.display="none";
    }
}

function Encript(){
    var a,b,c,d,resp="";
    a=$('txtEdit').value;
    b=a.split(" ",250);
    c=b.length;
    for(x=0;x<c;x++){
        for(y=0;y<b[x].length;y++){
            for(z=0;z<100;z++){
                d=b[x].substring(y,y+1);
                if(d==e[z][0]){
                    resp+=e[z][1];
                }
            }
        }
        resp+=" ";
    }
    $('txtResp').value=escape(resp);
//    $('txtResp').value=(resp);
}

function Decript(){
    var a,b,c,d,resp="";
    a=unescape($('txtEdit').value);
//    a=($('txtEdit').value);
    b=a.split(" ",100);
    c=b.length;
    for(x=0;x<c;x++){
        for(y=0;y<b[x].length;y++){
            for(z=0;z<100;z++){
                d=b[x].substring(y,y+1);
                if(d===e[z][1]){resp+=e[z][0];}
            }
        }
        resp+=" ";
    }
    $('txtResp').value=(resp);
}

function EncriptClear(){
    $('txtResp').value='';
    $('txtEdit').value='';
    $('chkEncript').checked=false;
}

