function goToLoginAndRedirect(page){
    sessionStorage.setItem('redirectTo',page);
    window.location.href = '/signIn/signIn.html';
}
document.getElementById('qlnguoi').addEventListener('click',function(){
    goToLoginAndRedirect('/peopleManager/qlnguoi.html');
});
document.getElementById('themnguoi').addEventListener('click',function(){
    goToLoginAndRedirect('/peopleMore/themnguoi.html');
});
document.getElementById('dssach').addEventListener('click',function(){
    goToLoginAndRedirect('/listBook/list.html');
});
document.getElementById('thongke').addEventListener('click',function(){
    goToLoginAndRedirect('/statistical/statistical.html');
});