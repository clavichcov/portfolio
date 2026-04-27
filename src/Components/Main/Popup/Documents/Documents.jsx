import './Documents.css'
import { Cv } from './CV/Cv.jsx'
import { Certifies } from './Certifies/Certifies.jsx';
import { useState } from 'react';
export function Documents() {
  const [openTabs , setOpenTabs] = useState(1);
  
  
  function handleToggleTabs (type){
    if(openTabs==type){
      setOpenTabs(null);
    } else {
      setOpenTabs(type);
    }

  }
  return (
    <>
      <div className='documents'>
          <div className='tabs'>
            <div 
              className={openTabs === 1 ? 'tabs__cv_active':'tabs__cv'}
              onClick={()=>handleToggleTabs(1)}
              >
                Mi CV
            </div>
            <div 
              className={openTabs === 2 ? 'tabs__certifies_active':'tabs__certifies'}
              onClick={()=>handleToggleTabs(2)}
            >
              Mis Certificados
            </div>
            <div 
              className={openTabs === 3 ? 'tabs__projects_active':'tabs__projects'}
              onClick={()=>handleToggleTabs(3)}
              >
                Proyectos
              </div>
          </div>
          {openTabs === 1 && (
            <Cv />
          )}
          {openTabs === 2 && (
            <Certifies />
          )} 
      </div>
    </>
  );
}