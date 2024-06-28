const quotes = [
  {
    quote:
      "저 하늘에 반짝이는 새하얀 저 별이\n 우리를 좋은 일로 이끌어 줄 거야",
    author: "<앤 Anne>",
  },
  {
    quote: "매일매일 길 찾아갈 의지를 줘.\n 알잖아, 해 뜨기 전 칠흑같은 어둠",
    author: "<넥스트 투 노멀>",
  },
  {
    quote:
      "봄을 깨우는 따사로운 햇살처럼,\n 미움도 분노도 괴로움도 그녀 숨결에 녹아서 사라질거야",
    author: "<여신님이 보고계셔>",
  },
  {
    quote: "우리가 가진 유일한 인생은 일상이다",
    author: "<호프>",
  },
  {
    quote: "당신이란 책을 제대로 읽어봐.\n 그 속엔 네가 잊었던 문장이 많아",
    author: "<호프>",
  },
  {
    quote:
      "오늘의 아픔도 내일이면 과거일 뿐.\n 네가 뭘 원하든 결국 너는 나만의 것",
    author: "<엘리자벳>",
  },
  {
    quote: "내가 선 이 자리가 내가 살아갈 곳",
    author: "<인더하이츠>",
  },
  {
    quote: "그래도 내일은 우리 모두의 선물!",
    author: "<인더하이츠>",
  },
  {
    quote: "해 뜨기 전 새벽이 제일 어두운 법이잖아.",
    author: "<무한동력>",
  },
  {
    quote: "이해할 수 없어도 좋아할 수 있어요!\n 당신도 그래요. 내게는 그래요!",
    author: "<레드북>",
  },
  {
    quote: "끝까지 끝은 아니야",
    author: "<어쩌면 해피엔딩>",
  },
  {
    quote: "멈추지 말아요. 당신의 무한동력",
    author: "<무한동력>",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
