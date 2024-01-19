const signinbtn=document.querySelector('.signinbtn')
const signupbtn=document.querySelector('.signupbtn')
const frombox=document.querySelector('.from-box')
const body=document.querySelector('body')
signupbtn.onclick=function(){
    frombox.classList.add('active')
    body.classList.add('active')
}
signinbtn.onclick=function(){
    frombox.classList.remove('active')
    body.classList.remove('active')
}