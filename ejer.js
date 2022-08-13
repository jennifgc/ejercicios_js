function CallMenu() {
    let nro_ejercicio = parseInt(
        prompt("ingrese el numero de ejercicio que quiere ejecutar: \r\n 1.suma \r\n 2.Promedio de Examenes \r\n 3.Calcular el area del rectangulo \r\n 4.Calcular el area del triangulo \r\n 5.Calcular el area del Circulo \r\n 6.Calcular salario semanal \r\n 7.Convertir pulgadas \r\n 8.Cambiar a dolares \r\n 9. Calcular edad personal \r\n 10. Persona de menor edad \r\n 11. Bono por antiguedad \r\n 12. Aumento del salario Anual \r\n 13. Alumnos aprobados y desaprobados \r\n 14. Inventario de focos de colores \r\n 15. Electores para elecciones"));
    if (isNaN(nro_ejercicio)) {
        alert("porfavor ingresa valores numericos");
    } else {
        MenuEjercicio(nro_ejercicio);
    }
}

function MenuEjercicio(nro_ejercicio) {
    switch (nro_ejercicio) {
        case 1:
            let valor1 = parseFloat(prompt("ingrese el valor 1 a sumar:"));
            let valor2 = parseFloat(prompt("ingrese el valor 2 a sumar:"));
            alert(ej1_calcularSumaValores(valor1, valor2));
            break;

        case 2:
            let nota1 = parseFloat(prompt("ingrese la nota1:"));
            let nota2 = parseFloat(prompt("ingrese la nota2:"));
            let nota3 = parseFloat(prompt("ingrese la nota3:"));
            let nota4 = parseFloat(prompt("ingrese la nota4:"));
            alert(eje2_calcularPromedio(nota1, nota2, nota3, nota4));
            break;

        case 3:
            let base_rect = parseFloat(prompt("ingrese la base del rectangulo:"));
            let altura_rect = parseFloat(prompt("ingrese la altura del rectangulo:"));
            alert(eje3_calcularAreaRectangulo(base_rect, altura_rect));
            break;

        case 4:
            let base_t = parseFloat(prompt("ingrese la base del triangulo:"));
            let altura_t = parseFloat(prompt("ingrese la altura del triangulo:"));
            alert(eje4_calcularAreaTriangulo(base_t, altura_t))
            break;

        case 5:
            let radio = parseFloat(prompt("ingrese el radio del circulo:"));
            alert(eje5_calcularAreaCirculo(radio));
            break;

        case 6:
            let horas = parseFloat(prompt("ingrese las horas trabajadas:"));
            let valorHora = parseFloat(prompt("ingrese el valor de la hora:"));
            alert(eje6_calcularSalarioSemanal(horas, valorHora));
            break;

        case 7:
            let metros = parseFloat(prompt("ingrese los metros:"));
            alert(eje7_convertirPulgadas(metros));
            break;
    
        case 8:
                let soles = parseFloat(prompt("ingrese los soles que desea cambiar a dolares:"));
                alert(eje8_convertirDolares(soles));
                break;

        case 9:
            let anio= parseFloat(prompt("ingrese tu anio de nacimiento"));
            alert(eje9_conocerSuEdad(anio));
            break;

        case 10:
            let nombre1 = prompt("Ingrese nombre 1");
            let edadNombre1 = parseInt(prompt("Ingrese edad 1"));
            let nombre2 = prompt("Ingrese nombre 2");
            let edadNombre2 = parseInt(prompt("Ingrese edad 2"));
            let nombre3 = prompt("Ingrese nombre 3");
            let edadNombre3 = parseInt(prompt("Ingrese edad 3"));
            alert(ej10_personaMenor(nombre1, nombre2, nombre3, edadNombre1, edadNombre2, edadNombre3))
            break;

        case 11:
            let anio_trabajados= parseFloat(prompt("ingrese los años laborados en la empresa"));
            alert(eje11_calcularBono(anio_trabajados));
            break;

        case 12:
            eje12_calcularSalario();
            break;

        case 13:
            let cantidadAlumnos = parseInt(prompt("ingrese la cantidad de alumnos: "));
            alert(eje13_cantidadAprobados(cantidadAlumnos));
            break;

        case 14:
            let focos = parseFloat(prompt("Ingrese la cantidad de focos:"));
            alert(eje14_calcularInventario(focos));
            break;

        case 15:
            let edad=parseInt(prompt("\r\nIngrese su edad: "));
            alert(eje15_votar(edad));
            break;
        }
    }

function ej1_calcularSumaValores(a, b) {
    if (isNaN(a) || isNaN(b)){
        return "porfavor ingrese valores numericos";
    }else {return a + b;}
}

function eje2_calcularPromedio(nota1, nota2, nota3, nota4) {
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        return "porfavor ingrese valores numericos";
    } else {return (nota1 + nota2 + nota3 + nota4) / 4;}
}

function eje3_calcularAreaRectangulo(base_rect, altura_rect) {
    if (isNaN(base_rect) || isNaN(altura_rect)) {
    return "porfavor ingrese valores numericos";
    } else {return `el area del triangulo es: ${(+base_rect * +altura_rect)}`;}
}

function eje4_calcularAreaTriangulo(base_t,altura_t) {
    if (isNaN(base_t) || isNaN(altura_t)) {
        return "porfavor ingrese valores numericos";
    } else {return `el area del rectangulo es: ${(base_t * altura_t)/2}`;}
}

function eje5_calcularAreaCirculo(radio) {
    if (isNaN(radio)){
        return "porfavor ingrese valores numericos";
    } else {return `el area del circulo es: ${(Math.PI * (radio** 2))}`;}
}

function eje6_calcularSalarioSemanal(horas,valorHora) {
    if (isNaN(horas) || isNaN(valorHora)) {
        return "porfavor ingrese valores numericos";
    } else {return `tu sueldo a cobrar es: ${(horas * valorHora)}`;}
}

function eje7_convertirPulgadas(metros) {
    if (isNaN(metros)){
        return "porfavor ingrese cantidad de metros";
    } else {return `la cantidad de tela en pulgadas es: ${(metros * 2.54)}`;}
}

function eje8_convertirDolares(soles) {
    if (isNaN(soles)){
        return "porfavor ingrese monto en soles";
    } else {return `la cantidad de dolares es: ${(soles / 3.885)}`;}
}

function eje9_conocerSuEdad(anio) {
    if (isNaN(anio)){
        return "porfavor ingrese el año que nacio";
    } else {return `Su edad actual es: ${(new Date().getFullYear()-anio)} años`;}
}

function ej10_personaMenor(nombre1, nombre2, nombre3, edadNombre1, edadNombre2, edadNombre3) {
    if (edadNombre1 < edadNombre2) {
        if (edadNombre1 < edadNombre3) {
            return `la persona menor es : ${nombre1} con la menor edad ${edadNombre1}`;
        } else {
            return `la persona menor es : ${nombre3} con la menor edad ${edadNombre3}`;
        }
    } else {
        if (edadNombre2 < edadNombre3) {
            return `la persona menor es : ${nombre2} con la menor edad ${edadNombre2}`;
        } else {
            return `la persona menor es : ${nombre3} con la menor edad ${edadNombre3}`;
        }
    }
}

function eje11_calcularBono(anio_trabajados){
    let inicio_bono= 100;
    let anio_limite= 5;
    let bono_limite= 1000;
    if (isNaN(anio_trabajados))
    {
        return "porfavor los años trabajados";
    } 
    else 
    {
        if (anio_trabajados>0 && anio_trabajados <= anio_limite) 
        {
            return `Su bono es: ${(anio_trabajados * inicio_bono)}`;
        }
        else 
        {
        return `Su bono es: ${(+ bono_limite)}`;
        }
    }    
}
    
function eje12_calcularSalario(){
        let salario = 1500;
        let año = 0;
        while(año < 6)
        {
        año = año + 1 ;
        salario = salario*1.1;
        salario = salario.toFixed(2);
        alert( 'El salario para el año ' + año + ' es de ' + salario);
        }
}

function eje13_cantidadAprobados(cantidadAlumnos){
        let n = 0;
        let aprobados = 0;
        let desaprobados = 0;
        while ( n < cantidadAlumnos ) 
        {
            n = n+ 1;
            let nota = parseFloat(prompt("ingrese nota:"));
            if (nota > 10 && n <= 20 ){
            aprobados = aprobados + 1;
            }else{
            desaprobados = desaprobados + 1;
            }
        }
        return 'La cantidad de aprobados es ' + aprobados + ' los desaprobados son ' + desaprobados;
}

function eje14_calcularInventario(num_focos) {
	let rojo = 0;
	let blanco = 0;
	let verde = 0;
	if (isNaN(num_focos)) {
		return "Porfavor ingrese valores";
	} else { 
		let focos = 0;
		while (focos < num_focos) {
			focos = focos + 1;
			let menu_focos = prompt("Ingrese la letra del color del foco: \r\n r : rojo \r\n b : blanco \r\n v : verde");
			if (menu_focos == "r") {
				rojo = rojo + 1;
			} else if (menu_focos == "b") {
				blanco = blanco + 1;
			}else{
				verde = verde + 1;
			}
		}
		return `Inventario total de focos : ${num_focos} \r\n Focos rojos: ${rojo} \r\n Focos blancos: ${blanco}, \r\n Focos verdes: ${verde}`
	}
}

function eje15_votar(edad){
    if(edad>=18){
        return "Ud puede votar en las elecciones";
    }
    else{
        return "Ud. no puede votar en las elecciones";
    }
}