console.log('hola mundo!');
const noCambia = "Leonidas";

let cambia = "@LeonidasEsteban"

function cambiarNombre(nuevoNombre) {
  cambia = nuevoNombre
}

const getUserAll = new Promise (function(todoBien, todoMal){
	//llamar un api

	setTimeout (function(){

	//luego de 3 segundos
	todoMal ("time out");

	},6000)

})

const getUser = new Promise (function(todoBien, todoMal){
	//llamar un api

	setTimeout (function(){

	//luego de 3 segundos
	todoMal ("time out");

	},3000)

})

/*

getUser
	.then(function() {
		console.log("todo ok")
	})
	.catch(function(msg) {
		console.log(msg)
	})

	Promise.all ([
		getUser,
		getUserAll,
		])

		.then(function (msg) {
			// body...
		})
		.catch (funtion(msg)){
			console.log (msg)
		}
*/

$.ajax('https://randomuser.me/api/',{
  method: 'GET',
  success: function(data) {
    console.log(data);
  }
});
     