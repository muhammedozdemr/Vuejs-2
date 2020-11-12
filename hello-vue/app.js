window.addEventListener('load',()=>{
	window.vue = new Vue({
		el:'#app',
		data:{
		  message:'Hello Vue!',
		  isLoggedIn:true,
		  username:'Muhammed',
		  city:'<h1>Elazığ</h1>'
		}
	})
})