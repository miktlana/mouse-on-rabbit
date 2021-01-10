function calc(a, x, q) {
	if (a) {
		x *= q ;
	} else {
		x /= q ;
	}
	console.log(x);
	return Math.ceil(x);
}

function create_tr(val1, val2) {
	let tr = $('<tr>');

	{
		let td = $('<td>');
		td.append(val1);
		tr.append(td);
	}

	{
		let td = $('<td>');
		td.append(val2);
		tr.append(td);
	}
	return tr;
}

class doiter {
	constructor() {
		console.log("do constructor")
	    this.is_shirina = 1;
	    this.push_number = 0;
	    this.choise_resolution = 0;
    	// this.x_ceil = 0;
	}

	from_ui() {
		console.log("do from_ui")
		let choise_side = $("input[name=choise_side]:checked").val();
		this.is_shirina = choise_side == "1";
		this.push_number = $("#push_number").val();
		this.choise_resolution = $("input[name=choise_resolution]:checked").val();
	}

	calc() {
		console.log("do calc")
		this.x_ceil = calc(this.is_shirina, this.push_number, this.choise_resolution)
	}

	create_tr() {
		console.log("do create_tr")
		//return create_tr(this.push_number, this.x_ceil)

		let tr = $('<tr>');

		{
			let td = $('<td>');
			td.append(this.is_shirina?("Ширина"):"Высота");
			tr.append(td);
		}

		{
			let td = $('<td>');
			td.append(this.push_number);
			tr.append(td);
		}
		
		{
			let td = $('<td>');
			td.append(this.choise_resolution);
			tr.append(td);
		}

		{
			let td = $('<td>');
			td.append(this.is_shirina?("Высота"):"Ширина");
			tr.append(td);
		}

		{
			let td = $('<td>');
			td.append(this.x_ceil);
			tr.append(td);
		}
		return tr;
	}

	log() {
		console.log(" ")
		console.log("is_shirina = " + this.is_shirina)
		console.log("push_number = " + this.push_number)
		console.log("choise_resolution = " + this.choise_resolution)
		console.log("x_ceil = " + this.x_ceil)
		console.log(" ")
	}
}


let arr_doiter = [];

function fill_table(arr, html_table) {
	console.log("do fill_table")
	html_table.children().remove()
	for (let i = 0; i < arr.length; i++) {
		obj = arr[i]
		html_table.append(obj.create_tr())
	}
}


function start() {
	let cls1 = new doiter();
	cls1.log();
	cls1.from_ui();
	cls1.log();
	cls1.calc();
	cls1.log();
	arr_doiter.push(cls1)
	$("#output_result").val(cls1.x_ceil);
	fill_table(arr_doiter, $("#table_with_results"))
	// let table_with_results = $("#table_with_results");
	// table_with_results.append(cls1.create_tr());

	console.log(arr_doiter)
}
