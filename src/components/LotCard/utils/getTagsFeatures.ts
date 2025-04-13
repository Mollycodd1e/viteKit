import {ILot} from "../ui/LotCard.types.ts";

export const getTagsFeatures = ({
                                    loggia,
                                    isCorner,
                                    terrace,
                                    isPenthouse,
                                    isDoubleLevel,
                                }: Pick<ILot, 'loggia' | 'isDoubleLevel' | 'isPenthouse' | 'terrace' | 'isCorner'>) => {
    const arrResult = []
    if (loggia) arrResult.push({ text: 'Балкон' })
    if (isCorner) arrResult.push({ text: 'Угловая' })
    if (terrace) arrResult.push({ text: 'Терраса' })
    if (isPenthouse) arrResult.push({ text: 'Пентхаус' })
    if (isDoubleLevel) arrResult.push({ text: 'Двухуровневая' })

    return arrResult
}
