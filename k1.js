const pa = document.getElementById('pa');
const pb = document.getElementById('pb');
const pc = document.getElementById('pc');
const pd = document.getElementById('pd');
const pe = document.getElementById('pe');

const xx = document.getElementById('xx');
const yy = document.getElementById('yy');
const zz = document.getElementById('zz');

let c = `\\textcolor{salmon}{\\implies}`;
let d = `\\textcolor{blue}{\\hspace{5pt} \\therefore \\hspace{2pt}}`;
let e = `\\textcolor{#a15be2}{=}`;
let dt = `\\textcolor{green}{\\cdot }`;
let tx1 = `\\textcolor{#076e5d}{\\text{@\\;}}`;
let and = `\\textcolor{#8f5810}{\\text{\\;এবং\\;}}`;
let given = `\\textcolor{#8f5810}{\\text{ দেওয়া আছে:}}`;
let here = `\\textcolor{#8f5810}{\\text{এখানে,}}`;
let again = `\\textcolor{#8f5810}{\\text{আবার,}}`;
let now = `\\textcolor{#8f5810}{\\text{এখন,}}`;
let therefore = `\\textcolor{#8f5810}{\\text{অতএব,}}`;
let weknow =  `\\textcolor{#8f5810}{\\text{আমরা জানি,}}`;
let sq = `\\textcolor{#8f5810}{\\text{\\hspace{1em}[বর্গ করে] }}`;
let cu = `\\textcolor{#8f5810}{\\text{\\hspace{1em}[ঘন করে]}}`;
let subst = `\\textcolor{#8f5810}{\\text{\\hspace{1em}[মান বসে]}}`;

function ok(){
    let u1 = yy.value;
    let op = zz.value;
    let opO = op === '+' ? '-' : '+';

    document.getElementById('btna').innerHTML = `\\(${u1}${opO}\\frac{1}{${u1}}${e}? \\)`;
    document.getElementById('btn1').innerHTML = `\\(${u1}^2+\\frac{1}{${u1}^2}${e}? \\)`;
    document.getElementById('btn2').innerHTML = `\\(${u1}^3+\\frac{1}{${u1}^3}${e}? \\)`;
    document.getElementById('btn3').innerHTML = `\\(${u1}^4+\\frac{1}{${u1}^4}${e}? \\)`;
    document.getElementById('btn4').innerHTML = `\\(${u1}^5+\\frac{1}{${u1}^5}${e}? \\)`;
    document.getElementById('btn5').innerHTML = `\\(${u1}^6+\\frac{1}{${u1}^6}${e}? \\)`;

    document.getElementById('btn6').innerHTML = `\\(${u1}^2-\\frac{1}{${u1}^2}${e}? \\)`;
    document.getElementById('btn7').innerHTML = `\\(${u1}^3-\\frac{1}{${u1}^3}${e}? \\)`;
    document.getElementById('btn8').innerHTML = `\\(${u1}^4-\\frac{1}{${u1}^4}${e}? \\)`;
    document.getElementById('btn9').innerHTML = `\\(${u1}^5-\\frac{1}{${u1}^5}${e}? \\)`;
    document.getElementById('btn10').innerHTML = `\\(${u1}^6-\\frac{1}{${u1}^6}${e}? \\)`;


    waitForKatex();
}

function preview(){
    let a = Number(xx.value);
    let u1 = yy.value;
    let v1 = `\\frac{1}{${u1}}`;
    let op = zz.value;
    let opO = op === '+' ? '-' : '+';

    document.getElementById('btnp').innerHTML = `\\(${u1}${op}${v1}${e}${a} \\)`;

    waitForKatex();
}

function xxa(){
    let a = Number(xx.value);
    let u1 = yy.value;
    let v1 = `\\frac{1}{${u1}}`;
    let v2 = `\\frac{1}{${u1}^2}`;
    let op = zz.value;
    let opO = op === '+' ? '-' : '+';

    let xx1 = a*a;
    let xxx = op === '+' ? xx1 - 4 : xx1 + 4;
    let zzz = finder(xxx);
    let fac = zzz.factor;
    let rem = zzz.remaining;
    let res = zzz.result;

    let rvzz = `\\pm ${res}`;

    rvzz = (fac === 0 || rem === 0) ? 0 : rvzz;

    pa.innerHTML = `\\(${tx1}${u1}${op}${v1}${e}${a};${u1}${opO}${v1}${e}? \\)<br>
                    \\(${given} \\)<br>
                    \\(\\hspace{4em} ${u1}${op}${v1}${e}${a} \\)<br>
                    \\(${now} \\)<br>
                    \\(\\left (${u1}${opO}${v1} \\right )^2${e} \\left (${u1}${op}${v1} \\right )^2
                       ${opO}4${dt}${u1}${dt} ${v1} \\)<br>
                    \\(\\hspace{4em} ${e}(${a})^2${opO}4${subst} \\)<br>
                    \\(\\hspace{4em} ${e}${xx1}${opO}4 \\)<br>
                    \\(\\hspace{4em} ${e}${xxx} \\)<br>
                    \\(${c}${u1}${opO}${v1}${e}\\sqrt{${xxx}} \\)<br>
                    \\(${d}${u1}${opO}${v1}${e}${rvzz} \\)
                    `;

    waitForKatex();
}

//////////////// xxx
function xxxa(){
    let a = Number(xx.value);
    let u1 = yy.value;
    let v1 = `\\frac{1}{${u1}}`;
    let v2 = `\\frac{1}{${u1}^2}`;
    let op = zz.value;
    let opO = op === '+' ? '-' : '+';

    let xx1 = a*a;
    let xxx = op === '+' ? xx1 - 2 : xx1 + 2;

    pa.innerHTML = `\\(${tx1}${u1}${op}${v1}${e}${a};${u1}^2+${v2}${e}? \\)<br>
                    \\(${given} \\)<br>
                    \\(\\hspace{4em} ${u1}${op}${v1}${e}${a} \\)<br><br>
                    \\(${c}\\left (${u1}${op}${v1} \\right )^2${e}(${a})^2${sq} \\)<br><br>
                    \\(${c}(${u1})^2+\\left (${v1} \\right)^2${op}2${dt}${u1}${dt}${v1}
                       ${e}${xx1} \\)<br><br>
                    \\(${c}${u1}^2+${v2}${op}2${e}${xx1} \\)<br><br>
                    \\(${c}${u1}^2+${v2}${e}${xx1}${opO}2 \\)<br><br>
                    \\(${d}${u1}^2+${v2}${e}${xxx} \\)<br><br>
                    `;

    waitForKatex();
}

function xxxb(){
    let op = zz.value;

    if(op === '+'){
        zza();
    }else{
        zzb();
    }
}

function xxxc(){
    let a = Number(xx.value);
    let u1 = yy.value;
    let v1 = `\\frac{1}{${u1}}`;
    let v2 = `\\frac{1}{${u1}^2}`;
    let v4 = `\\frac{1}{${u1}^4}`;
    let op = zz.value;
    let opO = op === '+' ? '-' : '+';

    let xx1 = a*a;
    let xxx = op === '+' ? xx1 - 2 : xx1 + 2;
    let zzz = xxx*xxx;

    pa.innerHTML = `\\(${tx1}${u1}${op}${v1}${e}${a};${u1}^4+${v4}${e}? \\)<br>
                    \\(${given} \\)<br>
                    \\(\\hspace{4em} ${u1}${op}${v1}${e}${a} \\)<br><br>
                    \\(${c}\\left (${u1}${op}${v1} \\right )^2${e}(${a})^2${sq} \\)<br><br>
                    \\(${c}(${u1})^2+\\left (${v1} \\right)^2${op}2${dt}${u1}${dt}${v1}
                       ${e}${xx1} \\)<br><br>
                    \\(${c}${u1}^2+${v2}${op}2${e}${xx1} \\)<br><br>
                    \\(${c}${u1}^2+${v2}${e}${xx1}${opO}2 \\)<br><br>
                    \\(${c}${u1}^2+${v2}${e}${xxx} \\)<br><br>
                    \\(${c}\\left (${u1}^2+${v2} \\right )^2${e}(${xxx})^2${sq} \\)<br><br>
                    \\(${c}(${u1}^2)^2+(${v2})^2+2${dt}${u1}^2${dt}${v2}${e}${zzz} \\)<br><br>
                    \\(${c}${u1}^4+${v4}+2${e}${zzz} \\)<br><br>
                    \\(${c}${u1}^4+${v4}${e}${zzz}-2 \\)<br><br>
                    \\(${d}${u1}^4+${v4}${e}${zzz-2} \\)<br><br>
                    `;

    waitForKatex();
}

function xxxd(){
    let op = zz.value;

    if(op === '+'){
        zzc();
    }else{
        zzd();
    }
}

function xxxe(){
    let a = Number(xx.value);
    let u1 = yy.value;
    let v1 = `\\frac{1}{${u1}}`;
    let v2 = `\\frac{1}{${u1}^2}`;
    let v6 = `\\frac{1}{${u1}^6}`;
    let op = zz.value;
    let opO = op === '+' ? '-' : '+';

    let xx1 = a*a;
    let xxx = op === '+' ? xx1 - 2 : xx1 + 2;
    let zzz = xxx*xxx*xxx;

    pa.innerHTML = `\\(${tx1}${u1}${op}${v1}${e}${a};${u1}^6+${v6}${e}? \\)<br>
                    \\(${given} \\)<br>
                    \\(\\hspace{4em} ${u1}${op}${v1}${e}${a} \\)<br><br>
                    \\(${c}\\left (${u1}${op}${v1} \\right )^2${e}(${a})^2${sq} \\)<br><br>
                    \\(${c}(${u1})^2+\\left (${v1} \\right)^2${op}2${dt}${u1}${dt}${v1}
                       ${e}${xx1} \\)<br><br>
                    \\(${c}${u1}^2+${v2}${op}2${e}${xx1} \\)<br><br>
                    \\(${c}${u1}^2+${v2}${e}${xx1}${opO}2 \\)<br><br>
                    \\(${c}${u1}^2+${v2}${e}${xxx} \\)<br><br>
                    \\(${c}\\left (${u1}^2+${v2} \\right )^3${e}(${xxx})^3${cu} \\)<br><br>
                    \\(${c}(${u1}^2)^3+(${v2})^3+3${dt}${u1}^2${dt}${v2}${dt}\\left (${u1}^2+${v2} \\right)
                       ${e}${zzz} \\)<br><br>
                    \\(${c}${u1}^6+${v6}+3${dt}${xxx}${e}${zzz}${subst} \\)<br><br>
                    \\(${c}${u1}^6+${v6}+${3*xxx}${e}${zzz} \\)<br><br>
                    \\(${c}${u1}^6+${v6}${e}${zzz}-${3*xxx} \\)<br><br>
                    \\(${d}${u1}^6+${v6}${e}${zzz-3*xxx} \\)<br><br>
                    `;

    waitForKatex();
}
//////////////// xxx

//////////////// yyy
function yyya(){
    let a = Number(xx.value);
    let u1 = yy.value;
    let v1 = `\\frac{1}{${u1}}`;
    let v2 = `\\frac{1}{${u1}^2}`;
    let op = zz.value;
    let opO = op === '+' ? '-' : '+';

    let xx1 = a*a;
    let xxx = op === '+' ? xx1 - 4 : xx1 + 4;
    let zzz = finder(xxx);

    pa.innerHTML = `\\(${tx1}${u1}${op}${v1}${e}${a};${u1}^2-${v2}${e}? \\)<br>
                    \\(${given} \\)<br>
                    \\(\\hspace{4em} ${u1}${op}${v1}${e}${a} \\)<br>
                    \\(${now} \\)<br>
                    \\(\\left (${u1}${opO}${v1} \\right )^2${e} \\left (${u1}${op}${v1} \\right )^2
                       ${opO}4${dt}${u1}${dt}${v1} \\)<br>
                    \\(\\hspace{4em} ${e}(${a})^2${opO}4${subst} \\)<br>
                    \\(\\hspace{4em} ${e}${xx1}${opO}4 \\)<br>
                    \\(\\hspace{4em} ${e}${xxx} \\)<br>
                    \\(${c}${u1}${opO}${v1}${e}\\sqrt{${xxx}} \\)<br><br>
                    \\(${d}${u1}${opO}${v1}${e}${zzz.result} \\)<br>
                    \\(${again} \\)<br>
                    \\(\\hspace{4em} ${u1}^2-${v2} \\)<br><br>
                    \\(\\hspace{4em} ${e}(${u1})^2-\\left (${v1} \\right )^2 \\)<br><br>
                    \\(\\hspace{4em} ${e}(${u1}+${v1}) \\left (${u1}-${v1} \\right ) \\)<br><br>
                    \\(\\hspace{4em} ${e}${a}${dt}${zzz.result} \\)<br><br>
                    \\(${d}${u1}^2-${v2}${e}${a*zzz.factor}\\sqrt{${zzz.remaining}} \\)<br><br>
                    `;

    waitForKatex();
}

function yyyb(){
    let op = zz.value;

    if(op === '+'){
        zzb();
    }else{
        zza();
    }
}

function yyyc(){
    let a = Number(xx.value);
    let u1 = yy.value;
    let v1 = `\\frac{1}{${u1}}`;
    let v2 = `\\frac{1}{${u1}^2}`;
    let v4 = `\\frac{1}{${u1}^4}`;
    let op = zz.value;
    let opO = op === '+' ? '-' : '+';

    let xx1 = a*a;
    let xxx = op === '+' ? xx1 - 4 : xx1 + 4;
    let yyy = op === '+' ? xx1 - 2 : xx1 + 2;
    let zzz = finder(xxx);
    let fac = zzz.factor;
    let rem = zzz.remaining;
    let res = zzz.result;

    pa.innerHTML = `\\(${tx1}${u1}${op}${v1}${e}${a};${u1}^4-${v4}${e}? \\)<br>
                    \\(${given} \\)<br>
                    \\(\\hspace{4em} ${u1}${op}${v1}${e}${a} \\)<br><br>
                    \\(${c}\\left (${u1}${op}${v1} \\right )^2${e}(${a})^2${sq} \\)<br><br>
                    \\(${c}(${u1})^2+\\left (${v1} \\right )^2
                       ${op}2${dt}${u1}${dt}${v1}${e}${xx1} \\)<br><br>
                    \\(${c}${u1}^2+${v2}${op}2${e}${xx1} \\)<br><br>
                    \\(${c}${u1}^2+${v2}${e}${xx1}${opO}2 \\)<br><br>
                    \\(${c}${u1}^2+${v2}${e}${yyy} \\)<br><br>

                    \\(${now} \\)<br>
                    \\(\\left (${u1}${opO}${v1} \\right )^2${e} \\left (${u1}${op}${v1} \\right )^2
                       ${opO}4${dt}${u1}${dt}${v1} \\)<br>
                    \\(\\hspace{4em} ${e}(${a})^2${opO}4${subst} \\)<br>
                    \\(\\hspace{4em} ${e}${xx1}${opO}4 \\)<br>
                    \\(\\hspace{4em} ${e}${xxx} \\)<br>
                    \\(${c}${u1}${opO}${v1}${e}\\sqrt{${xxx}} \\)<br><br>
                    \\(${d}${u1}${opO}${v1}${e}${zzz.result} \\)<br>
                    \\(${here} \\)<br>
                    \\(\\hspace{4em} ${u1}^2-${v2} \\)<br><br>
                    \\(\\hspace{4em} ${e}(${u1})^2-\\left (${v1} \\right )^2 \\)<br><br>
                    \\(\\hspace{4em} ${e}\\left (${u1}+${v1}\\right ) \\left (${u1}-${v1} \\right ) \\)<br><br>
                    \\(\\hspace{4em} ${e}${a}${dt}${res} \\)<br><br>
                    \\(${d}${u1}^2-${v2}${e}${a*fac}\\sqrt{${rem}} \\)<br>
                    \\(${therefore} \\)<br>
                    \\(\\hspace{4em} ${u1}^4-${v4} \\)<br><br>
                    \\(\\hspace{4em} ${e}(${u1}^2)^2-\\left (${v2} \\right )^2 \\)<br><br>
                    \\(\\hspace{4em} ${e}\\left (${u1}^2+${v2}\\right ) \\left (${u1}^2-${v2} \\right ) \\)<br><br>
                    \\(\\hspace{4em} ${e}${yyy}${dt}${a*fac}\\sqrt{${rem}} \\)<br><br>
                    \\(${d}${u1}^4-${v4}${e}${yyy*a*fac}\\sqrt{${rem}} \\)
                    `;

    waitForKatex();
}

function yyyd(){
    let op = zz.value;

    if(op === '+'){
        zzd();
    }else{
        zzc();
    }
}

function yyye(){
    let a = Number(xx.value);
    let u1 = yy.value;
    let v1 = `\\frac{1}{${u1}}`;
    let v3 = `\\frac{1}{${u1}^3}`;
    let v6 = `\\frac{1}{${u1}^6}`;
    let op = zz.value;
    let opO = op === '+' ? '-' : '+';

    let xx1 = a*a;
    let yy1 = a*a*a;
    let xxx = op === '+' ? xx1 - 4 : xx1 + 4;
    let yyy = op === '+' ? yy1 - 3*a : yy1 + 3*a;
    let zzz = finder(xxx);
    let fac = zzz.factor;
    let rem = zzz.remaining;
    let res = zzz.result;

    let rvx1 = fac*fac*fac*rem;
    let rvx2 = 3*fac;
    let rvxx = op === '+' ? rvx1 + rvx2 : rvx1 - rvx2;
    let rvz1 = `${rvx1}\\sqrt{${rem}}`;
    let rvz2 = `3${dt}${res}`;
    let rvz3 = `${rvx2}\\sqrt{${rem}}`;
    let rvzz = `${rvxx}\\sqrt{${rem}}`;

    pa.innerHTML = `\\(${tx1}${u1}${op}${v1}${e}${a};${u1}^6-${v6}${e}? \\)<br>
                    \\(${given} \\)<br>
                    \\(\\hspace{4em} ${u1}${op}${v1}${e}${a} \\)<br><br>
                    \\(${c}\\left (${u1}${op}${v1} \\right )^3${e}(${a})^3${cu} \\)<br><br>
                    \\(${c}(${u1})^3${op}\\left (${v1} \\right )^3
                       ${op}3${dt}${u1}${dt}${v1}${dt}\\left (${u1}${op}${v1} \\right )
                       ${e}${yy1} \\)<br><br>
                    \\(${c}${u1}^3${op}${v3}${op}3${dt}${a}
                       ${e}${yy1}${subst} \\)<br><br>
                    \\(${c}${u1}^3${op}${v3}
                       ${e}${yy1}${opO} ${3*a} \\)<br><br>
                    \\(${c}${u1}^3${op}${v3}${e}${yyy} \\)<br><br>

                    \\(${now} \\)<br>
                    \\(\\left (${u1}${opO}${v1} \\right )^2${e} \\left (${u1}${op}${v1} \\right )^2
                       ${opO}4${dt}${u1}${dt}${v1} \\)<br>
                    \\(\\hspace{4em} ${e}(${a})^2${opO}4${subst} \\)<br>
                    \\(\\hspace{4em} ${e}${xx1}${opO}4 \\)<br>
                    \\(\\hspace{4em} ${e}${xxx} \\)<br>
                    \\(${c}${u1}${opO}${v1}${e}\\sqrt{${xxx}} \\)<br><br>
                    \\(${d}${u1}${opO}${v1}${e}${res} \\)<br>

                    \\(${again} \\)<br>
                    \\(${u1}${opO}${v1}${e}${res} \\)<br><br>
                    \\(${c} \\left (${u1}${opO}${v1} \\right )^3${e}
                       \\left (${res} \\right )^3${cu} \\)<br><br>
                    \\(${c}(${u1})^3${opO}\\left (${v1} \\right )^3
                       ${opO}3${dt}${u1}${dt}${v1}${dt}\\left (${u1}${opO}${v1} \\right )
                       ${e}${rvz1} \\)<br><br>
                    \\(${c}${u1}^3${opO}${v3}${opO}${rvz2}
                       ${e}${rvz1}${subst} \\)<br><br>
                    \\(${c}${u1}^3${opO}${v3}
                       ${e}${rvz1}${op} ${rvz3} \\)<br><br>
                    \\(${c}${u1}^3${opO}${v3}${e}${rvzz} \\)<br><br>

                    \\(${therefore} \\)<br>
                    \\(\\hspace{4em} ${u1}^6-${v6} \\)<br><br>
                    \\(\\hspace{4em} ${e}(${u1}^3)^2-\\left (${v3} \\right )^2 \\)<br><br>
                    \\(\\hspace{4em} ${e}\\left (${u1}^3+${v3}\\right ) \\left (${u1}^3-${v3} \\right ) \\)<br><br>
                    \\(\\hspace{4em} ${e}${yyy}${dt}${rvzz}${subst} \\)<br><br>
                    \\(${d}${u1}^6-${v6}${e}${yyy*rvxx}\\sqrt{${rem}} \\)
                    `;

    waitForKatex();
}
//////////////// yyy

///////////////// cube
function zza(){
    let a = Number(xx.value);
    let u1 = yy.value;
    let v1 = `\\frac{1}{${u1}}`;
    let v3 = `\\frac{1}{${u1}^3}`;
    let op = zz.value;
    let opO = op === '+' ? '-' : '+';

    let xx1 = a*a*a;
    let xx2 = 3*a;
    let xxx = op === '+' ? xx1 - xx2 : xx1 + xx2;
    let yy1 = `3${dt}${a}`;

    pa.innerHTML = `\\(${tx1}${u1}${op}${v1}${e}${a};${u1}^3${op}${v3}${e}? \\)<br>
                    \\(${given} \\)<br>
                    \\(\\hspace{4em} ${u1}${op}${v1}${e}${a} \\)<br><br>
                    \\(${c}\\left (${u1}${op}${v1} \\right )^3${e}(${a})^3${cu} \\)<br><br>
                    \\(${c}(${u1})^3${op}\\left (${v1} \\right)^3${op}3${dt}${u1}${dt}${v1}${dt} 
                      \\left (${u1}${op}${v1} \\right ) ${e}${xx1} \\)<br><br>
                    \\(${c}${u1}^3${op}${v3}${op}${yy1}${e}${xx1}${subst} \\)<br><br>
                    \\(${c}${u1}^3${op}${v3}${e}${xx1}${opO}${xx2} \\)<br><br>
                    \\(${d}${u1}^3${op}${v3}${e}${xxx} \\)<br><br>
                    `;

    waitForKatex();
}

function zzb(){
    let a = Number(xx.value);
    let u1 = yy.value;
    let v1 = `\\frac{1}{${u1}}`;
    let v3 = `\\frac{1}{${u1}^3}`;
    let op = zz.value;
    let opO = op === '+' ? '-' : '+';

    let xx1 = a*a*a;
    let xx2 = 3*a;
    let xxx = op === '+' ? xx1 - xx2 : xx1 + xx2;
    let yy1 = `3${dt}${a}`;
    let yyy = op === '+' ? a*a - 4 : a*a + 4;

    let zzz = finder(yyy);
    let fac = zzz.factor;
    let rem = zzz.remaining;
    let res = zzz.result;

    let rvx1 = fac*fac*fac*rem;
    let rvx2 = 3*fac;
    let rvxx = op === '+' ? rvx1 + rvx2 : rvx1 - rvx2;
    let rvz1 = `${rvx1}\\sqrt{${rem}}`;
    let rvz2 = `3${dt}${res}`;
    let rvz3 = `${3*fac}\\sqrt{${rem}}`;
    let rvzz = `${rvxx}\\sqrt{${rem}}`;

    pa.innerHTML = `\\(${tx1}${u1}${op}${v1}${e}${a};${u1}^3${opO}${v3}${e}? \\)<br>
                    \\(${given} \\)<br>
                    \\(\\hspace{4em} ${u1}${op}${v1}${e}${a} \\)<br>

                    \\(${weknow} \\)<br>
                    \\(\\left (${u1}${opO}${v1} \\right )^2${e}
                       \\left (${u1}${op}${v1} \\right )^2${opO}4${dt}${u1}${dt}${v1} \\)<br>
                    \\(\\hspace{4em}${e}(${a})^2${opO}4${subst} \\)<br>
                    \\(\\hspace{4em}${e}${a*a}${opO}4 \\)<br>
                    \\(\\hspace{4em}${e}${yyy} \\)<br>
                    \\(${c}${u1}${opO}${v1}${e}\\sqrt{${yyy}} \\)<br>
                    \\(${d}${u1}${opO}${v1}${e}${res} \\)<br>

                    \\(${now} \\)<br>
                    \\(${u1}${opO}${v1}${e}${res} \\)<br>
                    \\(${c} \\left (${u1}${opO}${v1} \\right )^3${e} \\left (${res} \\right )^3${cu} \\)<br><br>
                    \\(${c}(${u1})^3${opO} \\left (${v1} \\right )^3${opO}3${dt}
                       ${u1}${dt}${v1}${dt}
                       \\left(${u1}${opO}${v1} \\right )${e}${rvz1} \\)<br><br>
                    \\(${c}${u1}^3${opO}${v3}${opO}${rvz2}${e}${rvz1}${subst} \\)<br><br>
                    \\(${c}${u1}^3${opO}${v3}${e}${rvz1}${op}${rvz3} \\)<br><br>
                    \\(${d}${u1}^3${opO}${v3}${e}${rvzz} \\)<br><br>
                    `;

    waitForKatex();
}

function zzc(){
    let a = Number(xx.value);
    let u1 = yy.value;
    let v1 = `\\frac{1}{${u1}}`;
    let v2 = `\\frac{1}{${u1}^2}`;
    let v3 = `\\frac{1}{${u1}^3}`;
    let v5 = `\\frac{1}{${u1}^5}`;
    let op = zz.value;
    let opO = op === '+' ? '-' : '+';

    let xx1 = a*a;
    let xxx = op === '+' ? xx1 - 2 : xx1 + 2;

    let yy1 = a*a*a;
    let yy2 = 3*a;
    let yya = `3${dt}${u1}${dt}${v1}`;
    let yyb = `3${dt}${a}`;
    let yyy = op === '+' ? yy1 - yy2 : yy1 + yy2;

    let zz1 = xxx*yyy;
    let zzz = zz1 - a;

    pa.innerHTML = `\\(${tx1}${u1}${op}${v1}${e}${a};${u1}^5${op}${v5}${e}? \\)<br>
                    \\(${given} \\)<br>
                    \\(\\hspace{4em} ${u1}${op}${v1}${e}${a} \\)<br><br>
                    \\(${c} \\left (${u1}${op}${v1} \\right )^2${e}(${a})^2${sq} \\)<br><br>
                    \\(${c}(${u1})^2+\\left (${v1} \\right )^2${op}
                       2${dt}${u1}${dt}${v1}${e}${xx1} \\)<br><br>
                    \\(${c}${u1}^2+${v2}${op}2${e}${xx1} \\)<br><br>
                    \\(${c}${u1}^2+${v2}${e}${xx1}${opO}2 \\)<br><br>
                    \\(${c}${u1}^2+${v2}${e}${xxx} \\)<br>

                    \\(${again} \\)<br>
                    \\(${u1}${op}${v1}${e}${a} \\)<br>
                    \\(${c} \\left (${u1}${op}${v1} \\right )^3${e}(${a})^3${cu} \\)<br><br>
                    \\(${c}(${u1})^3${op} \\left (${v1} \\right )^3${op}
                       ${yya}${dt}\\left (${u1}${op}${v1} \\right ) ${e}${yy1} \\)<br><br>
                    \\(${c}${u1}^3${op}${v3}${op}${yyb}${e}${yy1}${subst} \\)<br><br>
                    \\(${c}${u1}^3${op}${v3}${e}${yy1}${opO}${yy2} \\)<br><br>
                    \\(${c}${u1}^3${op}${v3}${e}${yyy} \\)<br>

                    \\(${now} \\)<br>
                    \\(\\left (${u1}^3${op}${v3} \\right ) \\left (${u1}^2+${v2} \\right )
                       ${e}${yyy}${dt}${xxx}  \\)<br><br>
                    \\(${c}${u1}^5+${u1}^3${dt}${v2}${op}${v3}${dt}${u1}^2
                       ${op}${v5}${e}${zz1} \\)<br><br>
                    \\(${c}${u1}^5${op}${v5}+${u1}${op}${v1}${e}${zz1} \\)<br><br>
                    \\(${c}${u1}^5${op}${v5}+${a}${e}${zz1}${subst} \\)<br><br>
                    \\(${c}${u1}^5${op}${v5}${e}${zz1}-${a} \\)<br><br>
                    \\(${d}${u1}^5${op}${v5}${e}${zzz} \\)
                    `;

    waitForKatex();
}

function zzd(){
    let a = Number(xx.value);
    let u1 = yy.value;
    let v1 = `\\frac{1}{${u1}}`;
    let v2 = `\\frac{1}{${u1}^2}`;
    let v3 = `\\frac{1}{${u1}^3}`;
    let v5 = `\\frac{1}{${u1}^5}`;
    let op = zz.value;
    let opO = op === '+' ? '-' : '+';

    let xx1 = a*a;
    let xxx = op === '+' ? xx1 - 2 : xx1 + 2;
    let sss = op === '+' ? xx1 - 4 : xx1 + 4;

    let rrr = finder(sss);
    let fac = rrr.factor;
    let rem = rrr.remaining;
    let res = rrr.result;

    let yy1 = fac*fac*fac*rem;
    let yy2 = 3*fac;
    let yyy = op === '+' ? yy1 + yy2 : yy1 - yy2;

    let rvz1 = `${yy1}\\sqrt{${rem}}`;
    let rvz2 = `3${dt}${res}`;
    let rvz3 = `${3*fac}\\sqrt{${rem}}`;
    let rvzz = `${yyy}\\sqrt{${rem}}`;

    let zz1 = `${rvzz}${dt}${xxx}`;
    let zz2 = `${yyy*xxx}\\sqrt{${rem}}`;
    let zzz = `${yyy*xxx-fac}\\sqrt{${rem}}`;

    pa.innerHTML = `\\(${tx1}${u1}${op}${v1}${e}${a};${u1}^5${opO}${v5}${e}? \\)<br>
                    \\(${given} \\)<br>
                    \\(\\hspace{4em} ${u1}${op}${v1}${e}${a} \\)<br><br>
                    \\(${c} \\left (${u1}${op}${v1} \\right )^2${e}(${a})^2${sq} \\)<br><br>
                    \\(${c}(${u1})^2+\\left (${v1} \\right )^2${op}
                       2${dt}${u1}${dt}${v1}${e}${xx1} \\)<br><br>
                    \\(${c}${u1}^2+${v2}${op}2${e}${xx1} \\)<br><br>
                    \\(${c}${u1}^2+${v2}${e}${xx1}${opO}2 \\)<br><br>
                    \\(${c}${u1}^2+${v2}${e}${xxx} \\)<br>

                    \\(${weknow} \\)<br>
                    \\(\\left (${u1}${opO}${v1} \\right )^2${e}
                       \\left (${u1}${op}${v1} \\right )^2${opO}4${dt}${u1}${dt}${v1} \\)<br>
                    \\(\\hspace{4em}${e}(${a})^2${opO}4${subst} \\)<br>
                    \\(\\hspace{4em}${e}${xx1}${opO}4 \\)<br>
                    \\(\\hspace{4em}${e}${sss} \\)<br>
                    \\(${c}${u1}${opO}${v1}${e}\\sqrt{${sss}} \\)<br>
                    \\(${d}${u1}${opO}${v1}${e}${res} \\)<br>

                    \\(${here} \\)<br>
                    \\(${u1}${opO}${v1}${e}${res} \\)<br>
                    \\(${c} \\left (${u1}${opO}${v1} \\right )^3${e} \\left (${res} \\right )^3${cu} \\)<br><br>
                    \\(${c}(${u1})^3${opO} \\left (${v1} \\right )^3${opO}3${dt}
                       ${u1}${dt}${v1}${dt}
                       \\left(${u1}${opO}${v1} \\right )${e}${rvz1} \\)<br><br>
                    \\(${c}${u1}^3${opO}${v3}${opO}${rvz2}${e}${rvz1}${subst} \\)<br><br>
                    \\(${c}${u1}^3${opO}${v3}${e}${rvz1}${op}${rvz3} \\)<br><br>
                    \\(${d}${u1}^3${opO}${v3}${e}${rvzz} \\)<br><br>

                    \\(${now} \\)<br>
                    \\(\\left (${u1}^3${opO}${v3} \\right ) \\left (${u1}^2+${v2} \\right )
                       ${e}${zz1}  \\)<br><br>
                    \\(${c}${u1}^5+${u1}^3${dt}${v2}${opO}${v3}${dt}${u1}^2
                       ${opO}${v5}${e}${zz2} \\)<br><br>
                    \\(${c}${u1}^5${opO}${v5}+${u1}${opO}${v1}${e}${zz2} \\)<br><br>
                    \\(${c}${u1}^5${opO}${v5}+${res}${e}${zz2}${subst} \\)<br><br>
                    \\(${c}${u1}^5${opO}${v5}${e}${zz2}-${res} \\)<br><br>
                    \\(${d}${u1}^5${opO}${v5}${e}${zzz} \\)
                    `;

    waitForKatex();
}
///////////////// cube

///////////////////////
function finder (num) {
    if (isNaN(num)) {
        alert('Please enter a valid number.');
        return;
    }

    if (num < 0) {
        alert('Please enter a non-negative number.');
        return;
    }

    if (num === 0) {
        return { factor: 0, remaining: 0, result: '0' };
    }

    let factor = 1;
    for (let i = 2; i * i <= num; i++) {
        while (num % (i * i) === 0) {
            factor *= i;
            num = num / (i * i);
        }
    }

    let result = num === 1 
        ? `${factor}` 
        : factor > 1 
        ? `${factor}\\sqrt{${num}}` 
        : `\\sqrt{${num}}`;

    return { factor, remaining: num, result };
}

function waitForKatex() {
    if (typeof renderMathInElement !== "undefined") {
        renderMathInElement(document.body, {
            delimiters: [
                { left: '\\[', right: '\\]', display: true },
                { left: '\\(', right: '\\)', display: false }
            ]
        });
     } else {
         setTimeout(waitForKatex, 50); // Check again after 50ms
     }
}
///////////////////////
