import appliances from '../images/appliances.png'
import bags from '../images/bags.png'
import shoes from '../images/shoes.png'
import slimFit from '../images/slim-fit-pants.png'
import jeans from '../images/jeans.png'

export const firstCategory = () =>{
    return (
        [
            {
                'id': 1,
                'image': bags,
                'text': 'Shop your bags'
            },
            {
                'id': 2,
                'image': shoes,
                'text': 'Shop your shoes'
            },
            {
                'id': 3,
                'image': jeans,
                'text': 'Shop your jeans'
            }
        ]
    )
}

export const secondCategory = () =>{
    return (
        [
            {
                'id': 1,
                'image': appliances,
                'text': 'Shop your appliances'
            },
            {
                'id': 2,
                'image': slimFit,
                'text': 'Shop your shirts'
            }
        ]
    )
}