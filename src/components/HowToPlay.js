import React from 'react'

const HowToPlay = (props) => {
    return (
        <div className="how-to-play">
        <h4>English</h4>
            <p>"The Cards" is a memory game that improves your english knowledge while you are playing. To win, you need to match Turkish and English cards which have same meaning. When you match correct cards, you will hear the english pronunciation of that word.</p>
            <h4>Türkçe</h4>
            <p>"The Cards" oynarken aynı zamanda ingilizce yeteneğinizi geliştirdiğiniz bir hafıza oyunudur. Kazanmak için aynı anlamı ifade eden Türkçe ve İngilizce iki kardı eşleştirmeniz lazım. İki kardı doğru eşleştirdiğinizde, kelimenin ingilizcesinin telafuzunu duyacaksınız.</p>
            <button onClick={() => {props.setScreen("welcome-page")}}>Go Back</button>
        </div>
    )
}

export default HowToPlay
