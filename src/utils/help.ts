export interface ICardDataForm {
    name: string;
    zipCode: string;
    birthday: string;
    select: string;
    image: string;
    radio: string;
}

export interface CardsState {
    cards: string[]
}

export type CardInfo = {
    image: string;
    name: string;
    description: string;
    likes: number;
    comments: number;
    id: number;
}

export type GetCardInfoResponse = CardInfo[];

