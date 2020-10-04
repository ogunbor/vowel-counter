let word, outputText;
let form = document.querySelector('form')

function validate(word) {
    word = form.vowel.value;

    var vowel_list = 'aeiouAEIOU';
    var vtotal = 0;

    for (var i = 0; i < word.length; i++) {
        if (vowel_list.indexOf(word[i]) !== -1) {
            vtotal++

        }
        outputText = `Number of vowels is ${vtotal}`

    }

    document.querySelector('#output_text').innerHTML = outputText

}