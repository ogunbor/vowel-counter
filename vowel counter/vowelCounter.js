let word, outputText;
let form = document.querySelector('form')
let h2 = document.querySelector('h2')


function validate(word) {
    word = form.vowel.value;

    var vowel_list = 'aeiouAEIOU';
    var vtotal = 0;

    for (let i of word) {
        if (vowel_list.indexOf(i) !== -1) {
            vtotal++

        }
        outputText = `Number of vowels: <h1>${vtotal}</h1>`
    }

    document.querySelector('#output_text').innerHTML = outputText

}
