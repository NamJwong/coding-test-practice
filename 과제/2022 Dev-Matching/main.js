'use strict'

const form = document.querySelector('form');
const input = document.querySelector('.SearchInput__input');
const suggestion = document.querySelector('.Suggestion');
const selectedLanguage = document.querySelector('.SelectedLanguage');

const HIDDEN = 'hidden';

let focus = 0;

const changeInput = () => {
    fetch(`https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev/languages?keyword=${input.value}`, {method: 'GET'})
    .then((response) => response.json())
    .then((data)=> {
        suggestion.classList.add(HIDDEN);
        if(data.length) {
            for(let d of data) {
                const li = document.createElement('li');
                // TODO 일치하는 검색어 하이라이트
                // li.setAttribute("class", "Suggestion__item--matched");
                // const matchIndex = d.indexOf(input.value);
                // const temp = d.split(input.value); .createTextNode( 'My Text' )
                li.innerText = d;
                suggestion.children[0].appendChild(li);
            }
            renderFocus();
            suggestion.classList.remove(HIDDEN);
        }
    });
}

const renderLanguageSelect = () => {
    if(suggestion.classList.contains(HIDDEN)) return;
    const ul = suggestion.children[0];
    input.removeEventListener('change', changeInput);
    for(let i = 0; i < ul.childNodes.length; i++) {
        ul.childNodes[i].addEventListener('click', (e)=>(clickSuggestion(e.target.innerText)));
    }
    form.removeEventListener('submit', search);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addSelectedLanguage(ul.children[focus].innerText);
    });
}

const clickSuggestion = (text) => {
    alert(text);
    addSelectedLanguage(text);
}

const handleArrowKey = (e) => {
    if(suggestion.classList.contains(HIDDEN)) return;
    if(e.keyCode == '38')  {
        upFocus();
        renderFocus();
    }else if(e.keyCode == '40') {
        downFocus();
        renderFocus();
    }
}

const downFocus = () => {
    if(suggestion.children[0].children.length-1 === focus) {
        focus = 0;
        return;
    }
    focus ++;
}

const upFocus = () => {
    if(0 === focus) {
        focus = suggestion.children[0].children.length-1;
        return;
    }
    focus --;
}

const renderFocus = () => {
    const ul = suggestion.children[0];
    for(let li of ul.children) {
        li.classList.remove('Suggestion__item--selected');
    }
    ul.children[focus].classList.add('Suggestion__item--selected');
}

const addSelectedLanguage = (text) => {
    const li = document.createElement('li');
    li.innerText = text;
    selectedLanguage.appendChild(li);
    // TODO 단어 개수 제한 및 중복 처리
}

const search = (e) => {
    e.preventDefault();
    renderLanguageSelect();
}

input.addEventListener('change', changeInput);
form.addEventListener('submit', search);
document.addEventListener("keyup", handleArrowKey);
