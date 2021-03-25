import  { useContext, useEffect } from 'react'
import { UiContext } from '../context/UiContext'

export const useHide = (ocultar) => {
 
    const {showMenu,hideMenu} =   useContext(UiContext)

    useEffect(()=>{
        if(ocultar){
            hideMenu()
        }else{
            showMenu()
        }
    },[ocultar,hideMenu,showMenu])
   

}
