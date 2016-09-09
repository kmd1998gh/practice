        input = ""; //入力値
        flg = 0; //0:演算子 1:数字 2:Clear
        Cflg=true;//false 「.」の入力済み
        total = 0; //合計
        op = "+"; //演算子


function btn_value(data) { //値の取得
    if(document.myForm.tx_Line.value!=0 || data!=0){
        console.log("data=" + data);
        flg = 1;
        input += data;
        document.myForm.tx_Line.value = input; //印字
    }
}

function btn_conma(){
    if(Cflg==true){
    Cflg=false;
        if(input!=""){
            input += '.';
            document.myForm.tx_Line.value = input;
        }else{
            input = '0.';
            document.myForm.tx_Line.value = input;
        }
    }
}

function btn_op(data) {
    if (flg == 1) {
        flg = 0;
        Cflg=true;
        work = total + op + input;
        total = eval(work);
        input = "";
        document.myForm.tx_Line.value = total; //印字
    }
    if (data == "=") {
        total = 0;
        op = "+";
    } else {
        op = data; //次の計算に使うためここで送られてきた演算子を代入する
    }
}
function btn_ps(){
    input *= -1;
    document.myForm.tx_Line.value = input;
}

function btn_par(){
    input *= 0.01;
    document.myForm.tx_Line.value = input;
}

function btn_clear() { //クリア
    flg = 0;
    Cflg=true;
    input = ""; //入力値のクリア
    total = 0; //合計のクリア
    op = "+"; //演算子のクリア
    document.myForm.tx_Line.value = "0"; //印字のクリア
        }