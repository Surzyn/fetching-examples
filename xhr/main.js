(function getData() {
    const API_URL = 'https://us-central1-itfighters-books.cloudfunctions.net/api1/';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', API_URL);

    xhr.addEventListener('load', () => {
        var books = JSON.parse(xhr.response);
        generateTable(books);

    });

    xhr.send();

    function generateTable(books) {
        generateHeader(books[0]);
        generateBody(books);
    }

    function generateBody(books) {
        var body = '';
        for (let i = 0; i < books.length; i++) {
            var tr = '<tr>';
            const book = books[i];
            for (const key in book) {
                tr += `<td>${book[key]}</td>`;
            }
            tr += '</tr>';
            body += tr;
        }
        $('tbody').html(body);
    }

    function generateHeader(item) {
        var head = '';
        for (const key in item) {
            head += `<td>${key}</td>`;
        }
        $('thead').html(head);
    }
})();

