// https://www.codewars.com/kata/525ca723b6aecee8c900033c/train/javascript

/*

// escape double quotes first?

const result = [];
const row = [];

// dynamic RE to get capture groups for all field values
[...input.matchAll()].forEach(elm => {


})

// if elem === \n push row to result array and clear row array by setting length to 0

*/

function parseCSV(input, separator, quote) {
  separator = separator || ',';
  quote = quote || '"';

  const result = [];
  const row = [];

  input.replace(new RegExp(`${quote}{2}`, 'g'), '<DQ>').split(separator).forEach(el => {

    const startsWithQuote = el[0] === quote;

    // clean up quotes.
    const cleanText = el.replace(new RegExp(`${quote}{1}`, 'g'), '').replace(/<DQ>/g, quote)

    // if el doesn't start with quote, search for new line.
    if (!startsWithQuote && cleanText.match(/\n/)) {
      // add text prior to \n to row.
      console.log(cleanText.slice(0, cleanText.search(/\n/)))
      row.push(cleanText.slice(0, cleanText.search(/\n/)));
      // push row array copy to result.
      result.push([...row]);

      // set row length to 0.
      row.length = 0;

      // set cleanText with text after \n, so it can be pushed to row.
      row.push(cleanText.slice(cleanText.search(/\n/) + 1));
    } else {
      row.push(cleanText);
    }

  });

  result.push(row);

  return result;
}

console.log(parseCSV("one,\"two wraps\nonto \"\"two\"\" lines\",three\n4,,6"));