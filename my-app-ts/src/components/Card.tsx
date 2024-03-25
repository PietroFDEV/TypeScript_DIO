interface ICard {
    id: number,
    parag: string,
    detail: string
}

export const Card = ({ id, parag, detail }: ICard) => {
    return(
        <div>
            <h1>Card {id}</h1>
            <p>{parag}</p>
            <p>{detail}</p>
        </div>
    )
}