import { useParams } from "react-router-dom"
import { adidasArr, AdidasItem } from "./Adidas"
import { Error404 } from "./Error404"
import { pumaArr, PumasItem } from "./Puma"

type CrossModels = {
    [key: string]: (AdidasItem[] | PumasItem[])
}

const crossModel: CrossModels = {
    adidas: adidasArr,
    puma: pumaArr
}

export const Model = () => {
    /* const params = useParams() */
    const { model, id } = useParams<{model: string, id: string}>()
  /*   const currentModel = adidasArr.find(el => el.id === Number(id)) */
    const currentModel = model
    ? crossModel[model].find(el => el.id === Number(id))
    : null

    return (

        <div style={{ textAlign: 'center' }}>
            {currentModel
                ? <>
                    <h2>{currentModel?.model}</h2>
                    <h3>{currentModel?.collection}</h3>
                    <h4>{currentModel?.price}</h4>
                    <img
                        src={currentModel?.picture}
                        alt={currentModel?.model}
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