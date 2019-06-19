const texto = `Os e-mails dos convidados são:
	- fulano@cod3r.com.br
	- xica@gmail.com
	- registro@registro.br
	- maria_silva@registro.br
	- joao@empresa.info.br
	- rafa.sampaio@yahoo.com
	- jonas08-18_28@hotmail.com

`

const regexEmail = /[\w\.\-\d]+@\w+\.\w{2,}(\.\w{2})?/g

console.log(texto.match(regexEmail))