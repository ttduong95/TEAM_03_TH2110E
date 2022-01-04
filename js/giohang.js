document.getElementById("showcart").style.display = "none";


var giohang = new Array();

function themvaogiohang(x) {
    var box = x.parentElement.children;
    var hinh = box[0].children[0].src;
    var gia = box[1].children[1].children[0].innerText;
    var tensp = box[1].children[0].innerText;
    var soluong = parseInt(box[1].children[1].children[1].children[0].value);

    var sp = new Array(hinh, gia, tensp, soluong);

    //kiemtragiohang
    var kt = 0;
    for (let i=0;i<giohang.length;i++){
        if (giohang[i][2] == tensp){
            kt = 1;
            soluong+=giohang[i][3];
            giohang[i][3] = soluong;
            break;
        }
    }
    if (kt == 0){
        giohang.push(sp);
    }



    console.log(giohang);
    showcountsp();
    //luc gio hang
    sessionStorage.setItem("giohang",JSON.stringify(giohang));

}

function showcountsp() {
    document.getElementById("countsp").innerHTML = giohang.length;
}
function showmycart(){
    var ttgh = "";
    var tong = 0;
    for ( let i=0;i<giohang.length;i++){
        var tt = parseInt(giohang[i][1] * giohang[i][3]);
        tong+=tt;
        ttgh+='<tr>' +
            '<td>'+(i+1)+'</td>' +
            '<td><img src="'+giohang[i][0]+'" alt=""></td>' +
            '<td>'+giohang[i][2]+'</td>' +
            '<td>'+giohang[i][1]+'</td>' +
            '<td>'+giohang[i][3]+'</td>' +
            '<td>' +
            '  <div>'+tt+'</div>' +
            '</td>' +
            '</tr>';
    }
    ttgh +='<tr>' +
        '<th colSpan="5">TOTAL ORDER</th>' +
        '<th>' +
        '   <div>'+tong+'</div>' +
        '</th>' +
        '</tr>';
document.getElementById("mycart").innerHTML = ttgh;

}

function showcart(){
    var x= document.getElementById("showcart");
    if(x.style.display == "block"){
        x.style.display = "none";
    }else {
        x.style.display = "block";
    }
    showmycart()
}

function showgiohang_tranggiohang(){
    var gh = sessionStorage.getItem("giohang");
    var giohang = JSON.parse(gh);
    var ttgh = "";
    var tong = 0;
    for ( let i=0;i<giohang.length;i++){
        var tt = parseInt(giohang[i][1] * giohang[i][3]);
        tong+=tt;
        ttgh+='<tr>' +
            '<td>'+(i+1)+'</td>' +
            '<td><img src="'+giohang[i][0]+'" alt=""></td>' +
            '<td>'+giohang[i][2]+'</td>' +
            '<td>'+giohang[i][1]+'</td>' +
            '<td>'+giohang[i][3]+'</td>' +
            '<td>' +
            '  <div>'+tt+'</div>' +
            '</td>' +
            '</tr>';
    }
    ttgh +='<tr>' +
        '<th colSpan="5">TOTAL ORDER</th>' +
        '<th>' +
        '   <div>'+tong+'</div>' +
        '</th>' +
        '</tr>';
    document.getElementById("mycart").innerHTML = ttgh;
}
function dongydathang(){
    var ttnh = document.getElementById("thongtinnhanhang").children;
    var hoten = ttnh[0].children[1].children[0].value;
    var diachi = ttnh[1].children[1].children[0].value;
    var dienthoai = ttnh[2].children[1].children[0].value;
    var email = ttnh[3].children[1].children[0].value;

    var nguoinhan = new Array(hoten,diachi,dienthoai,email);
    console.log(nguoinhan);
    sessionStorage.setItem("nguoinhan",JSON.stringify(nguoinhan));

    window.location.assign("donhang.html");
}

function showthongtinnguoinhan(){
    var nguoinhan = sessionStorage.getItem("nguoinhan");
    var thongtin = JSON.parse(nguoinhan);

    var tt='<tr>' +
        '<td >FEMALE NAME</td>' +
        '    <td>'+thongtin[0]+'</td>' +
        '</tr>' +
        '<tr>' +
        '    <td>ADDRESS</td>' +
        '    <td>'+thongtin[1]+'</td>' +
        '</tr>' +
        '<tr>' +
        '     <td>PHONE</td>' +
        '    <td>'+thongtin[2]+'</td>' +
        '</tr>' +
        '<tr>' +
        '     <td>EMAIL</td>' +
        '     <td>'+thongtin[3]+'</td>' +
        '</tr>';
    document.getElementById("thongtinnhanhang").innerHTML = tt;
}





var idex=1;
var auto= function (){
    var images=["IMG/carot1.jpg","IMG/anhnen2.webp","IMG/cam1.webp"]
    document.getElementById("image").src= images[idex];
    idex++;
    if(idex==3){
        idex=0;
    }
}
setInterval(auto,3000);
var next=function (){
    var nexts=["IMG/thuonghieu1.jpg","IMG/thuonghieu5.jpg","IMG/thuonghieu2.jpg","IMG/thuonghieu4.jpg","IMG/thuonghieu1.jpg","IMG/thuonghieu4.jpg","IMG/thuonghieu2.jpg","IMG/thuonghieu4.jpg","IMG/thuonghieu1.jpg","IMG/thuonghieu3.jpg"]
    document.getElementById("next").src=nexts[parseInt(Math.random()*10)];
    document.getElementById("next1").src=nexts[parseInt(Math.random()*10)];
    document.getElementById("next2").src=nexts[parseInt(Math.random()*10)];
    document.getElementById("next3").src=nexts[parseInt(Math.random()*10)];
    document.getElementById("next4").src=nexts[parseInt(Math.random()*10)];
}
setInterval(next,3000);