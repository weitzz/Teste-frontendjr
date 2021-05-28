import React ,{useEffect,useState} from 'react'
import api from '../../services/api'    
import {
    CardContainer,
    CardWrapper,
    CardTitle,
    DescriptionWrapper,
    Icon,
    IconService,
    InfoService,
    Button,
    CardFooter,
    ButtonLink} from './CardElements'

function Card () {
    const [task,setTask] = useState([])
    const [visible,setVisible] = useState(6)

    const showMore = () =>{
        setVisible(prevValue => prevValue + 6)
    }

    useEffect(()=>{
       async function loadApi(){

            const response = await api.get('/tasks')
            setTask(response.data)
        }
        loadApi()

    },[])

  return(
        <CardContainer>
            {task.slice(0 ,visible).map(task=>{
                return(
                    <CardWrapper key={task.id}>
                    <CardTitle>
                        <h3>{task.title}</h3>
                    </CardTitle>
                    <DescriptionWrapper >
                        <p>{task.description}</p>
                        <span>SP invisível</span>
                    </DescriptionWrapper>
                    <IconService>
                    <Icon src={task.image} alt={task.title}/>
                        </IconService>
                        <InfoService>
                        <p>2-6</p><span>HORAS SEMANA</span>
                        </InfoService>
                        <Button to='#'>{task.action}</Button>
                    <CardFooter>
                             <h3>{task.region}</h3>
                        </CardFooter>   
                    </CardWrapper> 
                )
            })}
            <ButtonLink onClick={showMore}>Todas as Oportunidades</ButtonLink>
    </CardContainer>

  )
           
    
}

export default Card
