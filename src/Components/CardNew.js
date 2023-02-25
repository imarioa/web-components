class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class","card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class","card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous") ;

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class","card__right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "../assets/foto-default.jpg";
        cardRight.appendChild(newsImage);


        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }
    styles(){
        const style = document.createElement("style");
        style.textContent = `
        .card{
            width: 50%;
            border: 1px solid gray;
            display: flex;
            flex-direction: row;
            -webkit-box-shadow: 9px 6px 21px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 9px 6px 21px 0px rgba(0,0,0,0.75);
            box-shadow: 9px 6px 21px 0px rgba(0,0,0,0.75);
            flex-direction: row;
            justify-content: space-beetwen;
        }
        
        .card__left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card__left > a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
        
        .card__left > p{
            color: gray;
        }
        
        .card__left > span {
            font-weight: 400;
        }
        img{
            width: 250px;
            height: 200px;
        }
        `
        return style;
    }
}

customElements.define('card-news', CardNews)
