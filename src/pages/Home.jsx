import WelcomCart from "../components/WelcomCart";
import { useNavigate } from "react-router";
import {useEffect, useContext,useState} from 'react'
import { getQuestion } from "../services/api";
import { DataContext } from "../context/context";


export default function Home() {
  const navigate = useNavigate()
  const [isLoading,setIsLoading] = useState(false)

  const handleNaviagte =()=>{
    navigate("/Questionnaire/1")
    
  }

  const {setQuestions} = useContext(DataContext)

  useEffect(()=>{
    handleGetQuextion()
  }, [])

  const handleGetQuextion = ()=>{
    getQuestion().then(data=>{
      if(data){
        setQuestions(data)
        setIsLoading(true)
      }
    })
  }

  return ( <WelcomCart isLoading={isLoading} navig={handleNaviagte}/>
    )
}