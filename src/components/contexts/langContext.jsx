/* eslint-disable react/prop-types */
import { createContext } from "react"
export const LangContext=createContext('en')
// export default function LangContextProvider({chidern}) {
//     const [lang,setLang]=useState("EN")
//   return (
//     <>
//       <langContext.Provider value={{setLang,lang}}>
//         {chidern}
//       </langContext.Provider>
//     </>
//   )
// }
