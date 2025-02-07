import { useParams } from "react-router-dom"
import { adidasArr } from "./Adidas"
import { Error404 } from "./Error404"

export const Model = () => {
    const params = useParams()
    const currentModel = adidasArr.find(el => el.id === Number(params.id))

    return (

        <div style={{ textAlign: 'center' }}>
            {currentModel
                ? <>
                    <h2>{currentModel.model}</h2>
                    <h3>{currentModel.collection}</h3>
                    <h4>{currentModel.price}</h4>
                    <img
                        src={currentModel.picture}
                        alt={currentModel.model}
                        style={{ width: '200px', height: 'auto', marginRight: '10px' }}
                    />
                </>
                : <h2>Такой модели не существует</h2>

            }

        </div>
    )


   /*  const params = useParams()
    console.log(params)
    return (

        <div style={{ textAlign: 'center' }}>
            {adidasArr[Number(params.id)]
                ? <>
                    <h2>{adidasArr[Number(params.id)].model}</h2>
                    <h3>{adidasArr[Number(params.id)].collection}</h3>
                    <h4>{adidasArr[Number(params.id)].price}</h4>
                    <img
                        src={adidasArr[Number(params.id)].picture}
                        alt={adidasArr[Number(params.id)].model}
                        style={{ width: '200px', height: 'auto', marginRight: '10px' }}
                    />
                </>
                : <Error404 />

            }

        
    )
            </div> */
}