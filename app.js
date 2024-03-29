// Pixelated representation of letters
const alphabet = {
	'EOL': [
        "`\n",
        "`\n",
        "`\n",
        "`\n",
        "`\n",
        "`\n",
        "`\n"
    ],
    ' ': [
        "```",
        "```",
        "```",
        "```",
        "```",
        "```",
        "```"
    ],
    '!': [
        "``",
        "`#",
        "`#",
        "`#",
        "``",
        "`#",
        "``"
    ],
    '.': [
        "``",
        "``",
        "``",
        "``",
        "``",
        "`#",
        "``"
    ],
    ',': [
        "```",
        "```",
        "```",
        "```",
        "```",
        "``#",
        "`#`"
    ],
    '-': [
        "````",
        "````",
        "````",
        "`###",
        "````",
        "````",
        "````"
    ],
    '_': [
        "`````",
        "`````",
        "`````",
        "`````",
        "`````",
        "`####",
        "`````"
    ],
    '0': [
        "````",
        "``#`",
        "`#`#",
        "`###",
        "`#`#",
        "``#`",
        "````"
    ],
    '1': [
        "```",
        "``#",
        "`##",
        "``#",
        "``#",
        "``#",
        "```"
    ],
    '2': [
        "````",
        "``#`",
        "`#`#",
        "```#",
        "``#`",
        "`###",
        "````"
    ],
    '3': [
        "````",
        "`##`",
        "```#",
        "``#`",
        "```#",
        "`##`",
        "````"
    ],
    '4': [
        "````",
        "`#`#",
        "`#`#",
        "`###",
        "```#",
        "```#",
        "````"
    ],
    '5': [
        "````",
        "`###",
        "`#``",
        "`##`",
        "```#",
        "`##`",
        "````"
    ],
    '6': [
        "````",
        "``#`",
        "`#``",
        "`##`",
        "`#`#",
        "``#`",
        "````"
    ],
    '7': [
        "````",
        "`###",
        "```#",
        "``#`",
        "``#`",
        "``#`",
        "````"
    ],
    '8': [
        "````",
        "``#`",
        "`#`#",
        "``#`",
        "`#`#",
        "``#`",
        "````"
    ],
    '9': [
        "````",
        "``#`",
        "`#`#",
        "``##",
        "```#",
        "``#`",
        "````"
    ],
    'A': [
        "`````",
        "``##`",
        "`#``#",
        "`####",
        "`#``#",
        "`#``#",
        "`````"
    ],
    'B': [
        "`````",
        "`###`",
        "`#``#",
        "`###`",
        "`#``#",
        "`###`",
        "`````"
    ],
    'C': [
        "````",
        "``##",
        "`#``",
        "`#``",
        "`#``",
        "``##",
        "````"
    ],
    'D': [
        "`````",
        "`###`",
        "`#``#",
        "`#``#",
        "`#``#",
        "`###`",
        "`````"
    ],
    'E': [
        "````",
        "`###",
        "`#``",
        "`##`",
        "`#``",
        "`###",
        "````"
    ],
    'F': [
        "````",
        "`###",
        "`#``",
        "`##`",
        "`#``",
        "`#``",
        "````"
    ],
    'G': [
        "`````",
        "`####",
        "`#```",
        "`#`##",
        "`#``#",
        "`####",
        "`````"
    ],
    'H': [
        "`````",
        "`#``#",
        "`#``#",
        "`####",
        "`#``#",
        "`#``#",
        "`````"
    ],
    'I': [
        "````",
        "`###",
        "``#`",
        "``#`",
        "``#`",
        "`###",
        "````"
    ],
    'J': [
        "`````",
        "``###",
        "```#`",
        "```#`",
        "`#`#`",
        "``#``",
        "`````"
    ],
    'K': [
        "`````",
        "`#``#",
        "`#`#`",
        "`##``",
        "`#`#`",
        "`#``#",
        "`````"
    ],
    'L': [
        "````",
        "`#``",
        "`#``",
        "`#``",
        "`#``",
        "`###",
        "````"
    ],
    'M': [
        "``````",
        "`#```#",
        "`##`##",
        "`#`#`#",
        "`#```#",
        "`#```#",
        "``````"
    ],
    'N': [
        "``````",
        "`#```#",
        "`##``#",
        "`#`#`#",
        "`#``##",
        "`#```#",
        "``````"
    ],
    'O': [
        "`````",
        "``##`",
        "`#``#",
        "`#``#",
        "`#``#",
        "``##`",
        "`````"
    ],
    'P': [
        "````",
        "`##`",
        "`#`#",
        "`##`",
        "`#``",
        "`#``",
        "````"
    ],
    'Q': [
        "`````",
        "``##`",
        "`#``#",
        "`#``#",
        "`#`##",
        "``###",
        "`````"
    ],
    'R': [
        "````",
        "`##`",
        "`#`#",
        "`##`",
        "`##`",
        "`#`#",
        "````"
    ],
    'S': [
        "````",
        "``##",
        "`#``",
        "``#`",
        "```#",
        "`##`",
        "````"
    ],
    'T': [
        "````",
        "`###",
        "``#`",
        "``#`",
        "``#`",
        "``#`",
        "````"
    ],
    'U': [
        "`````",
        "`#``#",
        "`#``#",
        "`#``#",
        "`#``#",
        "``##`",
        "`````"
    ],
    'V': [
        "``````",
        "`#```#",
        "`#```#",
        "``#`#`",
        "``#`#`",
        "```#``",
        "``````"
    ],
    'W': [
        "``````",
        "`#```#",
        "`#```#",
        "`#```#",
        "`#`#`#",
        "``#`#`",
        "``````"
    ],
    'X': [
        "``````",
        "`#```#",
        "``#`#`",
        "```#``",
        "``#`#`",
        "`#```#",
        "``````"
    ],
    'Y': [
        "``````",
        "`#```#",
        "``#`#`",
        "```#``",
        "```#``",
        "```#``",
        "``````"
    ],
    'Z': [
        "``````",
        "`#####",
        "````#`",
        "```#``",
        "``#```",
        "`#####",
        "``````"
    ]
};


document.addEventListener("DOMContentLoaded", function() {
	const input_text = document.querySelector('#input_text');
	const input_chars_count = document.querySelector('#input_chars_count');
	const foreground = document.querySelector('#foreground_text');
	const background = document.querySelector('#background_text');
	const output = document.querySelector('#output');
	
	const process_letter = (ltr) => {
		var letter = alphabet[ltr.toUpperCase()];
		if (!letter) {
			letter = alphabet[' '];
		}
		
		var output_letter_array = [];
		for (var row = 0; row < 7; row++) {
			output_letter_array[row] = letter[row].replace(/#/g, ':' + foreground.value + ':').replace(/`/g, ':' + background.value + ':');
		}
		
		return output_letter_array;
	};
	
	const append_arrays = (arr1, arr2) => {
		var out_arr = [];
		
		for (var row = 0; row < arr1.length; row++) {
			out_arr[row] = arr1[row] + arr2[row];
		}
		
		return out_arr;
	};
	
	const slice_text = (in_text, chars_per_slice) => {
		var text_slices = [];
		if(chars_per_slice === 0) {
			text_slices.push(in_text);
		}
		else
		{
			// Split text into substrings of chars_per_slice characters
			var i = 0;
			while (i < in_text.length) {
				text_slices.push(in_text.slice(i, i + chars_per_slice));
				i += chars_per_slice;
			}
		}
		
		return text_slices;
	};	
		
    const generate = (in_txt) => {
		
		let max_chars_per_row = 0;
		if (input_chars_count.value && /^\d+$/.test(input_chars_count.value)) {
			max_chars_per_row = parseInt(input_chars_count.value);
		}
		
		var text_slices = slice_text(in_txt, max_chars_per_row);
		
        var output_text_array = [];
		output_text_array.push([]);
		
		for (var i = 0; i < text_slices.length; i++) {
			let text_slice = text_slices[i];
			
			output_text_array[i] = [];			
			for (var j = 0; j < text_slice.length; j++) {
				let letter_array = process_letter(text_slice[j]);
				output_text_array[i].push(letter_array);
			}
			
			output_text_array[i].push(process_letter('EOL'));
		}
		
		
		// convert the 3-dimensional array into plain text;
		var output_text = "";
		for (var i = 0; i < output_text_array.length; i++) { // for each slack text line
			var sub_arr = output_text_array[i];
			for (var k = 0; k < 7; k++) {
				for (var j = 0; j < sub_arr.length; j++) { // for each emoji letter in a slack text line
					var sub_sub_arr = sub_arr[j];
					output_text += output_text_array[i][j][k];
				}
			}
		}
		
        return output_text;
    };

    const replace = () => {
        output.value = generate(input_text.value);
    };

    input_text.addEventListener('input', replace);
	input_chars_count.addEventListener('input', replace);
    foreground.addEventListener('input', replace);
    background.addEventListener('input', replace);

    replace();
});