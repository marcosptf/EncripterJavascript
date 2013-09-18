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
        $('RespCounter').innerHTML="Valor MÃ¡ximo!";
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
    //variaveis locais
//tfsystems&java_hibernate289755
    var a,b,c,d,e,f,g,h,i,resp="";
    e=new Array("!",    //0
                "@",    //1
                "£",   //2
                "¹",   //3
                "²",   //4
                "³",   //5
                "¢",   //6
                "¬",   //7
                "{",    //8
                "[",    //9
                "]",    //10
                "}",    //11
                "%",    //12
                "&",    //13
                "*",    //14
                "(",    //15
                ")",    //16
                "-",    //17
                "=",    //18
                "_",    //19
                "+",    //20
                "?",    //21
                "|",    //22
                "/",    //23
                ";",    //24
                "~",    //25
                "^",    //26
                "¿",   //27
                "µ",   //28
                "¶",   //29
                "™",    //30
                "®",    //31
                "©",   //32
                "¤",   //33
                "¥",   //34
                "¦",   //35
                "»",   //36
                "Å",   //37
                "Æ",   //38
                "Ð",   //39
                "Ñ",   //40
                "Ø",   //41
                "Ý",   //42
                "Þ",   //43
                "ß",   //44
                "å",   //45
                "æ",   //46
                "ð",   //47
                "ø",   //48
                "þ",   //49
                "ÿ",   //50
                "?",   //51
                "?",   //52
                "?",   //53
                "?",   //54
                "?");   //55

    //recebe o texto a ser encriptado
    a=$('txtEdit').value;
    //separa todas as palavras do texto por um espaÃ§o
    b=a.split(" ",250);
    //recebe quantas palavras ou letras existem
    if((b.length==0) || (b.length==null) || (b.length<1) || (b.length==undefined)){
        c=a.length;
    }else{
        c=b.length;
    }

    //qtde de palavras
    for(x=0;x<c;x++)
    {
            //qtde de letras em uma palavra
            for(y=0;y<b[x].length;y++)
            {
                    d=b[x].substring(y,y+1);
                    f=d.toLowerCase();

                    //letras
                    if(f=="a"){resp+=e[0];}
                    if(f=="b"){resp+=e[1];}
                    if(f=="c"){resp+=e[2];}
                    if(f=="d"){resp+=e[3];}
                    if(f=="e"){resp+=e[4];}
                    if(f=="f"){resp+=e[5];}
                    if(f=="g"){resp+=e[6];}
                    if(f=="h"){resp+=e[7];}
                    if(f=="i"){resp+=e[8];}
                    if(f=="j"){resp+=e[9];}
                    if(f=="l"){resp+=e[10];}
                    if(f=="m"){resp+=e[11];}
                    if(f=="n"){resp+=e[12];}
                    if(f=="o"){resp+=e[13];}
                    if(f=="p"){resp+=e[14];}
                    if(f=="q"){resp+=e[15];}
                    if(f=="r"){resp+=e[16];}
                    if(f=="s"){resp+=e[17];}
                    if(f=="v"){resp+=e[18];}
                    if(f=="u"){resp+=e[19];}
                    if(f=="x"){resp+=e[20];}
                    if(f=="y"){resp+=e[21];}
                    if(f=="w"){resp+=e[22];}
                    if(f=="k"){resp+=e[23];}
                    if(f=="z"){resp+=e[24];}
                    if(f=="t"){resp+=e[25];}

                    //numeros
                    if(f=="0"){resp+=e[26];}
                    if(f=="1"){resp+=e[27];}
                    if(f=="2"){resp+=e[28];}
                    if(f=="3"){resp+=e[29];}
                    if(f=="4"){resp+=e[30];}
                    if(f=="5"){resp+=e[31];}
                    if(f=="6"){resp+=e[32];}
                    if(f=="7"){resp+=e[33];}
                    if(f=="8"){resp+=e[34];}
                    if(f=="9"){resp+=e[35];}

//                    //caracteres
                    if(f=="'"){resp+=e[36];}
                    if(f=="!"){resp+=e[37];}
                    if(f=="@"){resp+=e[38];}
                    if(f=="#"){resp+=e[39];}
                    if(f=="$"){resp+=e[40];}
                    if(f=="%"){resp+=e[41];}
                    if(f=="¨"){resp+=e[42];}
                    if(f=="&"){resp+=e[43];}
                    if(f=="*"){resp+=e[44];}
                    if(f=="("){resp+=e[45];}
                    if(f==")"){resp+=e[46];}
                    if(f=="-"){resp+=e[47];}
                    if(f=="_"){resp+=e[48];}
                    if(f=="+"){resp+=e[49];}
                    if(f=="="){resp+=e[50];}
                    if(f=="{"){resp+=e[51];}
                    if(f=="}"){resp+=e[52];}
                    if(f=="["){resp+=e[53];}
                    if(f=="]"){resp+=e[54];}
                    if(f=="?"){resp+=e[55];}
            }
            resp+=" ";
    }
//    $('txtResp').value=escape(resp);
    $('txtResp').value=(resp);
}

function Decript(){
    //variaveis locais
    var a,b,c,d,e,f,g,h,i,resp="";
    e=new Array("a",    //0
                "b",    //1
                "c",    //2
                "d",    //3
                "e",    //4
                "f",    //5
                "g",    //6
                "h",    //7
                "i",    //8
                "j",    //9
                "l",    //10
                "m",    //11
                "n",    //12
                "o",    //13
                "p",    //14
                "q",    //15
                "r",    //16
                "s",    //17
                "v",    //18
                "u",    //19
                "x",    //20
                "y",    //21
                "w",    //22
                "k",    //23
                "z",    //24
                "t",    //25
                "0",    //26
                "1",    //27
                "2",    //28
                "3",    //29
                "4",    //30
                "5",    //31
                "6",    //32
                "7",    //33
                "8",    //34
                "9",    //35
                "'",     //36
                "!",     //37
                "@",    //38
                "#",    //39
                "$",    //40
                "%",    //41
                "¨",    //42
                "&",    //43
                "*",    //44
                "(",    //45
                ")",    //46
                "-",    //47
                "_",    //48
                "+",    //49
                "=",    //50
                "{",    //51
                "}",    //52
                "[",    //53
                "]",    //54
                "?");    //55

    //recebe o texto a ser encriptado
//    a=unescape($('txtEdit').value);
    a=($('txtEdit').value);
    //separa todas as palavras do texto por um espaÃ§o
    b=a.split(" ",100);
    //recebe quantas palavras existem
    c=b.length;
    //qtde de palavras
    for(x=0;x<c;x++)
    {
            //qtde de letras em uma palavra
            for(y=0;y<b[x].length;y++)
            {
                    d=b[x].substring(y,y+1);
                    f=d.toLowerCase();
                    if(f=="!"){resp+=e[0];}
                    if(f=="@"){resp+=e[1];}
                    if(f=="£"){resp+=e[2];}
                    if(f=="¹"){resp+=e[3];}
                    if(f=="²"){resp+=e[4];}
                    if(f=="³"){resp+=e[5];}
                    if(f=="¢"){resp+=e[6];}
                    if(f=="¬"){resp+=e[7];}
                    if(f=="{"){resp+=e[8];}
                    if(f=="["){resp+=e[9];}
                    if(f=="]"){resp+=e[10];}
                    if(f=="}"){resp+=e[11];}
                    if(f=="%"){resp+=e[12];}
                    if(f=="&"){resp+=e[13];}
                    if(f=="*"){resp+=e[14];}
                    if(f=="("){resp+=e[15];}
                    if(f==")"){resp+=e[16];}
                    if(f=="-"){resp+=e[17];}
                    if(f=="="){resp+=e[18];}
                    if(f=="_"){resp+=e[19];}
                    if(f=="+"){resp+=e[20];}
                    if(f=="?"){resp+=e[21];}
                    if(f=="|"){resp+=e[22];}
                    if(f=="/"){resp+=e[23];}
                    if(f==";"){resp+=e[24];}
                    if(f=="~"){resp+=e[25];}
                    if(f=="^"){resp+=e[26];}
                    if(f=="¿"){resp+=e[27];}
                    if(f=="µ"){resp+=e[28];}
                    if(f=="¶"){resp+=e[29];}
                    if(f=="™"){resp+=e[30];}
                    if(f=="®"){resp+=e[31];}
                    if(f=="©"){resp+=e[32];}
                    if(f=="¤"){resp+=e[33];}
                    if(f=="¥"){resp+=e[34];}
                    if(f=="¦"){resp+=e[35];}
                    if(f=="»"){resp+=e[36];}
                    if(f=="Å"){resp+=e[37];}
                    if(f=="Æ"){resp+=e[38];}
                    if(f=="Ð"){resp+=e[39];}
                    if(f=="Ñ"){resp+=e[40];}
                    if(f=="Ø"){resp+=e[41];}
                    if(f=="Ý"){resp+=e[42];}
                    if(f=="Þ"){resp+=e[43];}
                    if(f=="ß"){resp+=e[44];}
                    if(f=="å"){resp+=e[45];}
                    if(f=="æ"){resp+=e[46];}
                    if(f=="ð"){resp+=e[47];}
                    if(f=="ø"){resp+=e[48];}
                    if(f=="þ"){resp+=e[49];}
                    if(f=="ÿ"){resp+=e[50];}
                    if(f=="?"){resp+=e[51];}
                    if(f=="?"){resp+=e[52];}
                    if(f=="?"){resp+=e[53];}
                    if(f=="?"){resp+=e[54];}
                    if(f=="?"){resp+=e[55];}
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

